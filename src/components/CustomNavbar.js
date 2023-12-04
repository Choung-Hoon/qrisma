import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  console.log("CustomNavbar");
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/qrisma">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <NavDropdown title="Fetch" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/fetch/v1">
                {/* <NavDropdown.Item as={NavLink} to="/fetch/v1" active={location.pathname === "/fetch/v1"}> */}
                Fetch API
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/fetch/v2">
                {/* <NavDropdown.Item as={NavLink} to="/fetch/v2" active={location.pathname === "/fetch/v2"}> */}
                Axios API
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
