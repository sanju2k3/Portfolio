import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Sanjay A R </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />I am a pursuing Under Graduation in Artificial Intelligence And Data Science in BIT,Sathy
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Songs 🎶
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badmition 🤾‍♂️
            </li>
            <li className="about-activity">  
              <ImPointRight /> Travelling 🏍 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "செய்வதை துணிந்து செய்..."{" "}
          </p>
          <footer className="blockquote-footer">பாரதியார் </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
