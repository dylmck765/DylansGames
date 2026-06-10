import type { TournamentChallenge } from "../lib/types";

export const tournamentPool: TournamentChallenge[] = [
  {
    id: "tc-1",
    title: "Hold or Fold at the Print",
    situation: "Two weeks ago you bought CRWV 30-day calls at 6.40 when IV rank was a quiet 35, playing a breakout from a tight base at 112. The stock has run to 124, your calls trade 12.20, up 90 percent, and your measured technical target of 125 is one good morning away. The catch: earnings hit tomorrow night, IV percentile has ballooned to 88, and the chain is pricing an 8 percent expected move. Your original plan said nothing about holding through a report.",
    question: "What do you do before the closing bell today?",
    options: [
      "Hold the full position through earnings, momentum this strong usually carries through the print",
      "Sell the entire position today: the technical thesis is complete, the IV pump padded your gain, and earnings is a different trade you never planned",
      "Sell half and hold half through the print, splitting the difference",
      "Roll up to the 130 strike calls to take cash off while keeping full exposure through the report"
    ],
    bestIndex: 1,
    coachNotes: "Option B is the pro move: your edge was the breakout, the target is effectively hit, and a chunk of your 90 percent gain is inflated IV that will be confiscated by the crush the moment the report drops, win or lose. Option A confuses a finished technical trade with an earnings bet you never underwrote, and overnight gaps do not honor stop losses. Option C feels disciplined but it is just choosing to gamble half your banked win on a coin flip outside your plan, house money is still money. Option D reduces dollars at risk but the cheap 130s are nearly all extrinsic value, exactly the stuff IV crush destroys first, so you are re-buying the most crushable asset on the chain at peak prices."
  },
  {
    id: "tc-2",
    title: "Pick Your Delta",
    situation: "HLNX, a steady uptrend name, just bounced off its rising 50-day at 96 with a textbook reversal day on strong volume. Your thesis: a three-to-five week move back to the prior high at 108. IV rank is 28, so premium is reasonably priced. Four contracts are on your screen: the 5-day 110 call for 0.35, the 45-day 92 call at 0.65 delta for 7.80, the 45-day 115 call for 0.95, and the 5-day 97 at-the-money call for 2.10.",
    question: "Which contract actually fits this thesis?",
    options: [
      "The 5-day 110 call, 0.35 is almost free and the percentage gain would be enormous",
      "The 5-day at-the-money 97 call, maximum gamma for the bounce",
      "The 45-day 92 call at 0.65 delta: time beyond the thesis, and a delta that pays you for being right",
      "The 45-day 115 call, cheap AND plenty of time"
    ],
    bestIndex: 2,
    coachNotes: "Option C is the fit: a three-to-five week thesis needs more clock than the thesis, and 0.65 delta means roughly 65 cents of gain per dollar of stock move, with intrinsic value that survives even if IV sags. Option A is a lotto ticket, the stock would need a 14 percent sprint in five days just to reach the strike, and theta eats it daily. Option B has the right location but a five-day fuse on a multi-week idea, the most common way good analysis dies. Option D buys enough time but at a strike 19 percent away, the delta is so small the stock can rally exactly as you predicted and the option barely moves, then decays anyway."
  },
  {
    id: "tc-3",
    title: "The Weekend Toll Booth",
    situation: "Friday, 2 pm. You hold at-the-money calls on PXTR expiring in 6 days, bought for the product event scheduled this coming Thursday. The stock popped on your entry and has now gone dead, pinned in a 1 percent range for two sessions, with nothing on the calendar until the Thursday event. Your calls are roughly flat, but theta on an at-the-money option with 6 days left is brutal, and four of those days are dead air before your catalyst.",
    question: "How do you handle the position into the weekend?",
    options: [
      "Hold as is, the calls are flat and the event is only four trading days away",
      "Roll out to the 30-day expiration: keep the thesis and the exposure, but slash the daily theta bleed",
      "Add more contracts now while the stock is quiet and the calls have not moved",
      "Sell the calls and buy twice as many cheaper out-of-the-money weeklies for more leverage into the event"
    ],
    bestIndex: 1,
    coachNotes: "Option B is the pro adjustment: rolling to 30 days keeps you long the same story while cutting the per-day decay dramatically, since theta accelerates viciously in the final week for at-the-money options. Option A donates four days of peak-rate decay to the market makers before your catalyst even arrives, flat is already losing when the clock is this short. Option C doubles your exposure to the exact theta problem you should be solving. Option D is the worst of all worlds, more contracts of faster-decaying, lower-delta premium is leverage on the bleed, not on the event."
  },
  {
    id: "tc-4",
    title: "Priced for Perfection",
    situation: "LMNA reports tonight. The stock sits at 90 after a 15 percent run into the print, IV percentile is 97, and the at-the-money straddle costs 9.90, pricing an 11 percent expected move. You genuinely believe the quarter is strong, the channel checks were great and the sector peers all beat. But that belief is exactly why the stock already ran 15 percent and why the options are the most expensive they have been all year.",
    question: "You are bullish. What is the play?",
    options: [
      "Buy the weekly 90 calls at full size, strong conviction deserves a strong bet",
      "Buy 60-day calls instead, further-dated premium suffers less IV crush",
      "Buy the weekly 80 puts, everyone is bullish so the contrarian side must have the edge",
      "No position tonight: let the print pass, let IV reset, and trade the confirmed reaction tomorrow with defined risk"
    ],
    bestIndex: 3,
    coachNotes: "Option D is the pro move: at IV percentile 97 with an 11 percent move priced and a 15 percent run already in the books, even a good report can land inside the expected move and crush your calls, your edge is already in the price. Option A is paying the highest premium of the year to bet on news the stock has partially front-run. Option B contains real knowledge, longer-dated options do get crushed less because their IV drops fewer points, but less-crushed is still crushed, and you are still long a coin flip at terrible prices. Option C mistakes contrarianism for edge, the crush is direction-neutral and puts at 97th percentile IV are the same overpriced ticket with the arrow flipped."
  },
  {
    id: "tc-5",
    title: "Up 120 and the Target Is Here",
    situation: "Your VRSN trend trade has worked beautifully: 50-day calls bought five weeks ago are up 120 percent, and the stock just tagged 142, your measured-move target from the original base breakout. The contracts have 21 days left, the uptrend is technically intact, the broad market is healthy, and the stock is not showing any topping signals yet, just sitting at your target after a steady climb.",
    question: "The target is hit but nothing is broken. What is the move?",
    options: [
      "Hold the full position, never interrupt a working trend",
      "Roll everything into next month's out-of-the-money calls to compound the winnings",
      "Sell two-thirds at the target and trail the rest with a tightened exit, paid for the play and still on the field",
      "Sell everything at the target, a plan is a plan, to the penny"
    ],
    bestIndex: 2,
    coachNotes: "Option C respects both truths: the target is hit, so the bulk of the position pays you, and the trend is intact, so a trailing runner keeps you exposed if the move extends, all with 21 days of cushion. Option A ignores that your remaining edge just shrank, the trade reached the destination and theta now works against a position with no fresh thesis. Option D is defensible and far from a fumble, but selling everything at a static target in an intact trend systematically leaves the fat tail on the table, the trail solves that. Option B is the subtle trap, it re-levers your entire banked win into lower-delta, faster-decaying premium, converting a finished winner into a brand-new speculative bet at the most emotionally overconfident moment."
  },
  {
    id: "tc-6",
    title: "Cheaper Is Not a Reason",
    situation: "You bought GRDL calls three weeks ago when the stock bounced off major support at 72, with a written rule: exit on a daily close below 72. Yesterday the company's largest distributor reported weak sell-through, and GRDL closed at 70.40 on rising volume. Your calls are down 45 percent and the same contracts now cost less than half what you paid. A trading buddy points out you could double your contracts here and cut your breakeven dramatically.",
    question: "Your support level closed broken. What do you do?",
    options: [
      "Average down, the breakeven math is genuinely better and the news might be overblown",
      "Exit the entire position now: the level that defined the trade closed broken, on news, on volume, the thesis is dead",
      "Hold without adding, give it a few days to reclaim 72 before deciding",
      "Sell half now and keep half in case it bounces"
    ],
    bestIndex: 1,
    coachNotes: "Option B is the only move consistent with your own plan: the trade existed because 72 held, and 72 closed broken on heavy volume with a fundamental catalyst attached, every pillar is gone. Option A is the classic spiral, the breakeven math is real but it doubles your size in a trade the market just invalidated, cheaper is a price, not a reason. Option C quietly rewrites a written rule into a vibe, and waiting for reclaims after volume breaks is how 45 percent losses become 90 percent losses on decaying options. Option D feels balanced but a broken thesis is not half-broken, scaling out of a dead trade just slow-walks the full loss while theta keeps charging rent."
  },
  {
    id: "tc-7",
    title: "The Chase Test",
    situation: "NMRA, a name on your watchlist for weeks, finally broke out today: through the 50 pivot on four times average volume, and it just kept going, now trading 54.50, up 9 percent on the day. You never got the entry alert because you were away from the desk this morning. Call IV has jumped 12 points intraday as speculators pile in, and the stock is now 9 percent extended above the pivot with two hours left in the session.",
    question: "You missed the entry. Now what?",
    options: [
      "Buy calls at the market right now, leaders do not wait and you cannot afford to miss the whole move",
      "Buy far out-of-the-money calls instead, at least they are still cheap after the run",
      "Set alerts for an orderly pullback toward the 50 to 52 zone and only engage if the retest holds with defined risk",
      "Delete it from the watchlist, a missed entry means the trade is gone forever"
    ],
    bestIndex: 2,
    coachNotes: "Option C is how pros handle a miss: most powerful breakouts retest or build a short flag near the pivot within days, and that retest offers a defined-risk entry instead of a prayer. Option A buys 9 percent extended with IV freshly pumped 12 points, so you are overpaying on both the stock level and the option premium, and your nearest logical stop is 9 percent away, the risk-reward is wrecked. Option B swaps the chase problem for a delta problem, cheap strikes after a run are cheap because they barely participate. Option D throws away a now-proven leader, missing the first bus does not mean the route is closed, it means you wait at the next stop."
  },
  {
    id: "tc-8",
    title: "Drawdown Protocol",
    situation: "Six rough weeks have your account down 18 percent, and your written risk plan is explicit: below 15 percent drawdown, all position sizes get cut in half until the equity curve recovers to minus 10. Today the cleanest setup you have seen in months appears, an A-grade base breakout in a leading sector, the exact pattern your journal says is your most profitable play. Confidence in the setup is high, confidence in yourself is shaky.",
    question: "A-grade setup, drawdown rules in effect. How do you play it?",
    options: [
      "Full size, the rule was meant for mediocre setups, not your best pattern",
      "Skip all trading until the drawdown fully recovers, no exceptions",
      "Double size, an A-grade setup is exactly how you erase 18 percent quickly",
      "Half size, exactly as the drawdown protocol prescribes, the rule exists for precisely this moment"
    ],
    bestIndex: 3,
    coachNotes: "Option D is the system working as designed: you still take your best setup, because skipping real edge is its own loss, but at reduced size because an 18 percent drawdown is objective evidence that something, market or trader, is off. Option A is the most seductive trap on the board, every rule-break in history was justified by this one feels different, and a rule with exceptions for high conviction is not a rule. Option C is revenge math, doubling size in a drawdown is how 18 percent becomes 40. Option B sounds disciplined but it is overcorrection, the protocol already prices in caution at half size, and benching yourself from A-grade setups forfeits the exact trades that repair an equity curve."
  },
  {
    id: "tc-9",
    title: "The Meme Vortex",
    situation: "ZAPP, a small-cap with heavy short interest, has gone from 5 to 18 in three trading days and is the top trending ticker everywhere you look. Calls are being bought in avalanches, IV has hit 410 percent, and the at-the-money weekly straddle costs nearly 40 percent of the stock price. Your feed is split between rocket emojis and traders bragging about put positions for the inevitable collapse. You have no position and no edge beyond what everyone else is watching.",
    question: "What is your play in the vortex?",
    options: [
      "Buy calls, momentum this violent usually has another leg",
      "Buy puts, parabolic moves always collapse and this is obviously the top",
      "Sell naked calls to collect that 410 percent IV, someone has to take the dumb money",
      "No position: at 410 percent IV both directions are brutally overpriced, squeezes can run farther than logic allows, and this is not your game"
    ],
    bestIndex: 3,
    coachNotes: "Option D is the answer, and knowing why matters: with IV at 410 percent, calls AND puts are priced for moves so extreme that you can call the direction correctly and still lose to the premium, and you concede you have zero informational edge here. Option A pays the highest option prices on the board to chase a move that is already up 260 percent. Option B feels smart, but obviously the top has been wrong for three straight days, shorting squeezes via puts means fighting both the premium and the possibility of another double. Option C is the catastrophic one, naked calls on a squeezing stock is collecting pennies in front of a rocket launcher, the one structure on this list with genuinely unlimited loss potential."
  },
  {
    id: "tc-10",
    title: "Two O'Clock Fed",
    situation: "FOMC statement drops at 2:00 pm, with the press conference at 2:30. It is 11 am and SPY has coiled into a 0.4 percent range on declining volume, the classic pre-Fed freeze. You have no open positions. Rate futures show the market split nearly 50-50 on the size of the move, and the last four Fed days all featured a sharp initial spike that fully reversed within thirty minutes of the statement.",
    question: "How do you trade Fed day?",
    options: [
      "Buy calls now, the market usually rallies on Fed days",
      "Stand down through the statement and the first reaction, then trade the direction that survives the 2:30 press conference whipsaw, with defined risk",
      "Buy puts now, hawkish surprises hurt more than dovish ones help",
      "Trade the very first candle after the 2:00 release, speed is the edge"
    ],
    bestIndex: 1,
    coachNotes: "Option B respects the well-documented Fed-day rhythm: the 2:00 statement triggers an algorithmic spike, the 2:30 press conference frequently reverses it, and the tradeable move is the one that holds after both, you even noted the last four reversals yourself. Option A and Option C are the same mistake in opposite jerseys, pre-positioning a 50-50 macro coin flip while paying elevated event-day premium. Option D feeds you to the machines, the first candle is where algorithms hunt stops in both directions, and retail fills in that chaos are consistently terrible. Patience is the position until the field settles."
  },
  {
    id: "tc-11",
    title: "Gap Against, News Attached",
    situation: "You hold 40-day PRSM calls bought at 98 when the stock bounced off support at 96, with a written exit on any close below 93. Overnight, PRSM's largest competitor announced aggressive price cuts across the exact product line that drives PRSM's margins. The stock gaps down to 91 at the open, below your exit level, and your calls are marked down 38 percent. It is 9:35 am, spreads are wide, and a voice in your head notes the rule technically says CLOSE below 93, not open.",
    question: "The gap is below your line but the close is hours away. What do you do?",
    options: [
      "Wait for the closing print since the rule literally says close below 93, rules are rules",
      "Average down at the gap, the overreaction discount on the calls is huge",
      "Exit this morning once the opening chaos settles: the news is a direct strike on the thesis, not noise, and the close-based rule was written for shakeouts, not regime change",
      "Roll down to the 90-strike calls to stay in the name at a lower basis"
    ],
    bestIndex: 2,
    coachNotes: "Option C gets the distinction that separates pros from rule-followers: close-based stops exist to filter intraday NOISE, but a competitor declaring a price war on your company's core product is new fundamental information that breaks the thesis directly, waiting for a ceremonial closing print just risks more decay and more downside on a dead trade. Option A is rule-worship over rule-purpose, obeying the letter while the spirit burns. Option B doubles into a fundamentally damaged story because the price fell, which is exactly backwards. Option D keeps you long a thesis that no longer exists at any strike, paying fresh premium for the privilege. Pause for the first chaotic minutes to avoid the worst spreads, then execute."
  },
  {
    id: "tc-12",
    title: "Buying the Clock",
    situation: "Your research says BLDR is entering a rerating that should play out over six to ten weeks: a new contract cycle, accelerating backlog, and a chart tightening under multi-month resistance at 85. IV rank is 30, premium is fair. You are choosing between four ways to buy the same bullish idea: 30-day calls, 90-day calls at 0.60 delta, a rolling series of weekly calls replaced every Friday, or 2-year LEAPS.",
    question: "Six-to-ten week thesis. Which clock do you buy?",
    options: [
      "30-day calls, cheapest of the serious options, and you can roll once if needed",
      "Weekly calls rolled every Friday, paying for only the time you use",
      "2-year LEAPS, time can never hurt you",
      "90-day calls at 0.60 delta, roughly double the longest version of your timeline"
    ],
    bestIndex: 3,
    coachNotes: "Option D follows the cardinal timing rule: buy meaningfully more clock than the thesis needs, because a 10-week idea inside a 90-day contract can be early without being dead, and the option still holds value if the move starts late. Option A puts a 30-day fuse on a 10-week idea, the single most common way correct analysis loses money, and the planned roll means paying a second spread at whatever IV prevails later. Option B is the stealth trap, weeklies hold the highest theta-per-day of anything on the chain, and re-buying every Friday means paying the bid-ask toll ten times while compounding decay, it is the most expensive time on the menu disguised as the cheapest. Option C works directionally but parks triple the necessary capital in 21 unneeded months of time value, diluting your return on a defined-window swing."
  },
  {
    id: "tc-13",
    title: "The Roll Decision",
    situation: "Three weeks into a trend trade, your ARQT 50-day calls bought at 5.10 now trade at 9.40, up 85 percent, and the original 0.60 delta has grown to 0.82 as the stock climbed. The trend is strong and your target sits another 8 percent higher, but this single position has swollen to nearly triple your normal risk allocation because of the gains. The stock just broke through a resistance shelf and is mid-trend, not extended.",
    question: "Winner getting heavy, trend intact. How do you manage it?",
    options: [
      "Hold everything unchanged, never touch a winning trade",
      "Roll: sell the 0.82 delta calls, bank the principal plus most of the profit, and re-establish a smaller higher-strike position in the same or later expiry to stay on the trend",
      "Sell everything, an 85 percent gain should never be risked",
      "Add more contracts, strength on strength is how leaders are traded"
    ],
    bestIndex: 1,
    coachNotes: "Option B solves both problems at once: banking the swollen capital takes your account risk back inside its lane, while the smaller re-established position keeps real delta on a trend that has not finished, you are now playing offense with a fraction of the original exposure. Option A means a single position now carries triple your designed risk, and a routine 4 percent shakeout in the stock would vaporize a disproportionate chunk of account equity, unchanged is actually a choice to oversize. Option C is safe but surrenders an intact trend with a target still 8 percent away, exiting on emotion-around-a-number rather than on signal. Option D increases an already triple-weight position, compounding the exact concentration problem, pressing is for when size is under control, not over it."
  },
  {
    id: "tc-14",
    title: "Five Tickers, One Bet",
    situation: "Your book currently holds calls on NVDA, AMD, AVGO, and MU, plus calls on a Nasdaq-100 ETF, five positions, five tickers, all profitable, each individually sized at your standard 1.5 percent risk. It feels like a diversified portfolio of winners. Then you notice all five gapped down together last Tuesday when a single semiconductor export headline hit, and all five recovered together when it was walked back. Total premium at risk across the five: 7.5 percent of the account.",
    question: "What is the honest read on this book?",
    options: [
      "It is fine, five different companies with different products is diversification",
      "Buy index puts as a hedge and keep all five positions intact",
      "This is one 7.5 percent semiconductor-momentum bet wearing five jerseys: treat it as a single position and trim until the combined risk fits your single-trade budget",
      "Cut the four weakest and double the strongest, concentrate into the leader"
    ],
    bestIndex: 2,
    coachNotes: "Option C names the truth: correlation is what defines a position, not the ticker symbols, and last Tuesday already ran the experiment for you, one headline moved all five as a single block. Sizing five correlated trades at 1.5 percent each builds a hidden 7.5 percent bet your risk framework never approved. Option A is the comfortable lie, four semis and a tech-heavy index are one factor exposure with five logos. Option B spends ongoing premium to hedge a problem you could simply shrink for free, buying insurance on an oversized bet instead of right-sizing it. Option D reduces the line count but keeps, even concentrates, the same single-factor exposure, five jerseys becoming one bigger jersey is not the fix."
  },
  {
    id: "tc-15",
    title: "Budget Spent, Setup Calling",
    situation: "Your trading plan caps daily risk at 2 percent of the account, and this morning a breakout you bought failed fast and stopped you out for the full 2 percent. You followed every rule, the loss was clean. Now it is 2:30 pm and a genuine A-plus setup is firing: a leading stock clearing a six-week base on surging volume, the exact pattern that drives most of your annual profit. Your daily risk budget is spent, and tomorrow the entry will likely be extended.",
    question: "Best setup of the month, zero budget left. What do you do?",
    options: [
      "Take the trade at full size, A-plus setups outrank accounting rules",
      "Take it at half size, splitting the difference between discipline and opportunity",
      "Re-enter the morning's failed breakout instead, it owes you and redemption would feel right",
      "Pass, log the setup, and set alerts for a secondary entry, the first pullback or retest, in the coming days: the budget is spent and the system only works if it holds when it hurts"
    ],
    bestIndex: 3,
    coachNotes: "Option D is the championship answer: a daily risk cap is a circuit breaker against the well-documented fact that judgment degrades after losses, and the moment it feels most painful to honor is the moment it exists for. Strong breakouts almost always offer secondary entries within days, so the cost of discipline is far smaller than it feels at 2:30 pm. Option A means your risk limit is actually a suggestion, and traders whose rules bend for good reasons soon find every reason is good. Option B is the seductive one, half-size still teaches your brain that limits are negotiable, and negotiable limits fail exactly when you need them most. Option C is pure revenge dressed as conviction, the morning stock owes you nothing, and it owes me is the most expensive sentence in trading."
  }
];
