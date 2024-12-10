import './WorkCard.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
  return (
    <div className="project-card" aria-labelledby={`project-title-${props.title}`}>
      <div className="img-Container">
        <img 
          src={props.imgSrc} 
          alt={`Screenshot of ${props.title} project showing its key features and design`} 
          loading="lazy" 
        />
      </div>
      <div className="project-title">
        <h2 id={`project-title-${props.title}`}>{props.title}</h2>
      </div>
      <div className="text">
        <p>{props.text}</p>
      </div>
      <div className="pro-btns">
        <NavLink 
          to={props.view} 
          className="btn" 
          aria-label={`View details of ${props.title} project`}
        >
          View
        </NavLink>
        <NavLink 
          to={props.git} 
          className="btn" 
          aria-label={`View the source code of ${props.title} project`}
        >
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard;
