import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand className="ml-3" href="#">
          Blog Post
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;
