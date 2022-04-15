import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import LoginBanner from '../LoginBanner/LoginBanner';

const Register = () => {
    return (
        <>
            <LoginBanner />
            <div style={{ width: '40%', margin: 'auto', marginTop: '40px', border: '3px solid gray', padding: '30px' }}>
                <h2>Please Register</h2>
                <br />
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <br /><br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br /><br />
                <p>-------------------------------------</p>

                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/login">
                    <Button variant="text">Don't have an account? Please Login</Button>
                </NavLink>
            </div>

        </>
    );
};

export default Register;