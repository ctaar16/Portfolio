import React from "react";


export default function Portfolio() {
  return (
    <div className="portfolio">
        <div className="porttitle">
        <h1>My Portfolio</h1>
        </div>
          
        <div className="card1">
            <div className="cardbody1">
              <h5 className="cardtitle">Global COVID Tracker</h5>
                <img className="tnail"  src="/assets/covid.png" />
                <p className="cardtext">The Global COVID Tracker lists cumulative new infections, recoveries, and fatality data sourced from Johns Hopkins University.  This app features a self-reporting symptoms tool where users can see what others are feeling.</p>
                  <p className="cardtext">Technologies Used:</p>
                  <p className="cardtext">HTML, CSS, Javascript, React, leveraged AirTable to create and consume RESTFUL API data</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://theglobalcovidtracker.netlify.app/" className="button">Visit Project</a></button>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ctaar16/Corona-Virus-Tracker" className="button">Visit Github</a></button>
            </div>
        </div>


        <div className="card1">
            <div className="cardbody1">
              <h5 className="cardtitle">Mind Your Money</h5>
                <img className="tnail"  src="/assets/mindyourmoney.png"/>
                <p className="cardtext">Mind Your Money is a money management tool designed to set goals and allocate funds to said goals.  This project was built by taking in design elements from a UX/UI team and enginnering this project to their vision.</p>
                <p className="cardtext">Technologies Used:</p>
                  <p className="cardtext">HTML, CSS, Javascript, React, MongoDB</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://mindyourmoney.netlify.app/" className="button">Visit Project</a></button>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ctaar16/Mind-Your-Money" className="button">Visit Github</a></button>
            </div>
        </div>

        <div className="card1">
            <div className="cardbody1">
              <h5 className="cardtitle">Wannit</h5>
                <img className="tnail"  src="/assets/wannit.png" />
                <p className="cardtext">Wannit is everyone's next go-to shopping list app that can be used for several different occasions, be it birthdays, holidays, or weddings.  Unique features about this application is that not only does it allow users to list their desired items, but also add locations on where those items can be purchased.</p>
                <p className="cardtext">Technologies Used:</p>
                  <p className="cardtext">HTML, CSS, Javascript, React, Ruby on Rails</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://wannit.netlify.app/" className="button">Visit Project</a></button>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://github.com/ctaar16/Wannit" className="button">Visit Github</a></button>
            </div>
        </div>



        

        
    </div>
  );
}
