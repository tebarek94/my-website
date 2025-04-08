import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage: ${message}`;
    window.location.href = `mailto:your.email@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-5 bg-black text-white">
      <Container className="py-5 bg-dark text-white">
        <h2 className="text-center mb-5">Get In Touch</h2>
        <Row >
          <Col lg={6} className="align-items-center bg-black text-white p-4 rounded shadow-sm">
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="align-items-center bg-black text-white p-4 rounded shadow-sm">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h4 className="mb-4">Contact Information</h4>

                <Card className="mb-3">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-primary me-3">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <a
                          href="mailto: tebarekabas1994@gmail.com"
                          className="text-decoration-none"
                        >
                          tebarekabas1994@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-success me-3">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Phone</h6>
                        <a
                          href="tel:+1234567890"
                          className="text-decoration-none"
                        >
                          +251909239104
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                      <div className="icon-circle bg-warning me-3">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Location</h6>
                        <p className="mb-0">Ethiopia Addis Ababa</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                <div className="social-links">
                  <h5 className="mb-3">Connect with me</h5>
                  <div className="d-flex gap-3">
                    <a
                      href="https://github.com/tebarek94"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tebarekabas/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
