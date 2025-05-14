import cmuImg from "../assets/cmuImg.png";
import brickImg from "../assets/brickImg.png";
import castStoneImg from "../assets/castStoneImg.png";
import stuccoImg from "../assets/stuccoImg.jpg";
import eifsImg from "../assets/eifsImg.png";
import sidewalksImg from "../assets/sidewalksImg.png";
import stoneVeneerImg from "../assets/stoneVeneerImg.png";
import parapetImg from "../assets/parapetImg.png";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServiceListProps {
  limit?: number;
  showTitle?: boolean;
  showButton?: boolean;
}

const services: Service[] = [
  {
    title: "CMU Block Work",
    description:
      "Expert installation of concrete masonry units for structural durability.",
    image: cmuImg,
  },
  {
    title: "Brick Installation & Restoration",
    description:
      "Classic brickwork for new projects or historic building restoration.",
    image: brickImg,
  },
  {
    title: "Cast Stone Fabrication",
    description:
      "Custom cast stone pieces fabricated and installed with precision.",
    image: castStoneImg,
  },
  {
    title: "Stucco Finishes & Repairs",
    description: "Smooth, durable stucco application and maintenance.",
    image: stuccoImg,
  },
  {
    title: "EIFS Systems",
    description:
      "Exterior insulation and finish systems for energy-efficient facades.",
    image: eifsImg,
  },
  {
    title: "Sidewalks, Walkways & Curbs",
    description: "Safe, clean and level pedestrian and access surfaces.",
    image: sidewalksImg,
  },
  {
    title: "Stone Veneer & Natural Stone",
    description: "High-quality stone finishes for elegance and longevity.",
    image: stoneVeneerImg,
  },
  {
    title: "Parapet Wall & Chimney Repairs",
    description:
      "Restore and secure building elements exposed to the elements.",
    image: parapetImg,
  },
];

const ServiceList = ({ limit, showTitle = true }: ServiceListProps) => {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-white py-16 px-4 text-center">
      {showTitle && (
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Masonry Services
        </h2>
      )}

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        We offer a wide range of expert masonry services tailored to meet both
        residential and commercial needs. Whether you’re enhancing a new build
        or restoring a historic structure, our craftsmanship ensures lasting
        results.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="relative rounded shadow hover:shadow-lg transition h-64 flex items-end text-white overflow-hidden"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-60 w-full p-4">
              <h3 className="text-lg font-bold text-red-300 mb-1">
                {service.title}
              </h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
