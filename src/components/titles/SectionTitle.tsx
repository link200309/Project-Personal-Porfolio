const SectionTitle = ({
  title,
  className,
  id = "",
}: {
  title: string;
  className?: string;
  id?: string;
}) => {
  return (
    <h2
      className={`text-center text-title-lg md:text-display-sm mb-8 font-bold text-primary-pri2 ${className}`}
      id={id}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
