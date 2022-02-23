import React from 'react';
// import {Link } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar, 
    Button, InputGroup, 
    FormControl, Image,
    Col, Row
  } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
import '../App.css';



function TopNav() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" styles={{height: '100px'}}>
            <Container className="container">
             <Navbar.Brand href="#home">R EReact</Navbar.Brand>
             <InputGroup>
                  <FormControl  placeholder="search for pictures" className="form" />
             </InputGroup>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                       <Nav.Link to="Explore"> Explore</Nav.Link>
                       <Nav.Link href="blog">Blog</Nav.Link>
                       <Nav.Link>
                          <Link to="/Login">Login</Link>
                       </Nav.Link>
                       <Nav.Link href="#d">Advertise</Nav.Link>
                       <Button>Submit</Button>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
}

export default TopNav;