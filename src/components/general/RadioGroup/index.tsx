import React, { createContext, useContext } from "react";

interface RadioGroupContextProps {
  name: string;
  value: string | number;
  onChange: Function;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextProps | null>(null);

export interface RadioGroupProps {
  name: string;
  value: string | number;
  onChange: Function;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  disabled = false,
  children,
  className,
}) => {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange, disabled }}>
      <div className={className}>{children}</div>
    </RadioGroupContext.Provider>
  );
};

// Custom hook for consuming context in Radio component
export const useRadioGroup = () => {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("useRadioGroup must be used within a RadioGroup");
  }
  return context;
};

export default RadioGroup