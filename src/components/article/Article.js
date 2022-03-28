import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DateTime } from "luxon";

import "./article.css";
import noImage from "../../assets/images/noImage.png";
import Spinner from "../spinner/Spinner";
import FadeIn from "../animations/FadeIn";

function Article() {
  // global state
  const reduxArticle = useSelector((state) => state.news.article);
  const backupArticle = JSON.parse(localStorage.getItem("articleData")); // on page refresh get last viewed article from local storage

  // local state
  const [articleToDisplay, setArticleToDisplay] = useState(null);

  // functions
  const showDefaultImage = (e) => {
    e.target.src = noImage; // if url link is broken show default image
  };

  // side effects
  useEffect(() => {
    if (reduxArticle.length > 0 /*empty array will not be falsy*/) {
      setArticleToDisplay(reduxArticle);
    } else {
      setArticleToDisplay(backupArticle); // data pulled from local storage
    }
    // eslint-disable-next-line
  }, []);

  // format date correctly
  const publishedAt = DateTime.fromISO(articleToDisplay?.publishedAt);
  const formatedDate = publishedAt.toLocaleString(DateTime.DATETIME_SHORT);

  if (!articleToDisplay) return <Spinner />;

  return (
    <FadeIn
      isVisible={true}
      children={
        <div className="article absolute top-44 p-4 sm:w-full lg:left-[50%] max-w-[800px] xl:pl-20 xl:pr-20 lg:translate-x-[-50%]">
          <h1 className="text-xl leading-6">{articleToDisplay.title}</h1>

          <p className="text-xs text-slate-500 mt-1">
            {articleToDisplay?.author || "N.N."} • {formatedDate}
          </p>

          <p className="text-xs text-slate-500 mt-1 block">Source: {articleToDisplay?.source.name || "Unknown"}</p>

          <img
            alt={articleToDisplay.title}
            className="w-full max-w-[700px] object-cover m-auto min-h-[180px] max-h-[350px] mt-3"
            src={
              articleToDisplay?.imgUrl || noImage /* Undefined url won't throw error. In that case show default image right upon render.*/
            }
            onError={(e) => showDefaultImage(e)}
          />

          <p className="text-sm mt-5 text-slate-600">{articleToDisplay?.description}</p>

          <p className="text-[14px] mt-5">{articleToDisplay.content}</p>
        </div>
      }
    />
  );
}

export default Article;
