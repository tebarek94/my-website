import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with user authentication and payment processing",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    features: [
      "User authentication",
      "Payment gateway (Stripe)",
      "Admin dashboard",
    ],
    links: {
      demo: "#",
      code: "https://github.com/tebarek94/simple-e-commers-website.git",
    },
  },
  {
    title: "Patient Management System",
    description:
      "Full-featured Patient Management System built with React for managing patient information, doctors, appointments, and medical records.",
    tech: "TypeScript, React, TailwindCSS, Express, Node.js",
    features: [
      "Real-time updates",
      "Patient records management",
      "Appointment scheduling",
    ],
    links: {
      demo: "#",
      code: "https://github.com/tebarek94/Patient-Management-System.git",
    },
  },
  {
    title: "Quote Generator with Weather Forecast",
    description:
      "Web app that generates random quotes and displays local weather forecast using public API",
    tech: "JavaScript, HTML, CSS, OpenWeatherMap API",
    features: [
      "Random quote generator",
      "Real-time weather data",
      "Copy-to-clipboard functionality",
    ],
    links: {
      demo: "#",
      code: "https://github.com/tebarek94/quote-generater.git",
    },
  },
  {
    title: "Hospital Management System",
    description:
      "A system for managing hospital operations like patient information, doctor schedules, and medical records.",
    tech: "Java, MySQL, Spring Boot",
    features: [
      "Patient registration and management",
      "Doctor scheduling and management",
      "Medical records tracking",
    ],
    links: {
      demo: "https://github.com/tebarek94/Patient-Management-System",
      code: "https://github.com/tebarek94/Patient-Management-System",
    },
  },
  {
    title: "Employee Management System",
    description:
      "A system to manage employee records, attendance, payroll, and performance reviews.",
    tech: "JavaScript, Node.js, MongoDB, Express",
    features: [
      "Employee data management",
      "Attendance tracking",
      "Payroll management",
    ],
    links: {
      demo: "https://github.com/tebarek94/employee-management-system",
      code: "https://github.com/tebarek94/employee-management-system",
    },
  },
  {
    title: "Book Store Management System",
    description:
      "A system to manage book inventory, customer orders, and payment processing.",
    tech: "Python, Django, SQLite",
    features: [
      "Book inventory management",
      "Order processing",
      "Payment integration",
    ],
    links: {
      demo: "https://github.com/tebarek94/book-story-manegement-system",
      code: "https://github.com/tebarek94/book-story-manegement-system",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-black text-white">
      <Container>
        <h2 className="text-center mb-5">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} lg={4} md={6} className="mb-4">
              <Card className="h-100 project-card bg-black text-white shadow-sm">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.tech}
                  </Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  <ul className="mb-3">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Card.Footer className="bg-transparent">
                  <div className="d-flex justify-content-between">
                    <a
                      href={project.links.demo}
                      className="btn btn-sm btn-outline-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.links.code}
                      className="btn btn-sm btn-outline-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
