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

import { selectTrainerDetails } from "../../store/trainers/selectors";
import { selectTrainer } from "../../store/trainer/selectors";
import { selectPokemon } from "../../store/pokemon/selectors";
import { selectBuddy } from "../../store/pokemon/selectors";
import { fetchBuddyById } from "../../store/pokemon/actions";
import { fetchPokemonById } from "../../store/pokemon/actions";
import { fetchTrainerById } from "../../store/trainers/actions";

export default function TrainerProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const trainer = useSelector(selectTrainerDetails);
  const user = useSelector(selectTrainer);
  const pokemons = useSelector(selectPokemon);
  const buddy = useSelector(selectBuddy);
  const [editMode, setEditMode] = useState(false);
  const [party, setParty] = useState([]);

  const getPokemonById = (pokemonId) => {
    const pokemon = pokemons.find((pokemon) => {
      return pokemon.id === pokemonId;
    });
    return pokemon ? pokemon : { name: "", image: "" };
  };

  // Makes the first character of the string upper case
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    dispatch(fetchTrainerById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (trainer && trainer.parties[0]) {
      setParty(Object.values(trainer.parties[0]).slice(0, 6));
    }
  }, [trainer]);

  useEffect(() => {
    if (trainer) {
      dispatch(fetchBuddyById(trainer.buddy));
    }
  }, [dispatch, trainer]);

  useEffect(() => {
    if (party) {
      party.forEach((pokemonId) => {
        dispatch(fetchPokemonById(pokemonId));
      });
    }
  }, [dispatch, party]);

  // Show loading when trainer does not exist
  if (!trainer || parseInt(trainer.id) !== parseInt(id)) return <Loading />;

  // Badges
  const badges = trainer.badges ? trainer.badges : "Trainer has no badges.";

  // Setting profile colors
  const mainColor = trainer.mainColor ? trainer.mainColor : "light";
  const secondaryColor = trainer.secondaryColor ? trainer.secondaryColor : "";
  const text = mainColor === "light" ? "dark" : "white";

  // Show edit button when logged in trainer matches the TrainerdetailsID
  const displayEditButton = trainer.id === user.id;

  

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
                          <b>{buddy.name}</b>
                        </Card.Text>
                        <Card.Img variant="top" src={buddy.image} />
                        <Card.Text>
                          <b>Number:</b> {buddy.id}
                        </Card.Text>
                        <Card.Text>
                          <b>Type: </b> {buddy.type1}
                          {buddy.type2 ? ` / ${buddy.type2}` : ""}
                        </Card.Text>
                        <Card.Text>
                          <b>Weight: </b>
                          {buddy.weight} hg
                        </Card.Text>
                        <Card.Text>
                          <b>Height: </b>
                          {buddy.height} dm
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
                  Current Party {" "}
                  {trainer.parties[0]
                    ? `- ${trainer.parties[0].trainersParties.name}`
                    : ""}
                </Card.Header>
                <Card.Body style={{ textAlign: "center" }}>
                  {trainer.parties[0] ? (
                    <Row xs={1} md={3}>
                      {party.map((pokemonId) => {
                        return (
                          <Col key={pokemonId}>
                            <Card bg={mainColor} text={text}>
                              <Card.Img
                                src={getPokemonById(pokemonId).image}
                                alt="Pokemon image"
                              />
                              <Card.ImgOverlay>
                                <Card.Title style={{ textAlign: "center" }}>
                                  {getPokemonById(pokemonId).name}
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
                <Card.Body style={{ textAlign: "center" }}>{badges}</Card.Body>
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
