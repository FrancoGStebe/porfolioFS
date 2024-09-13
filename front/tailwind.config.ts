import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '56': '20rem',
        '64': '22rem',
      },
      backgroundImage: {
       'custom-pattern': "url('/fondo.jpg')",
      },
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'],
        pixelify: ['"Pixelify Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
