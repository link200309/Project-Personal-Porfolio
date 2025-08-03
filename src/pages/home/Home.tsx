//Components
import { Hero } from "./components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Expirience from "./components/Experience";

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <main>
        <Expirience />
      </main>
    </div>
  );
};
