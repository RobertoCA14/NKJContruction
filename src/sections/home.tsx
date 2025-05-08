import HeroCarousel from "./HeroCarousel";
import ZoomableImage from "../sections/ZoomableImage"; // Ajusta la ruta según tu estructura
import logo from "../assets/logo.png";
import portada3 from "../assets/portada3.png";
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import repeatClient1 from "../assets/repeatClient1.png";
import repeatClient2 from "../assets/repeatClient2.png";
import nextProjectimg from "../assets/nextProjectimg.png";
import gothamLogo from "../assets/gothamLogo.png";
import beldenLogo from "../assets/beldenLogo.png";
import hdsupplyLogo from "../assets/hdsupplyLogo.png";
import FondoProjectListimg from "../assets/FondoProjectListimg.png";
import bgContact from "../assets/bgcontact.jpeg";
import { useState } from "react";
import ServicesSection from "./ServicesSection"; // Ajusta el path

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-center bg-gray-100 min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo + Texto */}
          <a
            href="#hero"
            className="flex items-center space-x-2 hover:opacity-80 transition"
          >
            <img src={logo} alt="Logo" className="h-12 object-contain" />
            <span className="text-red-800 text-xl font-bold whitespace-nowrap">
              NKJConstruction
            </span>
          </a>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú horizontal solo en pantallas grandes */}
          <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
            <a href="#hero" className="hover:text-red-600">
              Home
            </a>
            <a href="#projects" className="hover:text-red-600">
              Project
            </a>
            <a href="#services" className="hover:text-red-600">
              Services
            </a>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <nav className="flex flex-col space-y-3 text-gray-800 font-medium">
              <a href="#hero" className="hover:text-red-600">
                Home
              </a>
              <a href="#projects" className="hover:text-red-600">
                Project
              </a>
              <a href="#services" className="hover:text-red-600">
                Services
              </a>
              <a href="#contact" className="hover:text-red-600">
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <HeroCarousel />
      {/*Parrafo Sobre la empresa */}
      <section className="bg-white text-center px-6 py-16">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-6 w-32 h-32 object-contain"
        />

        {/* Título principal más grande */}
        <h2 className="text-3xl md:text-5xl font-bold">
          Masonry Construction Services
        </h2>

        {/* Subtítulo más grande */}
        <p className="text-red-700 italic mt-4 font-semibold text-lg md:text-2xl">
          Specialized in new-build high-rise residential construction
        </p>

        {/* Párrafo más legible */}
        <p className="max-w-4xl mx-auto text-gray-800 mt-8 leading-relaxed text-base md:text-lg">
          Our success is measured not only in the scale of our projects but in
          the satisfaction of our clients. Collaborative partnerships,
          transparent communication, and an unwavering commitment to quality are
          the cornerstones of our approach. As you explore our portfolio,
          envision a partnership that goes beyond construction. At NKJ
          Construction, we invite you to join us in crafting the future—where
          every project is a testament to our dedication, innovation, and the
          enduring legacy of impeccable masonry construction.
        </p>
      </section>
      <div className="w-full h-16 bg-[#991B1B]"></div>
      {/* Imagen a la izquierda */}
      <section className="grid md:grid-cols-2 bg-white">
        <div>
          <img
            src={portada3}
            alt="Edificio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="bg-neutral-900 text-white flex flex-col justify-center items-center px-6 md:px-20 py-16 space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            We lay foundations <br /> with a personal touch
          </h2>
          <p className="text-yellow-400 font-semibold">
            From dreams to blueprints to reality – <br /> NKJ Construction can
            help.
          </p>
          <p className="text-sm leading-relaxed text-gray-300">
            At NKJ Construction, our portfolio stands as a testament to our
            unwavering commitment to excellence in masonry construction. Nestled
            in the dynamic landscape of New Jersey, we have left an indelible
            mark with medium to large-size projects in high-rise residential
            buildings, transforming architectural visions into concrete reality.
          </p>
        </div>
      </section>
      {/* Proyectos recientes */}
      <section id="projects" className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
            <ZoomableImage
              src={edificio170}
              alt="170 Erie"
              title="170 Erie St."
              subtitle="Jersey City, NJ 07302"
            />
            <ZoomableImage
              src={edificio55}
              alt="55 Jordan"
              title="55 Jordan Ave."
              subtitle="Jersey City, NJ 07306"
            />
            <ZoomableImage
              src={edifici711}
              alt="711 Montgomery"
              title="711 Montgomery St."
              subtitle="Jersey City, NJ 07306"
            />
          </div>
        </div>
      </section>
      {/* <div className="w-full h-16 bg-neutral-600"></div> */}
      {/* Lista de Proyectos  */}
      <section
        className="bg-cover bg-center py-16 px-4 text-white"
        style={{ backgroundImage: `url(${FondoProjectListimg})` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-red-800 px-6 py-2 inline-block">
          PROJECT LIST
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-sm text-black">
          {[
            "711 Montgomery, Jersey City, NJ",
            "618 Pavonia Ave, Jersey City, NJ",
            "The Grand in West New York, NJ",
            "55 Jordan Ave, Jersey City, NJ",
            "170 Erie St, Jersey City, NJ",
            "555 West 22nd St, NY, NY",
            "607 Avenue K, NY",
            "5967 Greyrock Pl, Stamford, CT",
            "100 Water St, Jersey City, NJ",
            "180 E 88th St, NY, NY",
            "515 W 18th St, NY, NY",
            "70 Vestry, NY, NY",
            "91 Leonard St, NY, NY",
            "508 51st St West New York, NJ",
            "88 Regent St, Jersey City, NJ",
            "1 College Plaza, Long Island, NY",
            "491 Bedford Ave, Brooklyn, NY",
            "1036 Ocean Pkwy, Brooklyn, NY",
            "20 Grand Ave, Englewood, NJ",
            "1711 Gravesend, Brooklyn, NY",
            "13 Bridge St, Stockton, NJ",
            "38 Jackson Street - Hoboken, NJ",
            "The River Club (Building 1 & 2), Bogota, NJ",
            "Autozone in 27-02 Broadway, Fair Lawn, NJ",
            "Little Falls, NJ",
          ].map((project, i) => (
            <div
              key={i}
              className="bg-white text-black px-4 py-2 rounded text-center shadow-md"
            >
              {project}
            </div>
          ))}
        </div>
      </section>
      {/* UPCOMING PROJECTS  */}
      <section className="bg-white text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          UPCOMING PROJECTS
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto text-left">
          <div>
            <h3 className="text-red-800 font-bold">
              8619 Bergenline Avenue, North Bergen, NJ
            </h3>
            <p className="italic">Expected Start: First Quarter of 2024</p>
            <p>Square Footage: 260,000</p>
            <p>Contract Value: $2.1 Million</p>
            <p>Developer/ GC: Del-Sano Contracting Group</p>
          </div>
          <div>
            <h3 className="text-red-800 font-bold">
              38 Jackson Street, Hoboken, NJ
            </h3>
            <p className="italic">Expected Start: Second Quarter of 2024</p>
            <p>Square Footage: 500,000</p>
            <p>Contract Value: $2.2 Million</p>
            <p>Developer/ GC: Molfetta Corp.</p>
          </div>
        </div>
        <div className="mt-12 max-w-6xl mx-auto">
          <img
            src={nextProjectimg}
            alt="Upcoming projects visuals"
            className="w-full h-auto rounded shadow-md object-cover"
          />
        </div>
      </section>
      {/* Proyectos recientes prueba */}
      {/* <section id="projects" className="py-16 bg-gray-200">
        <h2 className="text-3xl font-bold mb-8">Proyectos Recientes</h2>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <div className="bg-white h-48 rounded shadow-md">
            [ Imagen o proyecto ]
          </div>
          <div className="bg-white h-48 rounded shadow-md">
            [ Imagen o proyecto ]
          </div>
          <div className="bg-white h-48 rounded shadow-md">
            [ Imagen o proyecto ]
          </div>
        </div>
      </section> */}
      {/* REPEAT CLIENTS*/}
      <section  className="text-white text-center py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gray-600 py-10 px-6 rounded">
          <h2 className="text-3xl font-bold mb-12">REPEAT CLIENTS</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Cliente 1 */}
            <div className="relative">
              <ZoomableImage src={repeatClient1} alt="Client 1" title="" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
                <p className="font-bold">Izzy Neiman</p>
                <p>3 Buildings to Date</p>
              </div>
            </div>

            {/* Cliente 2 */}
            <div className="relative">
              <ZoomableImage src={repeatClient2} alt="Client 2" title="" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
                <p className="font-bold">Erik Silverman</p>
                <p>2 Buildings to Date</p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-white text-gray-900 px-6 py-2 border border-gray-400 shadow">
            Additional clients provided upon request
          </button>
        </div>
      </section>
      {/* Nuestros servicios   */}
      <ServicesSection />
      {/* SUPPLIER REFERENCES */}
      <section className="bg-white text-center py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            SUPPLIER REFERENCES
          </h2>
          <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
            {/* Gotham */}
            <div className="space-y-2">
              <img src={gothamLogo} alt="Gotham" className="mx-auto h-12" />
              <p className="font-bold">Norman Mendoza</p>
              <p>704-804-0139</p>
            </div>
            {/* Belden */}
            <div className="space-y-2">
              <img src={beldenLogo} alt="Belden" className="mx-auto h-12" />
              <p className="font-bold">Mary Smith</p>
              <p>646-736-3772</p>
            </div>
            {/* HD Supply */}
            <div className="space-y-2">
              <img
                src={hdsupplyLogo}
                alt="HD Supply"
                className="mx-auto h-12"
              />
              <p className="font-bold">Ivan Gonzalez</p>
              <p className="text-sm">Ivan.GonzalezAguirre@whitecap.com</p>
            </div>
          </div>
          <button className="mt-12 bg-gray-200 px-6 py-2 shadow text-sm">
            Additional suppliers provided upon request
          </button>
        </div>
        <div className=" max-w-6xl mx-auto bg-red-800 h-16 w-full"></div>
      </section>
      {/* Línea roja separadora */}
      {/* Why Us */}
      <section className="py-12 px-4 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left max-w-6xl mx-auto">
          Why Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Año */}
          <div className="bg-gray-100 py-12 px-6 shadow-sm flex flex-col items-center justify-center h-72">
            <div className="text-5xl mb-4">🧳</div>
            <p className="text-red-700 font-semibold">Year Established</p>
            <p className="text-2xl font-bold mt-2">2018</p>
          </div>
          {/* Clientes */}
          <div className="bg-gray-100 py-12 px-6 shadow-sm flex flex-col items-center justify-center h-72">
            <div className="text-5xl mb-4">👤</div>
            <p className="text-red-700 font-semibold">Clients</p>
            <p className="text-2xl font-bold mt-2">20</p>
          </div>
          {/* Proyectos */}
          <div className="bg-gray-100 py-12 px-6 shadow-sm flex flex-col items-center justify-center h-72">
            <div className="text-5xl mb-4">🏠</div>
            <p className="text-red-700 font-semibold">Projects</p>
            <p className="text-2xl font-bold mt-2">22</p>
          </div>
        </div>
      </section>
      {/* Contactanos */}
      <section
        className="relative bg-cover bg-center text-white min-h-[40vh] px-6 flex items-center"
        style={{ backgroundImage: `url(${bgContact})` }}
        id="contact"
      >
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Logo en esquina superior izquierda */}
        <img
          src={logo}
          alt="NKJ Construction Logo"
          className="absolute top-6 left-6 w-28 h-auto z-20"
        />

        {/* Contenido principal */}
        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-8 items-start py-12">
          {/* Columna 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's talk</h2>
            <p className="font-semibold">NKJ CONSTRUCTION, LLC</p>
            <p>Bergenfield, New Jersey</p>
          </div>

          {/* Columna 2 */}
          <div>
            <p>
              <strong>Tel.</strong> 1 (917) 373-6114
            </p>
            <p>
              <strong>Email:</strong> nigel@nkjconstruction.com
            </p>
            <p>
              <strong>Instagram:</strong> @nkjconstructionllc
            </p>
          </div>

          {/* Columna 3 */}
          <div>
            <p>Your vision, our expertise —</p>
            <p>let’s build together!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
