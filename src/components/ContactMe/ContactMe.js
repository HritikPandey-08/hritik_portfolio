import React, { useState } from "react";
import css from "./ContactMe.module.scss";
import { Element } from "react-scroll";
const ContactMe = () => {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions, such as sending the data to a server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form inputs
    setName("");
    setEmail("");
    setMessage("");
  };

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
                  <a
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
                  </a>
                  <a
                    href="https://github.com/HritikPandey-08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./github.png" alt="github" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src="./linkedin.png" alt="linkedin" />
                  </a>
                </div>
              </div>
              <div className={css.rightSide}>
                <form onSubmit={handleSubmit}>
                  <div className={css.form_group}>
                    <h5>Name</h5>
                    <input
                      type="text"
                      id="name"
                      className="form-control w-100"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className={css.form_group}>
                    <h5>Email</h5>
                    <input
                      type="email"
                      id="email"
                      className="form-control w-100"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className={css.form_group}>
                    <h5>Message</h5>
                    <textarea
                      id="message"
                      value={message}
                      className="px-2 py-1 w-100 form-control"
                      rows={"3"}
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn w-100">
                    Send Message
                  </button>
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
