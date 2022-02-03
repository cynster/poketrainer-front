import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/trainer/selectors";
import NavbarItem from "./navbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { Button, Nav, Navbar } from "react-bootstrap";
import pokeball from "../../images/pokeball.png";

export default function Navigation(props) {
  // Check if there is a token to check if the user is logged in or not
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? (
    <LoggedIn darkMode={props.darkMode} />
  ) : (
    <LoggedOut />
  );

  return (
    <Navbar
      bg={!props.darkMode ? "light" : "dark"}
      variant={!props.darkMode ? "light" : "dark"}
      expand="lg"
    >
      <Navbar.Brand
        text={"white"}
        as={NavLink}
        to="/"
        style={{ paddingLeft: "10px" }}
      >
        <img
          src={pokeball}
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
            variant={props.darkMode ? "light" : "dark"}
            size="sm"
            type="submit"
            onClick={props.darkModeFunction}
            style={{ marginRight: "5px", marginLeft: "5px" }}
          >
            {props.darkMode ? "Light" : "Dark"}
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
