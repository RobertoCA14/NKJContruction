import { motion } from "framer-motion";
import edifici711 from "../assets/edifici711.png";
import cliente from "../assets/cliente.png";
import proyectos from "../assets/proyectos.jpg";
import safety from "../assets/safety.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stats = [
  {
    title: "Since",
    value: "2018",
    subtitle: "Years of experience",
    bg: edifici711,
  },
  {
    title: "Clients",
    value: "20+",
    subtitle: "Trusted partnerships",
    bg: cliente,
  },
  {
    title: "Projects",
    value: "22+",
    subtitle: "Completed works",
    bg: proyectos,
  },
  {
    title: "Safety & Quality",
    value: "100%",
    subtitle: "Satisfaction guaranteed",
    bg: safety,
  },
];

const WhyChooseUs = () => (
  <section className="py-16 px-4 bg-white text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
      Why Choose Us
    </h2>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={item}
          className="relative rounded-lg shadow text-white p-6 flex flex-col items-center justify-center h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${stat.bg})` }}
        >
          <div className="bg-black/60 absolute inset-0 rounded-lg"></div>
          <div className="relative z-10">
            <p className="text-xl font-semibold text-red-300">{stat.title}</p>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm mt-1">{stat.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default WhyChooseUs;
