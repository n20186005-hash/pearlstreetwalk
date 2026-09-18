# Pearl Street Mall Visitor Guide

Single-page Astro + Tailwind CSS + TypeScript website, configured for Cloudflare Workers.

## Domain / SITE_URL
The only site URL source is Astro's `site` config in `astro.config.ts`, read from `SITE_URL`.
- No domain yet: leave `SITE_URL` unset. The build still works; canonical/absolute OG URLs are omitted and sitemap integration is disabled.
- Domain ready: set `SITE_URL=https://your-real-domain.com` and rebuild. Canonical, Open Graph, JSON-LD URL and sitemap then derive from the same source.

## Local development
```bash
corepack enable
corepack prepare pnpm@10.34.5 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Worker
After build, deploy using `pnpm deploy`. Update the Worker name in `wrangler.jsonc` if desired.

## Photography
Real Pearl Street Mall photos are loaded from Wikimedia Commons using stable file redirect URLs. This keeps the project legally attributable and avoids unlicensed image copying. Full credits are shown on-page. If you prefer fully local JPGs, download the same files from their Commons file pages, place them in `public/images/`, and replace the four `photo.*` URLs in `src/pages/index.astro`.

## GA4
Measurement ID: `G-HXM22WWPKP`.
