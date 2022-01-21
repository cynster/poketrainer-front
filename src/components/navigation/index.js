import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/trainer/selectors";
import NavbarItem from "./navbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  // Check if there is a token to check if the user is logged in or not
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/" style={{ paddingLeft: "10px" }}>
        <img
          src="https://i.pinimg.com/474x/b9/bc/18/b9bc181a061b41d58381eb193b6b6953.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />{" "}
        PokeTrainer!
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/alltrainers" linkText="All Trainers" />
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
