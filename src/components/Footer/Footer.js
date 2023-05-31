import React from "react";
import css from "./Footer.module.scss";
import { Link  } from "react-scroll";

export default function Footer() {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div
        className={`innerWidth yPaddings d-flex text-center ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=pandeyhritik08@gmail.com&body=Hi Hritik,%0A%0A%0ARegards,%0A`}>saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Mumbai, Maharashtra, India</p>
          </div>

          <ul className={`${css.menu} p-0`}>
            <li>
              <Link to="home" smooth={true} duration={500} offset={-100}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-95}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="languages"
                smooth={true}
                duration={500}
                offset={-100}
              >
                languages
              </Link>
            </li>
            <li>
              <Link
                to="contactme"
                smooth={true}
                duration={500}
                offset={-100}
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
