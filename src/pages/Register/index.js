import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { register } from "../../store/trainers/actions";
import { selectToken } from "../../store/trainers/selectors";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const token = useSelector(selectToken);
  // useEffect(() => {
  //   if (token !== null) {
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(register(username, email, password));

    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <>
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Register as a trainer!</h1>
          <Form.Group controlId="formBasicName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Enter username"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Register
            </Button>
          </Form.Group>
          <Link to="/login">Click here to log in</Link>
        </Form>
      </Container>
    </>
  );
}
