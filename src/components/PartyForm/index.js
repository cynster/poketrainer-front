import { Card, Form, Button, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function PartyForm() {
  return (
    <Card.Body>
      <Form>
      <Row xs={1} md={3}>
        <Form.Group className="mt-3">
        <Form.Label>Slot 1</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label>Slot 2</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label>Slot 3</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label>Slot 4</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label>Slot 5</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
        <Form.Label>Slot 6</Form.Label>
          <Form.Select>
            <option>Select Pokemon</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
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
    </Card.Body>
  );
}
