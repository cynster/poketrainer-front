import { Card, Button, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function PokeCard(poke) {
  //IF no party is set, show that no party is set
  //   function party() {
  //     if (Object.keys(props.party).length === 0) {
  //       return "Party: ✗";
  //     } else {
  //       return "Party: ✓";
  //     }
  //   }
  
  return (
    <Col>
      <Card className="mt-5" key={poke.id}>
        <Card.Body>
          <Card.Title>{poke.party[0]}</Card.Title>
          {/* <Card.Title>{poke.party.secondPokemon}</Card.Title>
          <Card.Title>{poke.party.firstPokemon}</Card.Title>
          <Card.Title>{poke.party.firstPokemon}</Card.Title>
          <Card.Title>{poke.party.firstPokemon}</Card.Title>
          <Card.Title>{poke.party.firstPokemon}</Card.Title> */}
        </Card.Body>
      </Card>
    </Col>
  );
}
