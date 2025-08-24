import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  value: string | string[] | null;
  onChange: Function;
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  hideScrollbar?: boolean;
  searchable?: boolean;
  className?: string;
}

const baseClasses = {
  container: "relative w-64",
  control:
    "flex items-center justify-between border rounded-md px-3 py-2 cursor-pointer select-none transition",
  placeholder: "truncate text-gray-400",
  tag: "bg-primary text-white text-xs rounded px-2 py-0.5",
  dropdown:
    "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
  searchBox:
    "w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-primary",
  option: "px-3 py-2 cursor-pointer flex items-center justify-between",
  scrollbar:
    "scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500",
};

const getControlClasses = (disabled: boolean, open: boolean) =>
  clsx(baseClasses.control, {
    "bg-gray-100 text-gray-400 cursor-not-allowed": disabled,
    "border-gray-300 hover:border-primary": !disabled,
    "border-primary ring-1 ring-primary": open && !disabled,
  });

const getOptionClasses = (
  isSelected: boolean,
  isHighlighted: boolean,
  disabled: boolean
) =>
  clsx(baseClasses.option, {
    "bg-primary text-white": isSelected,
    "bg-gray-100": isHighlighted && !isSelected,
    "hover:bg-gray-100": !disabled && !isSelected,
    "cursor-not-allowed opacity-50": disabled,
  });

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  multiple = false,
  disabled = false,
  placeholder = "Select...",
  hideScrollbar = false,
  searchable = false,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightIndex((prev) => (prev + 1) % filteredOptions.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightIndex(
          (prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length
        );
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const option = filteredOptions[highlightIndex];
        if (option) selectOption(option);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, highlightIndex]);

  const isSelected = (option: Option) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(option.value);
    }
    return value === option.value;
  };

  const selectOption = (option: Option) => {
    if (disabled) return;

    if (multiple) {
      if (Array.isArray(value) && value.includes(option.value)) {
        onChange(value.filter((v) => v !== option.value));
      } else {
        onChange([...(Array.isArray(value) ? value : []), option.value]);
      }
    } else {
      onChange(option.value);
      setOpen(false);
    }
  };

  const filteredOptions = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={containerRef} className={clsx(baseClasses.container, className)}>
      <div
        className={getControlClasses(disabled, open)}
        onClick={() => !disabled && setOpen((prev) => !prev)}
      >
        <div className="flex flex-wrap gap-1">
          {multiple && Array.isArray(value) && value.length > 0 ? (
            value.map((v) => {
              const opt = options.find((o) => o.value === v);
              return (
                <span key={v} className={baseClasses.tag}>
                  {opt?.label}
                </span>
              );
            })
          ) : (
            <span
              className={clsx("truncate", { "text-gray-400": !value })}
            >
              {options.find((o) => o.value === value)?.label || placeholder}
            </span>
          )}
        </div>
        <span className="ml-2">▾</span>
      </div>

      {open && (
        <div
          className={clsx(baseClasses.dropdown, {
            [baseClasses.scrollbar]: !hideScrollbar,
            "scrollbar-hide": hideScrollbar,
          })}
        >
          {/* Search box */}
          {searchable && (
            <div className="p-2">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={baseClasses.searchBox}
              />
            </div>
          )}

          {filteredOptions.length === 0 && (
            <div className="px-3 py-2 text-gray-500 text-sm">
              No options found
            </div>
          )}
          {filteredOptions.map((option, idx) => (
            <div
              key={option.value}
              className={getOptionClasses(
                isSelected(option),
                highlightIndex === idx,
                disabled
              )}
              onClick={() => selectOption(option)}
              onMouseEnter={() => setHighlightIndex(idx)}
            >
              {option.label}
              {isSelected(option) && <span>✓</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
