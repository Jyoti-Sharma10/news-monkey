import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div style={{ height: "80px" }}>
        <Navbar expand="lg" className="bg-success">
          <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand to="/" className="text-white">NewsMonkey</Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <LinkContainer to="/" className="text-white">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/business" className="text-white">
                  <Nav.Link>Business</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/entertainment" className="text-white">
                  <Nav.Link>Entertainment</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/general" className="text-white">
                  <Nav.Link>General</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/health" className="text-white">
                  <Nav.Link>Health</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/science" className="text-white">
                  <Nav.Link>Science</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/sports" className="text-white">
                  <Nav.Link>Sports</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/technology" className="text-white">
                  <Nav.Link>Technology</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
