/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"], // Include a fallback
    },
    colors: {
      colorprimary: "rgb(var(--color-primary))",
      colorsecondary: "rgb(var(--color-secondary))",
      navdark: "var(--text-dark-nav)",
      dark: "var(--text-dark)",
      darkorange: "var(--darkorange)",
      darkblue: "var(--darkblue)",
      newsletterbackground: "var(--newsletterbackground)",
      border: "var(--border)",
      navDrop: "var(--navDrop)",
      white: "var(--white)",
      welcome: "var(--welcome)",
      grey: "var(--grey)",
    },
    extend: {}, // Leave extend here for any further customizations
  },
  plugins: [],
};
