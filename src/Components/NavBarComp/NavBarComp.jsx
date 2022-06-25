import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBarComp(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            News
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/business">
                Business
              </Nav.Link>
              <Nav.Link as={NavLink} to="/technology">
                Technology
              </Nav.Link>
              <Nav.Link as={NavLink} to="/science">
                Science
              </Nav.Link>
              <Nav.Link as={NavLink} to="/health">
                Health
              </Nav.Link>
              <Nav.Link as={NavLink} to="/entertainment">
                Entertainment
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sports">
                Sports
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
