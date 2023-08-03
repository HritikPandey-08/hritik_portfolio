import React from "react";
import css from "./ProjectExp.module.scss";
import { projects } from "../../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectExp() {
    const colors = ["#286F6C", "#F2704E", "#EEC048", "#a6ce00","#104da5"];

    return (
        <div id="project" className={`paddings bg_primary ${css.wrapper}`}>
            <div className={`innerWidth ${css.container}`}>
                <div className="text-center yPaddings ">
                    <span className="primaryText heading">My Personal Projects</span>
                </div>
                <div className={`${css.projects}`}>
                    {projects.map((exp, i) => {
                        const progressBarStyle = {
                            background: colors[i % colors.length], // To cycle through the colors if there are more projects than colors
                        };

                        return (
                            <div key={i} className={`${css.proj}`}>
                                <div className={css.post}>
                                    <h1>{exp.title}</h1>
                                    <p>{exp.month}</p>
                                </div>
                             
                                <div className={css.role}>
                                    <h2>{exp.technology}</h2>
                                    <p>{exp.shortDesc}</p>
                                    <p>
                                        <a href={exp.github} target="_blank" rel="noreferrer">
                                            View Project <FontAwesomeIcon icon={faArrowRight} />
                                        </a>
                                    </p>
                                </div>
                                <div className={css.progressbar}>
                                    <div className={`${css.line} match-height`}>
                                    </div>
                                    <div>
                                        <div className={css.circle} style={progressBarStyle}></div>
                                    </div>
                                </div>
                              
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
