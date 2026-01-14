interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  children,
  loading = false,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
