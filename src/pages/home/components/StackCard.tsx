import TechLogo from "@/components/image/TechLogo";
import { type Technologies } from "@/types";

type StackCardProps = {
  technologies: Technologies[];
  title: string;
};

const StackCard = ({ technologies, title }: StackCardProps) => {
  return (
    <div className="w-[100%] border border-primary-pri3 backdrop-blur-sm mt-8 p-6 rounded-3xl place-items-center bg-[url(/src/assets/images/decoration/noisy.webp)]">
      <h3 className="relative text-title-md col-span-3 -z-50">{title}</h3>

      <div className="grid grid-cols-3 gap-8 mt-7">
        {technologies.map((logo, index) => (
          <TechLogo key={index} logo={logo} />
        ))}
      </div>
    </div>
  );
};

export default StackCard;
