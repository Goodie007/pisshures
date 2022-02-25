import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Container, Row, Col, Image} from 'react-bootstrap';
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
                   <h4 className='nature'>Nature</h4>
                   <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/Nature"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                   </Container>

               </div>

               <div>
                   <h4 className="nature">Arts</h4>
                   <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Arts"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/Arts"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/Arts"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                   </Container>

               </div>

               <div>
                    <h4 className="nature">Animals</h4>
                    <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Animals"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/Animals"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/Animals"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                    </Container>
               </div>

               <div>
                    <h4 className="nature">History</h4>
                    <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/History"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/History"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/History"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                    </Container>
               </div>

               <div>
                    <h4 className="nature">Foods & Drinks</h4>
                    <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/Foods"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                    </Container>
               </div>

               <div>
                    <h4 className="nature">Fashion</h4>
                    <Container>
                       <Row className="cat-row">
                           <Col>
                              <Link to="/Fashion"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                            </Col>
                           <Col>
                              <Link to="/Fashion"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                           <Col>
                              <Link to="/Fashion"><Image src={require("../assets/sunset.jpg")} className="cat-img" /></Link>
                           </Col>
                       </Row>
                    </Container>
               </div>
            </div>
        </div>

    )
}

export default Categories;