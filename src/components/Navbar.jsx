export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/40 backdrop-blur-md
        border-b border-gray-800
        px-10 py-4
        flex items-center justify-between
      "
    >
      {/* LOGO */}
      <h1 className="text-white text-lg font-semibold tracking-wide">
        Susana Tavares
      </h1>

      {/* MENU */}
      <div className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
        <button onClick={() => scrollTo("home")} className="hover:text-white transition">
          Home
        </button>
        <button onClick={() => scrollTo("sobre")} className="hover:text-white transition">
          Sobre
        </button>
        <button onClick={() => scrollTo("projetos")} className="hover:text-white transition">
          Projetos
        </button>
        <button onClick={() => scrollTo("contacto")} className="hover:text-white transition">
          Contacto
        </button>
      </div>
    </nav>
  );
}
