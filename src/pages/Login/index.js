import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { Container, Form, Col, Row, Button, Card } from "react-bootstrap";

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
      <Container style={{ textAlign: "left" }}>
        <Card className="mt-5">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <Form>
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

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mt-3">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={submitForm}
                    >
                      Log in
                    </Button>
                    {" or "}
                    <Link to="/register">click here to sign up</Link>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
