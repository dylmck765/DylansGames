import type { SeedPost } from "../lib/types";

export const seedPosts: SeedPost[] = [
  {
    id: "post-1",
    author: "BreakoutBecky",
    createdDaysAgo: 0,
    ticker: "NVDA",
    direction: "bullish",
    title: "NVDA coiled under 145 — earnings is the snap count",
    catalyst: "Earnings Wednesday after the close. Three straight quarters of beats, and the stock has been pinned in a tight range all week while the rest of semis drifted.",
    thesis: "NVDA has tapped 145 four times and buyers keep showing up at 138 — that is a spring loading, not a top. If the print beats and guidance holds, 152 is the first stop and 158 is the runner. I am in the 150 calls three weeks out, deliberately past the event, so IV crush does not eat the whole play.",
    maxLoss: "Risking $420 — the full premium on 2 contracts. That is the entire bet; no averaging down if 138 breaks.",
    upvotes: 64,
    comments: [
      {
        id: "post-1-c1",
        author: "GammaGrinder",
        text: "Love the structure. Going three weeks out instead of the weekly is the difference between a thesis and a lottery ticket."
      },
      {
        id: "post-1-c2",
        author: "IVDrainStanley",
        text: "Just know IV on those is already pumped. Even three weeks out you will give some back on the crush. Make sure the move math still works."
      },
      {
        id: "post-1-c3",
        author: "CoachClutch",
        text: "Defined risk, named invalidation level, sized like an adult. This is what a thesis post should look like. Good luck Wednesday."
      }
    ]
  },
  {
    id: "post-2",
    author: "FadeTheOpen",
    createdDaysAgo: 1,
    ticker: "TSLA",
    direction: "bearish",
    title: "TSLA gap-and-fade — this open is a trap",
    catalyst: "Stock gapped up 6% this morning on a headline with zero numbers attached. Gaps built on vibes get filled.",
    thesis: "Every gap above 260 this quarter has filled within three sessions — check the chart, it is automatic. Delivery worries have not gone anywhere and this morning's gap left a clean shelf at 252. I am buying the 255 puts two weeks out and targeting the gap fill, nothing fancier than that.",
    maxLoss: "Risking $380 — full premium on 2 contracts. Two daily closes above 265 and I am out, thesis dead.",
    upvotes: 41,
    comments: [
      {
        id: "post-2-c1",
        author: "BreakoutBecky",
        text: "Fading TSLA momentum is a contact sport. Respect the stop or this one runs you over."
      },
      {
        id: "post-2-c2",
        author: "TapeReader21",
        text: "For what it is worth, the tape agrees — that gap went up on thin volume. No size behind it yet."
      },
      {
        id: "post-2-c3",
        author: "StrikeKing88",
        text: "I have lost money on exactly this trade twice, but your invalidation is clear so it is a fair swing. Better plan than I had."
      }
    ]
  },
  {
    id: "post-3",
    author: "PutsOnGritty",
    createdDaysAgo: 2,
    ticker: "SPY",
    direction: "bearish",
    title: "CPI Thursday and SPY is priced for perfection",
    catalyst: "CPI drops Thursday morning. SPY is parked at all-time highs with the VIX asleep — nobody is paying for protection right now.",
    thesis: "Breadth has been thinning for two weeks. The index is up on five names while the average stock chops sideways — that is a team winning on one star player. A hot print and SPY tests 590 fast, then the 50-day at 584. Puts are cheap because IV is in the basement, so I am taking the 592 puts expiring next Friday.",
    maxLoss: "Risking $510 — the full premium on 3 contracts. Cut if SPY reclaims 600 with breadth actually confirming.",
    upvotes: 87,
    comments: [
      {
        id: "post-3-c1",
        author: "DeltaDawn",
        text: "Counterpoint: every CPI this year has been a buy-the-dip event by noon. You are fighting the pattern."
      },
      {
        id: "post-3-c2",
        author: "VolVulture",
        text: "The cheap IV is the real edge here. Even if you are half right, you bought protection at clearance prices."
      },
      {
        id: "post-3-c3",
        author: "CoachClutch",
        text: "Nice job defining the exit BEFORE the event. Most people decide after the candle, which is to say they never decide."
      },
      {
        id: "post-3-c4",
        author: "FadeTheOpen",
        text: "Breadth divergence plus sleepy VIX got me leaning the same way. Riding shotgun on this one."
      }
    ]
  },
  {
    id: "post-4",
    author: "GammaGrinder",
    createdDaysAgo: 0,
    ticker: "AMD",
    direction: "bullish",
    title: "AMD laggard catch-up — the understudy gets a turn",
    catalyst: "NVDA just ripped and AMD has not moved an inch. Analyst day is next week, so the catch-up trade has an actual date on the calendar.",
    thesis: "AMD has based at 155 for a month while the whole sector rallied around it. A reclaim of 162 opens the door to 170, the August high. I want the 165 calls a full month out — paying up for time on purpose, because basing stocks break out on their own schedule, not mine.",
    maxLoss: "Risking $290 — one contract, full premium. Stop on a daily close under 152.",
    upvotes: 23,
    comments: [
      {
        id: "post-4-c1",
        author: "CondorKid",
        text: "Laggard plays are sneaky good risk-reward. Either it catches up or it tells you the sector move is fake."
      },
      {
        id: "post-4-c2",
        author: "PutsOnGritty",
        text: "Devil's advocate: sometimes the laggard is lagging for a reason. What if analyst day is a snooze?"
      },
      {
        id: "post-4-c3",
        author: "GammaGrinder",
        text: "Fair — that is why the stop is a level and not a feeling. Under 152 the base is broken and I am gone."
      }
    ]
  },
  {
    id: "post-5",
    author: "CoachClutch",
    createdDaysAgo: 3,
    ticker: "AAPL",
    direction: "bullish",
    title: "AAPL: the most boring breakout on the board — and that is the point",
    catalyst: "Product event one week out, and AAPL just reclaimed its 200-day moving average on rising volume for the first time since spring.",
    thesis: "Nobody is excited about this chart, which is exactly the setup. The 230 level has flipped from resistance to support and the pre-event drift in this name has historically been an escalator up. Calls at 235, three weeks out — dated past the event so I am not pure IV bait.",
    maxLoss: "Risking $250 on a single contract. I size small on slow movers — the trade is the level, not the headline.",
    upvotes: 35,
    comments: [
      {
        id: "post-5-c1",
        author: "ThetaThief",
        text: "AAPL options are usually priced fair, which is rare. Decent house to bet against, honestly."
      },
      {
        id: "post-5-c2",
        author: "BreakoutBecky",
        text: "200-day reclaim on volume is my favorite tell in any name. Boring stocks pay rent."
      }
    ]
  },
  {
    id: "post-6",
    author: "StrikeKing88",
    createdDaysAgo: 1,
    ticker: "COIN",
    direction: "bullish",
    title: "COIN is a leveraged bet on bitcoin, and BTC just woke up",
    catalyst: "Bitcoin reclaimed its 50-day overnight, and COIN historically moves at roughly 2x whatever BTC does.",
    thesis: "COIN held 300 on the last shakeout even while BTC made a lower low — that is relative strength hiding in plain sight. If BTC pushes the top of its range, COIN sees 330 in a hurry. Buying the 320 calls two weeks out. This is a momentum rental, not a marriage.",
    maxLoss: "Risking $440 across 2 contracts — premium only, no adds. If BTC loses the 50-day again I am out the same day.",
    upvotes: 52,
    comments: [
      {
        id: "post-6-c1",
        author: "VolVulture",
        text: "Heads up, COIN IV is always expensive. You need the move to be fast, not just right."
      },
      {
        id: "post-6-c2",
        author: "TapeReader21",
        text: "The relative strength read is legit — held its level while the underlying asset broke. That is buyers with conviction."
      },
      {
        id: "post-6-c3",
        author: "IVDrainStanley",
        text: "Two weeks on a 2x beta name is a sprint. Set the exit alert now, not when you are up 40% and feeling immortal."
      }
    ]
  },
  {
    id: "post-7",
    author: "VolVulture",
    createdDaysAgo: 4,
    ticker: "META",
    direction: "bearish",
    title: "META printed a third lower high — the trend changed and nobody RSVPed",
    catalyst: "Third lower high on the daily chart this week, right as the ad-spend chatter from the conference circuit turned cautious.",
    thesis: "This has been distribution for three weeks straight: every pop into 720 gets sold by lunch. Lose 700 and there is nothing but air down to 678. I own the 705 puts three weeks out, sized like I expect to be early, because I usually am.",
    maxLoss: "Risking $360 — full premium on one contract. Invalidated on a daily close over 728.",
    upvotes: 18,
    comments: [
      {
        id: "post-7-c1",
        author: "DeltaDawn",
        text: "Shorting the strongest names in the index is how I funded everyone else's gains last year. Be careful out there."
      },
      {
        id: "post-7-c2",
        author: "FadeTheOpen",
        text: "Lower highs plus sold rallies is a real pattern though. The sized-to-be-early line is the most honest thing posted here all week."
      }
    ]
  },
  {
    id: "post-8",
    author: "DeltaDawn",
    createdDaysAgo: 2,
    ticker: "QQQ",
    direction: "bullish",
    title: "QQQ pullback to the rising 20-day — buying the dip, with a seatbelt",
    catalyst: "First touch of the 20-day moving average in six weeks, and it came on the lightest volume of the month. Sellers are not pressing.",
    thesis: "Trend is up, the dip is orderly, and the leaders all held their levels. Instead of naked calls I am buying a 530/540 call debit spread a month out — caps my upside, but cuts the cost almost in half and takes the sting out of theta while the bounce develops.",
    maxLoss: "Risking $480 — the debit on the spread. The spread IS the stop: max loss is defined the moment I click buy.",
    upvotes: 29,
    comments: [
      {
        id: "post-8-c1",
        author: "CondorKid",
        text: "Spread gang rise up. Giving away the moonshot to halve your cost is a trade you win over a hundred reps."
      },
      {
        id: "post-8-c2",
        author: "PutsOnGritty",
        text: "Light-volume pullback is the tell I trust most. Fine, I will allow one bullish post on my feed."
      },
      {
        id: "post-8-c3",
        author: "CoachClutch",
        text: "Note for the rookies reading: this is what trading the trend instead of fighting it looks like."
      }
    ]
  },
  {
    id: "post-9",
    author: "IVDrainStanley",
    createdDaysAgo: 5,
    ticker: "NFLX",
    direction: "bearish",
    title: "NFLX post-earnings drift is DOWN this time — the candle already told you",
    catalyst: "The earnings pop faded the same day — gapped up on the numbers and closed below the open on huge volume. That reversal candle is the tell.",
    thesis: "When a stock gaps up on good numbers and still closes red, the last buyers are in and they are already underwater. Gap support sits at 1,150; below that there is an air pocket to 1,100. I bought the 1,160 puts two weeks out AFTER the IV crush — same trade, half the price it was last week.",
    maxLoss: "Risking $530 — one contract, full premium. Wrong if NFLX closes back above the earnings-day high.",
    upvotes: 11,
    comments: [
      {
        id: "post-9-c1",
        author: "ThetaThief",
        text: "Waiting until after the crush to buy the puts is the most Stanley move ever, and it is correct. Premium discipline."
      },
      {
        id: "post-9-c2",
        author: "BreakoutBecky",
        text: "That candle was ugly, no argument. But NFLX has embarrassed gap-faders before. Keep the stop honest."
      },
      {
        id: "post-9-c3",
        author: "GammaGrinder",
        text: "Sell-the-news reversals on volume are one of the few patterns I will actually chase. In for a starter myself."
      }
    ]
  },
  {
    id: "post-10",
    author: "CondorKid",
    createdDaysAgo: 6,
    ticker: "PLTR",
    direction: "bullish",
    title: "PLTR retesting the breakout shelf — second entries are the good ones",
    catalyst: "Pulled back to the exact breakout level from the contract-win pop two weeks ago and held it on shrinking volume.",
    thesis: "Breakout, pullback, hold — the classic second entry, and you get it at a better price than the people who chased. The 62 shelf has flipped to support. Over 66 and the momentum crowd chases it toward 72. Buying the 67.5 calls a month out, sized small, because PLTR can nap for weeks before it moves.",
    maxLoss: "Risking $180 on one contract — lunch-money sizing on purpose. Daily close under 60 and I am out.",
    upvotes: 8,
    comments: [
      {
        id: "post-10-c1",
        author: "StrikeKing88",
        text: "Second entry at the shelf is textbook. The chasers paid 66 for what you are getting at 63."
      },
      {
        id: "post-10-c2",
        author: "IVDrainStanley",
        text: "A month of theta on a stock that naps is real money. Small sizing makes it survivable, good call there."
      }
    ]
  },
  {
    id: "post-11",
    author: "TapeReader21",
    createdDaysAgo: 3,
    ticker: "MSFT",
    direction: "bullish",
    title: "MSFT quiet accumulation — the tape is louder than the headlines",
    catalyst: "Five straight closes in the top quarter of the daily range with block prints hitting the offer all week. Somebody big is building a position.",
    thesis: "MSFT has gone sideways at 510 while the rest of the market chopped — sideways in a choppy tape is relative strength in disguise. Cloud numbers from the peer group land next week and set the table. Over 515 the measured move targets 530. I am in the 520 calls five weeks out.",
    maxLoss: "Risking $610 across 2 contracts. Exit if it loses 502 — that is where the buyers have lived all month.",
    upvotes: 46,
    comments: [
      {
        id: "post-11-c1",
        author: "DeltaDawn",
        text: "Block prints on the offer is the kind of detail most people never look for. Following for the update."
      },
      {
        id: "post-11-c2",
        author: "VolVulture",
        text: "Mega-cap IV is cheap right now too, so the calls are not even expensive. Decent setup all around."
      },
      {
        id: "post-11-c3",
        author: "FadeTheOpen",
        text: "I fade most things but I do not fade quiet accumulation in a mega cap. Pass on the counter-trade, carry on."
      }
    ]
  },
  {
    id: "post-12",
    author: "ThetaThief",
    createdDaysAgo: 1,
    ticker: "AMZN",
    direction: "bearish",
    title: "AMZN margin story cracks if retail tells the truth Thursday",
    catalyst: "Two big-box retailers guide down this week, and AMZN gives retail-adjacent commentary Thursday. The read-through is a softer consumer.",
    thesis: "AMZN failed at 240 twice and the second rejection came on weaker volume — buyers are getting tired at the same spot. If Thursday confirms the soft-consumer story, the 228 shelf goes and 220 is next. I am in the 235 puts three weeks out, enough runway to live past the report.",
    maxLoss: "Risking $325 — full premium on one contract. If AMZN takes out 244 the chart is bullish again and I am flat, no debate.",
    upvotes: 7,
    comments: [
      {
        id: "post-12-c1",
        author: "CoachClutch",
        text: "Good habit on display: the exit is a price, not a mood. Write that down, rookies."
      },
      {
        id: "post-12-c2",
        author: "CondorKid",
        text: "The double rejection at 240 is real, but AMZN loves to rip on cost-cutting headlines. Watch for the head fake."
      },
      {
        id: "post-12-c3",
        author: "TapeReader21",
        text: "Volume fading on the second test backs you up. The tape says the bulls are punching tired."
      }
    ]
  }
];
