import React from "react";
import "./portfolio.css";
import Immo from "../../assets/Immohub.JPG";
import Spotify from "../../assets/spotify.JPG";
import Netflix from "../../assets/Netflix.JPG";
import Quiz from "../../assets/Quiz.JPG";
import Wetter from "../../assets/Wetter.JPG";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: Immo,
      title: "Immohub",
      github: "https://github.com/saiddlkc/Immo_Hub",
      demo: "https://verc-test-neon.vercel.app/",
    },
    {
      id: 2,
      image: Spotify,
      title: "Spotify Clone",
      github: "https://github.com/saiddlkc/dastify-klonen",
      demo: "https://verc-test-neon.vercel.app/",
    },
    {
      id: 3,
      image: Netflix,
      title: "Netflix Clone",
      github: "https://github.com/saiddlkc/NetFlex",
      demo: "https://verc-test-neon.vercel.app/",
    },
    {
      id: 4,
      image: Wetter,
      title: "Wetter App",
      github: "https://github.com/saiddlkc",
      demo: "https://verc-test-neon.vercel.app/",
    },
    {
      id: 5,
      image: Quiz,
      title: "Quiz App",
      github: "https://github.com/saiddlkc",
      demo: "https://verc-test-neon.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.image} alt="" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
