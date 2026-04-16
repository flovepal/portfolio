import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
// Icons
import {
  SiPython,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiReact,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiMicrosoftazure,
  SiGit,
  SiPostman,
} from "react-icons/si";
function Techstack() {
  const iconStyle = { fontSize: "3rem", marginBottom: "10px" };

  return (
    <>
      {/* 🔹 Core Languages */}
      <h2 className="tech-heading">Core Languages</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython style={iconStyle} />
          <div className="tech-icons-text">Python</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <FaJava style={iconStyle} />
          <div className="tech-icons-text">Java</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiCplusplus style={iconStyle} />
          <div className="tech-icons-text">C++</div>
        </Col>
      </Row>

      {/* 🔹 AI / ML */}
      <h2 className="tech-heading">AI / ML / Deep Learning</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy style={iconStyle} />
          <div className="tech-icons-text">NumPy</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPandas style={iconStyle} />
          <div className="tech-icons-text">Pandas</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn style={iconStyle} />
          <div className="tech-icons-text">Scikit-learn</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow style={iconStyle} />
          <div className="tech-icons-text">TensorFlow</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiKeras style={iconStyle} />
          <div className="tech-icons-text">Keras</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPytorch style={iconStyle} />
          <div className="tech-icons-text">PyTorch</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiOpencv style={iconStyle} />
          <div className="tech-icons-text">OpenCV</div>
        </Col>
      </Row>

      {/* 🔹 Web Dev */}
      <h2 className="tech-heading">Web Development</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact style={iconStyle} />
          <div className="tech-icons-text">React.js</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiBootstrap style={iconStyle} />
          <div className="tech-icons-text">Bootstrap</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 style={iconStyle} />
          <div className="tech-icons-text">HTML</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 style={iconStyle} />
          <div className="tech-icons-text">CSS</div>
        </Col>
      </Row>

      {/* 🔹 APIs */}
      <h2 className="tech-heading">APIs & Deployment</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask style={iconStyle} />
          <div className="tech-icons-text">Flask</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi style={iconStyle} />
          <div className="tech-icons-text">FastAPI</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiDocker style={iconStyle} />
          <div className="tech-icons-text">Docker</div>
        </Col>
      </Row>

      {/* 🔹 Tools */}
      <h2 className="tech-heading">Cloud & Tools</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMicrosoftazure style={iconStyle} />
          <div className="tech-icons-text">Azure</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiGit style={iconStyle} />
          <div className="tech-icons-text">Git</div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiPostman style={iconStyle} />
          <div className="tech-icons-text">Postman</div>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;