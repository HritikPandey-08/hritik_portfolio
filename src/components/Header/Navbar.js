import React, { useEffect, useState } from "react";
import css from "./Header.module.scss";

import { Link  } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${css.wrapper} `}>
      <div
        className={`py-2 ${css.container}  ${isScrolled ? css.boxShadow : ""} `}
      >
        <nav className={`navbar navbar-expand-lg navbar-light`}>
          <Link
            to="home"
            className={`${css.portfolio_name}`}
            smooth={true}
            duration={500}
            offset={-100}
          >
            Hritik
          </Link>
          <button
            className={`navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <div
            className={`${css.collapse} navbar-collapse text-center`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
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
                  Portfolio
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
                  contactme
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
