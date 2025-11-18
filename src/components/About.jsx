import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 bg-gray-900 dark:bg-black text-white px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-semibold mb-6">Sobre Mim</h2>
        <p className="text-gray-300 leading-relaxed">
          Sou apaixonada por tecnologia e design, criando interfaces modernas,
          minimalistas e acessíveis. Adoro transformar ideias em produtos digitais
          simples, funcionais e bonitos.
        </p>
      </motion.div>
    </section>
  );
}
