import React from 'react';
import weatherDash from'../Images/WeatherDash.png'
import tuneTime from'../Images/tuneTime.jpg'
import georgiaScreen from'../Images/GeorgiaScreen.png'
import passGen from'../Images/PasswordGen.png'
import expressToDo from'../Images/ExpressToDo.png'
import gitHubIcon from'../Images/GitHub-Mark-64px.png'


export default function Projects() {
  return(
    <article className= "work col s12 grey lighten-2" id= "worklink">
      <h2> Work </h2>
      <div className= "row ">
        
        <div className= "col s12 l6"> 
          <div className="card medium hoverable grey lighten-4">
            <div className="card-image">
              <a className="hoverable" href="https://skylar-harwell.github.io/Movie_Project/" target="_blank" rel="noopener noreferrer">
                <img src= {georgiaScreen} alt= "Georgia Screen Into"></img>
              </a>
            </div>
            <div className="card-content grey lighten-4">
              <div className="col l9">
                <span className="card-title">Georgia Screen</span>
                <p>Movie Info Search Project</p>
              </div>
              <a className="col l3 hoverable right center-align" href="https://github.com/Skylar-Harwell/Movie_Project" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt=""/></a>
            </div>
          </div>
        </div>     
        
        <div className= "col s12 l6"> 
          <div className="card medium hoverable grey lighten-4">
            <div className="card-image">
              <a className="hoverable" href="https://tune-time.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img src= {tuneTime} alt= "TuneTime Dash Into"></img>
              </a>
            </div>
            <div className="card-content grey lighten-4">
              <div className="col l9">
                <span className="card-title">TuneTime</span>
                <p>Random Timed Playlist Genereator</p>
              </div>
              <a className="col l3 hoverable right center-align" href="https://github.com/d4nnyq88/tune-time" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt=""/></a>
            </div>
          </div>
        </div>   

        <div className= "col s12 l4"> 
          <div className="card small hoverable grey lighten-4">
            <div className="card-image">
              <a className="hoverable" href="https://berlicthehunter.github.io/PasswordGen/" target="_blank" rel="noopener noreferrer">
                <img src= {passGen} alt= "Password Genereator"></img>
              </a>
            </div>
            <div className="card-content grey lighten-4">
              <div className="col l9">
                <span className="card-title">Password Generator</span>
                <p>Need a New Password?</p>
              </div>
              <a className="col l3 hoverable right" href="https://github.com/BerlicTheHunter/PasswordGen" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt=""/></a>
            </div>
          </div>
        </div>
        
        
        <div className= "col s12 l4 "> 
          <div className="card small hoverable grey lighten-4">
            <div className="card-image">
              <a className="hoverable" href="https://enigmatic-peak-71410.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img src= {expressToDo} alt= "Express To Do"></img>
              </a>
            </div>
            <div className="card-content grey lighten-4">
              <div className="col l9 ">
                <span className="card-title">To Do List App</span>
                <p>Plan Out Your Day</p>
              </div>
              <a className="col l3 hoverable right" href="https://github.com/BerlicTheHunter/ExpressToDo" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt= ""/></a>
            </div>
          </div>
        </div>
        
        <div className= "col s12 l4"> 
          <div className="card small  grey lighten-4 hoverable">
            <div className="card-image">
              <a className="hoverable" href="https://berlicthehunter.github.io/WeatherDash/" target="_blank" rel="noopener noreferrer">
                <img src= {weatherDash} alt= "Weather Dashbored"></img>
              </a>
            </div>
            <div className="card-content  grey lighten-4">
              <div className="col l9">
                <span className="card-title">Weather Dashboard</span>
                <p>Up to Date Weather Forcasts</p>
              </div>
              <a className="col l3 hoverable right" href="https://github.com/BerlicTheHunter/WeatherDash" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt=""/></a>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}