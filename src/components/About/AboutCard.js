import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
            Hi Everyone, I am <span className="primary-header">Mohamed Essam </span> from Egypt,.I am an experienced Odoo Techno-Functional Consultant with a proven track record in implementing comprehensive solutions across financial management, supply chain management, sales, CRM, planning, manufacturing, and HRM. My unique blend of technical expertise and business acumen allows me to understand customer needs thoroughly and deliver successful implementations. I specialize in financial management, trade and logistics, discrete and process manufacturing, HR, and real estate .
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> ERP IMPLEMENTATION
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Efficient Data Migration and System Integration
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Odoo Trainning
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Odoo Support
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
