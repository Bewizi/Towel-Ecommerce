/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Off-white": "#F6F6F6",
        "light-gray": "#F3F5F6",
        "off-dark": "#232323",
        "wine-red": "#9E3040",
        "dim-gray": "#686868",
        "dark-gray": "#303030",
      },
    },
  },
  plugins: [],
};
