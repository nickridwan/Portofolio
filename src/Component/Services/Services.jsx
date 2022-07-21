import React from "react";
import "./Services.css";
import HeartEmoji from "../../image/heartemoji.png";
import Glasses from "../../image/glasses.png";
import Humble from "../../image/humble.png";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="services" id="Services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Bahasa dan Framework
          <br />
          Mobile Dan Web Developer
        </span>
        <button className="button s-button">
          <a href="../../image/my-cv.pdf" download>
            Download CV
          </a>
        </button>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          style={{ left: "20rem", top: "-6rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"WebFramework"}
            detail={"Bootsrap, React"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "1rem" }}
          whileInView={{ left: "4rem" }}
          transition={transition}
          style={{ left: "4rem", top: "5rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Languange"}
            detail={"JAVASCRIPT, DART"}
          />
        </motion.div>
        {/* third card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          style={{ left: "20rem", top: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Mobile Framework"}
            detail={"Flutter"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
