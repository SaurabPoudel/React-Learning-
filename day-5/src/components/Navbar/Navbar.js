import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';
import { FaHome, FaInfo, FaPhone } from 'react-icons/fa'

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="left-side">
        <h1>Landing Page</h1>
      </div>
      <div className="right-side">
        <NavLink exact to="/" activeClassName='active'><FaHome /> Home</NavLink>
        <NavLink to="/about" activeClassName='active'><FaInfo /> About Us</NavLink>
        <NavLink to="/contactus" activeClassName='active'><FaPhone /> Contact Us</NavLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;