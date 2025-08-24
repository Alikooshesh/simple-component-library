// ToggleSwitch.tsx
import React from "react";
import clsx from "clsx";

export interface ToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  disabled = false,
  checked,
  onChange,
  id,
  className,
  ...props
}) => {
  const labelClasses = clsx("mr-3 text-sm font-medium text-gray-700", {
    "cursor-not-allowed text-gray-400": disabled,
  });

  const trackClasses = clsx(
    "w-11 h-6 rounded-full transition-colors duration-200",
    {
      "bg-gray-300": !checked,
      "bg-primary": checked && !disabled,
      "cursor-pointer": !disabled,
      "hover:bg-primary/80": !disabled && !checked,
      "opacity-50 cursor-not-allowed": disabled,
    }
  );

  const thumbClasses = clsx(
    "absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 pointer-events-none",
    { "translate-x-5": checked, "cursor-not-allowed": disabled }
  );

  return (
    <label>
      <div className={clsx("flex items-center", className)}>
        {label && <span className={labelClasses}>{label}</span>}

        <div className="relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          <div className={trackClasses} />
          <span className={thumbClasses} />
        </div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
