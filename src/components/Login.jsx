import React from 'react';
import {Button, Form } from 'react-bootstrap';
  import { Link } from 'react-router-dom';

import '../App.css';




function Login() {
    return (
        <div className="log-top">
           <div className="log">
             <h1>Login</h1>
            </div>
            <div className="btn-top">
            <div className="d-grid gap-2">
               <Button variant="primary" size="lg" className="loginBtn">
                     sign in with facebook
               </Button>
               <Button variant="secondary" size="lg" className="loginBtn">
                   sign in with google
               </Button>
            </div>
            </div>
            <div>
               <p className="logP"> OR</p>
            </div>
            <div>
               <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" className="formCntrl" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                      <Form.Text className="muted">
                         forgot password? <a href="#Password">click here</a>
                     </Form.Text>
                    <Form.Control type="password" placeholder="Password" className="formCntrl" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {/* <Form.Check type="checkbox" label="Check me out" /> */}
               </Form.Group>
               <div className="d-grid gap-2">
                     <Button variant="primary" type="submit" className="loginBtn">
                         Submit
                    </Button>
                </div>
               <Form.Text className="text">
                   don't have an account? <Link to="/Signup">Join</Link>
                </Form.Text>
               </Form>
            </div>
        </div>
    )
}


export default Login;