import type { GuidePage } from './shared';
import { EXTRA_PATHS, HUB_PATH } from '../routes';
import { batch1 } from './batch-1';
import { batch2 } from './batch-two';
import { batch3 } from './batch-3';

export const allPages: GuidePage[] = [...batch1, ...batch2, ...batch3];
export const guidePages: GuidePage[] = allPages.filter((page) => !page.nearby);
export const nearbyPages: GuidePage[] = allPages.filter((page) => Boolean(page.nearby));

export const bySlug = new Map<string, GuidePage>(allPages.map((page) => [page.slug, page]));
export const byPath = new Map<string, GuidePage>(allPages.map((page) => [page.path, page]));

// Build-time guard: every registered URL must have real content, and every
// content entry must be reachable through the sitemap and the hub page.
const expected = EXTRA_PATHS.filter((path) => path !== HUB_PATH);
const missing = expected.filter((path) => !byPath.has(path));
const unregistered = allPages.filter((page) => !expected.includes(page.path));
if (missing.length || unregistered.length || allPages.length !== 36) {
  throw new Error(
    'Guide page registry mismatch. Missing: ' + missing.join(', ') +
    ' Unregistered: ' + unregistered.map((page) => page.path).join(', ') +
    ' Count: ' + allPages.length
  );
}
