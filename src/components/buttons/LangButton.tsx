import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/hooks/useLanguage";

const LangButton = ({ className }: { className: string }) => {
  const { onChangeLanguage } = useLanguage();
  return (
    <button onClick={onChangeLanguage} className={className}>
      <MdLanguage size={25} className="text-blue-500" />
    </button>
  );
};

export default LangButton;
