import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "./Navbar.css"

function Public() {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => setExpanded(!expanded);

  const navigateTo = (path) => {
    setExpanded(false); // Close the navbar before navigating
    window.location.href = path;
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="gradient-underline mr-auto">
            <Nav.Link onClick={() => navigateTo('/Home')}>HOME</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/About')}>ABOUT</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Skills')}>SKILLS</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Highlights')}>HIGHLIGHTS</Nav.Link>
            <Nav.Link onClick={() => navigateTo('/Portfolio')}>PORTFOLIO</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Public;