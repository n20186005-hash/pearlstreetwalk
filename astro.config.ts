import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { EXTRA_PATHS } from './src/data/routes';

const site = 'https://pearlstreetwalk.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ configPath: 'wrangler.jsonc' }),
  // output:'server' cannot enumerate generated routes at build time, so every
  // new guide URL is registered explicitly alongside the home page.
  integrations: [sitemap({ customPages: [site + '/', ...EXTRA_PATHS.map((path) => site + path)], filter: (url) => !url.includes('/404') })],
  vite: { plugins: [tailwindcss()] }
});
