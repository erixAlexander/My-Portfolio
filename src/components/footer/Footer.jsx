import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Erix
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://facebook.com/erix.gutierrez.9">
          <FaFacebookF />
        </a>
        <a target="_blank" href="https://instagram.com/erixgutierrez">
          <FiInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/erix-gutierrez-652a75201/"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Erix Gutierrez. All rigths reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
