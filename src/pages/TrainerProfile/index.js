import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";

import { Container, Card, Row, Col } from "react-bootstrap";

//import { useNavigate, Link } from "react-router-dom";
import Loading from "../../components/loading";
import PokeCard from "../../components/PokeCard";

import { fetchTrainerById } from "../../store/trainers/actions";
import { selectTrainerDetails } from "../../store/trainers/selectors";

export default function TrainerProfile() {
  const { id } = useParams();
  const trainer = useSelector(selectTrainerDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrainerById(id));
  }, [dispatch, id]);

  if (!trainer || parseInt(trainer.id) !== parseInt(id)) return <Loading />;

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col sm={3}>
            {/* TRAINER CARD */}
            <Card className="mt-5">
              <Card.Img
                variant="top"
                src={
                  trainer.image
                    ? trainer.image
                    : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"
                }
              />
              <Card.Body>
                <Card.Title>Trainer {trainer.username}</Card.Title>
                <Card.Text>
                  Joined on {moment(trainer.createdAt).format("LL")}
                </Card.Text>
                <Card.Text>
                  Last updated{" "}
                  {moment(trainer.createdAt).startOf("hour").fromNow()}
                </Card.Text>
                <hr />
                <Card.Title>Buddy</Card.Title>
                <Card.Text>[IMAGE]</Card.Text>
                <Card.Text>
                  <b>PokemonName</b>
                </Card.Text>
                <Card.Text>
                  <b>Number:</b> {trainer.buddy ? trainer.buddy : "None"}
                </Card.Text>
                <Card.Text>
                  <b>Type:</b>
                </Card.Text>
                <Card.Text>
                  <b>Weight:</b>
                </Card.Text>
                <Card.Text>
                  <b>Height:</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={9}>
            {/* PARTY CARD */}
            <Card className="mt-5">
              <Card.Header>
                Current Party -{" "}
                {trainer.parties[0]
                  ? trainer.parties[0].trainersParties.name
                  : "None"}
              </Card.Header>
              <Card.Body style={{ textAlign: "center" }}>
                {trainer.parties[0] ? (
                  <Row xs={1} md={3}>
                    <Col>
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].firstPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].secondPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].thirdPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col className="mt-3">
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].fourthPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col className="mt-3">
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].fifthPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col className="mt-3">
                      <Card className="bg-light text-black">
                        <Card.Img
                          src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                          alt="Card image"
                        />
                        <Card.ImgOverlay>
                          <Card.Title>
                            {trainer.parties[0].sixthPokemon}
                          </Card.Title>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  </Row>
                ) : (
                  "Trainer has no party."
                )}
              </Card.Body>
            </Card>

            {/* BADGES CARD */}
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
