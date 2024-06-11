import React from "react";
import { Link } from "react-router-dom";
import LB from "../../assets/Saiddd.pdf";

const CTA = () => {
  // const handleNavigateToGitHub = () => {
  //   const githubUrl = "/TestCV.pdf";
  //   window.open(githubUrl, "_blank");
  // };

  return (
    <div className="cta">
      <a className="btn" href="/">
        Lebenslauf
      </a>
      <a className="btn btn-primary" href={LB} target="blank">
        Download
      </a>
    </div>
  );
};

export default CTA;
