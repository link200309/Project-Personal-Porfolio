import { MdLanguage } from "react-icons/md";
import { useLanguage } from "@/hooks/useLanguage";

const LangButton = ({ className }: { className: string }) => {
  const { onChangeLanguage } = useLanguage();
  return (
    <button onClick={onChangeLanguage} className={className}>
      <MdLanguage size={25} className="text-primary-pri1/90" />
    </button>
  );
};

export default LangButton;
