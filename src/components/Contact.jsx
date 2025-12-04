import "./Contact.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="contact-title"
      >
        Contact me
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        If you have any questions or would like to get in touch, feel free to reach out!
      </motion.p>

      <motion.div
        className="contact-icons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <a href="https://www.linkedin.com/in/susanadtavares" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/susanadtavares" target="_blank">
          <FaGithub />
        </a>

        <a href="mailto:susana15tavares@hotmail.com">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
