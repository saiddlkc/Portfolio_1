import React from "react";
import "./experience.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <BiLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Average</small>
              </div>
            </article>
            <article className="experience__details">
              <TbSql className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Good</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Noob</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
