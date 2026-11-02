/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mbs: {
          navy: '#0B2A4A',
          'navy-dark': '#061322',
          'navy-card': '#0c223a',
          'navy-light': '#143c66',
          cyan: '#13B5CE',
          'cyan-light': '#38d8f0',
          'cyan-dark': '#0a8d9f',
          slate: '#647687',
          'slate-light': '#94a3b8',
          'slate-dark': '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(19, 181, 206, 0.25)',
        'glow-cyan-lg': '0 0 50px rgba(19, 181, 206, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

