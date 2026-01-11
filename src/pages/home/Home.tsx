//Components
import { Hero } from "./components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import BgAnimation from "@/components/bg/BgAnimation";
import Footer from "@/components/footer/Footer";
import ImageGallery from "@/components/imageGallery/ImageGallery";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <main className="relative">
        <Experience />
        <Projects />
      </main>
      <BgAnimation />
      <Footer />
    </div>
  );
};
