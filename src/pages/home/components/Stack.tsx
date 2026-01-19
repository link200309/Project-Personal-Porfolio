//components
import SectionTitle from "@/components/titles/SectionTitle";
import StackCard from "./StackCard";

//data
import {
  frontendTech,
  backendTech,
  databaseTech,
  tools,
} from "@/data/Technologies.data";

const Stack = () => {
  return (
    <section className="mb-20">
      <SectionTitle title="Tech Stack" id="tech-stack" />

      <div className="grid grid-cols-2 gap-5">
        <StackCard technologies={frontendTech} title="Frontend" />
        <StackCard technologies={backendTech} title="Backend" />
        <StackCard technologies={databaseTech} title="Data Base" />
        <StackCard technologies={tools} title="Tools" />
      </div>
    </section>
  );
};

export default Stack;
