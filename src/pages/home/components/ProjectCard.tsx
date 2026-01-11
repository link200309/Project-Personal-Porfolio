import { type Project } from "@/types";
import ImageGallery from "@/components/imageGallery/ImageGallery";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat rounded-3xl border border-primary-pri3 card-border-ligth">
      <div className="px-7 pt-7">
        <h3 className="text-title-md">{project.title}</h3>
        <p className="my-4">{project.description}</p>
      </div>
      <ImageGallery />
    </div>
  );
};

export default ProjectCard;
