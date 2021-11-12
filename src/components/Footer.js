import React from 'react';
import resumeIcon from'../Images/ResumeIcon.png'
import gitHubIcon from'../Images/GitHub-Mark-64px.png'
import linkedInIcon from'../Images/LinkedIn64.png'
import resume from '../Assets/Brandon Sorrell Resume Portfolio 081621.pdf'

export default function Footer() {
  return(
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
  );
}