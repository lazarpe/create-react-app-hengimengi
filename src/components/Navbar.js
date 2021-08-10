import React from "react";

import "./Navbar.css";

import Login from "./Login.js";
import Logout from "./Logout";

import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div id="navigationbar">
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/settings">Settings</Nav.Link>
              <div id="googleLogin" align="right">
                <Login />
              </div>
              <div id="googleLogout" align="right">
                <Logout />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
};

export default Navigation;
