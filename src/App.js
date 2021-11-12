import './App.css';
import weatherDash from'./Images/WeatherDash.png'
import tuneTime from'./Images/tuneTime.jpg'
import georgiaScreen from'./Images/GeorgiaScreen.png'
import passGen from'./Images/PasswordGen.png'
import expressToDo from'./Images/ExpressToDo.png'
import avatarImg from'./Images/avatar.png'
import resumeIcon from'./Images/ResumeIcon.png'
import gitHubIcon from'./Images/GitHub-Mark-64px.png'
import linkedInIcon from'./Images/LinkedIn64.png'
import resume from './Assets/Brandon Sorrell Resume Portfolio 081621.pdf'
import background from './Images/background.jpg'

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App" style ={{backgroundImage: `url("https://source.unsplash.com/collection/4540043/1600x900")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',backgroundPosition: 'center' }}>
      <div className="content" >
        <Navbar />
        {/* <header className="navbar-fixed">
        <nav className= "light-blue accent-4">
            <div className="nav-wrapper">
                <div className="brand-logo center">Brandon Sorrell</div>
                <ul id= "nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#aboutmelink" className= "waves-effect btn-small green darken-1">About Me</a></li>
                    <li><a href="#worklink" className= "waves-effect btn-small green darken-1">Work</a></li>
                    <li><a href="#contactForm" className= "waves-effect btn-small green darken-1">Contact</a></li>
                    <li><a href={resume} target="_blank" rel="noreferrer" className= "waves-effect btn-small green darken-1">Resume</a></li>
                </ul>
            </div>
        </nav>
        </header> */}

        <main className= "container" >
          <AboutMe />
          {/* <article id="aboutmelink" className= "row  grey lighten-2">
              <h2>About Me</h2>
              <div className= "row">
                <img className= "col s12 l4 light-blue lighten-5" src= {avatarImg} alt=""/>
                <p className= "col s12 l8 flow-text">I'm Brandon. Chemical Engineer, Business Management Professional, and Full Stack Developer. I've spent almost a decade in the oil field ceramics, plastics, and printing industries with experince ranging from process engineering to management. </p>
                
              </div>
          </article> */}

    
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

          <form className = "row" id="contactForm">
            <h2 className="col s12" > Contact Me </h2>
            <div className="row grey lighten-2 ">
              <div className="input-field col s12 m6 center">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate"/>
                <label for="name">Name</label>
              </div>
              <div className="input-field col s12 m6 center">
                <i className="material-icons prefix">email</i>
                <input id="email" type="text" className="validate"/>
                <label for="email">Your E-Mail</label>
              </div>
              <div className="input-field col s12 center">
                <i className="material-icons prefix">note</i>
                <input id="message" type="text" className="validate"/>
                <label for="message">Message</label>
              </div>
              <br/>
              <button className="btn waves-effect waves-light green darken-1 right" type="submit" name="action">Send
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
    
        </main>

        <footer className="page-footer light-blue accent-4 ">
          <div className="container ">
            <div className="row valign-wrapper">
                <a className="col s3 l2 center-align hoverable" href={resume} target="_blank" rel="noreferrer"><img src= {resumeIcon} alt=""/></a>
                <a className="col s3 l2 center-align hoverable" href="https://github.com/BerlicTheHunter" target="_blank" rel="noopener noreferrer"><img src= {gitHubIcon} alt=""/></a>
                <a className="col s3 l2 center-align hoverable" href="https://www.linkedin.com/in/brandon-sorrell-a3988797" target="_blank" rel="noopener noreferrer"><img src= {linkedInIcon} alt=""/></a>
                <a className="col s3 l2 center-align hoverable" target="_blank" rel="noreferrer" href="mailto:bsorrell3@gmail.com"><i className="medium material-icons white-text">email</i></a>
            </div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}

export default App;