import { Card, Form, Button, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function BadgesForm() {
  return (
    <Card.Body>
      <Form>
      <Row xs={1} md={4}>
      <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 1`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 2`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 3`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 4`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 5`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 6`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 7`}
          />
        </Form.Group>
        <Form.Group className="mt-3" controlId="formBasicCheckbox">
          <Form.Check
            //type={type}
            //id={`default-${type}`}
            label={`Badge 8`}
          />
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
