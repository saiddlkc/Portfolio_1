import React, { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import { TbReportAnalytics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <NavLink
        to="/"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/AboutPage"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </NavLink>
      <NavLink
        to="/ExperiencePage"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaBook />
      </NavLink>
      <NavLink
        to="/PortfolioPage"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GoProjectSymlink />
      </NavLink>
      <NavLink
        to="/TestiPage"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <TbReportAnalytics />
      </NavLink>
      <NavLink
        to="/ContactPage"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoMdMail />
      </NavLink>
    </nav>
  );
};

export default Nav;
