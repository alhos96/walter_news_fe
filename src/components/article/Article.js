import { useSelector } from "react-redux";

import "./article.css";
import noImage from "../../assets/images/noImage.png";

function Article() {
  // global state
  const article = useSelector((state) => state.news.article);

  // functions
  const showDefaultImage = (e) => {
    e.target.src = noImage; // if url link is broken show default image
  };

  return (
    <div className="article absolute top-28 p-4">
      <h1 className="text-xl leading-6">{article.title}</h1>

      <p className="text-xs text-slate-500 mt-1">
        {article?.author || "N.N."} • {article?.publishedAt}
      </p>

      <img
        alt={article.title}
        className="saturate-100 brightness-[60%] min-w-full object-cover  min-h-[180px] mt-3"
        src={article?.imgUrl || noImage /* Undefined url won't throw error. In that case show default image right upon render.*/}
        onError={(e) => showDefaultImage(e)}
      />

      <p className="text-xs text-slate-500 mt-1">Source: {article?.source.name || "Unknown"}</p>

      <p className="text-sm mt-5 text-slate-600">{article?.description}</p>

      <p className="text-[14px] mt-5">{article.content}</p>
    </div>
  );
}

export default Article;
