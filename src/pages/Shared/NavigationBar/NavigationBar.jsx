import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../providers/AuthProvider';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold" href="/">The Chefs Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                        <Link className="text-light px-3" style={{textDecoration: 'none'}} href="/">Home</Link>
                        <Link className="text-light px-3" style={{textDecoration: 'none'}} href="/about">About Us</Link>
                        <Link className="text-light px-3" style={{textDecoration: 'none'}} href="/blog">Blog</Link>
                    </Nav>
                    <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {user && <FaUserCircle style={{fontSize: '2rem'}} />
                                }
                                {user ?
                                    <Button onClick={handleLogOut} className="rounded px-3" variant="warning">Logout</Button> :
                                    <Button className="rounded px-3" variant="warning"><Link style={{textDecoration: 'none'}} className="text-dark" to="/login">Login</Link></Button>
                                }
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;