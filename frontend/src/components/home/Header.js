import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import "./../../style/Header.css";

const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <button className="btn-menu" onClick={handleShow} >☰</button>
                <Navbar.Brand href="/">
                    <strong className='brand'>Expensee</strong>
                </Navbar.Brand>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link className='nav-link' to='/signup'>Sign Up</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link className='nav-link' to='/logout'>Logout</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header;