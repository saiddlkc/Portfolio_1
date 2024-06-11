import React from "react";
import "./portfolio.css";
import Immo from "../../assets/Immohub.JPG";
import Spotify from "../../assets/spotify.JPG";
import Netflix from "../../assets/Netflix.JPG";
import Quiz from "../../assets/Quiz.JPG";
import Wetter from "../../assets/Wetter.JPG";
import Workout from "../../assets/workoutbuddy.JPG";
import Amazon from "../../assets/amazon.JPG";

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
      demo: "https://dastify-klonen.vercel.app/",
    },
    {
      id: 3,
      image: Amazon,
      title: "Amazon Clone",
      github: "https://github.com/saiddlkc/Amazon-Clone",
      demo: "https://amazon-react-clone-one.vercel.app/",
    },
    {
      id: 4,
      image: Netflix,
      title: "Netflix Clone",
      github: "https://github.com/saiddlkc/NetFlex",
      demo: "https://net-flex.vercel.app/login.html",
    },
    {
      id: 5,
      image: Wetter,
      title: "Wetter App",
      github: "https://github.com/saiddlkc/WetterApp",
      demo: "https://weather-app-iota-fawn-94.vercel.app/",
    },
    {
      id: 6,
      image: Quiz,
      title: "Quiz App",
      github: "https://github.com/saiddlkc",
      demo: "https://github.com/saiddlkc/Projekt-Quiz",
    },
    {
      id: 7,
      image: Workout,
      title: "Workout Buddy",
      github: "https://github.com/saiddlkc/Mern-stack",
      demo: "https://mern-stack-gamma-nine.vercel.app/login",
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
              <img src={project.image} alt="" className="img__container" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="blank">
                Github
              </a>
              <a href={project.demo} className="btn btn-primary" target="blank">
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
