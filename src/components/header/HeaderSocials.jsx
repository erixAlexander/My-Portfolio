import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a title="Linkedin"
        href="https://www.linkedin.com/in/erix-gutierrez-652a75201/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a title="Github" href="https://https://github.com/erixAlexander.com" target="_blank">
        <FaGithub />
      </a>
      <a title="CodeWars" href="https://www.codewars.com/users/erixAlexander" target="_blank">
        <SiCodewars />
      </a>
    </div>
  );
};

export default HeaderSocials;
