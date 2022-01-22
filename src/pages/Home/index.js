import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import { fetchTrainersCount } from "../../store/trainers/actions";
import { selectTrainersCount } from "../../store/trainers/selectors";
import { fetchTrainers } from "../../store/trainers/actions";
import { selectTrainers } from "../../store/trainers/selectors";

export default function Home() {
  //selectors
  const count = ""; //useSelector(selectTrainersCount); // Doesn't work, loop?
  const latestTrainers = ""; //useSelector(selectTrainers); // Doesn't work, loop?

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrainersCount());
    dispatch(fetchTrainers());
  }, [dispatch]);

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col sm={8}>
            <Card className="mt-5" bg="light">
              <Card.Img
                variant="top"
                src="https://img.gamewith.net/article/thumbnail/rectangle/1139.jpg"
              />
              <Card.Body>
                <Card.Title>Welcome to the PokeTrainer website!</Card.Title>
                <Card.Text>
                  This website is built to learn from. It is built as a portfolio
                  of a study.
                </Card.Text>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam facilisis vehicula pellentesque. Nullam dictum ultrices
                  erat eu sollicitudin. Etiam eu fringilla diam, ac fringilla
                  tellus. Ut vestibulum aliquet auctor. Sed ac lectus quam.
                  Aliquam pulvinar orci at dapibus sodales. Quisque viverra,
                  magna sed pulvinar semper, felis magna facilisis dui, at
                  interdum nisl massa quis mi. Integer sed nibh vel nulla
                  euismod aliquet. Donec faucibus ante ut dolor placerat
                  lobortis.
                </Card.Text>

                <Link to="/register">
                  <Button variant="primary">Enlist as a trainer now!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="mt-5" bg="light">
              <Card.Header>Latest trainers</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                {latestTrainers ? latestTrainers : "unknown"}
              </Card.Body>
            </Card>

            <Card className="mt-5" bg="light">
              <Card.Header>Total number of trainers</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                {count ? count : "unknown"}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
