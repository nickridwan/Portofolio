import React from "react";
import "./Footer.css";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5c32c"
          fill-opacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,80C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="f-content">
        <span>ridwanhanif165@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/ridwanhanif16_/">
            <Insta color="brown" />
            {"ridwanhanif16_"}
          </a>
          <a href="https://www.facebook.com/hananridwan.hanif//">
            <Facebook color="blue" />
            {"Hanan Ridwan Hanif"}
          </a>
          <a href="https://github.com/nickridwan">
            <Github color="black" />
            {"nickridwan"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
