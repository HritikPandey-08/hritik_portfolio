import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import css from "./Resume.module.scss";
import { Resume } from "../../utils/data"; // Import the Resume object
import { Link, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import "../Sidebar/Sidebar.css";

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
          <ContentArea fieldData={getFieldData()} />
        </div>
      </div>
      <div className="sidebar d-flex">
        <div className="sidebar-icons">
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeField === "education" ? "true" : "false"}
            onSetActive={() => handleFieldClick("education")}
          >
            <FontAwesomeIcon icon={faUserGraduate} />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeField === "projects" ? "true" : "false"}
            onSetActive={() => handleFieldClick("projects")}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
          <Link
            to="programmingSkill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeField === "programmingSkill" ? "true" : "false"}
            onSetActive={() => handleFieldClick("programmingSkill")}
          >
            <FontAwesomeIcon icon={faCode} />
          </Link>
        </div>
        <div className="sidebar-content">
          <Element name="education" className="content-section">
            <h2>Education</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              accumsan turpis quis lectus malesuada dapibus.
            </p>
            {/* Rest of the education content */}
          </Element>
          <Element name="projects" className="content-section">
            <h2>Projects</h2>
            <p>
              Curabitur cursus, ipsum ut bibendum dignissim, justo odio porta
              velit, vitae aliquam arcu libero eu erat.
            </p>
            {/* Rest of the projects content */}
          </Element>
          <Element name="programmingSkill" className="content-section">
            <h2>Programming Skills</h2>
            <p>
              Sed aliquam odio ipsum, eu pellentesque metus tristique a. Aenean
              aliquet dapibus sapien, vitae maximus magna.
            </p>
            {/* Rest of the programming skills content */}
          </Element>
        </div>
      </div>
    </>
  );
};

export default ResumeDetails;
