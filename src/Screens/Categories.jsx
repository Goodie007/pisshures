import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Header from '../Navbar/Navbar';
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
                   <h4 className='nature'>Nature</h4>
                   <Container>
                       <Row className="cat-row">
                           <Col>
                              <Image src={require("../assets/sunset.jpg")} className="cat-img" />
                           </Col>
                           <Col>
                              <Image src={require("../assets/sunset.jpg")} className="cat-img" />
                           </Col>
                           <Col>
                              <Image src={require("../assets/sunset.jpg")} className="cat-img" />
                           </Col>
                       </Row>
                   </Container>

               </div>
            </div>
        </div>

    )
}

export default Categories;