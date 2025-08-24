const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths if needed
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};

export default config;
