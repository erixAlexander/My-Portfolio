import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/my_picture.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = ({ setActiveNav, inputRef }) => {
  return (
    <header id="header" ref={inputRef}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Erix Gutierrez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA setActiveNav={setActiveNav} />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="My Picture" />
        </div>
        <a href="#portfolio" className="scroll__down">
          My Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
