/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        backgroundMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" }, // Movimiento continuo a la derecha
        },
      },
      animation: {
        bg: "backgroundMove 60s linear infinite", // Ajusta la duración a 60 segundos (más lento)
      },
    },
  },
  plugins: [],
};
