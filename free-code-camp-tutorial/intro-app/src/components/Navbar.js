import React from "react";
import logo from '../logo192.png'
import '../App.css'

export default function Navbar () {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="react-items">
          <img className='nav-logo' src={logo} alt='react logo'/>
          <h3>ReactFacts</h3>
        </div>
        <h4>React Course - Project - 1</h4>
      </nav>
    </header>
  );
}