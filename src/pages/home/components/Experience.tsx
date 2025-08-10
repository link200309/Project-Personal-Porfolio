//Componentes
import SectionTitle from "@/components/titles/SectionTitle";

//Data
import { experiences } from "@/data/Experience.data";

const Experience = () => {
  return (
    <section className="my-20">
      <SectionTitle title="Experience" />
      <article className="max-w-3xl mt-10">
        {experiences.map((exp, index) => {
          return (
            <div
              key={index}
              className="relative p-10 rounded-3xl border border-primary-pri3 card-border-ligth"
            >
              <h3 className="text-title-md font-bold">{exp.title}</h3>
              <p className="text-label-sm font-medium">{exp.date}</p>
              <ul className="list-disc pl-5 mt-5 leading-7">
                {exp.descriptions.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Experience;
