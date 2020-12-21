import React from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
  return (
    <div className="mid" >
      <div className="main">
        <p className="name"> Chris Haar</p>
        <p className="slash">|</p>
        <p className="position">Software Engineer</p>
      </div>
      <div className="explore">
       <Link to="/Portfolio" className="emw">Explore My Work</Link>
      </div>

    </div>
  );
}
