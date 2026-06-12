import type { DailyBlitz, MarketRead, FilmRoomCase, BossChallenge } from "../lib/types";

export const dailyBlitzPool: DailyBlitz[] = [
  {
    id: "blitz-1",
    question: "You buy 1 AAPL 200 call. In plain English, what did you just add to your playbook?",
    options: [
      "The right to buy 100 shares at 200 any time before it expires",
      "An obligation to buy 100 shares at 200 by the expiration date",
      "The right to sell 100 shares at 200 before expiration arrives",
      "100 shares of AAPL handed to you below the market price"
    ],
    correctIndex: 0,
    explanation: "Think of a call as a ticket you bought rather than a bill you owe. As the buyer you hold the choice, and the person who sold it to you is the one stuck with the duty. That single contract controls 100 shares, and if the play never comes together, the worst you can lose is what you paid for the ticket in the first place."
  },
  {
    id: "blitz-2",
    question: "You own 100 shares of a stock at 150 and a pullback is keeping you up at night. Which play is the classic way to protect that position?",
    options: [
      "Buy a call above the current price",
      "Sell your shares and buy calls instead",
      "Double your share position to lower your average",
      "Buy a put below the current price"
    ],
    correctIndex: 3,
    explanation: "A protective put is basically insurance on a position you already own. You pay a premium for it, and if the stock falls apart, the put climbs in value and puts a floor under your damage. Buying calls here just piles on more risk, and doubling your shares is the exact opposite of protecting yourself."
  },
  {
    id: "blitz-3",
    question: "Stock trades at 105. The 100 call is priced at 7.50. How much of that premium is intrinsic value, the part that is actually real right now?",
    options: ["7.50", "5.00", "2.50", "Zero"],
    correctIndex: 1,
    explanation: "For a call, intrinsic value is just the stock price minus the strike, so 105 minus 100 leaves you 5. The remaining 2.50 is extrinsic value, which is the hope-and-time portion of the price. That extrinsic piece is exactly what theta nibbles away every single day."
  },
  {
    id: "blitz-4",
    question: "You hold a 0.30 delta call and the stock pops a dollar. Roughly what happens to your option?",
    options: [
      "It gains the full 100 dollars per contract",
      "It gains about 0.30 percent of its value",
      "It gains roughly 30 dollars per contract",
      "It sits still until expiration gets close"
    ],
    correctIndex: 2,
    explanation: "Delta is your speed reading. At 0.30, the option moves about 30 cents for every dollar the stock travels. Multiply that by the 100 shares each contract controls and you are looking at roughly 30 dollars. The thing prices in real time, by the way, so you do not have to wait until expiration to see it react."
  },
  {
    id: "blitz-5",
    question: "Quick read on a 0.70 delta call. Past the price sensitivity, what is the rough-and-ready way pros interpret that number?",
    options: [
      "Around a 70 percent chance it finishes in the money",
      "The option sheds roughly 70 percent of its value each week",
      "The underlying stock has about 70 percent more room to run",
      "You have to post roughly 70 percent more margin to carry it"
    ],
    correctIndex: 0,
    explanation: "Delta moonlights as a rough probability gauge. A 0.70 delta call is priced as though it has somewhere around a 70 percent shot at finishing in the money. It is an estimate rather than a promise, but it is the back-of-the-envelope way traders size up the odds in a glance."
  },
  {
    id: "blitz-6",
    question: "Theta is time decay. Who is eating that loss every single day?",
    options: [
      "Option sellers",
      "Both sides equally",
      "Option buyers",
      "Nobody, theta only matters at expiration"
    ],
    correctIndex: 2,
    explanation: "When you buy an option, theta is the toll you cover every day you hold it. The extrinsic value melts as the clock runs down, and for at-the-money contracts that melt speeds up in the final weeks. The seller is the one collecting that toll, so the calendar is quietly working in their favor the whole time."
  },
  {
    id: "blitz-7",
    question: "You hold an at-the-money call expiring Friday. The stock drifts sideways all week and never gives back a dime. What happens to your option?",
    options: [
      "It holds its value since the stock never fell",
      "It bleeds value daily and can expire near worthless",
      "It gains a little because the stock held its ground",
      "It converts to shares automatically at the closing bell"
    ],
    correctIndex: 1,
    explanation: "This is the fumble nobody sees coming. You can be perfectly fine on direction and still get wiped out, because an at-the-money option is pure extrinsic value and theta is torching it a little more every day right into expiration. For someone holding short-dated premium, a week of going nowhere is a quiet loss."
  },
  {
    id: "blitz-8",
    question: "You are long a call. The stock does not budge, but implied volatility jumps from 30 to 55 on takeover chatter. What happens to your option?",
    options: [
      "It loses value",
      "It is unchanged",
      "It gets exercised early",
      "It gains value"
    ],
    correctIndex: 3,
    explanation: "Vega is the measure of how much your option reacts when implied volatility rises, and IV spiking from 30 to 55 fattens the premium even with the stock standing perfectly still. A long option carries positive vega, so when the crowd suddenly bids up the price of uncertainty, you happen to own a slice of it."
  },
  {
    id: "blitz-9",
    question: "You buy an at-the-money call the day before earnings. The stock gaps up 3 percent on the report, but the expected move was 7 percent. What is the most likely result?",
    options: [
      "A clean win, the direction was right",
      "The call loses value anyway",
      "The call doubles overnight",
      "No change until Friday's expiration"
    ],
    correctIndex: 1,
    explanation: "Welcome to IV crush. Going into the print, that option was priced for a 7 percent move, and the stock only delivered 3. Once the report is out, implied volatility deflates, the extrinsic value evaporates with it, and a 3 percent pop simply is not enough to outrun all that air coming out of the price. You called the direction and still lost."
  },
  {
    id: "blitz-10",
    question: "Stock at 200. The at-the-money straddle expiring Friday costs 12. What is the market actually telling you about this week?",
    options: [
      "The stock is guaranteed to move 12 dollars by Friday",
      "The stock cannot move more than 12 dollars this week",
      "The expected move is roughly plus or minus 12 dollars",
      "Implied volatility for the week is running at 12 percent"
    ],
    correctIndex: 2,
    explanation: "That at-the-money straddle price is the market's betting line for the week, somewhere around plus or minus 12 dollars, call it 6 percent by Friday. Treat it as a forecast and nothing firmer than that. Before they pay up for premium, pros line up their own expectations against that number and see who is offering the better deal."
  },
  {
    id: "blitz-11",
    question: "The scouting report says IV percentile is 95 ahead of earnings. What does that translate to?",
    options: [
      "Options are pricier than they were 95 percent of the past year",
      "The stock has a 95 percent chance of beating on earnings",
      "Volatility is cheaper than it was 95 percent of the past year",
      "The expected earnings move is about 95 cents in either direction"
    ],
    correctIndex: 0,
    explanation: "IV percentile stacks today's implied volatility against where it has lived over the past year. Sitting at 95, you are paying close to the top of that range for options. It does not mean you can never trade, but it does mean the bar your trade has to clear just got nailed way up the wall."
  },
  {
    id: "blitz-12",
    question: "Account size 10,000, and your rule is risking 2 percent max per play. A call you like costs 400, and your plan cuts it at a 50 percent loss. How many contracts?",
    options: ["Five", "Zero", "Three", "One"],
    correctIndex: 3,
    explanation: "Your risk per contract is what you would actually lose at your exit, which is about 200 here. The 2 percent rule caps your total risk at 200, so you can carry one contract. Position sizing is the one stat you get to control on every single snap, and it is what keeps you in the league long enough to get good."
  },
  {
    id: "blitz-13",
    question: "Three losses in a row and you are steaming. What is the pro move on the next play?",
    options: [
      "Double the size to win it back in one shot",
      "Cut your size down and slow the game down",
      "Switch to 0DTE options for faster recovery",
      "Trade a ticker you have never studied for a fresh start"
    ],
    correctIndex: 1,
    explanation: "Tilt is how an ordinary losing streak turns into a blown-up account. The pros shrink their size after losses, go back and study the film, and only swing full again once the process looks solid. Reaching for more size while you are emotional is the fastest cab ride back to the locker room."
  },
  {
    id: "blitz-14",
    question: "Gamma measures how fast your delta itself changes. Where does gamma run the hottest?",
    options: [
      "At-the-money options close to expiration",
      "Deep in-the-money options that are still months away from expiring",
      "Far out-of-the-money LEAPS",
      "It is constant across all options"
    ],
    correctIndex: 0,
    explanation: "Gamma peaks for at-the-money options as expiration closes in. That is the reason short-dated ATM contracts swing so violently. A small move in the stock causes a big swing in delta, which causes a big swing in the option's price. High gamma is high octane, and it cuts both ways."
  },
  {
    id: "blitz-15",
    question: "Your 110 call expires today with the stock sitting at 104. Final whistle. What happens?",
    options: [
      "You are forced to buy 100 shares at the 110 strike",
      "You get the 6 dollar difference credited back to you",
      "It expires worthless and the premium is gone",
      "It rolls into next week's expiration on its own"
    ],
    correctIndex: 2,
    explanation: "An out-of-the-money option at expiration is worth nothing, and your loss stops at the premium you paid, which is really the whole appeal of buying options in the first place. There is no forced purchase and no automatic rollover waiting for you. The play just did not convert this time."
  },
  {
    id: "blitz-16",
    question: "You pay 2.00 for a 50 strike call. Where does the stock have to be at expiration for you to break even?",
    options: ["50", "48", "Anywhere above 50", "52"],
    correctIndex: 3,
    explanation: "Breakeven at expiration is the strike plus the premium, so 50 plus 2 gets you to 52. Anything above 50 gives the option some value, but you are not actually in the green until the stock has covered what you laid out for the ticket. Those first 2 dollars of the move are just paying your way in the door."
  },
  {
    id: "blitz-17",
    question: "You are bearish on a stock and you want your risk defined and capped. What is the cleanest play?",
    options: [
      "Buy puts",
      "Short the stock",
      "Sell calls naked",
      "Buy calls and hope you are wrong"
    ],
    correctIndex: 0,
    explanation: "Buying puts hands you downside exposure with the risk capped at the premium you paid. Shorting the stock leaves you open to theoretically unlimited losses if it rips higher, and selling naked calls is that same trap dressed up with extra steps. Defined risk just means you know the worst case before the ball is ever snapped."
  },
  {
    id: "blitz-18",
    question: "An option quotes 1.00 bid, 1.40 ask. You buy at the ask. If nothing moves and you sell at the bid, what just happened?",
    options: [
      "Nothing, spreads only matter for the market makers",
      "You earned the spread back to you as a rebate",
      "You are instantly down about 29 percent",
      "You lost 40 cents per share to broker commissions"
    ],
    correctIndex: 2,
    explanation: "Buy at 1.40, turn around and sell at 1.00, and that is 40 cents per share gone, or 40 dollars on the contract, before the stock has taken a single step. A wide spread is an invisible tax on the trade. This is why pros hunt for liquid chains with tight spreads, because that toll booth charges you on every trip through."
  },
  {
    id: "blitz-19",
    question: "Your thesis is set to play out over several weeks. Which contract fits the game plan?",
    options: [
      "Same-day expiration for the most leverage you can get",
      "45 to 60 days to expiration",
      "2 days to expiration",
      "Whatever strike carries the lowest dollar price tag"
    ],
    correctIndex: 1,
    explanation: "You want to match the contract to the thesis. A multi-week idea needs multi-week time on the clock, plus a buffer, because theta burns through short-dated options the fastest. Those cheap 2 DTE contracts are cheap for a reason, which is that they are nearly out of time. Always buy yourself more clock than you think the move will need."
  },
  {
    id: "blitz-20",
    question: "Your long call is down 50 percent and the support level your whole thesis was built on just broke. What is the move?",
    options: [
      "Add more at half price",
      "Hold to expiration, it might come back",
      "Roll it out a month and double the size",
      "Cut it and take the loss"
    ],
    correctIndex: 3,
    explanation: "You built the trade on a level, and that level just gave way, so what you have is a busted play rather than a sale on a good one. Averaging down on a thesis the market already broke is just throwing good money after bad. Take the loss, log the film, and go find the next setup that actually works."
  },
  {
    id: "blitz-21",
    question: "The stock has chopped inside a 2 percent range for three weeks with nothing on the calendar, and you are bored out of your mind. What is the play?",
    options: [
      "No trade, sit on your hands",
      "Buy weekly calls because it is due for a move",
      "Buy weekly puts because it is due for a drop",
      "Flip a coin and commit to whichever side comes up"
    ],
    correctIndex: 0,
    explanation: "Boredom was never a setup. With no edge in sight there is no trade to make. Buying short-dated premium in dead-quiet chop just hands theta a win every day while the stock goes nowhere. Pros let the setup come to them, and when there is genuinely no play on the board, parking yourself on the bench is the play."
  }
];

