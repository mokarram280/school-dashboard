import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lamaSky: '#C3EBFA',
        lamaSkyLight: '#EDF9FD',
        lamaPurple: '#CFCEFF',
        lamaPurpleLight: '#F1F0FF',
        lamaYellow: '#FAE27C',
        lamaYellowLight: '#FEFCEB',
      },
    },
  },
  plugins: [],
} satisfies Config;
