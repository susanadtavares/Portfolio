import "./Contact.css";
import { motion } from "framer-motion";

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
        Contact
      </motion.h2>

      <motion.a
        href="mailto:susana15tavares@hotmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="contact-button"
      >
        Send me an email ✉️
      </motion.a>
    </section>
  );
}
