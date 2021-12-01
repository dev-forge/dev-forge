import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
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
          <img src="placeholder" height="40" width="40" />
        </li>
      </Link>
    </>
  )
}

export default NavLinks;