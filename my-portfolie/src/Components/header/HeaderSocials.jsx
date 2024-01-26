import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sait-ali-dalkilic-898508279/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/saiddlkc?tab=repositories" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
