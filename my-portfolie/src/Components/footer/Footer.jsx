import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Said Dlkc
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience"></a>Experience
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#testimonials"></a>Testimonials
        </li>
        <li>
          <a href="#contact"></a>Contact
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://www.X.com/">X</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Said Dlkc All rights open for everyone.</small>
      </div>
    </footer>
  );
};

export default Footer;
