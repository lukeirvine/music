import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar-container">
                <Navbar.Brand>
                    <Link className="brand-link" to="/"><i className="bi-music-note-list nav-icon" /> Luke Irvine</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="nav-link" as={Link} to="/music">Music</Nav.Link>
                        <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
