import type { DailyBlitz, MarketRead, FilmRoomCase, BossChallenge } from "../lib/types";

export const dailyBlitzPool: DailyBlitz[] = [
  {
    id: "blitz-1",
    question: "You buy 1 AAPL 200 call. Plain English: what did you just put in your playbook?",
    options: [
      "The right to buy 100 shares at 200 any time before expiration",
      "The obligation to buy 100 shares at 200 by expiration",
      "The right to sell 100 shares at 200 before expiration",
      "100 shares of AAPL delivered at a discount to market"
    ],
    correctIndex: 0,
    explanation: "A call is a ticket, not a debt. Buyers get rights. Sellers take on obligations. One contract controls 100 shares, and if the play does not work, the most you lose is the premium you paid for the ticket."
  },
  {
    id: "blitz-2",
    question: "You own 100 shares of a stock at 150 and you are nervous about a pullback. Which play is the classic protection call?",
    options: [
      "Buy a call above the current price",
      "Sell your shares and buy calls instead",
      "Double your share position to lower your average",
      "Buy a put below the current price"
    ],
    correctIndex: 3,
    explanation: "A protective put is insurance on your roster. You pay a premium, and if the stock tanks, the put gains value and caps your damage. Calls add risk here, and doubling down is the opposite of protection."
  },
  {
    id: "blitz-3",
    question: "Stock trades at 105. The 100 call is priced at 7.50. How much of that premium is intrinsic value, the part that is real right now?",
    options: ["7.50", "5.00", "2.50", "Zero"],
    correctIndex: 1,
    explanation: "Intrinsic value is stock price minus strike for a call: 105 minus 100 equals 5. The other 2.50 is extrinsic value, the hope-and-time portion. Extrinsic is the part theta eats every day."
  },
  {
    id: "blitz-4",
    question: "You hold a 0.30 delta call. The stock pops 1 dollar. Roughly what happens to your option?",
    options: [
      "It gains the full 100 dollars per contract",
      "It gains about 0.30 percent of its value",
      "It gains roughly 30 dollars per contract",
      "It does not move until expiration nears"
    ],
    correctIndex: 2,
    explanation: "Delta is your speed stat. A 0.30 delta option moves about 30 cents for every dollar the stock moves. Multiply by 100 shares per contract and that is roughly 30 dollars. Options move in real time, not just at expiration."
  },
  {
    id: "blitz-5",
    question: "Quick read: a 0.70 delta call. Beyond price sensitivity, what is the rough-and-dirty way pros read that number?",
    options: [
      "Roughly a 70 percent chance the option finishes in the money",
      "The option loses about 70 percent of its value each week",
      "The stock itself has about 70 percent more upside left",
      "You need to post about 70 percent more margin to hold it"
    ],
    correctIndex: 0,
    explanation: "Delta doubles as a rough probability gauge. A 0.70 delta call is priced like it has about a 70 percent shot of finishing in the money. It is an approximation, not a guarantee, but it is how pros size up odds at a glance."
  },
  {
    id: "blitz-6",
    question: "Theta. Time decay. Who is taking that hit every single day?",
    options: [
      "Option sellers",
      "Both sides equally",
      "Option buyers",
      "Nobody, theta only matters at expiration"
    ],
    correctIndex: 2,
    explanation: "If you bought the option, theta is the toll you pay daily. Extrinsic value melts as the clock runs, and the melt accelerates in the final weeks for at-the-money options. Sellers collect that toll. The clock is always working for one side."
  },
  {
    id: "blitz-7",
    question: "You hold an at-the-money call expiring Friday. The stock goes sideways all week, never drops a dime. What happens to your option?",
    options: [
      "It holds its value since the stock never fell",
      "It loses value steadily and can expire nearly worthless",
      "It gains slightly because the stock held its ground",
      "It converts to shares automatically at the bell"
    ],
    correctIndex: 1,
    explanation: "This is the fumble nobody sees coming. You can be NOT wrong about direction and still lose everything, because an at-the-money option is all extrinsic value and theta torches it daily into expiration. Sideways is a loss for short-dated premium buyers."
  },
  {
    id: "blitz-8",
    question: "You are long a call. The stock does not move, but implied volatility jumps from 30 to 55 on takeover chatter. Your option?",
    options: [
      "It loses value",
      "It is unchanged",
      "It gets exercised early",
      "It gains value"
    ],
    correctIndex: 3,
    explanation: "Vega measures how much your option gains when implied volatility rises. IV spiking from 30 to 55 inflates the premium even with the stock standing still. Long options are long vega. The crowd just bid up the price of uncertainty, and you own some."
  },
  {
    id: "blitz-9",
    question: "You buy an at-the-money call the day before earnings. The stock gaps UP 3 percent on the report, but the expected move was 7 percent. Most likely result?",
    options: [
      "A clean win, the direction was right",
      "The call loses value anyway",
      "The call doubles overnight",
      "No change until Friday's expiration"
    ],
    correctIndex: 1,
    explanation: "Welcome to IV crush. Pre-earnings, the option was priced for a 7 percent move. The stock delivered 3. After the report, implied volatility collapses, the extrinsic value evaporates, and the small move cannot cover the deflation. Right direction, losing trade."
  },
  {
    id: "blitz-10",
    question: "Stock at 200. The at-the-money straddle expiring Friday costs 12. What is the market telling you about this week?",
    options: [
      "The stock is guaranteed to move 12 dollars by Friday",
      "The stock cannot move more than 12 dollars this week",
      "The expected move is roughly plus or minus 12 dollars",
      "Implied volatility for the week is running at 12 percent"
    ],
    correctIndex: 2,
    explanation: "The at-the-money straddle price is the market's betting line: roughly plus or minus 12 dollars, or 6 percent, by Friday. It is a forecast, not a promise. Pros compare their own expectations to that line before paying premium."
  },
  {
    id: "blitz-11",
    question: "Scouting report says IV percentile is 95 ahead of earnings. Translation?",
    options: [
      "Options are priced richer than 95 percent of the past year",
      "The stock has a 95 percent chance of beating earnings",
      "Volatility is cheaper than 95 percent of the past year",
      "The expected earnings move is about 95 cents in either direction"
    ],
    correctIndex: 0,
    explanation: "IV percentile compares today's implied volatility to its own past year. At 95, you are paying near top-of-the-range prices for options. That does not mean no trade ever, but it means the bar to profit is way up on the wall."
  },
  {
    id: "blitz-12",
    question: "Account size 10,000. Your rule is risking 2 percent max per play. A call you like costs 400 and your plan cuts it at a 50 percent loss. How many contracts?",
    options: ["Five", "Zero", "Three", "One"],
    correctIndex: 3,
    explanation: "Risk per contract is what you would lose at your exit, about 200 here. The 2 percent rule caps total risk at 200. One contract. Position sizing is the one stat you control on every snap, and it is what keeps you in the league."
  },
  {
    id: "blitz-13",
    question: "Three straight losses. You are steaming. What is the pro move on the next play?",
    options: [
      "Double the size to win it back in one shot",
      "Cut your size down and slow the game down",
      "Switch to 0DTE options for faster recovery",
      "Trade a ticker you have never studied for a fresh start"
    ],
    correctIndex: 1,
    explanation: "Tilt is how a losing streak becomes a blown account. Pros shrink size after losses, review the film, and only swing full again when the process is back on track. Doubling up while emotional is the fastest route to the locker room."
  },
  {
    id: "blitz-14",
    question: "Gamma, the stat that measures how fast your delta changes. Where does gamma run hottest?",
    options: [
      "At-the-money options close to expiration",
      "Deep in-the-money options months out",
      "Far out-of-the-money LEAPS",
      "It is constant across all options"
    ],
    correctIndex: 0,
    explanation: "Gamma peaks at the money near expiration. That is why short-dated ATM options swing violently: small stock moves cause big delta changes, which cause big price changes. High gamma is high octane, in both directions."
  },
  {
    id: "blitz-15",
    question: "Your 110 call expires today with the stock at 104. Final whistle. What happens?",
    options: [
      "You are forced to buy 100 shares at 110",
      "You get the 6 dollar difference credited back",
      "It expires worthless and the premium is gone",
      "It rolls to next week's expiration automatically"
    ],
    correctIndex: 2,
    explanation: "An out-of-the-money option at expiration is worth zero. Your loss is capped at the premium you paid, that is the whole point of buying options. No forced purchase, no rollover. The play just did not convert."
  },
  {
    id: "blitz-16",
    question: "You pay 2.00 for a 50 strike call. Where does the stock need to be at expiration for you to break even?",
    options: ["50", "48", "Anywhere above 50", "52"],
    correctIndex: 3,
    explanation: "Breakeven at expiration is strike plus premium: 50 plus 2 equals 52. Above 50 the option has value, but you do not turn a profit until the stock covers what you paid for the ticket. The first 2 dollars of the move just pays your way in."
  },
  {
    id: "blitz-17",
    question: "You are bearish on a stock and you want defined, capped risk. Cleanest play?",
    options: [
      "Buy puts",
      "Short the stock",
      "Sell calls naked",
      "Buy calls and hope you are wrong"
    ],
    correctIndex: 0,
    explanation: "Buying puts gives you downside exposure with risk capped at the premium. Shorting stock has theoretically unlimited risk if the stock rips up, and selling naked calls is the same trap with extra steps. Defined risk means you know the worst case before kickoff."
  },
  {
    id: "blitz-18",
    question: "An option quotes 1.00 bid, 1.40 ask. You buy at the ask. If nothing moves and you sell at the bid, what just happened?",
    options: [
      "Nothing, spreads only matter for market makers",
      "You earned the spread back as a rebate",
      "You are instantly down about 29 percent",
      "You lost 40 cents per share to commissions"
    ],
    correctIndex: 2,
    explanation: "Buy at 1.40, sell at 1.00, that is 40 cents gone per share, 40 dollars per contract, before the stock takes a single step. Wide spreads are an invisible tax. Pros hunt liquid chains with tight spreads, because the toll booth gets paid every trip."
  },
  {
    id: "blitz-19",
    question: "Your thesis plays out over several weeks. Which contract fits the game plan?",
    options: [
      "Same-day expiration for maximum leverage",
      "45 to 60 days to expiration",
      "2 days to expiration",
      "Whatever strike has the lowest dollar price"
    ],
    correctIndex: 1,
    explanation: "Match the contract to the thesis. A multi-week idea needs multi-week time, plus a buffer, because theta burns short-dated options fastest. Cheap 2 DTE contracts are cheap because they are almost out of time. Buy more clock than you think you need."
  },
  {
    id: "blitz-20",
    question: "Your long call is down 50 percent and the support level your whole thesis was built on just broke. The move?",
    options: [
      "Add more at half price",
      "Hold to expiration, it might come back",
      "Roll it out a month and double the size",
      "Cut it and take the loss"
    ],
    correctIndex: 3,
    explanation: "The trade was built on a level, and the level broke. That is a busted play, not a discount. Averaging down on a broken thesis is throwing good money after bad. Take the loss, log the film, find the next setup."
  },
  {
    id: "blitz-21",
    question: "The stock has chopped in a 2 percent range for three weeks. No catalyst on the calendar. You are bored out of your mind. The play?",
    options: [
      "No trade, sit on your hands",
      "Buy weekly calls, it is due for a move",
      "Buy weekly puts, it is due for a drop",
      "Flip a coin and pick a direction"
    ],
    correctIndex: 0,
    explanation: "Boredom is not a setup. No edge, no trade. Buying short-dated premium in a dead-quiet chop hands theta the win every day while the stock goes nowhere. Pros wait for the setup to come to them. Sitting on the bench when there is no play IS the play."
  }
];

