import React from "react";
import "./header.css";
import CTA from "./CTA";
// import Testme from "../../assets/rough-horn-2146181_1280.jpg";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/portfolio.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hallo Ich bin</h5>
        <h1>Said</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="" />
        </div>
        <a className="scroll__down" href="#contact">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
