import "./Projects.css";
import { motion } from "framer-motion";
import emmjaImage from "../assets/EMMJA.png";
import bmfmjImage from "../assets/BMFMJ.png";

const projects = [
  { 
    title: "EMMJA", 
    desc: "Music school management system", 
    stack: "React + Vite + Node.js + Express + PostgreSQL + Sequelize",
    url: "https://emmja.vercel.app/",
    image: emmjaImage,
  },
  {
    title: "Banda Junqueirense",
    desc: "Instituional Website",
    stack: "React + Vite + TailwindCSS",
    url: "https://bandajunqueirense.vercel.app/",
    image: bmfmjImage,
  },
    { 
    title: "Personal Finance Tracker", 
    desc: "In progress...", 
    stack: "React + Node" 
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const MotionCard = p.url ? motion.a : motion.div;

            return (
              <MotionCard
                key={i}
                href={p.url}
                target={p.url ? "_blank" : undefined}
                rel={p.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="project-card"
              >
                <div className="project-image">
                  {p.image ? (
                    <img src={p.image} alt={`${p.title} project`} />
                  ) : (
                    <span>...</span>
                  )}
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="project-stack">{p.stack}</span>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
