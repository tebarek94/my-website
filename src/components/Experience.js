import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Switch Valley",
    period: "2025 - Internship",
    description: [
      "Developed microservices architecture using Node.js and Docker, improving scalability.",
      "Led migration from legacy PHP system to modern React frontend, reducing load times.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time.",
      "Collaborated with cross-functional teams to deliver 3 major product features ahead of schedule.",
    ],
    technologies: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Docker"],
    icon: <FaServer className="experience-icon" />,
  },
  {
    role: "Full Stack Engineer",
    company: "Nile Technologies",
    period: "2025 - Internship",
    description: [
      "Built real-time dashboard for IoT devices using MERN stack (MongoDB, Express, React, Node.js).",
      "Optimized MongoDB queries, reducing API response time significantly.",
    ],
    technologies: [
      "MERN Stack",
      "Python",
      "TensorFlow",
      "Stripe API",
      "WebSockets",
    ],
    icon: <FaDatabase className="experience-icon" />,
  },
];

const education = [
  {
    degree: "B.Tech in Software Science",
    institution: "Wolkite University",
    period: "2020 - 2025",
    description: ["Specialized in Web Development & Mobile Applications."],
    icon: <FaGraduationCap className="experience-icon" />,
  },
];

const ExperienceCard = ({ item, isEducation = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="mb-4 experience-card" style={{ backgroundColor: "#000000", color: "#fff" }}>
        <Card.Body>
          <div className="d-flex align-items-start">
            <div className="experience-icon-container me-3">
              {item.icon || <FaBriefcase className="experience-icon" />}
            </div>
            <div>
              <Card.Title className="mb-1">
                {isEducation ? item.degree : item.role}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {isEducation ? item.institution : item.company} | {item.period}
              </Card.Subtitle>
              <ul className="experience-description">
                {item.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    {desc}
                  </motion.li>
                ))}
              </ul>
              {!isEducation && (
                <div className="tech-tags mt-3">
                  {item.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.h3
              className="mb-4 d-flex align-items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaBriefcase className="me-2" /> Work Experience
            </motion.h3>
            {experience.map((exp, index) => (
              <ExperienceCard key={`exp-${index}`} item={exp} />
            ))}
          </Col>

          <Col lg={6}>
            <motion.h3
              className="mb-4 d-flex align-items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaGraduationCap className="me-2" /> Education
            </motion.h3>
            {education.map((edu, index) => (
              <ExperienceCard key={`edu-${index}`} item={edu} isEducation={true} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;


// # Add all changes to the staging area
// git add .

// # Commit the changes with a message
// git commit -m "Your meaningful commit message here"

// # Push the changes to the remote repository
// git push origin main
