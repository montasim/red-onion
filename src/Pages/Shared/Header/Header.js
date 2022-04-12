import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Media/Logo/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar className='py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            className="d-inline-block align-top"
                            alt="Red Onion logo"
                        />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav className='h6 text-uppercase'>
                            <Nav.Link className='text-white' href="/home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="/hot">Hot</Nav.Link>
                            <Nav.Link className='text-white' href="/checkout">Checkout</Nav.Link>
                            <Nav.Link className='text-white' href="/about">About</Nav.Link>
                            <Nav.Link className='text-white' href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;