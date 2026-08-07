// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path for GitHub Pages deployment.
// This is the SINGLE SOURCE OF TRUTH for the app's base path.
// Vite automatically exposes this value to the app via `import.meta.env.BASE_URL`,
// so it does not need to be duplicated anywhere else in the codebase.
const GITHUB_PAGES_BASE = '/my-portfolio-website/';
const ROOT_BASE = '/';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuildCommand = command === 'build';

  return {
    plugins: [react()],
    base: isBuildCommand ? GITHUB_PAGES_BASE : ROOT_BASE,
  };
});
