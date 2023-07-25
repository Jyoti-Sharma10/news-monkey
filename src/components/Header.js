import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends Component {
  render() {
    return (
      <div style={{ height: "80px" }}>
      <Navbar expand="lg" className="bg-success">
     <Container fluid>
       <Navbar.Brand href="#" className="text-white">NewsMonkey</Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
         <Nav
           className="me-auto my-2 my-lg-0"
           style={{ maxHeight: '100px' }}
           navbarScroll
         >
           <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
           <Nav.Link href="#action2" className="text-white">About</Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   </div>
    );
  }
}
