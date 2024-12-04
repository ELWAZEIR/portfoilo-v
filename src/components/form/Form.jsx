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
          alert("Success Send" + result.text);
        },
        (error) => {
          alert("felid send" + error.text);
          Navigate("/project");
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendData}>
        <h1 className="d-flex align-items-center justify-content-center m-3">
          Lets has a chat
        </h1>
        <label> Your Name</label>
        <input type="text" name="from_name" required />
        <label>Email</label>
        <input type="email" name="email_id" required />
        <label>Subject</label>
        <input type="text" name="message" required />
        <label>Message</label>
        <textarea
          name="message"
          rows="2"
          placeholder="Type Your Message Here"
        ></textarea>
        <button className="btn ptnH" type="submit" value="Send">
          Send
        </button>
      </form>
    </div>
  );
};
