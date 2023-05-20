import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar-icons">
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === "education" ? "true" : "false"}
            onSetActive={() => handleSetActiveSection("education")}
          >
            <FontAwesomeIcon icon={faUserGraduate} />
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === "projects" ? "true" : "false"}
            onSetActive={() => handleSetActiveSection("projects")}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
          <Link
            to="programmingSkill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            active={activeSection === "programmingSkill" ? "true" : "false"}
            onSetActive={() => handleSetActiveSection("programmingSkill")}
          >
            <FontAwesomeIcon icon={faCode} />
          </Link>
        </div>
      </div>
      <div className="content-container">
        <div className="content-section" id="education">
          <h2>Education</h2>
          {/* Education content */}
        </div>
        <div className="content-section" id="projects">
          <h2>Projects</h2>
          {/* Projects content */}
        </div>
        <div className="content-section" id="programmingSkill">
          <h2>Programming Skills</h2>
          {/* Programming skills content */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
