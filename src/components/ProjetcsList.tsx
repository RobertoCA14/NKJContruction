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
    <section
      className={`${
        limit ? "bg-gray-100" : "bg-cover bg-center text-white"
      } py-16 px-4`}
      style={!limit ? { backgroundImage: `url(${cmuImg})` } : {}}
    >
      {showTitle && (
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
            limit ? "text-gray-900" : "bg-red-800 px-6 py-2 inline-block"
          }`}
        >
          {limit ? "Featured Projects" : "PROJECTS LIST"}
        </h2>
      )}

      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto text-sm ${
          limit ? "text-black" : "text-black"
        }`}
      >
        {visibleProjects.map((project, i) => (
          <div
            key={i}
            className="bg-white px-4 py-2 rounded text-center shadow-md"
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
    </section>
  );
};

export default ProjectsList;
