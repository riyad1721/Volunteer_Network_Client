import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginBanner from '../LoginBanner/LoginBanner';

const Login = () => {
    return (
        <div>
            <LoginBanner />

            <Form style={{ width: '40%', margin: 'auto', marginTop: '40px', border: '3px solid gray', padding: '30px' }}>
                <h2 >Please logIn</h2>
                <p>-------------------------------------</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label><h2>Email Address</h2></Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label><h2>Password</h2></Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check Out if you are valid user" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br /><br />
                <p>-------------------------------------</p>

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <Button variant="text">Already have an account? Please Register</Button>
                </NavLink>
            </Form>



        </div>
    );
};

export default Login;