/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Capriola', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#BBEEFF',
          cardFrom: '#AEE6FF',
          label: '#6B4E9B',
        },
      },
      borderRadius: {
        card: '28px',
      },
    },
  },
  plugins: [],
}

