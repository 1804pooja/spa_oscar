import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = (props) => {

    return (
        <nav >
        <h2 className="logo"><a className="logo-link" href="#">Oscar 2019</a></h2>
        <ul className= "nav-menu">
          <li><NavLink className="nav-menu-link" exact to="/">Home</NavLink></li>
          <li><NavLink className="nav-menu-link" to="/actors">Actor</NavLink></li>
          <li><NavLink className="nav-menu-link" to="/actress">Actress</NavLink></li>
          <li><NavLink className="nav-menu-link" to="/films">Films</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav;