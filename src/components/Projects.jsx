import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  { title: "Projeto 1", desc: "Descrição do projeto 1." },
  { title: "Projeto 2", desc: "Descrição do projeto 2." },
  { title: "Projeto 3", desc: "Descrição do projeto 3." },
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
