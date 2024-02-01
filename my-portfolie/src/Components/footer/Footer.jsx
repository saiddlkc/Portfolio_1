import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link href="#" className="footer__logo">
        Said Dlkc
      </Link>
      <ul className="permalinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutPage">About</Link>
        </li>
        <li>
          <Link to="/ExperiencePage">Experience</Link>
        </li>
        <li>
          <Link to="/PortfolioPage">Portfolio</Link>
        </li>
        <li>
          <Link to="/TestiPage">Testimonials</Link>
        </li>
        <li>
          <Link to="/ContactPage">Contact</Link>
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
