import React from 'react';

export default function ContactMe(){
  return(
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
  );
}