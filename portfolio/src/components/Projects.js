import { EmblaCarousel } from "./Embla/Carousel";
import { motion } from "framer-motion";

const pageTransition = {
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "-100%" },
};

function Projects() {
  return (
    <motion.div
      className="container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={{ duration: 0.5 }}
    >
      <div>
        <EmblaCarousel />
      </div>
    </motion.div>
  );
}
export default Projects;
