import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
  title: "Components/general/Tooltip",
  component: Tooltip,
  argTypes: {
    content: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    delayShow: { control: "number" },
    delayHide: { control: "number" },
  },
  parameters: {
    docs: {
      description: {
        component: `A tooltip component with **delay show/hide**, **arrow positioning**, and **fade animation**.`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center mt-20">
      <Tooltip {...args}>
        <button className="px-4 py-2 bg-primary text-white rounded">
          Hover me
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: "This is a tooltip",
    position: "top",
    delayShow: 300,
    delayHide: 200,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex justify-around mt-20 gap-12">
      <Tooltip content="Top tooltip" position="top">
        <button className="px-4 py-2 bg-primary text-white rounded">Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button className="px-4 py-2 bg-primary text-white rounded">Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button className="px-4 py-2 bg-primary text-white rounded">Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button className="px-4 py-2 bg-primary text-white rounded">Right</button>
      </Tooltip>
    </div>
  ),
};

export const Delays: Story = {
  render: () => (
    <div className="flex justify-center mt-20 gap-8">
      <Tooltip content="Slow show" delayShow={1000} delayHide={200}>
        <button className="px-4 py-2 bg-primary text-white rounded">Show 1s</button>
      </Tooltip>
      <Tooltip content="Slow hide" delayShow={300} delayHide={1500}>
        <button className="px-4 py-2 bg-primary text-white rounded">Hide 1.5s</button>
      </Tooltip>
    </div>
  ),
};
