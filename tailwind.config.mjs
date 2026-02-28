/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rm-black': '#0D0D0D',
        'rm-yellow': '#FFC000',
        'rm-teal': '#2791A6',
        'rm-green': '#78A300',
      },
      fontSize: {
        'base': ['14.67px', '1.6'], // 11pt aprox
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        rampmaster: {
          "primary": "#2791A6", // Turquesa como primario para CTAs (Accesibilidad)
          "primary-content": "#ffffff",
          "secondary": "#FFC000", // Amarillo decorativo
          "secondary-content": "#0D0D0D",
          "accent": "#78A300",
          "accent-content": "#0D0D0D",
          "neutral": "#0D0D0D",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#d1d5db",
          "base-content": "#0D0D0D",
        },
        "rampmaster-dark": {
          "primary": "#2791A6",
          "primary-content": "#ffffff",
          "secondary": "#FFC000",
          "secondary-content": "#0D0D0D",
          "accent": "#78A300",
          "accent-content": "#0D0D0D",
          "neutral": "#ffffff",
          "neutral-content": "#0D0D0D",
          "base-100": "#0D0D0D",
          "base-200": "#1a1a1a",
          "base-300": "#262626",
          "base-content": "#ffffff",
        },
      },
    ],
  },
}
