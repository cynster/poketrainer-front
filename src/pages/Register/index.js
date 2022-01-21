import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Form, Col, Row, Button, Card } from "react-bootstrap";

import { register } from "../../store/trainer/actions";
import { selectToken } from "../../store/trainer/selectors";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TOKEN
  // When there is a token, go to the home page
  const token = useSelector(selectToken);
  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(register(username, email, password));

    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Card className="mt-5">
          <Card.Header>Register</Card.Header>
          <Card.Body>
            <Row>
              <Col md={{ span: 4, offset: 4 }}>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      type="text"
                      placeholder="Enter username"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" className="mt-3">
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
                      Register
                    </Button>
                    {" or "}
                    <Link to="/login">click here to log in</Link>
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
