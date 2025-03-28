import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">
              © {new Date().getFullYear()} Full Stack Developer Tebarek Abas.
              All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-md-end gap-3">
              <a
                href="https://github.com/tebarek94"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/tebarekabas/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
