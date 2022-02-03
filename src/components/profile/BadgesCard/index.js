import { Card } from "react-bootstrap";
import { selectTrainerDetails } from "../../../store/trainers/selectors";
import { useSelector } from "react-redux";

export default function BadgesCard() {
  const trainer = useSelector(selectTrainerDetails);

  // Badges
  const badges = trainer.badges ? trainer.badges : "Trainer has no badges.";

  return (
    <div>
      <Card.Header>Current Badges</Card.Header>
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>{badges}</Card.Text>
      </Card.Body>
    </div>
  );
}
