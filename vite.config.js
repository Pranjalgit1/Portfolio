// Vite is the build tool that runs the dev server and bundles the site for production.
// This config just tells Vite to use the official React plugin, which enables JSX syntax
// and Fast Refresh (instantly updating the browser when you save a component file).
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
