import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32 bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou a Susana</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Desenvolvedora Frontend • Designer • Criadora de experiências digitais minimalistas
        </p>
      </motion.div>
    </section>
  );
}
