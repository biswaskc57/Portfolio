import "./Topbar.scss";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
export default function topbar({ open, setOpen }) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>Biswas KC</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>biswaskc57@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {" "}
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
