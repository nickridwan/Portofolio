import React from "react";
import "./Intro.css";
import Github from "../../image/github.png";
import LinkedIn from "../../image/linkedin.png";
import Instagram from "../../image/instagram.png";
import Vector1 from "../../image/Vector1.png";
import Vector2 from "../../image/Vector2.png";
import Boy from "../../image/boy.png";
import thumbUp from "../../image/thumbup.png";
import Crown from "../../image/crown.png";
import glassesImoji from "../../image/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro" id="home">
      <div className="i-left">
        <div className="i-name">
          <span> Hy! I am</span>
          <span> Ridwan Hanif</span>
          <span>
            Frontend Developer with beginner level of experience in web
            designing and development
          </span>
        </div>

        {/* <button className="button i-button">Hire me</button> */}
        <div className="i-icons">
          <a href="https://github.com/nickridwan">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ridwan-hanif-a10a92232/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/ridwanhanif16_/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesImoji}
          alt=""
        />
        <motion.div
          initial={{ left: "90%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} txt1="Front End" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "-10rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
          style={{ top: "15rem", left: "-3rem" }}
        >
          <FloatingDiv image={thumbUp} txt1="Beginner Experience" />
        </motion.div>
        {/* blur divs */}
        <div
          className="blur"
          style={{ backgroundColor: "rgb(238 210 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
