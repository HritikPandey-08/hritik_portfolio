import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import css from "./Resume.module.scss";
import { Resume } from "../../utils/data"; // Import the Resume object
// import { Link } from "react-scroll";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUserGraduate,
//   faBriefcase,
//   faCode,
// } from "@fortawesome/free-solid-svg-icons";

import "../Sidebar/Sidebar.css";
import "./ContentArea";

const ResumeDetails = () => {
  const [activeField, setActiveField] = useState(0);
  const fields = ["Education", "Projects", "Programming Skill"];

  const handleFieldClick = (index) => {
    setActiveField(index);
  };

  const getFieldData = () => {
    if (activeField === 0) {
      return Resume.education;
    } else if (activeField === 1) {
      return Resume.projects;
    } else if (activeField === 2) {
      return Resume.programmingSkill;
    }

    return [];
  };

  return (
    <>
      <div className={`${css.Resume} paddings innerWidth`}>
        <div className="d-flex justify-content-around">
          <Sidebar
            fields={fields}
            activeField={activeField}
            onFieldClick={handleFieldClick}
          />
          <div className="sidebar d-flex">
            <div className="content_Section">
              <ContentArea fieldData={getFieldData()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeDetails;
