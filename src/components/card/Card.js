import noImage from "../../assets/images/noImage.png";
import Backdrop from "./Backdrop";

function Card({ imgUrl, title, description }) {
  const showDefaultImage = (e) => {
    e.target.src = noImage; // if url link is broken show default image
  };

  return (
    <div className="card max-w-xs min-w-[320px] min-h-[180px] max-h-[180px] relative overflow-hidden">
      <Backdrop />
      <img
        alt="image"
        className="saturate-100 brightness-[60%] min-w-full object-cover  min-h-[180px]"
        src={imgUrl || noImage /* Undefined url won't throw error. In that case show default image right upon render.*/}
        onError={(e) => showDefaultImage(e)}
      />
      <h1 className="text-lg font-medium leading-6 absolute top-2 p-1">{title}</h1>
      <p className="text-xs leading-4 absolute bottom-2 p-1 pl-2">{description}</p>
    </div>
  );
}

export default Card;
