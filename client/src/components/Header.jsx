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
          <h2 className="link">Home</h2>
        </Link>

        <Link to="/Portfolio" className="link">
          <h2 className="link">Portfolio</h2>
        </Link>

        <Link to="/About" className="link">
          <h2 className="link">About</h2>
        </Link>

        <Link to="Contact" className="link">
          <h2 className="link">Contact</h2>
        </Link>
      </div>

      <div className="headerright">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chris-haar/">
        <img className="linked" src="/assets/linkedin.png" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ctaar16">
        <img className="git" src="/assets/github.png" />
        </a>
      </div>
    </div>
  );
}
