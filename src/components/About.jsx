import "./About.css";
import { motion } from "framer-motion";
import profile from "../assets/susana.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="about-image"
        >
          <img src={profile} alt="Profile" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="about-text"
        >
          <h2>About Me</h2>
          <p>🎓 3rd-year Software Engineering student @ Polytechnic University of Viseu  </p>
          <p>💻 Interested in Full Stack Development and Software Engineering</p>  
          <p>✨ I enjoy learning new technologies, solving problems and working on projects that make a difference.</p>
        </motion.div>

      </div>
    </section>
  );
}
