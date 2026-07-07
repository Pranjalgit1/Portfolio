// Tailwind CSS reads this file to know which "utility classes" to generate
// (e.g. bg-white, text-lg, hover:-translate-y-1) and lets us customize the
// design system — colors, fonts, shadows, animations — in one place.
export default {
  // Tailwind scans these files for class names so it only ships the CSS you actually use.
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // 'class' means dark mode is controlled by a "dark" class on <html> (toggled
  // in src/components/ThemeToggle.jsx), not just by OS-level preference.
  // This lets the toggle button override the system setting.
  darkMode: 'class',
  theme: {
    extend: {
      // Change the default font for the whole site here.
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // The single accent color used across the site (buttons, links, highlights).
      // Change these three hex values to re-theme the entire site's accent color.
      colors: {
        accent: {
          DEFAULT: '#3B5BFD',
          light: '#5B7CFF',
          dark: '#2A44D6',
        },
      },
      // Custom soft shadows used on cards (see shadow-soft / shadow-card in components).
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.04)',
        card: '0 8px 30px rgba(0, 0, 0, 0.06)',
      },
      // Defines the "fade up" animation used when sections scroll into view (see FadeIn.jsx).
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
