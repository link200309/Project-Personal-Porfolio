//Components
import { Hero } from "./components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BgAnimation from "@/components/bg/BgAnimation";
import Footer from "@/components/footer/Footer";
import Stack from "./components/Stack";
import AboutMe from "./components/AboutMe";

export const Home = () => {
  return (
    <div className="flex flex-col items-center bg-[url(/src/assets/images/decoration/noisy.webp)]">
      <Navbar />
      <Hero />
      <main className="relative">
        <AboutMe />
        <Experience />
        <Projects />
        <Stack />
      </main>
      <BgAnimation />
      <Footer />
    </div>
  );
};
