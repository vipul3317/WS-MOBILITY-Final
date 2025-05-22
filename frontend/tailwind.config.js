/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'blink-shadow': 'blink 1s infinite',
        'blinkRed-shadow': 'blinkRed 1s infinite',
        animateTop: 'animateTop 2s ease-in-out infinite',
        animateBottom: 'animateBottom 2s ease-in-out infinite',
        animateRight: 'animateRight 2s ease-in-out infinite',
        animateLeft: 'animateLeft 2s ease-in-out infinite',
        expandCenter: 'expandCenter 0.5s ease-out forwards',
      },
      keyframes: {
        expandCenter: {
          '0%': { opacity: 0, transform: 'scale(0.3)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        blink: {
          '0%, 100%': {
            boxShadow: '0 0 20px 10px rgba(67,160,71,0.8)',
          },
          '50%': {
            boxShadow: '0 0 0 0 rgba(0, 255, 0, 0)',
          },
        },
        blinkRed: {
          '0%, 100%': {
            boxShadow: '0 0 10px 10px rgba(185,28,28)',
          },
          '50%': {
            boxShadow: '0 0 0 0 rgba(185, 28, 28, 0)',
          },
        },
        animateTop: {
          '25%': { width: '100%', opacity: '1' },
          '30%, 100%': { opacity: '0' },
        },
        animateBottom: {
          '0%, 50%': { width: '0', opacity: '0' },
          '75%': { width: '100%', opacity: '1' },
          '76%, 100%': { opacity: '0' },
        },
        animateRight: {
          '0%, 25%': { height: '0', opacity: '0' },
          '50%': { height: '100%', opacity: '1' },
          '55%, 100%': { height: '100%', opacity: '0' },
        },
        animateLeft: {
          '0%, 75%': { height: '0', opacity: '0' },
          '100%': { height: '100%', opacity: '1' },
        },
      },
      colors: {
        'red-strikethrough': '#D32F2F',
      },
      boxShadow: {
        'all-directions': '0 0 5px 5px rgba(34, 197, 94, 0.3)',
      },
      boxShadow:{
        'all-directions1':'0 0 5px 5px rgba(0, 128, 0, 0.5)',
      }
    },
  },
  plugins: [
  ],
}