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
    <section className="relative my-20">
      <div className="absolute w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,120,0,0.35),_transparent_70%)] top-[25%] right-[25%]"></div>
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
