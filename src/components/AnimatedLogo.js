import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <motion.h1
      className="text-4xl font-bold text-blue-500"
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      My Portfolio 🚀
    </motion.h1>
  );
}