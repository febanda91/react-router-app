import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'


//Link gives you the ability to have clickable elements that take you to the desired component 

function Nav() {

    const navStyle = {
        color: 'white'
    }
  
return (
  <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
          <Link style={navStyle} to="/about">
          <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
          <li>Shop</li>
          </Link>
      </ul>
  </nav>
  );
}

export default Nav;