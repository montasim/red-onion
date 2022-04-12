import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Media/Logo/logo.png';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <header>
            <Navbar className='py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/">
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
                            <CustomLink className='text-white me-3 text-decoration-none ' to="/home">Home</CustomLink>
                            <CustomLink className='text-white me-3 text-decoration-none' to="/hot">Hot</CustomLink>
                            <CustomLink className='text-white me-3 text-decoration-none' to="/checkout">Checkout</CustomLink>
                            <CustomLink className='text-white me-3 text-decoration-none' to="/about">About</CustomLink>
                            <CustomLink className='text-white me-3 text-decoration-none' to="/login">Login</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;