export const marketReadPool: MarketRead[] = [
  {
    id: "read-1",
    title: "The Coiled Spring",
    setup: "DKWL has traded in a tight 47-to-50 box for eight straight weeks while its sector ETF presses new highs. Today it clears 50 on triple its average volume and closes near the high of the day. IV rank sits at a sleepy 25, and earnings are six weeks out.",
    correctCall: "bullish",
    explanation: "This is a textbook breakout. You have a long base, fresh volume showing up on the move, the sector at its back, and no binary event sitting in the road. With IV that cheap, call buyers are not overpaying to come along for the ride. As a rule, the longer a stock coils in a base, the more room it tends to run once it lets go."
  },
  {
    id: "read-2",
    title: "Broken and Rejected",
    setup: "TRNX cut full-year guidance two weeks ago and knifed through its 200-day moving average at 88 on the heaviest volume in a year. Since then it has crawled back up to retest 88 from below, stalled there for three sessions, and printed two weak red closes at the level.",
    correctCall: "bearish",
    explanation: "Old support tends to flip into new resistance once it breaks, and 88 just got retested and shoved right back down. Real fundamental damage, a busted 200-day, and a failed retest together make up the bear trifecta. The pros are not trying to catch this falling knife, they are content to ride it lower, because the path of least resistance is pointing down."
  },
  {
    id: "read-3",
    title: "The Mud Bowl",
    setup: "MMTC has whipsawed between 61 and 64 for three weeks, with volume drying up every session. There is no earnings report, no product event, and no sector catalyst for at least two more weeks. IV rank is 15 and intraday ranges keep shrinking.",
    correctCall: "neutral",
    explanation: "This is chop with no clock and no catalyst, the kind of field where directional premium buyers slowly bleed out. When there is no edge pointing either way, the professional call is simply to make no call at all. Set alerts at 61 and 64 and let the stock tip its hand before you commit a dollar."
  },
  {
    id: "read-4",
    title: "Pullback to the Line",
    setup: "A stock in a six-month uptrend pulls back 7 percent over two weeks to its rising 50-day moving average at 132. Volume shrinks the whole way down, then it prints a hammer reversal candle right on the line with volume picking back up. Earnings are six weeks away and the market is in a confirmed uptrend.",
    correctCall: "bullish",
    explanation: "A light-volume pullback inside a strong uptrend usually means the stock is resting rather than reversing. The hammer printing on rising volume right at the 50-day tells you buyers stepped up to defend the line where they always seem to. The trend, the location, and the trigger are all rowing the same way, and your invalidation level sits clearly just under the low."
  },
  {
    id: "read-5",
    title: "The Blowoff",
    setup: "After grinding higher for months, QRVT goes vertical: up 60 percent in three weeks on retail frenzy. Today it gaps up to 95, reverses hard, and closes all the way down at 84 on the heaviest volume in its history. That is an outside reversal day after a parabolic run.",
    correctCall: "bearish",
    explanation: "Parabolic moves tend to die from exhaustion, and a huge-volume gap up that reverses and closes red is the classic climax signature. The last buyers in just got trapped right at the top. It might bounce somewhere, but the risk and reward now tilt to the downside, and longs without an exit plan end up becoming the fuel for the move lower."
  },
  {
    id: "read-6",
    title: "Earnings Coin Flip",
    setup: "HLXC reports tonight after the close. The stock sits dead center of its three-month range at 74. IV percentile is 96 and the options market is pricing an expected move of plus or minus 9 percent. You have no edge on the quarter and the chart gives no lean.",
    correctCall: "neutral",
    explanation: "Mid-range chart, no real information edge, and options priced near the richest levels of the year. That adds up to a coin flip where you are paying a fat premium just to enter the coin flip. The professional read is to stand down tonight and trade the reaction tomorrow, once IV has reset and the direction has actually shown itself."
  },
  {
    id: "read-7",
    title: "History Tape: The Guidance Shock",
    setup: "May 2023. NVIDIA reports earnings and guides next-quarter revenue to roughly 11 billion against Wall Street's 7.2 billion estimate, a number so far above the line analysts double-check it. The stock gaps about 24 percent to all-time highs the next morning as every major bank scrambles to raise targets on the AI buildout.",
    correctCall: "bullish",
    explanation: "When a stock gaps to fresh all-time highs on genuinely paradigm-shifting news, it tends to keep running, simply because there is no overhead supply and no trapped sellers waiting above to dump into the rally. This was not a rumor pop, it was a wholesale rewrite of the company's earnings power. Historically, a gap-and-go on news this size has rewarded the buyers and punished anyone trying to fade it."
  },
  {
    id: "read-8",
    title: "Under the Wall",
    setup: "A former leader trades below its declining 20-day and 50-day moving averages while the broad market sits near highs, a glaring relative-weakness flag. It broke 70 support last month, rallied back to 70 twice, and got stuffed both times on rising sell volume.",
    correctCall: "bearish",
    explanation: "Relative weakness in a strong tape is the real tell. If a stock cannot rally when everything around it does, you have to ask who is ever going to carry it higher. Two failed retests of broken support confirm the sellers have set up camp at 70. The bears own the level, they own the trend, and they own the tape."
  },
  {
    id: "read-9",
    title: "Ninety Minutes to the Fed",
    setup: "It is 12:30 pm on Fed decision day. The statement drops at 2:00. SPY is pinned to VWAP in a 0.3 percent range on dead volume, and the stock you are watching is glued to its open price. Every tiny push in either direction gets faded within minutes.",
    correctCall: "neutral",
    explanation: "Pre-Fed drift is a genuine no-man's-land. The algorithms park the market until the news actually hits, and whatever move you see in the first few minutes after 2:00 often reverses hard right after. Trading the dead zone ahead of a known macro catalyst is mostly just donating theta and spread. The smart play is to wait for the real move to declare itself."
  },
  {
    id: "read-10",
    title: "Cup, Handle, Trigger",
    setup: "VYRD spent five months carving a cup base from 78 down to 58 and back, and for the past two weeks has drifted sideways in a tight handle between 72 and 74 on shrinking volume. Its relative strength line just hit a new high before the price did, and accumulation days outnumber distribution days three to one.",
    correctCall: "bullish",
    explanation: "An RS line hitting new highs ahead of price is one of the strongest tells in the whole scouting report, because it means big money is already leaning in before the chart catches up. A quiet handle on dry volume is the market quietly loading the spring. The bias here is bullish, with a clean trigger above 74 and a tight invalidation right below the handle low."
  },
  {
    id: "read-11",
    title: "Neckline Snap",
    setup: "Over four months SNTQ built a head-and-shoulders top: peak at 225, higher peak at 240, lower peak at 222, with the neckline sitting at 210. Last night its largest customer warned on spending, and today SNTQ slices through 210 on four times average volume, closing at 204.",
    correctCall: "bearish",
    explanation: "A completed head-and-shoulders with a high-volume neckline break is distribution finishing the job it started, and this one arrived with a fundamental trigger bolted on. The measured-move math projects the height of the pattern downward from 210. Any bounce back toward the neckline now is a spot to sell into rather than an entry you want to chase."
  },
  {
    id: "read-12",
    title: "Great News, Terrible Location",
    setup: "PLMR posts a blowout quarter and gaps up 11 percent at the open, landing exactly at 150, the 18-month resistance level that has rejected three prior rallies. IV is still elevated from the print, and by late morning the stock is fading from the open as early buyers ring the register.",
    correctCall: "neutral",
    explanation: "It was a strong report, but the gap spent its entire move just getting to the toughest level on the chart, and with IV still elevated the options remain priced rich. Good news running straight into major resistance and then fading by late morning leaves things unresolved rather than bullish. Let it either reclaim and hold above 150 or roll over, then trade whatever it ends up showing you."
  },
  {
    id: "read-13",
    title: "The Flush and Reclaim",
    setup: "A sector panic drags BRKW down 18 percent in four days, undercutting its 200-day moving average and stopping out every weak hand. The next session it reverses, reclaims the 200-day on its biggest up-volume day in a year, and closes at the high of the day while the sector news gets walked back.",
    correctCall: "bullish",
    explanation: "A capitulation flush, an undercut of an obvious level, and then a high-volume reclaim that closes on the highs is exactly the shakeout-and-recover sequence pros go hunting for. The sellers wore themselves out, and the reclaim proves real demand showed up in size to take the other side. Your risk is defined cleanly just below the reversal low."
  },
  {
    id: "read-14",
    title: "Sympathy Warning",
    setup: "Last night DRVN's closest competitor guided next-quarter revenue down 20 percent, blaming the exact end market both companies sell into. DRVN still trades within 3 percent of all-time highs and reports in three weeks. Meanwhile its chart has stacked five distribution days in two weeks, heavy-volume selling into every rally.",
    correctCall: "bearish",
    explanation: "When the closest comp pre-announces weakness in a market they both depend on, the read-through is real well before DRVN ever opens its mouth. Price hovering near highs while distribution days pile up tells you big money is using the strength as cover to head for the exits. The setup leans short into the print, or at the very least argues for getting out of longs."
  },
  {
    id: "read-15",
    title: "Pinned on Expiration Day",
    setup: "It is monthly options expiration Friday and GRDX is glued to 120, the strike with by far the largest open interest on the chain. Every push to 121 gets pulled back, every dip to 119 gets lifted, and there is no news anywhere on the wire. Volume is average but the range keeps tightening into the afternoon.",
    correctCall: "neutral",
    explanation: "This is pin risk doing its thing. The hedging flows around a giant open-interest strike act like a magnet on expiration day, sanding the edges off every move. Buying direction into a pin means paying premium to wrestle that magnet. The chop usually breaks loose only after expiration, so the pro just waits for Monday to make a call."
  }
];

