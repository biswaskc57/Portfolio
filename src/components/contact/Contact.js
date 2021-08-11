import "./Contact.scss";
import React from "react";
import { useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const messageHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="topic">
        <div class="title">
          <span>Contact</span>
        </div>
        <div class="underline"></div>
      </div>
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
            <input type="text" placeholder="Email" />
            <textarea
              placeholder="Message"
              onChange={messageHandler}
            ></textarea>
            <button type="submit">Send</button>
            {message !== "" ? <span>Thanks</span> : ""}
          </form>
        </div>
      </div>
    </div>
  );
}
