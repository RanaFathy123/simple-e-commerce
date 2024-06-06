import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/Logo.png";

const AdminHeader = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminHeader;
