import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Susana Tavares</h1>

      <div className="menu">
        <a href="#home">Home</a>
        <a href="#sobre">About</a>
        <a href="#projetos">Projects</a>
        <a href="#contacto">Contacts</a>
      </div>
    </nav>
  );
}
