import React from 'react';
import logo from '../images/houser_logo.png';

function Header() {
    return (
    <div className="App-header">
      
      <div className="App-header-logo">
      <img src={logo} alt="Houser Logo" align="left" height="30" width="30"/>
      </div>
      <div className="App-header-title">Houser</div>
      
    </div>
    )
  };

  export default Header;
