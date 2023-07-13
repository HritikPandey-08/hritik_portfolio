import React from "react";
import css from "./ProjectExp.module.scss";
import { projects } from "../../utils/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectExp() {
    return (
        <div id="project" className={`paddings bg_primary ${css.wrapper}`}>
            <div className={`innerWidth d-flex ${css.container}`}>
                <span className="primaryText yPaddings text-center heading">My Personal Projects</span>
                <div className={`d-flex  ${css.projects}`}>
                    {projects.map((exp, i) => {
                        return (
                            <div key={i} className={`d-flex ${css.proj}`}>
                                <div className={css.post}>
                                    <h1 className="pr-1">{exp.title}</h1>
                                    <p>{exp.month}</p>
                                </div>
                                <div className={css.role}>
                                    <h2>{exp.technology}</h2>
                                    <p>{exp.shortDesc}</p>
                                    <p><a href={exp.github} target="_blank" rel="noreferrer">View Project <FontAwesomeIcon icon={faArrowRight} /></a></p>
                                </div>
                            </div>
                        );
                    })}
                    <div className={css.progressbar}>
                        <div className={css.line}></div>
                        <div>
                            <div
                                className={css.circle}
                                style={{ background: "#286F6C" }}
                            ></div>
                        </div>
                        <div>
                            <div
                                className={css.circle}
                                style={{ background: "#F2704E" }}
                            ></div>
                        </div>
                        <div>
                            <div
                                className={css.circle}
                                style={{ background: "#EEC048" }}
                            ></div>
                        </div>
                        <div>
                            <div
                                className={css.circle}
                                style={{ background: "#a6ce00" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
