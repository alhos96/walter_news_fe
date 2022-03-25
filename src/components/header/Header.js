import "./header.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className="header p-5 h-48">
      <img src={logo} alt="logo" className="m-auto" />
    </div>
  );
}

export default Header;
