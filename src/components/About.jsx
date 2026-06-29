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
          Final-year Software Engineering student with hands-on experience
          developing and validating software for space systems following ECSS
          standards. Passionate about software engineering, distributed systems
          and high-reliability software, with a strong interest in building
          robust solutions through testing, validation and modern development
          practices.
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
