// src/components/StatsGrid.tsx
import { motion } from "framer-motion";

interface Stat {
  title: string;
  value: string;
  subtitle: string;
  bg: string;
}

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

const StatsGrid = ({ stats }: { stats: Stat[] }) => (
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
        <div className="relative z-10 text-center">
          <p className="text-xl font-semibold text-red-300">{stat.title}</p>
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-sm mt-1">{stat.subtitle}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default StatsGrid;
