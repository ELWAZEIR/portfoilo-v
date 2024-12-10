import React from "react";
import PropTypes from "prop-types";
import "./Hero2.css";

const Hero2 = ({ heading, text }) => {
  return (
    <div 
      className="hero-img" 
      role="region" 
      aria-label="Background section with heading and description"
    >
      <div className="hero-heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Hero2;
