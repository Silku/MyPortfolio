import React from "react"
import {Container,Nav, Navbar} from 'react-bootstrap';



const SideNavbar = () =>{

    return(
        <>
        <Navbar bg="light" expand="lg" 
            style={{justifyContent:'space-between'}}
        >
        <Container fluid>
            <Navbar.Brand href="/">Tw's portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll"
            >
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default SideNavbar;


