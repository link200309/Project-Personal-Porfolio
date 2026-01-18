const SectionTitle = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2
      className={`text-center text-display-sm font-bold text-primary-pri2 ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
