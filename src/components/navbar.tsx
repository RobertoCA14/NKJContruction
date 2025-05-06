import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NKJ Construction</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">
            Inicio
          </Link>
          <a href="#projects" className="hover:text-blue-400">
            Proyectos
          </a>
          <a href="#services" className="hover:text-blue-400">
            Servicios
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
