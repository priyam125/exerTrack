import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './navbar.styled';
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <h1>ExerTrack</h1>
        <Bars />
        <NavMenu>
          <NavLink to='/' >
            Exercises
          </NavLink>
          <NavLink to='/createUsers' >
            Create Users
          </NavLink>
          <NavLink to='/createExercises' >
            Create Exercises
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;