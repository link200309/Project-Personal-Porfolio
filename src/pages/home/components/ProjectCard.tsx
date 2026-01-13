import { type Project } from "@/types";
import screen4 from "@/assets/images/projects/projectTracker/screen4.webp";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative h-64 border border-primary-pri3 card-border-ligth rounded cursor-pointer">
      <img
        src={screen4}
        alt="imagen de tarjeta"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute z-10 p-4 bottom-0 w-full bg-black/50">
        <h3 className="text-label-sm text-gray-400 ">Pagina web</h3>
        <p className="text-white mt-2">Tracking for Dota 2</p>
      </div>
    </div>
  );
};

export default ProjectCard;
