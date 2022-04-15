import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Banner from '../../../logos/Group 1329.png'
import './Navbar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar className='Color' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Banner}
                            width="200"
                            height="60"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-size' href="/home">Home</Nav.Link>
                            <Nav.Link className='text-size' href="#link">Donation</Nav.Link>
                            <Nav.Link className='text-size' href="#home">Events</Nav.Link>
                            <Nav.Link className='text-size' href="#link">Blog</Nav.Link>
                            <Button className='ms-3' variant="primary" size="lg" href='/register' active>
                                Register
                            </Button>{' '}
                            <Button className='ms-3' variant="secondary" size="lg" active>
                                Admin
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default NavBar;