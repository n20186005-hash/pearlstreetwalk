# Build status

The source is prepared for Astro + Tailwind CSS + TypeScript on Cloudflare Workers.

## Verification limitation in this execution environment

The delivery environment could not resolve `registry.npmjs.org`, so Corepack/pnpm could not download dependencies. Therefore the mandatory clean install / `astro check` / `astro build` sequence could not be executed here, and no claim is made that it passed.

Once network access to the npm registry is available, run:

```bash
rm -rf node_modules
CI=1 corepack pnpm install
pnpm check
pnpm build
```

Then generate and commit `pnpm-lock.yaml`, followed by the requested frozen verification:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
# Run the requested placeholder/illegal-URL scan against dist after building.
```

If `SITE_URL` is not defined, sitemap generation is intentionally disabled and canonical/absolute Open Graph URLs are omitted. If `SITE_URL` is defined to the production domain, `@astrojs/sitemap` generates the sitemap from that single site configuration.
