import React from "react";
import clsx from "clsx";

type ButtonVariant = "fill" | "outline" | "link";
type ButtonColor = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  loading?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "fill",
  color = "primary",
  loading = false,
  disabled = false,
  href,
  children,
  ...rest
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 rounded font-medium transition duration-200 focus:outline-none relative";

  const variantClasses: Record<ButtonVariant, string> = {
    fill: clsx({
      "bg-primary text-white hover:bg-primary-dark": color === "primary",
      "bg-secondary text-white hover:bg-secondary-dark": color === "secondary",
    }),
    outline: clsx({
      "border border-primary text-primary hover:bg-primary-light/20":
        color === "primary",
      "border border-secondary text-secondary hover:bg-secondary-light/20":
        color === "secondary",
    }),
    link: clsx({
      "text-primary hover:underline": color === "primary",
      "text-secondary hover:underline": color === "secondary",
    }),
  };

  const stateClasses = clsx({
    "cursor-not-allowed": disabled || loading,
    "opacity-50" : disabled,
    "bg-opacity-50" : loading,
    "active:scale-95": !disabled && !loading,
  });

  const content = (
    <>
      <span
        className={clsx({
          "opacity-0": loading,
        })}
      >
        {children}
      </span>
      {loading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="block animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        </span>
      )}
    </>
  );

  if (variant === "link") {
    if (!href) {
      throw new Error("href is required for link variant");
    }
    return (
      <a
        href={href}
        className={clsx(baseClasses, variantClasses.link, stateClasses)}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], stateClasses)}
      disabled={disabled || loading}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
