import type { Meta, StoryObj } from "@storybook/react-vite";
import Radio from ".";
import { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/General/Form/Radio",
  component: Radio,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;


export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Radio
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
  args: {
    label: "Click me",
    disabled: false,
  },
};
