import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiPostgresql,
  DiDocker,
  DiLinux,
} from "react-icons/di";
import {
  SiOdoo,
  SiJira,
  SiPowerbi,
  SiMicrosoftsqlserver,
  SiTableau,
  SiSalesforce,
  SiSap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOdoo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSalesforce />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
    </Row>
  );
}

export default Techstack;
