import type { GuidePage } from './shared';
import { batch3Nearby } from './batch-3-nearby';
import { batch3Extra } from './batch-3-extra';

// Batch 3 — P2: eight nearby destination pages and four trip-planning pages.
export const batch3: GuidePage[] = [...batch3Nearby, ...batch3Extra];