export const marketReadPool: MarketRead[] = [
  {
    id: "read-1",
    title: "The Coiled Spring",
    setup: "DKWL has traded in a tight 47-to-50 box for eight straight weeks while its sector ETF presses new highs. Today it clears 50 on triple its average volume and closes near the high of the day. IV rank sits at a sleepy 25, and earnings are six weeks out.",
    correctCall: "bullish",
    explanation: "This is a textbook breakout: long base, dry-powder volume arriving on the move, sector at its back, and no binary event in the way. Cheap IV means call buyers are not overpaying for the ride. The longer the base, the bigger the space."
  },
  {
    id: "read-2",
    title: "Broken and Rejected",
    setup: "TRNX cut full-year guidance two weeks ago and knifed through its 200-day moving average at 88 on the heaviest volume in a year. Since then it has crawled back up to retest 88 from below, stalled there for three sessions, and printed two weak red closes at the level.",
    correctCall: "bearish",
    explanation: "Old support becomes new resistance, and 88 just got tested and rejected. Fundamental damage plus a broken 200-day plus a failed retest is the bear trifecta. Pros do not catch this knife, they ride it. The path of least resistance is down."
  },
  {
    id: "read-3",
    title: "The Mud Bowl",
    setup: "MMTC has whipsawed between 61 and 64 for three weeks, with volume drying up every session. There is no earnings report, no product event, and no sector catalyst for at least two more weeks. IV rank is 15 and intraday ranges keep shrinking.",
    correctCall: "neutral",
    explanation: "This is chop with no clock and no catalyst, the kind of field where directional premium buyers slowly bleed out. No edge in either direction means the pro call is no call. Set alerts at 61 and 64 and let the stock declare itself first."
  },
  {
    id: "read-4",
    title: "Pullback to the Line",
    setup: "A stock in a six-month uptrend pulls back 7 percent over two weeks to its rising 50-day moving average at 132. Volume shrinks the whole way down, then it prints a hammer reversal candle right on the line with volume picking back up. Earnings are six weeks away and the market is in a confirmed uptrend.",
    correctCall: "bullish",
    explanation: "Light-volume pullbacks in strong uptrends are rest, not reversal. The hammer on rising volume at the 50-day says buyers defended the line where they always do. Trend, location, and trigger all agree, and the invalidation level is clear right below the low."
  },
  {
    id: "read-5",
    title: "The Blowoff",
    setup: "After grinding higher for months, QRVT goes vertical: up 60 percent in three weeks on retail frenzy. Today it gaps up to 95, reverses hard, and closes all the way down at 84 on the heaviest volume in its history. That is an outside reversal day after a parabolic run.",
    correctCall: "bearish",
    explanation: "Parabolic moves end with exhaustion, and a massive-volume gap-up-and-reverse is the classic climax signature. The last buyers just got trapped at the top. It may bounce, but risk-reward now favors the downside, and longs without an exit plan become the fuel."
  },
  {
    id: "read-6",
    title: "Earnings Coin Flip",
    setup: "HLXC reports tonight after the close. The stock sits dead center of its three-month range at 74. IV percentile is 96 and the options market is pricing an expected move of plus or minus 9 percent. You have no edge on the quarter and the chart gives no lean.",
    correctCall: "neutral",
    explanation: "Mid-range chart, no informational edge, and options priced near the richest levels of the year: that is a coin flip where you pay a premium to enter the coin flip. The pro read is stand down tonight and trade the reaction tomorrow after IV resets and the direction is revealed."
  },
  {
    id: "read-7",
    title: "History Tape: The Guidance Shock",
    setup: "May 2023. NVIDIA reports earnings and guides next-quarter revenue to roughly 11 billion against Wall Street's 7.2 billion estimate, a number so far above the line analysts double-check it. The stock gaps about 24 percent to all-time highs the next morning as every major bank scrambles to raise targets on the AI buildout.",
    correctCall: "bullish",
    explanation: "Gaps to new all-time highs on genuine paradigm-shifting news tend to run, because there is no overhead supply, no trapped sellers above. This was not a rumor pop, it was a rewrite of the earnings power. Historically, the gap-and-go on news this big rewarded buyers, not faders."
  },
  {
    id: "read-8",
    title: "Under the Wall",
    setup: "A former leader trades below its declining 20-day and 50-day moving averages while the broad market sits near highs, a glaring relative-weakness flag. It broke 70 support last month, rallied back to 70 twice, and got stuffed both times on rising sell volume.",
    correctCall: "bearish",
    explanation: "Relative weakness in a strong tape is the tell: if it cannot rally when everything else does, who is going to carry it? Two failed retests of broken support confirm sellers are camped at 70. Bears have the level, the trend, and the tape."
  },
  {
    id: "read-9",
    title: "Ninety Minutes to the Fed",
    setup: "It is 12:30 pm on Fed decision day. The statement drops at 2:00. SPY is pinned to VWAP in a 0.3 percent range on dead volume, and the stock you are watching is glued to its open price. Every tiny push in either direction gets faded within minutes.",
    correctCall: "neutral",
    explanation: "Pre-Fed drift is a no-man's-land: algorithms park the market until the news hits, and whatever move you see first after 2:00 often reverses violently. Trading the dead zone before a known macro catalyst is donating theta and spread. Wait for the real move to declare itself."
  },
  {
    id: "read-10",
    title: "Cup, Handle, Trigger",
    setup: "VYRD spent five months carving a cup base from 78 down to 58 and back, and for the past two weeks has drifted sideways in a tight handle between 72 and 74 on shrinking volume. Its relative strength line just hit a new high before the price did, and accumulation days outnumber distribution days three to one.",
    correctCall: "bullish",
    explanation: "RS line hitting new highs ahead of price is one of the strongest tells in the scouting report, big money is already leaning in. A quiet handle on dry volume is the market loading the spring. The bias is bullish with a clean trigger above 74 and a tight invalidation below the handle low."
  },
  {
    id: "read-11",
    title: "Neckline Snap",
    setup: "Over four months SNTQ built a head-and-shoulders top: peak at 225, higher peak at 240, lower peak at 222, with the neckline sitting at 210. Last night its largest customer warned on spending, and today SNTQ slices through 210 on four times average volume, closing at 204.",
    correctCall: "bearish",
    explanation: "A completed head-and-shoulders with a high-volume neckline break is distribution finishing its job, and this one came with a fundamental trigger attached. Measured-move logic targets the height of the pattern projected down from 210. Bounces back toward the neckline are now selling opportunities, not entries."
  },
  {
    id: "read-12",
    title: "Great News, Terrible Location",
    setup: "PLMR posts a blowout quarter and gaps up 11 percent at the open, landing exactly at 150, the 18-month resistance level that has rejected three prior rallies. IV is still elevated from the print, and by late morning the stock is fading from the open as early buyers ring the register.",
    correctCall: "neutral",
    explanation: "Strong report, but the gap spent the whole move just reaching the toughest level on the chart, and elevated IV means options are still priced rich. Good news at major resistance with a morning fade is unresolved, not bullish. Let it either reclaim and hold above 150 or reject, then trade what it shows you."
  },
  {
    id: "read-13",
    title: "The Flush and Reclaim",
    setup: "A sector panic drags BRKW down 18 percent in four days, undercutting its 200-day moving average and stopping out every weak hand. The next session it reverses, reclaims the 200-day on its biggest up-volume day in a year, and closes at the high of the day while the sector news gets walked back.",
    correctCall: "bullish",
    explanation: "Capitulation flush, undercut of an obvious level, then a high-volume reclaim closing at the highs, that is the shakeout-and-recover sequence pros hunt. The sellers got exhausted and the reclaim proves demand showed up in force. Risk is defined cleanly below the reversal low."
  },
  {
    id: "read-14",
    title: "Sympathy Warning",
    setup: "Last night DRVN's closest competitor guided next-quarter revenue down 20 percent, blaming the exact end market both companies sell into. DRVN still trades within 3 percent of all-time highs and reports in three weeks. Meanwhile its chart has stacked five distribution days in two weeks, heavy-volume selling into every rally.",
    correctCall: "bearish",
    explanation: "When the closest comp pre-announces weakness in a shared end market, the read-through is real even before DRVN says a word. Price near highs while distribution days pile up means big money is using the strength to exit. The setup leans short into the print, or at minimum out of longs."
  },
  {
    id: "read-15",
    title: "Pinned on Expiration Day",
    setup: "It is monthly options expiration Friday and GRDX is glued to 120, the strike with by far the largest open interest on the chain. Every push to 121 gets pulled back, every dip to 119 gets lifted, and there is no news anywhere on the wire. Volume is average but the range keeps tightening into the afternoon.",
    correctCall: "neutral",
    explanation: "This is pin risk in action: hedging flows around a massive open-interest strike act like a magnet on expiration day, sanding down every move. Buying direction into a pin is paying premium to fight a magnet. The chop usually breaks AFTER expiration, so the pro waits for Monday."
  }
];

