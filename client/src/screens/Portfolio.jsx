import React from "react";
import allblog from "../assets/allblog.png"
import covid from "../assets/covid.png"
import globalweather from "../assets/globalweather.png"
import mindyourmoney from "../assets/mindyourmoney.png"
import wannit from "../assets/wannit.png"





export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="porttitle">
        <h1>My Portfolio</h1>
      </div>

      <div className="card1">
        <div className="cardbody1">
          <h5 className="cardtitle">Global COVID Tracker</h5>
          <img className="tnail" src={covid} />
          <p className="cardtext">
            The Global COVID Tracker lists cumulative new infections,
            recoveries, and fatality data sourced from Johns Hopkins University.
            This app features a self-reporting symptoms tool where users can see
            what others are feeling.
          </p>
          <p className="cardtext">Technologies Used:</p>
          <p className="cardtext">
            HTML, CSS, Javascript, React, leveraged AirTable to create and
            consume RESTFUL API data
          </p>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://theglobalcovidtracker.netlify.app/"
              className="button"
            >
              Visit Project
            </a>
          </button>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ctaar16/Corona-Virus-Tracker"
              className="button"
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>

      <div className="card1">
        <div className="cardbody1">
          <h5 className="cardtitle">Mind Your Money</h5>
          <img className="tnail" src={mindyourmoney} />
          <p className="cardtext">
            Mind Your Money is a money management tool designed to set goals and
            allocate funds to said goals. This project was built by taking in
            design elements from a UX/UI team and enginnering this project to
            their vision.
          </p>
          <p className="cardtext">Technologies Used:</p>
          <p className="cardtext">HTML, CSS, Javascript, React, Mongo DB</p>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://mindyourmoney.netlify.app/"
              className="button"
            >
              Visit Project
            </a>
          </button>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ctaar16/Mind-Your-Money"
              className="button"
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>

      <div className="card1">
        <div className="cardbody1">
          <h5 className="cardtitle">Global Weather</h5>
          <img className="tnail" src={globalweather} />
          <p className="cardtext">
            Global Weather is a standard weather application where users can
            enter their city of choice to retrieve the latest weather
            information by consuming API data via axios request.
          </p>
          <p className="cardtext">Technologies Used:</p>
          <p className="cardtext">HTML, CSS, Javascript, Request using Axios</p>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ctaar16.github.io/Global-Weather/"
              className="button"
            >
              Visit Project
            </a>
          </button>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ctaar16/Global-Weather"
              className="button"
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>

      <div className="card1">
        <div className="cardbody1">
          <h5 className="cardtitle">Blog-App</h5>
          <img className="tnail" src={allblog} />
          <p className="cardtext">
            Blog-App is a blog app where anyone can write down their thoughts on
            any subject. This project features full CRUD on the front-end
          </p>
          <p className="cardtext">Technologies Used:</p>
          <p className="cardtext">
            HTML, CSS, Javascript, React, Mongoose, and MongoDB
          </p>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://allblog.netlify.app/"
              className="button"
            >
              Visit Project
            </a>
          </button>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ctaar16/blog-app"
              className="button"
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>

      <div className="card1">
        <div className="cardbody1">
          <h5 className="cardtitle">Wannit</h5>
          <img className="tnail" src={wannit} />
          <p className="cardtext">
            Wannit is everyone's next go-to shopping list app that can be used
            for several different occasions, be it birthdays, holidays, or
            weddings. Unique features about this application is that not only
            does it allow users to list their desired items, but also add
            locations on where those items can be purchased.
          </p>
          <p className="cardtext">Technologies Used:</p>
          <p className="cardtext">
            HTML, CSS, Javascript, React, Ruby on Rails
          </p>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wannit.netlify.app/"
              className="button"
            >
              Visit Project
            </a>
          </button>
          <button className="button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ctaar16/Wannit"
              className="button"
            >
              Visit Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
