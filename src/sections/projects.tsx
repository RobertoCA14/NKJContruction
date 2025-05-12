import cmuImg from "../assets/cmuImg.png";
import ZoomableImage from "../components/ZoomableImage";
import Navbar from "../components/navbar";
import edificio170 from "../assets/edificio170.png";
import edificio55 from "../assets/edificio55.png";
import edifici711 from "../assets/edifici711.png";
import ContactSection from "./ContactSection";
const Projects = () => {
  return (
    <div className=" text-center bg-gray-100 min-h-screen">
      <Navbar />
      <section
        className="bg-cover bg-center py-16 px-4 text-white"
        style={{ backgroundImage: `url(${cmuImg})` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-red-800 px-6 py-2 inline-block">
          PROJECTS LIST
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
