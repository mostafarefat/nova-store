import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lora)", "sans-serif"], // ربط Lora بالـ Tailwind
      },
      colors: {
        primary: "#1c1714",   
        secondary: "#53463D", 
        accent: "#FFD598",    
        dark: "#221807",      
        light: "#ffffff",     
      },
    },
  },
  plugins: [],
};

export default config;

