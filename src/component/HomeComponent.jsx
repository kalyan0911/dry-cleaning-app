import React, { Component } from 'react';
import logo from '../Drycleanlogo.jpg';
import '../App.css';

class HomeComponent extends Component {
    render() {
      return(
        
        <div className="App">
         
      <header className="App-poster">
        
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="http://localhost:3000/login"
          
        >
          Login
        </a>
        <br></br>
        <span>Not a User?</span>
        <span><a
          className="App-link"
          href="http://localhost:3000/signup"
          
        >
          Register Now
        </a>
        </span>
        
      </header>
    </div>
      )
    }
}
export default HomeComponent;