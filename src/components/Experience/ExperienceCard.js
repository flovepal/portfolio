import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdOutlineLightbulb } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

function ExperienceCard(props) {
  return (
    <Card className="exp-card">

      <Card.Body>

        {/* 🔹 Role */}
        <h4 className="exp-role">{props.role}</h4>

        {/* 🔹 Company */}
        <h6 className="exp-company">
          <FaBuilding /> {props.company}
        </h6>

        {/* 🔹 Info Row */}
        <div className="exp-meta">
          <span><FaMapMarkerAlt /> {props.location}</span>
          <span><FaCalendarAlt /> {props.duration}</span>
        </div>

        {/* 🔹 Divider */}
        <hr className="exp-divider" />

        {/* 🔹 Description */}
        <p className="exp-desc">{props.description}</p>

        {/* 🔹 Tech Stack */}
        <div className="exp-section">
          <p className="exp-heading">
            <GiSkills /> Tech Stack
          </p>

          <div>
            {props.tech.map((item, index) => (
              <span key={index} className="exp-badge">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 🔹 Learnings */}
        <div className="exp-section">
          <p className="exp-heading">
            <MdOutlineLightbulb /> Key Learnings
          </p>

          <ul className="exp-list">
            {props.learnings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 🔹 Documents */}
        <div className="exp-docs">
          {props.offerLetter && (
            <Button variant="outline-light" href={props.offerLetter} target="_blank">
              <HiDocumentText /> Offer
            </Button>
          )}

          {props.completionLetter && (
            <Button variant="primary" href={props.completionLetter} target="_blank">
              <HiDocumentText /> Certificate
            </Button>
          )}
        </div>

      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;