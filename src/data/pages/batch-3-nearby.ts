import type { GuidePage, Pair } from './shared';
import { GROUP, s, SRC } from './shared';

// Batch 3 (part 1) — eight nearby destination pages using the full
// destination-detail template. Section headings follow a shared template,
// but every paragraph is written for the individual place.
interface NearbyConfig {
  slug: string;
  title: string;
  h1: string;
  description: string;
  lede: string;
  intent: string;
  place: string;
  managing: string;
  address: string;
  hours: string;
  admission: string;
  transport: string;
  whyVisit: string;
  highlights: string[];
  planning: string;
  distinctive: string;
  about: string;
  aboutNote?: string;
  heritage: string;
  route: string[];
  tips: string;
  photo: string;
  eatStay: string;
  reviews: string;
  directions: string;
  faqs: Pair[];
  sources: Pair[];
  related: string[];
}

function makeNearby(config: NearbyConfig): GuidePage {
  return {
    slug: config.slug, path: '/nearby/' + config.slug + '/',
    group: GROUP.nearby, batch: 3, nearby: true,
    title: config.title, h1: config.h1, description: config.description,
    lede: config.lede, intent: config.intent,
    facts: [
      ['Place', config.place],
      ['Managing body', config.managing],
      ['Address', config.address],
      ['Opening times', config.hours],
      ['Admission', config.admission],
      ['Getting there', config.transport],
      ['Visitor ratings', 'Not collected or reproduced by this independent guide'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      { heading: 'Why visit', paragraphs: [config.whyVisit], bullets: config.highlights },
      { heading: 'Planning your visit', paragraphs: [config.planning] },
      { heading: 'What makes it distinctive', paragraphs: [config.distinctive] },
      { heading: 'About the place and who runs it', paragraphs: [config.about], note: config.aboutNote },
      { heading: 'Opening times', paragraphs: [config.hours] },
      { heading: 'Admission and prices', paragraphs: [config.admission] },
      { heading: 'Getting there from Pearl Street Mall', paragraphs: [config.transport] },
      { heading: 'History, architecture and the core experience', paragraphs: [config.heritage] },
      { heading: 'A numbered visit route', paragraphs: ['Use this as an order of decisions rather than a timed tour. Confirm each moving part with the operator before you travel.'], bullets: config.route },
      { heading: 'Things to know before you go', paragraphs: [config.tips] },
      { heading: 'Where to take photographs', paragraphs: [config.photo] },
      { heading: 'Food and accommodation nearby', paragraphs: [config.eatStay] },
      { heading: 'What visitors say', paragraphs: [config.reviews] },
      { heading: 'Address, directions and map', paragraphs: [config.directions] }
    ],
    faqs: config.faqs, sources: config.sources, related: config.related
  };
}

const UNVERIFIED_NOTE =
  'No official page for this specific place was verified in the 2026-10-30 review. The sources below are general planning links; confirm hours, admission, address and access with the operator before travelling. Fields marked "not verified" are deliberately left unconfirmed rather than filled with an estimate.';

export const batch3Nearby: GuidePage[] = [
  makeNearby({
    slug: 'museum-of-boulder',
    title: 'Museum of Boulder | Nearby Pearl Street Mall Guide',
    h1: 'Museum of Boulder',
    description: 'A separate destination guide to the Museum of Boulder: its operator-listed address at 2205 Broadway, what to verify before visiting and how to add it to a Pearl Street day.',
    lede: 'The Museum of Boulder is a distinct destination with its own building, admission and opening arrangements. Its operator lists 2205 Broadway at Broadway and Pine. This guide treats it as a separate place to plan, not as an attraction inside the four pedestrian blocks.',
    intent: 'Add a museum visit as a separately verified leg of your Boulder day.',
    place: 'Museum of Boulder, a separate indoor visitor destination',
    managing: 'The museum operator; confirm via its own visit page',
    address: 'Operator lists 2205 Broadway, at Broadway and Pine',
    hours: 'Not verified here. Check the operator’s current opening days and times before travelling.',
    admission: 'Not verified here. Check current admission, concessions and any separately ticketed programme on the operator’s visit page.',
    transport: 'Plan as a separate leg from the mall. This guide has not verified a walking time, route or transit link between the two places.',
    whyVisit: 'A museum gives a half day in downtown Boulder a second, indoor anchor. It is useful when the weather turns, when someone in the group wants local context rather than another shopfront, or when you want a clear start and finish to the day. The trade-off is that it needs its own timetable: opening days, last admission and exhibitions are set by the operator, not by the mall.',
    highlights: [
      'An indoor counterweight to four entirely outdoor pedestrian blocks.',
      'A fixed address at Broadway and Pine, distinct from the 11th–15th Street mall.',
      'Its own opening, admission, exhibition and access arrangements.',
      'A natural pairing with a confirmed meal before or after the visit.'
    ],
    planning: 'Start by checking the operator’s visit page for the exact date: opening hours, whether a booking is needed, current exhibitions, admission prices and accessibility. Then decide whether the museum sits before or after your Pearl Street walk. Keep the two legs separate in your plan so a late opening or a closed gallery does not unravel the rest of the day.',
    distinctive: 'What distinguishes this stop is that it is not the mall. The four blocks are a public pedestrian street with no general-admission tariff; a museum is an operated venue with a door, a ticket arrangement and a programme. That difference is exactly why it should be verified independently.',
    about: 'The museum’s own operator publishes its visit information. This site is an independent, unofficial guide and has no affiliation with the museum, the City of Boulder or Downtown Boulder Partnership. It does not sell tickets, take reservations or reproduce the museum’s content.',
    heritage: 'This guide has not verified the museum’s collection, building history or exhibition themes, so it does not describe them. What can be planned reliably is the relationship between the places: a separately managed cultural venue at Broadway and Pine, and a four-block public park between 11th and 15th Streets on Pearl.',
    route: [
      '1. Confirm the museum’s opening hours, admission and exhibition for your date.',
      '2. Choose a start time for the four-block Pearl Street walk around that fixed slot.',
      '3. Pick a City garage or an RTD service for the arrival leg and check its current terms.',
      '4. Walk the mall from 11th to 15th Street, using normal crossings at intersecting streets.',
      '5. Take a confirmed meal break from an operator-checked business.',
      '6. Travel to 2205 Broadway using a route you have checked yourself.',
      '7. Confirm the museum’s last admission and your return transport before you go in.'
    ],
    tips: 'Do not assume the museum is a short walk from the mall; no walking time was verified here. Check the operator’s access information if anyone in your group needs step-free entry. Check National Weather Service Boulder for the outdoor legs and keep an indoor plan for rain or snow.',
    photo: 'Check the museum’s own photography policy before taking images inside. For exterior photographs, use the operator’s published address and current signage rather than an old image. The historical streetscape published on this site depicts Pearl Street, not this museum.',
    eatStay: 'This site documents three dining businesses on or near Pearl Street — OAK at Fourteenth, The Kitchen Boulder and Postino Boulder — each with its own hours and reservations. For accommodation, use current operator information and verify the location yourself; this guide does not recommend or rate hotels.',
    reviews: 'This guide does not collect reviews, reproduce individual review text or publish a rating for the museum. It also does not transfer the Google Maps snapshot for Pearl Street Mall to any other destination. Check current visitor information with the operator and the platform of your choice.',
    directions: 'The operator lists 2205 Broadway at Broadway and Pine. Use the operator’s own visit page and a current map service for directions from where you actually are. The Google Maps place link used elsewhere on this site refers to Pearl Street Mall at 1303 Pearl St, not to the museum.',
    faqs: [
      ['Is the Museum of Boulder on Pearl Street Mall?', 'No. It is a separate destination. Its operator lists 2205 Broadway at Broadway and Pine, while the City identifies the pedestrian mall as Pearl Street between 11th and 15th Streets.'],
      ['What are the opening hours and ticket prices?', 'Neither was verified in this review. Check the operator’s current visit page for opening days, last admission, prices and concessions.'],
      ['How do I get there from the mall?', 'Plan it as a separate leg. This guide has not verified a walking time or transit route between the two places, so use a current map service from your actual starting point.'],
      ['Can I combine it with a half-day visit?', 'Possibly, if you anchor the day to the museum’s confirmed opening time and keep the four-block walk flexible. See the half-day itinerary guide for a decision order.'],
      ['Does this guide sell tickets?', 'No. This is an independent, unofficial guide. It does not sell tickets, take reservations or claim current availability.']
    ],
    sources: [
      s(SRC.museum, 'Museum of Boulder: operator visit information'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/nearby/boulder-creek-path/', '/half-day-itinerary/', '/one-day-boulder/', '/restaurants/', '/map/']
  }),

  makeNearby({
    slug: 'boulder-theater',
    title: 'Boulder Theater | Nearby Pearl Street Mall Guide',
    h1: 'Boulder Theater',
    description: 'Planning notes for Boulder Theater as a separate downtown destination: what to verify about performances, tickets and access before combining it with Pearl Street Mall.',
    lede: 'Boulder Theater is a named downtown performance venue, but this guide has not verified its current programme, address, ticketing or access arrangements. This page explains how to plan it honestly as a separate evening or half-day leg.',
    intent: 'Verify a performance, ticket and access before adding a theatre evening.',
    place: 'A downtown Boulder performance venue, treated here as a separate destination',
    managing: 'Not verified in this review; confirm with the venue operator',
    address: 'Not verified in this review; use the venue’s own current listing',
    hours: 'Not verified here. Performance times and box-office hours must be checked with the operator for your date.',
    admission: 'Not verified here. Tickets, prices and any booking conditions come from the venue or its authorised ticketing channel.',
    transport: 'Not verified as a specific route. Plan the leg from your chosen garage or bus stop using a current map service.',
    whyVisit: 'A performance gives an evening in downtown Boulder a fixed anchor, which is useful when the four outdoor blocks are weather-dependent. But a show is an event with a date, a start time and a ticket, not a permanent feature of the street. The whole plan depends on verifying one specific performance rather than on a general description of the venue.',
    highlights: [
      'A timed evening anchor rather than an open-ended walk.',
      'Its own programme, ticket and access arrangements.',
      'A reason to confirm restaurant hours and return transport in advance.',
      'A separate destination to verify, not a mall tenant to assume.'
    ],
    planning: 'Begin with a single confirmed performance: date, start time, ticket availability, age or access conditions, and the venue’s own address. Once that is fixed, work backwards to a meal and the four-block walk. Check the Downtown Boulder event calendar as a planning link, but confirm the details with the organiser or venue.',
    distinctive: 'The distinction that matters to a visitor is between a public space and a programmed venue. Pearl Street Mall is a city park and pedestrian street with no general-admission tariff; a theatre has a door, a programme and a ticket. Treating them as one destination is the most common planning mistake.',
    about: 'This guide has not verified which organisation operates the venue, nor its building history or current management arrangements. It is an independent, unofficial, nonprofit guide with no affiliation to any venue, the City of Boulder or Downtown Boulder Partnership.',
    aboutNote: UNVERIFIED_NOTE,
    heritage: 'This page does not describe the building’s architecture, construction date, seating capacity or restoration history, because none was verified. If the building itself interests you, use a current official or local heritage source and confirm that it is the same venue as the performance you plan to attend.',
    route: [
      '1. Confirm one specific performance, date and start time with the venue.',
      '2. Check ticket availability and any age, access or entry conditions.',
      '3. Confirm the venue’s current address and how you will reach it.',
      '4. Book or verify a meal that is open at the right hour.',
      '5. Walk the four Pearl Street blocks in daylight if the schedule allows.',
      '6. Check parking terms or the return service for the evening.',
      '7. Keep a weather alternative for the outdoor part of the plan.'
    ],
    tips: 'Google Maps listed 24 hours for Pearl Street Mall in the 2026-10-30 snapshot, but that is a place listing, not a theatre schedule, nor confirmation of lighting or night-time safety. Check the venue’s access provisions directly if you need step-free entry, and use current City notices for any works affecting your route.',
    photo: 'Check the venue’s own photography policy, especially inside an auditorium. For exterior shots, confirm the current address and signage rather than using an old image. The single photograph published on this site shows a Pearl Street streetscape, not this venue.',
    eatStay: 'The three dining businesses documented on this site are OAK at Fourteenth, The Kitchen Boulder and Postino Boulder, each with its own evening hours and reservations. Confirm the operator’s timetable against your performance start. For accommodation, verify current operator information yourself.',
    reviews: 'This guide does not collect or reproduce reviews, publish a rating for the venue or transfer the Google Maps snapshot for Pearl Street Mall to a second place. Use the venue’s official information and a review platform of your choice for current visitor opinion.',
    directions: 'No address was verified in this review. Use the venue’s own current listing and a current map service from your actual starting point. The Google Maps link used elsewhere on this site refers to Pearl Street Mall at 1303 Pearl St, not to a theatre.',
    faqs: [
      ['Is Boulder Theater on Pearl Street Mall?', 'This guide has not verified its address, so it does not claim the theatre is on the four pedestrian blocks. Treat it as a separate destination and confirm the location with the venue.'],
      ['What is showing and how much are tickets?', 'Neither was verified here. Check the venue’s current programme and authorised ticketing channel for your date.'],
      ['Can I walk there from the mall?', 'A specific walking route or time was not verified. Use a current map service from your actual starting point after confirming the venue’s address.'],
      ['Does the mall stay open late for shows?', 'Google Maps listed 24 hours on 2026-10-30, but that listing does not confirm lighting, night-time safety or any venue’s timetable.'],
      ['Does this guide sell tickets?', 'No. It is an independent, unofficial guide and does not sell tickets or take reservations.']
    ],
    sources: [
      s(SRC.events, 'Downtown Boulder event calendar (general planning link)'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information (general planning link)'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/events/', '/dinner/', '/one-day-boulder/', '/hotels/', '/map/']
  }),

  makeNearby({
    slug: 'boulder-county-courthouse',
    title: 'Boulder County Courthouse | Nearby Pearl Street Guide',
    h1: 'Boulder County Courthouse',
    description: 'Planning notes for Boulder County Courthouse as a separate civic destination near downtown Boulder: what to verify about access, hours and photography before a visit.',
    lede: 'A courthouse is a working civic building, not a tourist attraction with a visitor timetable. This guide does not claim a verified address, opening time or tour programme; it explains how to plan a respectful, realistic look as part of a downtown walk.',
    intent: 'Plan a respectful civic-building stop with verified access information.',
    place: 'A civic courthouse building in Boulder, treated as a separate destination',
    managing: 'Not verified in this review; a public authority would be the source to check',
    address: 'Not verified in this review; use the relevant public authority’s current listing',
    hours: 'Not verified here. A working public building has its own public opening times, which must be confirmed with the authority.',
    admission: 'Not verified here. This guide makes no claim about entry charges, tours or public gallery arrangements.',
    transport: 'Not verified as a specific route. Plan the leg from your chosen garage or bus stop using a current map service.',
    whyVisit: 'Civic buildings give a downtown walk a different register from shops and restaurants: they show the public institutions around which a city centre is organised. A brief exterior look can sit naturally alongside the four-block walk, provided you treat it as a working building with its own rules rather than as an exhibit.',
    highlights: [
      'A civic counterpoint to the commercial four-block pedestrian core.',
      'A reason to think about public-building access and photography rules.',
      'A short, low-commitment addition to a downtown walk.',
      'A place where current official information matters more than a travel description.'
    ],
    planning: 'First decide whether you want a simple exterior look or to enter the building. For an exterior look, all you need is a current map position and awareness of your surroundings. For anything more, check the relevant public authority’s own information on opening times, security screening, public galleries and identification requirements.',
    distinctive: 'The important distinction is functional. Pearl Street Mall is a public park and pedestrian street dedicated in 1977 and designed for lingering; a courthouse is a workplace with controlled access. Applying "mall rules" to a civic building, or assuming a tour exists, would be a mistake.',
    about: 'This guide has not verified which authority manages the building, its history, its architect or its current public access arrangements. It is independent and unofficial, and it does not represent any public body.',
    aboutNote: UNVERIFIED_NOTE,
    heritage: 'No construction date, architectural style, historic designation, renovation history or landscape description is published here, because none was verified. Older courthouse-lawn image references on this site were retired, so this page deliberately does not describe grounds or features from a photograph.',
    route: [
      '1. Confirm the current address using a public authority listing or a current map service.',
      '2. Decide whether this is an exterior look or a visit inside the building.',
      '3. If entering, check opening times, security and identification requirements.',
      '4. Place the stop before or after the 11th–15th Street walk, not in the middle of it.',
      '5. Use normal pedestrian crossings at every intersecting street.',
      '6. Check current City notices for works or temporary access changes.',
      '7. Continue to a confirmed meal or another separately planned destination.'
    ],
    tips: 'Be mindful that this is a working public building: follow posted signage, do not assume photography is permitted inside, and check the mall’s published rules for the pedestrian part of your walk. The City lists accessible paths on the mall, but this guide has not surveyed any route to or into a civic building.',
    photo: 'Photography rules at a working courthouse can differ from those on a public street. Check posted signage and the authority’s guidance before photographing the building or its grounds. The historical image published on this site shows a Pearl Street streetscape, not a courthouse.',
    eatStay: 'For a meal, use the Downtown Boulder dining directory or one of the three businesses documented on this site, and confirm current hours. For accommodation, verify current operator information yourself; this guide does not rate or recommend hotels.',
    reviews: 'This guide does not publish a rating, collect reviews or reproduce individual visitor comments for a civic building. A working public institution is not well served by a tourist star rating; use current official information for practical questions.',
    directions: 'No address was verified in this review. Use a current public authority listing and a map service from your actual starting point. The Google Maps link used on this site refers to Pearl Street Mall at 1303 Pearl St.',
    faqs: [
      ['Is the courthouse on Pearl Street Mall?', 'This guide has not verified its address and does not claim it sits on the four pedestrian blocks. Confirm the location with a current official listing.'],
      ['Can I go inside?', 'Not confirmed here. Check the relevant public authority for opening times, security screening and public access arrangements.'],
      ['Is there a tour or an entry fee?', 'Neither was verified in this review. Do not assume a visitor programme exists.'],
      ['Can I photograph the building?', 'Check posted signage and the authority’s guidance. Rules for a working civic building can differ from those on a public pedestrian street.'],
      ['How does it fit into a downtown walk?', 'Place a short exterior stop before or after the 11th–15th Street walk, use normal crossings, and keep a confirmed meal or museum visit as the day’s anchor.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information (general planning link)'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.maps, 'Google Maps place listing for Pearl Street Mall (reference only)')
    ],
    related: ['/architecture/', '/one-hour-itinerary/', '/one-day-boulder/', '/photo-spots/', '/map/']
  }),

  makeNearby({
    slug: 'hotel-boulderado',
    title: 'Hotel Boulderado | Nearby Pearl Street Mall Guide',
    h1: 'Hotel Boulderado',
    description: 'Planning notes for Hotel Boulderado as a separate downtown Boulder destination: what to verify about a historic hotel stay, dining and access near Pearl Street Mall.',
    lede: 'A historic hotel is both a place to look at and a place to book. This guide has not verified its address, rates, availability or facilities, so it treats Hotel Boulderado as a separate destination to research rather than publishing an unverified review.',
    intent: 'Separate accommodation research from a visit to the four-block mall.',
    place: 'A historic hotel in downtown Boulder, treated as a separate destination',
    managing: 'Not verified in this review; confirm with the hotel operator',
    address: 'Not verified in this review; use the hotel’s own current listing',
    hours: 'Not verified here. Reception, restaurant and bar hours are set by the operator.',
    admission: 'Not verified here. Room rates, dining prices and any event charges come from the operator.',
    transport: 'Not verified as a specific route. Plan the leg from your arrival point using a current map service.',
    whyVisit: 'Staying near a pedestrian street changes the whole shape of a visit: you can walk the four blocks in the morning, return in the evening and avoid a parking decision. But accommodation is a commercial booking with rates, availability, cancellation terms and access arrangements that this independent guide cannot verify on your behalf.',
    highlights: [
      'A potential base for a two-part visit to the four blocks.',
      'Its own rates, availability, booking terms and facilities.',
      'A separate decision from parking, dining and the mall walk.',
      'A reason to check step-free access room by room, not generically.'
    ],
    planning: 'Decide first whether you are booking a room, eating at a hotel restaurant or simply passing by. Each has a different source of truth: the hotel’s own booking page, its restaurant information, or a current map. Confirm the address and the walking route to the 11th–15th Street core yourself.',
    distinctive: 'A hotel is operated for guests, while the mall is a public park and pedestrian street dedicated in 1977. One has a booking and a price; the other has no general-admission tariff. Keeping those two frames separate prevents a page like this from turning into an unearned recommendation.',
    about: 'This guide has not verified the hotel’s ownership, management, opening year, architectural details or heritage listing. It is independent, unofficial and nonprofit, with no commercial relationship with any accommodation provider and no affiliate booking links.',
    aboutNote: UNVERIFIED_NOTE,
    heritage: 'No construction date, architect, style label, restoration claim or interior description is published here, because none was verified. If the building’s history is the reason for your interest, use a current official or local heritage source and confirm the details before repeating them.',
    route: [
      '1. Decide whether this is a stay, a meal or a brief exterior look.',
      '2. Confirm the current address and booking or dining details with the operator.',
      '3. Check the walking route to 11th or 15th Street yourself.',
      '4. Walk the four pedestrian blocks in one direction and return along the other side.',
      '5. Check current City notices for works affecting your route.',
      '6. Confirm any restaurant hours or reservations directly.',
      '7. Keep the parking or transit plan separate from the hotel booking.'
    ],
    tips: 'Do not assume a hotel’s published "downtown" location means it sits on the pedestrian bricks. Cross streets still carry traffic. If anyone in your group needs step-free access, confirm the specific entrance, lift and room with the operator rather than relying on a general accessibility label.',
    photo: 'Ask before photographing inside a hotel, and respect guests’ privacy. For exterior images, confirm the current address and signage. The single photograph published on this site is a December 2025 Pearl Street streetscape and does not depict this hotel.',
    eatStay: 'This site documents three dining businesses — OAK at Fourteenth, The Kitchen Boulder and Postino Boulder — with operator links, but it does not recommend accommodation. Any hotel restaurant, bar or room rate must be checked with the operator. This guide carries no commercial promotion.',
    reviews: 'This guide does not collect reviews, publish a star rating or reproduce guest comments. It also does not present the Google Maps snapshot for Pearl Street Mall as a rating for any hotel. Use current operator information and an independent review platform of your choice.',
    directions: 'No address was verified in this review. Use the hotel’s own current listing and a current map service from your actual starting point. The Google Maps link on this site refers to Pearl Street Mall at 1303 Pearl St.',
    faqs: [
      ['Is Hotel Boulderado on Pearl Street Mall?', 'This guide has not verified its address and does not claim it is on the four pedestrian blocks. Confirm the location with the hotel’s own listing.'],
      ['Can I book a room through this site?', 'No. This is an independent guide with no booking, affiliate or commercial relationship. Use the operator directly.'],
      ['Are there restaurants inside the hotel?', 'Not verified here. Check the operator’s own information for current dining options, hours and reservations.'],
      ['How far is it from the four blocks?', 'No walking time or route was verified. Use a current map service from the hotel’s confirmed address.'],
      ['Is it accessible?', 'Not verified. Confirm the specific entrance, lift and room with the operator if you need step-free access.']
    ],
    sources: [
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information (general planning link)'),
      s(SRC.dining, 'Downtown Boulder: dining directory (general planning link)'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and current works context')
    ],
    related: ['/hotels/', '/architecture/', '/one-day-boulder/', '/half-day-itinerary/', '/restaurants/']
  }),

  makeNearby({
    slug: 'boulder-creek-path',
    title: 'Boulder Creek Path | Nearby Pearl Street Mall Guide',
    h1: 'Boulder Creek Path',
    description: 'A separate destination guide to Boulder Creek Path: the City describes a multi-use path with its own route conditions, crossings and weather considerations.',
    lede: 'Boulder Creek Path is not part of Pearl Street Mall. The City describes a separate multi-use path, so this page treats route conditions, crossings, underpasses and weather as their own planning questions rather than as an extension of the four pedestrian blocks.',
    intent: 'Plan a creek-path leg with its own route, weather and access checks.',
    place: 'A separate City-described multi-use path',
    managing: 'The City of Boulder describes the path; check its current location page',
    address: 'No single street address; the City describes a linear multi-use path',
    hours: 'Not verified here. Check current City information for any closures or restrictions.',
    admission: 'Not verified here. This guide makes no claim about charges for the path itself or nearby facilities.',
    transport: 'Plan as a separate leg. A specific route or walking time from the mall was not verified.',
    whyVisit: 'A creekside path adds a completely different kind of outdoor time to a Boulder day: linear, green and away from storefronts. It is also a different kind of responsibility. A path beside water has route conditions, crossings and weather exposure that an urban pedestrian street does not.',
    highlights: [
      'A linear multi-use path, explicitly distinct from the pedestrian mall.',
      'Its own crossings, underpasses and surface conditions.',
      'Weather and water conditions that need a separate check.',
      'A good reason to split a day into two clearly planned legs.'
    ],
    planning: 'Check the City’s current page for the path’s route and any alerts, then think about why you are going: a short walk, a longer ride or a connection to another destination. Decide where you will join and leave the path, and confirm the return leg. Do not assume the path begins where the four blocks end.',
    distinctive: 'The City describes Boulder Creek Path as a separate multi-use path, not as the pedestrian mall. That means cyclists, pedestrians, water levels, underpasses and crossings all behave differently. The 11th–15th Street brick paving and the mall’s published rules are not a guide to a creekside route.',
    about: 'The City of Boulder publishes information about the path. This site is an independent, unofficial guide with no affiliation to the City, and it does not monitor path conditions, water levels or closures in real time.',
    heritage: 'This guide has not verified the path’s construction history, design awards, public art or named bridges, so it does not describe them. The reliable starting point is the City’s own current description and any active alerts for the route.',
    route: [
      '1. Read the City’s current path information and any active alerts.',
      '2. Choose a joining point and a leaving point for your own ability and time.',
      '3. Check National Weather Service Boulder forecasts and warnings.',
      '4. Confirm how you will travel between the mall and the path.',
      '5. Walk the four Pearl Street blocks as a separate leg of the day.',
      '6. On the path, follow current signage at crossings and any underpass restrictions.',
      '7. Confirm your return transport or parking terms before you set out.'
    ],
    tips: 'Check conditions especially around water or severe weather. Crossings and any underpass restrictions need their own check, as do surface conditions after rain or snow. If you cycle, note that Downtown Boulder publishes rules restricting riding and skating on the mall itself; dismount on the pedestrian bricks.',
    photo: 'Water, shade and crossings make a creekside path photogenic, but conditions change quickly. Check the forecast and current signage, and stay off any closed section. The historical image published on this site shows a Pearl Street streetscape, not the creek path.',
    eatStay: 'For a meal before or after the path, use the Downtown Boulder dining directory or the three documented businesses on this site, and confirm current hours. For accommodation, verify current operator information yourself; this guide does not rate hotels.',
    reviews: 'This guide does not publish a rating, collect reviews or reproduce visitor comments for the path. It also does not transfer the Google Maps snapshot for Pearl Street Mall to a second place. Use current City information for practical conditions.',
    directions: 'There is no single street address for a linear path. Use the City’s location page and a current map service from your actual starting point. The Google Maps place link on this site refers to Pearl Street Mall at 1303 Pearl St.',
    faqs: [
      ['Is Boulder Creek Path part of Pearl Street Mall?', 'No. The City describes it as a separate multi-use path. It is not the four-block pedestrian mall between 11th and 15th Streets.'],
      ['Do I need to check weather and water conditions?', 'Yes. The City’s description and this guide both point to route conditions, crossings and possible underpass restrictions, especially around water or severe weather. Check current City information and the forecast.'],
      ['Can I cycle from the mall onto the path?', 'Downtown Boulder publishes rules restricting bicycle riding and skating on the mall; dismount on the pedestrian bricks. Check current rules and path signage for the rest of the route.'],
      ['How do I get there from the four blocks?', 'Plan it as a separate leg. No specific route or walking time was verified here, so use a current map service from your starting point.'],
      ['Is there an entry fee?', 'Not verified in this review. This guide makes no claim about charges for the path or nearby facilities.']
    ],
    sources: [
      s(SRC.creek, 'City of Boulder: Boulder Creek Path'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.garages, 'City of Boulder: parking facility directory')
    ],
    related: ['/one-day-boulder/', '/seasonal-guide/', '/family-guide/', '/walking-tour/', '/nearby/peoples-crossing/']
  }),

  makeNearby({
    slug: 'boulder-dushanbe-teahouse',
    title: 'Boulder Dushanbe Teahouse | Nearby Pearl Street Guide',
    h1: 'Boulder Dushanbe Teahouse',
    description: 'Planning notes for the Boulder Dushanbe Teahouse as a separate destination: what to verify about hours, dining and access before adding it to a Pearl Street day.',
    lede: 'The Dushanbe Teahouse is widely described as one of Boulder’s distinctive buildings, but this guide has not verified its address, opening times, dining arrangements or history from an official source. This page is a planning framework, not a review.',
    intent: 'Verify hours, dining and access for a distinctive separate stop.',
    place: 'A teahouse in Boulder, treated as a separate destination',
    managing: 'Not verified in this review; confirm with the operator',
    address: 'Not verified in this review; use the operator’s current listing',
    hours: 'Not verified here. Check current opening and meal-service times with the operator.',
    admission: 'Not verified here. Menu prices, reservations and any event charges come from the operator.',
    transport: 'Not verified as a specific route. Plan the leg using a current map service.',
    whyVisit: 'A distinctive building with a food-and-drink offer can give a Boulder day a memorable second anchor. It also introduces a set of operational questions — is it open, is a table available, are the hours right for your plan — that a public pedestrian street simply does not have.',
    highlights: [
      'A separately operated venue rather than a mall tenant to assume.',
      'Its own hours, menu, reservations and access arrangements.',
      'A building whose history should be checked with a current source.',
      'A practical indoor option when the outdoor walk turns wet or cold.'
    ],
    planning: 'Confirm one thing first: whether the venue is open and serving at the time you want. Then check the operator’s current address, menu, reservation policy and any access information. Only after that should you decide where it sits relative to the 11th–15th Street walk.',
    distinctive: 'The useful distinction here is between a public park and an operated hospitality venue. Pearl Street Mall has no general-admission tariff and no shared timetable; a teahouse has a kitchen, a menu and opening hours. This guide does not describe its design or craft details, because they were not verified.',
    about: 'This guide has not verified the venue’s operator, management, building history, origin story or the details of any civic gift or partnership. It is independent, unofficial and nonprofit, with no commercial relationship with the venue.',
    aboutNote: UNVERIFIED_NOTE,
    heritage: 'No construction date, artisan names, architectural style, materials or cultural interpretation is published here, because none was verified in the 2026-10-30 review. If the building’s story matters to you, use a current official source and confirm the details before repeating them.',
    route: [
      '1. Confirm the operator’s current opening and meal-service times.',
      '2. Verify the current address with the venue’s own listing.',
      '3. Check the menu, prices and reservation policy.',
      '4. Decide how you will travel between this stop and the four blocks.',
      '5. Walk Pearl Street from 11th to 15th Street as a separate leg.',
      '6. Use normal pedestrian crossings at every intersecting street.',
      '7. Check the weather and your return transport before setting out.'
    ],
    tips: 'Do not treat a widely repeated description as a current source for hours or prices. If anyone in your group needs step-free access or has dietary requirements, confirm those with the operator directly. The City’s accessible-path listing for the mall does not describe this venue.',
    photo: 'Ask about photography inside a hospitality venue and respect other guests. For exterior images, confirm the current address and signage. The photograph published on this site is a Pearl Street streetscape from December 2025, not this building.',
    eatStay: 'If the teahouse is your meal, confirm its current menu and booking terms with the operator. Otherwise, the three dining businesses documented on this site have operator links and separate hours. This guide does not recommend or rate accommodation.',
    reviews: 'This guide does not collect reviews, publish a rating or reproduce visitor comments for this venue. It does not present the Google Maps snapshot for Pearl Street Mall as a rating for another place.',
    directions: 'No address was verified in this review. Use the operator’s own current listing and a current map service from your actual starting point. The Google Maps link on this site refers to Pearl Street Mall at 1303 Pearl St.',
    faqs: [
      ['Is the teahouse on Pearl Street Mall?', 'This guide has not verified its address and makes no claim that it sits on the four pedestrian blocks. Confirm the location with the operator.'],
      ['Is it open and do I need a reservation?', 'Neither was verified here. Check the operator’s current hours, menu and booking information for your date.'],
      ['Can I walk there from the mall?', 'A specific route or walking time was not verified. Use a current map service after confirming the address.'],
      ['Does this guide describe the building’s history?', 'No. Its origin, design and craft details were not verified in this review, so they are not asserted here.'],
      ['Does this guide sell tickets or take bookings?', 'No. It is an independent, unofficial guide with no commercial relationship with the venue.']
    ],
    sources: [
      s(SRC.dining, 'Downtown Boulder: dining directory (general planning link)'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information (general planning link)'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.maps, 'Google Maps place listing for Pearl Street Mall (reference only)')
    ],
    related: ['/restaurants/', '/architecture/', '/one-day-boulder/', '/hotels/', '/half-day-itinerary/']
  }),

  makeNearby({
    slug: 'boulder-public-library',
    title: 'Boulder Public Library | Nearby Pearl Street Guide',
    h1: 'Boulder Public Library',
    description: 'Planning notes for Boulder Public Library as a separate civic destination: what to verify about branches, opening hours and facilities before a downtown visit.',
    lede: 'A public library is a working civic service with branches, opening hours and its own rules. This guide has not verified a current branch address or timetable, so it treats a library stop as something to confirm rather than assume.',
    intent: 'Verify a branch, its hours and its visitor facilities first.',
    place: 'A public library service in Boulder, treated as a separate destination',
    managing: 'Not verified in this review; check the library’s own current information',
    address: 'Not verified in this review; a library service may have more than one branch',
    hours: 'Not verified here. Branch opening days and hours must be checked with the library.',
    admission: 'Not verified here. This guide makes no claim about charges, memberships or event fees.',
    transport: 'Not verified as a specific route. Plan the leg from your starting point using a current map service.',
    whyVisit: 'A library is a useful indoor, low-cost pause in an otherwise outdoor day, especially for families or in bad weather. The complication is that a library service may operate several branches, each with its own hours and facilities, so "the library" is not one address.',
    highlights: [
      'An indoor alternative to four entirely outdoor blocks.',
      'A service with branches, each with its own timetable.',
      'Its own rules on access, events and photography.',
      'A stop that should be verified with the library itself.'
    ],
    planning: 'Identify which branch you mean, then check its current opening hours, whether it is open to casual visitors, and any event or room access you care about. Confirm the address with the library rather than with a travel page. Then place the stop before or after the four-block walk.',
    distinctive: 'A library is a public service with a building and a timetable; the mall is a public park and pedestrian street dedicated in 1977 with no general-admission tariff. One is a quiet indoor space with rules about use, the other an open street with published mall rules. They need different expectations.',
    about: 'This guide has not verified the library’s governing body, branch names, building history or current service information. It is independent, unofficial and nonprofit, and does not represent any public institution.',
    aboutNote: UNVERIFIED_NOTE,
    heritage: 'No branch opening date, architect, design description, collection size or public art claim is published here, because none was verified. If a particular building interests you, use the library’s own current information or a local heritage source.',
    route: [
      '1. Identify the specific branch you intend to visit.',
      '2. Confirm its address, opening days and hours with the library.',
      '3. Check visitor access, facilities and any event you want to attend.',
      '4. Plan the route between that branch and the four pedestrian blocks.',
      '5. Walk 11th to 15th Street with normal crossings at intersecting streets.',
      '6. Check the weather for the outdoor part of the day.',
      '7. Confirm your return transport or parking terms.'
    ],
    tips: 'Respect a quiet working space: check rules on food, bags, photography and children’s areas. If you need step-free access, confirm it for that specific branch. The City’s listing of accessible paths on the mall does not describe any library building.',
    photo: 'Check the library’s policy before photographing inside, and respect other visitors’ privacy. For exterior images, confirm the current branch address and signage. The photograph published on this site shows a Pearl Street streetscape, not a library.',
    eatStay: 'Use the Downtown Boulder dining directory or the three documented businesses on this site for a meal, and confirm current hours. This guide does not recommend or rate accommodation and has no commercial relationships.',
    reviews: 'This guide does not publish a rating, collect reviews or reproduce visitor comments for a public library. A civic service is better assessed through its own current information than through a tourist star rating.',
    directions: 'No branch address was verified in this review. Use the library’s own current listing and a current map service from your actual starting point. The Google Maps link on this site refers to Pearl Street Mall at 1303 Pearl St.',
    faqs: [
      ['Is the library on Pearl Street Mall?', 'This guide has not verified a branch address and does not claim one sits on the four pedestrian blocks. Confirm the location with the library.'],
      ['What are the opening hours?', 'Not verified here. Check the specific branch’s current timetable with the library.'],
      ['Can visitors just walk in?', 'Not confirmed in this review. Check the library’s current visitor information, especially for events or special collections.'],
      ['Is there a charge?', 'Not verified. This guide makes no claim about charges, memberships or event fees.'],
      ['How does it fit into a rainy-day plan?', 'Pair a confirmed indoor stop with the clearest part of the four-block outdoor walk, and check National Weather Service Boulder forecasts and warnings.']
    ],
    sources: [
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information (general planning link)'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.maps, 'Google Maps place listing for Pearl Street Mall (reference only)')
    ],
    related: ['/family-guide/', '/seasonal-guide/', '/one-day-boulder/', '/nearby/boulder-creek-path/', '/accessibility/']
  }),

  makeNearby({
    slug: 'peoples-crossing',
    title: "The People's Crossing | Nearby Pearl Street Mall Guide",
    h1: "The People's Crossing",
    description: 'A separate destination guide to The People’s Crossing: the City lists this trailhead as access to the Red Rocks trail network, with its own alerts and terrain checks.',
    lede: 'The People’s Crossing is a trailhead, not a city-centre attraction. The City lists it as access to the Red Rocks trail network, which makes trail alerts, terrain, weather and personal preparation the questions that matter most.',
    intent: 'Plan a trailhead visit with current alerts, terrain and weather checks.',
    place: 'A City-listed trailhead providing access to the Red Rocks trail network',
    managing: 'The City of Boulder lists this trailhead; check its current page',
    address: 'No single street address verified; use the City trailhead listing',
    hours: 'Not verified here. Check current trail alerts and any access restrictions before travelling.',
    admission: 'Not verified here. This guide makes no claim about parking charges or permits.',
    transport: 'Plan as a separate outdoor leg. No route or travel time from the mall was verified.',
    whyVisit: 'A trailhead offers the sharpest contrast available to a downtown shopping walk: open terrain instead of brick paving. That contrast is exactly why it must be planned separately. A trail has surface conditions, weather exposure and alert notices that have nothing to do with a pedestrian street.',
    highlights: [
      'A City-listed trailhead, explicitly a separate outdoor destination.',
      'Access to the Red Rocks trail network, per the City.',
      'Trail alerts, terrain and personal requirements that need their own check.',
      'A reason to treat weather and daylight as primary planning constraints.'
    ],
    planning: 'Read the City’s current trailhead information and any active alerts first. Then match the route to the ability and equipment of everyone in your group. Decide where you will park or how you will arrive, and confirm the return plan. Keep the Pearl Street walk as a separate leg of the day.',
    distinctive: 'The City lists this as a trailhead giving access to a trail network, not as a plaza or a viewpoint beside the mall. A trailhead is a starting point with terrain and conditions, while the four blocks are an urban public park with benches, drinking fountains and published mall rules. The two require completely different preparation.',
    about: 'The City of Boulder publishes information about this trailhead. This site is an independent, unofficial guide with no affiliation to the City and no live monitoring of trail conditions, closures or alerts.',
    heritage: 'This guide has not verified the origin of the trailhead’s name, any cultural history, artworks or named features along the routes, so it does not describe them. Use current City information for the route and any interpretation provided on site.',
    route: [
      '1. Read the City’s current trailhead page and active alerts.',
      '2. Choose a route that matches your group’s ability, equipment and daylight.',
      '3. Check National Weather Service Boulder forecasts and warnings.',
      '4. Confirm how you will arrive and where you will leave a vehicle, if driving.',
      '5. Tell someone your plan and carry water and appropriate layers.',
      '6. Keep the 11th–15th Street pedestrian walk as a separate, urban leg.',
      '7. Check current conditions again before you set out.'
    ],
    tips: 'Check trail alerts, terrain and personal requirements before setting off. Surfaces, exposure and water needs are not comparable to a downtown street. Do not assume this trailhead is a short walk from Pearl Street Mall; no distance or travel time was verified here.',
    photo: 'Open terrain and changing light make trail photography appealing, but stay on the published route and follow current closures. The single photograph published on this site is a December 2025 Pearl Street streetscape and does not depict this trailhead.',
    eatStay: 'A trail leg needs its own food and water plan. For a meal in town, use the Downtown Boulder dining directory or the three documented businesses on this site and confirm hours. This guide does not recommend or rate accommodation.',
    reviews: 'This guide does not publish a rating, collect reviews or reproduce trail reports. It also does not transfer the Google Maps snapshot for Pearl Street Mall to an outdoor trailhead. Use current City alerts for conditions.',
    directions: 'Use the City’s trailhead listing and a current map service from your actual starting point. The Google Maps place link on this site refers to Pearl Street Mall at 1303 Pearl St, not to a trailhead.',
    faqs: [
      ['Is The People’s Crossing on Pearl Street Mall?', 'No. The City lists it as a trailhead giving access to the Red Rocks trail network, a separate outdoor destination.'],
      ['Do I need to check anything before going?', 'Yes. Check current trail alerts, terrain, weather and your group’s personal requirements. The City’s trailhead page is the starting point.'],
      ['How far is it from the four blocks?', 'No distance or travel time was verified in this review. Use a current map service from your actual starting point.'],
      ['Is there an entry fee or permit?', 'Not verified. This guide makes no claim about parking charges or permits; check current City information.'],
      ['Can I combine it with a half-day downtown visit?', 'Treat it as a separate leg with its own preparation. A short urban itinerary is more realistic than trying to merge a trail and a shopping walk into one unbroken route.']
    ],
    sources: [
      s(SRC.crossing, 'City of Boulder: The People’s Crossing trailhead'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.rules, 'Downtown Boulder: published mall rules')
    ],
    related: ['/nearby/boulder-creek-path/', '/seasonal-guide/', '/one-day-boulder/', '/family-guide/', '/accessibility/']
  })
];
