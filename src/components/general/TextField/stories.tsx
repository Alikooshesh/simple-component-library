// TextField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import TextField from ".";

const meta: Meta<typeof TextField> = {
  title: "Components/General/Form/TextField",
  component: TextField,
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    error: { control: "text" },
    placeholder: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: `
A text input field with built-in **disabled**, **active**, **hover**, 
and **error** states.  
Use this component for consistent form styling with Tailwind.
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// Default
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    label: "email :",
  },
  parameters: {
    docs: {
      source: {
        code: `<TextField placeholder="Enter text..." />`,
      },
    },
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<TextField placeholder="Disabled input" disabled />`,
      },
    },
  },
};

// Error
export const Error: Story = {
  args: {
    placeholder: "Enter email",
    error: "Invalid email address",
  },
  parameters: {
    docs: {
      source: {
        code: `<TextField placeholder="Enter email" error="Invalid email address" />`,
      },
    },
  },
};
