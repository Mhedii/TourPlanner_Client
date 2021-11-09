
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import useFirebase from '../hooks/useFirebase';


const Header = () => {
    const { user, handleLogout } = useFirebase();



    return (
        <div>



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="text-danger ">Tour <span className="text-warning">Planner </span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
                            <Nav.Link href="/myBooking">My Bookings</Nav.Link>
                            <Nav.Link href="/add">Add Services</Nav.Link>

                        </Nav>
                        <Nav>

                            {

                                <Nav.Link href="/admin">Admin</Nav.Link>
                            }

                        </Nav>
                        <Nav>

                            {
                                user.displayName ?
                                    <div><span className="text-warning">{user.displayName}</span><button onClick={handleLogout}>Sign Out</button> </div> :
                                    <Nav.Link href="/login">Log In</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
};


export default Header;