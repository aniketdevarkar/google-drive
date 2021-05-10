import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import google from "./google.png";
import "./google-drive.css";
export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm" className="navbar__">
      <Navbar.Brand as={Link} to="/">
        <div className="image">
          <img src={google} alt="googledrive" />
          <span>GOOGLE DRIVE</span>
        </div>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          <Button variant="warning">Logout / profile</Button>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
