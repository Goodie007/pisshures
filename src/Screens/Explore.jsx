import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Image} from 'react-bootstrap';
import Header from '../Navbar/Header';
import TopNav from '../Navbar/TopNav';

import '../App.css';


const images1 = [
    {url: "https://images.unsplash.com/photo-1608615748533-46f29eab6f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1645508420370-09b85d6fb924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1645518005679-50c3b9e15cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1645475798187-90878451b7a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1645466525466-647ef246067f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=602"},
    {url: "https://images.unsplash.com/photo-1645474906518-6542b42f9bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
    
  ]
  
  const images2 = [
    {url: "https://images.unsplash.com/photo-1645334710996-0d59a16768e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1533516006399-ae967e376f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1641667599829-0b6d0c92581c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1644048778858-e6b0cf246a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1643235714999-df95fa472e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ]
  
  const images3 = [
    {url: "https://images.unsplash.com/photo-1448988301245-000401bb1ee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1642411765685-e291ac9b96f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1642411765685-e291ac9b96f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1549797513-48651593ca30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1549797513-48651593ca30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {url: "https://images.unsplash.com/photo-1549797513-48651593ca30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
  ]
  



function Explore() {
    return (
        <div>
            <TopNav />
            <Header />
            <div className="explore">
               <h2 className="exp-h2">Explore</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima eveniet officiis <br/>necessitatibus modi? Culpa
                  voluptatibus voluptate necessitatibus voluptatum ullam, <br/> sequi eum dolorum officiis, consequatur obcaecati
                  rerum voluptatem similique nam? Quisquam.
               </p>
               <div>
                   <h3 className='exp-h3'>Browser thousands of free images</h3>
                   <Container>
                      <Row className="exp-row">
                        <Col>
                          <Image src={require("../assets/sunset.jpg")} className="exp-img" alt="explore1" />
                        </Col>
                        <Col>
                          <Image src={require("../assets/sunset.jpg")} className="exp-img" alt="explore2" />
                        </Col>
                        <Col>
                          <Image src={require("../assets/sunset.jpg")} className="exp-img" alt="explore3" />
                        </Col>
                     </Row>
                   </Container>
                   <h3 className="exp-h3">Free high resolution pictures</h3>
                   <Container>
                       <Row className="exp-row">
                          <Col>
                           {images1.map((e) => {
                              return (
                                  <img src={e.url} className="imgs" alt="explore-1" />
                               );
                              }
                             )
                            },
                          </Col>
                          <Col>
                            {images2.map((e) => {
                                 return (
                                     <img src={e.url} className="imgs" alt="explore-2" />
                                  );
                             })},
                         </Col>
                         <Col>
                             {images3.map((e) => {
                                 return (
                                      <img src={e.url} className="imgs" alt="explore-3" />
                                 )
                               })}
                           </Col>
                       </Row>
                   </Container>
               </div>
            </div>
        </div>
    )
}


export default Explore;