import type { SeedPost } from "../lib/types";

export const seedPosts: SeedPost[] = [
  {
    id: "post-1",
    author: "BreakoutBecky",
    createdDaysAgo: 0,
    ticker: "NVDA",
    direction: "bullish",
    title: "NVDA is coiled right under 145 and earnings is the trigger",
    catalyst: "Earnings drop Wednesday after the close. They've beaten three quarters running, and the stock has been pinned in a tight little range all week while the rest of semis just drifted around.",
    thesis: "NVDA has tapped 145 four times now and every dip to 138 gets bought back up immediately, which to me reads like a coil building energy rather than a stock running out of gas. If the print is good and guidance holds, I think 152 comes quick and 158 is where the runner goes. I'm in the 150 calls three weeks out, on purpose past the event, so the IV crush doesn't eat my lunch.",
    maxLoss: "I'm risking $420, which is the full premium on 2 contracts. That's the whole bet and I'm not averaging down if 138 cracks.",
    upvotes: 64,
    comments: [
      {
        id: "post-1-c1",
        author: "GammaGrinder",
        text: "Love the structure here. Going three weeks out instead of grabbing the weekly is honestly what separates a real plan from a lottery ticket."
      },
      {
        id: "post-1-c2",
        author: "IVDrainStanley",
        text: "Heads up that the IV on those is already pumped pretty hard. Even three weeks out you'll hand some back on the crush, so double check the move math still pays."
      },
      {
        id: "post-1-c3",
        author: "CoachClutch",
        text: "Defined risk, you named the level where you're wrong, and you sized it like a grownup. This is what a thesis post should look like. Good luck Wednesday."
      }
    ]
  },
  {
    id: "post-2",
    author: "FadeTheOpen",
    createdDaysAgo: 1,
    ticker: "TSLA",
    direction: "bearish",
    title: "TSLA gapped up and I think this open is a trap",
    catalyst: "Stock gapped up 6% this morning on a headline that had basically no numbers behind it. When a gap is built on a vibe like that, it usually gets filled.",
    thesis: "Every gap above 260 this quarter has filled inside three sessions. Go pull the chart, it's almost mechanical at this point. The delivery worries never actually went away, and this morning's pop left a clean little shelf sitting at 252. I'm buying the 255 puts two weeks out and just aiming for the gap fill. Nothing fancier than that.",
    maxLoss: "I've got $380 at risk, the full premium on 2 contracts. Two daily closes above 265 and I'm out, because at that point the idea is dead.",
    upvotes: 41,
    comments: [
      {
        id: "post-2-c1",
        author: "BreakoutBecky",
        text: "Fading TSLA momentum is a contact sport, my friend. Honor that stop or this thing will run you straight over."
      },
      {
        id: "post-2-c2",
        author: "TapeReader21",
        text: "For whatever it's worth, the tape backs you up. That gap went up on really thin volume, so there's no real size behind it yet."
      },
      {
        id: "post-2-c3",
        author: "StrikeKing88",
        text: "I've personally lost money on this exact setup twice, but your line in the sand is clear so it's a fair swing. Cleaner plan than I ever had on it."
      }
    ]
  },
  {
    id: "post-3",
    author: "PutsOnGritty",
    createdDaysAgo: 2,
    ticker: "SPY",
    direction: "bearish",
    title: "CPI lands Thursday and SPY is priced for everything to go right",
    catalyst: "CPI prints Thursday morning. SPY is sitting at all-time highs with the VIX practically asleep, so nobody out there is bothering to pay up for protection.",
    thesis: "Breadth has been quietly thinning for two weeks now. The whole index is being carried by about five names while the average stock just chops sideways, and a team riding one star player tends to wobble when that player has an off night. A hot print and I think SPY tests 590 in a hurry, then the 50-day at 584 after that. The puts are cheap because IV is in the basement, so I'm grabbing the 592 puts expiring next Friday.",
    maxLoss: "I'm risking $510, the full premium on 3 contracts. I cut it if SPY reclaims 600 and breadth actually confirms the move with it.",
    upvotes: 87,
    comments: [
      {
        id: "post-3-c1",
        author: "DeltaDawn",
        text: "Gonna push back a little. Every CPI this year has turned into a buy-the-dip by noon, so you're swimming against the pattern here."
      },
      {
        id: "post-3-c2",
        author: "VolVulture",
        text: "The cheap IV is the real edge on this one. Even if you only end up half right, you picked up your protection at clearance prices."
      },
      {
        id: "post-3-c3",
        author: "CoachClutch",
        text: "Good on you for writing down the exit before the event instead of after. Most folks wait for the candle to tell them, which usually means they never actually decide."
      },
      {
        id: "post-3-c4",
        author: "FadeTheOpen",
        text: "The thin breadth and the sleepy VIX have me leaning the same direction. Riding shotgun on this one."
      }
    ]
  },
  {
    id: "post-4",
    author: "GammaGrinder",
    createdDaysAgo: 0,
    ticker: "AMD",
    direction: "bullish",
    title: "AMD catch-up trade with analyst day giving it a date",
    catalyst: "NVDA just ripped and AMD hasn't budged an inch. Analyst day is next week, so for once the catch-up trade has an actual event sitting on the calendar.",
    thesis: "AMD has been basing at 155 for a solid month while the rest of the sector rallied right around it. A reclaim of 162 opens the door up to 170, which was the August high. I want the 165 calls a full month out and I'm happily paying up for the extra time, because a basing stock breaks out whenever it feels like it and not on my schedule.",
    maxLoss: "I've got $290 at risk, one contract, full premium. My stop is a daily close under 152.",
    upvotes: 23,
    comments: [
      {
        id: "post-4-c1",
        author: "CondorKid",
        text: "Laggard plays have a sneaky good payoff profile. Either it catches up to the group or it quietly tells you the whole sector move was fake."
      },
      {
        id: "post-4-c2",
        author: "PutsOnGritty",
        text: "Playing devil's advocate here, sometimes a laggard is lagging for an actual reason. What happens if analyst day turns out to be a total snooze?"
      },
      {
        id: "post-4-c3",
        author: "GammaGrinder",
        text: "Fair point, and that's exactly why my stop is a level and not a gut feeling. Under 152 the base is broken and I'm gone, simple as that."
      }
    ]
  },
  {
    id: "post-5",
    author: "CoachClutch",
    createdDaysAgo: 3,
    ticker: "AAPL",
    direction: "bullish",
    title: "AAPL might be the most boring breakout on the board, and I like it for that",
    catalyst: "Product event a week out, and AAPL just reclaimed its 200-day moving average on rising volume for the first time since spring.",
    thesis: "Nobody is the least bit excited about this chart, and honestly that's the whole appeal for me. The 230 level has flipped from a ceiling into a floor, and the slow drift this name does into a product event has usually acted like an escalator going up. I'm taking the 235 calls three weeks out, dated past the event so I'm not sitting there as pure IV bait.",
    maxLoss: "I'm risking $250 on a single contract. I keep size small on the slow movers because the thing I'm actually betting on is that 230 level holding up, and the headline is just the excuse.",
    upvotes: 35,
    comments: [
      {
        id: "post-5-c1",
        author: "ThetaThief",
        text: "AAPL options actually tend to be priced pretty fair, which is rare these days. Decent house to bet against, honestly."
      },
      {
        id: "post-5-c2",
        author: "BreakoutBecky",
        text: "A 200-day reclaim on real volume is my favorite tell in any name. The boring stocks are the ones that pay rent."
      }
    ]
  },
  {
    id: "post-6",
    author: "StrikeKing88",
    createdDaysAgo: 1,
    ticker: "COIN",
    direction: "bullish",
    title: "COIN is basically a leveraged bet on bitcoin, and BTC just woke up",
    catalyst: "Bitcoin reclaimed its 50-day overnight, and COIN has a long history of moving at roughly twice whatever BTC decides to do.",
    thesis: "COIN held 300 on the last shakeout even while BTC was busy printing a lower low, and that kind of relative strength hiding in plain sight is usually worth listening to. If BTC pushes the top of its range, I think COIN sees 330 fast. I'm buying the 320 calls two weeks out. To be clear, this is a momentum rental that I plan to walk away from the moment it stops working.",
    maxLoss: "I'm risking $440 across 2 contracts, premium only, no adds. If BTC loses the 50-day again I'm out that same day.",
    upvotes: 52,
    comments: [
      {
        id: "post-6-c1",
        author: "VolVulture",
        text: "Just a heads up that COIN IV is always expensive. You really need this move to show up fast, because time sitting in those contracts works against you hard."
      },
      {
        id: "post-6-c2",
        author: "TapeReader21",
        text: "The relative strength read is legit. It held its level while the thing it tracks broke down, and that's buyers showing real conviction."
      },
      {
        id: "post-6-c3",
        author: "IVDrainStanley",
        text: "Two weeks on a 2x beta name gives you no time to dawdle. Set your exit alert right now, before you're up 40% and feeling immortal."
      }
    ]
  },
  {
    id: "post-7",
    author: "VolVulture",
    createdDaysAgo: 4,
    ticker: "META",
    direction: "bearish",
    title: "META just printed a third lower high and barely anyone noticed the trend turn",
    catalyst: "Third lower high on the daily this week, and it lined up right as the ad-spend chatter coming off the conference circuit started sounding cautious.",
    thesis: "This has looked like quiet distribution for three weeks straight, where every pop into 720 gets sold off by lunchtime. Lose 700 and there's basically nothing holding it up until 678. I own the 705 puts three weeks out and I sized it expecting to be early, because I usually am.",
    maxLoss: "I've got $360 at risk, the full premium on one contract. The whole idea is invalidated on a daily close over 728.",
    upvotes: 18,
    comments: [
      {
        id: "post-7-c1",
        author: "DeltaDawn",
        text: "Shorting the strongest names in the index is pretty much how I personally funded everyone else's gains last year. Be careful out there."
      },
      {
        id: "post-7-c2",
        author: "FadeTheOpen",
        text: "Lower highs with rallies getting sold into is a real pattern though. And admitting you sized to be early is the most honest thing anybody's posted here all week."
      }
    ]
  },
  {
    id: "post-8",
    author: "DeltaDawn",
    createdDaysAgo: 2,
    ticker: "QQQ",
    direction: "bullish",
    title: "QQQ pulled back to the rising 20-day, so I'm buying the dip with a seatbelt on",
    catalyst: "First touch of the 20-day moving average in six weeks, and it showed up on the lightest volume all month. The sellers clearly aren't pressing here.",
    thesis: "The trend is still up, this dip looks orderly, and the leaders all held their levels through it. Rather than buy naked calls I'm going with a 530/540 call debit spread a month out. It caps how much I can make, sure, but it cuts the cost almost in half and takes a lot of the theta sting out while the bounce has time to develop.",
    maxLoss: "I'm risking $480, which is just the debit on the spread. The spread is basically the stop, since my max loss is locked in the second I click buy.",
    upvotes: 29,
    comments: [
      {
        id: "post-8-c1",
        author: "CondorKid",
        text: "Spread gang rise up. Giving away the moonshot to halve your cost is a trade you come out ahead on over a hundred reps."
      },
      {
        id: "post-8-c2",
        author: "PutsOnGritty",
        text: "A light-volume pullback is the tell I trust the most. Fine, I'll allow one bullish post to live on my feed."
      },
      {
        id: "post-8-c3",
        author: "CoachClutch",
        text: "For any rookies reading along, this is what trading with the trend looks like instead of standing in front of it."
      }
    ]
  },
  {
    id: "post-9",
    author: "IVDrainStanley",
    createdDaysAgo: 5,
    ticker: "NFLX",
    direction: "bearish",
    title: "NFLX post-earnings drift is pointing lower this time, and the candle already said so",
    catalyst: "The earnings pop faded the very same day. It gapped up on the numbers and then closed below the open on huge volume. That reversal candle is the whole tell.",
    thesis: "When a stock gaps up on good numbers and still closes red, it usually means the last buyers are already in and already underwater. Gap support sits at 1,150, and below that it's an air pocket down to 1,100. I bought the 1,160 puts two weeks out, and I waited until the IV had crushed, so it's the same trade for about half what it cost last week.",
    maxLoss: "I'm risking $530, one contract, full premium. I'm wrong if NFLX closes back above the earnings-day high.",
    upvotes: 11,
    comments: [
      {
        id: "post-9-c1",
        author: "ThetaThief",
        text: "Waiting until after the crush to buy the puts is the most Stanley thing imaginable, and it's also just correct. That's premium discipline."
      },
      {
        id: "post-9-c2",
        author: "BreakoutBecky",
        text: "No argument that candle was ugly. Just know NFLX has embarrassed plenty of gap-faders before, so keep that stop honest."
      },
      {
        id: "post-9-c3",
        author: "GammaGrinder",
        text: "A sell-the-news reversal on volume is one of the few patterns I'll actually chase. I'm in for a starter myself."
      }
    ]
  },
  {
    id: "post-10",
    author: "CondorKid",
    createdDaysAgo: 6,
    ticker: "PLTR",
    direction: "bullish",
    title: "PLTR is retesting the breakout shelf, and the second entry is usually the good one",
    catalyst: "It pulled back to the exact breakout level from the contract-win pop two weeks ago and held there on shrinking volume.",
    thesis: "Breakout, then pullback, then a hold of the level. That's the classic second entry, and you get to buy it cheaper than everybody who chased the first move. The 62 shelf has flipped over into support. Get above 66 and the momentum crowd chases it toward 72. I'm buying the 67.5 calls a month out and keeping it small, because PLTR will happily nap for weeks before it does anything.",
    maxLoss: "I'm risking $180 on one contract, lunch-money sizing on purpose. A daily close under 60 and I'm out.",
    upvotes: 8,
    comments: [
      {
        id: "post-10-c1",
        author: "StrikeKing88",
        text: "Second entry at the shelf is textbook stuff. The chasers paid 66 for the same thing you're picking up at 63."
      },
      {
        id: "post-10-c2",
        author: "IVDrainStanley",
        text: "A month of theta on a stock that likes to nap adds up to real money. Keeping the size small is what makes it survivable, so good call there."
      }
    ]
  },
  {
    id: "post-11",
    author: "TapeReader21",
    createdDaysAgo: 3,
    ticker: "MSFT",
    direction: "bullish",
    title: "MSFT is quietly getting accumulated and the tape is saying more than the headlines",
    catalyst: "Five straight closes in the top quarter of the daily range, with block prints hitting the offer all week long. Somebody big is clearly building a position.",
    thesis: "MSFT has gone sideways around 510 while the rest of the market chopped all over the place, and holding flat through a choppy tape like that is relative strength wearing a disguise. The peer group reports cloud numbers next week, which sets the table for this one. Get above 515 and the measured move points at 530. I'm in the 520 calls five weeks out.",
    maxLoss: "I'm risking $610 across 2 contracts. I exit if it loses 502, since that's the level the buyers have defended all month.",
    upvotes: 46,
    comments: [
      {
        id: "post-11-c1",
        author: "DeltaDawn",
        text: "Block prints hitting the offer is the kind of detail almost nobody bothers to look for. Following along for the update."
      },
      {
        id: "post-11-c2",
        author: "VolVulture",
        text: "Mega-cap IV is sitting cheap right now too, so those calls aren't even pricey. Pretty clean setup all around."
      },
      {
        id: "post-11-c3",
        author: "FadeTheOpen",
        text: "I fade most things on instinct, but I won't fade quiet accumulation in a mega cap. No counter-trade from me here, carry on."
      }
    ]
  },
  {
    id: "post-12",
    author: "ThetaThief",
    createdDaysAgo: 1,
    ticker: "AMZN",
    direction: "bearish",
    title: "AMZN margin story cracks if retail comes clean on Thursday",
    catalyst: "Two big-box retailers guided down this week, and AMZN gives its retail-adjacent commentary Thursday. The read-through I'm getting is a softer consumer.",
    thesis: "AMZN has failed at 240 twice now, and the second rejection came on weaker volume, which tells me the buyers are getting tired at that same spot. If Thursday confirms the soft-consumer story, the 228 shelf goes and 220 is next on deck. I'm in the 235 puts three weeks out, which gives me enough runway to live past the report.",
    maxLoss: "I'm risking $325, the full premium on one contract. If AMZN takes out 244 then the chart is bullish again and I'm flat, no arguing with it.",
    upvotes: 7,
    comments: [
      {
        id: "post-12-c1",
        author: "CoachClutch",
        text: "Good habit on display here, where the exit is an actual price you decided on ahead of time instead of a mood you'll talk yourself into later. Write that one down, rookies."
      },
      {
        id: "post-12-c2",
        author: "CondorKid",
        text: "The double rejection at 240 is real, I'll give you that, but AMZN does love to rip on a cost-cutting headline. Watch out for the head fake."
      },
      {
        id: "post-12-c3",
        author: "TapeReader21",
        text: "Volume fading on the second test backs you up nicely. The tape is telling me the bulls are punching tired up there."
      }
    ]
  }
];
