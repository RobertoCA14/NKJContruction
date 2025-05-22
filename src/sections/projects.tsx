import Navbar from "../components/navbar";
import ProjetcsList from "../components/ProjetcsList";
import ContactSection from "./ContactSection";
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import edificiosUpcomin from "../assets/edificiosUpcomin.png";
import ladrilloedificiouPcomin from "../assets/ladrilloedificiouPcomin.png";
import ZoomableImage from "../components/ZoomableImage";
import { useEffect } from "react";
const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <Navbar />

      <main className="flex-grow bg-cover bg-center pt-40 pb-16 px-4 text-white">
        <ProjetcsList showTitle={true} />
      </main>
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
      {/* Current PROJECTS  */}
      <section className="bg-white py-16 px-4" id="current-projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center relative mb-12">
            CURRENT PROJECTS
            <span className="block w-20 h-1 bg-red-700 mx-auto mt-3 rounded"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proyecto 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
              <img
                src={ladrilloedificiouPcomin}
                alt="8619 Bergenline Avenue"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6 text-left space-y-2">
                <h3 className="text-red-700 font-bold text-lg">
                  8619 Bergenline Avenue, North Bergen, NJ
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    📐 Square Footage: <strong>260,000 ft²</strong>
                  </p>
                  <p>
                    💰 Contract Value: <strong>$2.1 Million</strong>
                  </p>
                  <p>
                    🏗️ Developer: <strong>Del-Sano Group</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
              <img
                src={edificiosUpcomin}
                alt="130 Avenue F, Bayonne"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6 text-left space-y-2">
                <h3 className="text-red-700 font-bold text-lg">
                  130 Avenue F, Bayonne, NJ 07002
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    📐 Square Footage: <strong>260,000 ft²</strong>
                  </p>
                  <p>
                    💰 Contract Value: <strong>$2.1 Million</strong>
                  </p>
                  <p>
                    🏗️ Developer: <strong>Del-Sano Group</strong>
                  </p>
                </div>
              </div>
            </div>
            {/* Proyecto 2 */}
          </div>
        </div>
      </section>
      {/* UPCOMING PROJECTS  */}
      <section className="bg-white py-16 px-4" id="upcoming-projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            UPCOMING PROJECTS
          </h2>

          {/* Grid de texto de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center  mb-12">
            <div className="bg-gray-50 rounded-xl p-6 shadow space-y-2 text-left">
              <h3 className="text-red-700 font-semibold text-lg">
                The Madera, Fort Lee NJ
              </h3>
              <p>📐Square Footage: 260,000 ft²</p>
              <p>💸Contract Value: $3.6 million</p>
              <p>🏗️Developer/ GC: Mill Creek</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow space-y-2 text-left">
              <h3 className="text-red-700 font-semibold text-lg">22 Fulton</h3>
              <p>📐Square Footage: 260,000 ft²</p>
              <p>💸Contract Value: $3.8 million</p>
              <p>🏗️Developer/ GC: SM&A</p>
            </div>
          </div>

          {/* Imágenes lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              src={ladrilloedificiouPcomin}
              className="rounded-lg shadow object-cover w-full h-[250px]"
            />
            <img
              src={edificiosUpcomin}
              className="rounded-lg shadow object-cover w-full h-[250px]"
            />
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Projects;
