import "./card.css";
import Button from "../button/Button";
import { useNavigate } from "react-router";

function Backdrop({ selectOneArticle }) {
  // helpers
  const navigate = useNavigate();

  // functions
  const goToFullArticle = () => {
    navigate("/article");
  };

  return (
    <div className="card-backdrop absolute z-10 w-full h-full flex justify-center items-center">
      <Button
        handler={() => {
          selectOneArticle(); // store clicked card data in redux
          goToFullArticle();
        }}
        text={"Read Full Article"}
      />
    </div>
  );
}

export default Backdrop;
