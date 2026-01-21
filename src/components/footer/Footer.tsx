import SocialLinks from "@/components/titles/SocialLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-6 items-center gap-3">
      <SocialLinks />
      <div>
        <img src="/logos/main.webp" alt="Logo Desarrollador" className="h-32" />
      </div>
      <p className="dark:text-gray-100 text-label-xs md:text-label-sm text-center">
        © 2026 The Legend of John. Built with passion, code and imagination.
      </p>
    </footer>
  );
};

export default Footer;
