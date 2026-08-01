import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: { 50: "#f2fbf4", 100: "#dcf5e2", 500: "#35a85a", 600: "#238a45", 700: "#186d35", 900: "#0e3e22" },
        sunshine: "#ffc74d",
      },
      boxShadow: { soft: "0 14px 35px rgba(14, 62, 34, .12)" },
    },
  },
  plugins: [],
};

export default config;
