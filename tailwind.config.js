module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/elements/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
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
