import { Card, Button, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function TrainerCard(props) {
  //IF no party is set, show that no party is set
  function party() {
    if (Object.keys(props.party).length === 0) {
      return "Party: ✗";
    } else {
      return "Party: ✓";
    }
  }

  return (
    <Col>
      <Card className="mt-5" key={props.id}>
        <Card.Img
          variant="top"
          src={
            props.image
              ? props.image
              : "https://archives.bulbagarden.net/media/upload/9/96/Spr_BW_Fisherman.png"
          }
        />
        <Card.Body>
          <Card.Title>Trainer {props.username}</Card.Title>
          <Card.Text className="text-muted">Since {props.created}</Card.Text>
          <Card.Text>
            {props.buddy ? "Buddy: " + props.buddy : "Buddy: ✗"}
          </Card.Text>
          <Card.Text>{party()}</Card.Text>
          <Card.Text>
            {props.badges ? "Badges: " + props.badges : "Badges: 0"}
          </Card.Text>
          <Link to={`/trainerprofile/${props.id}`}>
            <Button variant="primary">Show profile</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
