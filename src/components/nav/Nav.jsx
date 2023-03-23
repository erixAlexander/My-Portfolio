import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail, BiBriefcase } from "react-icons/bi";
import { BsFillHeartPulseFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = ({ activeNav }) => {
  return (
    <nav>
      <Link
        // className={`${activeNav === "header" ? "active" : ""}`}
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <AiOutlineHome />
      </Link>

      <Link
        // className={`${activeNav === "about" ? "active" : ""}`}
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <AiOutlineUser />
      </Link>
      <Link
        // className={`${activeNav === "experience" ? "active" : ""}`}
        activeClass="active"
        to="experience"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <BiBook />
      </Link>
      {/* <Link
        className={`${activeNav === "services" ? "active" : ""}`}
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <BsFillHeartPulseFill />
      </Link> */}
      <Link
        // className={`${activeNav === "portfolio" ? "active" : ""}`}
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <BsFillHeartPulseFill />
      </Link>
      <Link
        // className={`${activeNav === "contact" ? "active" : ""}`}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <BiMessageDetail />
      </Link>
    </nav>
  );
};

export default Nav;
