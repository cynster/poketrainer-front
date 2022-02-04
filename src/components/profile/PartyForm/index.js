import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { selectToken } from "../../../store/trainer/selectors";
import { selectTrainerDetails } from "../../../store/trainers/selectors";
import { updateParty } from "../../../store/trainer/actions";

export default function PartyForm(props) {
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const trainer = useSelector(selectTrainerDetails);

  // Makes the first character of the string upper case
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const token = useSelector(selectToken);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const [firstPokemon, setFirstPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].firstPokemon : ""
  );
  const [secondPokemon, setSecondPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].secondPokemon : ""
  );
  const [thirdPokemon, setThirdPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].thirdPokemon : ""
  );
  const [fourthPokemon, setFourthPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].fourthPokemon : ""
  );
  const [fifthPokemon, setFifthPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].fifthPokemon : ""
  );
  const [sixthPokemon, setSixthPokemon] = useState(
    trainer.parties[0] ? trainer.parties[0].sixthPokemon : ""
  );

  function submitForm(event) {
    //event.preventDefault();

    dispatch(
      updateParty(
        firstPokemon,
        secondPokemon,
        thirdPokemon,
        fourthPokemon,
        fifthPokemon,
        sixthPokemon
      )
    );
  }

  // Shows 151 options; One for each pokemon.
  function pokemonOptions() {
    var result = [];
    var number = 1;
    props.allPokemonNames.map((pokemon) => {
      result.push(
        <option key={number} value={number}>{`${number}. ${firstLetterUpperCase(
          pokemon.name
        )}`}</option>
      );
      return number++;
    });
    return result;
  }

  return (
    <div>
      <Card.Header>Change Party</Card.Header>
      <Card.Body>
        {trainer.parties[0] ? (
          <Form>
            <Row xs={1} md={3}>
              <Form.Group className="mt-3">
                <Form.Label>Slot 1</Form.Label>
                <Form.Select
                  defaultValue={firstPokemon}
                  onChange={(event) => setFirstPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Slot 2</Form.Label>
                <Form.Select
                  defaultValue={secondPokemon}
                  onChange={(event) => setSecondPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Slot 3</Form.Label>
                <Form.Select
                  defaultValue={thirdPokemon}
                  onChange={(event) => setThirdPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Slot 4</Form.Label>
                <Form.Select
                  defaultValue={fourthPokemon}
                  onChange={(event) => setFourthPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Slot 5</Form.Label>
                <Form.Select
                  defaultValue={fifthPokemon}
                  onChange={(event) => setFifthPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mt-3">
                <Form.Label>Slot 6</Form.Label>
                <Form.Select
                  defaultValue={sixthPokemon}
                  onChange={(event) => setSixthPokemon(event.target.value)}
                >
                  <option value="">Select Pokemon</option>
                  {pokemonOptions()}
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className="mt-3">
              <Button variant="primary" type="submit" onClick={submitForm}>
                Save
              </Button>
            </Form.Group>
          </Form>
        ) : (
          <Row>
            <Col sm={2}>
              <Card.Img src="https://archives.bulbagarden.net/media/upload/4/4c/Spr_FRLG_Oak.png" />
            </Col>
            <Col sm={10}>
              <Card.Text>
                You don't have a party yet. Click the button below, and
                professor Oak will give you a random starter!
              </Card.Text>
              <p>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={props.submitPartyForm}
                >
                  Get starter!
                </Button>
              </p>
            </Col>
          </Row>
        )}
      </Card.Body>
    </div>
  );
}
