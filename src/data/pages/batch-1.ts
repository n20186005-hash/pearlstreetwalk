import type { GuidePage } from './shared';
import { GROUP, s, SRC } from './shared';

// Batch 1 — P0: the practical decisions visitors already search for.
// Every factual claim below comes from a source already checked on the
// existing single-page guide (2026-10-30). Unknowns are labelled, not guessed.
export const batch1: GuidePage[] = [
  {
    slug: 'parking', path: '/parking/', group: GROUP.practical, batch: 1,
    title: 'Pearl Street Mall Parking Guide | Downtown Boulder',
    h1: 'Pearl Street Mall Parking Guide',
    description: 'Where to park for Pearl Street Mall in Boulder: city garages, metered street parking, free-period rules, construction notices and how to choose a facility before you set out.',
    lede: 'There is no single car park called "Pearl Street Mall parking". The four pedestrian blocks sit inside downtown Boulder, so parking means choosing one real facility from a mix of city garages, metered street spaces and private options, each with its own rates and conditions.',
    intent: 'Choose one real parking facility and understand its terms before arriving.',
    facts: [
      ['Mall extent', 'Four blocks of Pearl Street between 11th and 15th Streets'],
      ['Maps reference', '1303 Pearl St, Boulder, CO 80302 — a Visitor Information Center address, not a car park'],
      ['Admission', 'No general-admission tariff found for the public pedestrian space'],
      ['City garages', 'Five downtown facilities listed by the City, including 15th and Pearl'],
      ['Free periods', 'Published for City downtown garages on weekends and city holidays, with exceptions'],
      ['Reviewed', '2026-10-30; rates, payment and works notices change']
    ],
    sections: [
      {
        heading: 'Decide which block you want to start from',
        paragraphs: [
          'The most common parking mistake is treating 1303 Pearl St as the entrance to a single building. The City of Boulder identifies the pedestrian mall as four blocks between 11th and 15th Streets; Pearl Street and downtown continue beyond that core. Cross streets still require normal pedestrian crossings, so the whole area is not one car-free loop.',
          'Pick the block that matches your first stop, then choose the nearest suitable facility. A garage near 15th Street suits an east-end start; one near 11th and Walnut suits a west-end start. That single decision matters more than hunting for the closest possible space to a Maps pin.'
        ]
      },
      {
        heading: 'City-owned garages named in the City directory',
        paragraphs: [
          'The City parking directory lists downtown garages at the following intersections. These are directory entries, not live availability, and the City was warning of 2026 repair work at the time of review.'
        ],
        bullets: [
          '10th and Walnut — a west-side approach to the four blocks',
          '11th and Walnut — close to the western end of the pedestrian core',
          '11th and Spruce — another west-side option one street north',
          '14th and Walnut — beside the RTD bus station',
          '15th and Pearl — at the eastern end of the pedestrian core'
        ],
        note: 'A directory entry is not confirmation that a garage is open, that a space is free or that a published rate still applies. Check the City construction notices and the facility’s posted rates, service fees and payment instructions before setting out.'
      },
      {
        heading: 'Street parking, private garages and free periods',
        paragraphs: [
          'The City also describes metered street parking and payment methods. Downtown includes private garages and other facilities whose terms differ from City-owned ones. Do not transfer a City rule to a private car park, a street space or a Depot Square Boulder Junction facility.',
          'The City publishes free weekend and city-holiday parking in its downtown garages, subject to exceptions. "Free" is a published arrangement with conditions, not a promise about every space in downtown Boulder. If the saving matters to your plan, confirm the exact date, the exact garage and the posted signage.'
        ]
      },
      {
        heading: 'Works, budgets and why this page avoids a price table',
        paragraphs: [
          'The City’s 28 August 2026 announcement of its 2027 Recommended Budget listed renovations to the 1500 Pearl Parking Garage. A budget recommendation is not an approved closure, a construction date or a statement about visitor impact. The separate Pearl Street Mall Refresh project describes assessment and preparation for 2027 maintenance and anniversary work, not a completed rebuild.',
          'Because rates, payment systems, closures and free-day rules all change, this guide links to the City’s own pages instead of copying a price table that would go stale. Treat the linked pages as the current record and this page as the decision framework.'
        ]
      },
      {
        heading: 'A short checklist before you drive',
        paragraphs: ['Work through these in order and the parking decision usually resolves itself in a couple of minutes.'],
        bullets: [
          'Choose your starting block: 11th or 15th Street.',
          'Open the City garage directory and filter by that end of the mall.',
          'Read the current construction notice for the facility you picked.',
          'Check posted rates, service fees and payment instructions for the day of your visit.',
          'Confirm whether a free-period arrangement actually applies to that facility.',
          'If you need step-free access, confirm the route from that garage before arrival.'
        ]
      }
    ],
    faqs: [
      ['Is there parking at 1303 Pearl St?', '1303 Pearl St is the Maps listing and the Downtown Boulder Visitor Information Center address near 13th Street. It is a useful reference point, not a single entrance and not a car park. Choose a named facility from the City directory instead.'],
      ['Is parking free on weekends?', 'The City publishes free weekend and city-holiday parking in its downtown garages, with exceptions. The arrangement does not automatically apply to private garages, metered street spaces or Depot Square Boulder Junction. Confirm the exact facility and date.'],
      ['Which garage is closest to the mall?', 'The 15th and Pearl garage sits at the eastern end of the four-block core, while 11th and Walnut and 11th and Spruce serve the western end. "Closest" depends on the block you want first; check current works notices before choosing.'],
      ['Does the mall charge admission?', 'This is a public pedestrian street and city park. The 2026-10-30 review found no general-admission tariff. Shopping, meals, parking and separately ticketed programmes have their own charges.'],
      ['Can I rely on a parking price quoted on a travel site?', 'No. Use the City garage directory and the posted terms at the facility. This guide deliberately does not reproduce a rate table because rates, fees and free-period rules change.']
    ],
    sources: [
      s(SRC.garages, 'City of Boulder: garage locations, payment, rates and construction notices'),
      s(SRC.mall, 'City of Boulder: Pearl Street Mall as a public park'),
      s(SRC.budget, 'City of Boulder: 2027 Recommended Budget announcement (not a works schedule)'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information and business hours'),
      s(SRC.maps, 'Google Maps place listing used as a location reference')
    ],
    related: ['/parking-garages/', '/free-parking/', '/map/', '/directions/', '/public-transportation/', '/accessibility/']
  },

  {
    slug: 'parking-garages', path: '/parking-garages/', group: GROUP.practical, batch: 1,
    title: 'Parking Garages Near Pearl Street Mall | Boulder Comparison',
    h1: 'Best Parking Garages Near Pearl Street Mall',
    description: 'Compare the five City of Boulder downtown garages near Pearl Street Mall by intersection, which end of the four blocks they serve and what to check before you park.',
    lede: 'Five City-listed downtown garages sit within reach of the four pedestrian blocks. Rather than rank them by a single number, this page compares what each intersection is useful for, so you can match a garage to the visit you actually plan.',
    intent: 'Compare the five City garages by location and likely use case.',
    facts: [
      ['Garages listed', 'Five City downtown facilities'],
      ['West-end options', '10th and Walnut, 11th and Walnut, 11th and Spruce'],
      ['Transit-adjacent', '14th and Walnut, beside the RTD bus station'],
      ['East-end option', '15th and Pearl'],
      ['Current works', 'City warned of 2026 repair work; check notices'],
      ['Prices and spaces', 'Not verified here — use the City directory and posted signs']
    ],
    sections: [
      {
        heading: 'Why a comparison is more useful than a ranking',
        paragraphs: [
          'A "best garage" answer depends on which end of the mall you want, whether you are arriving by bus, whether you need step-free access and whether a particular facility is affected by works. A ranked list would hide those conditions behind a false certainty.',
          'The City identifies the pedestrian core as four blocks between 11th and 15th Streets. That gives a simple west-to-east frame for comparing facilities: the 10th/11th Street cluster serves the west, 14th and Walnut serves the transit side, and 15th and Pearl serves the east.'
        ]
      },
      {
        heading: 'The five City-listed garages, by approach',
        paragraphs: ['The City parking directory names these downtown facilities. Use the list as a shortlist, then verify the live terms for the one you choose.'],
        bullets: [
          '10th and Walnut — useful if you want to walk into downtown from the west and see the wider area before reaching the bricks.',
          '11th and Walnut — the closest of the west-side pair to the western end of the pedestrian core.',
          '11th and Spruce — a parallel west-side approach one street north of Walnut.',
          '14th and Walnut — the City identifies this garage beside the RTD bus station, so it suits mixed car-and-transit plans.',
          '15th and Pearl — at the eastern end of the four blocks, convenient for starting at 15th and walking west.'
        ]
      },
      {
        heading: 'What to compare on the day',
        paragraphs: [
          'The City directory covers locations, payment, rates and construction notices, but a directory entry is not a live inventory. Private garages in the same area operate under different terms, and metered street parking is a separate system again.',
          'For each candidate, compare the walking route to your chosen block, the posted rate and any service fee, the payment method, the current works notice and whether a free-period arrangement applies. If accessibility matters, confirm the route from that specific garage rather than assuming a general "accessible" label.'
        ]
      },
      {
        heading: 'The 1500 Pearl Parking Garage specifically',
        paragraphs: [
          'The City’s 28 August 2026 announcement of its 2027 Recommended Budget listed renovations to the 1500 Pearl Parking Garage. That is a budget recommendation. It is not confirmation of approval, a closure, construction dates or visitor impact, and this guide does not treat it as one.',
          'If your plan depends on that facility, check the City’s current garage notices on the day. The separate Pearl Street Mall Refresh project concerns assessment and preparation for 2027 maintenance and anniversary work; it is not evidence that every downtown garage is closed.'
        ],
        note: 'No space counts, height limits, EV charging provision, overnight rules or current prices are stated on this page because they were not verified in the 2026-10-30 review.'
      }
    ],
    faqs: [
      ['Which garage is best for a short walk of the four blocks?', 'For a west-to-east walk, 11th and Walnut or 11th and Spruce is the natural start and 15th and Pearl the natural end. For the reverse direction, start at 15th and Pearl. Check works notices before relying on either.'],
      ['Which garage is next to the bus station?', 'The City identifies its 14th and Walnut garage as beside the RTD bus station. Use RTD’s current journey information for services and schedules; this guide does not promise a frequency or a walking time.'],
      ['Are all downtown garages free at the weekend?', 'The City publishes free weekend and city-holiday parking in its downtown garages, with exceptions. Private garages, street spaces and Depot Square Boulder Junction have separate terms. Verify the exact facility.'],
      ['Do you list current prices?', 'No. Rates, service fees and payment instructions change and were not independently verified here. The City garage directory and on-site signage are the current record.'],
      ['Is the mall a shopping-centre car park?', 'No. Pearl Street Mall is an outdoor pedestrian street and city park, not an indoor shopping centre with a single attached car park. Parking is a downtown decision.']
    ],
    sources: [
      s(SRC.garages, 'City of Boulder: downtown garage locations, payment, rates and notices'),
      s(SRC.budget, 'City of Boulder: 2027 Recommended Budget announcement'),
      s(SRC.rtd, 'RTD: current journey information'),
      s(SRC.mall, 'City of Boulder: four-block pedestrian park identity')
    ],
    related: ['/parking/', '/free-parking/', '/map/', '/public-transportation/', '/directions/']
  },

  {
    slug: 'free-parking', path: '/free-parking/', group: GROUP.practical, batch: 1,
    title: 'Free Parking in Downtown Boulder | Pearl Street Mall Rules',
    h1: 'Free Parking in Downtown Boulder',
    description: 'How the City of Boulder’s free weekend and holiday parking works near Pearl Street Mall, which facilities it does not cover and how to verify it for your visit date.',
    lede: 'Free parking near Pearl Street Mall is a published arrangement with conditions, not a general feature of downtown. This page explains what the City says, what it explicitly does not cover, and the checks that prevent an unexpected charge.',
    intent: 'Understand free-period rules and their exceptions before relying on them.',
    facts: [
      ['Published arrangement', 'Free weekend and city-holiday parking in City downtown garages'],
      ['Applies to', 'City-owned downtown garages, per the City’s published guidance'],
      ['Does not automatically cover', 'Private garages, metered street spaces, Depot Square Boulder Junction'],
      ['Exceptions', 'Published with exceptions — check the exact date and facility'],
      ['Admission to the mall', 'No general-admission tariff found for the public pedestrian space'],
      ['Reviewed', '2026-10-30; rules can change']
    ],
    sections: [
      {
        heading: 'Separate "free to park" from "free to visit"',
        paragraphs: [
          'The pedestrian mall is a public street and city park. The 2026-10-30 review found no general-admission tariff, so walking the four blocks is not a ticketed activity. Parking is a different system with its own charges, and shopping, meals and separately ticketed programmes are separate again.',
          'When a search result says "free parking in downtown Boulder", it usually refers to a City arrangement for City-owned garages, not to every space near the mall. Starting with that distinction avoids most surprises.'
        ]
      },
      {
        heading: 'What the City publishes',
        paragraphs: [
          'The City publishes free weekend and city-holiday parking in its downtown garages, with exceptions and separate terms elsewhere. The City garage directory is where locations, payment, rates and construction notices sit together — which is exactly why it should be the page you check before you travel.',
          'A published arrangement can change with a budget decision, a works programme or an event. This guide does not reproduce a calendar of free dates, because a copied calendar would become misleading the moment it changed.'
        ]
      },
      {
        heading: 'The exceptions that catch visitors out',
        paragraphs: ['These are the situations in which a "free weekend" assumption is least reliable.'],
        bullets: [
          'A private garage in the same block, which has its own operator and terms.',
          'A metered street space, which is a separate system from garage parking.',
          'A Depot Square Boulder Junction facility, which is not covered by the City garage arrangement.',
          'A city holiday that falls on a date with different posted terms.',
          'A garage affected by repair work or a temporary access change.',
          'A rate or service fee that applies even when the parking period itself is free.'
        ],
        note: 'This guide has not verified a current free-date calendar, an event-day surcharge list or a private-garage price list. Where a detail is unconfirmed, the City directory and posted signage are the authority.'
      },
      {
        heading: 'A verification routine that takes two minutes',
        paragraphs: [
          'First, confirm the exact calendar date of your visit and whether it is a weekend or City holiday. Second, open the City garage directory and identify the facility you intend to use. Third, read its current notice and posted rate. Fourth, check the signage when you arrive. If any step contradicts the assumption, choose another facility or budget for the charge.',
          'If you are arriving by bus instead, the City identifies its 14th and Walnut garage beside the RTD bus station, and RTD’s own journey information is the right place to plan the service. Parking and transit are separate decisions with separate sources.'
        ]
      }
    ],
    faqs: [
      ['Is parking free every weekend near Pearl Street Mall?', 'The City publishes free weekend and city-holiday parking in its downtown garages, subject to exceptions. It does not automatically cover private garages, street spaces or Depot Square Boulder Junction. Confirm the date and facility.'],
      ['Is walking on Pearl Street Mall free?', 'It is a public pedestrian street and city park, and the 2026-10-30 review found no general-admission tariff. Shops, restaurants, parking and ticketed events charge separately.'],
      ['Do I still need to check a price if parking is free?', 'Yes. Check posted rates, service fees, payment instructions and construction notices for the exact facility. A free-period arrangement can coexist with other charges or conditions.'],
      ['Where is the official rule published?', 'On the City of Boulder parking pages, including the garage directory with payment, rates and construction notices. This guide links to it rather than copying a date-specific table.'],
      ['Does the 2027 refresh project remove free parking?', 'No such effect has been confirmed. The refresh project concerns assessment and preparation for 2027 maintenance and anniversary work, and a 2027 budget recommendation mentions garage renovations. Neither is a published change to parking terms.']
    ],
    sources: [
      s(SRC.garages, 'City of Boulder: garage locations, payment, rates and free-period guidance'),
      s(SRC.budget, 'City of Boulder: 2027 Recommended Budget announcement (not a works schedule)'),
      s(SRC.refresh, 'City of Boulder: refresh project and four-block boundary'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information')
    ],
    related: ['/parking/', '/parking-garages/', '/map/', '/public-transportation/', '/hours/']
  },

  {
    slug: 'map', path: '/map/', group: GROUP.practical, batch: 1,
    title: 'Pearl Street Mall Map & Walking Entrances | Boulder',
    h1: 'Pearl Street Mall Map & Walking Entrances',
    description: 'Understand the four-block Pearl Street Mall map: 11th to 15th Street, the 1303 Pearl St reference point, garage locations, the transit node and where to start a walk.',
    lede: 'A map pin makes an outdoor pedestrian street look like one destination with one door. Pearl Street Mall is four blocks of a street, so the useful map is a line between 11th and 15th Streets with several possible entry points.',
    intent: 'Read the four-block layout and pick a practical place to start walking.',
    facts: [
      ['Core extent', 'Four blocks of Pearl Street between 11th and 15th Streets'],
      ['Cross streets', 'Still carry traffic; normal pedestrian crossings apply'],
      ['Maps pin', '1303 Pearl St, Boulder, CO 80302, near 13th Street'],
      ['Visitor centre', 'Downtown Boulder identifies one at that address'],
      ['Transit node', 'RTD bus station beside the 14th and Walnut garage'],
      ['Restrooms', 'Published north of the visitor centre at 13th and Pearl, and at 9th and Canyon']
    ],
    sections: [
      {
        heading: 'Read the mall as a line, not a point',
        paragraphs: [
          'The City of Boulder identifies the pedestrian mall as four blocks of Pearl Street between 11th and 15th Streets. Pearl Street continues beyond those blocks, and the intersecting streets are not pedestrianised. Use normal crossings at each one; the whole of downtown is not a single car-free route.',
          'That shape explains why different search results give different "entrances". A person arriving from a west-side garage, from the RTD station at 14th and Walnut or from the 1303 Pearl St pin is describing a different way onto the same four blocks.'
        ]
      },
      {
        heading: 'What the 1303 Pearl St pin actually means',
        paragraphs: [
          'Google Maps lists 1303 Pearl St, Boulder, CO 80302, and Downtown Boulder identifies the Visitor Information Center at that address near 13th Street. It is a helpful central reference and a place to orient yourself, not a sole entrance, a ticket gate or a street number covering every business on the mall.',
          'If a navigation app sends you to that pin, treat it as the middle of the walk. From there you can continue west toward 11th Street or east toward 15th Street, using the crossings at each intersecting street.'
        ]
      },
      {
        heading: 'Points worth marking on your own map',
        paragraphs: ['Before you set out, mark these on the same map view. They come from sources already checked on this site, not from a surveyed route.'],
        bullets: [
          'The 11th Street and 15th Street ends of the pedestrian core.',
          'The 1303 Pearl St Visitor Information Center reference near 13th Street.',
          'City garages at 10th and Walnut, 11th and Walnut, 11th and Spruce, 14th and Walnut and 15th and Pearl.',
          'The RTD bus station beside the 14th and Walnut garage.',
          'Published restroom locations north of the visitor centre at 13th and Pearl, and at 9th and Canyon.',
          'Benches, drinking fountains and accessible paths listed on the City park page.'
        ],
        note: 'This guide has not surveyed step-free entrances, gradients, temporary obstructions or individual shop doorways. Maps marked an accessible entrance on 2026-10-30, but that is a listing, not a route survey.'
      },
      {
        heading: 'Choosing a start and an end',
        paragraphs: [
          'For a straightforward linear walk, start at 15th and Pearl and walk west to 11th, or start at 11th and walk east to 15th. Either way you cross the same intersecting streets and can leave at any of them. This avoids doubling back to a single pin.',
          'A west-side garage such as 11th and Walnut makes the west-to-east version natural; the 15th and Pearl garage makes the reverse natural. The 14th and Walnut garage suits an arrival by bus. Confirm the current works notice for whichever facility you pick, because a garage directory entry is not a live access report.'
        ]
      }
    ],
    faqs: [
      ['Where does Pearl Street Mall start and end?', 'The City identifies four blocks between 11th and 15th Streets. Pearl Street continues beyond them, and the cross streets still require normal pedestrian crossings.'],
      ['Is 1303 Pearl St the entrance?', 'No. It is the Maps listing and the Downtown Boulder Visitor Information Center address near 13th Street. It is a useful reference point, not a sole entrance or an address covering every business.'],
      ['Can I walk the whole downtown area without crossing a road?', 'No. The intersecting streets still carry traffic and need normal crossings. Only the four-block core is the pedestrian mall as identified by the City.'],
      ['Where are public restrooms on the mall?', 'Downtown Boulder’s FAQ lists restrooms north of the Visitor Information Center at 13th and Pearl, with another location at 9th and Canyon. Live opening and accessible-cubicle status were not verified.'],
      ['Which map should I use?', 'Use the Google Maps place link for orientation and the City garage directory for facilities. This guide does not publish a custom interactive map because it has not surveyed current entrances or obstructions.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: park identity, four-block extent and listed amenities'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and refresh project'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information and restrooms'),
      s(SRC.garages, 'City of Boulder: garage locations'),
      s(SRC.maps, 'Google Maps place listing')
    ],
    related: ['/parking/', '/walking-tour/', '/directions/', '/public-transportation/', '/accessibility/', '/hours/']
  },

  {
    slug: 'hours', path: '/hours/', group: GROUP.practical, batch: 1,
    title: 'Pearl Street Mall Hours & Best Visiting Times | Boulder',
    h1: 'Pearl Street Mall Hours & Best Visiting Times',
    description: 'Pearl Street Mall hours explained: public pedestrian space versus individual shop, restaurant and visitor-service schedules, plus how to choose a time of day that fits.',
    lede: '"What time is Pearl Street Mall open?" has two different answers. The public pedestrian space and the independent businesses along it do not share one schedule, and a 24-hour Maps listing does not settle the question.',
    intent: 'Distinguish public-space access from business hours and plan a realistic time.',
    facts: [
      ['Public space', 'Outdoor pedestrian street and city park'],
      ['Maps listing', '24 hours on the 2026-10-30 snapshot'],
      ['Business hours', 'Independently operated; Downtown Boulder says hours vary'],
      ['Admission', 'No general-admission tariff found'],
      ['Events and services', 'Separate schedules from the businesses and the street'],
      ['Timing advice', 'Choose around daylight, weather and the venues you need']
    ],
    sections: [
      {
        heading: 'Why a 24-hour listing is not the whole answer',
        paragraphs: [
          'Google Maps listed 24 hours in the 2026-10-30 snapshot used throughout this guide. A third-party listing like that does not confirm live access during works, lighting, night-time safety, or whether a given shop will be open. It describes a place marker, not a shop timetable.',
          'Downtown Boulder says stores are independently operated and that hours vary. Visitor services and events have their own schedules as well. Treat each business as a separate decision and check the operator before you travel.'
        ]
      },
      {
        heading: 'Morning, afternoon and evening: what actually changes',
        paragraphs: [
          'This guide does not publish crowd data or a "quietest hour" claim, because no such measurement was verified. What does change in a way you can plan for is daylight, temperature, weather exposure and which businesses are serving at that time.',
          'A morning visit suits walking the four blocks, reading the historic streetscape and finding coffee; an afternoon visit suits shopping and a longer meal; an evening visit depends much more on individual restaurant and venue hours. Check National Weather Service Boulder forecasts and warnings before any outdoor plan, especially in winter or unsettled conditions.'
        ]
      },
      {
        heading: 'Build your visit around one confirmed booking',
        paragraphs: [
          'A practical way to fix a time is to anchor the day to something you can verify: a restaurant opening, a museum admission window or a performance. Then place the four-block walk before or after it. If that anchor moves, the rest of the plan can move with it.',
          'The three restaurants documented on this site are OAK at Fourteenth at 1400 Pearl St, The Kitchen Boulder at 1039 Pearl St and Postino Boulder at 1468 Pearl St, Suite 110. They are separate businesses with their own meal periods, reservations and prices; check the operator’s current information rather than assuming a shared mall schedule.'
        ]
      },
      {
        heading: 'Times that need an extra check',
        paragraphs: ['Ask one more question before committing to these situations.'],
        bullets: [
          'Public holidays, when business hours and parking terms may differ.',
          'Event days, when a programme has its own timetable and access arrangements.',
          'Late evening, when lighting, individual venue hours and personal comfort matter.',
          'Winter or wet weather, when an outdoor, brick-paved walk needs different preparation.',
          'Periods of City maintenance or the 2027 preparation work, when access notices may apply.'
        ],
        note: 'This page does not state opening times for individual shops, a "best month" ranking or a crowd forecast. Those figures were not verified from an official source in this review.'
      }
    ],
    faqs: [
      ['Is Pearl Street Mall open 24 hours?', 'Google Maps listed 24 hours in the 2026-10-30 snapshot. That listing does not establish current access during works, lighting or night-time safety, and it says nothing about shop or restaurant hours.'],
      ['What time do the shops open?', 'There is no single mall timetable. Downtown Boulder says stores are independently operated and hours vary. Check the specific business you plan to visit.'],
      ['Is there an entry fee?', 'The review found no general-admission tariff for the public pedestrian space. Shopping, meals, parking and separately ticketed programmes have their own charges.'],
      ['Is morning or evening better?', 'That depends on your plan. Morning favours an unhurried walk of the four blocks; evening depends far more on individual venue hours. Use daylight, weather and a confirmed booking as your guides.'],
      ['Do I need to check for events or works?', 'Yes. Events have separate schedules, and the City describes preparation for 2027 maintenance and anniversary work. Check current official notices for anything affecting your date.']
    ],
    sources: [
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated stores and varying hours'),
      s(SRC.mall, 'City of Boulder: public park identity'),
      s(SRC.events, 'Downtown Boulder event calendar'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.dining, 'Downtown Boulder dining directory')
    ],
    related: ['/restaurants/', '/breakfast-brunch/', '/dinner/', '/events/', '/seasonal-guide/', '/map/']
  },

  {
    slug: 'directions', path: '/directions/', group: GROUP.practical, batch: 1,
    title: 'How to Get to Pearl Street Mall | Boulder Directions',
    h1: 'How to Get to Pearl Street Mall',
    description: 'Directions to Pearl Street Mall in Boulder: what the 1303 Pearl St address means, arriving by car, bus, on foot or by bicycle, and where the four blocks begin.',
    lede: 'Getting to Pearl Street Mall is mostly a question of which of the four blocks you want to reach first. The address in a navigation app is a central reference point, not a gateway to an enclosed building.',
    intent: 'Choose an arrival mode and a sensible first block.',
    facts: [
      ['Navigation address', '1303 Pearl St, Boulder, CO 80302'],
      ['What it is', 'A Maps listing and the Downtown Boulder Visitor Information Center address'],
      ['Pedestrian core', '11th to 15th Street on Pearl'],
      ['Bus node', 'RTD bus station beside the 14th and Walnut garage'],
      ['Cycling', 'Riding and skating on the mall are restricted; dismount on the bricks'],
      ['Works notices', 'Check the City before travelling']
    ],
    sections: [
      {
        heading: 'Start by naming the block',
        paragraphs: [
          'The City identifies the pedestrian mall as four blocks of Pearl Street between 11th and 15th Streets. Pearl Street and downtown continue beyond that core. If you tell a navigation app to take you to "Pearl Street Mall" it will generally resolve to 1303 Pearl St, near 13th Street — the middle of the line rather than either end.',
          'Choosing a first block gives you a better destination: a garage near 11th Street for a west-end start, 15th and Pearl for an east-end start, or the 14th and Walnut transit node if you are arriving by bus.'
        ]
      },
      {
        heading: 'Arriving by car',
        paragraphs: [
          'The City garage directory lists facilities at 10th and Walnut, 11th and Walnut, 11th and Spruce, 14th and Walnut and 15th and Pearl, and it warns of 2026 repair work. A directory entry is not a live availability report: check the construction notices, posted rates, service fees and payment instructions for the facility you choose.',
          'Do not treat the 1303 Pearl St pin as a drop-off point for the entire mall. Cross streets still carry traffic and require normal pedestrian crossings, so a driver needs a real, legal stopping place rather than a point on the pedestrian bricks.'
        ]
      },
      {
        heading: 'Arriving by bus, on foot or by bicycle',
        paragraphs: [
          'The City identifies its 14th and Walnut garage beside the RTD bus station. Use RTD’s current journey information to choose a service; this guide does not promise a particular frequency, stop or walking time from every service.',
          'Walking into the four blocks is possible from several directions, which is exactly why there is no single entrance. If you cycle, Downtown Boulder publishes rules restricting bicycle riding and skating on the mall. Dismount and walk your bicycle on the pedestrian bricks, and check the current rules and on-site signs.'
        ]
      },
      {
        heading: 'If you need a step-free route',
        paragraphs: [
          'The City lists accessible sidewalks and paths, drinking fountains and benches, and Maps marked an accessible entrance on 2026-10-30. Those are published features, not a survey of every crossing, slope, business doorway or temporary obstruction.',
          'Confirm the route from your chosen garage or stop to the specific business you need before arrival. A place marker on a map does not establish a surveyed accessible route.'
        ],
        note: 'No drive-time estimate, parking-space count, taxi rank, rideshare pickup point or airport transfer time is published here; none was verified in this review.'
      }
    ],
    faqs: [
      ['What address should I put in my navigation app?', '1303 Pearl St, Boulder, CO 80302 is the Maps listing and the Visitor Information Center address. It orients you near 13th Street, in the middle of the four blocks, rather than at a single entrance.'],
      ['Where exactly is the pedestrian part?', 'Between 11th and 15th Streets on Pearl, according to the City. The cross streets still carry traffic, so use normal pedestrian crossings.'],
      ['Is there a bus station nearby?', 'The City identifies its 14th and Walnut garage as beside the RTD bus station. Check RTD for current services and schedules.'],
      ['Can I cycle along the mall?', 'Downtown Boulder publishes rules restricting bicycle riding and skating on the mall. Dismount and walk your bicycle on the bricks, and follow current signs and rules.'],
      ['Is the route step-free?', 'The City lists accessible paths and Maps marked an accessible entrance on 2026-10-30, but this guide has not surveyed crossings, gradients, doorways or temporary barriers. Confirm the specific route you need.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: park identity and accessible path listing'),
      s(SRC.garages, 'City of Boulder: garage locations and construction notices'),
      s(SRC.rtd, 'RTD: current journey information'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.maps, 'Google Maps place listing')
    ],
    related: ['/map/', '/parking/', '/public-transportation/', '/accessibility/', '/walking-tour/']
  },

  {
    slug: 'public-transportation', path: '/public-transportation/', group: GROUP.practical, batch: 1,
    title: 'Public Transportation to Pearl Street Mall | RTD Boulder',
    h1: 'Public Transportation to Pearl Street Mall',
    description: 'Plan a bus trip to Pearl Street Mall in Boulder: the RTD station beside the 14th and Walnut garage, how to choose a service and what to verify before travelling.',
    lede: 'Public transport can remove the parking decision entirely. The City identifies its 14th and Walnut garage beside the RTD bus station, which places a transit node close to the eastern half of the four pedestrian blocks.',
    intent: 'Use RTD journey information instead of an unverified route or timetable.',
    facts: [
      ['Operator', 'RTD (Regional Transportation District)'],
      ['Transit node', 'Bus station beside the City’s 14th and Walnut garage'],
      ['Pedestrian core', '11th to 15th Street on Pearl'],
      ['Timetables', 'Not reproduced here — use RTD’s current journey information'],
      ['Fares and accessibility', 'Not verified here — confirm with RTD'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Use the operator for the moving parts',
        paragraphs: [
          'Bus routes, frequencies, fares, stop changes and accessibility features are operational facts that change. This guide links to RTD’s current journey information rather than copying a route number or a timetable that would become wrong.',
          'What is stable enough to plan around is the geography: the City identifies the 14th and Walnut garage beside the RTD bus station, and the pedestrian core runs from 11th to 15th Street. That puts a transit arrival within the eastern half of the walk.'
        ]
      },
      {
        heading: 'Turning a bus arrival into a walk',
        paragraphs: [
          'From a transit node near 14th and Walnut, you can join the mall at a cross street rather than navigating to the 1303 Pearl St pin. Use normal pedestrian crossings at the intersecting streets — the City’s four-block designation does not make the whole downtown area car-free.',
          'A simple plan is to walk west from 14th toward 11th, then return east at your own pace, or to continue to 15th and Pearl first and turn back. Either route covers the same four blocks without doubling back to a single map marker.'
        ]
      },
      {
        heading: 'What to check before you board',
        paragraphs: ['These are the details an operator can confirm and this guide cannot.'],
        bullets: [
          'The current service and stop serving your origin.',
          'The timetable on your exact travel date, including weekend and holiday variation.',
          'Current fares, payment methods and any concession you intend to use.',
          'Service alerts, detours or stop relocations.',
          'Accessibility provisions for the specific journey you need.',
          'The return service, especially if you plan an evening meal.'
        ],
        note: 'No route numbers, frequencies, fares or journey times are published on this page because they were not verified in the 2026-10-30 review.'
      },
      {
        heading: 'Combine transit with the rest of the plan',
        paragraphs: [
          'A bus arrival also changes the parking question: you can ignore garage rates and free-period rules, but you still need to check business hours and weather. Downtown Boulder says stores are independently operated with varying hours, and the walk is entirely outdoors.',
          'For a longer day, use the Downtown Boulder event calendar for programme dates and National Weather Service Boulder for conditions. If you later add a separate destination such as the Museum of Boulder, plan that leg independently rather than assuming it is a short walk from the mall.'
        ]
      }
    ],
    faqs: [
      ['Is there a bus station near Pearl Street Mall?', 'The City identifies its 14th and Walnut garage as beside the RTD bus station. Use RTD’s current journey information to choose a service and check the stop.'],
      ['Which bus should I take?', 'This guide does not publish route numbers or timetables because they change. Plan the trip with RTD’s current journey information for your date and origin.'],
      ['How far is the walk from the station?', 'A precise walking time was not verified. The pedestrian core runs from 11th to 15th Street, so a 14th and Walnut arrival places you near the eastern half; use normal crossings at the intersecting streets.'],
      ['Can I rely on the mall being accessible from the bus stop?', 'The City lists accessible sidewalks and paths, but this guide has not surveyed crossings, slopes or temporary barriers. Confirm the specific route and any RTD accessibility provision you need.'],
      ['Do I still need to check shop hours?', 'Yes. Downtown Boulder says stores are independently operated and hours vary, and events and visitor services have separate schedules.']
    ],
    sources: [
      s(SRC.rtd, 'RTD: current journey information'),
      s(SRC.garages, 'City of Boulder: 14th and Walnut garage beside the RTD bus station'),
      s(SRC.mall, 'City of Boulder: four-block park identity'),
      s(SRC.visitorFaq, 'Downtown Boulder: visitor information and hours'),
      s(SRC.events, 'Downtown Boulder event calendar')
    ],
    related: ['/directions/', '/parking/', '/map/', '/accessibility/', '/one-day-boulder/']
  },

  {
    slug: 'shopping', path: '/shopping/', group: GROUP.food, batch: 1,
    title: 'Shopping on Pearl Street Mall | Boulder Stores Guide',
    h1: 'Best Shops on Pearl Street Mall',
    description: 'How to shop the four pedestrian blocks of Pearl Street Mall in Boulder: independent businesses, varying hours, how to build a shortlist and what to verify before you go.',
    lede: 'Pearl Street Mall is an outdoor pedestrian shopping street, not an indoor centre with a fixed tenant list. The reliable way to plan a shopping visit is to understand the four-block layout, then build a shortlist from current directories and the businesses themselves.',
    intent: 'Plan a shopping visit without relying on an unverified tenant list.',
    facts: [
      ['Place type', 'Outdoor pedestrian street and city park'],
      ['Core extent', 'Four blocks between 11th and 15th Streets'],
      ['Business model', 'Independently operated stores; hours vary'],
      ['Tenant inventory', 'Not verified in this guide — no current shop list is published'],
      ['Official directory', 'Downtown Boulder dining and visitor pages are linked below'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'An open street, not a mall directory',
        paragraphs: [
          'Google Maps categorises the place as a shopping mall, but the City of Boulder identifies it as a public park and pedestrian street between 11th and 15th Streets. That distinction matters for shopping: there is no single operator, no common opening time and no central directory board that stays current.',
          'Downtown Boulder says stores are independently operated and that hours vary. A shop that appears in a photo, an old review or a travel article may have changed. This guide therefore does not publish a "top ten shops" list built from unverified names.'
        ],
        note: 'Verification status: this site has confirmed three restaurant businesses by name and address (listed in the restaurants guide), but it has not verified a current inventory of retail shops. Any shop-specific claim would be a guess.'
      },
      {
        heading: 'Build a shortlist you can trust',
        paragraphs: ['A short, verified shortlist is more useful than a long, stale one. This method takes a few minutes and produces names you can actually rely on.'],
        bullets: [
          'Decide which block you will start from — 11th or 15th Street.',
          'Use the current Downtown Boulder visitor and dining directories as starting points.',
          'Open each candidate’s own website for its current address and hours.',
          'Confirm the street address falls within or near the four-block core.',
          'Check whether the business is open on your exact date.',
          'Keep one alternative in case a store has closed or changed hours.'
        ]
      },
      {
        heading: 'Use the four blocks as a route',
        paragraphs: [
          'Walking 11th to 15th in one direction, then returning along the same line, covers both sides of the street without repeated backtracking. Cross streets still carry traffic, so plan normal pedestrian crossings at each one.',
          'The brick paving, benches and gathering spaces are part of the reason the street works as a browsing route rather than a corridor. The City lists benches and drinking fountains among the park’s features; this guide has not surveyed their current condition or distribution.'
        ]
      },
      {
        heading: 'Practical details that make the day easier',
        paragraphs: [
          'Because the whole walk is outdoors, check National Weather Service Boulder forecasts and warnings and plan shade, clothing and rest stops for the actual conditions. Published restroom locations are north of the Visitor Information Center at 13th and Pearl and at 9th and Canyon; confirm current access before relying on them.',
          'Budget separately for shopping, meals and parking, and do not assume a free-parking arrangement applies to every facility. If you need step-free access to a particular shop, confirm that specific doorway rather than relying on a general accessibility listing.'
        ]
      }
    ],
    faqs: [
      ['What shops are on Pearl Street Mall?', 'This guide has not verified a current tenant inventory and does not publish one. Use current Downtown Boulder directories and each business’s own site, then confirm hours for your date.'],
      ['Is Pearl Street Mall an indoor shopping centre?', 'No. The City identifies it as a public park and four-block pedestrian street between 11th and 15th Streets. It is an outdoor shopping and dining area.'],
      ['What time do the shops open?', 'There is no shared timetable. Downtown Boulder says stores are independently operated and hours vary. Check the specific business.'],
      ['Where should I start shopping?', 'Pick 11th or 15th Street and walk the four blocks in one direction, using normal crossings at the intersecting streets, then return along the other side.'],
      ['Is there a charge to walk and browse?', 'The review found no general-admission tariff for the public pedestrian space. Goods, meals, parking and ticketed programmes have their own charges.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: park identity, four-block extent and amenities'),
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated businesses and varying hours'),
      s(SRC.dining, 'Downtown Boulder: business directory starting point'),
      s(SRC.garages, 'City of Boulder: parking facility directory'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/local-boutiques/', '/souvenir-shops/', '/restaurants/', '/coffee-shops/', '/walking-tour/', '/map/']
  },

  {
    slug: 'restaurants', path: '/restaurants/', group: GROUP.food, batch: 1,
    title: 'Restaurants on Pearl Street Mall | Boulder Dining Guide',
    h1: 'Best Restaurants on Pearl Street Mall',
    description: 'Three verified Pearl Street dining businesses with addresses and operator links, plus how to check current menus, meal periods and reservations before you go.',
    lede: 'Rather than publish an unverified "best restaurants" ranking, this guide documents three named dining businesses whose operator or Downtown Boulder directory information was checked on 2026-10-30, and shows how to verify the rest yourself.',
    intent: 'Start from three checked businesses and verify current menus and bookings.',
    facts: [
      ['Verified entries', 'Three separate dining businesses'],
      ['OAK at Fourteenth', '1400 Pearl St — seasonal, wood-fired American cooking'],
      ['The Kitchen Boulder', '1039 Pearl St — globally inspired American dishes and shared plates'],
      ['Postino Boulder', '1468 Pearl St, Suite 110 — Boulder WineCafe'],
      ['Shared timetable', 'None; each business sets its own hours and prices'],
      ['Reviewed', '2026-10-30; menus and bookings change']
    ],
    sections: [
      {
        heading: 'Three businesses this guide can name',
        paragraphs: [
          'The following entries were checked against the operator or the Downtown Boulder directory on 2026-10-30. They are separate businesses with their own prices, meal periods, reservations and access arrangements. This guide makes no claim about tasting, partnership, table availability or current quality.'
        ],
        bullets: [
          'OAK at Fourteenth, 1400 Pearl St — the restaurant describes seasonal, wood-fired American cooking; its address is also listed by Downtown Boulder.',
          'The Kitchen Boulder, 1039 Pearl St — the Boulder operator page describes globally inspired American dishes and shared plates; check its own meal periods and bookings.',
          'Postino Boulder, 1468 Pearl St, Suite 110 — the location page identifies this Boulder WineCafe and links its menus and reservations; confirm the correct branch.'
        ]
      },
      {
        heading: 'Read the addresses against the four blocks',
        paragraphs: [
          'The City identifies the pedestrian core as Pearl Street between 11th and 15th Streets. Note that 1039 Pearl St sits beyond that core at the western end, while 1400 and 1468 Pearl St fall within the numbered range of the pedestrian blocks. An address on Pearl Street is not by itself proof that a venue sits on the pedestrian bricks.',
          'That is why each entry keeps its own operator link and, where available, a Downtown Boulder address listing. Use those links to confirm the exact location, then plan the walk from your chosen parking facility or bus stop.'
        ]
      },
      {
        heading: 'What to verify before you choose a table',
        paragraphs: ['These details change far more often than a street address and should come from the business itself.'],
        bullets: [
          'Current opening times on your exact date, including holidays.',
          'Which meal periods are actually served and whether a reservation is needed.',
          'The current menu, including dietary and allergy requirements.',
          'Prices, service charges and any separate ticketing for events.',
          'Accessible entry to that specific premises, if you need it.',
          'Whether the correct branch and suite number are being used for directions.'
        ],
        note: 'This page does not publish star ratings, review scores, price brackets, "best of" rankings or reproduced review text. No such data was collected or verified by this independent guide.'
      },
      {
        heading: 'Finding more options',
        paragraphs: [
          'For a different cuisine, a dietary need or a venue outside these three, use the Downtown Boulder dining directory and then contact the business directly. The directory is a planning link, not evidence that a particular table is free tonight.',
          'If you are combining a meal with the four-block walk, anchor your timing to the confirmed meal period and place the walk before or after it. Check National Weather Service Boulder for an outdoor plan and the City garage directory if you are driving.'
        ]
      }
    ],
    faqs: [
      ['Which restaurants does this guide verify?', 'OAK at Fourteenth at 1400 Pearl St, The Kitchen Boulder at 1039 Pearl St and Postino Boulder at 1468 Pearl St, Suite 110. Each has operator or directory links checked on 2026-10-30.'],
      ['Do these restaurants share opening hours?', 'No. They are separate businesses with their own prices, meal periods, reservations and access arrangements. Check each operator directly.'],
      ['Do I need a reservation?', 'That depends on the business and the date. Follow the operator’s own booking information; this guide does not take reservations or claim immediate table availability.'],
      ['Is 1039 Pearl St on the pedestrian mall?', 'The City identifies the pedestrian core as 11th to 15th Street, so 1039 Pearl St sits beyond that core. An address on Pearl Street is not itself proof of a location on the pedestrian bricks.'],
      ['Where can I find more restaurants?', 'Use the Downtown Boulder dining directory as a starting point, then confirm hours, menu and address with the business itself.']
    ],
    sources: [
      s('https://www.oakatfourteenth.com/', 'OAK at Fourteenth: operator information'),
      s('https://www.thekitchen.com/location/the-kitchen-bistros-boulder/', 'The Kitchen Boulder: operator location page'),
      s('https://www.postino.com/locations/postino-boulder', 'Postino Boulder: operator location page'),
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s(SRC.refresh, 'City of Boulder: four-block boundary')
    ],
    related: ['/breakfast-brunch/', '/dinner/', '/coffee-shops/', '/shopping/', '/walking-tour/', '/half-day-itinerary/']
  },

  {
    slug: 'coffee-shops', path: '/coffee-shops/', group: GROUP.food, batch: 1,
    title: 'Coffee Shops & Cafés Near Pearl Street | Boulder',
    h1: 'Coffee Shops & Cafés Near Pearl Street',
    description: 'How to find a café near Pearl Street Mall in Boulder, plan a morning stop around the four blocks and verify current hours, seating and menus.',
    lede: 'A coffee stop is often the anchor for a morning on Pearl Street. This guide does not invent a café list: it shows how to find current businesses, where a coffee break fits into the four-block walk and what to check before you rely on it.',
    intent: 'Plan a coffee stop from current directories rather than a stale list.',
    facts: [
      ['Verified café list', 'None published — no café inventory was checked in this review'],
      ['Where to look', 'Downtown Boulder visitor and dining directories'],
      ['Walk context', 'Outdoor four-block pedestrian core, 11th to 15th Street'],
      ['Hours', 'Vary by business; confirm with the operator'],
      ['Seating', 'Outdoor seating not verified; check weather and current setup'],
      ['Reviewed', '2026-10-30']
    ],
    sections: [
      {
        heading: 'Why this page has no café names',
        paragraphs: [
          'The existing guide verified three dining businesses by name and address, but it did not verify a current inventory of cafés or coffee shops. Publishing a plausible-looking list from memory would be the fastest way to send someone to a closed premises.',
          'Instead, use the current Downtown Boulder dining directory as the starting point, open the operator’s own page, and confirm the address, opening time and whether the café suits your plan on that date. The directory is a planning aid, not a guarantee of service.'
        ],
        note: 'Verification status: no café name, address, opening time, menu, price or seating claim is made on this page. The three named dining businesses on this site are documented in the restaurants guide.'
      },
      {
        heading: 'Where a coffee stop fits in the four blocks',
        paragraphs: [
          'A morning plan works well as a single pass along the pedestrian core. Start at 11th or 15th Street, walk the four blocks while the street is easy to read, then place a coffee stop near whichever end you finish at. Cross streets still carry traffic, so use normal pedestrian crossings.',
          'Because the whole walk is outdoors, coffee is also a practical weather decision. Check National Weather Service Boulder forecasts and warnings, then plan clothing, shade and an indoor alternative for rain, snow or strong sun.'
        ]
      },
      {
        heading: 'A short verification routine',
        paragraphs: ['Ask these questions of the specific café you choose.'],
        bullets: [
          'Is it open on the exact date and at the hour you plan to arrive?',
          'Is the address within reach of 11th–15th Street, or further into downtown?',
          'Is takeaway or sit-down service available at that time?',
          'Is there seating that works for your group, including any step-free need?',
          'Does the current menu cover your dietary requirements?',
          'Is there an alternative nearby if the first choice is closed?'
        ]
      },
      {
        heading: 'Turn one stop into a half day',
        paragraphs: [
          'Coffee pairs naturally with a slow look at the historic streetscape and a browse of independent shops. The City records the mall’s dedication as a public park on 6 August 1977 and describes brick paving and gathering spaces, so there is more to notice than storefronts.',
          'If you want to extend the morning, add one separately planned destination rather than assuming everything is a short walk away. Check that place’s own opening and admission arrangements before adding it to the route.'
        ]
      }
    ],
    faqs: [
      ['Which coffee shops are on Pearl Street Mall?', 'This guide has not verified a current café inventory and does not publish one. Use the Downtown Boulder dining directory and the operator’s own page to confirm current businesses.'],
      ['Are cafés open early?', 'Hours vary by business and no shared timetable exists. Check the specific operator for the exact date and hour.'],
      ['Is there outdoor seating?', 'Outdoor seating arrangements were not verified in this review. Confirm with the business and check the weather before planning an outdoor stop.'],
      ['Can I walk the four blocks with a takeaway coffee?', 'Yes, it is a pedestrian street, but Downtown Boulder publishes rules for the mall and cross streets still require normal crossings. Check current signs and rules.'],
      ['Does the mall have a single food court?', 'No. It is an outdoor public street with independently operated businesses, not an indoor centre with a shared food court.']
    ],
    sources: [
      s(SRC.dining, 'Downtown Boulder: dining directory'),
      s(SRC.visitorFaq, 'Downtown Boulder: independently operated businesses and hours'),
      s(SRC.mall, 'City of Boulder: 1977 park dedication and listed amenities'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.rules, 'Downtown Boulder: published mall rules')
    ],
    related: ['/restaurants/', '/breakfast-brunch/', '/shopping/', '/walking-tour/', '/half-day-itinerary/']
  },

  {
    slug: 'walking-tour', path: '/walking-tour/', group: GROUP.trips, batch: 1,
    title: 'Pearl Street Mall Walking Tour | Four Blocks, Boulder',
    h1: 'Pearl Street Mall Walking Tour',
    description: 'A self-guided walking route through the four pedestrian blocks of Pearl Street Mall in Boulder, with crossing points, the 1303 Pearl St reference and practical checks.',
    lede: 'This is a simple self-guided route through the four pedestrian blocks between 11th and 15th Streets. It uses only features and locations this site has verified, and it does not promise a fixed duration or a guided experience.',
    intent: 'Follow a numbered, self-guided route across the four blocks.',
    facts: [
      ['Route', '11th to 15th Street on Pearl (or in reverse)'],
      ['Type', 'Self-guided, outdoor, on a public pedestrian street'],
      ['Cross streets', 'Still carry traffic; use normal crossings'],
      ['Midpoint reference', '1303 Pearl St Visitor Information Center, near 13th Street'],
      ['Duration', 'No fixed time is promised; choose your own pace'],
      ['Cost', 'No general-admission tariff found']
    ],
    sections: [
      {
        heading: 'The route, step by step',
        paragraphs: ['Start at whichever end matches your parking or transit choice. Each step is a location or a decision, not a timed slot.'],
        bullets: [
          '1. Arrive at 11th Street or 15th Street using a named City garage, a bus stop or a walk from downtown.',
          '2. Confirm you are on the pedestrian core: four blocks of Pearl Street between 11th and 15th Streets.',
          '3. Walk one side of the first block, noticing the brick paving and the way the street is arranged for people rather than through traffic.',
          '4. At each intersecting street, stop and use the normal pedestrian crossing — the cross streets are not pedestrianised.',
          '5. Near 13th Street, use 1303 Pearl St and the Visitor Information Center as an orientation point, not as an entrance.',
          '6. Continue to the far end of the four blocks, then return along the opposite side of the street.',
          '7. Use a bench or drinking fountain if one suits your route; the City lists these as park features, but their condition was not surveyed here.',
          '8. Finish near your chosen garage or transit node rather than navigating back to the central pin.'
        ]
      },
      {
        heading: 'What to look for along the way',
        paragraphs: [
          'The City records the mall’s dedication as a public park on 6 August 1977. Its brick paving and gathering spaces developed through an effort to orient this part of downtown toward pedestrians. Reading the street as a piece of city design makes a short walk more rewarding than treating it as a shopping list.',
          'The City’s June 2026 project update describes assessment and preparation for 2027 maintenance and anniversary work. If you notice changes on the ground, treat them as current conditions and check the refresh project page rather than assuming a described feature is unchanged.'
        ]
      },
      {
        heading: 'Practical rules on the route',
        paragraphs: [
          'Downtown Boulder publishes rules covering animals, with service-animal provisions, as well as bicycle riding, skating and smoking. Dismount bicycles on the pedestrian bricks. Follow the current rules and on-site signs for your circumstances.',
          'The entire route is outdoors. Plan shade, clothing, rest stops and an indoor alternative using National Weather Service Boulder forecasts and warnings. Published restrooms are north of the Visitor Information Center at 13th and Pearl and at 9th and Canyon; confirm current access.'
        ]
      },
      {
        heading: 'If you need an accessible route',
        paragraphs: [
          'The City lists accessible sidewalks and paths, benches and drinking fountains, and Maps marked an accessible entrance on 2026-10-30. These are published features, not a survey of every crossing, slope, business doorway or temporary obstruction.',
          'Confirm the route and facilities you need before arrival, especially if maintenance work is in progress. A place marker on a map does not establish a surveyed step-free route.'
        ],
        note: 'This is not a guided tour, a ticketed activity or a commercial booking. No duration, distance, meeting point or difficulty grade is claimed.'
      }
    ],
    faqs: [
      ['How long is the walking tour?', 'No fixed duration is promised. The route covers four blocks in one direction and a return along the other side; set your own pace and add stops as you wish.'],
      ['Where does the walk start?', 'At either 11th Street or 15th Street, depending on where you park or arrive by bus. 1303 Pearl St is a central reference, not the required start.'],
      ['Do I have to cross roads?', 'Yes. The intersecting streets still carry traffic and require normal pedestrian crossings. The four-block designation does not make all of downtown car-free.'],
      ['Is the route step-free?', 'The City lists accessible paths, but this guide has not surveyed crossings, gradients or temporary barriers. Confirm the route you need before arrival.'],
      ['Does the walk cost anything?', 'No general-admission tariff was found for the public pedestrian space. Shopping, meals, parking and separately ticketed programmes have their own charges.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: 1977 dedication, brick paving and park amenities'),
      s(SRC.refresh, 'City of Boulder: four-block boundary and 2027 preparation work'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.visitorFaq, 'Downtown Boulder: restrooms and business hours'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings')
    ],
    related: ['/map/', '/history/', '/architecture/', '/photo-spots/', '/one-hour-itinerary/', '/half-day-itinerary/']
  },

  {
    slug: 'family-guide', path: '/family-guide/', group: GROUP.experience, batch: 1,
    title: 'Pearl Street Mall with Kids | Boulder Family Guide',
    h1: 'Pearl Street Mall with Kids',
    description: 'A family guide to Pearl Street Mall in Boulder: what the City lists for the park, restrooms, benches, rules, weather and the details to verify before visiting with children.',
    lede: 'Pearl Street Mall works well for families because it is an outdoor public street with space to pause, but it is not a fenced playground or a theme attraction. This guide separates what the City lists from what a parent still needs to check.',
    intent: 'Plan a family visit around published facilities and honest unknowns.',
    facts: [
      ['Place type', 'Public pedestrian street and city park'],
      ['City-listed features', 'Accessible paths, benches and drinking fountains'],
      ['Restrooms', 'Published near 13th and Pearl, and at 9th and Canyon'],
      ['Play equipment', 'Historical designs are described elsewhere; current condition not verified here'],
      ['Rules', 'Published rules cover animals, bicycles, skating and smoking'],
      ['Weather', 'Entirely outdoors; check the forecast']
    ],
    sections: [
      {
        heading: 'Set the right expectation',
        paragraphs: [
          'This is a four-block pedestrian street in downtown Boulder, not an enclosure with a gate, a supervised play area or a single family timetable. Cross streets still carry traffic, so children need the same road-crossing attention they would need on any downtown street.',
          'The City lists accessible sidewalks and paths, benches and drinking fountains among the park’s features. Those are published facilities, not a survey of their current condition, cleanliness or distribution along the four blocks.'
        ],
        note: 'Verification status: published historical descriptions of natural play elements and children’s climbing sculptures were not independently checked for current condition in this review. Do not plan a visit around a specific piece of equipment without confirming it on site.'
      },
      {
        heading: 'Breaks, toilets and the practical middle of the walk',
        paragraphs: [
          'Downtown Boulder’s FAQ lists public restrooms north of the Visitor Information Center at 13th and Pearl, with another location at 9th and Canyon. This guide did not verify live opening, accessible-cubicle status or every route to those facilities.',
          'The 1303 Pearl St address near 13th Street is a useful midpoint reference for a family walk. Planning a break around the middle of the four blocks is more forgiving than trying to reach the far end before anyone needs to stop.'
        ]
      },
      {
        heading: 'Rules and comfort',
        paragraphs: [
          'Downtown Boulder publishes mall rules restricting animals on the mall, with service-animal provisions, and covering bicycle riding, skating and smoking. Read the current rules and on-site signs for your circumstances, and dismount bicycles on the pedestrian bricks.',
          'Everything happens outdoors on brick paving. Check National Weather Service Boulder forecasts and warnings, plan for shade, sun, rain or snow, and bring water, layers and a flexible exit plan. If a child uses a pushchair or needs step-free access, confirm the specific crossings and doorways rather than relying on a general listing.'
        ]
      },
      {
        heading: 'A low-stress family plan',
        paragraphs: ['Keep the first visit short and reversible.'],
        bullets: [
          'Choose a garage or bus stop near one end of the four blocks so you can leave quickly.',
          'Confirm a restroom location and a café or restaurant opening time before you set out.',
          'Walk two blocks, take a break on a bench, then decide whether to continue.',
          'Use normal pedestrian crossings at every intersecting street.',
          'Check one current rule that affects your group, such as animals or bicycles.',
          'Keep an indoor alternative in mind if the weather changes.'
        ]
      }
    ],
    faqs: [
      ['Is Pearl Street Mall a playground?', 'No. It is a four-block public pedestrian street and city park. Historical descriptions mention children’s play elements, but this guide has not verified their current condition.'],
      ['Are there public restrooms?', 'Downtown Boulder lists restrooms north of the Visitor Information Center at 13th and Pearl, with another at 9th and Canyon. Live opening and accessible-cubicle status were not verified.'],
      ['Is it safe for children to walk freely?', 'Cross streets still carry traffic and require normal pedestrian crossings. The whole downtown area is not a car-free zone, so plan crossings as you would on any downtown street.'],
      ['Can we bring a dog or a scooter?', 'Downtown Boulder publishes rules restricting animals, with service-animal provisions, and bicycle riding and skating. Check current rules and signs before bringing one.'],
      ['Is the route suitable for a pushchair?', 'The City lists accessible sidewalks and paths, but this guide has not surveyed every crossing, slope, doorway or temporary barrier. Confirm the specific route you need.']
    ],
    sources: [
      s(SRC.mall, 'City of Boulder: park identity and listed amenities'),
      s(SRC.visitorFaq, 'Downtown Boulder: restrooms and visitor information'),
      s(SRC.rules, 'Downtown Boulder: published mall rules'),
      s(SRC.weather, 'National Weather Service Boulder: forecasts and warnings'),
      s(SRC.maps, 'Google Maps place listing used for the 1303 Pearl St reference')
    ],
    related: ['/accessibility/', '/seasonal-guide/', '/one-hour-itinerary/', '/map/', '/public-art/', '/hours/']
  }
];
