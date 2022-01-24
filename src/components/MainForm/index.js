import { Card, Form, Button, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { selectTrainer } from "../../store/trainer/selectors";


export default function MainForm() {

  const trainer = useSelector(selectTrainer)

  const dispatch = useDispatch();
  function submitForm(event) {
    event.preventDefault();

    //dispatch());
  }

  return (
    <Card.Body>
      <Form>
        <Form.Group className="mt-3">
          <Form.Label>Image</Form.Label>
          <Form.Select defaultValue={trainer.buddy ? trainer.buddy : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"}>
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
          <Form.Select defaultValue={trainer.buddy ? trainer.buddy : ""}>
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Main color</Form.Label>
          <Form.Select defaultValue={trainer.mainColor ? trainer.mainColor : ""}>
            <option value="">Select</option>
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
          <Form.Select defaultValue={trainer.secondaryColor ? trainer.secondaryColor : ""}>
            <option value="">Select</option>
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
          <Button
            variant="primary"
            type="submit"
            //onClick={submitForm}
          >
            Save
          </Button>
        </Form.Group>
      </Form>
    </Card.Body>
  );
}
