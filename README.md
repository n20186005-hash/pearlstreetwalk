# Pearl Street Mall Visitor Guide

Single-page Astro + Tailwind CSS + TypeScript website, configured for Cloudflare Workers.

## Domain / SITE_URL
The site URL is Astro's `site` config in `astro.config.ts`, defaulting to `https://pearlstreetwalk.com` (overridable via `SITE_URL`).
- Canonical URLs, absolute Open Graph URLs, JSON-LD URLs and the sitemap are all derived from this value, so they are produced on every build.
- To point the build at a different domain, set `SITE_URL=https://your-domain.com` before building.

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
