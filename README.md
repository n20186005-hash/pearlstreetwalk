# Pearl Street Mall visitor guide

The existing single English home page remains native Astro SSR on Cloudflare Workers. A dynamic error page returns HTTP 404. This is an independent, unofficial, nonprofit tourism and educational guide, not the City, Downtown Boulder or a merchant.

Use Node 24.21.0 and pnpm 10.34.5. Normal installation is `pnpm install --frozen-lockfile`; run `pnpm run check` and the established `npm run build`. Dependency versions and lock bytes remain pinned. The workspace allows only the three locked esbuild/workerd script versions. The source wrapper is compiled before adapter asset handling; default `npx wrangler deploy` follows the generated configuration for the existing project `pearlstreetwalk`, retaining SESSION/IMAGES/ASSETS. No domain binding is added.

The established canonical remains https://pearlstreetwalk.com/ . The existing required spreadsheet entrance uses www; the Worker consolidates known HTTP/www entrances while preserving path/query. Do not infer a new custom-domain binding from a defensive code branch.

After building, native preview: `pnpm exec wrangler dev --ip 127.0.0.1 --port 8951 --local`. Compatibility date remains 2026-09-01. Build output modules have local machine roots removed; required generated local Wrangler configuration metadata is retained.

## Content and images

Public sources are linked next to relevant facts and in the source list. The four pedestrian blocks are distinct from the wider downtown area; 1303 Pearl St is a visitor-centre/Maps reference. Shop, event and facility hours are not inferred from a dated 24-hour Maps listing. Existing restaurant entries have operator/directory links and separate business terms.

Only the verified file **Pearl Street Mall (55028393862).jpg**, Jesse James, 17 December 2025, CC BY 4.0, is delivered. Source: https://commons.wikimedia.org/wiki/File:Pearl_Street_Mall_(55028393862).jpg . Licence: https://creativecommons.org/licenses/by/4.0/ . Derivatives crop the original to left 700 / top 0 / width 5300 / height 3533, resize and recompress; the 1200x630 social version is additionally centre-cropped. Visible captions give date, author, source, licence and changes. This is a historical streetscape, not a current tenant or entrance inventory. Photography licensing is not blanket clearance of all depicted subject rights. The older crowd/performer and courthouse-lawn image references were retired.

The home page retains automatic GA4 with accurate privacy disclosure. No consent control or legal-compliance claim is invented. The final production HTML and actual browser requests still require review for independent hosting injection. The old service worker retires only its known psm-v1 cache and unregisters; no maintained offline route coverage is promised.
