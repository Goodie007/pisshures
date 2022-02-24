import React from 'react';
import { Container, Navbar , NavDropdown, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function TopNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{height: "70px"}}>
  <Container>
  <Navbar.Brand href="#home">Brand</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Explore</Nav.Link>
      <Nav.Link href="#pricing">Advertise</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
      <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Join the Team</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">License</NavDropdown.Item>
      </NavDropdown> 
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/Login">
        <Button className="btn-1">Login</Button>
      </Nav.Link>
      <Nav.Link href="#deets">
        <Button className="btn-2">Submit a photo</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default TopNav;