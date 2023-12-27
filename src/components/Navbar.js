import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

function Public() {
  const [expanded, setExpanded] = React.useState(false);
  const location = useLocation();

  const handleToggle = () => setExpanded(!expanded);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
      <Navbar.Collapse id="basic-navbar-nav" onClick={closeNavbar}>
        <Nav className="mr-auto gradient-underline">
          <Nav.Link as={Link} to="/Home" className={location.pathname === '/Home' ? 'active' : ''}>
            HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/About" className={location.pathname === '/About' ? 'active' : ''}>
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/Skills" className={location.pathname === '/Skills' ? 'active' : ''}>
            SKILLS
          </Nav.Link>
          <Nav.Link as={Link} to="/Highlights" className={location.pathname === '/Highlights' ? 'active' : ''}>
            HIGHLIGHTS
          </Nav.Link>
          <Nav.Link as={Link} to="/Portfolio" className={location.pathname === '/Portfolio' ? 'active' : ''}>
            PORTFOLIO
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Public;
