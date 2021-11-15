import React from 'react';
import resume from '../Assets/Brandon Sorrell Resume Portfolio 081621.pdf';
import 'materialize-css/dist/css/materialize.min.css';
import M from  'materialize-css/dist/js/materialize.min.js';

// function componentDidMount() {
//   let sidenav = document.querySelector('#slide-out');
//   M.Sidenav.init(sidenav, {});
// };

export default function Navbar({ currentPage, handlePageChange }) {
   
  let sidenav = document.querySelector('#slide-out');
  M.Sidenav.init(sidenav);

  return (
    <header className="navbar-fixed">
        <nav className= "light-blue accent-4">
            <div className="nav-wrapper">
                <span className="brand-logo right">Brandon Sorrell</span>
                <a href="no" data-target="slide-out" class="sidenav-trigger "><i class="material-icons">menu</i></a>
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
        
        <ul id="slide-out" class="sidenav">
          <li>
            <a 
            href="#aboutmelink"
            onClick={() => handlePageChange('AboutMe')} 
            // className= "waves-effect btn-small green darken-1"
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
        
        </header>
  );
}

