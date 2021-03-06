const handleChange = (e, setUserInput) => {
  setUserInput(e.target.value);
};

const handleSubmit = (e, search, navigate) => {
  e.preventDefault();
  search();
  navigate("/"); // return to main if search was made while on article
};

const handleBlur = (e, setButtonOpacity) => {
  e.target.placeholder = "Search...";
  setButtonOpacity(50);
};

const handleFocus = (e, setButtonOpacity) => {
  e.target.placeholder = "";
  setButtonOpacity(100); // make button animate with border
};

const handleBackButtonClick = (dispatch, backToTopHeadlines, loadingStarted, setTopHeadlinesTrigger, searchInput, setUserInput) => {
  searchInput.current.value = ""; // clear input field when exiting search mode
  setUserInput(""); // clear user input controll when exiting search mode
  dispatch(loadingStarted());
  dispatch(backToTopHeadlines());
  setTopHeadlinesTrigger((prev) => !prev);
};

export { handleBlur, handleChange, handleFocus, handleSubmit, handleBackButtonClick };
