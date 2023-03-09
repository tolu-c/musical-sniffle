import { ButtonProps } from "../../../../types/types";
import { Link } from "react-router-dom";

const Button = ({
  href,
  to,
  children,
  onClick,
  size,
  buttonStyle,
  disabled,
}: ButtonProps) => {
  const buttonColor = `${
    buttonStyle === "danger"
      ? "bg-red-600 text-red-100"
      : buttonStyle === "primary"
      ? "bg-blue-700 text-blue-100"
      : buttonStyle === "success"
      ? "bg-green-700 text-green-100"
      : "bg-transparent border"
  }`;

  const buttonSize = `${
    size === "normal"
      ? "w-max h-auto py-2 px-4 rounded-md text-base font-medium"
      : size === "small"
      ? "w-max h-auto py-1 px-2 rounded-md text-sm font-medium"
      : size === "large"
      ? "w-max h-auto py-3 px-6 rounded-lg text-lg font-medium"
      : "w-max h-auto py-2 px-4 rounded-md text-base font-medium"
  }`;

  if (href) {
    return (
      <a href={href} className={`${buttonColor} ${buttonSize}`}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={`${buttonColor} ${buttonSize}`}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${buttonColor} ${buttonSize}`}
    >
      {children}
    </button>
  );
};

export default Button;
