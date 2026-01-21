import SocialLinks from "@/components/titles/SocialLinks";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="flex flex-col w-full p-6 items-center gap-3">
      <SocialLinks />
      <div>
        <img src="/logos/main.webp" alt="Logo Desarrollador" className="h-32" />
      </div>
      <p className="dark:text-gray-100 text-label-xs md:text-label-sm text-center">
        {t.footer.phrase}
      </p>
      <p className="dark:text-gray-100 text-label-xs md:text-label-sm text-center">
        {t.footer.credits}
      </p>
    </footer>
  );
};

export default Footer;
