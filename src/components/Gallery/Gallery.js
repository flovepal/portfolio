import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import img1 from "../../Assets/Projects/chatify.png";
import img2 from "../../Assets/Projects/codeEditor.png";

function Gallery() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Gallery</strong>
        </h1>
        <p style={{ color: "white" }}>
          Some highlights, projects, and moments.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Project Screenshot</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Code Editor UI</Card.Title>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Gallery;