import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { selectNoTrainers } from "../../store/trainers/selectors";

// import { fetchTrainers } from "../../store/trainers/actions";
// import { selectTrainers } from "../../store/trainers/selectors";
 //import { selectNumberOfTrainers } from "../../store/trainers/selectors";
// import { getCount } from "../../store/trainers/actions";
// import TrainerCard from "../../components/trainerCard";

export default function Home() {
   //const dispatch = useDispatch();
  // const trainers = useSelector(selectTrainers);

  // useEffect(() => {
  //   dispatch(getCount());
  // }, [dispatch]);

  //selectors
  const noTrainers = useSelector(selectNoTrainers);

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col sm={8}>
            <Card className="mt-5">
              <Card.Img
                variant="top"
                src="https://img.gamewith.net/article/thumbnail/rectangle/1139.jpg"
              />
              <Card.Body>
                <Card.Title>Welcome to the PokeTrainer website!</Card.Title>
                <Card.Text>
                  This websit is built to learn from. It is built as a portfolio
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
            <Card className="mt-5">
              <Card.Header>Latest trainers</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>...</Card.Body>
            </Card>

            <Card className="mt-5">
              <Card.Header>Total number of trainers</Card.Header>
              <Card.Body style={{ textAlign: "center" }}>{noTrainers}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
