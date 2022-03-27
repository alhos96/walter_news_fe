const handleChange = (e, setUserInput) => {
  setUserInput(e.target.value);
};

const handleSubmit = (e, search, navigate) => {
  e.preventDefault();
  search();
  navigate("/");
};

const handleBlur = (e, setButtonOpacity) => {
  e.target.placeholder = "Search...";
  setButtonOpacity(50);
};

const handleFocus = (e, setButtonOpacity) => {
  e.target.placeholder = "";
  setButtonOpacity(100); // make button animate with border
};

export { handleBlur, handleChange, handleFocus, handleSubmit };
