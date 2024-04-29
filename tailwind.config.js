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
        contatoClientes: "url('/assets/ClientsFormularioBackground.png')",
        quemSomos: "url('/assets/AboutBackground.png')",
        servicos: "url('/assets/ServicesBackground.png')",
        clientes: "url('/assets/ClientsBackground.png')",
        contatoBgd: "url('/assets/ContactBackground.png')",
        contatoBgdSection: "url('/assets/ContactFormularioBackground.png')",
      },
    },
  },
  plugins: [],
};
