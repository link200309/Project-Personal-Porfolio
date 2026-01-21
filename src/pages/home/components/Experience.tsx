//React
import { motion } from "framer-motion";

//Componentes
import SectionTitle from "@/components/titles/SectionTitle";

//hooks
import { useLanguage } from "@/hooks/useLanguage";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-20">
      <SectionTitle title={t.titles.experience} id="experience" />
      <article className="mx-4 md:mx-0 md:max-w-3xl">
        {t.experience.map((exp, index) => {
          return (
            <motion.div
              key={index}
              className="relative p-7 md:p-10 rounded-3xl border border-primary-pri3 card-border-ligth mb-6 backdrop-blur-sm dark:backdrop-blur-md"
              initial={{ opacity: 0 }}
              transition={{ duration: 2, type: "spring" }}
              whileInView={{ opacity: 1 }}
            >
              <h3 className="text-title-sm md:text-title-md font-bold">
                {exp.title}
              </h3>
              <p className="text-label-sm font-medium">{exp.date}</p>
              <ul className="list-disc pl-5 mt-5">
                {exp.descriptions.map((description, i) => (
                  <li
                    key={i}
                    className="text-label-sm md:text-label-md md:leading-7"
                  >
                    {description}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </article>
    </section>
  );
};

export default Experience;
