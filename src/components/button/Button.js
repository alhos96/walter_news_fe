import "./button.css";

function Button({ handler, children }) {
  return (
    <div className="w-full text-center p-5">
      <button onClick={handler}>{children}</button>
    </div>
  );
}

export default Button;
