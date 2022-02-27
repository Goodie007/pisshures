import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import Header from '../Navbar/Header';
import TopNav from '../Navbar/TopNav';

import '../App.css';



function Categories() {
    return (
        <div>
            <TopNav /> 
            <Header />
            <div className="category">
               <h3 className="cat-h3">Categories</h3>
               <div>
               <nav className='navigation'>
                   <ul className="nav-1">
                     <li>
                        <Button className="cat-btn">
                           <Link to="/Arts" className="link">Arts</Link>
                        </Button>
                       
                     </li>
                     <li>
                        <Button className="cat-btn">
                           <Link to="/Animals">Animals</Link>
                        </Button>
                     </li>
                     <li>
                        <Button className="cat-btn">
                           <Link to="/Fashion">Fashion</Link>
                        </Button>
                     </li>
                     <li>
                        <Button className="cat-btn">
                           <Link to="/Foods">Dishes</Link>
                        </Button>
                     </li>
                     <li>
                        <Button className="cat-btn">
                           <Link to="/History">History</Link>
                        </Button>
                     </li>
                     <li>
                        <Button className="cat-btn">
                           <Link to="/Nature">Nature</Link>
                        </Button>
                     </li>
                    </ul>
                  </nav>
                   <h4 className='nature'>Trending Topics</h4>
                   <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="naturee" /></Link>
                            </Col>
                            <Col class="cat-col-1">
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="naturee" /></Link>
                            </Col>
                            <Col class="cat-col-1">
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="naturee" /></Link>
                            </Col>
                       </Row>
                   </Container>
               </div>
               <div>
                  <h4 className="nature-1">Popular Pictures</h4>
                  <Container>
                     <Row className="cat-row">
                        <Col>
                           <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="foodss" /></Link>
                        </Col>
                        <Col className="cat-col">
                           <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="naturee" /></Link>
                        </Col>
                        <Col className="cat-col">
                           <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" alt="naturee" /></Link>
                        </Col>
                     </Row>
                  </Container>
               </div>

              
            </div>
        </div>

    )
}

export default Categories;