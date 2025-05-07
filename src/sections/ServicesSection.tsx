const services = [
  {
    title: "CMU Block Work",
    description:
      "Expert installation of concrete masonry units for structural durability.",
    icon: "🧱",
  },
  {
    title: "Brick Installation & Restoration",
    description:
      "Classic brickwork for new projects or historic building restoration.",
    icon: "🏗️",
  },
  {
    title: "Cast Stone Fabrication",
    description:
      "Custom cast stone pieces fabricated and installed with precision.",
    icon: "🪨",
  },
  {
    title: "Stucco Finishes & Repairs",
    description: "Smooth, durable stucco application and maintenance.",
    icon: "🎨",
  },
  {
    title: "EIFS Systems",
    description:
      "Exterior insulation and finish systems for energy-efficient facades.",
    icon: "🏘️",
  },
  {
    title: "Sidewalks, Walkways & Curbs",
    description: "Safe, clean and level pedestrian and access surfaces.",
    icon: "🚶‍♂️",
  },
  {
    title: "Stone Veneer & Natural Stone",
    description: "High-quality stone finishes for elegance and longevity.",
    icon: "🏞️",
  },
  {
    title: "Parapet Wall & Chimney Repairs",
    description:
      "Restore and secure building elements exposed to the elements.",
    icon: "🔥",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Masonry Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a wide range of expert masonry services tailored to meet both
          residential and commercial needs. Whether you’re enhancing a new build
          or restoring a historic structure, our craftsmanship ensures lasting
          results.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
              {/* Future enhancement: Add button for "More info" here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
