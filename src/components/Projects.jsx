import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  { title: "Personal Finance Tracker", desc: "In progress..." },
  { title: "School Management", desc: "In progress..." },
  { title: "Project C", desc: "" },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="project-card"
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
