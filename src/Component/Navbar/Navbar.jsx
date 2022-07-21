import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Ridwan Portofolio</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link
              spy={true}
              to="Navba"
              r
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>

            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portofolio" smooth={true}>
              <li>Portofolio</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
