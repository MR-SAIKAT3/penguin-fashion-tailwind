/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#FFFBF0",
        "color-primary": "#8BA622",
        "color-secondary": "#F1F1F1",
        "color-orange": "#FABE4C",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [],
};
