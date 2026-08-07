// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path for GitHub Pages deployment.
// This is the SINGLE SOURCE OF TRUTH for the app's base path.
// Vite automatically exposes this value to the app via `import.meta.env.BASE_URL`,
// so it does not need to be duplicated anywhere else in the codebase.
const GITHUB_PAGES_BASE_PATH = '/my-portfolio-website/';
const LOCAL_DEV_BASE_PATH = '/';

/**
 * Determines the base path Vite should use, depending on whether
 * the app is being built for production or served in dev mode.
 */
function resolveBasePath(command: 'build' | 'serve'): string {
  const isProductionBuild = command === 'build';
  return isProductionBuild ? GITHUB_PAGES_BASE_PATH : LOCAL_DEV_BASE_PATH;
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: resolveBasePath(command),
}));
