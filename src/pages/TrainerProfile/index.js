import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
// Components
import Loading from "../../components/loading";
import BadgesForm from "../../components/profile/BadgesForm";
import PartyForm from "../../components/profile/PartyForm";
import MainForm from "../../components/profile/MainForm";
import MainCard from "../../components/profile/MainCard";
import BadgesCard from "../../components/profile/BadgesCard";
// Selectors
import { selectTrainerDetails } from "../../store/trainers/selectors";
import { selectTrainer } from "../../store/trainer/selectors";
import { selectPokemon } from "../../store/pokemon/selectors";
import { selectAllPokemonNames } from "../../store/pokemon/selectors";
// Actions
import { fetchPokemonById, fetchBuddyById } from "../../store/pokemon/actions";
import { fetchTrainerById } from "../../store/trainers/actions";
import { fetchAllPokemonNames } from "../../store/pokemon/actions";
import { updateBadges } from "../../store/trainer/actions";

export default function TrainerProfile() {
  const dispatch = useDispatch();
  const { id } = useParams();

  //First letter of a string to uppercase.
  function firstLetterUpperCase(string) {
    const name = string ? string : "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const trainer = useSelector(selectTrainerDetails);
  const user = useSelector(selectTrainer);
  const pokemons = useSelector(selectPokemon);
  const allPokemonNames = useSelector(selectAllPokemonNames);

  const [editMode, setEditMode] = useState(false);
  const [party, setParty] = useState([]);

  const [badge1, setBadge1] = useState(false);
  const [badge2, setBadge2] = useState(false);
  const [badge3, setBadge3] = useState(false);
  const [badge4, setBadge4] = useState(false);
  const [badge5, setBadge5] = useState(false);
  const [badge6, setBadge6] = useState(false);
  const [badge7, setBadge7] = useState(false);
  const [badge8, setBadge8] = useState(false);

  function submitBadgesForm() {
    console.log(
      "badges:",
      badge1,
      badge2,
      badge3,
      badge4,
      badge5,
      badge6,
      badge7,
      badge8
    );
    dispatch(
      updateBadges(
        badge1,
        badge2,
        badge3,
        badge4,
        badge5,
        badge6,
        badge7,
        badge8
      )
    );
  }

  const getPokemonById = (pokemonId) => {
    const pokemon = pokemons.find((pokemon) => {
      return pokemon.id === pokemonId;
    });
    return pokemon ? pokemon : { name: "", image: "" };
  };

  // Set badges
  useEffect(() => {
    if (trainer) {
      setBadge1(trainer.badge1);
      setBadge2(trainer.badge2);
      setBadge3(trainer.badge3);
      setBadge4(trainer.badge4);
      setBadge5(trainer.badge5);
      setBadge6(trainer.badge6);
      setBadge7(trainer.badge7);
      setBadge8(trainer.badge8);
    }
  }, [dispatch, trainer]);

  // Fetching Trainerdata
  useEffect(() => {
    dispatch(fetchTrainerById(id));
  }, [dispatch, id]);

  //Slicing Party if there is a Trainer and the trainer has a party
  useEffect(() => {
    if (trainer && trainer.parties[0]) {
      setParty(Object.values(trainer.parties[0]).slice(0, 6));
    }
  }, [trainer]);

  // Fetching Pokemondata of the buddy if there is a buddy
  useEffect(() => {
    if (trainer) {
      dispatch(fetchBuddyById(trainer.buddy));
    }
  }, [dispatch, trainer]);

  // Fetching Pokemondata of the party Pokemon if there is a party
  useEffect(() => {
    if (party) {
      party.forEach((pokemonId) => {
        dispatch(fetchPokemonById(pokemonId));
      });
    }
  }, [dispatch, party]);

  // Fetching all names of supported Pokemon
  useEffect(() => {
    const supportedPokemon = 151;
    dispatch(fetchAllPokemonNames(supportedPokemon));
  }, [dispatch]);

  // Show loading when trainer does not exist
  if (!trainer || parseInt(trainer.id) !== parseInt(id)) return <Loading />;

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
            {/* TRAINER CARD */}

            <Card
              className="mt-5"
              bg={mainColor}
              border={secondaryColor}
              text={text}
            >
              {displayEditButton ? (
                <Card>
                  <Button onClick={() => setEditMode(!editMode)}>
                    {editMode ? "Cancel" : "Edit profile"}
                  </Button>
                </Card>
              ) : (
                ""
              )}
              {!editMode && <MainCard />}
              {editMode && <MainForm allPokemonNames={allPokemonNames} />}
            </Card>
          </Col>

          <Col sm={9}>
            {/* PARTY CARD */}
            {editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <PartyForm allPokemonNames={allPokemonNames} />
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
                  Current Party{" "}
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
                            <Card
                              bg={mainColor}
                              text={text}
                              style={{ marginBottom: "15px" }}
                            >
                              <Card.Img
                                src={getPokemonById(pokemonId).image}
                                alt="Pokemon image"
                              />
                              <Card.ImgOverlay>
                                <Card.Title style={{ textAlign: "center" }}>
                                  {firstLetterUpperCase(
                                    getPokemonById(pokemonId).name
                                  )}
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

            {/* BADGES CARD */}
            {!editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <BadgesCard
                  badge1={badge1}
                  badge2={badge2}
                  badge3={badge3}
                  badge4={badge4}
                  badge5={badge5}
                  badge6={badge6}
                  badge7={badge7}
                  badge8={badge8}
                />
              </Card>
            )}

            {editMode && (
              <Card
                className="mt-5"
                bg={mainColor}
                border={secondaryColor}
                text={text}
              >
                <BadgesForm
                  badge1={badge1}
                  badge2={badge2}
                  badge3={badge3}
                  badge4={badge4}
                  badge5={badge5}
                  badge6={badge6}
                  badge7={badge7}
                  badge8={badge8}
                  setBadge1={setBadge1}
                  setBadge2={setBadge2}
                  setBadge3={setBadge3}
                  setBadge4={setBadge4}
                  setBadge5={setBadge5}
                  setBadge6={setBadge6}
                  setBadge7={setBadge7}
                  setBadge8={setBadge8}
                  submitForm={submitBadgesForm}
                />
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
