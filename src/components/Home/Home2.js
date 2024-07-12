import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">
                ERP Consultant with Experience in Financial Management and ERP Systems Implementation
              </i>{" "}
             Experienced ERP Consultant and Product Owner with a robust background in financial management and ERP systems implementation. Skilled in gathering and documenting business requirements, analyzing and optimizing business processes, and providing detailed functional specifications for ERP systems. Proficient in collaborating with development teams, conducting user acceptance testing, training end-users, and offering ongoing support. Demonstrates strong project management abilities, ensuring ERP systems meet organizational needs and deliver exceptional value to stakeholders.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">modules </i> Accounting, Supply chain management, Inventory and Manufacturing, Sales & CRM , POS, Project, Manufacturing.
              <br />
               <br />I am passionate about{" "}
              <i className="primary-header">industries </i> Food, Trade & Logistics, Manufacturing,Construction,Real estate,Logistics.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header"> </i> Looking for an opportunity to work in a challenging position combining my skills in ERP Consulting, which provides professional development, interesting experiences, and personal growth.
              <br />
             .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/mohamedabuemira"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MohamedAbuemira"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:mohamedabuemira@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abuemira/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
