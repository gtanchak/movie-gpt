import { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
      },
    },
  },

  plugins: [],
} satisfies Config;

export default tailwindConfig;
