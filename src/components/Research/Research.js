import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research</strong>
        </h1>
        <p style={{ color: "white" }}>
          Research and experiments in AI & Machine Learning.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Deep Learning for Image Classification"
              description="Worked on CNN architectures for image classification tasks using TensorFlow and PyTorch. Improved model accuracy using transfer learning techniques."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Natural Language Processing"
              description="Explored NLP techniques for text classification and sentiment analysis using Scikit-learn and deep learning models."
              ghLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Research;