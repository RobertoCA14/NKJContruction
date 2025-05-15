// src/components/ProjectsList.tsx
import cmuImg from "../assets/cmuImg.png";
import { Link } from "react-router-dom";

const allProjects = [
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
];

interface ProjectsListProps {
  limit?: number;
  showTitle?: boolean;
  showButton?: boolean;
}

const ProjectsList = ({
  limit,
  showTitle = true,
  showButton = false,
}: ProjectsListProps) => {
  const visibleProjects = limit ? allProjects.slice(0, limit) : allProjects;

  return (
    <section className="relative py-16 px-4 text-white overflow-hidden">
      {/* Imagen de fondo siempre visible */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cmuImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido encima del fondo */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {showTitle && (
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center relative ${
              limit
                ? "text-gray-100"
                : "bg-red-800 px-6 py-2 inline-block shadow-lg text-white"
            }`}
          >
            {limit ? "Featured Projects" : "PROJECTS LIST"}
          </h2>
        )}

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm ${
            limit ? "text-white" : "text-white"
          }`}
        >
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="bg-white text-black px-4 py-2 rounded text-center shadow-md hover:shadow-lg hover:scale-105 transition duration-200"
            >
              {project}
            </div>
          ))}
        </div>

        {showButton && (
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-block bg-red-700 text-white font-semibold px-6 py-3 rounded hover:bg-red-800 transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsList;
