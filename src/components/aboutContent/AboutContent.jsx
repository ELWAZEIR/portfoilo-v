import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutContent.module.css";
import hossam from "../../assets/hoss.webp";
import hossam1 from "../../assets/iti1.jpg";

export const AboutContent = () => {
  return (
    <div className={classes.about}>
      {/* <div className={`${classes["left"]} ${classes["center"]}`}> */}
      <div className={[classes.left, classes.center].join(' ')}>
        <header className={classes.header}>
          <h1>Who Am I?</h1>
        </header>
        <p>
          I'm a React front-end Developer. I create responsive, secure websites for my clients. <span>React.js</span>
        </p>
        <Link to="/Footer">
          <button className="btn center" style={{ width: "100%" }}>
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
              alt="Profile Img"
              loading="lazy"
              lang="en" // تحديد لغة الصورة
            />
          </div>
          <div className={`${classes["img-stack"]} ${classes["bottom"]}`}>
            <img
              src={hossam}
              className={classes.imgr}
              alt="Professional Photo"
              loading="lazy"
              lang="en" // تحديد لغة الصورة
            />
          </div>
        </div>
      </div>
    </div>
  );
};