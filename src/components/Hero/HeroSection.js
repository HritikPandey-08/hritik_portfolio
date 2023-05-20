import React from "react";
import css from "./hero.module.scss";
export default function HeroSection() {
  return (
    <div id="home" className={`paddings bg_primary ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        {/* UpperSection */}
        <div className={`${css.upperSection}`}>
          <span className="primaryText mb-3 mb-md-0 me-md-3 mt-2 ">
            {" "}
            Hey There,
            <br />
            I'm Hritik.
          </span>
          <span className="secondaryText ">
            {" "}
            I design beautiful simple
            <br />
            things, And I love what i do{" "}
          </span>
        </div>

        {/* Person image */}

        <div className={css.person_img}>
          <img className="text-center" src="./person.png" alt="" />
        </div>

        {/* Email */}

        <a className={css.email} href="mailto:pandeyhritik08@gmail.com">
          pandeyhritik08@gmail.com
        </a>

        {/* LowerSection */}
        <div className={css.lowerSection}>
          <div className={css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>

          {/* Certification */}

          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFATIONAL</span>
            <span>UI/UX DESIGNER</span>
          </div>
        </div>
      </div>
    </div>
  );
}
