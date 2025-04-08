import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, level: 90, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "#3178C6" },
    { name: "React", icon: <FaReact />, level: 85, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, level: 80, color: "#68A063" },
    { name: "Python", icon: <FaPython />, level: 75, color: "#3776AB" },
    { name: "MongoDB", icon: <SiMongodb />, level: 70, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 65, color: "#336791" },
    { name: "AWS", icon: <FaAws />, level: 60, color: "#FF9900" },
    { name: "Docker", icon: <FaDocker />, level: 55, color: "#2496ED" },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <Row>
          {skills.map((skill, index) => (
            <Col key={index} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-item p-4 rounded shadow-sm" style={{ backgroundColor: "#1a1a1a" }}>
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="skill-icon me-3"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <ProgressBar
                        now={skill.level}
                        className="skill-progress mt-2"
                        variant="custom"
                        style={{ "--skill-color": skill.color }}
                      />
                    </div>
                  </div>
                  <motion.div
                    className="skill-level-indicator"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
