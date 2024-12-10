import React from 'react';
import './Hero.css';
import introImg from "../../assets/d.jpg";
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Professional Front-End Developer" />
      </div>
      <div className="content">
        <p className="greeting">Hi, I'm a Front-End Developer</p>
        <h1 className="title">React Developer</h1>
        <p className="intro-description">
          Passionate about building scalable, high-performance web applications with React.js.
        </p>
        <div className="cta-buttons">
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}
