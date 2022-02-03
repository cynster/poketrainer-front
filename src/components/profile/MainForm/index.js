import { Card, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTrainer } from "../../../store/trainer/selectors";
import { updateProfile } from "../../../store/trainer/actions";

export default function MainForm(props) {
  const dispatch = useDispatch();
  const trainer = useSelector(selectTrainer);

  const [image, setImage] = useState(
    trainer.image
      ? trainer.image
      : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"
  );
  const [buddy, setBuddy] = useState(trainer.buddy ? trainer.buddy : "");
  const [mainColor, setMainColor] = useState(
    trainer.mainColor ? trainer.mainColor : ""
  );
  const [secondaryColor, setSecondaryColor] = useState(
    trainer.secondaryColor ? trainer.secondaryColor : ""
  );

  // Makes the first character of the string upper case
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

  function submitForm(event) {
    //event.preventDefault();
    dispatch(updateProfile(image, buddy, mainColor, secondaryColor));
  }

  return (
    <Card.Body>
      <Form>
        <Form.Group className="mt-3">
          <Form.Label>Image</Form.Label>
          <Form.Select
            defaultValue={image}
            onChange={(event) => setImage(event.target.value)}
          >
            <option>Select</option>
            <option value="https://archives.bulbagarden.net/media/upload/7/79/Spr_BW_Striker.png">
              Striker
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/7/73/Spr_BW_Biker.png">
              Biker
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/0/0b/Spr_BW_Janitor.png">
              Janitor
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/b/b6/Spr_BW_Hoopster.png">
              Hoopster
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/0/03/Spr_BW_Backpacker_M.png">
              Backpacker (M)
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/9/9d/Spr_BW_Backpacker_F.png">
              Backpacker (F)
            </option>
            <option value="https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png">
              Fisherman
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Buddy</Form.Label>
          <Form.Select
            defaultValue={buddy}
            onChange={(event) => setBuddy(event.target.value)}
          >
            <option>Select</option>
            {pokemonOptions()}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Main color</Form.Label>
          <Form.Select
            defaultValue={mainColor}
            onChange={(event) => setMainColor(event.target.value)}
          >
            <option>Select</option>
            <option value="light">Light-grey</option>
            <option value="secondary">Dark-grey</option>
            <option value="dark">Black</option>
            <option value="danger">Red</option>
            <option value="primary">Blue</option>
            <option value="info">Light-blue</option>
            <option value="success">Green</option>
            <option value="warning">Yellow</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Secondary color</Form.Label>
          <Form.Select
            defaultValue={secondaryColor}
            onChange={(event) => setSecondaryColor(event.target.value)}
          >
            <option>Select</option>
            <option value="light">Light-grey</option>
            <option value="secondary">Dark-grey</option>
            <option value="dark">Black</option>
            <option value="danger">Red</option>
            <option value="primary">Blue</option>
            <option value="info">Light-blue</option>
            <option value="success">Green</option>
            <option value="warning">Yellow</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Save
          </Button>
        </Form.Group>
      </Form>
    </Card.Body>
  );
}
