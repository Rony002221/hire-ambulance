import React from 'react';
import { Nav, Navbar, Container, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../custom_Hook/useFirebase';

const NavBar = () => {

  const {handleSignOut, user} =useFirebase();


    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">MHR</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          
        <Nav className="ms-auto p-2">

        <Stack direction="horizontal" gap={5}>
        <NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/service"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            All Ambulances
          </NavLink>

          <NavLink
            to="/about"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            About
          </NavLink>

          <NavLink
            to="/ragistration"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Ragistration
          </NavLink>

          {user.email ? (<NavLink
            to = "/"
            onClick = {handleSignOut}
          >
            Log Out
          </NavLink>) : (
            
          <NavLink
            to="/login"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Log In
          </NavLink>
) }

          
          
        </Stack>

        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;