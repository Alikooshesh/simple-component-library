import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import RadioItem from "./RadioItem";
import  RadioGroup  from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/General/Form/RadioGroup",
  component: RadioGroup,
  argTypes: {
    disabled: { control: "boolean" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("option1");

    return (
      <RadioGroup
        {...args}
        name="example"
        value={selected}
        onChange={setSelected}
      >
        <RadioItem value="option1" label="Option 1" />
        <RadioItem value="option2" label="Option 2" />
        <RadioItem value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
  args: {
    disabled: false,
  },
};

export const DisabledGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option2");

    return (
      <RadioGroup
        name="example"
        value={selected}
        onChange={setSelected}
        disabled
      >
        <RadioItem value="option1" label="Option 1" />
        <RadioItem value="option2" label="Option 2" />
        <RadioItem value="option3" label="Option 3" />
      </RadioGroup>
    );
  },
};
