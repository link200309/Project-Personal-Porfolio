//React
import { useMemo } from "react";
import { motion } from "framer-motion";

//Components
import SectionTitle from "@/components/titles/SectionTitle";
import ProjectCard from "./ProjectCard";

//Data
import { projects } from "@/data/Projects.data";

const Projects = () => {
  return (
    <section className="my-20">
      <SectionTitle title="Projects" />
      <article className="max-w-3xl mt-10 grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, type: "spring" }}
            whileInView={{ opacity: 1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </article>
    </section>
  );
};

export default Projects;
