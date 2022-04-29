import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className='nav-link active fs-5' to="/home">Home</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/items">Items</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/manageitems">ManageItems</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/myitems">MyItems</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/login">Login</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/register">Register</CustomLink>
                            <CustomLink className='nav-link active fs-5' to="/blogs">Blogs</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;