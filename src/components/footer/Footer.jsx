import React from "react";
import {
  FaFacebook,
  FaGitSquare,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Cairo, Egypt</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              01111535238
            </h4>
          </div>
          <div className="email">
            <Link to={"mailto:hossamshapan88@gmail.com"} target="_blank" rel="noopener noreferrer">
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              hossamshapan88@gmail.com
            </Link>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I specialize in front-end development and enjoy tackling new design challenges and projects. Feel free to reach out if you're looking for a skilled developer!</p>
          <div className="social">
            <Link to="https://www.linkedin.com/in/hossamshaaban/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={35} style={{ color: "#fff", marginRight: "3rem" }} />
            </Link>
            <Link to="https://github.com/ELWAZEIR" target="_blank" rel="noopener noreferrer">
              <FaGitSquare size={35} style={{ color: "#fff", marginRight: "3rem" }} />
            </Link>
            <Link to="https://www.facebook.com/HOssAMelwazir" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={35} style={{ color: "#fff", marginRight: "3rem" }} />
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          margin: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        <Link to="/home" style={{ marginBottom: "5px" }}>
          <FaHome size={45} style={{ color: "#fff", marginLeft: "-4rem" }} />
        </Link> 
        Back to Home
      </div>
    </footer>
  );
}
