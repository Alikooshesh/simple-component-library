import React, { forwardRef } from "react";
import clsx from "clsx";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  loading?: boolean;
  error?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, loading = false, disabled = false, error, className, id, ...props },
    ref
  ) => {
    const baseStyles =
      "w-full rounded-md border px-3 py-2 text-sm outline-none transition placeholder-gray-400";

    const stateStyles = clsx({
      "border-gray-300 hover:border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/30":
        !error && !disabled,
      "border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200":
        !!error,
      "bg-gray-100 text-gray-500 cursor-not-allowed": disabled || loading,
    });

    // ensure input has an id for accessibility
    const inputId = id || (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            disabled={disabled || loading}
            className={clsx(baseStyles, stateStyles, className)}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

export default TextField;
