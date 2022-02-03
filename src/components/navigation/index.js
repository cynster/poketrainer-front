import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/trainer/selectors";
import NavbarItem from "./navbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setDarkmode } from "../../store/appState/actions";

export default function Navigation() {
  const dispatch = useDispatch;

  // Check if there is a token to check if the user is logged in or not
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  const [darkMode, setMode] = useState(false);

  function submitForm(event) {
    setMode(!darkMode);
    //console.log("Darkmode:", darkMode);
    //event.preventDefault();
    dispatch(setDarkmode(darkMode));
  }

  return (
    <Navbar
      bg={!darkMode ? "light" : "dark"}
      variant={!darkMode ? "light" : "dark"}
      expand="lg"
    >
      <Navbar.Brand
        text={"white"}
        as={NavLink}
        to="/"
        style={{ paddingLeft: "10px" }}
      >
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
          <Button
            variant={darkMode ? "light" : "dark"}
            size="sm"
            type="submit"
            onClick={submitForm}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          >
            {darkMode ? "Light" : "Dark"}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
