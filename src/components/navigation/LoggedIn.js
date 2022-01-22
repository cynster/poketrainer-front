import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Nav, Button } from "react-bootstrap";
import NavbarItem from "./navbarItem";

import { logOut } from "../../store/trainer/actions";
import { selectTrainer } from "../../store/trainer/selectors";

// Only shows when logged in
export default function LoggedIn() {
  const dispatch = useDispatch();
  const trainer = useSelector(selectTrainer);
  const trainerProfile= "/trainerprofile/"+ trainer.id;

  return (
    <>
      <NavbarItem path={trainerProfile} linkText="My Trainer Profile" />
      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        Logged in as: {trainer.username}
      </Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
