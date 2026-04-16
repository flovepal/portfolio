import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* NORMAL CARD */}
      <Card className="project-card-view">
        {props.imgPath && (
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        )}

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Button variant="primary" onClick={() => setShowModal(true)}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      {/* POPUP MODAL */}
{showModal && (
  <div
    onClick={() => setShowModal(false)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)", // darker overlay
      backdropFilter: "blur(6px)",   // 🔥 smooth background blur
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999,
    }}
  >
    {/* Prevent closing when clicking inside */}
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "550px",
        maxWidth: "90%",
      }}
    >
      <Card
        style={{
          background: "#ffffff",        // ✅ fully opaque
          color: "#000000",
          borderRadius: "12px",
          padding: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          opacity: 1,                   // ✅ force solid
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontWeight: "600", fontSize: "1.3rem" }}>
            {props.title}
          </Card.Title>

          <hr />

          <p><strong>Problem:</strong><br />{props.problem}</p>

          <p><strong>Solution:</strong><br />{props.solution}</p>

          <p><strong>Challenges:</strong><br />{props.challenges}</p>

          <div style={{ textAlign: "right" }}>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
)}
    </>
  );
}

export default ProjectCards;