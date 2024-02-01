import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Testme from "../../assets/rough-horn-2146181_1280.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Testme} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Learning</small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20 Clients Worldwide</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            optio tempore maxime vitae veritatis praesentium distinctio iure,
            necessitatibus recusandae aperiam hic sunt! Excepturi perferendis,
            ad repudiandae culpa incidunt dolorem voluptate.
          </p>
          <Link to="/ContactPage" className="btn btn-primary">
            Connect with ME
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
