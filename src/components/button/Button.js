import "./button.css";

function Button({ handler, text }) {
  return (
    <div className="w-full text-center p-5">
      <button onClick={handler}>{text}</button>
    </div>
  );
}

export default Button;
