import React from 'react';
import resume from '../Assets/Brandon Sorrell Resume Portfolio 081621.pdf';



export default function Navbar({ currentPage, handlePageChange }) {
   
  
  return (
    <header className="navbar-fixed">
        <nav className= "light-blue accent-4">
            <div className="nav-wrapper">
                <div className="brand-logo center">Brandon Sorrell</div>
                <ul id= "nav-mobile" className="left hide-on-med-and-down">
                    <li>
                      <a 
                      href="#aboutmelink"
                      onClick={() => handlePageChange('AboutMe')} 
                      className= "waves-effect btn-small green darken-1"
                      >
                        About Me
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#worklink"
                        onClick={() => handlePageChange('Work')} 
                        className= "waves-effect btn-small green darken-1"
                      >
                        Work
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#contactForm" 
                        onClick={() => handlePageChange('ContactMe')} 
                        className= "waves-effect btn-small green darken-1"
                      >
                        Contact
                      </a>
                    </li>
                    <li><a href={resume} target="_blank" rel="noreferrer" className= "waves-effect btn-small green darken-1">Resume</a></li>
                </ul>
            </div>
        </nav>
        </header>
  );
}

