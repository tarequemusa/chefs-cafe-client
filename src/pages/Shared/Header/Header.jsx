import {useContext} from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider";
import {FaUserCircle} from "react-icons/fa";


const Header = () => {
    // const {user} = useContext(AuthContext);
    return (
        <div>
            {/* <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold" href="/">The Chefs Cafe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            <Nav.Link className="text-light" href="/">Home</Nav.Link>
                            <Nav.Link className="text-light" href="/about">About Us</Nav.Link>
                            <Nav.Link className="text-light" href="#pricing">Chefs</Nav.Link>
                            <Nav.Link className="text-light" href="#pricing">Recipes</Nav.Link>
                            <Nav.Link className="text-light" href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    {user && <Nav.Link>
                                        <FaUserCircle style={{fontSize: '2rem'}} />
                                    </Nav.Link>
                                    }
                                    {user ?
                                        <Button className="rounded px-3" variant="warning">Logout</Button> :
                                        <Button className="rounded px-3" variant="warning"><Link style={{textDecoration: 'none'}} className="text-dark" to="/login">Login</Link></Button>
                                    }
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;