import "./About.css";
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "SQL",
  "Python",
  "C",
  "C++",
  "Git",
  "Testing",
  "CI/CD",
];

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="about-text"
      >
        <h2>About Me</h2>
        <p>
          Recently graduated Software Engineer with experience validating
          space-industry software and building diverse full-stack projects.
          Combines strong technical fundamentals with communication and teaching
          skills developed over years as a music instructor. Motivated to bring
          adaptability and a collaborative mindset to a growing engineering team.
        </p>

        <h3 className="skills-heading">Skills</h3>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill} className="skill-chip">{skill}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
