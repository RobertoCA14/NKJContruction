import Navbar from "../components/navbar";
import ProjectsList from "../components/ProjetcsList";
import ContactSection from "./ContactSection";
import cmuImg from "../assets/cmuImg.png"; // ✅ Import correcto
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import ZoomableImage from "../components/ZoomableImage";
const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center">
      <Navbar />

      <main
        className="flex-grow bg-cover bg-center pt-40 pb-16 px-4 text-white"
        style={{ backgroundImage: `url(${cmuImg})` }}
      >
        <ProjectsList />
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
      <ContactSection />
    </div>
  );
};

export default Projects;