export const filmRoomPool: FilmRoomCase[] = [
  {
    id: "film-1",
    title: "Film: META, February 2022",
    story: [
      "February 2, 2022. A trader loads up on weekly Meta calls a few hours before earnings. The logic seemed clean enough: Meta had beaten estimates for years, the stock had been consolidating, and the calls looked cheap against the upside if it popped.",
      "Then the report lands like a sack from the blind side. Daily active users decline for the first time in the company's history, guidance comes in way light, and management points at Apple's privacy changes for torching their ad targeting. The next day the stock falls about 26 percent and erases more than 230 billion dollars of market value, which at the time was the biggest one-day wipeout any stock had ever taken.",
      "The weekly calls open worth essentially nothing. There was no managing the trade and no stop loss to honor, because the gap happened overnight while the market was closed. The entire position was gone before the trader could so much as click a button."
    ],
    lesson: "Earnings are binary events, and the move arrives in a single overnight gap that no stop loss can do anything about. Any premium you hold through a print can go to zero on one headline, so you have to size every earnings play as if that is a live possibility, because it genuinely is."
  },
  {
    id: "film-2",
    title: "Film: GameStop, January 2021",
    story: [
      "Late January 2021. GameStop is the only story on the planet. The stock has run from under 20 to over 300 in a matter of days, the squeeze is plastered across the news, and a trader decides to grab some calls and join the run.",
      "Here is what the ticket actually cost. Implied volatility on those options had exploded into the several hundreds. Calls that would normally run a few hundred dollars were going for thousands. The premium was priced as though the stock would keep lurching around violently forever.",
      "The stock did keep swinging wildly and even touched an intraday high near 483 before brokers restricted buying and the price caved. But plenty of the late call buyers lost money even on days the stock actually went up, because IV deflated faster than the price could climb. They nailed the chaos and lost anyway."
    ],
    lesson: "The price you pay for an option matters every bit as much as which way the stock goes. When IV goes vertical, you can be dead right about the story and still come out behind, because you paid for a move even crazier than the craziness you got. Always check what the premium is pricing in before you hand it over."
  },
  {
    id: "film-3",
    title: "Film: The COVID Crash, March 2020",
    story: [
      "Late February 2020. The market starts sliding on virus headlines and a trader starts buying the dip, full size, on every leg down. The playbook had worked for years, since every dip got bought and every scare eventually faded.",
      "This time the field changed underneath him. The S&P fell 34 percent in roughly a month. Circuit breakers halted trading four times in two weeks, something that had not happened in decades. Each full-size dip-buy got run over by the next leg lower, and by mid-March the account was down around 70 percent with no dry powder left for the actual bottom.",
      "A second trader rode out the same storm differently. He sized every probe at a quarter of normal, kept most of the account in cash, and was still standing on March 23 when the real bottom printed. Same market and the same opportunity, but only one of them still had ammunition left to use it."
    ],
    lesson: "In a crisis, survival is the entire game plan. Position size is the one variable you fully control, and it decides whether you are still on the field when the genuine opportunity finally shows up. Never go full size into a falling market on the bet that history is going to rhyme right on your schedule."
  },
  {
    id: "film-4",
    title: "Film: NVDA, May 2023",
    story: [
      "Spring 2023. A trader builds a thesis. AI datacenter demand is real, NVIDIA is the only arms dealer in the war, and the market is still pricing it like a run-of-the-mill chip cycle. Weeks before the May earnings report, with IV rank moderate, he buys June calls, far enough out to survive being early, and sized so a total loss would sting without wounding him.",
      "May 24, 2023. NVIDIA guides next-quarter revenue to roughly 11 billion against a 7.2 billion consensus, one of the largest guidance beats in large-cap history. The stock gaps about 24 percent the next day to all-time highs.",
      "The calls multiply. But watch the film closely, because the win was actually built weeks earlier in the unglamorous decisions. There was a real thesis, time bought out past the catalyst, premium picked up before it got expensive, and a size that let him hold through the whole wait."
    ],
    lesson: "Big wins come from getting three things lined up: a genuine thesis, enough time on the contract to be early without being dead, and premium bought at a sane IV before the crowd piles in. The entry ticket gets decided in the quiet weeks, not on the highlight-reel day everyone remembers."
  },
  {
    id: "film-5",
    title: "Film: The Average-Down Spiral",
    story: [
      "A trader buys calls on a biotech at 30 after a hot streak, risking 300. The stock slips to 27 and breaks the support level the whole trade was built around. Instead of cutting it, the trader buys more calls, now cheaper, to bring the average down.",
      "The stock keeps bleeding. At 24, another add, because now it is really cheap. At 21, one more, this time dipping into money that was earmarked for other setups. The thesis level had broken back at 27, but the position kept growing through 6 more points of downside.",
      "Final damage: a planned 300 loss turned into a 2,100 loss, seven times the original risk, on a chart that never once flashed a buy signal after the break. The first loss was a paper cut. The averaging is what turned it into a season-ending injury."
    ],
    lesson: "Never add to a losing options trade once the thesis has broken. Averaging down does not really lower your average so much as it cranks up your exposure to a trade the market already told you was wrong. That first loss is the cheapest exit you will ever be offered."
  },
  {
    id: "film-6",
    title: "Film: The Boring Playbook Win",
    story: [
      "A trader watches a strong uptrend stock for three weeks and does absolutely nothing. The plan was written down ahead of time: only buy a pullback to the rising 50-day moving average, only on a reversal signal, and only with 60 days of time on the contract.",
      "The pullback comes. The stock taps the 50-day at 84, prints a strong reversal day, and the trader buys 0.60 delta calls two months out, risking 1.5 percent of the account, with the exit already defined as out if the stock closes below the swing low at 81.",
      "The stock rallies 11 percent over five weeks. Half the position comes off at a 50 percent gain, and the rest at 110 percent when the stock stalls into prior highs. No drama, no sweat, no diamond hands required, because every decision had already been made before a dollar was ever at risk."
    ],
    lesson: "A written plan beats a brilliant prediction. The entry trigger, the contract selection, the position size, and the exits were all settled in advance, so emotion never got a vote in the room. Boring execution of a real edge is what compounding actually looks like up close."
  },
  {
    id: "film-7",
    title: "Film: The No-Trade That Won",
    story: [
      "Two friends are watching the same setup: a high-flyer reporting earnings that night, IV percentile 97, expected move of 12 percent baked into the price. Trader A sees a coin flip wearing an expensive ticket and passes, figuring he will trade the reaction the next morning instead.",
      "Trader B sees free money, buys weekly calls with a third of the account, and posts the position online for everyone to admire. The company beats estimates but guides flat. The stock gaps down 9 percent, comfortably inside the expected move, and the calls open down 95 percent.",
      "The next morning, Trader A watches the gap-down find support at a major level, waits for the reclaim, and buys calls at one-third the IV from the night before. The entry is clean, the risk is defined, and there is no coin flip involved. Trader B gambled on the print, while Trader A simply traded the aftermath."
    ],
    lesson: "Flat is a position too. Skipping a coin flip you have no edge on is just playing defense, and the session after earnings usually hands you a better-priced, better-defined trade than the print ever did. You do not have to swing at every pitch to win the game."
  },
  {
    id: "film-8",
    title: "Film: The Friday Lotto Habit",
    story: [
      "A trader discovers same-day expiration options. Tiny cost, enormous payoff on the rare day they hit. The first win, an 80 dollar lotto that paid 900, rewires the brain on the spot. Friday becomes lotto day, every single week.",
      "Every win felt enormous while the losses barely registered, so the scoreboard in his head looked fantastic. But the journal told the real story: over thirteen weeks, four wins adding up to 2,300, against twenty-two losses adding up to 4,100. The account was down 60 percent of its starting trading capital on a strategy that felt like winning the whole time.",
      "Nothing about any single Friday looked like a blowup. It was a slow bleed dressed up as entertainment, with theta quietly collecting the toll every time the lotto ticket missed, which was most of the time, because that is exactly what maximum-gamma, zero-time options do to you."
    ],
    lesson: "Lottery-ticket options come with lottery math, where the occasional huge payoff gets funded by a steady drip of small losses you barely notice. Theta and probability are the house edge, and the house grinds you down precisely because no single loss ever feels like it matters. Track your full record instead of your highlight reel."
  },
  {
    id: "film-9",
    title: "Film: Buying Vol When It Was Quiet",
    story: [
      "A software company schedules a major platform launch eight weeks out. The stock has gone quiet, drifting in a slow uptrend, and IV rank has sagged to 10, with options priced near the cheapest levels of the year even though a known catalyst is sitting on the calendar in plain sight.",
      "The trader buys 90-day calls, paying the lowest premium the chain had offered all year, sized at 2 percent of the account. The thesis was simple: even ahead of the launch, the anticipation alone should be enough to wake the options market back up.",
      "The stock grinds up 9 percent over six weeks, and IV rank climbs from 10 to 45 as launch hype builds. The calls gain from delta and from vega at the same time, which is two engines instead of one, and the position doubles before the event even arrives. The trader exits ahead of the launch, selling that inflated premium right back to the crowd."
    ],
    lesson: "The best time to buy options is when volatility is cheap and a real catalyst is visible but not yet priced in. Cheap IV alongside a known clock hands you two ways to win, both direction and volatility expansion, and it lets you sell the hype later instead of paying up for it now."
  },
  {
    id: "film-10",
    title: "Film: Right Thesis, Wrong Clock",
    story: [
      "A trader does genuinely great homework on an industrial name: a new contract cycle, a margin inflection, and a chart coiling up under resistance at 95. The thesis says it rerates to 110. To hold the cost down, the trader buys calls expiring in three weeks rather than three months.",
      "The stock chops sideways for three weeks. Nothing breaks the thesis, but nothing confirms it either, and the calls quietly decay to dust. The trader, disgusted, never re-enters.",
      "Eight days after expiration, the stock breaks out at 95 and runs to 112 in a month, almost exactly the projected move. The analysis earned an A. The trade earned a total loss. The only mistake on the entire ticket was the date printed on it."
    ],
    lesson: "An option is a bet on direction with a deadline attached, and the deadline is the part that quietly kills good analysis. Buy yourself meaningfully more time than the thesis needs, because being early is impossible to tell apart from being wrong once your contract expires before the move ever shows up."
  },
  {
    id: "film-11",
    title: "Film: TSLA 2020 and the Sell That Hurt",
    story: [
      "Early 2020. A trader buys long-dated Tesla calls on a simple thesis: demand is inflecting, production is scaling, and the shorts are trapped. The plan, written down, says take profits if the position triples. By August 2020, with the stock ripping into the 5-for-1 split announcement, the calls have more than tripled. The trader sells, exactly as the plan said to.",
      "Tesla keeps going. And going. By year end the stock has finished up over 740 percent for 2020, and the calls the trader sold would have been worth several times more. Every day of that run feels like a personal insult.",
      "Here is the film-room truth. The trade followed a written plan, banked a triple, and kept risk controlled the whole way through. Nobody sells the exact top, ever. The same discipline that left money on the table this one time is the discipline that keeps you from round-tripping a winner all the way back to zero the other ninety-nine times."
    ],
    lesson: "Judge your decisions and not your outcomes. Selling at a planned target and then watching the stock keep running is not a fumble, it is the system doing its job. The goal was never to catch the whole move, it is to repeatably take the middle of it and survive long enough to do it again."
  },
  {
    id: "film-12",
    title: "Film: One Play, One Third of the Account",
    story: [
      "A trader with a 20,000 account develops total conviction in one earnings play and puts 7,000, which is 35 percent of the account, into calls expiring that Friday. The reasoning was that when you know, you bet big.",
      "The company actually beats on revenue. But margins disappoint, guidance comes in cautious, and the stock sells off 7 percent. The calls open nearly worthless. One report, one position, and the account is down 35 percent in a single overnight session.",
      "Now the brutal arithmetic of drawdowns kicks in. A 35 percent loss requires a 54 percent gain just to claw back to even. Months of disciplined, well-sized trading after that still did not fully repair what one oversized swing had destroyed in twelve hours."
    ],
    lesson: "Drawdown math is merciless. Lose 35 percent and you need 54 percent to recover, lose 50 and you need a full 100. Conviction is not a sizing model. Cap every single position so the worst case is a bruise rather than an amputation."
  },
  {
    id: "film-13",
    title: "Film: The Stop That Saved the Season",
    story: [
      "A trader is long calls on a retailer, bought when the stock bounced off support at 64. The written rule says out on a daily close below 64, no debate and no overtime. Three weeks in, sector news hits and the stock closes at 63.10.",
      "Everything in the trader's gut is screaming to hold. The option is down 40 percent, the news feels overblown, and selling means locking in the loss. The trader sells at the close anyway, because a rule is a rule.",
      "Over the next month the stock falls another 25 percent as the sector unravels, and those calls go to zero. The 40 percent loss that felt unbearable turned out to be the cheapest exit ever offered. The stop did not just save money, it saved the confidence and the capital to keep playing."
    ],
    lesson: "First loss, best loss. A stop honored at the thesis level turns a potential catastrophe into a routine, budgeted expense. The discipline feels terrible in the moment precisely because it is working, since it fires exactly when hope is loudest."
  },
  {
    id: "film-14",
    title: "Film: The August 2024 Vol Spike",
    story: [
      "August 5, 2024. Japan's yen carry trade unwinds overnight, the Nikkei drops 12 percent, and the VIX touches 65 in the premarket, its highest reading since the COVID crash. A trader wakes up, sees red everywhere, and buys SPY puts at the open to ride the meltdown.",
      "Those puts were priced off panic-level IV, the most expensive insurance the market had sold in four years. The S&P closed that day down about 3 percent and then stabilized. Within days the VIX collapsed back below 25 and the market recovered the entire drop in roughly a week.",
      "The puts lost most of their value even as the market wobbled around for days, because the IV crush on the way down was bigger than any move the market actually delivered. The trader bought fear at its all-time retail price, right before fear went on clearance."
    ],
    lesson: "By the time panic is the headline, panic is already baked into the premium. Buying options after a volatility spike means paying peak prices for protection that mean-reversion is about to deflate out from under you. The time to own insurance is before the storm, back when nobody wants it."
  },
  {
    id: "film-15",
    title: "Film: The Trader Who Benched Himself",
    story: [
      "After a flat, frustrating year, a trader finally audits the journal: 214 trades, every one of them tagged by setup type. The numbers are a cold shower. Breakout entries from proper bases were solidly profitable, while everything else, the dip-buys without signals, the news chases, the boredom trades, netted out to a meaningful loss.",
      "One setup had carried the whole season, and the rest of the playbook was just paying its bills. So the trader makes one change: trade only the A-plus breakout setup, full stop. The trade count drops about 70 percent the next year.",
      "The results flip. Fewer trades, smaller drawdowns, and the account posts its best year, not because the trader suddenly got smarter, but because the losing plays got benched. The edge had been there all along. It was simply buried under a pile of volume."
    ],
    lesson: "Shot selection is the skill. Most traders have one or two setups that actually carry an edge, drowned out by dozens of trades that exist only to fight off boredom. Find your A-plus play in the data and then have the discipline to wait for it. Less, but better."
  }
];

