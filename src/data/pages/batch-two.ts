import type { GuidePage } from './shared';
import { GROUP, s, SRC } from './shared';

// Batch 2 — P1: depth, context and decision-led commercial topics.
// Twelve independent English pages, each with its own search intent.
export const batch2: GuidePage[] = [
  {
    slug: 'accessibility', path: '/accessibility/', group: GROUP.practical, batch: 2,
    title: 'Pearl Street Mall Accessibility Guide | Boulder',
    h1: 'Pearl Street Mall Accessibility Guide',
    description: 'What the City publishes about accessible paths, benches and drinking fountains at Pearl Street Mall, and the route-level checks still needed before a visit.',
    lede: 'Accessibility information for an outdoor public street cannot be reduced to a single "yes". The City lists useful features, but a usable route depends on crossings, gradients, business doorways and temporary barriers that this guide has not surveyed.',
    intent: 'Separate published accessibility features from an unverified route survey.',
    facts: [
      ['City-listed features', 'Accessible sidewalks and paths, benches, drinking fountains'],
      ['Maps listing', 'An accessible entrance was marked on 2026-10-30'],
      ['Not surveyed', 'Crossings, slopes, individual doorways, temporary obstructions'],
      ['Restrooms', 'Published locations; accessible-cubicle status not verified'],
      ['Parking', 'Confirm the route from your chosen garage'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'What has actually been published',
        paragraphs: [
          'The City’s park page lists accessible sidewalks and paths, drinking fountains and benches. Google Maps also marked an accessible entrance in the 2026-10-30 snapshot used throughout this site. Both are published listings, not a measurement of the route you personally need.',
          'Downtown Boulder’s FAQ lists public restrooms north of the Visitor Information Center at 13th and Pearl and another location at 9th and Canyon. This review did not verify live opening, accessible-cubicle status or every route to those facilities.'
        ],
        note: 'Verification status: this guide did not survey a step-free entrance, crossing gradients, surface changes, kerb cuts, temporary works barriers or the doorway of any individual business. No route is described as fully accessible.'
      },
      {
        heading: 'Build an accessibility check around your own route',
        paragraphs: [
          'Start with the exact places you intend to use: one parking garage or bus stop, one crossing onto the pedestrian blocks, one or two businesses, and a restroom. A general statement about "the mall" does not answer any of those questions.',
          'Then confirm each link in that chain with the operator or the City. If a shop, restaurant or venue matters to your visit, ask that business directly about its entrance. A Maps marker for the whole pedestrian area is not evidence about a specific doorway.'
        ],
        bullets: [
          'Choose the garage or transit stop first, then confirm the route from it.',
          'Identify which cross streets you will need to cross.',
          'Ask individual businesses about their own entrances and facilities.',
          'Check current City works notices for temporary barriers or detours.',
          'Confirm restroom access for the date and time of your visit.',
          'Keep an alternative plan if one link in the route is unavailable.'
        ]
      },
      {
        heading: 'Works, weather and changing conditions',
        paragraphs: [
          'The City describes assessment and preparation for 2027 maintenance and anniversary work on the mall, and its 2027 Recommended Budget announcement mentions garage renovations. Neither is a confirmed closure or a current access report, but both are reasons to check notices close to your visit date.',
          'Because the whole route is outdoors on brick paving, weather changes the practical experience. Check National Weather Service Boulder forecasts and warnings and plan for rain, snow, heat and reduced daylight.'
        ]
      },
      {
        heading: 'A note on how this guide writes about access',
        paragraphs: [
          'This site is an independent, unofficial guide. It does not represent the City, Downtown Boulder Partnership or any business, and it does not promise real-time availability, safety or accessibility. Where a detail could not be confirmed, the page says so rather than giving reassurance it cannot support.',
          'The most reliable information will always come from the current City notices and the operator of the specific facility you plan to use. Use this page as a checklist for those conversations.'
        ]
      }
    ],
    faqs: [
      ['Is Pearl Street Mall wheelchair accessible?', 'The City lists accessible sidewalks and paths, benches and drinking fountains, and Maps marked an accessible entrance on 2026-10-30. This guide has not surveyed crossings, gradients, doorways or temporary barriers, so confirm your specific route.'],
      ['Are the restrooms accessible?', 'Downtown Boulder lists restroom locations, but accessible-cubicle status and live opening were not verified in this review. Confirm before relying on them.'],
      ['Which accessible entrance should I use?', 'A single place marker does not establish a surveyed route. Choose your garage or bus stop, then confirm the crossings and the doorway of the business you need.'],
      ['Will the 2027 works affect access?', 'The City describes preparation for 2027 maintenance and anniversary work, but no confirmed closure or access impact is published here. Check current City notices near your visit date.'],
      ['Can I park in an accessible space?', 'This guide has not verified space counts or terms for any garage. Check the City garage directory and the facility’s posted information for the exact provisions.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: accessible paths, benches and drinking fountains'),
      s(SRC.visitorFaq, 'Downtown Boulder: restrooms and visitor information'),
      s(SRC.garages, 'City of Boulder: garage directory and works notices'),
      s(SRC.refresh, 'City of Boulder: refresh project'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/family-guide/', '/map/', '/directions/', '/public-transportation/', '/parking/', '/seasonal-guide/']
  },

  {
    slug: 'local-boutiques', path: '/local-boutiques/', group: GROUP.food, batch: 2,
    title: 'Local Boutiques & Independent Stores | Pearl Street',
    h1: 'Local Boutiques & Independent Stores',
    description: 'How independent businesses shape shopping on Pearl Street Mall in Boulder, how to identify them, and why hours and stock must be checked with each operator.',
    lede: 'The defining commercial feature of Pearl Street Mall is that its businesses are independently operated. That is good for a distinctive shopping walk, but it also means there is no central stock list, no shared opening time and no reliable way to name every boutique from memory.',
    intent: 'Understand the independent-business model and verify each shop directly.',
    facts: [
      ['Business model', 'Independently operated stores, per Downtown Boulder'],
      ['Shared hours', 'None; hours vary'],
      ['Verified boutique list', 'None published — not checked in this review'],
      ['Location', 'Four pedestrian blocks between 11th and 15th Streets'],
      ['Best source', 'Current directories plus each business’s own site'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'What "independent" changes for a visitor',
        paragraphs: [
          'In a managed shopping centre, a directory and a common timetable cover most questions. Here, Downtown Boulder says stores are independently operated and hours vary. Each business decides its own opening times, stock, returns policy, accessibility and whether it trades on a given holiday.',
          'That is why a "best boutiques" article with a fixed list ages badly. The honest approach is to explain the model, give you a verification method, and point to current directories and operator pages.'
        ],
        note: 'Verification status: this guide has not verified a current list of boutique names, addresses, opening hours, product ranges or ownership. No business is described here as locally owned without confirmation.'
      },
      {
        heading: 'How to identify a genuinely local business',
        paragraphs: ['If shopping local matters to you, check rather than assume.'],
        bullets: [
          'Open the business’s own website and look for its own address and story.',
          'Cross-check the address in a current Downtown Boulder directory.',
          'Check whether the name refers to a single Boulder location or a larger chain.',
          'Confirm trading hours for your exact date with the operator.',
          'Ask the business directly about its stock or provenance claims if that matters to you.',
          'Do not infer local ownership from a storefront photograph.'
        ]
      },
      {
        heading: 'Plan a route that suits independent shops',
        paragraphs: [
          'A single pass along the four blocks between 11th and 15th Streets covers both sides of the street without repeated backtracking. Begin at the end closest to your parking or transit choice, use normal crossings at each intersecting street, and return on the opposite side.',
          'Leave space in the plan for a business to be closed or busier than expected. A shortlist of two confirmed shops plus one alternative is more resilient than a long list of maybes.'
        ]
      },
      {
        heading: 'The practical edges of a shopping walk',
        paragraphs: [
          'The walk is entirely outdoors, so check National Weather Service Boulder forecasts and warnings and plan shade, layers and rest stops. The City lists benches and drinking fountains as park features; this guide has not surveyed their current condition.',
          'Budget separately for shopping, meals and parking. The City publishes free weekend and city-holiday parking in its downtown garages with exceptions, but that arrangement does not automatically apply to private garages or street spaces. Confirm the facility you choose.'
        ]
      }
    ],
    faqs: [
      ['Which boutiques are locally owned?', 'This guide has not verified ownership or a current boutique inventory. Use current directories and each business’s own website, and ask the operator directly if ownership matters to you.'],
      ['Do independent shops open at the same time?', 'No. Downtown Boulder says stores are independently operated and hours vary. Check each business for the exact date.'],
      ['Is there a mall-wide shopping directory?', 'There is no single, always-current tenant list for an open public street. Use current Downtown Boulder directories and operator pages as starting points.'],
      ['Where should I start the shopping walk?', 'At 11th or 15th Street, depending on where you arrive, then walk the four blocks in one direction and return along the other side.'],
      ['Is the mall an indoor shopping centre?', 'No. The City identifies it as a four-block pedestrian street and public park with outdoor shopping and dining.']
    ],
    sources: [
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated stores and varying hours'),
      s(SRC.dining, 'Downtown Boulder: business directory starting point'),
      s(SRC.mall, 'City of Boulder: four-block park identity and amenities'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/shopping/', '/souvenir-shops/', '/restaurants/', '/half-day-itinerary/', '/map/']
  },

  {
    slug: 'souvenir-shops', path: '/souvenir-shops/', group: GROUP.food, batch: 2,
    title: 'Souvenir & Gift Shopping in Boulder | Pearl Street',
    h1: 'Souvenir & Gift Shopping in Boulder',
    description: 'Plan souvenir and gift shopping around Pearl Street Mall in Boulder: how to find current sellers, check opening hours and avoid relying on an unverified shop list.',
    lede: 'Visitors often want one tangible thing to take home from Boulder. This guide does not pretend to know which shops currently sell souvenirs; it shows how to find a real seller, confirm the details that matter, and fit the errand into a walk of the four blocks.',
    intent: 'Find a current gift seller and check the details before buying.',
    facts: [
      ['Verified souvenir sellers', 'None published — not checked in this review'],
      ['Where to look', 'Current Downtown Boulder directories and business websites'],
      ['Shopping area', 'Outdoor four-block pedestrian core, 11th to 15th Street'],
      ['Hours', 'Vary by business; confirm with the operator'],
      ['Returns and shipping', 'Not verified; ask the individual business'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Start with a current seller, not a category',
        paragraphs: [
          'A souvenir is a product, not a permanent type of shop. Retailers change stock, names and premises, and a travel page that listed gift shops a year ago can be wrong today. This guide has not verified a current inventory of souvenir sellers in downtown Boulder.',
          'Use the Downtown Boulder visitor and dining directories as starting points, then open the business’s own site to confirm what it actually sells. If the product matters — a locally made item, a specific size, a gift that needs to travel — ask the business directly.'
        ],
        note: 'Verification status: no shop name, product, price, opening time, return policy or shipping claim is made on this page. The three dining businesses verified on this site are listed in the restaurants guide.'
      },
      {
        heading: 'Checks that matter for a gift purchase',
        paragraphs: ['These are the questions an operator can answer and this guide cannot.'],
        bullets: [
          'Is the shop open on the exact date and time you plan to visit?',
          'Does it actually carry the kind of item you are looking for?',
          'Can the item be packed for travel or shipped, if needed?',
          'What is the returns or exchange policy?',
          'What payment methods are accepted?',
          'Is there step-free access to that specific premises, if you need it?'
        ]
      },
      {
        heading: 'Fit the errand into the four-block walk',
        paragraphs: [
          'The City identifies the pedestrian core as Pearl Street between 11th and 15th Streets. If you know which end your chosen shop is closest to, start there and walk the rest of the blocks afterwards, using normal pedestrian crossings at each intersecting street.',
          'An afternoon that combines a shortlist of one or two confirmed shops with a coffee stop and the historic streetscape is usually more satisfying than a rushed attempt to visit every storefront. Check National Weather Service Boulder before an outdoor plan.'
        ]
      },
      {
        heading: 'Photographs are not a shop inventory',
        paragraphs: [
          'This site publishes one historical streetscape photograph, taken in December 2025 and used with attribution. It shows a streetscape, not today’s tenants, entrances or stock. Do not identify a current business from it.',
          'Likewise, a Maps place marker for the whole mall cannot tell you which retailer is trading. Confirm the individual business and its address before you make a special trip.'
        ]
      }
    ],
    faqs: [
      ['Where can I buy souvenirs on Pearl Street Mall?', 'This guide has not verified a current inventory of souvenir sellers. Use current Downtown Boulder directories and each business’s own website, then confirm stock and hours directly.'],
      ['Are shops open on Sundays?', 'Hours vary by business and no shared timetable exists. Check the specific operator for the date you plan to visit.'],
      ['Can I identify shops from the photos on this site?', 'No. The published photograph is a December 2025 historical streetscape and is explicitly not a current tenant or entrance inventory.'],
      ['Is there a charge to browse the mall?', 'The review found no general-admission tariff for the public pedestrian space. Goods, meals, parking and ticketed programmes are charged separately.'],
      ['Where should I park for a quick gift errand?', 'Choose the City garage closest to your confirmed shop’s end of the four blocks, then check current rates, payment instructions and works notices for that facility.']
    ],
    sources: [
      s(SRC.dining, 'Downtown Boulder: business directory starting point'),
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated businesses and hours'),
      s(SRC.mall, 'City of Boulder: four-block park identity'),
      s(SRC.garages, 'City of Boulder: garage directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/shopping/', '/local-boutiques/', '/coffee-shops/', '/half-day-itinerary/', '/map/']
  },

  {
    slug: 'breakfast-brunch', path: '/breakfast-brunch/', group: GROUP.food, batch: 2,
    title: 'Breakfast & Brunch Near Pearl Street Mall | Boulder',
    h1: 'Breakfast & Brunch Near Pearl Street Mall',
    description: 'Plan breakfast or brunch near Pearl Street Mall in Boulder: how to check meal periods, the three verified dining businesses as a starting point and what to confirm.',
    lede: 'A morning meal is a useful anchor for a Pearl Street visit, but this guide has not verified which businesses currently serve breakfast or brunch. Rather than label a restaurant incorrectly, this page explains how to check meal periods and build the morning around a confirmed booking.',
    intent: 'Verify meal periods and build a morning around a confirmed booking.',
    facts: [
      ['Verified breakfast venues', 'None — meal periods were not checked'],
      ['Named starting points', 'Three dining businesses with operator links'],
      ['Shared hours', 'None; each business sets its own meal periods'],
      ['Location context', 'Four pedestrian blocks between 11th and 15th Streets'],
      ['Weekend and holiday variation', 'Confirm with the operator'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Why there is no brunch ranking here',
        paragraphs: [
          'The existing guide verified three dining businesses by name, address and operator link, but it did not verify which meal periods they serve. Calling one of them a breakfast venue without checking would be exactly the kind of plausible-but-unsupported claim this site avoids.',
          'Use the three entries as starting points for your own check, not as a brunch list. The operator’s current menu and booking page is the authority on whether breakfast or brunch is served on the day you visit.'
        ],
        note: 'Verification status: no breakfast hours, brunch menu, price, reservation policy or dietary claim is published on this page.'
      },
      {
        heading: 'Three checked starting points',
        paragraphs: ['These businesses are documented on this site with operator or directory links:'],
        bullets: [
          'OAK at Fourteenth, 1400 Pearl St — the restaurant describes seasonal, wood-fired American cooking.',
          'The Kitchen Boulder, 1039 Pearl St — the operator page describes globally inspired American dishes and shared plates.',
          'Postino Boulder, 1468 Pearl St, Suite 110 — the location page identifies a Boulder WineCafe and links its menus and reservations.'
        ]
      },
      {
        heading: 'A verification routine for a morning meal',
        paragraphs: ['Work through these before you fix a time.'],
        bullets: [
          'Confirm the business serves the meal you want on your exact date.',
          'Check the opening time and the last seating for that service.',
          'Read the current menu for dietary and allergy requirements.',
          'Check whether a reservation is required or accepted.',
          'Confirm the address and suite number against your chosen parking or transit plan.',
          'Keep a second option in case the first is fully booked.'
        ]
      },
      {
        heading: 'Shape the rest of the morning',
        paragraphs: [
          'Once a meal time is confirmed, place the four-block walk before or after it. Starting at 11th or 15th Street and walking the full line in one direction keeps the plan simple; cross streets still require normal pedestrian crossings.',
          'The walk is outdoors, so check National Weather Service Boulder forecasts and warnings and plan shade, layers and an indoor alternative. If you are driving, confirm the garage’s current rates, payment instructions and works notices before setting out.'
        ]
      }
    ],
    faqs: [
      ['Which restaurants serve brunch on Pearl Street?', 'This guide has not verified meal periods for any business. Check the operator’s current menu and booking page for the three named starting points or use the Downtown Boulder dining directory.'],
      ['Do I need a reservation for brunch?', 'That depends on the business and date. Follow the operator’s own booking information; this guide does not take reservations or claim table availability.'],
      ['Are the three listed restaurants open for breakfast?', 'Not confirmed. They are documented as separate dining businesses with their own meal periods, prices and reservations, not as breakfast venues.'],
      ['What time should I start?', 'Anchor the morning to a confirmed meal period, then place the four-block walk before or after it. Check the weather and your parking or transit plan as well.'],
      ['Is 1039 Pearl St on the pedestrian mall?', 'The pedestrian core is 11th to 15th Street, so 1039 Pearl St sits beyond that core. An address on Pearl Street does not by itself prove a location on the pedestrian bricks.']
    ],
    sources: [
      s('https://www.oakatfourteenth.com/', 'OAK at Fourteenth: operator information'),
      s('https://www.thekitchen.com/location/the-kitchen-bistros-boulder/', 'The Kitchen Boulder: operator location page'),
      s('https://www.postino.com/locations/postino-boulder', 'Postino Boulder: operator location page'),
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/restaurants/', '/coffee-shops/', '/dinner/', '/hours/', '/half-day-itinerary/']
  },

  {
    slug: 'dinner', path: '/dinner/', group: GROUP.food, batch: 2,
    title: 'Dinner & Evening Dining on Pearl Street | Boulder',
    h1: 'Dinner & Evening Dining on Pearl Street',
    description: 'Plan dinner on or near Pearl Street Mall in Boulder: verify evening hours and reservations, combine a meal with the four-block walk and check the practical evening details.',
    lede: 'Evening is when a visitor most needs current information. A 24-hour place marker says nothing about a restaurant’s last seating, and the four pedestrian blocks are outdoors. This page focuses on what to confirm before you build a night around a meal.',
    intent: 'Confirm evening hours and reservations before planning a night out.',
    facts: [
      ['Verified dinner venues', 'Evening service not checked for any business'],
      ['Named starting points', 'Three dining businesses with operator links'],
      ['Shared timetable', 'None; businesses set their own hours'],
      ['Maps listing', '24 hours on 2026-10-30 — not a venue timetable'],
      ['Evening conditions', 'Lighting and night-time safety not verified here'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'A 24-hour listing is not a dinner reservation',
        paragraphs: [
          'Google Maps listed 24 hours in the 2026-10-30 snapshot. That is a third-party place listing, not confirmation of live access during works, lighting or night-time safety — and it certainly does not describe the opening hours of any restaurant.',
          'Downtown Boulder says stores are independently operated and hours vary; restaurants, visitor services and events have their own schedules too. The only dependable source for an evening plan is the specific business you intend to visit.'
        ]
      },
      {
        heading: 'Three businesses whose operator pages are linked',
        paragraphs: ['These are the same three dining entries documented on the main guide. They are starting points for a check, not an evening ranking.'],
        bullets: [
          'OAK at Fourteenth, 1400 Pearl St — consult the operator’s current menus and reservations.',
          'The Kitchen Boulder, 1039 Pearl St — check its own meal periods and bookings.',
          'Postino Boulder, 1468 Pearl St, Suite 110 — confirm the correct branch, current menu and dietary requirements.'
        ]
      },
      {
        heading: 'The evening checklist',
        paragraphs: ['Confirm these with the operator and with current official sources before setting out.'],
        bullets: [
          'Opening time and last seating on your exact date.',
          'Whether a reservation is required and how it is made.',
          'The current menu, prices and any service charge.',
          'The correct address, suite and entrance for the premises.',
          'Return transport or the closing terms of your chosen garage.',
          'Weather forecast, daylight and clothing for an outdoor walk.',
          'Any current City works notice affecting your route.'
        ],
        note: 'This guide does not publish review scores, "best dinner" rankings, price brackets, bar hours, live music schedules or reproduced review text.'
      },
      {
        heading: 'Putting the walk and the meal together',
        paragraphs: [
          'A simple sequence is to walk the four blocks between 11th and 15th Streets in daylight, then eat, or to eat first and take a shorter evening stroll. Use normal pedestrian crossings at the intersecting streets, because the whole downtown area is not car-free.',
          'If you are driving, check the City garage directory for the facility’s current rates, payment instructions, evening terms and works notices. A free weekend or city-holiday arrangement for City garages does not automatically apply to private facilities or street spaces.'
        ]
      }
    ],
    faqs: [
      ['Are restaurants on Pearl Street open late?', 'This guide has not verified evening hours for any business. Check the operator’s current hours and last seating for your date.'],
      ['Is the mall open at night?', 'Google Maps listed 24 hours on 2026-10-30, but that listing does not confirm current access during works, lighting or night-time safety, nor any business’s hours.'],
      ['Do I need a booking?', 'That depends on the business. Follow its own reservation information; this guide does not take bookings or claim table availability.'],
      ['Which restaurants does this guide name?', 'OAK at Fourteenth, The Kitchen Boulder and Postino Boulder, each with an operator or directory link. Evening service has not been verified for any of them.'],
      ['Should I check parking terms for the evening?', 'Yes. Confirm the current rates, payment instructions, evening terms and works notices for the exact garage you plan to use.']
    ],
    sources: [
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated businesses and varying hours'),
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s('https://www.oakatfourteenth.com/', 'OAK at Fourteenth: operator information'),
      s('https://www.thekitchen.com/location/the-kitchen-bistros-boulder/', 'The Kitchen Boulder: operator location page'),
      s(SRC.garages, 'City of Boulder: garage directory and works notices')
    ],
    related: ['/restaurants/', '/breakfast-brunch/', '/hours/', '/events/', '/half-day-itinerary/']
  },

  {
    slug: 'history', path: '/history/', group: GROUP.experience, batch: 2,
    title: 'History of Pearl Street Mall | Boulder, 1977 to 2027',
    h1: 'History of Pearl Street Mall',
    description: 'A sourced history of Pearl Street Mall in Boulder: its 1977 dedication as a public park, the four-block pedestrian design, brick paving and the 2027 refresh preparation.',
    lede: 'Pearl Street Mall is a piece of city-making, not just a shopping street. The City records its dedication as a public park on 6 August 1977, and its June 2026 update describes preparation for maintenance and anniversary work in 2027.',
    intent: 'Understand the documented history and what is still only planned.',
    image: true,
    facts: [
      ['Dedication', 'Public park dedicated 6 August 1977, per the City of Boulder'],
      ['Core extent', 'Four blocks of Pearl Street between 11th and 15th Streets'],
      ['Design', 'Brick paving and gathering spaces oriented toward pedestrians'],
      ['Place type', 'Outdoor pedestrian street and city park, not an indoor mall'],
      ['2027', 'Preparation for maintenance and anniversary work; plans, not completions'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'A street turned into a public place',
        paragraphs: [
          'The City of Boulder identifies Pearl Street Mall as a public park and records its dedication on 6 August 1977. That framing matters: the four blocks were not built as an enclosed shopping centre, but as a stretch of downtown street reorganised around people on foot.',
          'The City describes brick paving and gathering spaces developing through an effort to orient this part of downtown toward pedestrians. The result is a place where the street itself — the paving, the benches, the spaces between buildings — is the main attraction.'
        ]
      },
      {
        heading: 'A short timeline of documented points',
        paragraphs: ['Only dates this site can source are listed. Gaps are left as gaps rather than filled with unsupported milestones.'],
        bullets: [
          '6 August 1977 — the City records the mall’s dedication as a public park.',
          'Between then and the present — brick paving and gathering spaces become the defining pedestrian features described by the City.',
          'June 2026 — the City’s project update describes assessment and preparation for 2027 maintenance and anniversary work.',
          '28 August 2026 — the City announces its 2027 Recommended Budget, which mentions renovations to the 1500 Pearl Parking Garage. A recommendation is not an approved works schedule.',
          '2027 — described in City material as an anniversary and maintenance period. This guide does not claim a completed rebuild or a confirmed event programme.'
        ]
      },
      {
        heading: 'The four-block boundary is part of the history',
        paragraphs: [
          'The City identifies the core as Pearl Street between 11th and 15th Streets. Pearl Street and downtown continue beyond those blocks, and the intersecting streets still carry traffic with normal pedestrian crossings. That bounded, linear form is why a Maps pin at 1303 Pearl St can mislead: it marks a reference near 13th Street, not a gateway.',
          'Understanding the boundary also helps when reading older photographs. The single historical streetscape published on this site was taken in December 2025; it shows a streetscape, not a current tenant list, an entrance survey or a record of every design change.'
        ]
      },
      {
        heading: 'Reading the 2027 plans carefully',
        paragraphs: [
          'The City’s Pearl Street Mall Refresh project describes assessment and preparation for 2027 maintenance and anniversary work. At the time of the 2026-10-30 review, those were plans and preparation, not completed construction or a published programme of events.',
          'Any page about the anniversary should be kept current. This guide deliberately separates "the City has published a plan" from "the work has happened", and links to the project page so a reader can check the latest position.'
        ],
        note: 'This page does not name an architect, a designer, a construction cost, a visitor number, a specific event date or a completed works milestone. None was verified from the sources checked for this guide.'
      }
    ],
    faqs: [
      ['When did Pearl Street Mall open?', 'The City of Boulder records its dedication as a public park on 6 August 1977. This guide uses the City’s dated record rather than an unsourced "opening" claim.'],
      ['Is Pearl Street Mall really a park?', 'Yes, the City lists it as a park as well as a pedestrian mall. It is an outdoor public street with brick paving and gathering spaces, not an indoor shopping centre.'],
      ['How long is the historic mall?', 'Four blocks of Pearl Street between 11th and 15th Streets, according to the City. The cross streets still carry traffic.'],
      ['What is happening in 2027?', 'The City describes assessment and preparation for maintenance and anniversary work, and a 2027 budget recommendation mentions garage renovations. These are plans, not confirmation of completed work, closures or event dates.'],
      ['Where can I check the original sources?', 'The City of Boulder location and refresh project pages are linked in the sources section below. This guide does not reproduce claims it cannot source.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: park identity, 1977 dedication and listed amenities'),
      s(SRC.refresh, 'City of Boulder: four-block boundary, June 2026 update and 2027 preparation'),
      s(SRC.budget, 'City of Boulder: 2027 Recommended Budget announcement'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information'),
      s(SRC.photo, 'Wikimedia Commons: source of the published historical photograph')
    ],
    related: ['/architecture/', '/walking-tour/', '/photo-spots/', '/events/', '/public-art/', '/one-hour-itinerary/']
  },

  {
    slug: 'architecture', path: '/architecture/', group: GROUP.experience, batch: 2,
    title: 'Pearl Street Mall Architecture & Historic Buildings',
    h1: 'Pearl Street Mall Architecture & Historic Buildings',
    description: 'Read the built fabric of Pearl Street Mall in Boulder: brick paving, gathering spaces, the four-block street form and how to observe buildings without an unverified inventory.',
    lede: 'The architecture of Pearl Street Mall is easiest to read as a street rather than as a list of famous façades. The City documents brick paving and gathering spaces from an effort to prioritise pedestrians; this guide stays with what can be sourced and suggests how to look.',
    intent: 'Read the streetscape and its documented design features.',
    image: true,
    facts: [
      ['Documented features', 'Brick paving and gathering spaces'],
      ['Street form', 'Four pedestrian blocks between 11th and 15th Streets'],
      ['Cross streets', 'Still carry traffic; normal crossings apply'],
      ['Building inventory', 'Not verified here — no named-building list is published'],
      ['Historic district status', 'Not verified in this review'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Start with the ground, not the façades',
        paragraphs: [
          'The most distinctive documented design decision is underfoot. The City describes brick paving and gathering spaces that developed as downtown was oriented toward pedestrians. That surface, and the room it leaves for people to stop, is what separates the four blocks from an ordinary shopping street.',
          'Notice how the street is a line rather than a square: four blocks long, crossed by streets that still carry traffic. The City identifies 11th to 15th Street as the core, with Pearl Street continuing beyond it. That linear, bounded form shapes every view down the mall.'
        ]
      },
      {
        heading: 'How to look at the buildings responsibly',
        paragraphs: [
          'This guide has not verified a list of named historic buildings, construction dates, architects or a historic-district designation. Naming a building from an old photograph or a memory would be unreliable, and the one photograph published on this site is explicitly not a current tenant inventory.',
          'Instead, use the walk itself: look at how storefronts meet the paving, where a doorway sits relative to a crossing, how upper storeys relate to the street, and where benches or drinking fountains create a place to pause. If a specific building interests you, confirm its history with a current City or local heritage source.'
        ],
        note: 'Verification status: no building name, date, architect, style label, heritage listing or façade description is asserted on this page.'
      },
      {
        heading: 'A short observational route',
        paragraphs: ['Use the four blocks as a reading order rather than a checklist of addresses.'],
        bullets: [
          'Begin at 11th or 15th Street and look along the full length of the pedestrian core.',
          'Note where the brick paving changes and where a gathering space opens up.',
          'At each intersecting street, observe how the pedestrian route meets a normal road crossing.',
          'Compare the two sides of the street on your return pass.',
          'Use benches and drinking fountains as documented park features, without assuming their current condition.',
          'Finish by checking current City notices if works are visible.'
        ]
      },
      {
        heading: 'Change, maintenance and photographs',
        paragraphs: [
          'The City’s June 2026 update describes assessment and preparation for 2027 maintenance and anniversary work. A streetscape is not a frozen object; surfaces, furniture and access can change. Separate what is a planned improvement from what has already been completed.',
          'If you photograph the street, remember that the published historical photograph on this site is a December 2025 image by Jesse James, used under CC BY 4.0 with attribution. It shows a streetscape at a point in time, not the present condition of every building.'
        ]
      }
    ],
    faqs: [
      ['Which historic buildings are on Pearl Street Mall?', 'This guide has not verified a named-building inventory and does not publish one. Use current City or local heritage sources for specific buildings.'],
      ['Is the mall part of a historic district?', 'A historic-district designation was not verified in the 2026-10-30 review, so this page makes no claim about one.'],
      ['What is the most documented design feature?', 'The City describes brick paving and gathering spaces from an effort to orient downtown toward pedestrians, within a four-block core between 11th and 15th Streets.'],
      ['Can I identify buildings from the site’s photograph?', 'No. The published image is a historical December 2025 streetscape, not a current tenant, entrance or building inventory.'],
      ['Will the 2027 works change the buildings?', 'The City describes preparation for 2027 maintenance and anniversary work, but no completed changes, closures or specific building works are confirmed here. Check current notices.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: 1977 dedication, brick paving and gathering spaces'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and 2027 preparation'),
      s(SRC.photo, 'Wikimedia Commons: source and licence of the historical photograph'),
      s(SRC.rules, 'Downtown Boulder: published mall rules')
    ],
    related: ['/history/', '/photo-spots/', '/walking-tour/', '/public-art/', '/one-hour-itinerary/']
  },

  {
    slug: 'street-performers', path: '/street-performers/', group: GROUP.experience, batch: 2,
    title: 'Street Performers & Live Entertainment | Pearl Street',
    h1: 'Street Performers & Live Entertainment',
    description: 'What a visitor can and cannot verify about street performance on Pearl Street Mall in Boulder: current rules, event calendars and how to check a programme before you go.',
    lede: 'Street performance is part of the popular image of Pearl Street Mall, but a performance is an event, not a permanent facility. This guide does not publish a schedule it has not verified; it explains how to check one and what rules apply to the public space.',
    intent: 'Check current performance information instead of assuming a daily programme.',
    facts: [
      ['Verified schedule', 'None published — no performance timetable was checked'],
      ['Where to check', 'Downtown Boulder event calendar and current City notices'],
      ['Public space rules', 'Published rules cover animals, bicycles, skating and smoking'],
      ['Place type', 'Four-block outdoor pedestrian street and city park'],
      ['Works', 'City describes preparation for 2027 maintenance and anniversary work'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'An event is not a fixture',
        paragraphs: [
          'A bench, a drinking fountain and brick paving can be described as features of a park. A performer, a concert or a festival cannot: each has an organiser, a date and conditions that can change. This guide has not verified a current schedule of street performers on the mall.',
          'The Downtown Boulder event calendar is the right planning link, but a calendar link is not evidence that a particular programme is running today. Check the specific date, the organiser and any access notice before you build a visit around it.'
        ],
        note: 'Verification status: no performer name, performance time, festival date, permit condition, fee or audience capacity is published here. Older performer-image references on this site were retired.'
      },
      {
        heading: 'Rules that shape a visit',
        paragraphs: [
          'Downtown Boulder publishes rules for the mall covering animals, with service-animal provisions, and bicycle riding, skating and smoking. Dismount bicycles on the pedestrian bricks and follow current signs and rules for your circumstances.',
          'Because the four blocks are a public street with cross streets still carrying traffic, a busy event does not turn the whole downtown area into a car-free zone. Use normal pedestrian crossings and keep an eye on temporary barriers or route changes.'
        ]
      },
      {
        heading: 'How to check a programme in three steps',
        paragraphs: ['A reliable answer usually needs one calendar, one organiser and one current notice.'],
        bullets: [
          'Find the event on the Downtown Boulder calendar for your exact date.',
          'Confirm the details with the organiser, including any ticket or access arrangement.',
          'Check current City notices for works, closures or route changes affecting that date.'
        ]
      },
      {
        heading: 'Planning around an evening or an anniversary',
        paragraphs: [
          'If a performance is in the evening, also confirm restaurant hours, the return service or garage closing terms, and the weather. Google Maps listed 24 hours in the 2026-10-30 snapshot, but that place listing does not confirm lighting, night-time safety or any venue’s timetable.',
          'The City describes preparation for 2027 maintenance and anniversary work. An anniversary is a planning context, not a confirmed programme of events. Verify any specific celebration with current City or Downtown Boulder material before travelling.'
        ]
      }
    ],
    faqs: [
      ['Are there street performers every day?', 'This guide has not verified a performance schedule, so it cannot say. Check the Downtown Boulder event calendar for your date and confirm with the organiser.'],
      ['Do I need a ticket?', 'That depends on the specific event. This guide does not sell tickets, take reservations or publish unverified prices. Check the organiser’s information.'],
      ['Are there rules for the mall during events?', 'Downtown Boulder publishes mall rules on animals, bicycles, skating and smoking. Check current rules and signs, and use normal pedestrian crossings at intersecting streets.'],
      ['Will there be special events in 2027?', 'The City describes preparation for 2027 maintenance and anniversary work, but no specific event programme is confirmed here. Verify with current official material.'],
      ['Is the mall open late for performances?', 'Google Maps listed 24 hours on 2026-10-30, but that is a place listing, not confirmation of event hours, lighting or night-time safety.']
    ],
    sources: [
      s(SRC.events, 'Downtown Boulder event calendar'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.refresh, 'City of Boulder: refresh project and 2027 preparation'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information and hours'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/events/', '/public-art/', '/family-guide/', '/hours/', '/dinner/', '/history/']
  },

  {
    slug: 'public-art', path: '/public-art/', group: GROUP.experience, batch: 2,
    title: 'Public Art & Sculptures on Pearl Street | Boulder',
    h1: 'Public Art & Sculptures on Pearl Street',
    description: 'A careful guide to public art on Pearl Street Mall in Boulder: what this site has verified, what it has not, and how to check a specific work before visiting.',
    lede: 'Public art is often mentioned in descriptions of Pearl Street Mall, but naming individual works without a current source is risky. This page explains what the site can document, and gives a method for confirming a sculpture or installation yourself.',
    intent: 'Find and verify a specific work of public art without an invented list.',
    facts: [
      ['Verified artwork inventory', 'None published — not checked in this review'],
      ['Documented setting', 'Four-block pedestrian park, 11th to 15th Street'],
      ['City-listed features', 'Benches, drinking fountains, accessible paths, brick paving'],
      ['Historical play elements', 'Described elsewhere; current condition not verified'],
      ['Best sources', 'Current City and Downtown Boulder material'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Why this page lists no named sculptures',
        paragraphs: [
          'A public artwork has a title, an artist, a location and sometimes a temporary loan period. Copying a list of names from an old travel page would produce confident but possibly wrong information. The 2026-10-30 review behind this site did not verify an inventory of artworks on the mall.',
          'What is documented is the setting: a four-block pedestrian park with brick paving and gathering spaces, dedicated as a public park on 6 August 1977, with benches and drinking fountains listed by the City. Those features are the reliable starting point for noticing how the public space is used.'
        ],
        note: 'Verification status: no artwork title, artist, date, material, location, commissioning body or donation claim is made on this page. Historical descriptions of children’s climbing sculptures were not checked for current condition.'
      },
      {
        heading: 'A method for confirming one work',
        paragraphs: ['If a particular sculpture or installation is the reason for your visit, verify it in this order.'],
        bullets: [
          'Find a current City or Downtown Boulder reference that names the work.',
          'Confirm its present location against the 11th–15th Street core.',
          'Check whether it is permanent or a temporary installation with an end date.',
          'Look for a current access or conservation notice.',
          'Confirm the artist and title from an official source before publishing or captioning a photograph.',
          'Have an alternative plan if the work is unavailable.'
        ]
      },
      {
        heading: 'Noticing the space as well as the objects',
        paragraphs: [
          'A walk from 11th to 15th Street and back along the other side is a good way to see how fixed features and any temporary works sit within the street. Use normal pedestrian crossings at the intersecting streets; the whole downtown area is not car-free.',
          'The City describes assessment and preparation for 2027 maintenance and anniversary work. A public space changes, so a current notice may explain why something described in an older source is not visible on the day.'
        ]
      },
      {
        heading: 'Photographs, captions and attribution',
        paragraphs: [
          'If you photograph an artwork, check whether the work itself has its own rights or caption requirements. The single photograph published on this site is a December 2025 historical streetscape by Jesse James, licensed CC BY 4.0 and reproduced with attribution; it is not documentation of current artworks.',
          'This guide is independent and unofficial. It does not represent the City, Downtown Boulder Partnership or any artist, and it does not claim that a listed feature is currently on display.'
        ]
      }
    ],
    faqs: [
      ['Which sculptures are on Pearl Street Mall?', 'This guide has not verified a current artwork inventory and does not publish one. Use current City or Downtown Boulder material to confirm a specific work.'],
      ['Are the children’s climbing sculptures still there?', 'Historical descriptions mention play elements, but their current condition was not verified in this review. Check current City information before planning around them.'],
      ['Can I photograph public art?', 'Check the current rules and any work-specific rights or caption requirements. This site’s own photograph is used under CC BY 4.0 with attribution.'],
      ['Is the art free to see?', 'No general-admission tariff was found for the public pedestrian space, but separately ticketed programmes have their own charges. This guide does not publish unverified prices for any installation.'],
      ['Where should I start looking?', 'Walk the four blocks between 11th and 15th Street in one direction and return along the other side, using normal crossings at the intersecting streets.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: 1977 dedication, brick paving and listed amenities'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and 2027 preparation'),
      s(SRC.events, 'Downtown Boulder event calendar'),
      s(SRC.photo, 'Wikimedia Commons: source and licence of the historical photograph')
    ],
    related: ['/architecture/', '/photo-spots/', '/history/', '/family-guide/', '/walking-tour/']
  },

  {
    slug: 'photo-spots', path: '/photo-spots/', group: GROUP.experience, batch: 2,
    title: 'Best Photo Spots on Pearl Street Mall | Boulder',
    h1: 'Best Photo Spots on Pearl Street Mall',
    description: 'Where and how to photograph Pearl Street Mall in Boulder: the four-block street form, light and weather, respectful practice, and the limits of the site’s historical image.',
    lede: 'A four-block pedestrian street offers a different photograph from every cross street. Instead of promising a fixed list of "best" angles, this guide explains the street form, the practical conditions and the attribution rules that apply to the image published here.',
    intent: 'Plan photographs around the four-block form, light and current conditions.',
    image: true,
    facts: [
      ['Setting', 'Four outdoor pedestrian blocks, 11th to 15th Street'],
      ['Documented surface', 'Brick paving and gathering spaces'],
      ['Cross streets', 'Still carry traffic; crossings are part of the view'],
      ['Published photo', 'One December 2025 historical streetscape, CC BY 4.0'],
      ['Current conditions', 'Works and tenants not shown in that photograph'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Use the street form to choose a viewpoint',
        paragraphs: [
          'The City identifies the pedestrian core as Pearl Street between 11th and 15th Streets. A long view down that line, taken from either end, is the most reliable composition because it shows the defining feature: a street organised for people on foot.',
          'The intersecting streets are another subject in their own right. They still carry traffic and require normal pedestrian crossings, so they show how the pedestrian core meets the rest of downtown. That contrast is more informative than a generic storefront shot.'
        ]
      },
      {
        heading: 'Light, weather and time of day',
        paragraphs: [
          'Everything is outdoors, so the quality of a photograph depends far more on conditions than on a magic coordinate. Check National Weather Service Boulder forecasts and warnings, and think about low winter sun, snow, rain on brick paving and the shade cast by buildings.',
          'This guide does not publish a "golden hour" time, a sunrise direction or a crowd forecast, because none was verified for the site. Choose a time that suits the conditions on the day and the hours of the businesses you want in the frame.'
        ]
      },
      {
        heading: 'A practical shot sequence',
        paragraphs: ['One pass in each direction covers most compositions without repeated backtracking.'],
        bullets: [
          'A long view along the four blocks from 11th or 15th Street.',
          'A close study of the brick paving and a gathering space.',
          'A crossing view that shows the pedestrian core meeting a normal road.',
          'A detail of a bench or drinking fountain as a documented park feature, without claiming its current condition.',
          'A return pass along the opposite side for the reverse light.',
          'Any current works notice or temporary change, captioned with its date.'
        ]
      },
      {
        heading: 'Attribution and what the published photo cannot show',
        paragraphs: [
          'This site publishes one verified photograph: Pearl Street Mall (55028393862).jpg by Jesse James, 17 December 2025, licensed CC BY 4.0, cropped, resized and recompressed. It is reproduced with the required attribution. If you reuse it, carry the author, source, licence and note of changes with it.',
          'The image is a historical streetscape. It does not show today’s tenants, entrances, artworks or access conditions, and the photography licence does not independently clear every depicted person, sign or building. Do not use it to identify a current business or to claim a facility exists.'
        ],
        note: 'Older crowd, performer and courthouse-lawn image references on this site were retired. No other photograph is published as verified.'
      }
    ],
    faqs: [
      ['What is the best photo spot on Pearl Street Mall?', 'The most dependable composition is a long view down the four pedestrian blocks from 11th or 15th Street. This guide does not publish a ranked list of unverified spots.'],
      ['Can I reuse the photograph on this site?', 'It is by Jesse James, 17 December 2025, CC BY 4.0, cropped, resized and recompressed. Reuse requires attribution with the author, source, licence and a note of changes. Check the source link below.'],
      ['Does the published photo show current shops?', 'No. It is explicitly a historical streetscape, not a current tenant, entrance or artwork inventory.'],
      ['When is the best light?', 'That depends on season, weather and the side of the street. Check the National Weather Service Boulder forecast and choose a time that fits the conditions on the day.'],
      ['Are there rules about photographing the mall?', 'Downtown Boulder publishes mall rules and the City publishes notices about works. Check current rules and signs, especially for commercial shoots or identifiable people.']
    ],
    sources: [
      s(SRC.photo, 'Wikimedia Commons: Pearl Street Mall photograph by Jesse James'),
      s(SRC.licence, 'Creative Commons: CC BY 4.0 licence'),
      s(SRC.mall, 'City of Boulder: four-block park identity and brick paving'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.rules, 'Downtown Boulder: published mall rules')
    ],
    related: ['/architecture/', '/history/', '/public-art/', '/walking-tour/', '/seasonal-guide/']
  },

  {
    slug: 'events', path: '/events/', group: GROUP.experience, batch: 2,
    title: 'Pearl Street Mall Events & Festivals | Boulder',
    h1: 'Pearl Street Mall Events & Festivals',
    description: 'How to check current events and festivals around Pearl Street Mall in Boulder, including the Downtown Boulder calendar, City works notices and the 2027 anniversary context.',
    lede: 'Events are the most perishable information a visitor can look up. This guide does not publish a festival calendar it has not verified; it explains which sources are current, what a calendar link does and does not prove, and how the 2027 plans should be read.',
    intent: 'Verify an event date and its access conditions before travelling.',
    facts: [
      ['Current calendar', 'Downtown Boulder event calendar (linked below)'],
      ['Verified event list', 'None published — no dates were checked'],
      ['Place type', 'Four-block outdoor pedestrian street and city park'],
      ['2027 context', 'Preparation for maintenance and anniversary work; not a programme'],
      ['Also check', 'Business hours, parking terms, weather and City notices'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'A calendar link is a starting point, not a confirmation',
        paragraphs: [
          'The Downtown Boulder event calendar is the planning link used on this site. An entry in a calendar still needs a date, an organiser and current access information; a calendar link alone is not evidence that a programme is running today.',
          'This guide deliberately does not list festival names, dates, ticket prices or parade routes. Those details change every season and were not verified in the 2026-10-30 review.'
        ],
        note: 'Verification status: no specific event, date, price, road closure, performer or attendance figure is claimed on this page.'
      },
      {
        heading: 'Four checks before you travel for an event',
        paragraphs: ['Work through these in order.'],
        bullets: [
          'Confirm the event on the organiser’s own current listing for your exact date.',
          'Check whether a ticket, registration or booking is required.',
          'Read current City notices for works, access changes or temporary barriers.',
          'Confirm the businesses, restrooms and transport you plan to use that day.'
        ]
      },
      {
        heading: 'The practical surroundings',
        paragraphs: [
          'The four pedestrian blocks sit between 11th and 15th Streets, and the intersecting streets still carry traffic. An event does not make all of downtown car-free, so use normal pedestrian crossings and follow temporary signage.',
          'Parking terms, business hours and weather all change the experience. The City publishes free weekend and city-holiday parking in its downtown garages with exceptions, and warns of 2026 repair work; Downtown Boulder says store hours vary. Check National Weather Service Boulder before an outdoor plan.'
        ]
      },
      {
        heading: 'Reading the 2027 anniversary carefully',
        paragraphs: [
          'The City’s June 2026 update describes assessment and preparation for 2027 maintenance and anniversary work on the mall. Its 28 August 2026 announcement of the 2027 Recommended Budget mentions renovations to the 1500 Pearl Parking Garage. A budget recommendation is not an approved schedule.',
          'Neither document confirms a festival programme, a closure, a completed rebuild or a visitor impact. Any page about the anniversary should be updated as official information changes, and should clearly separate published plans from completed work.'
        ]
      }
    ],
    faqs: [
      ['What events are on at Pearl Street Mall this month?', 'This guide has not verified a current event list. Use the Downtown Boulder event calendar for your date and confirm the details with the organiser.'],
      ['Will there be a 50th anniversary celebration in 2027?', 'The City describes preparation for 2027 maintenance and anniversary work, but no specific celebration, date or programme is confirmed here. Check current official material.'],
      ['Do events close the mall or the roads?', 'No specific closure is confirmed here. The cross streets still carry traffic and current City notices are the authority on temporary access changes.'],
      ['Is parking free during events?', 'The City publishes a free weekend and city-holiday arrangement for downtown garages with exceptions. Event-day terms were not verified; check the exact facility and date.'],
      ['Do I need a ticket?', 'That depends on the event. This guide does not sell tickets or publish unverified prices. Check the organiser’s listing.']
    ],
    sources: [
      s(SRC.events, 'Downtown Boulder event calendar'),
      s(SRC.refresh, 'City of Boulder: refresh project, June 2026 update and 2027 preparation'),
      s(SRC.budget, 'City of Boulder: 2027 Recommended Budget announcement'),
      s(SRC.garages, 'City of Boulder: garage directory and construction notices'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/street-performers/', '/hours/', '/parking/', '/dinner/', '/seasonal-guide/', '/history/']
  },

  {
    slug: 'half-day-itinerary', path: '/half-day-itinerary/', group: GROUP.trips, batch: 2,
    title: 'Half-Day Downtown Boulder Itinerary | Pearl Street',
    h1: 'Half-Day Downtown Boulder Itinerary',
    description: 'A flexible half-day in downtown Boulder: park or arrive by bus, walk the four pedestrian blocks, add a confirmed meal and one separately planned nearby stop.',
    lede: 'A half day is enough to see the four pedestrian blocks properly and add one more thing without rushing. This itinerary uses only verified locations and asks you to confirm the two moving parts — a business and a separate destination — before you set out.',
    intent: 'Combine the four-block walk, a confirmed meal and one nearby stop.',
    facts: [
      ['Structure', 'Arrival → four-block walk → meal → one separate destination'],
      ['Walk', 'Pearl Street between 11th and 15th Streets'],
      ['Meal', 'Choose from three documented businesses or the dining directory'],
      ['Possible extra stop', 'Museum of Boulder, as a separate destination'],
      ['Timing', 'Flexible morning or afternoon; no fixed durations promised'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Morning or early afternoon: arrive and orient',
        paragraphs: [
          'Choose one real arrival point: a City garage such as 11th and Walnut or 15th and Pearl, or an RTD service using the station beside the 14th and Walnut garage. Check the current rates, payment instructions and works notices for the facility, or RTD’s current journey information for the bus.',
          'Do not navigate to 1303 Pearl St as if it were an entrance. It is the Maps listing and the Downtown Boulder Visitor Information Center address near 13th Street — a useful midpoint reference on the four blocks, not a gate.'
        ]
      },
      {
        heading: 'Late morning: walk the four blocks',
        paragraphs: [
          'Walk 11th to 15th in one direction and return along the other side, using normal pedestrian crossings at each intersecting street. Notice the brick paving and gathering spaces the City describes, and the 1977 dedication as a public park.',
          'Keep the walk outdoors in mind: check National Weather Service Boulder forecasts and warnings, plan shade and layers, and use the City-listed benches and drinking fountains if they suit your route. Their current condition was not surveyed here.'
        ]
      },
      {
        heading: 'Midday: anchor the plan to a confirmed meal',
        paragraphs: [
          'The three dining businesses documented on this site are OAK at Fourteenth at 1400 Pearl St, The Kitchen Boulder at 1039 Pearl St and Postino Boulder at 1468 Pearl St, Suite 110. They are separate businesses with their own meal periods, prices and reservations.',
          'Confirm the opening time and current menu with the operator, or use the Downtown Boulder dining directory for another option. A coffee stop works the same way: find a current business and verify its hours. This guide does not claim table availability.'
        ]
      },
      {
        heading: 'Afternoon: one separate destination, planned on its own terms',
        paragraphs: [
          'The Museum of Boulder is documented on this site as a separate destination: its operator lists 2205 Broadway at Broadway and Pine. Check its own opening, admission, exhibitions and access arrangements before adding it to the day. It is not described here as a short walk from the mall.',
          'Boulder Creek Path is another separate option, described by the City as a multi-use path with its own route conditions and crossings. Whichever you choose, plan the leg independently, confirm the return transport and leave time for a change of weather. Do not assume every attraction in Boulder sits beside the four blocks.'
        ],
        note: 'No fixed minute-by-minute timetable, walking time, distance or admission total is published here; those figures were not verified. The itinerary is an order of decisions, not a timed tour.'
      }
    ],
    faqs: [
      ['How long should I allow?', 'This guide does not promise a fixed duration. Use a morning or an afternoon, and let a confirmed meal time and your chosen extra stop set the pace.'],
      ['Where should I park for a half day?', 'Choose a City garage near your preferred starting block, then check current rates, payment instructions and works notices. The 14th and Walnut garage sits beside the RTD bus station if you prefer transit.'],
      ['Can I fit a museum into a half day?', 'Possibly, but plan it as a separate destination. The Museum of Boulder’s operator lists 2205 Broadway at Broadway and Pine; check its own opening, admission and access before adding it.'],
      ['Should I book a restaurant?', 'That depends on the business. Confirm the current meal periods and reservation policy with the operator; this guide does not take bookings.'],
      ['What if the weather changes?', 'Shift the four-block walk to the clearest part of the day, use an indoor stop as the anchor, and check National Weather Service Boulder forecasts and warnings.']
    ],
    sources: [
      s(SRC.garages, 'City of Boulder: garage locations, payment and works notices'),
      s(SRC.rtd, 'RTD: current journey information'),
      s(SRC.mall, 'City of Boulder: 1977 dedication and four-block park'),
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s(SRC.museum, 'Museum of Boulder: operator visit information'),
      s(SRC.creek, 'City of Boulder: Boulder Creek Path'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/one-hour-itinerary/', '/one-day-boulder/', '/walking-tour/', '/restaurants/', '/nearby/museum-of-boulder/', '/map/']
  }
];
