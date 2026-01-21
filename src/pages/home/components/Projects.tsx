//React
import { motion } from "framer-motion";
import { useState } from "react";

//Components
import SectionTitle from "@/components/titles/SectionTitle";
import ProjectCard from "./ProjectCard";
import ImageGallery from "@/components/image/ImageGallery";

//Data
import { projects } from "@/data/en/Projects.data";
import { type Project } from "@/types";

//hooks
import { useLanguage } from "@/hooks/useLanguage";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  return (
    <section className="relative my-20 w-[100%]">
      <div className="absolute w-full h-full rounded-[30%] bg-[radial-gradient(circle_at_center,_rgba(255,120,0,0.35),_transparent_100%)] blur-[100px]"></div>
      <SectionTitle title={t.titles.projects} id="projects" />
      <article className="mx-4 md:mx-0 md:max-w-3xl mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, type: "spring" }}
            whileInView={{ opacity: 1 }}
            onClick={() => setSelectedProject(project)}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </article>
      {selectedProject && (
        <ImageGallery
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
