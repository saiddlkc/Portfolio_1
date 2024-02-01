import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <Link className="btn" to="/CVPage">
        Lebenslauf
      </Link>
      <Link className="btn btn-primary" to="/ContactPage">
        Schreib mir
      </Link>
    </div>
  );
};

export default CTA;
