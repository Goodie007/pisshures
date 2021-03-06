import React, { useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import axios from "axios";

import '../App.css';


axios.defaults.xsrfHeaderName = 'x-csrftoken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true




function Signup() {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("http://localhost:8010/proxy", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/localhost:3000/");
        } catch (err) {
          setError(true);
        }
    }


    return (
        <div className="log-top">
           <div className="log">
             <h1>Sign Up</h1>
            </div>
            <div className="btn-top">
            <div className="d-grid gap-2">
               <Button variant="primary" size="lg">
                     sign in with facebook
               </Button>
               <Button variant="secondary" size="lg">
                   sign in with google
               </Button>
            </div>
            </div>
            <div>
               <p className="logP"> OR</p>
            </div>
            <div>
               <Form noValidate  onSubmit={handleSubmit}>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Username</Form.Label>
                     <Form.Control 
                        type="username" 
                        placeholder="Enter username" 
                        className="formCntrl"
                        value={username}
                        name='username'
                        onChange={(e) => {
                            setUsername(e.target.value);
                          }} 
                      />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        className="formCntrl"
                        value={email}
                        name='email'
                        onChange={(e) => {
                            setEmail(e.target.value);
                          }} 
                     />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                      {/* <Form.Text className="muted">
                         forgot password? 
                     </Form.Text> */}
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        className="formCntrl"
                        value={password}
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                    />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {/* <Form.Check type="checkbox" label="Check me out" /> */}
               </Form.Group>
               <div className="d-grid gap-2">
                     <Button 
                        variant="primary" 
                        type="submit"
                       
                    >
                         Submit
                    </Button>
                </div>
               <Form.Text className="text">
                   already have an account? <Link to="/Login">Login</Link>
                </Form.Text>
               </Form>

               {error && (
                 <span style={{ color: "red", marginTop: "10px" }}>
                   Something went wrong
                 </span>
                )}
            </div>
        </div>
    )
}


export default Signup;