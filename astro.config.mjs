// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://caminhodobem.org',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4327,
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss(), reactDevJsxRuntime()],
  },
});

/**
 * `astro build` prebundles React with NODE_ENV=production. Vite then reuses
 * that cache in `astro dev`, so `jsxDEV` is undefined and islands go blank.
 * Keep a separate cache for serve and pin the development JSX runtime.
 */
function reactDevJsxRuntime() {
  return {
    name: 'react-dev-jsx-runtime',
    config(_cfg, { command }) {
      if (command !== 'serve') {
        return { cacheDir: 'node_modules/.vite-build' };
      }
      return {
        cacheDir: 'node_modules/.vite-dev',
        optimizeDeps: {
          include: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'react/jsx-dev-runtime',
            'react-dom/client',
          ],
          rolldownOptions: {
            transform: {
              define: {
                'process.env.NODE_ENV': '"development"',
              },
            },
          },
        },
      };
    },
  };
}
