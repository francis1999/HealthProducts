import React from 'react'
import { FormControl, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';


function NavBar() {
    return (

        <div>
            <Container style={{ color: 'white' }}>
                <Navbar className="color-nav" expand="lg" fixed="top" variant="dark" bg="success" collapseOnSelect>
                    <Navbar.Brand href="#" style={{ marginLeft: '20px' }}>Daniela Products</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="navva"
                            style={{ maxHeight: '100px', color: 'white' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ margin: '5px', fontSize: '20px' }}> Home</Nav.Link>
                            <Nav.Link href="#action2" style={{ margin: '5px', fontSize: '20px' }}>Health</Nav.Link>
                            <Nav.Link href="#action2" style={{ margin: '5px', fontSize: '20px' }}>Contact Us</Nav.Link>
                            <Nav.Link href="#action2" style={{ margin: '5px', fontSize: '20px' }}>Products</Nav.Link>
                            <Nav.Link href="#action2" style={{ margin: '5px', fontSize: '20px' }}>About Us</Nav.Link>
                            <Nav.Link href="#action2" style={{ margin: '5px', fontSize: '20px' }}>Testimonies</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{ margin: '5px', fontSize: '20px' }}>
                                <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse >
                </Navbar >
            </Container >
        </div >

    )
}

export default NavBar
