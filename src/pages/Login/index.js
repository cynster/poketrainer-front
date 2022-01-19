import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { Container, Form, Col, Button, Card } from "react-bootstrap";

import { login } from "../../store/trainers/actions";
import { selectToken } from "../../store/trainers/selectors";

export default function Login() {
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
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Container>
        <Card className="mt-5">
          <Card.Header>Login</Card.Header>

          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
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
                Log in
              </Button>
            </Form.Group>

            <Link to="/register" style={{ textAlign: "center" }}>
              Click here to sign up
            </Link>
          </Form>
        </Card>
      </Container>
    </>
  );
}
