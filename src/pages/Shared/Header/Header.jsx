import {Button, Container, Nav, Navbar} from "react-bootstrap";


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">The Chefs Cafe</Navbar.Brand>
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
                                    <Button className="rounded" variant="light">Login</Button>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;