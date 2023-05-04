import React, {useContext} from 'react';
import {Button, Container, Image, Nav, NavLink, Navbar, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../providers/AuthProvider';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = (event) => {
        event.preventDefault();
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold" href="/"><span className='border bg-primary text-light fw-bold px-3 py-1'>The Chefs</span> <span className='border bg-dark text-light fw-bold px-3 py-1'>CAFE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1 pe-3 gap-2 text-light">
                        <ActiveLink to="/" ><span className="text-light p-3">Home</span></ActiveLink>
                        <ActiveLink to="/about" ><span className="text-light p-3">About</span></ActiveLink>
                        <ActiveLink to="/blog"><span className="text-light p-3">Blog</span></ActiveLink>
                        <ActiveLink to="/terms"><span className="text-light p-3">Terms & Condition</span></ActiveLink>
                    </Nav>
                    <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='d-flex'>
                                {user && <div className='d-flex'>
                                    <p>
                                        {['bottom'].map((placement) => (
                                            <OverlayTrigger
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Tooltip id={`tooltip-${ placement }`}>
                                                        {user.displayName}
                                                    </Tooltip>
                                                }
                                            >

                                                <div className='text-center px-3 py-0'><Image className='fluid w-25' src={user.photoURL} roundedCircle alt="" /></div>
                                            </OverlayTrigger>
                                        ))}

                                    </p>

                                </div>
                                }
                                {user ?
                                    <Button onClick={handleLogOut} className="rounded px-3 py-0" style={{textDecoration: 'none'}} variant="warning">Logout</Button> :
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