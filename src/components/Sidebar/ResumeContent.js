import React, { useState } from "react";
import { education, projects } from "../../utils/data";
import css from "./ResumeContent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function ResumeContent() {
  const [isEducationCollapsed, setIsEducationCollapsed] = useState(true);
  const [isProjectsCollapsed, setIsProjectsCollapsed] = useState(true);

  const toggleEducation = () => {
    setIsEducationCollapsed(!isEducationCollapsed);
  };

  const toggleProjects = () => {
    setIsProjectsCollapsed(!isProjectsCollapsed);
  };

  return (
    <div className={css.wrapper}>
      <div className={`paddings innerWidth ${css.container}`}>
        <div className="heading primaryText text-center mb-3">
          <span>Resume</span>
        </div>
        <div className={css.leftSide}>
          <div>
            <span
              className={`mx-3 primaryText ${css.title}`}
              onClick={toggleEducation}
            >
              {isEducationCollapsed ? (
                <FontAwesomeIcon icon={faAngleRight} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}{" "}
              Education
            </span>
            <div
              className={`mx-3 ${css.contentCollapsible} ${isEducationCollapsed ? "" : css.collapsed
                }`}
              id="education"
            >
              {education.map((edu, i) => (
                <div key={i}>
                  <div className={css.academic}>
                    <div className={`secondaryText ${css.name}`}>{edu.name}</div>
                    <div className={`text-center ${css.year}`}>{edu.year}</div>
                  </div>
                  <div className={`${css.degree}`}>{edu.degree}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span
              className={`mx-3 primaryText ${css.title}`}
              onClick={toggleProjects}
            >
              {isProjectsCollapsed ? (
                <FontAwesomeIcon icon={faAngleRight} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              )}{" "}
              Projects
            </span>
            <div
              className={`mx-3 ${css.contentCollapsible} ${isProjectsCollapsed ? "" : css.collapsed
                }`}
              id="projects"
            >
              {projects.map((proj, i) => (
                <div key={i}>
                  <div className={css.academic}>
                    <div className={`secondaryText ${css.name}`}>{proj.title}</div>
                    <div className={`${css.year}`}>{proj.year}</div>
                  </div>
                  <div className={`${css.techno}`}>
                    Technology Used: {proj.technology}
                  </div>
                  <div className={`${css.degree}`}>{proj.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
