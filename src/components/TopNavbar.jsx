import React from "react"
import {Container,Nav, Navbar} from 'react-bootstrap';



const TopNavbar = () =>{

    return(
        <>
        <Navbar bg="light" expand="lg" 
            style={{justifyContent:'space-between'}}
        >
        <Container fluid>
            <Navbar.Brand href="/">Tw's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll"
            >
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="/Aboutme">About me</Nav.Link>
            <Nav.Link href="/Skills">Skills</Nav.Link>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default TopNavbar;


