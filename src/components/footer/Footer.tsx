import SocialLinks from "@/components/titles/SocialLinks";
import mainLogo from "@/assets/images/logos/main.png";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#000]/90 w-full p-6 items-center gap-3">
      <SocialLinks />
      <div>
        <img src={mainLogo} alt="Logo Desarrollador" className="h-36" />
      </div>
      <p className="text-gray-100">
        © 2026 The Legend of John. Built with passion, code and imagination.
      </p>
    </footer>
  );
};

export default Footer;
