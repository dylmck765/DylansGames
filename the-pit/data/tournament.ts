import type { TournamentChallenge } from "../lib/types";

export const tournamentPool: TournamentChallenge[] = [
  {
    id: "tc-1",
    title: "Hold or Fold at the Print",
    situation: "Two weeks ago you bought CRWV 30-day calls at 6.40, back when IV rank was a sleepy 35, betting on a breakout from a tight base at 112. The stock has since run to 124, your calls now trade at 12.20 (up 90 percent), and the technical target you drew at 125 is one decent morning away. Here's the wrinkle. Earnings land tomorrow night, IV percentile has swelled to 88, and the chain is pricing an 8 percent expected move. When you wrote this trade down, you said nothing about sitting through a report.",
    question: "What do you do before the closing bell today?",
    options: [
      "Sell the whole position today and lock in everything you made",
      "Roll up to the 130 calls so you pull cash out but keep some exposure",
      "Sell half and ride the other half through the print",
      "Hold it all, since momentum running this hard tends to carry through a report"
    ],
    bestIndex: 0,
    coachNotes: "Option A is the professional's move. Your edge was always the breakout, and that thesis has now done its job. A good chunk of your 90 percent gain is really just inflated IV, and the moment the report drops, the crush takes that back from you whether the news is good or bad. Earnings is a separate trade, one you never agreed to underwrite. Option D treats a finished technical setup as if it were an earnings bet, and overnight gaps have a nasty habit of leaping right past your stop. Option C feels like discipline, but really you're just deciding to gamble half of what you already won on a coin flip that was never in your plan, and money you won is still your money. Option B does shrink the dollars at risk, except those cheap 130s are almost entirely extrinsic value, which is the first thing IV crush goes after, so you'd be re-buying the most fragile thing on the chain at the worst possible price."
  },
  {
    id: "tc-2",
    title: "Pick Your Delta",
    situation: "HLNX is a steady uptrend name, and it just bounced off its rising 50-day at 96 with a clean reversal day on heavy volume. Your read is a three-to-five week move back to the old high at 108. IV rank is sitting at 28, so premium isn't expensive. Four contracts are staring at you from the screen: the 5-day 110 call for 0.35, the 45-day 92 call at 0.65 delta for 7.80, the 45-day 115 call for 0.95, and the 5-day 97 at-the-money call for 2.10.",
    question: "Which contract actually fits this thesis?",
    options: [
      "The 5-day at-the-money 97 call, for maximum gamma right into the bounce",
      "The 5-day 110 call, basically free with enormous percentage upside",
      "The 45-day 115 call, since it's cheap and gives you plenty of time",
      "The 45-day 92 call at 0.65 delta, even though it costs 7.80 a contract"
    ],
    bestIndex: 3,
    coachNotes: "Option D is the one that fits. A three-to-five week idea needs more runway than the idea itself, and that 0.65 delta means roughly 65 cents of gain for every dollar the stock moves. The intrinsic value in it survives even if IV softens, so you're paying for a delta that actually rewards you for being right. Option B is a lottery ticket. The stock would have to sprint 14 percent in five days just to touch the strike, and theta is nibbling at it every single morning. Option A picks the right neighborhood but lights a five-day fuse under a multi-week idea, which is one of the most common ways good analysis quietly dies. Option C buys you the time but parks you at a strike that's 19 percent away, where the delta is so thin the stock can do exactly what you predicted and the option barely notices, then it decays anyway."
  },
  {
    id: "tc-3",
    title: "The Weekend Toll Booth",
    situation: "It's Friday at 2 pm. You're holding at-the-money calls on PXTR that expire in 6 days, bought for the product event scheduled this coming Thursday. The stock popped when you got in, then went completely quiet, pinned inside a 1 percent range for two sessions, with nothing on the calendar until Thursday. Your calls are roughly flat. The trouble is that theta on an at-the-money option with 6 days left is vicious, and four of those days are just dead air before your catalyst even shows up.",
    question: "How do you handle the position into the weekend?",
    options: [
      "Roll out to the 30-day expiration, keeping the same strike and the same thesis",
      "Hold it as is, since the event is only four trading days out anyway",
      "Sell these and use the proceeds to buy twice as many cheaper out-of-the-money weeklies",
      "Add contracts now while the stock is quiet and the calls are flat"
    ],
    bestIndex: 0,
    coachNotes: "Option A is the professional adjustment. Rolling out to 30 days keeps both your thesis and your exposure while cutting the daily theta bleed way down, because decay turns brutal in the final week for an at-the-money option. Option B hands four days of peak-rate decay straight to the market makers before your catalyst has even arrived, and flat is already a slow loss when the clock is this short. Option D just doubles down on the exact theta problem you ought to be fixing. Option C manages to be the worst of every world at once, since more contracts of faster-decaying, lower-delta premium is leverage on the bleed rather than leverage on the event."
  },
  {
    id: "tc-4",
    title: "Priced for Perfection",
    situation: "LMNA reports tonight. The stock sits at 90 after running 15 percent into the print, IV percentile is 97, and the at-the-money straddle costs 9.90, which prices in an 11 percent expected move. You genuinely think the quarter is strong. The channel checks were great and every sector peer beat. But that very belief is the reason the stock already ran 15 percent, and it's the reason these options are the priciest they've been all year.",
    question: "You are bullish. What is the play?",
    options: [
      "Buy the weekly 90 calls at full size, because real conviction deserves a real bet",
      "Buy 60-day calls instead, since further-dated premium takes less of an IV hit",
      "Skip it tonight and trade the confirmed reaction tomorrow",
      "Buy the weekly 80 puts, because the crowded bullish side is the one to fade"
    ],
    bestIndex: 2,
    coachNotes: "Option C is the professional's move. With IV percentile at 97, an 11 percent move already priced in, and a 15 percent run sitting in the books, even a genuinely good report can land inside that expected move and flatten your calls. Your edge is already baked into the price. So you let the print pass, let IV reset, and step in afterward with defined risk. Option A pays the steepest premium of the entire year to bet on news the stock has already partly front-run. Option B actually contains real knowledge, since longer-dated options do get crushed less because their IV falls fewer points, but less crushed is still crushed, and you're still long a coin flip at ugly prices. Option D mistakes being contrarian for having an edge, because the crush doesn't care which way you're pointing, and puts at the 97th percentile of IV are the same overpriced ticket with the arrow flipped around."
  },
  {
    id: "tc-5",
    title: "Up 120 and the Target Is Here",
    situation: "Your VRSN trend trade has worked like a dream. The 50-day calls you bought five weeks ago are up 120 percent, and the stock just tagged 142, the measured-move target you drew from the original base breakout. The contracts have 21 days left, the uptrend is technically intact, the broad market looks healthy, and the stock isn't flashing any topping signals yet. It's just sitting at your target after a steady climb.",
    question: "The target is hit but nothing is broken. What is the move?",
    options: [
      "Sell it all right at the target, because a plan is a plan, down to the penny",
      "Sell two-thirds at the target and trail the rest with a tightened exit",
      "Roll everything into next month's out-of-the-money calls to compound the gain",
      "Hold the whole position untouched, because you never interrupt a working trend"
    ],
    bestIndex: 1,
    coachNotes: "Option B honors both things that are true at once. The target is hit, so the bulk of the position pays you, and the trend is still intact, so a trailing runner keeps you in the game if the move stretches further, all of it cushioned by 21 days on the clock. You've been paid for the play and you're still on the field. Option D ignores that your remaining edge just shrank, because the trade reached its destination and theta now leans against a position that has no fresh reason to exist. Option A is perfectly defensible and nowhere near a fumble, but dumping everything at a static target while the trend is alive systematically leaves the fat tail on the table, which is exactly what the trail is there to catch. Option C is the quiet trap, since it re-levers your whole banked win into lower-delta, faster-decaying premium, turning a finished winner into a brand-new speculative bet at the moment you're most likely to be overconfident."
  },
  {
    id: "tc-6",
    title: "Cheaper Is Not a Reason",
    situation: "You bought GRDL calls three weeks ago when the stock bounced off major support at 72, and you wrote down a rule: exit on a daily close below 72. Yesterday the company's biggest distributor reported weak sell-through, and GRDL closed at 70.40 on rising volume. Your calls are down 45 percent, and the same contracts now cost less than half what you paid. A trading buddy helpfully points out that you could double your contracts here and slash your breakeven.",
    question: "Your support level closed broken. What do you do?",
    options: [
      "Exit the whole position now and take the 45 percent loss",
      "Sell half now and keep half in case the stock bounces back",
      "Average down to crush the breakeven, since the news might be overblown",
      "Hold without adding, giving it a few days to reclaim 72 before you decide"
    ],
    bestIndex: 0,
    coachNotes: "Option A is the only move that lines up with the plan you wrote yourself. The trade existed because 72 held, and 72 just closed broken on heavy volume with a real fundamental catalyst attached. Every pillar is gone, and the thesis is dead. Option C is the classic spiral. The breakeven math is real, sure, but you'd be doubling your size in a trade the market just invalidated, and a lower price tag is no reason at all to buy more. Option D quietly turns a written rule into a hunch, and waiting around for a reclaim after a volume break is precisely how a 45 percent loss grows into a 90 percent loss on decaying options. Option B feels like a tidy compromise, but a broken thesis isn't half-broken, and scaling out of a dead trade just stretches the full loss across more days while theta keeps charging you rent."
  },
  {
    id: "tc-7",
    title: "The Chase Test",
    situation: "NMRA has been on your watchlist for weeks, and today it finally broke out, ripping through the 50 pivot on four times average volume and then just kept going. It's now trading 54.50, up 9 percent on the day. You never got the entry alert because you were away from the desk all morning. Call IV has jumped 12 points intraday as speculators pile in, and the stock now sits 9 percent extended above the pivot with two hours left in the session.",
    question: "You missed the entry. Now what?",
    options: [
      "Buy far out-of-the-money calls, since at least those are still cheap",
      "Set alerts for the 50 to 52 zone and only step in on a held retest",
      "Buy calls at the market right now, because you can't miss the whole move",
      "Drop it from the watchlist, since a missed entry is a dead trade"
    ],
    bestIndex: 1,
    coachNotes: "Option B is how a pro handles a miss. Most powerful breakouts come back to retest or build a tight flag near the pivot within a few days, and that retest hands you a defined-risk entry instead of a prayer. Option C means buying something 9 percent extended with IV freshly pumped 12 points, so you're overpaying on the stock level and the option premium both, and your nearest sensible stop is a full 9 percent away, which wrecks the risk-reward. Option A trades the chase problem for a delta problem, because cheap strikes after a run are cheap precisely because they barely move. Option D throws away a stock that just proved it can lead, and missing the first bus doesn't close the route. It just means you wait at the next stop."
  },
  {
    id: "tc-8",
    title: "Drawdown Protocol",
    situation: "Six rough weeks have left your account down 18 percent, and your written risk plan is blunt about it: below a 15 percent drawdown, every position size gets cut in half until the equity curve climbs back to minus 10. Today the cleanest setup you've seen in months shows up, an A-grade base breakout in a leading sector, the exact pattern your journal says makes you the most money. You're confident in the setup. You're a lot less confident in yourself.",
    question: "A-grade setup, drawdown rules in effect. How do you play it?",
    options: [
      "Skip all trading until the drawdown fully recovers, with no exceptions",
      "Go full size, since the rule was meant for mediocre setups, not your best pattern",
      "Take the setup at half size, exactly the way the drawdown protocol tells you to",
      "Double the size, because an A-grade setup is how you erase 18 percent in a hurry"
    ],
    bestIndex: 2,
    coachNotes: "Option C is the system doing exactly what it was built to do. You still take your best setup, because passing on real edge is its own kind of loss, but you take it smaller, because an 18 percent drawdown is hard evidence that something is off, whether it's the market or you. The rule was written for this precise moment. Option B is the most seductive trap on the board, since every blown rule in history got justified with some version of this one feels different, and a rule that bends for high conviction was never really a rule. Option D is revenge math, and doubling size inside a drawdown is how 18 percent turns into 40. Option A sounds disciplined but it overcorrects, because the protocol already bakes in caution at half size, and benching yourself from A-grade setups gives up the very trades that repair an equity curve."
  },
  {
    id: "tc-9",
    title: "The Meme Vortex",
    situation: "ZAPP is a small-cap with heavy short interest, and it has gone from 5 to 18 in three trading days while becoming the top trending ticker everywhere you look. Calls are getting bought in avalanches, IV has hit 410 percent, and the at-the-money weekly straddle costs nearly 40 percent of the stock price. Your feed is split down the middle between rocket emojis and traders bragging about the puts they're holding for the inevitable collapse. You have no position and no edge beyond what everyone else is staring at.",
    question: "What is your play in the vortex?",
    options: [
      "Stay flat and watch the circus from the sidelines",
      "Buy puts, since parabolics always collapse and this has to be the top",
      "Sell naked calls and collect that juicy 410 percent IV",
      "Buy calls, because momentum this violent usually has another leg in it"
    ],
    bestIndex: 0,
    coachNotes: "Option A is the answer, and understanding why is the whole point. With IV at 410 percent, both the calls and the puts are priced for moves so extreme that you can nail the direction and still lose to the premium you paid. Squeezes can run further than logic allows, and you've already admitted you have zero informational edge here, so this simply isn't your game. Option D pays the highest option prices on the entire board to chase a move that's already up 260 percent. Option B feels clever, except this is the top has already been wrong three days running, and shorting a squeeze with puts means fighting the premium and the very real chance of another double. Option C is the catastrophic one. Selling naked calls into a squeezing stock is collecting pennies in front of a rocket launcher, and it's the one structure on this list that carries genuinely unlimited loss."
  },
  {
    id: "tc-10",
    title: "Two O'Clock Fed",
    situation: "The FOMC statement drops at 2:00 pm, with the press conference following at 2:30. It's 11 am and SPY has coiled into a 0.4 percent range on fading volume, the classic pre-Fed freeze. You have no open positions. Rate futures show the market split almost evenly on the size of the move, and every one of the last four Fed days featured a sharp initial spike that fully reversed within thirty minutes of the statement.",
    question: "How do you trade Fed day?",
    options: [
      "Buy puts ahead of the print, since hawkish surprises sting more than dovish ones soothe",
      "Trade the first candle right after the 2:00 release, because speed is the edge",
      "Buy calls now, since the market usually rallies on Fed days",
      "Stand down through 2:00 and trade whichever direction holds after 2:30"
    ],
    bestIndex: 3,
    coachNotes: "Option D respects the well-documented rhythm of a Fed day. The 2:00 statement sets off an algorithmic spike, the 2:30 press conference frequently reverses it, and the move worth trading is the one that survives both, taken with defined risk. You even clocked the last four reversals yourself. Options C and A are the same mistake wearing opposite jerseys, both pre-positioning a roughly even macro coin flip while paying inflated event-day premium. Option B feeds you straight to the machines, because the first candle is exactly where the algorithms hunt stops in both directions, and retail fills in that chaos are reliably awful. Patience is your position until the field settles down."
  },
  {
    id: "tc-11",
    title: "Gap Against, News Attached",
    situation: "You're holding 40-day PRSM calls bought at 98 when the stock bounced off support at 96, with a written exit on any close below 93. Overnight, PRSM's largest competitor announced aggressive price cuts across the exact product line that drives PRSM's margins. The stock gaps down to 91 at the open, below your exit level, and your calls are marked down 38 percent. It's 9:35 am, the spreads are wide, and a little voice in your head points out that the rule technically says a close below 93, not an open.",
    question: "The gap is below your line but the close is hours away. What do you do?",
    options: [
      "Average down into the gap, since the discount on the calls is enormous",
      "Get out this morning once the opening spreads tighten up",
      "Roll down to the 90 strike to stay in the name at a lower basis",
      "Wait for the close, because the rule literally says close below 93"
    ],
    bestIndex: 1,
    coachNotes: "Option B understands the distinction that separates a pro from someone who just follows rules. Close-based stops exist to filter out intraday noise and shakeouts, not regime change, and a competitor declaring a price war on your company's core product is brand-new fundamental information that breaks the thesis outright. Holding out for a ceremonial closing print just risks more decay and more downside on a trade that's already dead. Option D worships the rule while forgetting its purpose, obeying the letter while the spirit goes up in flames. Option A doubles down on a fundamentally damaged story simply because the price fell, which is exactly backwards. Option C keeps you long a thesis that no longer exists at any strike, and makes you pay fresh premium for the privilege. Sit out the first chaotic minutes so you dodge the worst spreads, then execute."
  },
  {
    id: "tc-12",
    title: "Buying the Clock",
    situation: "Your research says BLDR is heading into a rerating that should play out over six to ten weeks, driven by a new contract cycle, accelerating backlog, and a chart tightening up under multi-month resistance at 85. IV rank is 30, so the premium is fair. You're weighing four ways to buy the same bullish idea: 30-day calls, 90-day calls at 0.60 delta, a rolling stack of weekly calls you replace every Friday, or 2-year LEAPS.",
    question: "Six-to-ten week thesis. Which clock do you buy?",
    options: [
      "The 30-day calls, rolling once if you happen to need more time",
      "The 2-year LEAPS, because time can never come back to hurt you",
      "The 90-day calls at the 0.60 delta strike",
      "The weekly calls, replaced every Friday at the close"
    ],
    bestIndex: 2,
    coachNotes: "Option C follows the cardinal rule of timing: buy meaningfully more clock than the thesis needs, roughly double the longest version of your timeline. A 10-week idea inside a 90-day contract can show up late without being dead, and the option still holds value if the move starts slow. Option A straps a 30-day fuse onto a 10-week idea, which is the single most common way correct analysis still loses money, and the planned roll just means paying a second spread at whatever IV happens to be later. Option D is the stealth trap, because weeklies carry the highest theta-per-day of anything on the chain, and re-buying every Friday means paying the bid-ask toll ten times while compounding the decay. It's the most expensive time on the menu dressed up as the cheapest. Option B works directionally but ties up triple the capital you need in 21 months of time value you'll never use, watering down your return on a swing with a defined window."
  },
  {
    id: "tc-13",
    title: "The Roll Decision",
    situation: "Three weeks into a trend trade, your ARQT 50-day calls bought at 5.10 now trade at 9.40, up 85 percent, and the original 0.60 delta has grown to 0.82 as the stock climbed. The trend is strong and your target sits another 8 percent higher, but the gains have swollen this single position to nearly triple your normal risk allocation. The stock just punched through a resistance shelf and is sitting mid-trend, not extended.",
    question: "Winner getting heavy, trend intact. How do you manage it?",
    options: [
      "Sell it all, because an 85 percent gain should never be put back at risk",
      "Add more contracts, since strength on strength is how leaders trade",
      "Hold everything unchanged, because you never touch a winning trade",
      "Sell the calls, bank the gain, and re-open smaller at a higher strike"
    ],
    bestIndex: 3,
    coachNotes: "Option D handles both problems in one motion. Banking your principal plus most of the profit pulls your account risk back into its lane, while the smaller re-established position keeps real delta on a trend that isn't finished. You're now playing offense with a fraction of the original exposure. Option C leaves a single position carrying triple your designed risk, where a routine 4 percent shakeout in the stock would vaporize a disproportionate slice of your account equity, so unchanged is really a decision to stay oversized. Option A is safe but it surrenders an intact trend with the target still 8 percent away, exiting on emotion-around-a-number instead of on a signal. Option B piles onto an already triple-weight position, compounding the exact concentration problem, and you only press the gas when your size is firmly under control, which yours plainly is not right now."
  },
  {
    id: "tc-14",
    title: "Five Tickers, One Bet",
    situation: "Your book is holding calls on NVDA, AMD, AVGO, and MU, plus calls on a Nasdaq-100 ETF. Five positions, five tickers, all profitable, each one individually sized at your standard 1.5 percent risk. It feels like a diversified portfolio of winners. Then you notice that all five gapped down together last Tuesday when a single semiconductor export headline hit, and all five recovered together when it got walked back. Total premium at risk across the five comes to 7.5 percent of the account.",
    question: "What is the honest read on this book?",
    options: [
      "Cut the four weakest and double the strongest, concentrating into the leader",
      "Treat the five as one position and trim it down to a single trade's risk budget",
      "It's fine, because five companies with five different product lines is diversification",
      "Buy index puts as a hedge and keep all five positions on the field"
    ],
    bestIndex: 1,
    coachNotes: "Option B says the quiet part out loud. What defines a position is correlation, not the ticker symbols, and last Tuesday already ran the experiment for you when one headline moved all five as a single block. This is really one 7.5 percent semiconductor-momentum bet wearing five different jerseys, because sizing five correlated trades at 1.5 percent apiece quietly builds a 7.5 percent bet your risk framework never signed off on. Option C is the comfortable lie, since four semis and a tech-heavy index amount to one factor exposure with five logos stamped on it. Option D spends ongoing premium to hedge a problem you could just shrink for free, buying insurance on an oversized bet instead of right-sizing it. Option A trims the line count but keeps and even concentrates the same single-factor exposure, and five jerseys becoming one bigger jersey isn't the fix."
  },
  {
    id: "tc-15",
    title: "Budget Spent, Setup Calling",
    situation: "Your trading plan caps daily risk at 2 percent of the account, and this morning a breakout you bought failed fast and stopped you out for the full 2 percent. You followed every rule, and the loss was clean. Now it's 2:30 pm and a genuine A-plus setup is firing: a leading stock clearing a six-week base on surging volume, the exact pattern that drives most of your annual profit. Your daily risk budget is gone, and by tomorrow the entry will probably be extended.",
    question: "Best setup of the month, zero budget left. What do you do?",
    options: [
      "Take it at half size, splitting the difference between discipline and opportunity",
      "Re-enter the morning's failed breakout instead, because it owes you one",
      "Pass today, log the setup, and set alerts for a secondary entry",
      "Take the trade at full size, because A-plus setups outrank accounting rules"
    ],
    bestIndex: 2,
    coachNotes: "Option C is the championship answer. A daily risk cap is a circuit breaker built around the well-documented fact that your judgment degrades after losses, and the moment it feels most painful to honor is the exact moment it was built for. The system only works if it holds when it hurts. Strong breakouts almost always offer a secondary entry within days, a first pullback or a retest, so the real cost of discipline is far smaller than it feels at 2:30 pm. Option D turns your risk limit into a mere suggestion, and traders whose rules bend for good reasons soon discover that every reason looks good. Option A is the seductive one, because half-size still teaches your brain that limits are negotiable, and negotiable limits give out exactly when you need them most. Option B is pure revenge dressed up as conviction, the morning stock owes you nothing, and it owes me is the most expensive sentence in trading."
  }
];
