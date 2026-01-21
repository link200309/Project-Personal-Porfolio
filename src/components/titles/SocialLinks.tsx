import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const links = [
  {
    icon: (
      <FaLinkedin className="text-title-lg md:text-display-sm dark:text-gray-300" />
    ),
    url: "https://www.linkedin.com/in/john-henry-chavarria-zurita-787343289/",
  },
  {
    icon: (
      <FaGithub className="text-title-lg md:text-display-sm dark:text-gray-300" />
    ),
    url: "https://github.com/link200309",
  },
  {
    icon: (
      <MdEmail className="text-title-lg md:text-display-sm dark:text-gray-300" />
    ),
    url: "mailto:chavarriajohn08@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-5 justify-center">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="text-label-lg text-black cursor-pointer"
              href={link.url}
              target="_blank"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
