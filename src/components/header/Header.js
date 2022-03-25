import { useState, useEffect } from "react";

import "./header.css";
import logo from "../../assets/images/logo.svg";
import SlideFromTop from "../animations/SlideFromTop";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="header p-5 h-48">
      <SlideFromTop isVisible={isVisible} children={<img src={logo} alt="logo" className="m-auto" />} />
    </div>
  );
}

export default Header;
