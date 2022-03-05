import "./Contact.scss";
import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqlodag");

  const buttonHandler = () => {};

  return (
    <div className="contact container" id="contact">
      <span className="page-title">Contact</span>
      <div className="contactContent">
        <div className="left">
          <div className="text">
            <p>Links:</p>
          </div>
          <div className="Icon">
            <div className="github">
              <a href="https://github.com/biswaskc57">
                <GitHubIcon
                  className="icon"
                  href="https://github.com/biswaskc57"
                />
              </a>
            </div>
            <div className="linkedIn">
              <a href="https://www.linkedin.com/in/biswas-kc132/">
                <LinkedInIcon className="icon" />
              </a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/biswas.kc/">
                <FacebookIcon className="icon" />
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/biswass">
                <InstagramIcon className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <h2>Send me a message.</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              onClick={buttonHandler}
            >
              Submit
            </button>
            {}
          </form>
        </div>
      </div>
    </div>
  );
}
