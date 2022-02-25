import React from  'react';
import {Col, Container, Row, Button} from 'react-bootstrap';

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




function Nature() {
    return (
        <div>
            <TopNav />
            <Header />
            <div className="d-nature">
                <Container>
                    <Row className="nat-row1">
                        <Col>
                           <h1>Nature</h1>
                           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sit,<br /> 
                               dignissimos quam est, ad soluta neque, alias magni ducimus voluptates modi <br />
                               accusantium assumenda? Molestias maiores ea placeat expedita sit quas.</p>
                        </Col>
                        <Col>
                          <div className="status">
                           <div className="nat-stat">
                              <label>Status</label>
                              <div className="n-div">open</div>
                           </div>
                           <hr />
                           <div className="nat-stat">
                              <label>Curator</label>
                              <div className="n-div">circle</div>
                           </div>
                           <hr />
                           <div className="nat-stat">
                              <label>Contributions</label>
                              <div className="n-div">108</div>
                           </div>
                           <hr />
                           <div className="nat-stat">
                              <label>Top Contributors</label>
                            <div className="n-div">pictures</div>
                           </div>
                          </div>
                           <div className="button">
                             <Button className="butn">submit to Nature</Button>
                           </div>
                        </Col>
                    </Row>
                </Container>

                <div>
                    <Container>
                        <Row className="nat-row">
                            <Col>
                              {images1.map((e) => {
                                 return (
                                    <img src={e.url} className="imgs"/>
                                   );
                                 }
                                )
                               },
                            </Col>
                            <Col>
                              {images2.map((e) => {
                                return (
                                   <img src={e.url} className="imgs" />
                                );
                              })},
                            </Col>
                            <Col>
                              {images3.map((e) => {
                                 return (
                                    <img src={e.url} className="imgs" />
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




export default Nature;