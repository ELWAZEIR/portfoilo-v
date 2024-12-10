import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import throttle from "lodash.throttle";
import "./Nav.css";

export default function Nav() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);

  useEffect(() => {
    const throttledChangeColor = throttle(() => {
      setColor(window.scrollY >= 100);
    }, 200);

    window.addEventListener("scroll", throttledChangeColor);

    return () => {
      window.removeEventListener("scroll", throttledChangeColor);
    };
  }, []);

  return (
    <header className={color ? "header header-bg" : "header"}>
      <Link to="/" aria-label="Go to Homepage" title="Homepage">
        <h1>Hossam</h1>
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={click ? "Nav-menu active" : "Nav-menu"}>
          <li>
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
              title="Homepage"
              rel="prefetch"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              aria-current={location.pathname === "/project" ? "page" : undefined}
              title="Projects"
              rel="prefetch"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              aria-current={location.pathname === "/contact" ? "page" : undefined}
              title="Contact"
              rel="prefetch"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="hamburger"
        onClick={handleClick}
        aria-label={click ? "Close Menu" : "Open Menu"}
        aria-expanded={click}
        aria-controls="navbar-menu"  // Added this to link button to menu
      >
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </button>
    </header>
  );
}
