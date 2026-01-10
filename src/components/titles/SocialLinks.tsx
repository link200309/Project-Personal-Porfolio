import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const links = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/john-henry-chavarria-zurita-787343289/",
  },
  { icon: <FaGithub />, url: "https://github.com/link200309" },
  { icon: <CiMail />, url: "mailto:chavarriajohn08@gmail.com" },
];

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex gap-2 justify-center">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="text-label-lg text-black cursor-pointer"
              href={link.url}
              target="_blank"
            >
              <div className="p-2 bg-slate-200 rounded">{link.icon}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
