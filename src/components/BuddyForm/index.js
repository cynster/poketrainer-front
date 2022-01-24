import { Card, Form, Button, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function BuddyForm() {
  return (
    <Card.Body>
      <Form>
        <Form.Group className="mt-3">
          <Form.Select>
            <option>Select buddy</option>
            <option value="1">Pokemon 1</option>
            <option value="2">Pokemon 2</option>
            <option value="3">Pokemon 3</option>
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
