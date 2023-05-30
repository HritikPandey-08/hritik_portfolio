import React from "react";
import css from "./hero.module.scss";

export default function HeroSection() {
  return (
    <div id="home" className={`paddings bg_primary ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* UpperSection */}
        <div className={`${css.upperSection} text-center`}>
          <span className="primaryText text-nowrap">
            Hey There,
            <br />
            I'm Hritik.
          </span>
          <span className="secondaryText text-nowrap">
            {" "}
            I design beautiful simple things,
            <br />
             And I love what i do{" "}
          </span>
        {/* Email */}

        <a className={css.email} href="mailto:pandeyhritik08@gmail.com">
          pandeyhritik08@gmail.com
        </a>
        </div>

        {/* Person image */}

        <div className={css.person_img}>
          <img src="./new_avtar.png"  alt="" />
        </div>
      </div>
    </div>
  );
}
