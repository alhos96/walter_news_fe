import { useState } from "react";
import { useDispatch } from "react-redux";

import noImage from "../../assets/images/noImage.png";
import { articleSelected } from "../../store/newsSlice";
import Spinner from "../spinner/Spinner";
import Backdrop from "./Backdrop";
import FadeIn from "../animations/FadeIn";

function Card(props) {
  // helpers
  const dispatch = useDispatch();

  // local state
  const [isImageLoading, setIsImageLoading] = useState(true);

  // functions
  const showDefaultImage = (e) => {
    e.target.src = noImage; // if url link is broken show default image
  };

  const selectOneArticle = () => {
    // when user clicks on article it's data will be stored in redux
    dispatch(articleSelected(props));
    // store it in local storage also for backup in case of refresh
    localStorage.setItem("articleData", JSON.stringify(props));
  };

  return (
    <FadeIn
      isVisible={props.title}
      children={
        <div className="card min-w-[320px] min-h-[180px] max-h-[180px] relative overflow-hidden">
          <Backdrop selectOneArticle={selectOneArticle /* pass function to button */} />

          {isImageLoading ? <Spinner /> : null}

          <img
            alt="card banner"
            className={`saturate-100 brightness-[60%] min-w-full object-cover  min-h-[180px] ${isImageLoading ? "hidden" : ""}`}
            src={props.imgUrl || noImage /* Undefined url won't throw error. In that case show default image right upon render.*/}
            onError={(e) => showDefaultImage(e)}
            onLoad={(e) => setIsImageLoading(false)}
          />

          <h1 className="text-lg font-medium leading-6 absolute top-2 p-1">{props.title}</h1>

          <p className="text-xs leading-4 absolute bottom-2 p-1 pl-2">{props.description}</p>
        </div>
      }
    />
  );
}

export default Card;
