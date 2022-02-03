import { Card, Form, Button, Row, Col } from "react-bootstrap";

export default function BadgesForm(props) {
  function badgeEarned(badge) {
    if (badge === false) {
      return 0.2;
    } else {
      return 1;
    }
  }

  return (
    <div>
      <Card.Header>Change Badges</Card.Header>
      <Card.Body>
        <Form></Form>
      </Card.Body>

      <Card.Body>
        <Row xs={1} md={4}>
          <Col style={{ opacity: `${badgeEarned(props.badge1)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge1(!props.badge1)}
              value={props.badge1}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/d/dd/Boulder_Badge.png/50px-Boulder_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Boulder Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge2)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge2(!props.badge2)}
              value={props.badge2}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/9/9c/Cascade_Badge.png/50px-Cascade_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Cascade Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge3)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge3(!props.badge3)}
              value={props.badge3}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/a/a6/Thunder_Badge.png/50px-Thunder_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Thunder Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge4)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge4(!props.badge4)}
              value={props.badge4}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/b/b5/Rainbow_Badge.png/50px-Rainbow_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Rainbow Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge5)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge5(!props.badge5)}
              value={props.badge5}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/7/7d/Soul_Badge.png/50px-Soul_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Soul Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge6)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge6(!props.badge6)}
              value={props.badge6}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/6/6b/Marsh_Badge.png/50px-Marsh_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Marsh Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge7)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge7(!props.badge7)}
              value={props.badge7}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/1/12/Volcano_Badge.png/50px-Volcano_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Vulcano Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ opacity: `${badgeEarned(props.badge8)}` }}>
            <Card
              style={{ marginBottom: "15px", cursor: "pointer" }}
              onClick={() => props.setBadge8(!props.badge8)}
              value={props.badge8}
            >
              <Card.Img
                variant="top"
                src={
                  "https://archives.bulbagarden.net/media/upload/thumb/7/78/Earth_Badge.png/50px-Earth_Badge.png"
                }
              />
              <Card.ImgOverlay>
                <Card.Title style={{ textAlign: "center" }}>
                  <b>Earth Badge</b>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Button variant="primary" type="submit" onClick={props.submitForm}>
          Save
        </Button>
      </Card.Body>
    </div>
  );
}
