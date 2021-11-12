import React from 'react';
import avatarImg from'../Images/avatar.png'

export default function AboutMe(){
  return(
    <article id="aboutmelink" className= "row  grey lighten-2">
              <h2>About Me</h2>
              <div className= "row">
                <img className= "col s12 l4 light-blue lighten-5" src= {avatarImg} alt=""/>
                <p className= "col s12 l8 flow-text">I'm Brandon. Chemical Engineer, Business Management Professional, and Full Stack Developer. I've spent almost a decade in the oil field ceramics, plastics, and printing industries with experince ranging from process engineering to management. </p>
                
              </div>
          </article>
  );
}