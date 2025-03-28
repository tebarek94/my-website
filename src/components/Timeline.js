import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Switch Valley",
    period: "2023 - Present",
    description: [
      "Developed microservices architecture using Node.js and Docker, improving scalability by 40%",
      "Led migration from legacy PHP system to modern React frontend, reducing load times by 65%",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time from 2 hours to 15 minutes",
      "Collaborated with cross-functional teams to deliver 3 major product features ahead of schedule",
    ],
    technologies: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Docker"],
    icon: <FaServer />,
  },
  {
    role: "Full Stack Engineer",
    company: "Nile Technologies",
    period: "2021 - 2023",
    description: [
      "Built real-time dashboard for IoT devices using MERN stack (MongoDB, Express, React, Node.js)",
      "Optimized MongoDB queries, reducing API response time from 1.2s to 300ms",
      "Integrated Stripe payment gateway handling $250K+ monthly transactions",
      "Mentored 2 junior developers in React best practices",
    ],
    technologies: [
      "MERN Stack",
      "Python",
      "TensorFlow",
      "Stripe API",
      "WebSockets",
    ],
    icon: <FaDatabase />,
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "University XYZ",
    period: "2016 - 2020",
    description: ["Specialized in Web Development & Cloud Computing"],
    icon: <FaGraduationCap />,
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Coding Academy",
    period: "2020",
    description: ["Completed intensive full-stack development program"],
    icon: <FaLaptopCode />,
  },
];

const TimelineItem = ({ item, isLast, isEducation = false }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "rgba(255, 255, 255, 0.05)",
        color: "#fff",
        borderBottom: "3px solid #0d6efd",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.05)" }}
      date={item.period}
      dateClassName="timeline-date"
      iconStyle={{
        background: isEducation ? "#6c757d" : "#0d6efd",
        color: "#fff",
        boxShadow: "0 0 0 4px rgba(255,255,255,0.2)",
      }}
      icon={item.icon || <FaCode />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="vertical-timeline-element-title">
          {isEducation ? item.degree : item.role}
        </h3>
        <h4 className="vertical-timeline-element-subtitle mb-3">
          {isEducation ? item.institution : item.company}
        </h4>

        <ul className="timeline-description">
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

        {!isEducation && item.technologies && (
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
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <VerticalTimeline
          layout="1-column-left"
          lineColor="rgba(13, 110, 253, 0.2)"
          className="custom-timeline"
        >
          {experience.map((exp, index) => (
            <TimelineItem
              key={`exp-${index}`}
              item={exp}
              isLast={index === experience.length - 1}
            />
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: "#6c757d", color: "#fff" }}
            icon={<FaGraduationCap />}
            contentStyle={{ display: "none" }}
          />

          {education.map((edu, index) => (
            <TimelineItem
              key={`edu-${index}`}
              item={edu}
              isEducation={true}
              isLast={index === education.length - 1}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
