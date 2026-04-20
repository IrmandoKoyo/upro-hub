/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0f0f0f',
        panel: '#171717',
        muted: '#a3a3a3',
        line: '#2a2a2a',
        accent: '#d4a373',
        accentSoft: '#8f6a4d',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,163,115,0.2), 0 30px 80px rgba(212,163,115,0.12)',
      },
    },
  },
  plugins: [],
}

