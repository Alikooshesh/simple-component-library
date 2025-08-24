import React from "react";
import Radio from "../../Radio";
import { useRadioGroup } from "..";

export interface RadioItemProps {
  value: string | number;
  label: string;
  className?: string;
}

const RadioItem: React.FC<RadioItemProps> = ({ value, label, className }) => {
  const { name, value: selected, onChange, disabled } = useRadioGroup();

  return (
    <Radio
      name={name}
      value={value}
      checked={selected === value}
      onChange={() => onChange(value)}
      label={label}
      disabled={disabled}
      className={className}
    />
  );
};

export default RadioItem;
