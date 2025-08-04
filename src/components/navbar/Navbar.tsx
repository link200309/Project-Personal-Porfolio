const Navbar = () => {
  const options = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expirience", href: "#Expirience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-center w-[430px] fixed  backdrop-blur-[10px] bg-[#000]/80 z-[1000] rounded">
      <ul className="h-16 flex items-center justify-center gap-5">
        {options.map((option, key) => {
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
