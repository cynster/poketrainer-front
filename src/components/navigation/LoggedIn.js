import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { logOut } from "../../store/trainers/actions";
import { selectTrainer } from "../../store/trainers/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const trainer = useSelector(selectTrainer);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>Logged in as: {trainer.username}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
