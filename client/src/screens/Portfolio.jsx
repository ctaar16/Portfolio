import React from "react";


export default function Portfolio() {
  return (
    <div className="portfolio">
        <div className="porttitle">
        <h1>My Portfolio</h1>
        </div>
          
        <div className="card1">
          <img />
            <div className="cardbody1">
              <h5 className="cardtitle">Global COVID Tracker</h5>
                <p className="cardtext">The Global COVID Tracker lists cumulative new infections, recoveries, and fatality data sourced from Johns Hopkins University.  This app features a self-reporting symptoms tool where users can see what others are feeling.</p>
                  <p>This application was built using React</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://theglobalcovidtracker.netlify.app/" className="button">Vist This Project</a></button>
            </div>
        </div>


        <div className="card1">
          <img />
            <div className="cardbody1">
              <h5 className="cardtitle">Mind Your Money</h5>
                <p className="cardtext">Mind Your Money is a money management tool designed to set goals and allocate funds to said goals.  This project was built by taking in design elements from a UX/UI team and enginnering this project to their vision.</p>
                  <p>This application was built using React and MongoDB</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://mindyourmoney.netlify.app/" className="button">Vist This Project</a></button>
            </div>
        </div>



        <div className="card1">
          <img />
            <div className="cardbody1">
              <h5 className="cardtitle">Wannit</h5>
                <p className="cardtext">Wannit is everyone's next go-to shopping list app that can be used for several different occasions, be it birthdays, holidays, or weddings.  Unique features about this application is that not only does it allow users to list their desired items, but also add locations on where those items can be purchased.</p>
                  <p>This application was built using Ruby on Rails and React</p>
                  <button className="button"><a target="_blank" rel="noopener noreferrer" href="https://mindyourmoney.netlify.app/" className="button">Vist This Project</a></button>
            </div>
        </div>



        

        
    </div>
  );
}
