import { Card, Form, Button, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";

import { selectBuddy } from "../../../store/pokemon/selectors";
import { selectTrainerDetails } from "../../../store/trainers/selectors";

export default function MainCard() {
  


  
  const trainer = useSelector(selectTrainerDetails);
  const buddy = useSelector(selectBuddy);

  // Makes the first character of the string upper case
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
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
          Last updated {moment(trainer.createdAt).startOf("hour").fromNow()}
        </Card.Text>
        <hr />
        <Card.Title>Buddy</Card.Title>
        {trainer.buddy ? (
          <div>
            <Card.Text>
              <b>{(buddy.name)}</b>
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
  );
}
