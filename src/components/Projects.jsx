import { motion } from "framer-motion";

const projects = [
  { title: "Projeto 1", desc: "Descrição do projeto 1." },
  { title: "Projeto 2", desc: "Descrição do projeto 2." },
  { title: "Projeto 3", desc: "Descrição do projeto 3." },
];

export default function Projects() {
  return (
    <section className="py-32 bg-gray-900 dark:bg-black text-white px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gray-800 dark:bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-white transition group cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
