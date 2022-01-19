import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
//import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

// import { fetchTrainers } from "../../store/trainers/actions";
// import { selectTrainers } from "../../store/trainers/selectors";
// import trainerCard from "../../components/trainerCard";

export default function allTrainers() {
  // const dispatch = useDispatch();
  // const trainers = useSelector(selectTrainers);

  // useEffect(() => {
  //   dispatch(fetchTrainers());
  // }, [dispatch]);

  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={5} className="g-4" >
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://archives.bulbagarden.net/media/upload/3/3c/Spr_BW_Hilbert.png"
                />
                <Card.Body>
                  <Card.Title>Trainer name</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                  <Link to="/">
                    <Button variant="primary">Show profile</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
