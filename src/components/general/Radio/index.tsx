import React from "react";
import clsx from "clsx";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  label,
  disabled = false,
  checked,
  onChange,
  id,
  className,
  ...props
}) => {
  const radioId =
    id || (label ? `radio-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

  return (
    <div className={clsx("flex items-center", className)}>
      <input
        id={radioId}
        type="radio"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only peer"
        {...props}
      />
      <label
        htmlFor={radioId}
        className={clsx(
          "flex items-center select-none",
          {
            "cursor-not-allowed opacity-50": disabled,
            "cursor-pointer" : !disabled
          }
        )}
      >
        <span
          className={clsx(
            "w-4 h-4 mr-2 rounded-full border-2 border-gray-400 flex-shrink-0 flex items-center justify-center transition-colors duration-200",
            "peer-checked:border-primary",
            "peer-hover:border-primary/80",
            "peer-disabled:border-gray-300"
          )}
        >
          <span
            className={clsx(
              "w-2 h-2 rounded-full bg-primary transition-transform duration-200",
              !checked && "scale-0",
              checked && "scale-100"
            )}
          />
        </span>
        {label && (
          <span className="text-sm text-gray-700">{label}</span>
        )}
      </label>
    </div>
  );
};

export default Radio;
