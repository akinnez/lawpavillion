import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import { useState, type InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", error, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type={inputType}
            {...props}
            className={clsx(
              className,
              "py-3 px-4 w-full rounded-md text-sm border outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition placeholder:text-xs placeholder:text-[#989A9F] dark:text-white placeholder:font-medium",
              { "border-red-600": error },
              { "border-[#ccc]": !error },
              { "pr-10": isPassword },
              { "pr-4": !isPassword }
            )}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                position: "absolute",
                right: 8,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: 14,
                color: "#555",
              }}
              tabIndex={-1}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          )}
        </div>
        {error && (
          <div style={{ color: "red", fontSize: 12, marginTop: 4 }}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
