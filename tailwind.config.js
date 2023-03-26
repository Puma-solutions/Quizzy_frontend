/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      fontFamily: {
        cina: ["CinaGEOTest", "sans-serif"],
      },
      fontWeight: {
        black: 900,
        bold: 700,
        extrabold: 800,
        extralight: 200,
        light: 300,
        medium: 500,
        normal: 400,
        semibold: 600,
        thin: 100,
      },
    },
  },
  plugins: [],
};
