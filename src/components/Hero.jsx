import "./Hero.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import profile from "../assets/susana.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="hero-photo">
          <img src={profile} alt="Susana Tavares" />
        </div>
        <h1>Susana Tavares</h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-location">
          <FaMapMarkerAlt /> Porto, Portugal
        </p>
        <a
          href="https://drive.google.com/file/d/1Z-BkXFdqRszrncv-rG8Gv-t9Kz-r4ac-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="cv-button"
        >
          View CV
        </a>
      </motion.div>
    </section>
  );
}
