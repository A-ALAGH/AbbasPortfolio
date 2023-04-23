import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abbas LAGHOUB </span>
            from <span className="purple"> Algiers,Algeria.</span>
            <br />I am a junior web developper.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports, especially soccer.
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking.
            </li>
            <li className="about-activity">
              <ImPointRight /> Scuba Diving.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code, Develop, Grow!"{" "}
          </p>
          <footer className="blockquote-footer">Abbas LAGHOUB</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
