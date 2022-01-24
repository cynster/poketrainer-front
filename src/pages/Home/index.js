import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

import moment from "moment";
import { fetchTrainersCount } from "../../store/trainers/actions";
import { selectTrainersCount } from "../../store/trainers/selectors";

import { selectLatestFiveTrainers } from "../../store/trainers/selectors";
import { fetchLatestFiveTrainers } from "../../store/trainers/actions";

export default function Home() {
  //Selectors
  const count = useSelector(selectTrainersCount);
  const LatestFiveTrainers = useSelector(selectLatestFiveTrainers);

  //Dispatch actions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLatestFiveTrainers());
    dispatch(fetchTrainersCount());
  }, [dispatch]);

  //First letter of a string to uppercase.
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
                  This website is built to learn from. It is built as a
                  portfolio of a study.
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
                {LatestFiveTrainers.length
                  ? LatestFiveTrainers.map((trainer) => (
                      <Row key={trainer.id}>
                        <Col sm={4}>
                          <img
                            src={
                              trainer.image
                                ? trainer.image
                                : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"
                            }
                            alt="Trainer"
                            width="50"
                            height="50"
                          />
                        </Col>
                        <Col sm={6}>
                          {firstLetterUpperCase(trainer.username)}
                          <br></br>
                          <i className="text-muted">
                            {moment(trainer.createdAt)
                              .startOf("hour")
                              .fromNow()}
                          </i>
                        </Col>
                        <hr />
                      </Row>
                    ))
                  : "unknown"}
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
