import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pearlstreetwalk.com',
  output: 'static',
  outDir: 'dist-static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] }
});
