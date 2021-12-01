import React from 'react';
import './Nav.scss';
import NavLinks from './NavLinks.jsx';

const Nav = (props) => {
  console.log('props', props); // undefined right now...

  return (
    <nav>
      <h1>Dev Forge</h1>
      <ul id="nav">
        {props.isLoggedIn ? (
          <NavLinks />
        ) : (
          'A place for Codesmith members to collaborate.'
        )}
      </ul>
    </nav>
  );
};

export default Nav;
