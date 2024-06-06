import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartArrowDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/Logo.png";
import Swal from "sweetalert2";

const Header = ({
  cartProducts,
  userId,
  ifUserIdChanged,
  setIfUserIdChanged,
  userLogged,
  setCartProducts,
}) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    setIfUserIdChanged(!ifUserIdChanged);
    let emptyCart = [];
    setCartProducts(emptyCart);
    Swal.fire({
      position: "center",
      title: "Logged Out",
      color: "red",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/login");
  };

  return (
    <Navbar
      expand="lg"
      className="sticky-top p-1 "
      style={{ background: "#EBEDEF" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link
              to="/"
              className="nav-link"
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="nav-link"
              style={{
                fontSize: "1.2em",
                fontWeight: "bold",
              }}
            >
              Shop
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className=" d-flex gap-3  justify-content-evenly align-items-center ">
          <Link to="/cart">
            <button type="button" className="btn position-relative mt-2 ">
              <FaCartArrowDown style={{ fontSize: "1.7em", color: "black" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
                {cartProducts.length}
              </span>
            </button>
          </Link>
          {userId != "" ? (
            <NavDropdown
              title={
                <img
                  src={userLogged?.image}
                  alt="Main Dropdown"
                  className="rounded-circle m-3"
                  style={{ width: "40px" }}
                />
              }
              id="basic-nav-dropdown"
            >
              {localStorage.t == "ghnj54kk" && (
                <Link to="/admin" className="dropdown-item">
                  Control
                </Link>
              )}
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/login">
              <CiLogin style={{ fontSize: "1.7em" }} />
            </Link>
          )}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
