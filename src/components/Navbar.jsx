import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  // aplicar a classe 'dark' ao html
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-900/80 dark:bg-black/50 backdrop-blur-md border-b border-gray-800 dark:border-gray-700 px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-white tracking-wide">
        Susana Tavares
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-white text-2xl"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
