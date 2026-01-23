import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/hooks/useLanguage";

const LangButton = ({ className }: { className: string }) => {
  const { onChangeLanguage } = useLanguage();
  return (
    <button
      onClick={onChangeLanguage}
      className={`hover:scale-110 ${className} transition-all duration-300 ease-in-out`}
    >
      <MdLanguage size={25} className="text-primary-pri1/90" />
    </button>
  );
};

export default LangButton;
