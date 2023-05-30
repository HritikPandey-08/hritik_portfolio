import React from "react";
import css from "./ContactMe.module.scss";
import { Element } from "react-scroll";
const ContactMe = () => {
  return (
    <>
      <Element name="contactme">
        <div className={`paddings bg_primary ${css.wrapper}`}>
          <div className={css.container}>
            <div className="heading primaryText text-center mb-3">
              <span>Contact Me</span>
            </div>
            <div className={`${css.contactForm} d-flex justify-content-around`}>
              <div className="leftSide justify-content-between">
                <div className={css.leftText}>
                  <span className="secondaryText">
                    Let's discuss on something <br />
                    <span> cool </span> together
                  </span>
                </div>
                <div className={`${css.contact} d-flex flex-column`}>
                  <div className={css.contact_detail}>
                    <img src="./mail.png" alt="mail" />
                    <span><a href="mailto:pandeyhritik08@gmail.com">pandeyhritik08@gmail.com</a></span>
                  </div>
                  {/* <div className={css.contact_detail}>
                    <img src="./call.png" alt="call" />
                    <span> +23456 7762</span>
                  </div> */}
                  <div className={css.contact_detail}>
                    <img src="./address.png" alt="address" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                </div>
                <div className={css.links}>
                  {/* <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./facebook.png" alt="facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./instagram.png" alt="instagram" />
                  </a> */}
                  <a
                    href="https://github.com/HritikPandey-08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./github.png" alt="github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hritik-pandey-0a8838232/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./linkedin.png" alt="linkedin" />
                  </a>
                </div>
              </div>
              <div className={css.rightSide}>
                <form>
                  <div className={css.form_group}>
                    <h5>Name</h5>
                    <input
                      type="text"
                      id="name"
                      className="form-control w-100"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className={css.form_group}>
                    <h5>Message</h5>
                    <textarea
                      id="message"
                      className="px-2 py-1 w-100 form-control"
                      rows={"3"}
                      placeholder="Message"
                      required
                    />
                  </div>
                  <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=pandeyhritik08@gmail.com&body=Hi Hritik,%0A%0A%0ARegards,%0A`} className="btn w-100" target="_blank" rel="noreferrer">Send Email
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default ContactMe;
