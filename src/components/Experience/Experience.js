import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../../Data/experienceData";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>

        <p style={{ color: "white" }}>
          Internships and real-world experience.
        </p>

        <Row
  style={{
    justifyContent: "center",
    rowGap: "40px",
    paddingBottom: "40px",
    marginTop: "30px",
  }}
>
  {experienceData.map((exp, index) => (
    <Col md={8} lg={6} className="project-card" key={index}>
      <ExperienceCard {...exp} />
    </Col>
  ))}
</Row>

      </Container>
    </Container>
  );
}

export default Experience;