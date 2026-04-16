import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">

          {/* TEXT */}
          <Col md={8} xs={12} className="home-about-description">
            <h1 className="intro-heading">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am an aspiring <b className="purple">AI & Machine Learning Engineer </b> 
              with a strong interest in building intelligent systems that can solve 
              real-world problems. I enjoy combining theoretical knowledge with 
              practical implementation to create impactful solutions.
              <br /><br />

              I have hands-on experience in
              <i>
                <b className="purple">
                  {" "}Python, Java, Machine Learning, and Data Structures{""}
                </b>
              </i>
          . I am continuously improving my skills in deep learning 
              and advanced AI concepts.
              <br /><br />

              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}Artificial Intelligence, Computer Vision, and Intelligent Systems{" "}
                </b>
              </i>
              where I focus on building models that can learn, adapt, and make 
              meaningful predictions.
              <br /><br />

              I also enjoy working on
              <b className="purple"> real-time problem solving </b>
              and developing projects that integrate software with practical 
              applications, enhancing both performance and usability.
              <br /><br />

              Currently, I am focused on strengthening my expertise in
              <i>
                <b className="purple">
                  {" "}Deep Learning, Neural Networks, and AI-driven applications
                </b>
              </i>{" "}
              to contribute effectively in the field of intelligent technologies.
            </p>
          </Col>

          {/* AVATAR */}
          <Col md={4} xs={12} className="myAvtar">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <img src={myImg} className="img-fluid avatar-img" alt="avatar" />
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;