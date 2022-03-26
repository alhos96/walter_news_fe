import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./header.css";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import SlideFromTop from "../animations/SlideFromTop";

function Header() {
  // helpers
  const navigate = useNavigate();

  // local state
  const [isVisible, setIsVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(50);

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
            <img onClick={() => navigate("/")} src={logo} alt="logo" className="m-auto cursor-pointer" />
            <div
              tabIndex="0"
              onFocus={(e) => {
                e.target.placeholder = "";
                setButtonOpacity(100); // make button animate with border
              }}
              onBlur={(e) => {
                e.target.placeholder = "Search...";
                setButtonOpacity(50);
              }}
              className="search-wrapp m-auto mt-7 max-w-[400px] relative"
            >
              <input placeholder="Search..." className="search-input bg-transparent w-full" type="text" />

              <button className={`search-button absolute right-0 bottom-0 opacity-${buttonOpacity}`}>
                <img src={searchIcon}></img>
              </button>
            </div>
          </>
        }
      />
    </div>
  );
}

export default Header;
