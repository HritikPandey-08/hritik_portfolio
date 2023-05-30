import React from "react";
import css from "./Portfolio.module.scss";
import { projectExperience, AboutMe } from "../../utils/data";

export default function PortfolioSection() {
  return (
    <div id="portfolio" className={css.wrapper}>
      <div className="text-center yPaddings">

      <span className="primaryText heading">About Me </span>
      </div>
      <div className={`paddings pt-0 innerWidth ${css.container}`}>
        {/* left side */}
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                {/* <div style={{ background: exp.bg }} className="text-center"> */}
                <div className="text-center">
                    <img src={exp.path} alt="" />
                  {/* <exp.icon size={25} color="white" /> */}

                </div>
                <div className="text-capitalize">
                  <span>{exp.name}</span>
                  <span className="secondaryText">{exp.projects} Projects</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* right */}
        <div className={`text-center ${css.rightSide}`}>
          {AboutMe.map((paragraph, i) => (
            <span className={`${css.para} secondaryText`} key={i}>
              {paragraph}
            </span>
          ))}
          {/* <div
            className={`text-center d-flex justify-content-evenly ${css.stats}`}
          >
            <div className={`d-flex text-center ${css.stat}`}>
              <span className="primaryText">285+</span>
              <span className="secondaryText">Project Completed</span>
            </div>
            <div className={`d-flex text-center ${css.stat}`}>
              <span className="primaryText">190+</span>
              <span className="secondaryText">Happy Clients</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
