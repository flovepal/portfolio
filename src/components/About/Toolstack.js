import React from "react";
import { Col, Row } from "react-bootstrap";

// Icons
import {
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
  SiGit,
  SiPostman,
  SiDocker,
  SiMicrosoftazure,
} from "react-icons/si";

function Toolstack() {
  const iconStyle = { fontSize: "3rem", marginBottom: "10px" };

  return (
    <>
      <h2 className="tech-heading">Development Tools & Environment</h2>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode style={iconStyle} />
          <div className="tech-icons-text">VS Code</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter style={iconStyle} />
          <div className="tech-icons-text">Jupyter Notebook</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecolab style={iconStyle} />
          <div className="tech-icons-text">Google Colab</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGit style={iconStyle} />
          <div className="tech-icons-text">Git</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPostman style={iconStyle} />
          <div className="tech-icons-text">Postman</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiDocker style={iconStyle} />
          <div className="tech-icons-text">Docker</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure style={iconStyle} />
          <div className="tech-icons-text">Microsoft Azure</div>
        </Col>

      </Row>
    </>
  );
}

export default Toolstack;