import React from "react";
import Logo from "../../img/logo_wealth.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  let navigate = useNavigate();
  function backHome(e) {
    navigate("/hrnet");
  }
  return (
    <header>
      <Navigation></Navigation>
      <div className="logoSection" onClick={backHome}>
        <h1 className="softwareName">HRnet</h1>
        <img src={Logo} alt="company log" className="logo" />
      </div>
    </header>
  );
};

export default Header;
