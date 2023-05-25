import React from 'react'
import './Hero.css'
import introImg from "../../assets/d.jpg"
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="" />
      </div>
      <div className="content">
        <p>HI, I'M Front-End  Developer</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className='btn'>Project</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}
