// Single source of truth for the 36 independent English guide pages.
// Used by the guide data files, the SSR sitemap registration and the hub page.

export const GUIDE_SLUGS = [
  'parking', 'parking-garages', 'free-parking', 'map', 'hours', 'directions',
  'public-transportation', 'shopping', 'restaurants', 'coffee-shops',
  'walking-tour', 'family-guide', 'accessibility', 'local-boutiques',
  'souvenir-shops', 'breakfast-brunch', 'dinner', 'history', 'architecture',
  'street-performers', 'public-art', 'photo-spots', 'events',
  'half-day-itinerary', 'one-hour-itinerary', 'one-day-boulder', 'hotels',
  'seasonal-guide'
] as const;

export const NEARBY_SLUGS = [
  'museum-of-boulder', 'boulder-theater', 'boulder-county-courthouse',
  'hotel-boulderado', 'boulder-creek-path', 'boulder-dushanbe-teahouse',
  'boulder-public-library', 'peoples-crossing'
] as const;

export const HUB_PATH = '/guides/';
export const GUIDE_PATHS: string[] = GUIDE_SLUGS.map((slug) => `/${slug}/`);
export const NEARBY_PATHS: string[] = NEARBY_SLUGS.map((slug) => `/nearby/${slug}/`);
export const EXTRA_PATHS: string[] = [HUB_PATH, ...GUIDE_PATHS, ...NEARBY_PATHS];
