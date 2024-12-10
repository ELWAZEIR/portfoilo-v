import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutContent.module.css";
import hossam from "../../assets/hoss.webp";
import hossam1 from "../../assets/iti1.jpg";

export const AboutContent = () => {
  return (
    <div className={classes.about}>
      <header className={classes.header}>
        <h1>Who Am I?</h1>
        <meta 
          name="description" 
          content="Hossam Shaban is a skilled front-end React developer, specializing in creating responsive and secure websites for clients. Learn about his projects and skills." 
        />
        <meta 
          name="keywords" 
          content="React Developer, Front-end Developer, Web Development, Portfolio, JavaScript, HTML, CSS, Responsive Websites, Secure Websites"
        />
        <meta name="author" content="Hossam Shaban" />
        <meta name="robots" content="index, follow" />
      </header>

      <div className={[classes.left, classes.center].join(' ')}>
        <p>
          I'm a React front-end Developer. I create responsive, secure websites for my clients using <span>React.js</span>.
        </p>
        <Link to="/Footer">
          <button 
            className="btn center" 
            style={{ width: "100%" }} 
            aria-label="Learn more about Hossam Shaban"
          >
            More Info
          </button>
        </Link>
      </div>

      <div className={classes.right}>
        <div className={classes["img-container"]}>
          <div className={`${classes["img-stack"]} ${classes["top"]}`}>
            <img
              src={hossam1}
              className={classes.img}
              alt="Profile img of Hossam Shaban, React Developer"
              loading="lazy"
              lang="en"
            />
          </div>
          <div className={`${classes["img-stack"]} ${classes["bottom"]}`}>
            <img
              src={hossam}
              className={classes.imgr}
              alt="Professional img of Hossam Shaban"
              loading="lazy"
              lang="en"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
