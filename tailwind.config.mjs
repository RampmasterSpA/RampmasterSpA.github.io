/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rm-black': '#0D0D0D',
        'rm-yellow': '#FFC000',
        'rm-turquoise': '#2791A6',
        'rm-green': '#78A300',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Lato"', 'sans-serif'],
      },
      fontSize: {
        base: ['0.9rem', '1.5'], // Ajuste a ~14.4px según guía
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        rampmaster: {
          "primary": "#FFC000", // Amarillo
          "primary-content": "#0D0D0D", // Texto NEGRO sobre amarillo (Accesibilidad AAA)
          "secondary": "#2791A6", // Turquesa
          "secondary-content": "#ffffff", // Texto blanco sobre turquesa (Mejor contraste posible, aunque revisar tamaño)
          "accent": "#78A300", // Verde
          "accent-content": "#0D0D0D", // Texto negro sobre verde
          "neutral": "#0D0D0D", // Negro corporativo
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#d1d5db",
          "base-content": "#0D0D0D", // Texto base negro
        },
        "rampmaster-dark": {
          "primary": "#FFC000",
          "primary-content": "#0D0D0D", // Texto NEGRO sobre amarillo
          "secondary": "#2791A6",
          "secondary-content": "#ffffff",
          "accent": "#78A300",
          "accent-content": "#0D0D0D",
          "neutral": "#ffffff",
          "neutral-content": "#0D0D0D",
          "base-100": "#0D0D0D", // Fondo Negro Corporativo
          "base-200": "#1a1a1a",
          "base-300": "#262626",
          "base-content": "#ffffff",
        },
      },
    ],
  },
}
