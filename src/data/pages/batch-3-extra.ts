import type { GuidePage } from './shared';
import { GROUP, s, SRC } from './shared';

// Batch 3 (part 2) — four trip-planning pages.
export const batch3Extra: GuidePage[] = [
  {
    slug: 'one-hour-itinerary', path: '/one-hour-itinerary/', group: GROUP.trips, batch: 3,
    title: 'One Hour on Pearl Street Mall | Boulder Short Visit',
    h1: 'One Hour on Pearl Street Mall',
    description: 'A focused one-hour visit to Pearl Street Mall in Boulder: one pass along the four pedestrian blocks, the historic streetscape and a practical exit.',
    lede: 'One hour is enough for a single, unhurried pass along the four pedestrian blocks. The trick is to avoid treating the Maps pin as a destination: pick an end, walk the line, and leave from the end you reach.',
    intent: 'See the four blocks properly in a single, short visit.',
    image: true,
    facts: [
      ['Focus', 'The four pedestrian blocks and the historic streetscape'],
      ['Route', '11th to 15th Street, or in reverse'],
      ['Cross streets', 'Still carry traffic; use normal crossings'],
      ['Midpoint', '1303 Pearl St Visitor Information Center reference near 13th Street'],
      ['Cost', 'No general-admission tariff found'],
      ['Timing', 'An order of stops, not a timed tour']
    ],
    sections: [
      {
        heading: 'What one hour can realistically cover',
        paragraphs: [
          'With a short window, the four blocks themselves are the attraction. The City identifies the pedestrian core as Pearl Street between 11th and 15th Streets, dedicated as a public park on 6 August 1977, with brick paving and gathering spaces. A single pass and a slower return covers both sides of the street.',
          'What one hour cannot cover is a meal, a museum and a shopping list at once. Leave those for the half-day or one-day plans. A short visit is more satisfying when it has one subject.'
        ]
      },
      {
        heading: 'A simple sequence',
        paragraphs: ['Choose the direction that matches where you arrive, then follow this order.'],
        bullets: [
          '1. Arrive at 11th or 15th Street from a chosen garage, bus stop or walk.',
          '2. Take one long look down the pedestrian core before you start.',
          '3. Walk one side of all four blocks, noticing the brick paving and gathering spaces.',
          '4. Use normal pedestrian crossings at each intersecting street.',
          '5. Near 13th Street, note 1303 Pearl St as a reference, not as an entrance.',
          '6. Return along the opposite side for the reverse view.',
          '7. Leave from the far end rather than navigating back to the central pin.'
        ]
      },
      {
        heading: 'What to notice in a short walk',
        paragraphs: [
          'The street form is the story: a bounded, linear public space where cross streets still carry traffic. The City describes an effort to orient this part of downtown toward pedestrians, and the benches and drinking fountains it lists are part of that design.',
          'The City’s June 2026 update describes assessment and preparation for 2027 maintenance and anniversary work. If something looks temporary or changed, treat it as a current condition rather than as a contradiction of an older description.'
        ]
      },
      {
        heading: 'Checks that still matter with an hour',
        paragraphs: [
          'Arrival is the part most likely to waste a short visit. If you drive, check the City garage directory for the facility’s current rates, payment instructions and works notices. If you use the bus, the City identifies its 14th and Walnut garage beside the RTD bus station; use RTD’s current journey information.',
          'The walk is entirely outdoors. Check National Weather Service Boulder forecasts and warnings, and follow Downtown Boulder’s published mall rules on animals, bicycles, skating and smoking. Dismount bicycles on the pedestrian bricks.'
        ]
      }
    ],
    faqs: [
      ['Can I see Pearl Street Mall in an hour?', 'Yes, if you focus on one pass along the four blocks between 11th and 15th Streets and leave the shopping and dining for another visit.'],
      ['Where should I start?', 'At 11th or 15th Street, depending on where you arrive. 1303 Pearl St is a midpoint reference, not the required start.'],
      ['Do I have to cross roads?', 'Yes. Intersecting streets still carry traffic and require normal pedestrian crossings; the whole downtown area is not car-free.'],
      ['Is there an entry fee?', 'The review found no general-admission tariff for the public pedestrian space. Shopping, meals and parking are charged separately.'],
      ['What if it rains?', 'Shorten the outdoor pass and use a confirmed indoor stop instead. Check National Weather Service Boulder forecasts and warnings before setting out.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: 1977 dedication, brick paving and park amenities'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and 2027 preparation'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.garages, 'City of Boulder: garage directory and works notices'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/walking-tour/', '/half-day-itinerary/', '/one-day-boulder/', '/history/', '/map/']
  },

  {
    slug: 'one-day-boulder', path: '/one-day-boulder/', group: GROUP.trips, batch: 3,
    title: 'One Day in Boulder | Pearl Street & Nearby',
    h1: 'One Day in Boulder: Pearl Street & Nearby',
    description: 'A full-day Boulder plan built around the four pedestrian blocks, a confirmed meal and separately planned nearby destinations, with honest travel and verification checks.',
    lede: 'A full day works best as three clearly separated legs: the four pedestrian blocks, one anchored meal, and one or two separately planned destinations. Trying to treat everything in Boulder as a short walk from one Maps pin is what makes a day fall apart.',
    intent: 'Structure a full day without assuming every attraction is adjacent.',
    facts: [
      ['Structure', 'Four-block walk → confirmed meal → separate destination'],
      ['Urban core', 'Pearl Street between 11th and 15th Streets'],
      ['Separate options', 'Museum of Boulder, Boulder Creek Path, The People’s Crossing'],
      ['Arrival', 'City garage or RTD service, checked separately'],
      ['Timing', 'Morning / midday / afternoon, with no fixed durations'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Morning: the urban core',
        paragraphs: [
          'Choose a City garage or an RTD service and verify its current terms before setting out. Then walk the four blocks between 11th and 15th Streets in one direction and return along the other side, using normal crossings at each intersecting street.',
          'Use the morning for what only the mall offers: the brick paving and gathering spaces, the 1977 dedication as a public park, and the way a downtown street has been organised around people on foot. Check the weather and plan an indoor alternative.'
        ]
      },
      {
        heading: 'Midday: one confirmed anchor',
        paragraphs: [
          'Fix the middle of the day to something you can verify. The three dining businesses documented on this site are OAK at Fourteenth at 1400 Pearl St, The Kitchen Boulder at 1039 Pearl St and Postino Boulder at 1468 Pearl St, Suite 110. Each has its own meal periods, prices and reservations.',
          'Alternatively, use the Downtown Boulder dining directory to find another venue and confirm its hours directly. A coffee stop works the same way. Do not build the afternoon around a business whose opening you have not checked.'
        ]
      },
      {
        heading: 'Afternoon: destinations that are genuinely separate',
        paragraphs: [
          'The Museum of Boulder’s operator lists 2205 Broadway at Broadway and Pine, with its own opening, admission, exhibitions and access. The City describes Boulder Creek Path as a separate multi-use path with its own route conditions, crossings and underpass restrictions. The City lists The People’s Crossing as a trailhead giving access to the Red Rocks trail network, with trail alerts and terrain to consider.',
          'Pick one, not all three. Confirm its hours and alerts, work out the leg from where you actually are, and check the weather for an outdoor option. This guide has not verified a walking time between the mall and any of these places.'
        ],
        note: 'Five other nearby destination pages on this site — Boulder Theater, Boulder County Courthouse, Hotel Boulderado, Boulder Dushanbe Teahouse and Boulder Public Library — are explicitly marked as not independently verified. Use them as research starting points, not as confirmed itinerary stops.'
      },
      {
        heading: 'Evening: close the loop deliberately',
        paragraphs: [
          'If you stay for dinner, confirm the venue’s evening hours and reservation policy, then check your garage’s evening terms or the return service. Google Maps listed 24 hours in the 2026-10-30 snapshot, but that place listing does not confirm lighting, night-time safety or any business’s timetable.',
          'The City publishes free weekend and city-holiday parking in its downtown garages with exceptions, and warns of 2026 repair work. Check the exact facility for the day. Finish with a short second walk of the four blocks if the weather and daylight allow.'
        ]
      }
    ],
    faqs: [
      ['Can I visit all the nearby attractions in one day?', 'Not realistically. The Museum of Boulder, Boulder Creek Path and The People’s Crossing are separate destinations with their own hours, routes and conditions. Choose one and plan it properly.'],
      ['Where should I park for a full day?', 'Choose a City garage near your preferred starting block, then check current rates, payment instructions, evening terms and works notices. The 14th and Walnut garage sits beside the RTD bus station if you prefer transit.'],
      ['Is everything within walking distance of the mall?', 'No. This guide has not verified walking times between the four blocks and any separate destination, and it explicitly warns against describing them as an all-sights circle.'],
      ['Should I book restaurants in advance?', 'That depends on the business. Confirm current meal periods and reservations with the operator; this guide does not take bookings.'],
      ['What is the biggest planning mistake?', 'Treating 1303 Pearl St as a single entrance and assuming every Boulder attraction is beside it. The City defines a four-block linear core, and the other places need their own legs.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: four-block park identity and 1977 dedication'),
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s(SRC.museum, 'Museum of Boulder: operator visit information'),
      s(SRC.creek, 'City of Boulder: Boulder Creek Path'),
      s(SRC.crossing, 'City of Boulder: The People’s Crossing trailhead'),
      s(SRC.garages, 'City of Boulder: garage directory and construction notices'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/half-day-itinerary/', '/one-hour-itinerary/', '/nearby/museum-of-boulder/', '/nearby/boulder-creek-path/', '/hotels/', '/map/']
  },

  {
    slug: 'hotels', path: '/hotels/', group: GROUP.trips, batch: 3,
    title: 'Hotels Near Pearl Street Mall | Boulder Stay Guide',
    h1: 'Hotels Near Pearl Street Mall',
    description: 'How to choose accommodation for a Pearl Street Mall visit in Boulder: location, transport, hours and accessibility questions, without unverified hotel rankings or affiliate links.',
    lede: 'Choosing where to stay near a four-block pedestrian street is mostly a question of what you want to walk to, and when. This guide does not publish unverified hotel names, prices or ratings; it gives you a framework for checking any property yourself.',
    intent: 'Choose a base by location and verified transport, not by an unverified ranking.',
    facts: [
      ['Verified hotel list', 'None published — no property was checked in this review'],
      ['Area to orient by', 'Pearl Street between 11th and 15th Streets'],
      ['Maps reference', '1303 Pearl St is a visitor-centre address, not a hotel district'],
      ['Transport questions', 'Garage, RTD service and walking route'],
      ['Commercial links', 'None; this guide has no affiliate or booking relationship'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Why there is no "top 10 hotels" list here',
        paragraphs: [
          'A hotel list requires current names, addresses, rates, availability, cancellation terms, accessibility and review data. None of that was verified in the 2026-10-30 review, and a plausible-looking list would mislead a traveller faster than almost any other page on a tourism site.',
          'This guide is independent, unofficial and nonprofit. It has no affiliate links, no booking relationship and no commercial promotion to disguise as an objective ranking. Use a current booking platform and the property’s own site for the actual decision.'
        ],
        note: 'Verification status: no hotel name, rate, star rating, amenity, availability or review claim is published on this page.'
      },
      {
        heading: 'Ask location questions that a map can answer',
        paragraphs: ['Before comparing prices, establish what "near the mall" actually means for a given property.'],
        bullets: [
          'Which end of the 11th–15th Street core is it closest to?',
          'Does the walking route require crossing busy streets?',
          'Is the property on Pearl Street itself or in the wider downtown area?',
          'How far is the nearest City garage or RTD stop?',
          'Is there a step-free route to the places you plan to visit?',
          'Will the walk suit you after dark or in bad weather?'
        ]
      },
      {
        heading: 'Match a base to your actual itinerary',
        paragraphs: [
          'If your day is built around the four blocks, a base that makes a morning and an evening walk easy is more valuable than one that minimises a single driving distance. If your day includes the Museum of Boulder at 2205 Broadway, Boulder Creek Path or The People’s Crossing trailhead, those are separate legs with their own transport questions.',
          'Confirm parking terms with the property as well. The City publishes free weekend and city-holiday parking in its downtown garages with exceptions and warns of 2026 repair work, but a hotel’s own parking arrangement is a separate commercial matter.'
        ]
      },
      {
        heading: 'A verification routine before you book',
        paragraphs: [
          'Confirm the property’s current address, check-in times, cancellation terms, parking charges, accessibility provisions and whether any advertised restaurant or facility is open on your dates. Then check the walking route to 11th or 15th Street on a current map service.',
          'If a listing calls itself "steps from Pearl Street Mall", treat that as marketing, not a measurement. The City defines a four-block linear core; a single distance to a Maps pin at 1303 Pearl St does not describe the whole place.'
        ]
      }
    ],
    faqs: [
      ['Which hotels are closest to Pearl Street Mall?', 'This guide has not verified a hotel inventory and does not publish one. Use a current booking platform, then confirm the address and walking route with the property.'],
      ['Does this site earn a commission on bookings?', 'No. It is an independent, unofficial guide with no affiliate links or booking relationships.'],
      ['Is 1303 Pearl St the centre of a hotel district?', 'It is the Maps listing and the Downtown Boulder Visitor Information Center address near 13th Street. It is a reference point within the four blocks, not a hotel zone.'],
      ['Should I choose a hotel with parking?', 'That depends on your itinerary. Check the property’s own parking terms and the City garage directory, including current rates and works notices, before deciding.'],
      ['Can I walk to the nearby attractions from a downtown hotel?', 'This guide has not verified walking times to the Museum of Boulder, Boulder Creek Path or The People’s Crossing. Plan each as a separate leg using a current map service.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity'),
      s(SRC.garages, 'City of Boulder: garage directory, rates and construction notices'),
      s(SRC.rtd, 'RTD: current journey information'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/one-day-boulder/', '/half-day-itinerary/', '/directions/', '/parking/', '/nearby/hotel-boulderado/']
  },

  {
    slug: 'seasonal-guide', path: '/seasonal-guide/', group: GROUP.trips, batch: 3,
    title: 'Pearl Street Mall in Winter & Rain | Seasonal Guide',
    h1: 'Pearl Street Mall in Winter & Rainy Weather',
    description: 'A seasonal guide to Pearl Street Mall in Boulder: weather, daylight, brick paving, clothing, indoor alternatives and the checks that matter in winter or rain.',
    lede: 'The four pedestrian blocks are entirely outdoors, so weather is not a side note — it changes what the visit feels like. This guide does not invent climate averages; it explains how to use current forecasts and which verified indoor options exist.',
    intent: 'Prepare an outdoor walk for winter, rain, snow and short daylight.',
    facts: [
      ['Setting', 'Four outdoor pedestrian blocks, 11th to 15th Street'],
      ['Surface', 'Brick paving and gathering spaces, per the City'],
      ['Forecast source', 'National Weather Service Boulder'],
      ['Indoor alternative', 'Museum of Boulder, planned separately'],
      ['Climate averages', 'Not published — not verified in this review'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Why weather changes the plan',
        paragraphs: [
          'There is no roof over the pedestrian core. The City describes brick paving and gathering spaces, and lists benches and drinking fountains, but a bench is not shelter. Rain, snow, strong sun and low winter light all affect how long a walk is comfortable and what you need to wear.',
          'This guide does not publish temperature averages, snowfall totals or a "best month" ranking, because no climate dataset was verified. Use National Weather Service Boulder forecasts and warnings for the actual day.'
        ]
      },
      {
        heading: 'A practical preparation list',
        paragraphs: ['Work through this before an outdoor visit in unsettled conditions.'],
        bullets: [
          'Check National Weather Service Boulder forecasts and warnings on the morning.',
          'Plan layers, footwear suitable for wet or uneven brick paving, and sun protection.',
          'Shorten the four-block walk and use an indoor anchor in the middle.',
          'Confirm that the businesses you want are open on that date.',
          'Check for current City works notices that could add a detour.',
          'Confirm your parking or transit plan, including the return leg.',
          'Allow for shorter daylight when planning an evening walk.'
        ]
      },
      {
        heading: 'Indoor anchors that are actually documented',
        paragraphs: [
          'The three dining businesses documented on this site — OAK at Fourteenth, The Kitchen Boulder and Postino Boulder — are indoor venues with their own hours and reservations. Confirm the operator’s timetable before relying on one as a weather refuge.',
          'The Museum of Boulder is documented as a separate destination at 2205 Broadway, with its own opening, admission, exhibitions and access arrangements. It is a possible indoor anchor, but it needs its own verification and its own travel leg. Do not assume it is beside the four blocks.'
        ]
      },
      {
        heading: 'Winter, events and the 2027 context',
        paragraphs: [
          'A 24-hour Google Maps listing in the 2026-10-30 snapshot does not tell you about lighting, night-time safety, cleared surfaces or whether a business is open. In winter, confirm evening hours, the return service and garage terms explicitly.',
          'The City describes assessment and preparation for 2027 maintenance and anniversary work, and the Downtown Boulder event calendar is the planning link for seasonal programmes. Check current City notices and the organiser’s own listing, because a seasonal event is a dated activity, not a permanent feature.'
        ],
        note: 'No temperature, snowfall, sunshine-hour, sunset-time or crowd-level figure is published on this page. Those were not verified and would become stale.'
      }
    ],
    faqs: [
      ['Is Pearl Street Mall open in winter?', 'It is an outdoor public pedestrian street. Check current City notices, business hours and National Weather Service Boulder forecasts and warnings before an outdoor visit.'],
      ['Is the walk covered if it rains?', 'No. The four blocks are outdoors with brick paving and gathering spaces. Plan a shorter walk and a confirmed indoor stop.'],
      ['Does this guide give average temperatures?', 'No. No climate dataset was verified in this review. Use National Weather Service Boulder for current conditions.'],
      ['What indoor options are documented?', 'Three dining businesses with operator links and the Museum of Boulder as a separate destination. Both need their own hours and travel checks.'],
      ['Does a 24-hour listing mean it is lit at night?', 'No. The 24-hour Google Maps listing in the 2026-10-30 snapshot does not confirm lighting, night-time safety or live access during works.']
    ],
    sources: [
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.mall, 'City of Boulder: brick paving, gathering spaces and listed amenities'),
      s(SRC.visitorFaq, 'Downtown Boulder: business hours and visitor information'),
      s(SRC.museum, 'Museum of Boulder: operator visit information'),
      s(SRC.events, 'Downtown Boulder event calendar'),
      s(SRC.refresh, 'City of Boulder: refresh project and 2027 preparation')
    ],
    related: ['/family-guide/', '/hours/', '/one-day-boulder/', '/nearby/museum-of-boulder/', '/photo-spots/', '/accessibility/']
  }
];
