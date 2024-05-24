import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        lg: "0 2px 4px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        "chance-blue": "#00C4CC",
        "chance-green": "#A3D800",
        "chance-yellow": "#FFD700",
        "chance-gray": "#F2F2F2",
        "chance-dark-blue": "#004E7C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
