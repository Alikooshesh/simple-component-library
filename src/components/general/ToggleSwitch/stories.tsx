import type { Meta, StoryObj } from "@storybook/react-vite";
import ToggleSwitch from ".";
import { useState } from "react";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/General/Form/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
  parameters: {
    docs: {
      description: {
        component: `
A toggle switch component with built-in **hover**, **active**, and **disabled** states.  
Supports optional **label** for accessibility.
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// Interactive story
export const Interactive: Story = {
    render: (args) => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <ToggleSwitch
          {...args}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      );
    },
    args: {
      label: "Enable notifications",
    },
  };


// Disabled state
export const Disabled: Story = {
  args: {
    label: "Disabled toggle",
    disabled: true,
    checked: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<ToggleSwitch label="Disabled toggle" checked={false} disabled />`,
      },
    },
  },
};
