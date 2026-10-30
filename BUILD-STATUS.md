# Verification

Use the native Astro Cloudflare adapter and pinned package-manager/dependency versions. Check and build commands are defined in package.json; historical production uses npm run build and npx wrangler deploy.

An initial normal frozen installation showed dependency scripts ignored. Only the three actual locked esbuild/workerd versions were subsequently allowed, and a fresh dependency directory was installed normally with the same frozen lockfile. The allowed-install log records workerd postinstall. This is a warm-store installation, not a claim of a cold store.

Local checks, build, generated-entry routing, default deployment dry-run and native HTTP evidence are separate from exact-commit Cloudflare deployment and browser/production acceptance. A successful local result must not be described as a completed release.
