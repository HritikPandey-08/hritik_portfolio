import React from "react";
import css from "./Heros.module.scss"
export default function Hero() {
  return (
    <div className={`bg_primary ${css.wrapper}`}>
      <div className={`paddings  ${css.container}`}>
        <div className={`d-flex text-center ${css.heroSection}`}>
          <div className={`${css.leftSection}`}>
            <div className="greeting">
              <span className="primaryText">
                {" "}
                Hey There,
                <br />
                I'm Hritik.
              </span>
            </div>
            <div className="mail">
              <a className={css.email} href="mailto:pandeyhritik08@gmail.com">
                pandeyhritik08@gmail.com
              </a>
            </div>
            <div className="experience">
            <div className="primaryText">1</div>
              <div className="secondaryText">
                <div>Years</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
          <div className="personImage">
            <img className="" src="./person.png" alt="" />
          </div>
          <div className="rightSection">
            <div className="message">
              <span className="secondaryText ">
                {" "}
                I design beautiful
                <br />
                simple things, And
                <br/>
                 I love what i do{" "}
              </span>
            </div>
            <div className="certifcation">
              <img src="./certificate.png" alt="" />
              <span>CERTIFIED PROFATIONAL</span>
              <span>UI/UX DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
