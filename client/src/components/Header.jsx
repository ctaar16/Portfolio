import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="top">
      <img className="face" src="/assets/chris.jpeg" />

      <div className="header">
        <Link to="/" className="link">
          <h1>Home</h1>
        </Link>

        <Link to="/Projects" className="link">
          <h1>Projects</h1>
        </Link>

        <Link to="/AboutMe" className="link">
          <h1>About</h1>
        </Link>

        <Link to="Contact" className="link">
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  );
}
