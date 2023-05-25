import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { FaBars, FaTimes } from 'react-icons/fa'
export default function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if (window.scrollY>=100){
            setColor(true);
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
        <h1>Hossam</h1>
      </Link>
      <ul className={click ? "Nav-menu active" : "Nav-menu"}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/project'>Project</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
       
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
           <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  )
}