export const filmRoomPool: FilmRoomCase[] = [
  {
    id: "film-1",
    title: "Film: META, February 2022",
    story: [
      "February 2, 2022. A trader loads up on weekly Meta calls hours before earnings. The logic: Meta had beaten estimates for years, the stock had been consolidating, and the calls looked cheap relative to the upside if it popped.",
      "The report lands like a sack from the blindside. Daily active users decline for the first time in company history, guidance comes in way light, and management points to Apple privacy changes torching ad targeting. The next day the stock drops about 26 percent, erasing over 230 billion dollars of market value, at the time the biggest one-day value wipeout any stock had ever taken.",
      "The weekly calls open worth essentially zero. There was no managing the trade, no stop loss to honor. The gap happened overnight while the market was closed, and the entire position was gone before the trader could click a button."
    ],
    lesson: "Earnings are binary events: the move happens in one overnight gap that no stop loss can protect you from. Any premium held through a print can go to zero on one headline, so size every earnings play like that is a real possibility, because it is."
  },
  {
    id: "film-2",
    title: "Film: GameStop, January 2021",
    story: [
      "Late January 2021. GameStop is the only story on the planet. The stock has gone from under 20 to over 300 in days, the squeeze is all over the news, and a trader decides to grab calls and join the run.",
      "Here is what the ticket actually cost: implied volatility on those options had exploded into the several-hundreds. Calls that would normally cost a few hundred dollars cost thousands. The premium was priced as if the stock would keep moving violently forever.",
      "The stock did keep swinging wildly, touching an intraday high near 483 before brokers restricted buying and the price collapsed. But many late call buyers lost money even on days the stock went UP, because IV deflated faster than the stock climbed. They were right about the chaos and still lost."
    ],
    lesson: "The price of the option matters as much as the direction of the stock. When IV goes vertical, you can nail the story and still lose, because you paid for a move even bigger than the insanity you got. Always check what the premium is pricing in before you pay it."
  },
  {
    id: "film-3",
    title: "Film: The COVID Crash, March 2020",
    story: [
      "Late February 2020. The market starts sliding on virus headlines and a trader starts buying the dip, full size, every leg down. The playbook had worked for years: every dip got bought, every scare faded.",
      "This time the field changed. The S&P fell 34 percent in about a month. Circuit breakers halted trading four times in two weeks, something that had not happened in decades. Each full-size dip-buy got run over by the next leg down, and by mid-March the account was down roughly 70 percent with no dry powder left for the actual bottom.",
      "A second trader in the same storm sized every probe at a quarter of normal, kept most of the account in cash, and was still standing on March 23 when the real bottom printed. Same market, same opportunity. Only one of them had ammunition left."
    ],
    lesson: "In a crisis, survival is the whole game plan. Position size is the only variable you fully control, and it decides whether you are still on the field when the genuine opportunity arrives. Never go full size into a falling market on the assumption that history rhymes on your schedule."
  },
  {
    id: "film-4",
    title: "Film: NVDA, May 2023",
    story: [
      "Spring 2023. A trader builds a thesis: AI datacenter demand is real, NVIDIA is the only arms dealer in the war, and the market is still pricing it like a normal chip cycle. Weeks before the May earnings report, with IV rank moderate, the trader buys June calls, far enough out to survive being early, sized so a total loss would sting but not wound.",
      "May 24, 2023. NVIDIA guides next-quarter revenue to roughly 11 billion against a 7.2 billion consensus, one of the largest guidance beats in large-cap history. The stock gaps about 24 percent the next day to all-time highs.",
      "The calls multiply. But look at the film closely: the win was built weeks earlier, in the unglamorous decisions. Real thesis, time bought beyond the catalyst, premium purchased before it got expensive, size that allowed holding through the wait."
    ],
    lesson: "Big wins are the trifecta: a genuine thesis, enough time on the contract to be early without being dead, and premium bought at a sane IV before the crowd shows up. The entry ticket is decided in the quiet weeks, not on the highlight-reel day."
  },
  {
    id: "film-5",
    title: "Film: The Average-Down Spiral",
    story: [
      "A trader buys calls on a biotech at 30 after a hot streak, risking 300. The stock slips to 27 and breaks the support level the whole trade was based on. Instead of cutting, the trader buys more calls, now cheaper, to lower the average.",
      "The stock keeps bleeding. At 24, another add, because now it is REALLY cheap. At 21, one more, this time using money earmarked for other setups. The thesis level broke at 27, but the position kept growing for 6 more points of downside.",
      "Final damage: a planned 300 loss became a 2,100 loss, seven times the original risk, on a chart that never gave a single buy signal after the break. The first loss was a paper cut. The averaging turned it into a season-ending injury."
    ],
    lesson: "Never add to a losing options trade after the thesis breaks. Averaging down does not lower your average so much as it raises your exposure to a trade the market already told you was wrong. The first loss is the cheapest loss you will ever be offered."
  },
  {
    id: "film-6",
    title: "Film: The Boring Playbook Win",
    story: [
      "A trader watches a strong uptrend stock for three weeks, doing nothing. The plan is written in advance: only buy a pullback to the rising 50-day moving average, only on a reversal signal, only with 60 days of time on the contract.",
      "The pullback comes. The stock taps the 50-day at 84, prints a strong reversal day, and the trader buys 0.60 delta calls two months out, risking 1.5 percent of the account, with the exit defined: out if the stock closes below the swing low at 81.",
      "The stock rallies 11 percent over five weeks. Half the position comes off at a 50 percent gain, the rest at 110 percent when the stock stalls at prior highs. No drama, no sweat, no diamond hands. Every decision was made before the money was ever at risk."
    ],
    lesson: "A written plan beats a brilliant prediction. Entry trigger, contract selection, position size, and exits were all decided in advance, so emotion never got a vote. Boring execution of a real edge is what compounding actually looks like."
  },
  {
    id: "film-7",
    title: "Film: The No-Trade That Won",
    story: [
      "Two friends watch the same setup: a high-flyer reporting earnings that night, IV percentile 97, expected move 12 percent priced in. Trader A sees a coin flip with an expensive ticket and passes, planning to trade the reaction the next morning instead.",
      "Trader B sees free money, buys weekly calls with a third of the account, and posts the position online. The company beats estimates, but guides flat. The stock gaps down 9 percent, inside the expected move, and the calls open down 95 percent.",
      "The next morning, Trader A watches the gap-down find support at a major level, waits for the reclaim, and buys calls at one-third the IV from the night before. Clean entry, defined risk, no coin flip. One trader gambled on the print. The other traded the aftermath."
    ],
    lesson: "Flat is a position. Skipping a coin flip you have no edge on is not missing out, it is defense, and the post-earnings session usually offers a better-priced, better-defined trade than the print itself. You do not have to swing at every pitch to win the game."
  },
  {
    id: "film-8",
    title: "Film: The Friday Lotto Habit",
    story: [
      "A trader discovers same-day expiration options. Tiny cost, massive payoff when they hit. The first win, an 80 dollar lotto that paid 900, rewires the brain instantly. Friday becomes lotto day, every week.",
      "The wins are loud and the losses are quiet, so the scoreboard FEELS great. But the journal tells the truth: over thirteen weeks, four wins totaling 2,300, and twenty-two total losses adding up to 4,100. The account is down 60 percent of its starting trading capital on a strategy that felt like winning.",
      "Nothing about any single Friday was a blowup. It was a slow bleed dressed up as entertainment, with theta collecting the toll every single time the lotto ticket missed, which was most of the time, because that is what maximum-gamma, zero-time options do."
    ],
    lesson: "Lottery-ticket options have lottery math: rare loud wins funded by constant quiet losses. Theta and probability are the house edge, and the house grinds you down precisely because no single loss feels like it matters. Track your full record, not your highlight reel."
  },
  {
    id: "film-9",
    title: "Film: Buying Vol When It Was Quiet",
    story: [
      "A software company schedules a major platform launch eight weeks out. The stock has gone quiet, drifting in a slow uptrend, and IV rank has sagged to 10, options priced near the cheapest levels of the year while a known catalyst sits on the calendar in plain sight.",
      "The trader buys 90-day calls, paying the lowest premium the chain had offered all year, sized at 2 percent of the account. The thesis: even before the launch, anticipation alone should wake the options market up.",
      "The stock grinds up 9 percent over six weeks, and IV rank climbs from 10 to 45 as launch hype builds. The calls gain from delta AND vega at the same time, two engines instead of one, and the position doubles before the event even arrives. The trader exits before the launch, selling the inflated premium back to the crowd."
    ],
    lesson: "The best time to buy options is when volatility is cheap and a real catalyst is visible but not yet priced. Cheap IV plus a known clock gives you two ways to win, direction and volatility expansion, and lets you sell the hype instead of paying for it."
  },
  {
    id: "film-10",
    title: "Film: Right Thesis, Wrong Clock",
    story: [
      "A trader does genuinely great homework on an industrial name: new contract cycle, margin inflection, a chart coiling under resistance at 95. The thesis says it rerates to 110. To keep the cost down, the trader buys calls expiring in three weeks instead of three months.",
      "The stock chops sideways for three weeks. Nothing breaks the thesis, but nothing confirms it either, and the calls decay to dust. The trader, disgusted, does not re-enter.",
      "Eight days after expiration, the stock breaks out at 95 and runs to 112 in a month, almost exactly the projected move. The analysis earned an A. The trade earned a total loss. The only mistake on the entire ticket was the date printed on it."
    ],
    lesson: "An option is a bet on direction AND a deadline, and the deadline is the part that kills good analysis. Buy meaningfully more time than your thesis needs, because being early is indistinguishable from being wrong when your contract expires before the move."
  },
  {
    id: "film-11",
    title: "Film: TSLA 2020 and the Sell That Hurt",
    story: [
      "Early 2020. A trader buys long-dated Tesla calls on a simple thesis: demand inflecting, production scaling, shorts trapped. The plan, written down, takes profits if the position triples. By August 2020, with the stock ripping into the 5-for-1 split announcement, the calls have more than tripled. The trader sells, per the plan.",
      "Tesla keeps going. And going. By year end the stock has finished up over 740 percent for 2020, and the calls the trader sold would have been worth several times more. Every day of that run feels like a personal insult.",
      "Here is the film-room truth: the trade followed a written plan, banked a triple, and kept risk controlled the entire way. Nobody sells the exact top, ever. The same discipline that left money on the table this time is the discipline that prevents round-tripping a winner to zero the other ninety-nine times."
    ],
    lesson: "Judge your decisions, not your outcomes. Selling at a planned target and watching the stock keep running is not a fumble, it is the system working. The goal is not to catch the whole move, it is to repeatably take the middle and survive forever."
  },
  {
    id: "film-12",
    title: "Film: One Play, One Third of the Account",
    story: [
      "A trader with a 20,000 account develops total conviction in one earnings play and puts 7,000, 35 percent of the account, into calls expiring that Friday. The thinking: when you KNOW, you bet big.",
      "The company actually beats on revenue. But margins disappoint, guidance is cautious, and the stock sells off 7 percent. The calls open nearly worthless. One report, one position, and the account is down 35 percent in a single overnight session.",
      "Now the brutal math of drawdowns: a 35 percent loss requires a 54 percent gain just to get back to even. Months of disciplined, well-sized trading after that did not fully repair what one oversized swing destroyed in twelve hours."
    ],
    lesson: "Drawdown math is merciless: lose 35 percent and you need 54 percent to recover, lose 50 and you need 100. Conviction is not a sizing model. Cap every single position so that the worst case is a bruise, never an amputation."
  },
  {
    id: "film-13",
    title: "Film: The Stop That Saved the Season",
    story: [
      "A trader is long calls on a retailer, bought when the stock bounced off support at 64. The written rule: out on a daily close below 64, no debate, no overtime. Three weeks in, sector news hits and the stock closes at 63.10.",
      "Everything in the trader's gut screams hold: the option is down 40 percent, the news feels overblown, and selling means locking the loss. The trader sells at the close anyway, because the rule is the rule.",
      "Over the next month the stock falls another 25 percent as the sector unravels, and those calls go to zero. The 40 percent loss that felt unbearable was the cheapest exit ever offered. The stop did not just save money, it saved the confidence and capital to keep playing."
    ],
    lesson: "First loss, best loss. A stop honored at the thesis level converts a potential catastrophe into a routine, budgeted expense. The discipline feels terrible in the moment exactly because it is working, it fires when hope is loudest."
  },
  {
    id: "film-14",
    title: "Film: The August 2024 Vol Spike",
    story: [
      "August 5, 2024. Japan's yen carry trade unwinds overnight, the Nikkei drops 12 percent, and the VIX touches 65 in the premarket, its highest reading since the COVID crash. A trader wakes up, sees red everywhere, and buys SPY puts at the open to ride the meltdown.",
      "Those puts were priced off panic-level IV, the most expensive insurance the market had sold in four years. The S&P closed that day down about 3 percent, then stabilized. Within days the VIX collapsed back below 25 and the market recovered the entire drop within roughly a week.",
      "The puts lost most of their value even though the market wobbled for days, because the IV crush on the way down was bigger than any move the market delivered. The trader bought fear at its all-time retail price, right before fear went on clearance."
    ],
    lesson: "By the time panic is the headline, panic is in the premium. Buying options after a volatility spike means paying peak prices for protection that mean-reversion is about to deflate. The time to own insurance is before the storm, when nobody wants it."
  },
  {
    id: "film-15",
    title: "Film: The Trader Who Benched Himself",
    story: [
      "After a flat, frustrating year, a trader finally audits the journal: 214 trades, every one tagged by setup type. The numbers are a cold shower: breakout entries from proper bases were solidly profitable, while everything else, dip-buys without signals, news chases, boredom trades, netted out to a meaningful loss.",
      "One setup carried the whole season, and the rest of the playbook was paying its bills. So the trader makes one change: trade ONLY the A-plus breakout setup, full stop. Trade count drops about 70 percent the next year.",
      "Results flip. Fewer trades, smaller drawdowns, and the account posts its best year, not because the trader got smarter, but because the losing plays got benched. The edge was always there. It was just buried under volume."
    ],
    lesson: "Shot selection is the skill. Most traders have one or two setups that actually carry an edge, drowned out by dozens of trades that exist only to fight boredom. Find your A-plus play in the data and have the discipline to wait for it. Less, but better."
  }
];

