/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        azul_primary: "#A3A5F0", // Definiendo el color personalizado como 'primary'
        azul_secondary: "#235AF4", // Definiendo el color personalizado como 'secondary'
      },
      animation: {
        "fade-zoom-in-left": "fadeZoomInLeft 0.6s ease-out forwards",
        "fade-zoom-in-up": "fadeZoomInUp 0.6s ease-out forwards",
        "fade-zoom-in-right": "fadeZoomInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeZoomInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        fadeZoomInUp: {
          "0%": { opacity: "0", transform: "translateY(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        fadeZoomInRight: {
          "0%": { opacity: "0", transform: "translateX(30px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
