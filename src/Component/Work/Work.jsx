import React from "react";
import "./Work.css";
import reactIcon from "../Icon/structure.png";
import flutterIcon from "../Icon/flutter-lockup.png";
import jsIcon from "../Icon/js.png";
import htmlIcon from "../Icon/html-5.png";
import cssIcon from "../Icon/css.png";
import { motion } from "framer-motion";

const Works = () => {
  const transition = { duration: 3.5, type: "spring" };

  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span>Languange Skill</span>
        <span style={{ marginTop: "2rem" }}>
          Bahasa Pemrograman yang pernah dipelajari
          <br />
          dan frameworks yang pernah dipakai.
        </span>

        {/* <button className="button s-button">Hire Me</button> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-50px" }}
          transition={transition}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={reactIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={flutterIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={jsIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={htmlIcon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={cssIcon} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCirle blueCircle"></div>
        <div className="w-backCirle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
