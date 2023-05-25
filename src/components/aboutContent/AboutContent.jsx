import React from "react";
import { Link } from "react-router-dom";
import classes from "./AboutContent.module.css";
import react from "../../assets/hoss.jpg";
import react1 from "../../assets/iti1.jpg";
export const AboutContent = () => {
  return (
    <div>
    <div className={classes.about}>
      <div className={`${classes["left"]} ${classes["center"]}`} >
        <h1>Who AM I</h1>
        <p>
          Im a react front-end Developer. I create responsive secure website for
          my clients .<span>React.js</span>
        </p>
        <Link to="/Footer">
          <button className="btn center" style={{width:'100%'}}>
            More Info
          </button>
        </Link>
      </div>

      <div className={classes.right}>
        <div className={classes["img-container"]}>
          <div className={`${classes["img-stack"]} ${classes["top"]}`}>
            <img src={react1} className={classes.img} alt="some thing error" />
          </div>
          <div className={`${classes["img-stack"]} ${classes["bottom"]}`}>
            <img src={react} className={classes.img} alt="some thing error" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
