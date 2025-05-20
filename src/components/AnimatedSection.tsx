// src/components/AnimatedSection.tsx
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }} // 👈 aquí se usa `delay`
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
