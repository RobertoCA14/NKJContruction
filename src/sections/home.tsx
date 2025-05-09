import HeroCarousel from "../components/HeroCarousel";
import ContactSection from "./ContactSection";
import ServicesSection from "../sections/ServicesSection";
import Navbar from "../components/navbar";
import ZoomableImage from "../components/ZoomableImage"; // Ajusta la ruta según tu estructura
import logo from "../assets/logo.png";
import portada3 from "../assets/portada3.png";
import cmuImg from "../assets/cmuImg.png";
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import repeatClient1 from "../assets/repeatClient1.png";
import repeatClient2 from "../assets/repeatClient2.png";
import gothamLogo from "../assets/gothamLogo.png";
import beldenLogo from "../assets/beldenLogo.png";
import hdsupplyLogo from "../assets/hdsupplyLogo.png";
import ladrilloedificiouPcomin from "../assets/ladrilloedificiouPcomin.png";
import edificiosUpcomin from "../assets/edificiosUpcomin.png";
import cliente from "../assets/cliente.png";
import safety from "../assets/safety.png";
import proyectos from "../assets/proyectos.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className=" text-center bg-gray-100 min-h-screen">
      <Navbar />
      <HeroCarousel />
      {/*Parrafo Sobre la empresa */}
      <section className="bg-white text-center px-6 py-16">
        {/* Logo centrado y de tamaño adecuado */}
        <div className="flex justify-center mb-6">
          <ZoomableImage
            src={logo}
            alt="Logo"
            className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 h-auto object-contain bg-white rounded shadow-none"
          />
        </div>

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
            At NKJ Construction LLC, our portfolio stands as a testament to our
            unwavering commitment to excellence in masonry construction. Nestled
            in the dynamic landscape of New Jersey, we have left an indelible
            mark with medium to large-size projects in high-rise residential
            buildings, transforming architectural visions into concrete reality.
          </p>
        </div>
      </section>
      {/* Nuestros servicios   */}
      <ServicesSection />
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
              title="170 Erie Street."
              subtitle="Jersey City, NJ 07302"
            />
            <ZoomableImage
              src={edificio55}
              alt="55 Jordan"
              title="55 Jordan Avenue."
              subtitle="Jersey City, NJ 07306"
            />
            <ZoomableImage
              src={edifici711}
              alt="711 Montgomery"
              title="711 Montgomery Street."
              subtitle="Jersey City, NJ 07306"
            />
          </div>
        </div>
      </section>
      {/* <div className="w-full h-16 bg-neutral-600"></div> */}
      {/* Lista de Proyectos  */}
      <section
        className="bg-cover bg-center py-16 px-4 text-white"
        style={{ backgroundImage: `url(${cmuImg})` }}
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
            "38 Jackson Street, Hoboken, NJ",
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
      <section className="bg-gray-100 py-16 px-4" id="upcoming-projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            UPCOMING PROJECTS
          </h2>

          {/* Grid de texto de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center  mb-12">
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
                130 Avenue F, Bayonne, NJ 07002
              </h3>
              <p className="italic">Expected Start: First Quarter of 2024</p>
              <p>Square Footage: 260,000</p>
              <p>Contract Value: $2.1 Million</p>
              <p>Developer/ GC: Del-Sano Contracting Group</p>
            </div>
          </div>

          {/* Imágenes lado a lado */}
          <div className="flex flex-col md:flex-row">
            <img
              src={ladrilloedificiouPcomin}
              alt="Edificio ladrillo"
              className="w-full md:w-1/2 h-[200px] object-cover"
            />
            <img
              src={edificiosUpcomin}
              alt="Skyline ciudad"
              className="w-full md:w-1/2 h-[200px] object-cover"
            />
          </div>
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
      <section className="text-white text-center py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gray-600 py-10 px-6 rounded">
          <h2 className="text-3xl font-bold mb-12">LOYAL CLIENTS</h2>
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

          {/* <button className="mt-8 bg-white text-gray-900 px-6 py-2 border border-gray-400 shadow">
            Additional clients provided upon request
          </button> */}
        </div>
      </section>

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
          {/* <button className="mt-12 bg-gray-200 px-6 py-2 shadow text-sm">
            Additional suppliers provided upon request
          </button> */}
        </div>
        <div className=" max-w-6xl mx-auto bg-red-800 h-16 w-full"></div>
      </section>
      {/* Línea roja separadora */}
      {/* Why Us */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Año */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg shadow text-white p-6 flex flex-col items-center justify-center h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${edifici711})` }}
          >
            <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
            <div className="relative z-10">
              <p className="text-xl font-semibold text-red-300">Since</p>
              <p className="text-3xl font-bold">2018</p>
              <p className="text-sm mt-1">Years of experience</p>
            </div>
          </motion.div>

          {/* Clientes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-lg shadow text-white p-6 flex flex-col items-center justify-center h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${cliente})` }}
          >
            <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
            <div className="relative z-10">
              <p className="text-xl font-semibold text-red-300">Clients</p>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm mt-1">Trusted partnerships</p>
            </div>
          </motion.div>

          {/* Proyectos */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg shadow text-white p-6 flex flex-col items-center justify-center h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${proyectos})` }}
          >
            <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
            <div className="relative z-10">
              <p className="text-xl font-semibold text-red-300">Projects</p>
              <p className="text-3xl font-bold">22+</p>
              <p className="text-sm mt-1">Completed works</p>
            </div>
          </motion.div>

          {/* Seguridad */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg shadow text-white p-6 flex flex-col items-center justify-center h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${safety})` }}
          >
            <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
            <div className="relative z-10">
              <p className="text-xl font-semibold text-red-300">
                Safety & Quality
              </p>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm mt-1">Satisfaction guaranteed</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contactanos */}
      <ContactSection />
    </div>
  );
};

export default Home;
