import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ToastProvider, useToast } from ".";

const meta: Meta<typeof ToastProvider> = {
  title: "Components/general/Toast",
  component: ToastProvider,
  parameters: {
    docs: {
      description: {
        component: `
A toast notification component with **auto-dismiss**, **stacked multiple toasts**, and **slide/fade animations**.  
Use the \`useToast\` hook to trigger or remove toasts from anywhere inside the provider.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const Demo = () => {
  const { addToast, removeToast } = useToast();
  const [lastToastId, setLastToastId] = useState<string | null>(null);

  const handleAddToast = (type: "success" | "error" | "info") => {
    const id = Date.now().toString();
    setLastToastId(id);
    addToast({ message: `${type} toast!`, type, duration: 5000, id });
  };

  return (
    <div className="flex flex-col gap-2 p-8 max-w-[350px]">
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => handleAddToast("success")}
      >
        Show Success
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => handleAddToast("error")}
      >
        Show Error
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => handleAddToast("info")}
      >
        Show Info
      </button>

      {lastToastId && (
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded mt-2"
          onClick={() => removeToast(lastToastId)}
        >
          Remove Last Toast
        </button>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  ),
};
