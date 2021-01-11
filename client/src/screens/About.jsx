import React from "react";
import rescue from '../videos/rescue.mp4'
import fish from "../assets/fish.jpg"
import travel from "../assets/travel.jpg"
import hiking from "../assets/hiking.jpg"
import snowboard from "../assets/snowboard.jpg"




export default function About() {
  return (
    <div className="aboutmain">
      <div className="abouttop">

      
      <div className="aboutcontainer">
        <h1 className="containertitle">About Me</h1>
        <div className="info">
        <p>
I am a versatile software engineer who is passionate about learning and eager to make long-term contributions at a respected company. With over eight years of professional experience, including experience managing a team of website developers, I am making a career shift to focus directly on programming. I enjoy the technically challenging aspects of application development, and I am excited to continue improving my programming skills while working as a vital member of a successful team.
        </p>
        <p>
          Languages and Frameworks:
        </p>
        <p>
        HTML, CSS, Javascript, React.js, Node.js, Ruby, Ruby on Rails, PostgreSQL, Express, MongoDB, and Mongoose.
        </p>
     
      </div>
    </div>
      
      <div className="othercontainer">
        <h1 className="containertitle1">Other Hobbies</h1>
        <div className="hinfo">
        <ul>
        <li className="hobbies">Developing Apps</li>
        <li className="hobbies">Hiking and Camping</li>
        <li className="hobbies">Travel Enthusiast</li>
        <li className="hobbies">Snowboarding</li>
        <li className="hobbies">Amateur Pit Master</li>
        <li className="hobbies">4x4 Rescue Volunteer</li>
        </ul>
      </div>
    </div>
    </div>

    <div className="aboutbottom">
      
      <img className="pic" src={hiking}/>
      <img className="pic" src={snowboard}/>
      <video className="vid" autoPlay loop muted>
        <source src={rescue} type="video/mp4"/>
      </video>
      <img className="pic" src={fish}/>
      <img className="pic" src={travel}/>
     


    </div>

      </div>
      
     
  );
}
