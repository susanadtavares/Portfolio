import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="about-content"
      >
        <h2>About</h2>

          <p>🎓 3rd-year Software Engineering student @ Polytechnic University of Viseu  </p>
          <p>💻 Interested in Full Stack Development and Software Engineering</p>  
          <p>✨ I enjoy learning new technologies, solving problems and working on projects that make a difference.</p>
        
      </motion.div>
    </section>
  );
}
