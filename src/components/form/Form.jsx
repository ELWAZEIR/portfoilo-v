import { Link } from "react-router-dom";
import "./form.css";
import React from "react";

export const Form = () => {
  return (
    <div className="form">
      <form>
        <h1 className="d-flex align-items-center justify-content-center m-3">
          Lets has a chat
        </h1>
        <label> Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your Message Here"></textarea>
        <Link className="btn" to={"mailto:hossamshapan88@gmail.com"}>
          Submit
        </Link>
      </form>
    </div>
  );
};