export const bossPool: BossChallenge[] = [
  {
    id: "boss-1",
    title: "BOSS: Earnings Week at VLTA",
    intro: "Friday night lights, and this one is worth 2,000 XP. VLTA reports Thursday after the bell and the whole street is watching. You get four decisions, and every one of them is a fork in the road between the pro move and the trap. Survive the print.",
    parts: [
      {
        question: "Monday. VLTA trades at 140, earnings hit Thursday night. IV percentile is 92, the weekly at-the-money straddle costs 18, and you are bullish on the quarter. What is the first read a pro makes before touching the order ticket?",
        options: [
          "Buy weekly 140 calls now and hold them straight through the print",
          "Wait until Thursday at 3:55 pm to buy calls at cheaper prices",
          "Buy double the usual contracts since earnings guarantees a move",
          "The straddle is pricing roughly a plus-or-minus 9 dollar move"
        ],
        correctIndex: 3,
        explanation: "Read the line before you bet the game. An IV percentile of 92 and an 18 dollar straddle on a 140 stock means the market is already braced for something like a plus-or-minus 9 move. Premium buyers do not get paid for getting a move, they get paid for getting a move bigger than the one already priced in. And those Thursday afternoon calls only look cheaper, since all you are really doing is buying maximum crush exposure right before the print."
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
        explanation: "The run-up was the trade. Pre-earnings drift plus rising IV just handed you 70 percent without ever making you face the binary. Holding through the print turns a banked win into a coin flip where IV crush starts you in a hole. And stops do not protect you overnight, since the gap happens while the market is closed and nobody can act on it."
      },
      {
        question: "You kept one small rider call through the print against the plan. VLTA beats and opens Friday up 5 dollars at 151. But your 145 call barely budges and your friend's 150 calls are down 60 percent. What happened?",
        options: [
          "Market makers manipulated the opening print",
          "IV crush vaporized the extrinsic value",
          "The report was secretly worse than the headlines",
          "Earnings winners always sell off the next morning"
        ],
        correctIndex: 1,
        explanation: "You got the direction right and the trade still went flat. Before the print those options carried a fat volatility premium pricing in a 9 dollar move. The stock delivered 5, inside the line, and post-earnings IV collapsed and took the extrinsic value with it. Your 145 call held up on its intrinsic value, while the 150 calls were all extrinsic, which is why they got crushed even as the stock rallied."
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
        explanation: "The lesson here is precision rather than fear. Pre-earnings momentum riding on rising IV is a real, repeatable edge. Holding premium through the print at 90-plus IV percentile is just paying a tax, and the expected move is always the bar your trade has to clear. The crush does not care which side you picked, since it vaporizes puts exactly like calls. Same game next quarter, same plan, same paycheck."
      }
    ]
  },
  {
    id: "boss-2",
    title: "BOSS: The Long Drive",
    intro: "Sunday, prime time, with 2,000 XP on the table. RDGE is in a six-month uptrend and you are going to manage one trend trade from kickoff to the final whistle, covering the entry, the contract, the management, and the exit. Four quarters, no shortcuts. Drive the field.",
    parts: [
      {
        question: "RDGE has been riding its rising 50-day moving average for six months. It just pulled back 6 percent to that line at 84 on shrinking volume. What is your entry decision?",
        options: [
          "Buy right now, the rising 50-day has held for six months",
          "Wait for a new all-time high first, then buy with confidence",
          "Wait for a strong reversal day at the line, then enter",
          "Skip it, pullbacks this deep usually start downtrends"
        ],
        correctIndex: 2,
        explanation: "You want location and trigger together. The pullback to a rising 50-day on quiet volume gives you the location, but you still wait for buyers to actually show up, in the form of a strong reversal candle, before you commit, with your invalidation set below the swing low. Buying blind just assumes the line holds, while waiting for new highs hands back the whole risk-reward edge of entering at support with a tight stop."
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
        explanation: "Match the weapon to the play. A multi-week thesis needs more time than the thesis itself, so 45 to 60 days gives you the move plus a buffer against being early. A 0.60 delta means the option meaningfully tracks the stock. Cheap far-OTM weeklies are just a theta donation, and two-year LEAPS tie up your capital paying for 20 months you simply do not need."
      },
      {
        question: "Two weeks in: RDGE has rallied to 90.50 and your calls are up 55 percent, with the prior high at 92 sitting overhead. Manage the position.",
        options: [
          "Sell every contract immediately, because you never let a winner breathe",
          "Hold everything, the trend is your friend forever",
          "Add more contracts, press the bet while it works",
          "Sell half into strength and raise the exit line on the rest"
        ],
        correctIndex: 3,
        explanation: "Scaling out is how pros settle the hold-or-sell argument. Banking half locks in a real win and pays for the trade, while the runner keeps you on the field if 92 breaks into open air above. Selling all of it surrenders the breakout scenario, holding all of it risks round-tripping right at resistance, and adding near resistance is pressing the bet at the worst spot on the chart."
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
        explanation: "You got in because of the 50-day trend, so you get out when the 50-day trend breaks, and breaking on the heaviest volume in months tells you big money is leaving the building. It might bounce somewhere, but trading the plan means the signal that built the trade is the same signal that ends it. Up 80 percent on the runner with the thesis dead is what the final whistle sounds like."
      }
    ]
  },
  {
    id: "boss-3",
    title: "BOSS: The Skid",
    intro: "Gut check game, worth 2,000 XP. Four straight losses, account down 8 percent, and your confidence is in the tank. This boss fight is not about charts at all, it is about whether you can be managed. Most traders never beat this level, so prove you are not most traders.",
    parts: [
      {
        question: "Four consecutive losing trades, account down 8 percent, and you can feel the frustration sitting in your chest. The very next thing a professional does?",
        options: [
          "Cut position size sharply and slow your trade frequency",
          "Find one bigger setup to win the whole drawdown back at once",
          "Switch strategies completely, the playbook is clearly broken",
          "Keep the exact same size, since changing anything is emotional"
        ],
        correctIndex: 0,
        explanation: "Shrink until the pressure lets go and treat the next stretch as rebuilding mode. Cutting size after a streak protects the account from your own tilted judgment, which the statistics say is at its worst right now. Hunting for a get-it-back trade is the classic blowup script, and torching the whole playbook over four trades is overreacting to a sample size of four."
      },
      {
        question: "Day two of the skid. A setup appears, a B-grade chart at best, but your gut is screaming that doubling your normal size here erases the whole losing streak in one play. The decision?",
        options: [
          "Take it at double size",
          "Take it at normal size",
          "Take it small, but add if it starts working",
          "Skip it and stay on the bench"
        ],
        correctIndex: 3,
        explanation: "Name the play for what it is, which is a revenge trade wearing a costume. The tell is not the chart, it is the motive, the urge to erase the streak instead of executing an edge. A B-grade setup plus emotional reasoning plus a size increase is three alarms ringing at the same time. Even normal size is wrong here, because the decision engine itself is compromised."
      },
      {
        question: "Weekend film session. You open the journal to review the four losses. What are you actually looking for?",
        options: [
          "Proof that the market was rigged against you this week",
          "Sort each loss into followed-the-rules versus broke-the-rules",
          "The one magic indicator that would have predicted all four of the losses",
          "Confirmation that you should feel terrible about the week"
        ],
        correctIndex: 1,
        explanation: "Process versus variance is the only review that matters. Rule-following losses are just tuition, since an edge can lose four in a row and still be an edge and the math allows for it. Rule-breaking losses are the fixable disease. The film might show you four good plays that did not convert, or it might show you freelancing, and those are different diagnoses that call for totally different prescriptions."
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
        explanation: "Re-entry is a ramp and not a light switch. Reduced size on an A-plus setup gets you executing and rebuilding confidence with real stakes, while still protecting the account in case the tilt has not fully cleared. You earn your way back to full size with two clean weeks of executed process, never with one good feeling. Skipping A-plus setups to punish yourself is just tilt wearing a different jersey."
      }
    ]
  },
  {
    id: "boss-4",
    title: "BOSS: The Crush Trap",
    intro: "Trap game alert, worth 2,000 XP. GENR, a mid-cap biotech, faces an FDA decision Friday and the options chain has gone radioactive. Everyone in your feed is buying calls. Four decisions stand between you and the most expensive lesson in options. Keep your eyes open.",
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
        explanation: "A 14 dollar straddle on a 40 dollar stock means the market is braced for roughly a plus-or-minus 35 percent swing. That is the bar your trade has to clear, because direction alone is not enough. You need the move to beat the move already sitting in the price. An IV this high is not a tip you stumbled onto, it is a toll."
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
        explanation: "He showed you one branch of the tree and called it the whole tree. Run all three. Rejection means zero. A modest approval pop to 52 leaves the calls holding 2 of intrinsic while IV collapses, which is down 60 percent on a win. Only the moonshot really pays. When two of three outcomes lose, including one where your direction call was correct, the easy-money math is an illusion."
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
        explanation: "The crush hits both sides the same way, slamming puts exactly as hard as calls, so flipping sides just buys you the identical trap with a different logo. The straddle costs the full 35 percent expected move, so it needs even more than the priced-in chaos before it profits. With no real edge on the science, the pro plays are to pass or to take lottery-ticket size with zero expectations."
      },
      {
        question: "Friday: approval. GENR opens up 18 percent at 47.20. Your friend's 50 calls, bought for 5, are trading at 1.10, down nearly 80 percent on the best news of the year. Final exam: why?",
        options: [
          "The market clearly did not understand what the approval was worth",
          "Market makers stole the move at the opening print",
          "He just needed to hold to expiration for the comeback",
          "The move landed inside the expected move and IV collapsed"
        ],
        correctIndex: 3,
        explanation: "An 18 percent pop sounds enormous until you remember the chain had priced 35. The stock never reached the 50 strike, so the calls are pure extrinsic value, and extrinsic value is exactly what IV crush destroys, 240 down to 60 overnight. The direction was correct and the news was the best case, yet the trade got demolished. In binaries, you are not betting on the event, you are betting against the price of the event."
      }
    ]
  },
  {
    id: "boss-5",
    title: "BOSS: The Breakout",
    intro: "Championship Saturday, with 2,000 XP riding on RDLN, twelve weeks of tight, quiet base-building under 60 while the crowd has fallen asleep on it. Breakout trades look easy on highlight reels. The four decisions in this gauntlet are where they actually get won. The clock is running.",
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
        explanation: "Price tells you what is happening, volume tells you who is behind it. A push through 60 on 2x-plus average volume means institutions are driving rather than day-trade tourists, and that participation is what separates a real breakout from a head fake. Front-running at 58 is a guess in a plan's jersey, waiting for plus-10 hands back the tight-risk entry, and buying every touch just pays repeated tolls to watch other people fail."
      },
      {
        question: "Trigger fires: RDLN clears 60 on heavy volume and you enter calls at 61.50 with a written rule, out on a daily close below 58. Next day the stock reverses hard and closes at 58.80, ugly, but above your line. Decision?",
        options: [
          "Hold and do not add, the written stop has not been hit yet",
          "Sell everything now, the reversal means the breakout failed",
          "Average down here, the pullback is a gift at these prices",
          "Widen the stop to 55 to give the trade more room to breathe"
        ],
        correctIndex: 0,
        explanation: "Breakouts shake the tree on purpose, and the pullback-and-recover is one of the most common sequences in the whole pattern, which your plan already knew when you wrote it. The stop said close below 58, not feels-bad-at-58.80. Panic-selling above your line and widening the stop are the same crime in opposite directions, since both are rewriting the rules mid-play. Hold the line you wrote, and never add to a trade that is on probation."
      },
      {
        question: "The shakeout completes: RDLN retakes 60, then powers to 66, up 10 percent from the pivot, and your calls are up 85 percent. Manage it.",
        options: [
          "Sell nothing yet, breakout stocks run 30 percent minimum",
          "Sell everything, 85 percent is plenty and greed is a sin",
          "Take partial profits and raise the exit line to your entry zone",
          "Add a fresh full position here, since up 10 percent is all the proof of concept you need"
        ],
        correctIndex: 2,
        explanation: "Hitting the first target means it is time to pay the team. Banking partial profit at plus-10-percent-from-pivot turns paper into points, and raising the remaining exit to breakeven means the worst case left on the table is a scratch. Always and never are not risk plans, they are slogans, and adding full size after a 10 percent run inverts your cost basis at the worst possible time."
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
        explanation: "Read the candle and tune out the euphoria. Record volume paired with a weak close means all that massive buying ran into even more massive selling, which is distribution, and somebody big is handing out inventory at the top of a vertical move. Climax behavior after an 18 percent post-breakout sprint is the textbook exit cue for the runner. The time to sell is while you can still celebrate it, well before the move forces your hand."
      }
    ]
  },
  {
    id: "boss-6",
    title: "BOSS: The Gauntlet",
    intro: "Season finale, all the marbles, 2,000 XP. Four decisions, one trade, and every skill in the book: scanning, sizing, managing, and the cold-blooded exit. This is the full system test. Champions get built in the details, so run the table.",
    parts: [
      {
        question: "Sunday scan. Four candidates on the watchlist. Account rules: trade only A-plus setups. Pick the play.",
        options: [
          "Ticker A: up 40 percent today on a viral social post, options IV sitting at 300 percent",
          "Ticker B: down 30 percent on the month and still falling, but trading at the cheapest price it has touched in two years",
          "Ticker C: MERX, an eight-week tight base above a rising 50-day, breaking out today on 2.5x volume",
          "Ticker D: dead sideways chop for months on shrinking volume, no catalyst anywhere in sight"
        ],
        correctIndex: 2,
        explanation: "MERX checks every box on the card. A long tight base, a rising 50-day, an RS line leading price to new highs, institutional volume on the breakout, sanely priced options at IV rank 30, and a five-week runway before earnings risk. Ticker A is a 300-percent-IV hype trap, B is a falling knife with cheap as its only thesis, and D has no edge at all. One A-plus beats three maybes every time."
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
        explanation: "Size from the stop rather than from the premium or whatever your gut is telling you. Your risk per contract is what the planned exit costs, about 190, so two contracts lands almost exactly on the 375 budget. Ten contracts bets 17 percent of the account on one play, and conviction does not get to amend the math. Splitting the difference is just breaking the rule politely, and one contract leaves budgeted edge sitting on the table."
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
        explanation: "Your stock is innocent, but the market is the field every play has to run on. Three out of four stocks follow the market's tide, and distribution days are the earliest storm warning the tape ever gives you. You do not panic-eject a working trade over a warning, and you do not ignore the weather either. Partial profits plus a tighter line keeps you on the field with less exposure, while adding into a deteriorating tape raises risk on the exact day the evidence says to lower it."
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
        explanation: "You exit when the original thesis is complete, and this thesis was a base breakout, never an earnings call. Holding turns a banked 80 percent technical win into an overnight coin flip, with IV crush waiting on the other side. Buying puts too just means paying double premium into peak IV, and watching a binary hourly is monitoring a coin while it is still in the air. Take the points. Full system executed. That is a championship drive."
      }
    ]
  }
];
