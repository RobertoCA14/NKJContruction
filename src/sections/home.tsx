import HeroCarousel from "../components/HeroCarousel";
import ContactSection from "./ContactSection";
import ProjetcsList from "../components/ProjetcsList";
import AnimatedSection from "../components/AnimatedSection";
import ServiceList from "../components/serviceList";
import WhyChooseUs from "../components/WhyChooseUs";
import Navbar from "../components/navbar";
import ContactForm from "../components/ContactForm";
import ZoomableImage from "../components/ZoomableImage"; // Ajusta la ruta según tu estructura
import logo from "../assets/logo.png";
import portada3 from "../assets/portada3.png";
import repeatClient1 from "../assets/repeatClient1.png";
import repeatClient2 from "../assets/repeatClient2.png";
import logoReutherimg from "../assets/logoReutherimg.png";
import beldenLogo from "../assets/beldenLogo.png";
import hdsupplyLogo from "../assets/hdsupplyLogo.png";
import { useEffect } from "react";
if (typeof window !== "undefined") {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" text-center bg-gray min-h-screen">
      <Navbar />
      <HeroCarousel />
      {/*Parrafo Sobre la empresa */}
      <AnimatedSection>
        <section className="bg-gray text-center px-6 py-6">
          {/* Logo centrado y de tamaño adecuado */}
          <div className="flex justify-center text-center px-6 py-10 mt-10">
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
            transparent communication, and an unwavering commitment to quality
            are the cornerstones of our approach. As you explore our portfolio,
            envision a partnership that goes beyond construction. At NKJ
            Construction, we invite you to join us in crafting the future—where
            every project is a testament to our dedication, innovation, and the
            enduring legacy of impeccable masonry construction.
          </p>
        </section>
      </AnimatedSection>
      <div className="w-full h-10 bg-[#991B1B]"></div>
      {/* Imagen a la izquierda */}
      <AnimatedSection>
        <section
          className="relative bg-fixed bg-cover bg-center h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${portada3})` }}
        >
          {/* Capa oscura encima de la imagen */}
          <div className="absolute inset-0 bg-black/75 z-0" />

          {/* Contenido centrado encima de la imagen */}
          <div className="relative z-10 text-center px-4 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug mb-4">
              We lay foundations <br /> with a personal touch
            </h2>

            <p className="text-yellow-300 font-semibold text-lg md:text-xl my-3 drop-shadow">
              From dreams to blueprints to reality – <br /> NKJ Construction can
              help.
            </p>

            <p className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow-sm">
              At NKJ Construction LLC, our portfolio stands as a testament to
              our commitment to excellence. Based in New Jersey, we bring medium
              to large-size high-rise residential projects to life with
              unmatched craftsmanship.
            </p>
          </div>
        </section>
      </AnimatedSection>
      {/* Nuestros servicios   */}
      <AnimatedSection>
        <ServiceList
          limit={6}
          showTitle={true}
          useSlider={true}
          showButton={true}
        />
      </AnimatedSection>

      {/* Lista Proyectos  */}
      <AnimatedSection>
        <ProjetcsList
          limit={10}
          showTitle={true}
          useSlider={true}
          showButton={true}
        />
      </AnimatedSection>
      <AnimatedSection>
        {/* REPEAT CLIENTS*/}
        <section className="bg-gray-100 text-black text-center py-16 px-4">
          <div className="max-w-6xl mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-400 to-gray-100 py-16 px-4 text-center text-white py-10 px-6 rounded">
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
      </AnimatedSection>
      <AnimatedSection>
        {/* Why Us */}
        <WhyChooseUs />
      </AnimatedSection>
      {/* Línea roja separadora */}
      <div className=" max-w-6xl mx-auto bg-red-800 h-3 w-full"></div>
      <AnimatedSection>
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
      </AnimatedSection>
      <div className=" max-w-6xl mx-auto bg-red-800 h-3 w-full"></div>
      {/* Contactanos */}
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </div>
  );
};

export default Home;
