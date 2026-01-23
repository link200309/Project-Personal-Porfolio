import { useLanguage } from "@/hooks/useLanguage";

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="hidden md:flex justify-center w-[645px] fixed top-2  backdrop-blur-[10px] bg-primary-pri1/80 dark:bg-primary-pri1/70 z-[1000] rounded-md bg-[url(/src/assets/images/decoration/noisy.webp)]">
      <ul className="w-full h-16 flex items-center justify-evenly">
        {t.navbar.options.map((option, key) => {
          return (
            <a
              href={option.href}
              key={key}
              className="active:scale-95 hover:underline decoration-primary-pri2 transition-all duration-300"
            >
              <li className="text-white hover:text-primary-pri3">
                {option.name}
              </li>
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
