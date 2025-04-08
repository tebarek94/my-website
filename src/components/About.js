import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiDjango, SiExpress } from "react-icons/si";
import profileImage from "../assets/images/my image.jpg"; // Make sure this path is correct

const About = () => {
  const skills = [
    { id: 1, name: "React", icon: <FaReact size={24} />, color: "#61DAFB" },
    { id: 2, name: "Node.js", icon: <FaNodeJs size={24} />, color: "#68A063" },
    { id: 3, name: "Express", icon: <SiExpress size={24} />, color: "#000000" },
    { id: 4, name: "Django", icon: <SiDjango size={24} />, color: "#092E20" },
    { id: 5, name: "MongoDB", icon: <SiMongodb size={24} />, color: "#47A248" },
    {
      id: 6,
      name: "PostgreSQL",
      icon: <SiPostgresql size={24} />,
      color: "#336791",
    },
    { id: 7, name: "AWS", icon: <FaAws size={24} />, color: "#FF9900" },
    { id: 8, name: "Docker", icon: <FaDocker size={24} />, color: "#2496ED" },
  ];

  const aboutCards = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode size={32} />,
      description:
        "I build responsive, accessible, and performant user interfaces using React, Next.js, and modern CSS frameworks.",
      color: "#61DAFB",
    },
    {
      id: 2,
      title: "Backend Development",
      icon: <FaServer size={32} />,
      description:
        "I develop scalable server-side applications using Node.js, Express, and various databases to power robust web applications.",
      color: "#68A063",
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <FaDatabase size={32} />,
      description:
        "I implement CI/CD pipelines, containerization with Docker, and cloud solutions to deploy and maintain applications efficiently.",
      color: "#FF9900",
    },
  ];

  return (
    <section id="about" className="about-section py-5 bg-black text-white">
      <Container>
        <motion.h2
          className="text-center mb-5 section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <Row className="align-items-center mb-5 bg-black text-white p-4 rounded shadow-sm">
          <Col lg={4} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="profile-image-container"
            >
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image img-fluid rounded-circle shadow"
                loading="lazy"
              />
              <div className="profile-image-border"></div>
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="about-intro-card mb-4 bg-black text-white">
                <Card.Body>
                  <p className="lead mb-4">
                    I'm a passionate{" "}
                    <span className="highlight">Full Stack Developer</span> with
                    expertise in both frontend and backend technologies.
                  </p>
                  <p className="mb-0">
                    I specialize in creating seamless, user-friendly web
                    applications with clean, efficient code that solves
                    real-world problems.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-5">
          {aboutCards.map((card) => (
            <Col lg={4} md={6} key={card.id} className="mb-4 bg-black text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 about-card bg-black text-white shadow-sm">
                  <Card.Body className="text-center">
                    <div
                      className="card-icon-container mb-3"
                      style={{ color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="about-more-card bg-black text-white shadow-sm">
            <Card.Body>
              <Row className="align-items-center bg-black text-white">
                <Col md={6}>
                  <p className="mb-4 mb-md-0">
                    My skills include{" "}
                    <span className="highlight bg-black text-white">
                      React, Node.js, Express, MongoDB, PostgreSQL, and AWS
                    </span>
                    . I love solving complex problems and turning ideas into
                    reality.
                  </p>
                </Col>
                <Col md={6}>
                  <p className="mb-0 bg-black text-white">
                    When I'm not coding, I enjoy contributing to open-source
                    projects, learning new tech, and sharing knowledge through
                    blogs and tutorials.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </motion.div>

        <div className="skills-section mt-5">
  <h4 className="text-center mb-4">My Tech Stack</h4>
  <div
    className="skills-grid bg-black text-white p-4 rounded shadow-sm d-flex flex-wrap justify-content-center"
    style={{ gap: "1rem" }}
  >
    {skills.map((skill) => (
      <motion.div
        key={skill.id}
        className="skill-item p-3 rounded shadow-sm text-center bg-black text-white"
        style={{
          color: skill.color,
          backgroundColor: "#222",
          minWidth: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="skill-icon mb-2" style={{ fontSize: "2rem" }}>
          {skill.icon}
        </div>
        <span className="skill-name">{skill.name}</span>
      </motion.div>
    ))}
  </div>
</div>

      </Container>
    </section>
  );
};

About.propTypes = {
  profileImage: PropTypes.string,
};

export default About;
