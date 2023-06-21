import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.png';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar> 
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar ">
              <Navbar.Brand href="/" className="navbar navbar-brand-custom">
               <img className="navbar-logo-img" src={logo} alt="logo"/>
              </Navbar.Brand>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('personal')}>Pesonal</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Wealth Managment</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('personal')}>Business</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>News</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>About Us</Nav.Link>
            </Nav>
              
          </Navbar.Collapse>
        </Container>
        <Nav className="navbar navbar-user" >
          <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link>
          <span className="navbar-text">
          <HashLink to='#connect'> <button className="vvd"><span >Register</span></button></HashLink>       
          </span>

        </Nav>
              </Navbar>
    </Router>
  )
}
