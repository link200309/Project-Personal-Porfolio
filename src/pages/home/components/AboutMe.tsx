//react
import { motion } from "framer-motion";

//components
import SectionTitle from "@/components/titles/SectionTitle";

//hooks
import { useLanguage } from "@/hooks/useLanguage";

const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <section className="mt-20">
      <SectionTitle title={t.titles.aboutMe} id="about" />

      <motion.div
        className="relative max-w-3xl mx-4 md:mx-0 p-7 md:p-10 rounded-3xl border border-primary-pri3 card-border-ligth mb-6 backdrop-blur-sm dark:backdrop-blur-md"
        initial={{ opacity: 0 }}
        transition={{ duration: 2, type: "spring" }}
        whileInView={{ opacity: 1 }}
      >
        <p className="text-label-sm md:text-label-md md:leading-7">
          {t.aboutMe.text}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
