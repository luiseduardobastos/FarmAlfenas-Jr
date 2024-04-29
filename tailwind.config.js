/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        home: "url('/assets/HomeBackground.png')",
        contato: "url('/assets/HomeFormularioBackground.png')",
        proposito: "url('/assets/proposito.png')",
      },
    },
  },
  plugins: [],
};
