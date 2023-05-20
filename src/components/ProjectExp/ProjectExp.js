import React from "react";
import css from "./ProjectExp.module.scss";
import { workExp } from "../../utils/data";

export default function ProjectExp() {
    return (
        <div id="project" className={`paddings bg_primary ${css.wrapper}`}>
            {/* <a className="anchor" href="#work" id="work"></a> */}
            <div className={`innerWidth d-flex ${css.container}`}>
                <span className="primaryText yPaddings text-center heading">My Work Experience</span>
                <div className={`d-flex  ${css.projects}`}>
                    {workExp.map((exp, i) => {
                        return (
                            <div key={i} className={`d-flex ${css.proj}`}>
                                <div className={css.post}>
                                    <h1 className="pr-1">{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
