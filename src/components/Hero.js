import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import profileImage from "../assets/images/my image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section py-5 bg-black"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Container className="py-5 bg-dark text-white">
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0 order-lg-1 order-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4">Hi, I'm Tebarek Abas</h1>
              <h2 className="text-primary mb-4">Full Stack Developer</h2>
              <p className="lead mb-4">
                I build scalable, responsive, and high-performance web
                applications using modern technologies.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button
                  href="#projects"
                  variant="primary"
                  size="lg"
                  className="shadow"
                >
                  View My Work
                </Button>
                <Button
                  href="#contact"
                  variant="outline-primary"
                  size="lg"
                  className="shadow"
                >
                  Contact Me
                </Button>
                <Button
                  href="/resume.pdf"
                  variant="outline-secondary"
                  size="lg"
                  className="shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                  Resume
                </Button>
              </div>
              <div className="social-icons d-flex gap-3 mb-4">
                <motion.a
                  href="https://github.com/tebarek94"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tebarekabas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </motion.a>
                <motion.a
                  href="mailto:tebarekabas@example.com"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </motion.a>
              </div>
            </motion.div>
          </Col>

          <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="hero-image"
            >
              <div className="profile-image-container">
                <img
                  src={profileImage}
                  alt="Tebarek Abas"
                  className="profile-image img-fluid rounded-circle shadow-lg"
                  loading="lazy"
                />
                <div className="profile-image-border"></div>
                <div className="profile-image-dots"></div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
