import moment from "moment";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
//import { useNavigate, Link } from "react-router-dom";

// Components
import Loading from "../../components/loading";
import BadgesForm from "../../components/BadgesForm";
import PartyForm from "../../components/PartyForm";
import MainForm from "../../components/MainForm";
//import PokeCard from "../../components/PokeCard";
//import BadgesCard from "../../components/BadgesCard";

import { fetchTrainerById } from "../../store/trainers/actions";
import { selectTrainerDetails } from "../../store/trainers/selectors";
import { selectTrainer } from "../../store/trainer/selectors";

import { selectPokemon } from "../../store/pokemon/selectors";
import { fetchPokemonById } from "../../store/pokemon/actions";

export default function TrainerProfile() {
  const { id } = useParams();
  const trainer = useSelector(selectTrainerDetails);
  const user = useSelector(selectTrainer);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  //const buddyData = useSelector(selectPokemon());

  useEffect(() => {
    dispatch(fetchTrainerById(id));
    //dispatch(fetchPokemonById(trainer.buddy))
  }, [dispatch, id]);

  if (!trainer || parseInt(trainer.id) !== parseInt(id)) return <Loading />;

  // Make pokemonparty array from Object to map only pokemon, if trainer has party
  const party = trainer.parties[0]
    ? Object.values(trainer.parties[0]).slice(0, 6)
    : "";

  // Badges
  const badges = trainer.badges ? trainer.badges : "Trainer has no badges.";

  // Setting profile colors
  const mainColor = trainer.mainColor ? trainer.mainColor : "light";
  const secondaryColor = trainer.secondaryColor ? trainer.secondaryColor : "";
  const text = mainColor === "light" ? "dark" : "white";

  // Show edit button when logged in trainer matches the TrainerdetailsID
  const displayEditButton = trainer.id === user.id;

  // Makes the first character of the string upper case
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Container style={{ textAlign: "left" }}>
        <Row>
          <Col sm={3}>
            {/* TRAINER CARD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <Card
              className="mt-5"
              bg={mainColor}
              border={secondaryColor}
              text={text}
            >
              {displayEditButton ? (
                <Card>
                  <Button onClick={() => setEditMode(!editMode)}>
                    {editMode ? "Done" : "Edit profile"}
                  </Button>
                </Card>
              ) : (
                ""
              )}

              {!editMode && (
                <div>
                  <Card.Img
                    variant="top"
                    src={
                      trainer.image
                        ? trainer.image
                        : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"
                    }
                  />
                  <Card.Body>
                    <Card.Title>
                      Trainer {firstLetterUpperCase(trainer.username)}
                    </Card.Title>
                    <Card.Text>
                      Joined on {moment(trainer.createdAt).format("LL")}
                    </Card.Text>
                    <Card.Text>
                      Last updated{" "}
                      {moment(trainer.createdAt).startOf("hour").fromNow()}
                    </Card.Text>
                    <hr />
                    <Card.Title>Buddy</Card.Title>
                    {trainer.buddy ? (
                      <div>
                        <Card.Text>
                          <b>[IMAGE]</b>
                        </Card.Text>
                        <Card.Text>
                          <b>PokemonName</b>
                        </Card.Text>
                        <Card.Text>
                          <b>Number:</b> {trainer.buddy}
                        </Card.Text>
                        <Card.Text>
                          <b>Type:</b>
                        </Card.Text>
                        <Card.Text>
                          <b>Weight (hg):</b>
                        </Card.Text>
                        <Card.Text>
                          <b>Height (dm):</b>
                        </Card.Text>
                      </div>
                    ) : (
                      "Trainer has no buddy."
                    )}
                  </Card.Body>
                </div>
              )}
              {editMode && (
                <div>
                  <Card.Body>
                    <MainForm />
                  </Card.Body>
                </div>
              )}
            </Card>
          </Col>

          <Col sm={9}>
            {/* PARTY CARD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <Card.Header>Change Party</Card.Header>
                <PartyForm />
              </Card>
            )}

            {!editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <Card.Header>
                  Current Party -{" "}
                  {trainer.parties[0]
                    ? trainer.parties[0].trainersParties.name
                    : "None"}
                </Card.Header>
                <Card.Body style={{ textAlign: "center" }}>
                  {trainer.parties[0] ? (
                    <Row xs={1} md={3}>
                      {party.map((pokemon) => {
                        return (
                          <Col>
                            <Card bg={mainColor} text={text}>
                              <Card.Img
                                src="https://cdn-icons-png.flaticon.com/128/743/743977.png"
                                alt="Pokemon image"
                              />
                              <Card.ImgOverlay>
                                <Card.Title style={{ textAlign: "center" }}>
                                  {pokemon}
                                </Card.Title>
                              </Card.ImgOverlay>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  ) : (
                    "Trainer has no party."
                  )}
                </Card.Body>
              </Card>
            )}

            {/* BADGES CARD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {!editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <Card.Header>Current Badges</Card.Header>
                <Card.Body style={{ textAlign: "center" }}>
                  {badges}
                </Card.Body>
              </Card>
            )}

            {editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <Card.Header>Change Badges</Card.Header>
                <BadgesForm />
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
