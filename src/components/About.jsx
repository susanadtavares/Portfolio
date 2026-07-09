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
        Recently graduated Software Engineer with experience in software validation and full-stack development. 
        Quick learner with strong problem-solving skills, comfortable adapting to new technologies and challenges. 
        Motivated to bring a collaborative mindset to a growing engineering team.
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
