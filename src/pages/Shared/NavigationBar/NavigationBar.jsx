import React, {useContext} from 'react';
import {Button, Container, Image, Nav, Navbar, OverlayTrigger, Tooltip} from 'react-bootstrap';
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
                <Navbar.Brand className="fw-bold" href="/"><span className='border bg-primary text-light fw-bold px-3 py-1'>The Chefs</span> <span className='border bg-dark text-light fw-bold px-3 py-1'>CAFE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                        <a className="text-light px-3 " style={{textDecoration: 'none'}} href="/">Home</a>
                        <a className="text-light px-3" style={{textDecoration: 'none'}} href="/about" >About</a>
                        <a className="text-light px-3" style={{textDecoration: 'none'}} href="/blog">Blog</a>
                        <a className="text-light px-3" style={{textDecoration: 'none'}} href="/terms">Terms & Condition</a>
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
                                                        <strong>{user.displayName} </strong>
                                                    </Tooltip>
                                                }
                                            >

                                                <p><Image className='w-25' src={user.photoURL} roundedCircle alt="" /></p>
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