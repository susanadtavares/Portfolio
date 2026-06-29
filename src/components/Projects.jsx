import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  { title: "Personal Finance Tracker", desc: "In progress...", stack: "React + Node" },
  { title: "School Management", desc: "In progress...", stack: "Java + SQL" },
  { title: "BMFMJ", desc: "In progress...", stack: "Web Platform" },
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
              <div className="project-image">
                {/* Placeholder 16:9 — substituir por <img src={...} alt={p.title} /> */}
                <span>16:9</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="project-stack">{p.stack}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
