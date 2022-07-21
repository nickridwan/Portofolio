import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gi4gf5c",
        "template_bjqfhho",
        form.current,
        "ElFHLqNH0JjkQshur"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            type="message"
            name="message"
            className="user"
            placeholder="Message"
          />
          <input
            type="submit"
            className="button"
            value="Send"
            placeholder="Message"
          />
          <span>{done && "Thank for Contact me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
