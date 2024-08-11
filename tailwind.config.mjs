/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        beige: '#F9F4DA',
        astro: {
          50: '#F3E8FF',
          100: '#E1CFFF',
          200: '#C3A6FF',
          300: '#A57CFF',
          400: '#8853FF',
          500: '#673AB8', // Main color
          600: '#5E33A5',
          700: '#542C92',
          800: '#4B267F',
          900: '#411F6C',
        },
        svelte: {
          50: '#FFF0E6',
          100: '#FFD9BF',
          200: '#FFC299',
          300: '#FFAB73',
          400: '#FF945C',
          500: '#FF3D01', // Main color
          600: '#E63601',
          700: '#CC3001',
          800: '#B32A01',
          900: '#992301',
        },
        react: {
          50: '#E3F8FF',
          100: '#B3ECFF',
          200: '#81DEFD',
          300: '#5ED0FA',
          400: '#40C3F7',
          500: '#61DAFB', // Main color
          600: '#2BB0ED',
          700: '#1992D4',
          800: '#127FBF',
          900: '#0B69A3',
        },
        vue: {
          50: '#E6F7F1',
          100: '#B3E8D4',
          200: '#80D8B8',
          300: '#4DC89B',
          400: '#1ABB7F',
          500: '#42B883', // Main color
          600: '#3AA473',
          700: '#329063',
          800: '#2A7C53',
          900: '#226843',
        },
      },
    },
  },
  plugins: [],
};
