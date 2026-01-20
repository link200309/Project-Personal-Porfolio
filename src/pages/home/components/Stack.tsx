//components
import SectionTitle from "@/components/titles/SectionTitle";
import StackCard from "./StackCard";

//data
import {
  frontendTech,
  backendTech,
  databaseTech,
  tools,
} from "@/data/en/Technologies.data";

//hooks
import { useLanguage } from "@/context/LanguageContext";

const Stack = () => {
  const { t } = useLanguage();
  return (
    <section className="mb-20">
      <SectionTitle title={t.titles.techStack} id="tech-stack" />

      <div className="grid grid-cols-2 gap-5">
        <StackCard technologies={frontendTech} title={t.techStack.frontend} />
        <StackCard technologies={backendTech} title={t.techStack.backend} />
        <StackCard technologies={databaseTech} title={t.techStack.databases} />
        <StackCard technologies={tools} title={t.techStack.tools} />
      </div>
    </section>
  );
};

export default Stack;
