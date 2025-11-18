import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-32 bg-gray-900 dark:bg-black text-white px-8 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold mb-4"
      >
        Contacto
      </motion.h2>

      <p className="text-gray-300 mb-8">
        Entra em contacto comigo por email ou redes sociais.
      </p>

      <a
        href="mailto:teuemail@gmail.com"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Enviar Email
      </a>
    </section>
  );
}
