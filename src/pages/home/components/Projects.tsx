//React
import { useMemo } from "react";
import { motion } from "framer-motion";

//Components
import SectionTitle from "@/components/titles/SectionTitle";
import ProjectCard from "./ProjectCard";

//Data
import { projects } from "@/data/Projects.data";

const Projects = () => {
  const projectsCol1 = useMemo(
    () => projects.slice(0, projects.length / 2),
    []
  );
  const projectsCol2 = useMemo(
    () => projects.slice(projects.length / 2, projects.length),
    []
  );

  return (
    <section className="my-20">
      <SectionTitle title="Projects" />
      <article className="max-w-3xl mt-10 grid grid-cols-2 gap-6">
        <div className="grid gap-6">
          {projectsCol1.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              transition={{ duration: 2, type: "spring" }}
              whileInView={{ opacity: 1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6">
          {projectsCol2.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              transition={{ duration: 2, type: "spring" }}
              whileInView={{ opacity: 1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Projects;
