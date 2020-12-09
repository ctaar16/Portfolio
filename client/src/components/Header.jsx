import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="top">
      <div className="headerleft">
        <img className="face" src="/assets/chris.jpeg" />
      </div>

      <div className="headercenter">
        <Link to="/" className="link">
          <h2>Home</h2>
        </Link>

        <Link to="/Portfolio" className="link">
          <h2>Portfolio</h2>
        </Link>

        <Link to="/About" className="link">
          <h2>About</h2>
        </Link>

        <Link to="Contact" className="link">
          <h2>Contact</h2>
        </Link>
      </div>

      <div className="headerright">
      
        <img className="linked" src="/assets/linkedin.png" />
        <img className="git" src="/assets/github.png" />
      </div>
    </div>
  );
}
