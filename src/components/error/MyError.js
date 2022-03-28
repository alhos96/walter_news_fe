import notFoundIcon from "../../assets/images/notfound-icon.svg";

function MyError({ errorMessage }) {
  return (
    <div className="absolute top-40 max-w-[1000px] lg:left-[50%] lg:translate-x-[-50%] sm:w-full flex flex-col justify-center items-center">
      <img className="h-28 mb-2" alt="not found" src={notFoundIcon} />
      <p className="text-xl">{errorMessage}</p>
    </div>
  );
}

export default MyError;
