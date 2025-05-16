import HeroCarousel from "../components/HeroCarousel";
import ContactSection from "./ContactSection";
import ProjetcsList from "../components/ProjetcsList";
import ServiceList from "../components/serviceList";
import Navbar from "../components/navbar";
import ZoomableImage from "../components/ZoomableImage"; // Ajusta la ruta según tu estructura
import logo from "../assets/logo.png";
import portada3 from "../assets/portada3.png";
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import repeatClient1 from "../assets/repeatClient1.png";
import repeatClient2 from "../assets/repeatClient2.png";
import logoReutherimg from "../assets/logoReutherimg.png";
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
    <div className=" text-center bg-gray min-h-screen">
      <Navbar />
      <HeroCarousel />
      {/*Parrafo Sobre la empresa */}
      <section className="bg-gray text-center px-6 py-6">
        {/* Logo centrado y de tamaño adecuado */}
        <div className="flex justify-center mb-6">
          <ZoomableImage
            src={logo}
            alt="Logo"
            className="w-24 sm:w-32 md:w-44 lg:w-56 xl:w-64 2xl:w-72  h-auto object-contain bg-white rounded shadow-none"
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
      <section
        className="relative bg-cover bg-center text-white h-[50vh] md:h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${portada3})` }}
      >
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Contenido centrado encima de la imagen */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            We lay foundations <br /> with a personal touch
          </h2>
          <p className="text-yellow-400 font-medium text-sm md:text-base my-2">
            From dreams to blueprints to reality – <br /> NKJ Construction can
            help.
          </p>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            At NKJ Construction LLC, our portfolio stands as a testament to our
            commitment to excellence. Based in New Jersey, we bring medium to
            large-size high-rise residential projects to life with unmatched
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Nuestros servicios   */}

      <ServiceList limit={4} showTitle={true} showButton={true} />

      {/* Lista Proyectos  */}
      <ProjetcsList limit={12} showTitle={true} showButton={true} />
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
              title="170 Erie Street"
              subtitle="Jersey City, NJ 07302"
            />
            <ZoomableImage
              src={edificio55}
              alt="55 Jordan"
              title="55 Jordan Avenue"
              subtitle="Jersey City, NJ 07306"
            />
            <ZoomableImage
              src={edifici711}
              alt="711 Montgomery"
              title="711 Montgomery Street"
              subtitle="Jersey City, NJ 07306"
            />
          </div>
        </div>
      </section>
      {/* <div className="w-full h-16 bg-neutral-600"></div> */}

      {/* UPCOMING PROJECTS  */}
      <section className="bg-white py-16 px-4" id="upcoming-projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            CURRENT PROJECTS
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

      {/* REPEAT CLIENTS*/}
      <section className="bg-gray-100 text-black text-center py-16 px-4">
        <div className="max-w-6xl mx-auto bg-gray-200 py-10 px-6 rounded">
          <h2 className="text-3xl font-bold mb-12">
            Loyal Clients, Lasting Relationships
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Cliente 1 */}
            <div className="relative">
              <ZoomableImage src={repeatClient1} alt="Client 1" title="" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
                <p className="font-bold">Izzy Neiman</p>
                {/* <p>3 Buildings to Date</p> */}
              </div>
            </div>

            {/* Cliente 2 */}
            <div className="relative">
              <ZoomableImage src={repeatClient2} alt="Client 2" title="" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded">
                <p className="font-bold">Eric Silverman</p>
                {/* <p>2 Buildings to Date</p> */}
              </div>
            </div>
          </div>

          {/* <button className="mt-8 bg-white text-gray-900 px-6 py-2 border border-gray-400 shadow">
            Additional clients provided upon request
          </button> */}
        </div>
      </section>

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
      {/* Línea roja separadora */}
      <div className=" max-w-6xl mx-auto bg-red-800 h-3 w-full"></div>
      {/* SUPPLIER REFERENCES */}
      <section className="bg-gray-100 text-center py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 tracking-wide">
            SUPPLIER REFERENCES
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            <img
              src={logoReutherimg}
              alt="Reuther"
              className="h-12 object-contain"
            />
            <img
              src={beldenLogo}
              alt="Belden"
              className="h-12 object-contain"
            />
            <img
              src={hdsupplyLogo}
              alt="HD Supply"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </section>
      <div className=" max-w-6xl mx-auto bg-red-800 h-3 w-full"></div>
      {/* Contactanos */}
      <ContactSection />
    </div>
  );
};

export default Home;
