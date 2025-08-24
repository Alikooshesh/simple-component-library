// Modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Components/General/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `A reusable modal component with overlay click & ESC key to close, animations, and accessibility support (role="dialog", aria-modal).`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-8">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Modal
        </button>

        <Modal open={open} onClose={() => setOpen(false)} title="My Modal">
          <p className="text-gray-700">
            This is a simple modal. Click outside or press ESC to close.
          </p>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `<Modal open={open} onClose={() => setOpen(false)} title="My Modal">
  <p>This is a simple modal.</p>
</Modal>`,
      },
    },
  },
};

export const ScrollableContent: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="p-8">
        <button
          className="px-4 py-2 bg-primary text-white rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Scrollable Modal
        </button>

        <Modal open={open} onClose={() => setOpen(false)} title="Long Content">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} className="text-gray-700">
                Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            ))}
          </div>
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `<Modal open={open} onClose={() => setOpen(false)} title="Long Content">
  <div className="max-h-96 overflow-y-auto">...long content...</div>
</Modal>`,
      },
    },
  },
};
