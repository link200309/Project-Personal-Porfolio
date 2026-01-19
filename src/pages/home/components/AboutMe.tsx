//react
import { motion } from "framer-motion";

//components
import SectionTitle from "@/components/titles/SectionTitle";

//data
import { AboutMeDescription } from "@/data/AboutMe";

const AboutMe = () => {
  return (
    <section className="mt-20">
      <SectionTitle title="About Me" id="about" />

      <motion.div
        className="relative max-w-3xl p-10 rounded-3xl border border-primary-pri3 card-border-ligth mb-6 backdrop-blur-sm dark:backdrop-blur-md"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, type: "spring" }}
        whileInView={{ opacity: 1 }}
      >
        <p className="text-label-md leading-7">{AboutMeDescription}</p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
