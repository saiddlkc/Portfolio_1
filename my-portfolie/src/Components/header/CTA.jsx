import React from "react";
import { Link } from "react-router-dom";
import LB from "../../assets/Said.pdf";

const CTA = () => {
  // const handleNavigateToGitHub = () => {
  //   const githubUrl = "/TestCV.pdf";
  //   window.open(githubUrl, "_blank");
  // };

  return (
    <div className="cta">
      <Link className="btn" to="/CVPage">
        Lebenslauf
      </Link>
      <a className="btn btn-primary" href={LB} target="_blank">
        Download
      </a>
    </div>
  );
};

export default CTA;
