import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function trainerProfile() {
  // const dispatch = useDispatch();
  // const trainers = useSelector(selectTrainers);

  // useEffect(() => {
  //   dispatch(fetchTrainers());
  // }, [dispatch]);

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col sm={3}>
            <Card className="mt-5">
              <Card.Img
                variant="top"
                src="https://archives.bulbagarden.net/media/upload/3/3c/Spr_BW_Hilbert.png"
              />
              <Card.Body>
                <Card.Title>Trainer name</Card.Title>
                <Card.Text>Joined on DATE</Card.Text>
                <Card.Text>Last updated on DATE</Card.Text>
                <hr />
                <Card.Title>Buddy name</Card.Title>
                <Card.Text>number/type/weight/height</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={9}>
            <Card className="mt-5">
              <Card.Header>Current Party</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                ... 6 pokeCards
              </Card.Body>
            </Card>

            <Card className="mt-5">
              <Card.Header>Badges</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                ... 8 badgeCards
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container style={{ textAlign: "left" }}></Container>
    </>
  );
}
