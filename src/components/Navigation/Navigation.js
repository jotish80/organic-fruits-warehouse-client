import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import Banner from '../Banner/Banner';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Images/logo.png';

const Navigation = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const handleLogOut = () => {
        signOut(auth)
    }
    
    
    return (
        <div  className='sticky-top'>
            <Navbar bg='light' expand="lg">
                <Container>
                    <Navbar.Brand ><Link to='/'> <img style={{width:"20%"}} src={logo} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className='nav-link active fs-5 text-success' to="/">Home</CustomLink>
                            <CustomLink className='nav-link active fs-5 text-success' to="/items">Items</CustomLink>
                            <CustomLink className='nav-link active fs-5 text-success' to="/manageitems">ManageItems</CustomLink>
                            <CustomLink className='nav-link active fs-5 text-success' to="/myitems">MyItems</CustomLink>
                           
                             {
                                 !user ?  (<>   <CustomLink className='nav-link active fs-5 text-success' to="/login">Login</CustomLink>
                             
                            <CustomLink className='nav-link active fs-5 text-success' to="/register">Register</CustomLink></>) : (<button className='btn btn-link fs-5 text-success text-decoration-none' onClick={handleLogOut}>Logout</button>)
                             }

                                
                              
                             
                            <CustomLink className='nav-link active fs-5 text-success' to="/blogs">Blogs</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          
        </div>
    );
};

export default Navigation;