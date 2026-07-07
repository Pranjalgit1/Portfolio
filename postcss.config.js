// PostCSS is a tool that transforms CSS with plugins. We use it here purely to
// wire Tailwind (which generates the utility classes) and Autoprefixer (which
// adds vendor prefixes like -webkit- for older browser support) into the build.
// You will almost never need to edit this file.
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
