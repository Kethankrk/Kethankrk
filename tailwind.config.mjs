/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#161211",
        secondary: "#2b2b2b",
        accent: "#1eb954",
        bright: "#3afc7e",
        dim: "#adadad",
        // "": "",
        // "": "",
        // "": "",
      },
    },
  },
  plugins: [],
};
