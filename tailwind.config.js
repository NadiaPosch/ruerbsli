module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Indie Flower", "cursive"],
      title: ["Permanent Marker", "cursive"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "auto auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
