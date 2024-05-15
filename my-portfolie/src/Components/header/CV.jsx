// CV.jsx
import React from "react";
import "./CV.css";

const CV = () => {
  return (
    <div>
      <h1>Lebenslauf</h1>
      <div>
        <div className="maincontainer">
          <div className="mini-container">
            <h3>Ausbildung</h3>
            <ul>
              <li>
                09/2012 - 07/2017: -Fachhochschulreife Hermann-Hesse-Gymnasium
              </li>
              <li>
                04/2020 - 09/2021: Informations- und Kommunikationstechnik HTW
              </li>
              <li>05/2023 - 06/2023: Erprobungscenter für Digitale Berufe</li>
              <li>07/2023-07/2024: Fullstack Web Developer DCI</li>
            </ul>
          </div>

          <div className="mini-container">
            <h3>Berufserfahrung</h3>
            <ul>
              <li>03/2017-11/2017: Emnitel Callcenter (Marktforschung)</li>
              <li>
                12/2017 - 03/2018: Datenerfasser/IT-Support bei Zalando S.E.
              </li>
              <li>
                03/2018 - 03/2019: Content Managment/HelpDesk bei Zalando S.E.
              </li>
              <li>05/2019 - 12/2019: Dispatcher bei Amazon Logistics</li>
              <li>04/2020-03/2022: Gastronomie/Kurier bei Lieferando</li>
            </ul>
          </div>

          <div className="mini-container">
            <h3>Praktika</h3>
            <ul>
              <li>06/2014-08/2014: Projex IT-Handel und Technik</li>
              <li>08/17-07/18: Zuerich-Hort Grundschule FSJ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
