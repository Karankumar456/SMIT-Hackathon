import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import saylaniLogo from '../assests/saylaniLogo.png';

function NavbarTop() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#F7F8FA" }} collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <img className='logo' src={saylaniLogo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/newCourses">New Courses</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/studentLogin">Student</Nav.Link>
                            <Nav.Link href="/adminLogin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavbarTop