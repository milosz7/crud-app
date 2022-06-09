import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="justify-content-between px-3 rounded" bg="primary" variant="dark" >
      <Navbar.Brand as={Link} to="/" >Blog.app</Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  )
};

export default Navigation;