import "./card.css";
import Button from "../button/Button";

function Backdrop() {
  return (
    <div className="card-backdrop absolute z-10 w-full h-full flex justify-center items-center">
      <Button handler={() => console.log("Read full")} text={"Read Full Article"} />
    </div>
  );
}

export default Backdrop;
