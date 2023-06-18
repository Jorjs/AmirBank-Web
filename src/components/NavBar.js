import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
      <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <img src={} alt="Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" > ss</NavBar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="asd" id="basic-nav-dropdown">
              <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more">More Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

  export default NavBar

