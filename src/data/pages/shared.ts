import { REVIEW_DATE } from '../guide';

export { REVIEW_DATE };

export type Pair = [string, string];

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
}

export interface GuidePage {
  slug: string;
  path: string;
  group: string;
  batch: 1 | 2 | 3;
  title: string;
  h1: string;
  description: string;
  lede: string;
  intent: string;
  sections: GuideSection[];
  facts: Pair[];
  faqs: Pair[];
  sources: Pair[];
  related: string[];
  nearby?: boolean;
  image?: boolean;
}

export const GROUP = {
  practical: 'Visitor essentials',
  food: 'Shopping & dining',
  experience: 'History & experiences',
  nearby: 'Nearby destinations',
  trips: 'Itineraries & stays'
} as const;

export const GROUP_ORDER: string[] = [
  GROUP.practical, GROUP.food, GROUP.experience, GROUP.nearby, GROUP.trips
];

// Links already used and checked on the existing single-page guide on 2026-10-30.
// No other external URL is presented as a verified fact anywhere in this site.
export const SRC = {
  mall: 'https://bouldercolorado.gov/locations/pearl-street-mall',
  refresh: 'https://bouldercolorado.gov/projects/pearl-street-mall-refresh',
  visitorFaq: 'https://boulderdowntown.com/about/boulder-faqs',
  rules: 'https://boulderdowntown.com/about/boulder-faqs/rules-for-the-mall',
  garages: 'https://bouldercolorado.gov/services/city-parking-garages',
  budget: 'https://bouldercolorado.gov/news/city-manager-releases-balanced-budget-focus-critically-vital-services-and-community-input',
  events: 'https://boulderdowntown.com/events',
  dining: 'https://boulderdowntown.com/dining',
  weather: 'https://www.weather.gov/bou/',
  rtd: 'https://www.rtd-denver.com/',
  maps: 'https://maps.app.goo.gl/fuuru9b7xVfarpap6',
  museum: 'https://museumofboulder.org/visit/',
  creek: 'https://bouldercolorado.gov/locations/boulder-creek-path',
  crossing: 'https://bouldercolorado.gov/trailhead/peoples-crossing',
  photo: 'https://commons.wikimedia.org/wiki/File:Pearl_Street_Mall_(55028393862).jpg',
  licence: 'https://creativecommons.org/licenses/by/4.0/'
} as const;

export const s = (href: string, label: string): Pair => [href, label];

export const VERIFIED_NOTE =
  'Verification status: facts on this page were reviewed on ' + REVIEW_DATE +
  '. Where a figure, schedule, price or facility has not been confirmed from an official source, the field says so explicitly instead of offering an estimate.';

export const GENERAL_DISCLAIMER =
  'This is an independent, unofficial, nonprofit tourism and educational guide. It is not affiliated with the City of Boulder, Downtown Boulder Partnership or any listed business, and it does not sell tickets, take reservations or monitor live conditions. Shop hours, parking rates, events, access and public facilities can change: follow current official and on-site notices.';
