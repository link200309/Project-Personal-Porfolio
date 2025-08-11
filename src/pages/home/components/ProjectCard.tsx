import { type Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat rounded-3xl border border-primary-pri3 card-border-ligth overflow-hidden">
      <div className="px-7 pt-7">
        <h3 className="text-title-md">{project.title}</h3>
        <p className="my-4">{project.description}</p>
      </div>
      <img src={project.image} alt="" className="w-full rounded-lg" />
    </div>
  );
};

export default ProjectCard;