export const bossPool: BossChallenge[] = [
  {
    id: "boss-1",
    title: "BOSS: Earnings Week at VLTA",
    intro: "FRIDAY NIGHT LIGHTS. This one is for 2,000 XP. VLTA reports Thursday after the bell and the whole street is watching. You get four decisions. Every one of them is a fork between the pro move and the trap. Survive the print.",
    parts: [
      {
        question: "Monday. VLTA trades at 140, earnings hit Thursday night. IV percentile is 92, the weekly at-the-money straddle costs 18, and you are bullish on the quarter. What is the FIRST read a pro makes before touching the order ticket?",
        options: [
          "Buy weekly 140 calls now and hold them through the print",
          "Wait until Thursday at 3:55 pm to buy calls at cheaper prices",
          "Buy double the usual contracts since earnings guarantees a move",
          "The straddle is pricing roughly a plus-or-minus 9 dollar move"
        ],
        correctIndex: 3,
        explanation: "Read the line before you bet the game. IV percentile 92 and an 18 dollar straddle on a 140 stock means the market is already braced for roughly a plus-or-minus 9 move. Premium buyers do not get paid for A move, only for a move BIGGER than the one priced in. And Thursday afternoon calls are not cheaper, they are maximum crush exposure."
      },
      {
        question: "You bought a small, planned position of 145 calls Monday. By Wednesday, pre-earnings momentum has carried VLTA to 146 and your calls are up 70 percent, with the print still 24 hours away. The play?",
        options: [
          "Take the 70 percent and exit before the print, per the plan",
          "Hold everything through the print, momentum proves the thesis",
          "Add more contracts, winners deserve reinforcements",
          "Move your stop up and hold full size through earnings"
        ],
        correctIndex: 0,
        explanation: "The run-up WAS the trade. Pre-earnings drift plus rising IV handed you 70 percent without ever facing the binary. Holding through the print converts a banked win into a coin flip where IV crush starts you in a hole. Stops do not protect you overnight, the gap happens while the market is closed."
      },
      {
        question: "You kept one small rider call through the print against the plan. VLTA BEATS and opens Friday up 5 dollars at 151. But your 145 call barely budges and your friend's 150 calls are down 60 percent. What happened?",
        options: [
          "Market makers manipulated the opening print",
          "IV crush vaporized the extrinsic value",
          "The report was secretly worse than the headlines",
          "Earnings winners always sell off the next morning"
        ],
        correctIndex: 1,
        explanation: "Direction right, trade flat. Before the print those options carried a massive volatility premium pricing a 9 dollar move. The stock delivered 5, inside the line, and post-earnings IV collapsed, vaporizing the extrinsic value. Your 145 call survived on intrinsic value. The 150 calls were ALL extrinsic, so they got crushed despite the stock rallying."
      },
      {
        question: "Next quarter, the identical setup appears: VLTA at highs, IV percentile 90-plus, you are bullish again. What is the system takeaway you carry forward?",
        options: [
          "Never trade anything near an earnings report again",
          "Buy puts through the print, since crush punishes calls",
          "Trade the run-up, size small, exit before the binary",
          "Double the size next quarter to win the rider loss back"
        ],
        correctIndex: 2,
        explanation: "The lesson is not fear, it is precision. Pre-earnings momentum with rising IV is a real, repeatable edge. Holding premium through the print at 90-plus IV percentile is a tax, and the expected move is always the bar your trade has to clear. The crush is direction-neutral: puts get vaporized exactly like calls. Same game next quarter, same plan, same paycheck."
      }
    ]
  },
  {
    id: "boss-2",
    title: "BOSS: The Long Drive",
    intro: "SUNDAY, PRIME TIME. 2,000 XP on the table. RDGE is in a six-month uptrend and you are going to manage one trend trade from kickoff to final whistle: entry, contract, management, exit. Four quarters. No shortcuts. Drive the field.",
    parts: [
      {
        question: "RDGE has been riding its rising 50-day moving average for six months. It just pulled back 6 percent to that line at 84 on shrinking volume. Your entry decision?",
        options: [
          "Buy right now, the rising 50-day has held for six months",
          "Wait for a new all-time high first, then buy with confidence",
          "Wait for a strong reversal day at the line, then enter",
          "Skip it, pullbacks this deep usually start downtrends"
        ],
        correctIndex: 2,
        explanation: "Location plus trigger. The pullback to a rising 50-day on quiet volume is the location, but you still wait for buyers to show up, a strong reversal candle, before committing, with your invalidation set below the swing low. Buying blind assumes the line holds; waiting for new highs surrenders the entire risk-reward advantage of entering at support with a tight stop."
      },
      {
        question: "The reversal day prints. Now pick the weapon. Your thesis is a multi-week move back toward the prior high at 92. Which contract?",
        options: [
          "Calls 7 days out at 0.15 delta, nearly free",
          "Calls 45 to 60 days out at around 0.60 delta",
          "Weekly at-the-money calls for maximum gamma",
          "Two-year LEAPS, since more time is always better"
        ],
        correctIndex: 1,
        explanation: "Match the weapon to the play. A multi-week thesis needs more time than the thesis, so 45 to 60 days gives you the move plus a buffer against being early. A 0.60 delta means the option meaningfully tracks the stock. Cheap far-OTM weeklies are a theta donation, and two-year LEAPS tie up capital paying for 20 months you do not need."
      },
      {
        question: "Two weeks in: RDGE has rallied to 90.50 and your calls are up 55 percent, with the prior high at 92 overhead. Manage the position.",
        options: [
          "Sell everything immediately, never let a winner breathe",
          "Hold everything, the trend is your friend forever",
          "Add more contracts, press the bet while it works",
          "Sell half into strength and raise the exit line on the rest"
        ],
        correctIndex: 3,
        explanation: "Scale-out is how pros resolve the hold-or-sell fight: banking half locks in a real win and pays for the trade, while the runner keeps you on the field if 92 breaks into open air. Selling all surrenders the breakout scenario, holding all risks round-tripping at resistance, and adding NEAR resistance is pressing at the worst spot on the chart."
      },
      {
        question: "Fourth quarter. RDGE broke through 92, ran to 97, but today it slices through the rising 50-day, the line that defined the entire trend, and closes below it on the highest volume in three months. Your runner is still up 80 percent. The call?",
        options: [
          "Exit the runner and bank the 80 percent",
          "Hold, this break is probably just a shakeout",
          "Add at a discount, strong trends always resume",
          "Hold but stop watching the chart for a week"
        ],
        correctIndex: 0,
        explanation: "You entered because of the 50-day trend, so you exit when the 50-day trend breaks, especially on the heaviest volume in months, which means big money is leaving. It might bounce, but trading the plan means the signal that built the trade is the signal that ends it. Up 80 percent on the runner with the thesis dead is called the final whistle."
      }
    ]
  },
  {
    id: "boss-3",
    title: "BOSS: The Skid",
    intro: "GUT CHECK GAME. 2,000 XP. Four straight losses, account down 8 percent, and your confidence is in the tank. This boss fight is not about charts, it is about whether YOU can be managed. Most traders never beat this level. Prove you are not most traders.",
    parts: [
      {
        question: "Four consecutive losing trades, account down 8 percent, and you can feel the frustration in your chest. The very next thing a professional does?",
        options: [
          "Cut position size sharply and slow your trade frequency",
          "Find one bigger setup to win the whole drawdown back at once",
          "Switch strategies completely, the playbook is clearly broken",
          "Keep the exact same size, since changing anything is emotional"
        ],
        correctIndex: 0,
        explanation: "Shrink until the pressure is gone and treat the next stretch as rebuilding mode. Cutting size after a streak protects the account from your own tilted judgment, which is statistically at its worst right now. Hunting a get-it-back trade is the classic blowup script, and torching the whole playbook over four trades is overreacting to a sample size of four."
      },
      {
        question: "Day two of the skid. A setup appears, a B-grade chart at best, but your gut SCREAMS that doubling your normal size here erases the whole losing streak in one play. Decision?",
        options: [
          "Take it at double size",
          "Take it at normal size",
          "Take it small, but add if it starts working",
          "Skip it and stay on the bench"
        ],
        correctIndex: 3,
        explanation: "Name the play: a revenge trade wearing a costume. The tell is not the chart, it is the MOTIVE, the urge to erase the streak rather than execute an edge. B-grade setup plus emotional reasoning plus a size increase is three alarms ringing at once. Even normal size is wrong here because the decision engine itself is compromised."
      },
      {
        question: "Weekend film session. You open the journal to review the four losses. What are you actually looking for?",
        options: [
          "Proof that the market was rigged against you this week",
          "Sort each loss into followed-the-rules versus broke-the-rules",
          "The one indicator that would have predicted all four losses",
          "Confirmation that you should feel terrible about the week"
        ],
        correctIndex: 1,
        explanation: "Process versus variance is the only review that matters. Rule-following losses are tuition, an edge can lose four straight and still be an edge, the math allows it. Rule-BREAKING losses are the fixable disease. The film might show four good plays that did not convert, or it might show you freelancing. Different diagnoses, totally different prescriptions."
      },
      {
        question: "The review showed two variance losses and two rule breaks, now patched. Ten days later a genuine A-plus setup fires, your best pattern, textbook clean. How do you come back onto the field?",
        options: [
          "Full size immediately, the review fixed everything",
          "Skip it, you have not earned a win yet",
          "Take it at quarter-to-half of your normal size",
          "Full size plus extra to start recovering the drawdown"
        ],
        correctIndex: 2,
        explanation: "Re-entry is a ramp, not a switch. Reduced size on an A-plus setup gets you executing and rebuilding confidence with real stakes, while protecting the account in case the tilt is not fully gone. You earn your way back to full size with two clean weeks of executed process, not with one good feeling. Skipping A-plus setups out of self-punishment is just tilt wearing a different jersey."
      }
    ]
  },
  {
    id: "boss-4",
    title: "BOSS: The Crush Trap",
    intro: "TRAP GAME ALERT. 2,000 XP. GENR, a mid-cap biotech, faces an FDA decision Friday and the options chain has gone radioactive. Everyone in your feed is buying calls. Four decisions stand between you and the most expensive lesson in options. Eyes open.",
    parts: [
      {
        question: "GENR trades at 40 with the FDA decision Friday. Implied volatility on the weeklys has hit 240 percent and the at-the-money straddle costs 14, on a 40 dollar stock. First read: what is that chain actually telling you?",
        options: [
          "An IV of 240 percent means the stock is guaranteed to explode higher",
          "The chain is pricing about a 35 percent move in either direction",
          "The options are badly mispriced and free money is on the table",
          "High IV is just noise as long as you get the direction right"
        ],
        correctIndex: 1,
        explanation: "A 14 dollar straddle on a 40 dollar stock means the market is braced for roughly a plus-or-minus 35 percent swing. That is the bar YOUR trade has to clear, direction alone is not enough, you need the move to beat the move already in the price. IV this high is not a tip, it is a toll."
      },
      {
        question: "Your friend's pitch: \"Approval sends it to 60. The 50 calls cost 5. That is a double, easy money.\" What is the flaw in the plan?",
        options: [
          "Nothing, a 60 print makes the 50 calls worth 10, a clean double",
          "The strike is wrong, the 45 calls are the smarter buy here",
          "He is only pricing the single best-case branch of the trade",
          "He should buy twice as many contracts to improve his odds"
        ],
        correctIndex: 2,
        explanation: "He showed you one branch of the tree and called it the whole tree. Run all three: rejection means zero, a modest approval pop to 52 leaves the calls holding 2 of intrinsic while IV collapses, down 60 percent ON A WIN, and only the moonshot pays. When two of three outcomes lose, including one where your direction call is correct, the easy-money math is an illusion."
      },
      {
        question: "Decision time, Thursday afternoon. Pick your play for the FDA binary.",
        options: [
          "Skip it, or risk only a tiny stake you have written off",
          "Buy the 50 calls at size, your homework beats the crowd",
          "Buy puts instead, the contrarian side is where the edge is",
          "Buy the straddle, it has to move big one way or the other"
        ],
        correctIndex: 0,
        explanation: "The crush is direction-neutral, it hits puts exactly as hard as calls, so flipping sides buys you the same trap with a different logo. The straddle costs the full 35 percent expected move, so it needs MORE than the priced-in chaos to profit. With no informational edge on the science, the pro plays are pass, or lottery-ticket size with zero expectations."
      },
      {
        question: "Friday: APPROVAL. GENR opens up 18 percent at 47.20. Your friend's 50 calls, bought for 5, are trading at 1.10, down nearly 80 percent on the best news of the year. Final exam: why?",
        options: [
          "The market clearly did not understand what the approval was worth",
          "Market makers stole the move at the opening print",
          "He just needed to hold to expiration for the comeback",
          "The move landed inside the expected move and IV collapsed"
        ],
        correctIndex: 3,
        explanation: "An 18 percent pop sounds enormous until you remember the chain priced 35. The stock never reached the 50 strike, so the calls are pure extrinsic value, and extrinsic value is exactly what IV crush destroys, 240 to 60 overnight. Direction: correct. News: best case. Trade: demolished. In binaries, you are not betting on the event, you are betting AGAINST the price of the event."
      }
    ]
  },
  {
    id: "boss-5",
    title: "BOSS: The Breakout",
    intro: "CHAMPIONSHIP SATURDAY. 2,000 XP rides on RDLN, twelve weeks of tight, quiet base-building under 60 and the crowd has fallen asleep on it. Breakout trades look easy on highlight reels. The four decisions in this gauntlet are where they are actually won. Clock is running.",
    parts: [
      {
        question: "RDLN has based between 55 and 60 for twelve weeks, with volume drying to a trickle and the range tightening for three straight weeks. Define your entry trigger.",
        options: [
          "Buy at 58 now and front-run the breakout at a better price",
          "Wait until it is 10 percent past 60 to be sure it is real",
          "Buy every touch of 60 until one finally breaks through",
          "Buy the move through 60 only on a clear surge in volume"
        ],
        correctIndex: 3,
        explanation: "Price tells you what, volume tells you who. A push through 60 on 2x-plus average volume means institutions are driving, not day-trade tourists, and that participation is what separates a breakout from a head fake. Front-running at 58 is a guess wearing a plan's jersey, waiting for plus-10 surrenders the tight-risk entry, and buying every touch is paying repeated tolls to watch other people fail."
      },
      {
        question: "Trigger fires: RDLN clears 60 on heavy volume and you enter calls at 61.50 with a written rule, out on a daily CLOSE below 58. Next day the stock reverses hard and closes at 58.80, ugly, but above your line. Decision?",
        options: [
          "Hold and do not add, the written stop has not been hit yet",
          "Sell everything now, the reversal means the breakout failed",
          "Average down here, the pullback is a gift at these prices",
          "Widen the stop to 55 to give the trade more room to breathe"
        ],
        correctIndex: 0,
        explanation: "Breakouts shake the tree on purpose, the pullback-and-recover is one of the most common sequences in the pattern, and your plan was built knowing that. The stop said CLOSE below 58, not feels-bad-at-58.80. Panic-selling above your line and widening the stop are the same crime in opposite directions: rewriting rules mid-play. Hold the line you wrote, and never add to a trade on probation."
      },
      {
        question: "The shakeout completes: RDLN retakes 60, then powers to 66, up 10 percent from the pivot, and your calls are up 85 percent. Manage it.",
        options: [
          "Sell nothing yet, breakout stocks run 30 percent minimum",
          "Sell everything, 85 percent is plenty and greed is a sin",
          "Take partial profits and raise the exit line to your entry zone",
          "Add a fresh full position, up 10 percent is proof of concept"
        ],
        correctIndex: 2,
        explanation: "First target hit means pay the team. Banking partial profit at plus-10-percent-from-pivot converts paper into points, and raising the remaining exit to breakeven means the worst case left is a scratch. Always and never are not risk plans, and adding full size AFTER a 10 percent run inverts your cost basis at the worst time."
      },
      {
        question: "Three days later RDLN goes vertical: up 18 percent above the pivot, gapping up at the open, then closing weak at the bottom of its daily range on the heaviest volume of the entire move. Your runner decision?",
        options: [
          "Hold, record volume means the biggest buyers just arrived",
          "Sell the rest of the runner into the climax strength",
          "Add one more time, vertical is exactly what you want to own",
          "Hold and decide at expiration, one candle is not a signal"
        ],
        correctIndex: 1,
        explanation: "Read the candle, not the euphoria. Record volume with a WEAK close means the massive buying met even more massive selling, distribution, someone big is handing out inventory at the top of a vertical move. Climax behavior after an 18 percent post-breakout sprint is the textbook exit cue for the runner. Sell when you can celebrate, not when you must capitulate."
      }
    ]
  },
  {
    id: "boss-6",
    title: "BOSS: The Gauntlet",
    intro: "SEASON FINALE. ALL THE MARBLES. 2,000 XP. Four decisions, one trade, every skill in the book: scanning, sizing, managing, and the cold-blooded exit. This is the full system test. Champions are built in the details. Run the table.",
    parts: [
      {
        question: "Sunday scan. Four candidates on the watchlist. Account rules: trade only A-plus setups. Pick the play.",
        options: [
          "Ticker A: up 40 percent today on a viral social post, options IV sitting at 300 percent",
          "Ticker B: down 30 percent this month and falling, but the cheapest it has been in two years",
          "Ticker C: MERX, an eight-week tight base above a rising 50-day, breaking out today on 2.5x volume",
          "Ticker D: dead sideways chop for months on shrinking volume, no catalyst anywhere in sight"
        ],
        correctIndex: 2,
        explanation: "MERX checks every box on the card: long tight base, rising 50-day, RS line leading price to new highs, institutional volume on the breakout, sanely priced options at IV rank 30, and a five-week runway before earnings risk. Ticker A is a 300-percent-IV hype trap, B is a knife with cheap as its only thesis, and D has no edge at all. One A-plus beats three maybes every time."
      },
      {
        question: "Build the position. Account: 25,000, risk rule: 1.5 percent per trade, 375 max. The MERX 50-day calls you want cost 4.20 each, and your plan exits if the breakout fails, which back-of-envelope costs the option about 45 percent, roughly 190 per contract. Size it.",
        options: [
          "2 contracts",
          "10 contracts",
          "5 contracts",
          "1 contract"
        ],
        correctIndex: 0,
        explanation: "Size from the STOP, not from the premium and not from the feeling. Risk per contract is what the planned exit costs, about 190, so two contracts lands almost exactly on the 375 budget. Ten contracts bets 17 percent of the account on one play, conviction does not amend math. Splitting the difference is just breaking the rule politely, and one contract leaves budgeted edge on the table."
      },
      {
        question: "One week in: MERX is up 7 percent and your calls are up 35 percent. But the broad market just flashed two heavy distribution days, big institutional selling, even though MERX itself still acts fine. Adjust?",
        options: [
          "Ignore the market read entirely, you trade MERX, not SPY",
          "Dump the entire position now, distribution means a crash is coming",
          "Add more MERX, strength against a weak tape proves a leader",
          "Bank partial profits and tighten the exit line on the rest"
        ],
        correctIndex: 3,
        explanation: "Your stock is innocent, but the market is the field every play runs on. Three out of four stocks follow the market's tide, and distribution days are the earliest storm warning the tape gives. You do not panic-eject a working trade on a warning, and you do not ignore the weather either. Partial profits plus a tighter line keeps you on the field with reduced exposure, while adding into a deteriorating tape raises risk on the exact day the evidence says lower it."
      },
      {
        question: "Final decision. MERX has climbed for three more weeks, your remaining calls are up 80 percent, and earnings are now two weeks out, with your contracts expiring four days after the print. The system call?",
        options: [
          "Hold through earnings, a trend this strong powers through",
          "Take the win on the whole position before the print",
          "Buy puts through the print too, so both sides are covered",
          "Hold, but check it hourly during earnings week"
        ],
        correctIndex: 1,
        explanation: "Exit when the original thesis is complete, and this thesis was a base breakout, never an earnings call. Holding converts a banked 80 percent technical win into an overnight coin flip, with IV crush waiting on the other side. Buying puts too just means paying double premium into peak IV, and watching a binary hourly is monitoring a coin while it is still in the air. Take the points. Full system executed. That is a championship drive."
      }
    ]
  }
];
