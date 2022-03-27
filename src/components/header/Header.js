import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import "./header.css";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import SlideFromTop from "../animations/SlideFromTop";
import { handleApiCall, config } from "../../helpers";
import { searchedHeadlinesRecieved } from "../../store/newsSlice";

function Header() {
  // helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { endpoints, get } = config;

  // local state
  const [isVisible, setIsVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(50);
  const [userInput, setUserInput] = useState("");

  // functions
  const search = () => {
    handleApiCall(`${endpoints.everything}?q=${userInput}`, get, dispatch, searchedHeadlinesRecieved);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    navigate("/");
  };

  const handleBlur = (e) => {
    e.target.placeholder = "Search...";
    setButtonOpacity(50);
  };

  const handleFocus = (e) => {
    e.target.placeholder = "";
    setButtonOpacity(100); // make button animate with border
  };

  // side effects
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="header p-5 h-60 relative">
      <SlideFromTop
        isVisible={isVisible}
        children={
          <>
            <img className="m-auto cursor-pointer" src={logo} alt="logo" onClick={() => navigate("/")} />

            <form
              tabIndex="0"
              className="search-wrapp m-auto mt-7 max-w-[400px] relative"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input className="search-input bg-transparent w-full" placeholder="Search..." type="text" onChange={(e) => handleChange(e)} />

              <button className={`search-button absolute right-0 bottom-0 opacity-${buttonOpacity} px-4 py-1`} type="submit">
                <img src={searchIcon} />
              </button>
            </form>
          </>
        }
      />
    </div>
  );
}

export default Header;
