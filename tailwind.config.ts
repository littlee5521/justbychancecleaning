import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-3xl": "1920px", // You can define any size you need
        "screen-4xl": "2560px", // Another example
      },
      textShadow: {
        lg: "0 2px 4px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        "chance-blue": "#A0E7E5",
        "chance-green": "#FFB5A7",
        "chance-yellow": "#FFDAC1",
        "chance-gray": "#F3F4F6",
        "chance-dark-blue": "#333333",
        "chance-deep-blue": "#005B96",
        "chance-dark-teal": "#8CC1C1",
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
