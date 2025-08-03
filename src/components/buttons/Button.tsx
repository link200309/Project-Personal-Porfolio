type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  width?: string;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  width = "100%",
  onClick,
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary-pri1 text-white",
    secondary: "bg-primary-pri2 text-white",
    outline:
      "border border-primary-pri1 text-primary-pri1 hover:bg-primary-pri1 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-md",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `rounded w-[${width}] m-auto`;

  const buttonClasses = `
     ${baseClasses}
     ${variants[variant]}
     ${sizes[size]}
    `;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
