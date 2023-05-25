import './WorkCard.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card ">
      <div className='img-Container'><img src={props.imgSrc} alt="project"/></div>
      <div className="project-title"><h2 > {props.title}</h2></div>
       <div className="text"> <p >{props.text}</p></div>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.git} className="btn">
            source
          </NavLink>
        </div>
      </div>
   
  )
}
export default WorkCard
