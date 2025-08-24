import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/General/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["fill", "outline", "link"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    href: { control: "text" },
    children: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

// Fill variant
export const FillPrimary: Story = {
  args: {
    variant: "fill",
    color: "primary",
    children: "Button",
  },
};

export const FillSecondary: Story = {
  args: {
    variant: "fill",
    color: "secondary",
    children: "Button",
  },
};

// Outline variant
export const OutlinePrimary: Story = {
  args: {
    variant: "outline",
    color: "primary",
    children: "Button",
  },
};

export const OutlineSecondary: Story = {
  args: {
    variant: "outline",
    color: "secondary",
    children: "Button",
  },
};

// Link variant
export const LinkPrimary: Story = {
  args: {
    variant: "link",
    color: "primary",
    href: "#",
    children: "Button Link",
  },
};

export const LinkSecondary: Story = {
  args: {
    variant: "link",
    color: "secondary",
    href: "#",
    children: "Button Link",
  },
};

// Loading state
export const Loading: Story = {
  args: {
    variant: "fill",
    color: "primary",
    loading: true,
    children: "Loading",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    variant: "fill",
    color: "primary",
    disabled: true,
    children: "Disabled",
  },
};
