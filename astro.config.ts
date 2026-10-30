import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = 'https://pearlstreetwalk.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: cloudflare({ configPath: 'wrangler.jsonc' }),
  integrations: [sitemap({ customPages: [site + '/'], filter: (url) => !url.includes('/404') })],
  vite: { plugins: [tailwindcss()] }
});
