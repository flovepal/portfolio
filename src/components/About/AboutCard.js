import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">John Paul</span> from{" "}
            <span className="purple">Tamil Nadu, India</span>.
            <br />
            I am an aspiring{" "}
            <span className="purple">AI & Machine Learning Engineer</span>{" "}
            with a strong interest in developing intelligent systems and solving
            real-world problems using technology.
            <br />
            <br />
            I have a background in{" "}
            <span className="purple">Computer Science and Engineering</span>{" "}
            and I am continuously exploring areas like{" "}
            <span className="purple">Machine Learning, Deep Learning,</span> and{" "}
            <span className="purple">Artificial Intelligence</span>.
            <br />
            <br />
            I enjoy building projects, learning new technologies, and improving
            my problem-solving skills to grow as a developer.
            <br />
            <br />
            Outside of coding, I like to keep myself creative and active:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Skating 🛹
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Keyboard 🎹
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building intelligent solutions, one step at a time."
          </p>
          <footer className="blockquote-footer">John Paul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;