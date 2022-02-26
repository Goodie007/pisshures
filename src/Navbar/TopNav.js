import React from 'react';
import { Container, Navbar , NavDropdown, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  Sticky  from  "react-sticky-el";



function TopNav() {
  return (
    <Sticky stickyStyle={{zIndex: "1000"}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{height: "70px"}} className="sticky">
       <Container>
         <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
              <Nav.Link href="#features">Explore</Nav.Link>
              <Nav.Link href="#pricing">Advertise</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
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
            <Nav.Link as={Link} to="/Login" className="test">
             <Button className="btn-2">Submit a photo</Button>
           </Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Container>
    </Navbar>
    </Sticky>
  )
}

export default TopNav;