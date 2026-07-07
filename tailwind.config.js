export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#3B5BFD',
          light: '#5B7CFF',
          dark: '#2A44D6',
        },
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.04)',
        card: '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
