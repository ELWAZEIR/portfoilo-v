import "./form.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  let Navigate = useNavigate();
  const form = useRef();

  const sendData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o4rvsof",
        "template_d8ru31p",
        form.current,
        "RMo-F4jFTsmVNaqHK"
      )
      .then(
        (result) => {
          alert("Success! Your message has been sent.");
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.");
          Navigate("/project");
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendData} aria-labelledby="formTitle" method="POST">
        <h1 id="formTitle" className="d-flex align-items-center justify-content-center m-3">
          Let's Have a Chat
        </h1>
        
        <label htmlFor="from_name">Your Name</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          required
          aria-required="true"
          aria-label="Your full name"
          placeholder="Enter your full name"
        />

        <label htmlFor="email_id">Email</label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          required
          aria-required="true"
          aria-label="Your email address"
          placeholder="Enter your email address"
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          aria-required="true"
          aria-label="Subject of your message"
          placeholder="Enter subject"
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="Type Your Message Here"
          required
          aria-required="true"
          aria-label="Your message"
        ></textarea>

        <button className="btn ptnH" type="submit" value="Send" aria-label="Send your message">
          Send
        </button>
      </form>
    </div>
  );
};
