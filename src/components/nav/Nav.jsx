import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <h2>Dev Forge</h2>
      <ul id='nav'>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/explore">
          <li>Explore Posts</li>
        </Link>
        <Link to="/people">
          <li>Find People</li>
        </Link>
        <Link to="/profile">
          <li>
            <img src="placeholder" height="100" width="100" />
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
