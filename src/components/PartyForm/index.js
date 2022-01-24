import { Card, Form, Button, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectTrainerDetails } from "../../store/trainers/selectors";

export default function PartyForm() {
  const trainer = useSelector(selectTrainerDetails);

  // Shows 151 options; One for each pokemon.
  function pokemonOptions() {
    var result = [];
    for (var i = 1; i < 152; i++) {
      result.push(<option value={toString(i)}>{i}</option>)
    }
    return result
  }

  return (
    <Card.Body>
      {trainer.parties[0] ? (
        <Form>
          <Row xs={1} md={3}>
            <Form.Group className="mt-3">
              <Form.Label>Slot 1</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].firstPokemon
                    ? trainer.parties[0].firstPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Slot 2</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].secondPokemon
                    ? trainer.parties[0].secondPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Slot 3</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].thirdPokemon
                    ? trainer.parties[0].thirdPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Slot 4</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].fourthPokemon
                    ? trainer.parties[0].fourthPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Slot 5</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].fifthPokemon
                    ? trainer.parties[0].fifthPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Slot 6</Form.Label>
              <Form.Select
                defaultValue={
                  trainer.parties[0].sixthPokemon
                    ? trainer.parties[0].sixthPokemon
                    : ""
                }
              >
                <option value="">Select Pokemon</option>
                {pokemonOptions()}
              </Form.Select>
            </Form.Group>
          </Row>
          <Form.Group className="mt-3">
            <Button
              variant="primary"
              type="submit"
              //onClick={submitForm}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      ) : (
        <Card.Text>You don't have a party yet! Create one now:</Card.Text>
      )}
    </Card.Body>
  );
}
