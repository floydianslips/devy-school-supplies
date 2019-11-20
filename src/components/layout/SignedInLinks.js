import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to='/'>Players</NavLink></li>
      <li><NavLink to='/'>Teams</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/create'>New Message</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating red'>DD</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
