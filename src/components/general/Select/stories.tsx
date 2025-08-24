import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Select, { type Option } from ".";

const meta: Meta<typeof Select> = {
  title: "Components/General/Form/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options: Option[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grapes", value: "grapes" },
  { label: "Mango", value: "mango" },
  { label: "Apple", value: "apple1" },
  { label: "Banana", value: "banana1" },
  { label: "Cherry", value: "cherry1" },
  { label: "Grapes", value: "grapes1" },
  { label: "Mango", value: "mango1" },
  { label: "Apple", value: "apple2" },
  { label: "Banana", value: "banana2" },
  { label: "Cherry", value: "cherry2" },
  { label: "Grapes", value: "grapes2" },
  { label: "Mango", value: "mango2" },
  
];

export const Default: Story = {
    render: () => {
      const [value, setValue] = useState<string | null>(null);
  
      return (
        <div className="p-6">
          <Select
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select a fruit"
          />
          <p className="mt-4 text-sm">Selected: {value || "None"}</p>
        </div>
      );
    },
  };


export const SearchableSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);

    return (
      <div className="p-6">
        <Select
          options={options}
          value={value}
          onChange={setValue}
          placeholder="Select a fruit"
          searchable
        />
        <p className="mt-4 text-sm">Selected: {value || "None"}</p>
      </div>
    );
  },
};


export const SearchableMultiSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <div className="p-6">
        <Select
          options={options}
          value={value}
          onChange={setValue}
          multiple
          placeholder="Select fruits"
          searchable
        />
        <p className="mt-4 text-sm">Selected: {value.join(", ") || "None"}</p>
      </div>
    );
  },
};


export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>("banana");

    return (
      <div className="p-6">
        <Select
          options={options}
          value={value}
          onChange={setValue}
          disabled
        />
        <p className="mt-4 text-sm">Disabled (value: {value})</p>
      </div>
    );
  },
};
