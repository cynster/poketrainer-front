import { Card, Button, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import moment from "moment";

export default function TrainerCard(trainer) {
  //IF no party is set, show that no party is set
  function party() {
    if (Object.keys(trainer.party).length === 0) {
      return "Party: ✗";
    } else {
      return "Party: ✓";
    }
  }

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Col>
      <Card className="mt-5" bg="light" key={trainer.id}>
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
          <Card.Text className="text-muted">
            Since {moment(trainer.created).format("LL")}
          </Card.Text>
          <Card.Text>
            {trainer.buddy ? "Buddy: " + trainer.buddy : "Buddy: ✗"}
          </Card.Text>
          <Card.Text>{party()}</Card.Text>
          <Card.Text>
            {trainer.badges ? "Badges: " + trainer.badges : "Badges: 0"}
          </Card.Text>
          <Link to={`/trainerprofile/${trainer.id}`}>
            <Button variant="primary">Show profile</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
