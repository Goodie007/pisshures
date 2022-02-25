import React from 'react';
import {Link } from 'react-router-dom';
import '../App.css';




function Header(){
    return (
        <nav className='navigation'>
            <ul className="nav-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Explore">Explore</Link> 
              </li>
              <li>
                  <Link to="/Categories">Categories</Link>
              </li>
              <li><a href="#">Top Raters</a></li>
              <li><a href="#">Tasks</a></li>
            </ul>
          </nav>
    )
}


export default Header;