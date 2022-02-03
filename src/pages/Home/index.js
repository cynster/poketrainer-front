import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

import headerImage from "../../images/pokemon-adventures.jpg";

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
              <Card.Img variant="top" src={headerImage} />
              <Card.Body>
                <Card.Title>Welcome to the PokeTrainer website!</Card.Title>
                <Card.Text>
                  This website is the portfolio I built for my study at
                  Codaisseur. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam facilisis vehicula pellentesque. Nullam dictum
                  ultrices erat eu sollicitudin. Etiam eu fringilla diam, ac
                  fringilla tellus. Ut vestibulum aliquet auctor. Sed ac lectus
                  quam. Aliquam pulvinar orci at dapibus sodales. Quisque
                  viverra, magna sed pulvinar semper, felis magna facilisis dui,
                  at interdum nisl massa quis mi. Integer sed nibh vel nulla
                  euismod aliquet. Donec faucibus ante ut dolor placerat
                  lobortis.
                </Card.Text>
                <Card.Text>
                  <b>So what can I do on this website?</b>
                  <ul>
                    <li>Create a trainer account</li>
                    <li>Set a pokemon as your buddy</li>
                    <li>Create your own pokemon party</li>
                    <li>Customize your profile to make it stand out</li>
                    <li>Take a look at the other trainer profiles</li>
                  </ul>
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
