import type { Season } from "../../lib/types";

const season5: Season = {
  id: 5,
  title: "Earnings Season",
  subtitle: "The Playoffs of the Market",
  description: "Four times a year, the regular season ends and the playoffs begin. Earnings night is game night: one report, one gap, one final score. This season covers the expected move, the IV hype cycle, the crush, and the complete playbook for trading the most binary events in the market.",
  episodes: [
    {
      id: "s5e1",
      seasonId: 5,
      number: 1,
      title: "Welcome to the Playoffs",
      tagline: "Game night changes everything",
      playOfTheWeek: "February 2, 2022. Meta reports after the close, and by the next afternoon the stock is down 26 percent. Over 230 billion dollars of market value gone in one session, the biggest single-day wipeout in market history at the time. Every short-dated call held through that print opened worthless, because earnings is not a trading day. It is a verdict.",
      gameFilm: [
        "Welcome to the playoffs. Four times a year, every public company has to post its final score: revenue, profit, and a forecast for next quarter. Everything traders argued about for three months gets settled in one press release. The regular season is over. This is win-or-go-home.",
        "Earnings is what pros call a binary event. That is a fancy way of saying the outcome lands all at once. There is no gradual reveal, no halftime adjustment. The report drops after the close or before the open, while the market is shut, and the stock reopens wherever the new reality says it should. That jump from one price to another with nothing in between is called a gap.",
        "Gaps are why normal defense does not work on game night. A stop-loss order is an instruction to sell if the stock hits your price. But if the stock closes at 100 and opens at 74, it never touched 95, or 90, or 80. Your stop gets filled at the open, at 74, or not at all. The gap jumps right over your safety net.",
        "Technical analysis bends too. Support levels, trendlines, moving averages: those are maps of how buyers and sellers behaved under the old information. An earnings gap is new information. A stock can slice through six months of support before the opening bell because the company that chart described no longer exists.",
        "Options feel it most of all. In the days before the report, option prices inflate like ticket prices before a championship game, because everyone knows a big move is coming. The moment the score posts, that uncertainty vanishes and the air goes out of the stadium. We will spend two full episodes on that inflate-and-collapse cycle, because it decides more earnings trades than direction does.",
        "Here is the season ahead. We will learn to read the betting line the market posts before every game, ride the hype into the print, dodge the crash after it, and pick our spots like pros. The single rule that carries all of it: earnings can move a stock more in one minute than it moved in three months, so every position gets sized like the coin flip it is."
      ],
      takeaway: "Earnings night is a binary event: the score posts while the market is closed, and the stock gaps to the new reality with no stops, no charts, and no exits in between. Respect it like a playoff game, because the normal rules of the regular season do not apply.",
      caseStudies: [
        {
          title: "Meta, February 2022: The 230 Billion Dollar Gap",
          kind: "real",
          setup: "Going into its February 2022 report, Meta was a market darling. The stock had been a winner for a decade, and plenty of traders treated its earnings as a routine formality. Calls were a popular lotto ticket.",
          thePlay: "Meta reported after the close on February 2: daily users shrank for the first time ever, and guidance came in soft. The stock did not drift lower. It gapped, opening down hard and finishing the next day around minus 26 percent.",
          outcome: "Roughly 230 billion dollars of market value vanished in a single session, the largest one-day loss for any company in history at that point. Stops were jumped, near-term calls went to zero at the open, and there was no moment to react. The whole move happened while the market was closed.",
          lesson: "Even the biggest, most-loved stock on the board can gap 26 percent on one report. Earnings risk is not regular risk. Size every earnings position so that the worst-case gap is survivable."
        },
        {
          title: "GRDN: Maya Learns What a Gap Is",
          kind: "fictional",
          setup: "Maya had been trading Garden Depot, ticker GRDN, for six months and was up nicely. The stock sat at 84 dollars in a clean uptrend, earnings were due Thursday night, and her chart showed strong support at 80. She bought five weekly 85 calls for 2.40 each, with a plan to cut if the stock broke 80.",
          thePlay: "GRDN reported a small revenue miss and trimmed its full-year forecast. The stock closed Thursday at 84.50 and opened Friday at 71. Maya's mental stop at 80 never had a chance to trigger, because the stock never traded there.",
          outcome: "Her calls opened at 5 cents. A 1,200 dollar position became 25 dollars before she finished her coffee. The support level at 80 was irrelevant; the gap started eleven points below it.",
          lesson: "A plan built on stops and support levels is a regular-season plan. On game night the stock can reopen anywhere, so your real stop-loss is your position size."
        }
      ],
      quiz: [
        {
          id: "s5e1-q1",
          question: "What makes earnings a \"binary event\" for traders?",
          options: [
            "The stock can only move in two directions, up or down",
            "The new information lands all at once while the market is closed, and the stock gaps to a new price",
            "Only two types of traders are allowed to participate",
            "The company reports exactly twice per year"
          ],
          correctIndex: 1,
          explanation: "Binary here means the uncertainty resolves in one shot. The report drops outside market hours, and the stock reopens at whatever price the new information demands. That all-at-once jump is the gap, and it is what separates earnings risk from everyday trading risk."
        },
        {
          id: "s5e1-q2",
          question: "You hold a stock at 100 dollars with a stop-loss order at 95. Earnings come out overnight and the stock opens at 78. What happens?",
          options: [
            "Your stop sells you out at 95 as planned",
            "Your stop is cancelled automatically before earnings",
            "Your stop triggers at the open and fills near 78, far below your stop price",
            "The exchange reimburses you the difference"
          ],
          correctIndex: 2,
          explanation: "A stop-loss is a trigger, not a guarantee. The stock never traded at 95; it jumped from 100 to 78 while the market was closed. Your stop becomes a market order at the open and fills around 78. Gaps jump over stops, which is why position size is the only defense that always works."
        },
        {
          id: "s5e1-q3",
          question: "Why do chart support levels often fail on earnings night?",
          options: [
            "Exchanges delete old price data after each report",
            "Support levels only work for index funds",
            "Market makers turn charts off during earnings week",
            "Support reflects behavior under old information, and the report is new information that can reprice the stock past any level"
          ],
          correctIndex: 3,
          explanation: "Support and resistance map how traders behaved given what they knew. An earnings surprise changes what everyone knows, so the stock can gap straight through levels that held for months. Technicals are regular-season tools; the print rewrites the rulebook overnight."
        }
      ],
      paperTrade: {
        id: "s5e1-pt",
        title: "Up Big Before the Buzzer",
        ticker: "STRM",
        spotPrice: 142.5,
        brief: "You bought two STRM 145 calls two weeks ago for 4.00 each, betting on a rally into earnings. It worked: the stock ran from 131 to 142.50 and your calls are now worth 6.50. Earnings drop tonight after the close. The calls expire next Friday. What is the move?",
        choices: [
          {
            label: "Hold both calls through the print. The momentum is obviously bullish.",
            result: "STRM beats on revenue but guides next quarter below estimates. The stock gaps down 9 percent to 129.70 at the open. Your calls open at 0.40. The rally you rode is ancient history.",
            pnl: -720
          },
          {
            label: "Sell both calls before the close and watch the report from the sidelines.",
            result: "You sell at 6.50, locking in the gain from the run-up. STRM gaps down 9 percent overnight on soft guidance. You sleep fine, your profit already banked.",
            pnl: 500
          },
          {
            label: "Sell one call, hold one through earnings as a lotto ticket.",
            result: "You bank 250 on the first call. The stock gaps down 9 percent and the held call opens at 0.40, a 360 dollar loss on that contract. Half discipline bought you half protection.",
            pnl: -110
          }
        ],
        bestChoiceIndex: 1,
        debrief: "The trade was the run-up, and the run-up was over. Holding through the print converted a finished, winning trade into a brand-new coin flip, and the coin landed tails. Notice that even the half-and-half option lost money overall: the gap was big enough that one held contract erased the banked gain. When the position has done its job before game night, take the win off the field."
      },
      scenario: {
        id: "s5e1-sc",
        title: "The Hot Tip Before Game Night",
        situation: "Your friend texts you at 3 PM: \"BURG reports tonight. They are absolutely going to crush it, everyone is saying so. I just put my whole account into weekly calls.\" BURG is up 4 percent on the day already, and the options expiring this week cost triple what they did last month. You have 5,000 dollars in your account.",
        question: "What do you do?",
        options: [
          "Match your friend: put most of the account into weekly calls before the close",
          "Buy puts instead, because if everyone is bullish the stock must fall",
          "Skip the trade entirely, or risk no more than a small slice you can lose whole, knowing the print is a coin flip",
          "Buy the stock on margin instead of options so you cannot get crushed"
        ],
        bestIndex: 2,
        coachNotes: "Option A is the blowup play: an all-in bet on a binary event, in options already priced for a big move, on a tip that everyone has heard. If everyone is saying it, it is in the price. Option B is the same gamble wearing a different jersey; contrarian for its own sake is not edge. Option D removes the option-pricing problem but adds leverage to a gap that can blow through any margin cushion. Option C is the pro move: no edge means no trade, and if you must play, size it like the coin flip it is. The first lesson of the playoffs is that surviving them is the win condition."
      }
    },
    {
      id: "s5e2",
      seasonId: 5,
      number: 2,
      title: "The Expected Move",
      tagline: "Read the betting line before you bet",
      playOfTheWeek: "May 2023, Nvidia earnings. The options market posted a betting line of roughly plus-or-minus 7 percent, a normal big-tech print. Nvidia guided the next quarter about 4 billion dollars above estimates and the stock ripped 24 percent the next day, more than triple the line. Traders who knew how to read the expected move knew exactly how historic that night was the moment it happened.",
      gameFilm: [
        "Before every game, Vegas posts a line. Before every earnings report, the options market does the same thing. It is called the expected move: the size of the swing, up or down, that option prices are bracing for. You can read it in about thirty seconds, and you should never trade an earnings report without doing it.",
        "Here is the play. Find the option expiration that lands right after the report. Look up the at-the-money straddle: that is the call and the put at the strike closest to the stock price. Add the two prices together. That total, as a percentage of the stock price, is roughly the move the market expects. Stock at 200, the 200 call costs 7 and the 200 put costs 7, the straddle costs 14. Fourteen divided by 200 is 7 percent. The line is plus-or-minus 7 percent.",
        "Why does that work? Whoever buys that straddle profits only if the stock moves more than 14 dollars in either direction, because one side will be worthless and the other side has to pay for both. Whoever sells it profits if the move is smaller. The price where buyers and sellers shake hands is the market's honest, money-backed estimate of the swing. If you want a touch more precision, pros often shave the straddle number by about 15 percent, but the raw straddle is close enough to call the game.",
        "Now the crucial part: the expected move is a range, not a prediction. Plus-or-minus 7 percent does not mean the stock will move 7 percent, and it definitely does not say which direction. Think of it as roughly a one-standard-deviation bracket. The stock lands inside the bracket most of the time, and outside it often enough to keep everyone humble.",
        "The line tells you what is already priced in, and that changes everything about how you bet. Say you are sure a stock will jump 5 percent on a great report. If the expected move is plus-or-minus 8 percent, the market is already braced for more than your thesis. Buy options on that view and you can be exactly right about the news and still lose, because you paid for an 8 percent move and only got 5. Your opinion only has value when it differs from the line.",
        "So every earnings trade this season starts the same way. Pull up the straddle, do the thirty-second math, and write the number down. Then ask the only question that matters: do I believe the real move will be bigger than the line, smaller than the line, or pointed somewhere the line cannot see? If you do not have an answer, you do not have a trade."
      ],
      takeaway: "The at-the-money straddle price, divided by the stock price, is the market's betting line for earnings: the expected move. It is a money-backed range, not a prediction, and your trade only has edge when your view genuinely differs from that line.",
      caseStudies: [
        {
          title: "Nvidia, May 2023: Tripling the Line",
          kind: "real",
          setup: "Heading into Nvidia's May 2023 report, the AI story was building but the numbers had not landed yet. The options market priced an expected move of roughly plus-or-minus 7 to 8 percent, around 300 dollars a share at the time. A big line, but a normal one for a volatile tech name.",
          thePlay: "Nvidia reported a decent quarter, then guided next quarter's revenue to about 11 billion dollars when Wall Street expected roughly 7 billion. That is not a beat. That is a different company than anyone had modeled.",
          outcome: "The stock gapped up about 24 percent the next day, more than three times the expected move, adding roughly 180 billion dollars in value overnight and lighting the fuse on the AI trade. Straddle buyers who paid the 7 to 8 percent line got paid triple. Anyone who sold that line got run over.",
          lesson: "The expected move is the market's best guess, not a ceiling. Most prints land inside the line, but the rare report that triples it is exactly why selling earnings moves without defined risk is playing with fire."
        },
        {
          title: "PXLT: Dev's Thesis Was Already in the Price",
          kind: "fictional",
          setup: "Dev did real homework on Pixelate, ticker PXLT, trading at 60 dollars before earnings. New product, strong downloads, bullish chatter everywhere. He was convinced the stock would jump 10 percent on the report and got ready to back the truck up on calls.",
          thePlay: "Before clicking buy, he checked the line. The 60 straddle expiring after the report cost 7.20, an expected move of plus-or-minus 12 percent. His jaw dropped: the market was already braced for a bigger move than his own maximum bullish case of 10 percent.",
          outcome: "He skipped the long-options play. PXLT reported a genuinely great quarter and rose 9 percent, and the 60 calls he almost bought for 4 dollars opened worth about 5.60 with the post-print air let out of them, a mediocre win for a perfect call on the news. The straddle buyers, who paid 7.20 for a 5.40 move, lost outright.",
          lesson: "Being right about the company is not the same as being right about the trade. If the line already prices in your thesis, long options offer you a bad deal even when your forecast is perfect."
        }
      ],
      quiz: [
        {
          id: "s5e2-q1",
          question: "A stock trades at 80 dollars before earnings. The at-the-money call expiring after the report costs 3.00 and the at-the-money put costs 3.20. What is the rough expected move?",
          options: [
            "About 4 percent, the average of the two prices",
            "About 8 percent, the straddle price of 6.20 divided by the 80 dollar stock price",
            "About 16 percent, double the straddle",
            "It cannot be estimated without knowing the earnings date"
          ],
          correctIndex: 1,
          explanation: "Add the at-the-money call and put: 3.00 plus 3.20 is 6.20. Divide by the stock price: 6.20 over 80 is about 7.75 percent, call it 8. That is the market's betting line: it expects the stock to land within roughly plus-or-minus 8 percent of 80 after the print."
        },
        {
          id: "s5e2-q2",
          question: "The expected move on a stock is plus-or-minus 6 percent. What does that actually tell you?",
          options: [
            "The stock is guaranteed to move exactly 6 percent",
            "The stock will move up 6 percent if earnings are good",
            "The market is pricing a rough one-standard-deviation range of 6 percent in either direction, with no opinion on direction",
            "The company itself forecast a 6 percent move"
          ],
          correctIndex: 2,
          explanation: "The expected move is a bracket, not a prediction. It says option buyers and sellers have settled on roughly a 6 percent swing as the fair line, direction unknown. The stock lands inside that bracket most of the time and outside it often enough to punish anyone who treats the line as a ceiling."
        },
        {
          id: "s5e2-q3",
          question: "You buy the at-the-money straddle for 10 dollars on a 100 dollar stock, an expected move of 10 percent. Earnings hit and the stock rises 6 percent to 106. Roughly what happens to your trade?",
          options: [
            "You lose money: the 100 call is worth about 6 in intrinsic value, less than the 10 you paid for the package",
            "You profit, because the stock moved in a clear direction",
            "You break even automatically at any move over 5 percent",
            "You profit, because the put expires worthless and that helps the call"
          ],
          correctIndex: 0,
          explanation: "The straddle needs the move to beat its own price. You paid 10; after the print the put is nearly worthless and the call is worth roughly its 6 dollars of intrinsic value plus scraps. A 6 percent move against a 10 percent line loses about 4 dollars. The stock moved, the direction was clear, and the straddle buyer still lost, because the line was bigger than the game."
        }
      ],
      paperTrade: {
        id: "s5e2-pt",
        title: "Your Forecast vs. The Line",
        ticker: "RBLD",
        spotPrice: 150,
        brief: "RBLD reports tonight. You have done the work and you genuinely believe the quarter is strong, worth a pop of about 3 to 4 percent. You check the line: the 150 straddle expiring Friday costs 12.00, an expected move of plus-or-minus 8 percent. The 150 calls cost 6.20. What is the play?",
        choices: [
          {
            label: "Buy two 150 calls at 6.20 and hold through the report. You are confident in the direction.",
            result: "You nail it: RBLD beats and rises 3.5 percent to 155.25. But the calls you paid 6.20 for are worth about 5.40 after the print, mostly intrinsic value. Right on the news, wrong on the math.",
            pnl: -160
          },
          {
            label: "Buy the 150 straddle for 12.00 so you win whichever way it moves.",
            result: "RBLD rises 3.5 percent. The straddle you bought for 12.00 is worth about 5.60 the next morning. A 3.5 percent move against an 8 percent line is a wipeout for premium buyers.",
            pnl: -640
          },
          {
            label: "Pass on the trade. Your own forecast of 3 to 4 percent is inside the 8 percent line, so long options offer no edge.",
            result: "RBLD rises 3.5 percent, exactly your thesis. The calls and straddles both open lower than they closed. You made nothing and lost nothing, and your read of both the company and the market was perfect.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 2,
        debrief: "Your forecast was right and it still was not a long-options trade, because the line was bigger than your thesis. The call's breakeven sat at 156.20, beyond your own best case of roughly 155.50. When your expected outcome lives inside the expected move, buying premium means paying for a bigger move than you yourself believe in. No edge, no trade: a flat zero beat both losing tickets."
      },
      scenario: {
        id: "s5e2-sc",
        title: "The Cheap-Looking Weeklies",
        situation: "A biotech-adjacent tech name, HLIX, reports Thursday night. Your buddy points out that the weekly 5-percent-out-of-the-money calls only cost 90 cents on a 100 dollar stock and says they look cheap. You pull up the chain and find the at-the-money straddle costs 13 dollars, an expected move of plus-or-minus 13 percent.",
        question: "What does the line tell you, and what is the disciplined move?",
        options: [
          "The calls are cheap in dollars, so buy a bunch; small price means small risk",
          "Read the 13 percent line first: these calls are priced for a violent move, so only buy them if you believe the move will be even bigger than that, and size small",
          "Sell those calls naked, since the stock probably will not move 13 percent",
          "Ignore the straddle math, it only applies to people trading straddles"
        ],
        bestIndex: 1,
        coachNotes: "Option A confuses a low price tag with a good deal: a 90-cent option on a 13-percent line is priced for chaos, and chaos is exactly what you are paying for. Option C gets the probability roughly right and the risk completely wrong; naked short calls into a 13 percent line is unlimited downside on a binary event, and episode six will show you what happens when the line gets tripled. Option D is just refusing to look at the scoreboard: the straddle math prices every option on that chain, not just straddles. Option B is the pro move. The line is information. You only get paid for disagreeing with it correctly, so state your disagreement first, then size like you might be wrong."
      }
    },
    {
      id: "s5e3",
      seasonId: 5,
      number: 3,
      title: "The Pre-Game Hype Cycle",
      tagline: "Ticket prices rise before the big game",
      playOfTheWeek: "Two weeks before a Tesla earnings report, a trader buys at-the-money calls with implied volatility sitting at 55. By the afternoon of the print, the stock has barely moved, but implied volatility has climbed past 90 and her calls are up 35 percent. She sold them an hour before the close. She never needed the stock to go anywhere. She just sold her tickets at the gate.",
      gameFilm: [
        "Ever watched ticket prices the week before a championship game? Same seats, same stadium, but the price climbs every day as the game gets closer. Options do the exact same thing before earnings. That climb has a name: the implied volatility run-up, and it is one of the most reliable patterns in the options market.",
        "Quick refresher on the machinery. An option's price has two parts: intrinsic value, what it would be worth if exercised right now, and extrinsic value, the premium traders pay for what might happen. Implied volatility, IV, is the dial that sets the extrinsic part. Crank the dial up and every option on the chain gets more expensive, even if the stock price never moves an inch.",
        "Why does the dial crank up before earnings? Because the game is on the schedule. Everyone knows a binary event is coming on a known date: funds want protection, speculators want lottery tickets, and market makers selling those options demand higher prices for taking on gap risk. More demand for a known dose of uncertainty means IV grinds higher, day after day, into the print.",
        "Here is the sneaky part: the run-up is not uniform across the chain. The expirations just after the earnings date soak up the most event risk, so their IV inflates the most. An expiration from before the report to just after it can carry wildly different IV, because one contains the game and the other does not. Pros call the gap between those expirations the term structure, but you can just think of it as playoff tickets costing more than regular-season tickets.",
        "The sensitivity of an option's price to that IV dial is called vega. A call with a vega of 0.10 gains about 10 cents every time IV rises one point. If IV climbs from 45 to 75 over two weeks, that is 30 points, or roughly 3 dollars of gain on that option, with the stock standing completely still. That is how a trader can be flat on direction and up big on the position.",
        "But the same dial spins both ways, and what inflates before the game collapses after it. The run-up is the inhale; next episode is the exhale, and the exhale is violent. For now, lock in this idea: in the weeks before earnings, you are not just trading the stock. You are trading the price of uncertainty itself, and that price has a schedule."
      ],
      takeaway: "Implied volatility climbs into earnings like ticket prices before a title game, inflating option premiums even when the stock goes nowhere. Vega measures how much you gain per point of that climb, and the expirations just after the print inflate the most.",
      caseStudies: [
        {
          title: "Tesla: The Most Reliable Hype Cycle on the Board",
          kind: "real",
          setup: "For years, Tesla earnings were the loudest game night on the calendar. The stock routinely swung 8 to 15 percent on the print, and everyone knew it. That reputation showed up in the options weeks before each report.",
          thePlay: "Quarter after quarter, implied volatility on Tesla options expiring after the print would climb from the 50s into the 90s and sometimes past 100 as the date approached. Option prices could nearly double over two or three weeks even when the stock chopped sideways, pure vega doing the lifting.",
          outcome: "Traders who bought that premium early and sold into the peak got paid by the hype itself. Traders who bought at the peak, the day before the print, paid championship prices and then needed a championship move just to break even. Same options, same company; the only difference was when they bought their tickets.",
          lesson: "The IV run-up is a schedule, not a surprise. On stocks famous for big earnings moves, the price of uncertainty rises predictably into the print, and your entry date can matter more than your direction."
        },
        {
          title: "VLTA: Marcus Gets Paid and Has No Idea Why",
          kind: "fictional",
          setup: "Marcus bought five Voltara calls, ticker VLTA, three weeks before earnings. Stock at 95, calls at 3.10, IV at 42. His thesis was a breakout over 100. For two weeks the stock did absolutely nothing, drifting between 94 and 97.",
          thePlay: "He kept checking his account expecting to be bleeding out, but the calls kept ticking up: 3.40, 3.80, 4.30. The day before earnings, with the stock at 96, barely a dollar above his entry, the calls hit 4.50 with IV at 78. He sold, confused but happy, assuming he had gotten lucky.",
          outcome: "Up 700 dollars on a stock that moved one percent. There was no luck involved: IV had climbed 36 points into the print, and his vega gains overwhelmed three weeks of theta decay. The hype cycle paid him while his actual thesis went nowhere.",
          lesson: "Know which horse you are riding. Marcus thought he was betting on direction, but his profit came entirely from the run-up in implied volatility. Traders who understand that can plan the trade on purpose instead of stumbling into it."
        }
      ],
      quiz: [
        {
          id: "s5e3-q1",
          question: "Why does implied volatility rise in the weeks before a scheduled earnings report?",
          options: [
            "The stock price always rises before earnings, dragging IV up with it",
            "A known binary event is approaching, so demand for protection and speculation rises while sellers demand more for taking gap risk",
            "Exchanges mandate higher option prices during earnings season",
            "Interest rates always increase in the weeks before corporate reports"
          ],
          correctIndex: 1,
          explanation: "The earnings date is on the calendar, so everyone knows a gap is coming. Hedgers buy protection, speculators buy lottery tickets, and market makers charge more to be on the other side of a known coin flip. That demand for a scheduled dose of uncertainty is what cranks the IV dial higher into the print."
        },
        {
          id: "s5e3-q2",
          question: "Earnings hit after the close on Thursday. Which options typically show the biggest IV inflation beforehand?",
          options: [
            "Options expiring the Friday before the report, which do not contain the event",
            "Only deep in-the-money options",
            "All expirations inflate exactly equally",
            "The expirations landing just after the report, because they contain the event"
          ],
          correctIndex: 3,
          explanation: "Event risk lives in the expirations that contain the event. An option expiring the day before earnings never has to survive the gap, so its IV stays comparatively calm, while the expiration just after the print soaks up the whole coin flip and inflates the most. That is the term structure: playoff tickets cost more than regular-season tickets."
        },
        {
          id: "s5e3-q3",
          question: "Your call has a vega of 0.08. Over two weeks before earnings, IV rises from 50 to 75 while the stock stays flat. Roughly how much does vega add to the option's price?",
          options: [
            "About 8 cents",
            "Nothing, because the stock did not move",
            "About 2.00, since 25 IV points times 0.08 is 2 dollars",
            "About 75 cents"
          ],
          correctIndex: 2,
          explanation: "Vega is the gain per one-point rise in IV. Twenty-five points of IV climb times 0.08 per point is roughly 2 dollars of added premium, with zero help from the stock. That is the run-up trade in one line of math, though in reality theta decay claws back some of it along the way."
        }
      ],
      paperTrade: {
        id: "s5e3-pt",
        title: "Buying Tickets Early",
        ticker: "ORBT",
        spotPrice: 88,
        brief: "ORBT reports in 12 days. Options expiring just after the print show IV of 42; in each of the last six quarters, that figure peaked near 75 on earnings day. You are mildly bullish but mostly interested in the hype cycle itself. The 90 calls expiring the week after earnings cost 2.60. What is the play?",
        choices: [
          {
            label: "Buy two 90 calls now at 2.60 and plan to sell them the day before the print.",
            result: "Over 12 days the stock drifts to 90 and IV climbs from 42 to 71. The day before earnings your calls trade at 4.10. You sell into the hype, never touching the print itself.",
            pnl: 300
          },
          {
            label: "Wait and buy the same calls the day before earnings, then hold through the report for the big move.",
            result: "You pay peak hype: 4.10 per call with IV at 71. ORBT reports in-line and rises 2 percent. IV collapses to 38 and the calls open at 2.20. The move you paid for never came, and the premium deflated on schedule.",
            pnl: -380
          },
          {
            label: "Buy the calls now at 2.60 but hold them through the print to double dip on run-up plus the move.",
            result: "The run-up takes your calls to 4.10, but you hold. ORBT rises 2 percent and IV collapses. Your calls open at 2.20 the morning after. The crush handed back the entire run-up gain and then some.",
            pnl: -80
          }
        ],
        bestChoiceIndex: 0,
        debrief: "This trade was about ticket prices, not the game. Buying 12 days early at IV 42 and selling at IV 71 captured the hype cycle with vega doing the heavy lifting. The second choice paid top dollar at the gate, exactly the entry the run-up punishes. The third choice made the right entry and then donated the profit back by sticking around for the exhale. The run-up and the print are two different trades; do not let one bleed into the other."
      },
      scenario: {
        id: "s5e3-sc",
        title: "Flat Stock, Green Position",
        situation: "Eight days before earnings, you own calls on JTTR that you bought for the run-up play at IV 40. The stock has gone nowhere, but IV is now 64 and your calls are up 45 percent. A trading forum you follow is pounding the table that the report will be a monster beat, and part of you wants to let the winner ride through the print.",
        question: "What is the disciplined move?",
        options: [
          "Hold through the print; the position is already winning, so it has momentum",
          "Sell now or on your planned pre-print exit date, taking the vega profit the trade was designed to capture",
          "Buy more calls at IV 64 to press the bet into the report",
          "Convert to a much larger position using margin since the trade is clearly working"
        ],
        bestIndex: 1,
        coachNotes: "Option A confuses two different trades: your gains came from IV inflation, and holding through the print exposes exactly those gains to the post-print collapse. A position being green is not a reason; it is a result. Option C adds premium at hyped prices, the worst entry of the cycle, on the strength of forum conviction that is already in the price. Option D layers leverage on top of that mistake. Option B is the pro move: the run-up play has a defined exit, before the game starts, because the thing you own, inflated uncertainty, is at its most valuable right before it evaporates. Plan the exit when you plan the entry, then honor it."
      }
    },
    {
      id: "s5e4",
      seasonId: 5,
      number: 4,
      title: "The Crush",
      tagline: "The air goes out of the stadium",
      playOfTheWeek: "A trader buys calls on a 100 dollar stock the afternoon before earnings, paying 3 dollars with implied volatility at 95. The company beats, the stock opens up 3 percent, and his calls open at 80 cents. He was right about the report, right about the direction, and lost almost three quarters of his money overnight. The move was real. The premium was more real.",
      gameFilm: [
        "The final whistle blows, the score goes up, and the stadium empties. All that electricity, gone in minutes. That is IV crush: the instant the earnings report drops, the uncertainty that option prices were carrying disappears, implied volatility collapses back to normal levels, and the extrinsic value built on it evaporates. It is not a glitch or a rip-off. It is the price of certainty arriving.",
        "Walk the mechanics. Before the print, IV on near-term options might sit at 90 because nobody knows the score. After the print, everybody knows. There is nothing left to be uncertain about, so IV reverts to its everyday level, maybe 40, overnight. Every option on that chain loses the chunk of its price that 50 points of IV was supporting. The stock has not even opened yet and the premium is already gone.",
        "Run the numbers on the trade everyone makes once. Stock at 200, expected move plus-or-minus 7 percent, the 200 straddle costs 14. The company beats and the stock gaps up 4 percent to 208. The put is nearly worthless. The call holds about 8 dollars of intrinsic value plus maybe a buck of leftover premium at the new, deflated IV. Your 14 dollar straddle is now worth about 9. The stock moved 4 percent in your favor and you lost roughly 35 percent. Right and wrong at the same time.",
        "Single options fare no better. That 3 dollar call from the cold open was almost pure extrinsic value, priced at IV 95. The stock gapped up 3 percent, but the strike was still out of the money and IV got cut in half. New IV, new math: 80 cents. To win after the crush, the move has to be big enough that intrinsic value replaces the evaporated premium. That is exactly what the expected move measures, which is why episode two comes before this one.",
        "Here is the simplest way to hold the rule: when you buy options before earnings, the expected move is your entry fee. The stock has to move more than the line just to cover the premium collapse. Less than the line, you lose even when your direction is right. The crush is not a risk on top of the trade. It is the trade.",
        "And flip the lens for a second. Somebody owned the other side of those crushed options, collected that inflated premium, and watched it evaporate into their pocket. Premium sellers feast on the crush, which is why selling earnings premium is a famous strategy, and why episode six covers what happens to those sellers on the night the line gets tripled. Every edge in this game has teeth on both sides."
      ],
      takeaway: "The moment earnings drop, the uncertainty options were pricing disappears and IV collapses to everyday levels, vaporizing extrinsic value before the stock even opens. A long option through the print only wins if the move beats the expected move, because the crush is the entry fee.",
      caseStudies: [
        {
          title: "Apple, February 2024: The Quiet Print That Ate the Premium",
          kind: "real",
          setup: "Heading into Apple's report in early February 2024, options were pricing an expected move of roughly plus-or-minus 3 to 4 percent, with near-term IV pumped well above its everyday level. Plenty of traders bought straddles and short-dated calls, figuring the biggest company on earth would surely do something interesting.",
          thePlay: "Apple reported a modest beat with soft China revenue. Decent quarter, mild reaction: the stock closed the next day down well under one percent, a fraction of the line.",
          outcome: "IV collapsed back to normal overnight and the post-earnings straddle value fell to the stock's tiny actual move plus scraps; buyers of the roughly 3.5 percent line lost most of their premium in a single session. Nothing dramatic happened to Apple, which was exactly the problem.",
          lesson: "The crush does not need a crash or a moonshot to hurt you; it only needs an ordinary night. When the move comes in under the line, long premium loses by default, and most earnings nights are ordinary."
        },
        {
          title: "MNCH: Priya Was Right About Everything Except the Math",
          kind: "fictional",
          setup: "Priya followed MunchBox, ticker MNCH, religiously. Stock at 64 before earnings. She had tracked app downloads all quarter and was convinced the report would beat. The afternoon of the print, she bought ten weekly 66 calls for 1.90 each with IV at 110, sure she was about to get paid.",
          thePlay: "She nailed it. MNCH beat on revenue and earnings, and the stock gapped up 4 percent to 66.50. She opened her account expecting a triple.",
          outcome: "The calls were trading at 0.70. IV had collapsed from 110 to 45 overnight, and her strike was barely in the money. Her 1,900 dollar position was worth 700 dollars on a morning the company delivered everything she predicted. The expected move had been plus-or-minus 7 percent; the stock moved 4.",
          lesson: "Direction is half the trade; the line is the other half. Priya bought premium priced for a 7 percent move and got a 4 percent move, so the crush took more than the gap gave. Being right about the company is not enough when you overpay for the bet."
        }
      ],
      quiz: [
        {
          id: "s5e4-q1",
          question: "What is IV crush?",
          options: [
            "The drop in a stock's price after a bad earnings report",
            "The collapse of implied volatility, and the extrinsic value it supports, once the earnings uncertainty is resolved",
            "A margin call triggered by holding options overnight",
            "The fee brokers charge for exercising options on earnings day"
          ],
          correctIndex: 1,
          explanation: "Before the print, options carry inflated IV because the outcome is unknown. The instant the report drops, the unknown becomes known, IV reverts to everyday levels, and the premium that elevated IV was supporting evaporates. It happens to the whole chain at once, regardless of which way the stock goes."
        },
        {
          id: "s5e4-q2",
          question: "You buy a call before earnings. The stock gaps UP after the report, yet your call opens LOWER than you paid. What happened?",
          options: [
            "The market maker made a pricing error you can dispute",
            "The option must have expired during the report",
            "The gap was smaller than the expected move, so the extrinsic value lost to IV crush exceeded the intrinsic value gained from the move",
            "Calls always lose value after earnings no matter what"
          ],
          correctIndex: 2,
          explanation: "Your call's pre-print price was mostly inflated extrinsic value. The gap added intrinsic value, but the crush subtracted extrinsic value, and when the move comes in under the line, the subtraction wins. Calls can absolutely profit through earnings; they just need the move to beat the expected move first."
        },
        {
          id: "s5e4-q3",
          question: "Which position is hurt MOST by IV crush on earnings night?",
          options: [
            "Long out-of-the-money weekly options bought the day before the report",
            "Long shares of the stock",
            "A long-dated option expiring in two years",
            "A covered call where you own shares and sold a call against them"
          ],
          correctIndex: 0,
          explanation: "Short-dated out-of-the-money options are almost pure extrinsic value, priced at peak event IV, so the crush can vaporize most of their worth overnight. Shares have no IV component at all. Long-dated options have small exposure to the event spike. The covered call actually benefits, since the sold call's premium deflates in the seller's favor."
        }
      ],
      paperTrade: {
        id: "s5e4-pt",
        title: "Bullish Into the Bell",
        ticker: "FLNT",
        spotPrice: 64,
        brief: "FLNT reports tonight. You are genuinely bullish on the quarter. The expected move is plus-or-minus 8 percent and near-term IV is 110, more than double its everyday level of about 45. The weekly 66 calls cost 1.90; the 64 straddle costs 5.10. What do you do this afternoon?",
        choices: [
          {
            label: "Buy two weekly 66 calls at 1.90 and hold through the print.",
            result: "FLNT beats and gaps up 4 percent to 66.55. IV collapses from 110 to 45 and your calls open at 0.70. Right on the quarter, right on direction, down 63 percent.",
            pnl: -240
          },
          {
            label: "Buy the 64 straddle for 5.10 to cover both directions.",
            result: "The stock moves 4 percent against an 8 percent line. The put dies, the call holds about 2.55 of value, and the straddle opens near 2.70. The crush took half your money on a night the stock genuinely moved.",
            pnl: -480
          },
          {
            label: "Stand aside tonight. With IV at 110, the premium demands a move bigger than you actually expect.",
            result: "FLNT gaps up 4 percent on a real beat, and every long-premium ticket on the chain opens red anyway. You watch the crush from the bleachers with your capital intact.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 2,
        debrief: "Both long-premium plays were directionally fine and lost money anyway, which is the whole lesson of the crush in one screen. At IV 110, the options demanded a move beyond the 8 percent line, and your own bullish case was a beat, not an 8-percent-plus explosion. Buying inflated premium without a bigger-than-the-line thesis is paying playoff prices for a regular-season outcome. Flat was the only green on the board."
      },
      scenario: {
        id: "s5e4-sc",
        title: "The Morning-After Temptation",
        situation: "You skipped the DRVN print like a pro. The company beat, the stock gapped up 5 percent at the open, and the same calls that cost 3.00 yesterday now trade for 0.95 with IV cut from 100 to 42. Your gut says the rally continues, and those calls suddenly look like a bargain compared to yesterday.",
        question: "How should you think about those post-crush options?",
        options: [
          "Avoid them; if they fell that much overnight they must be broken",
          "Buy them only because they are 70 percent cheaper than yesterday",
          "Recognize they are now priced at normal IV, so if you have a real thesis for continued upside, you are finally buying premium at fair prices instead of hype prices",
          "Buy yesterday's puts instead since they fell even harder"
        ],
        bestIndex: 2,
        coachNotes: "Option A misreads the crush as damage: nothing is broken, the event premium simply left because the event is over. Option B is the right instinct with no thesis attached; cheaper than yesterday is not a reason, because yesterday's price contained a coin flip that no longer exists. Option D is buying a deflated ticket for a game that was just lost. Option C is the pro frame: post-crush options are priced at everyday IV, which makes the day after earnings one of the more honest times to buy premium, if and only if you have an actual view on follow-through. That idea gets its own episode when we hit post-earnings drift."
      }
    },
    {
      id: "s5e5",
      seasonId: 5,
      number: 5,
      title: "Playing the Run-Up",
      tagline: "Sell your tickets before kickoff",
      playOfTheWeek: "Three weeks before Nvidia's August 2023 report, with the AI mania raging, a trader bought calls expiring just after the print while IV was still catching its breath. The stock drifted higher and IV climbed relentlessly as game night approached. She sold everything two days before the report for nearly double, then watched from the couch as the print itself gave call buyers almost nothing. She got paid by the hype and never touched the coin flip.",
      gameFilm: [
        "Now we run our first real play of the season. The run-up play buys options weeks before earnings, while the price of uncertainty is still cheap, and sells them right before the print, when that price peaks. You are a ticket scalper: buy early, sell at the gate, never watch the game. Everything from episodes three and four feeds into this.",
        "Step one: find the setup. You want earnings two to four weeks out, on a stock with a history of big reported moves, where IV has not inflated yet. Compare today's IV on the post-earnings expiration to where it peaked in past quarters. IV at 40 today with a habit of printing 75 on earnings day is a runway. IV already at 70 means the hype train left without you, and chasing it is paying retail at the gate.",
        "Step two: buy the right contract. The expiration must land after the earnings date, because that is the bucket the event premium pours into; an option expiring before the print never inflates the same way. At-the-money or slightly out-of-the-money keeps vega meaningful. Strangles and straddles work for a pure volatility bet; single calls or puts work if you also have a directional lean.",
        "Step three: the exit is the whole play. You sell one to three days before the report, full stop. Hold past the print and the crush takes back everything the run-up paid you, plus interest, as our episode three paper trade showed. Scalpers do not use their own tickets. Write the exit date down when you enter, set the alert, and treat it like a contract with yourself.",
        "Now the honest tape review, because this is not free money. Theta is the toll: every day you hold costs decay, and the IV climb has to outrun it, which is why entering too early on a sleepy name bleeds you slowly. The stock can also drift against you, and on a single-option version a 6 percent drift down can swallow every point of vega gain. And here is the subtle one: sometimes the run-up is already priced in, with forward-looking IV math baking tomorrow's hype into today's premium, so the climb you expected barely materializes.",
        "So grade the play honestly. It is a high-frequency, modest-edge trade: lots of small wins when the cycle behaves, occasional small losses when it does not, and no exposure to the binary gap itself, because you are always flat at kickoff. That last part is the point. In a season defined by coin flips, this play makes its money before the coin leaves the thumb."
      ],
      takeaway: "The run-up play buys post-earnings-expiration options two to four weeks early while IV is still cheap, and sells them one to three days before the print at peak hype. Theta, adverse drift, and pre-priced hype are the honest risks, but the gap itself never touches you because you are flat by kickoff.",
      caseStudies: [
        {
          title: "Nvidia, Summer 2023: Scalping the Hottest Ticket in the Market",
          kind: "real",
          setup: "After Nvidia's legendary May 2023 guide, its August report became the most anticipated print on the calendar. Weeks out, options expiring after the August date were already bid, but IV still had a long climb ahead as the date approached and the AI frenzy compounded daily.",
          thePlay: "The run-up crowd bought calls and strangles in early August and rode two engines at once: a grinding stock drift higher and a relentless IV climb into the print. Both vega and direction paid through the front half of the month for those who exited before the report.",
          outcome: "The print itself was a monster beat, and yet the stock finished only modestly higher the next day before fading in the following sessions: the move came in around the line, and the crush ate the premium. Run-up sellers had banked the inflation; print holders paid for a blowout quarter and received a shrug.",
          lesson: "The same stock, the same month, two different trades: the run-up paid handsomely and the hold-through paid almost nothing despite spectacular news. When expectations are the product, sell them at the peak, which is the day before the game, not the day after."
        },
        {
          title: "DRFT: Sam Runs the Play Perfectly and Still Loses",
          kind: "fictional",
          setup: "Sam found a textbook setup on Driftline, ticker DRFT, at 110: earnings 19 days out, post-print IV at 38 versus a three-quarter average peak of 68. He bought 112 calls for 3.40, set a calendar alert to exit two days before the report, and felt like a pro.",
          thePlay: "The IV leg worked on schedule, climbing to 65 by his exit date. But DRFT caught a sector downgrade in week two and drifted from 110 to 103. His calls were now 9 dollars out of the money, and all the vega in the world could not outrun seven points of adverse drift plus three weeks of theta.",
          outcome: "He honored his exit and sold at 1.70, exactly half his entry. The discipline was perfect; the trade still lost 50 percent. Two days later the print sent DRFT to 96, and the same calls opened under 30 cents. The exit rule had turned a wipeout into a survivable loss.",
          lesson: "The run-up play removes gap risk, not market risk. Direction and theta can still beat your vega gains, so size it like a trade that loses sometimes, because it does. Sam's real win was the exit discipline that kept a bad trade from becoming a dead one."
        }
      ],
      quiz: [
        {
          id: "s5e5-q1",
          question: "For a run-up play on a company reporting March 20, which option expiration should you buy?",
          options: [
            "The expiration on March 14, the week before the report, because it is cheaper",
            "An expiration shortly after March 20, because it contains the event and soaks up the IV inflation",
            "Any expiration works equally well for capturing the run-up",
            "The longest-dated expiration available, two years out"
          ],
          correctIndex: 1,
          explanation: "Event premium pours into the expirations that contain the event. The March 14 expiry never has to survive the gap, so its IV stays comparatively flat, and a two-year option barely notices one quarter's report. The contract just after the print is where the hype cycle lives, so that is the ticket you scalp."
        },
        {
          id: "s5e5-q2",
          question: "When does the run-up play exit, and why?",
          options: [
            "One to three days before the report, to sell at peak IV and avoid the crush entirely",
            "The morning after the report, to capture the earnings move too",
            "Whenever the position is up 100 percent, regardless of the calendar",
            "At expiration, to avoid paying commissions twice"
          ],
          correctIndex: 0,
          explanation: "The asset you are trading is inflated uncertainty, and it is most valuable right before it evaporates. Selling one to three days pre-print captures the peak and keeps you flat through the binary gap. Holding for the move converts a volatility trade into a coin flip and hands the crush everything the run-up paid you."
        },
        {
          id: "s5e5-q3",
          question: "Which of these is a REAL risk of the run-up play, even when executed correctly?",
          options: [
            "IV crush after the earnings report",
            "Early assignment forcing you to deliver shares on a long call",
            "The stock gapping overnight on the earnings report itself",
            "Theta decay and adverse stock drift outrunning the IV gains, or the run-up already being priced in"
          ],
          correctIndex: 3,
          explanation: "Crush and the earnings gap cannot touch you because the play exits before the print, and long options carry no assignment obligation. The honest risks are the grind: daily theta, the stock drifting against a directional version of the play, and term-structure math that sometimes pre-prices the hype so the expected IV climb never shows up."
        }
      ],
      paperTrade: {
        id: "s5e5-pt",
        title: "Three Ways to Play the Hype",
        ticker: "AXIM",
        spotPrice: 120,
        brief: "AXIM reports in 15 days. Options expiring the week after the print show IV at 38; the last four quarters peaked at 68, 72, 65, and 70 on earnings day. The post-print 125 calls cost 3.10. Calls expiring the Friday BEFORE earnings cost just 1.40. Pick your play.",
        choices: [
          {
            label: "Buy two post-print 125 calls at 3.10 now, exit two days before the report.",
            result: "Over two weeks AXIM drifts to 123 and IV climbs from 38 to 66. Two days before the print you sell at 5.20. Vega and a friendly drift both paid, and you are flat for the coin flip.",
            pnl: 420
          },
          {
            label: "Buy the cheaper pre-print expiration calls at 1.40; same stock, lower cost.",
            result: "Those calls never contain the event, so their IV barely budges while theta grinds daily. The stock's slow drift to 123 is not enough. They expire the Friday before earnings worth 0.45, and you never even got a hype cycle.",
            pnl: -190
          },
          {
            label: "Buy the post-print calls at 3.10 and hold through the report for maximum upside.",
            result: "The run-up marks your calls at 5.20, but you hold. AXIM beats and rises 3 percent to 127; IV collapses from 66 to 35. The calls open at 2.40. The crush confiscated the run-up profit and dipped into your principal.",
            pnl: -140
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Choice one ran the play as designed: right expiration, cheap entry IV, disciplined pre-print exit, and it captured both the drift and the 28-point IV climb. Choice two chased a low price tag into the wrong bucket; an expiration without the event gets the theta bill and none of the hype. Choice three proves the exit IS the play: same entry as the winner, 560 dollars worse, all of it surrendered to the crush. The cheap option was not cheap and the held winner was not held wisely."
      },
      scenario: {
        id: "s5e5-sc",
        title: "The Train Already Left",
        situation: "You find KYTE five days before earnings. The setup looked great a month ago, but you are late: post-print IV is already 71 against a typical earnings-day peak of about 75. A trading group you follow is loudly buying calls for the run-up, posting screenshots of last quarter's wins, and you feel the pull to hop on.",
        question: "What is the disciplined read?",
        options: [
          "Buy the calls; the play worked last quarter so it should work again",
          "Pass on the run-up: with IV at 71 against a 75 peak, the inflation is nearly complete and theta plus any drift will likely outrun the last few points of vega",
          "Buy double the normal size to make up for the late entry",
          "Buy the calls but plan to hold through the print since the run-up edge is gone anyway"
        ],
        bestIndex: 1,
        coachNotes: "Option A is rearview-mirror trading: last quarter's entry was at cheap IV, and that is the entire reason it worked. Option C doubles exposure precisely when edge is thinnest, which is backwards; size should scale with edge, not with FOMO. Option D is the sneakiest trap, drifting from a dead volatility trade into an unplanned coin flip because you wanted a position. Option B is the pro move: the run-up play is a bet on IV inflation that has not happened yet, and at 71 of 75 the inflation has happened. Four points of runway cannot pay five days of theta. Late to the gate means no trade, and the calendar prints a new setup every week."
      }
    },
    {
      id: "s5e6",
      seasonId: 5,
      number: 6,
      title: "Holding Through the Print",
      tagline: "When you bet the game itself",
      playOfTheWeek: "April 2022, Netflix. The options market priced an expected move around 10 percent into the print. The company announced its first subscriber loss in a decade and the stock collapsed 35 percent the next day, more than triple the line. A trader holding a small put spread through that print made multiples on her risk, not because she gambled, but because she had a specific thesis the line was too small. That is the only reason to ever be on the field at kickoff.",
      gameFilm: [
        "Five episodes of telling you to be flat at kickoff, and now the exception. Sometimes a trader holds through the print on purpose. This episode is about when that is a real trade instead of a lottery ticket, and the bar is higher than most people want to hear.",
        "Start with the brutal math. To win a long straddle through earnings, the stock must move more than the expected move, because the crush resets every option to the actual outcome. The market is not dumb: across most stocks and most quarters, the actual move averages a bit SMALLER than what the straddle priced. That gap is called the volatility risk premium, the markup sellers charge for insuring a coin flip. Buy every earnings straddle on the board all year and you slowly bleed out. The house edge is real.",
        "So holding through the print demands an answer to one question: why is the line wrong THIS time? Not a feeling, a reason. Maybe the company has missed badly twice and the market is anchored to old numbers. Maybe a competitor's report three days ago revealed something this stock's options have not absorbed. Maybe the average actual move over eight quarters is 9 percent and the line is only priced at 6. You need the market to be mispricing the event, and you need to articulate the mispricing out loud.",
        "If you have the directional version of that edge, structure matters as much as thesis. Debit spreads, buying one option and selling a further-out one, are the pro's vehicle through earnings: the short leg gets crushed too, which finances part of your crush bill, and your max loss is locked before the gap. Naked long weeklies are the tourist vehicle: maximum crush exposure, maximum theta, and a breakeven the move may never reach.",
        "If your edge says the move will beat the line in EITHER direction, the long straddle or strangle is the tool, and your scoreboard is simple: actual move versus expected move. The Netflix print in the cold open paid because 35 beat 10 by a mile. But remember the base rate: most quarters, the move lands inside the line, and the straddle loses by design. You are betting on the exception, so it has to be an exceptional setup.",
        "And the sizing rule is non-negotiable because the math forces it. Hold-through trades lose more often than they win, with the wins arriving in lumps, so any one print must be survivable: one percent of the account at risk, maybe two with a defined-risk spread, never more. Win or lose, the result of a single print tells you nothing; the thesis quality across twenty prints tells you everything. Bet the game itself rarely, structure it tight, and size it like the coin flip never stopped being a coin flip."
      ],
      takeaway: "Holding through the print is only a trade when you can articulate why the expected move is mispriced, because on average actual moves come in under the line and long premium bleeds. Use defined-risk structures, demand the move beat the line, and size every print as survivable, one to two percent at most.",
      caseStudies: [
        {
          title: "Netflix, April 2022: The Night the Line Was Way Too Small",
          kind: "real",
          setup: "Netflix entered its April 2022 report already wounded: the January print had cratered the stock about 22 percent on weak subscriber guidance. Options priced the April expected move around plus-or-minus 10 percent, hefty by normal standards. But the January warning meant the subscriber model itself was in question, and a model breaking is not a 10 percent event.",
          thePlay: "Traders who held puts or put spreads through the print were betting a specific mispricing: that if subscribers actually shrank, the market would not reprice the stock by 10 percent, it would reprice the entire story. Netflix then reported its first subscriber LOSS in roughly a decade and guided to losing more.",
          outcome: "The stock collapsed about 35 percent the next day, more than triple the expected move, on its way to a fall of roughly 70 percent from the highs that year. Put holders made multiples on premium even after the crush, because 35 percent of intrinsic value buries any vol collapse. Straddle buyers won huge too; the direction almost did not matter at that magnitude.",
          lesson: "The hold-through pays when you correctly identify that the line measures a normal quarter and the setup is not normal. A broken narrative gaps far beyond what option math extrapolated from past quarters, and that gap between story risk and priced risk is the entire edge."
        },
        {
          title: "QRNO: Jess Bets the Line, Not the Company",
          kind: "fictional",
          setup: "Jess tracked Quarrino, ticker QRNO, a 45 dollar logistics stock. Before earnings she pulled eight quarters of history: the stock's average earnings move was 9.5 percent, yet this quarter's straddle priced only plus-or-minus 6 percent, drowsy pricing she traced to a quiet market week. Her edge was not predicting the quarter; it was that the line looked two-thirds the size of the stock's own habit.",
          thePlay: "She bought one 45 straddle for 2.70, about 1 percent of her account, fully prepared to lose all of it. Her roommate Theo, hearing the idea secondhand, put a quarter of his account into naked weekly calls, sure the report would be good.",
          outcome: "QRNO missed on margins and fell 11 percent. Jess's straddle, bought for 2.70, was worth about 4.90 the next morning: the move beat the line and paid her 80 percent on risked capital. Theo's calls went to zero, a quarter of his account gone on a thesis that was half right about volatility and dead wrong about direction.",
          lesson: "Same print, two bets: Jess bet that the line was too small and structured to win either direction at survivable size; Theo bet a direction with reckless size. The hold-through is a bet on the line being wrong, and the structure and sizing are what separate a trade from a donation."
        }
      ],
      quiz: [
        {
          id: "s5e6-q1",
          question: "What must happen for a long straddle held through earnings to be profitable?",
          options: [
            "The stock must move in the direction of the call",
            "The company must beat analyst estimates",
            "The actual move must exceed the expected move priced into the straddle",
            "Implied volatility must rise after the report"
          ],
          correctIndex: 2,
          explanation: "The straddle's cost IS the expected move, and the crush resets the position to roughly the actual outcome. Move bigger than the line, you win; smaller, you lose, regardless of direction or whether estimates were beaten. IV rising after a report is the one thing on this list that essentially never happens, since resolution kills uncertainty."
        },
        {
          id: "s5e6-q2",
          question: "What is the volatility risk premium in the context of earnings?",
          options: [
            "The tendency of actual earnings moves to average somewhat smaller than the move options priced, a markup earned by premium sellers",
            "The extra commission brokers charge during earnings week",
            "The bonus volatility a stock gains after beating earnings",
            "The difference between a call's price and a put's price"
          ],
          correctIndex: 0,
          explanation: "Sellers of earnings premium are insuring a coin flip, and like any insurer they charge a markup: implied moves average a bit larger than realized moves across most names and quarters. That is why blindly buying every straddle bleeds money over time, and why a hold-through needs a specific reason THIS line is too small."
        },
        {
          id: "s5e6-q3",
          question: "Why do pros often prefer debit spreads over naked long options when holding a directional view through earnings?",
          options: [
            "Spreads are exempt from IV crush entirely",
            "The short leg gets crushed too, offsetting part of the crush bill, and max loss is defined before the gap",
            "Spreads pay out double when the stock gaps",
            "Brokers waive margin requirements on spreads during earnings"
          ],
          correctIndex: 1,
          explanation: "Nothing is exempt from the crush, but a spread puts it on both legs: the option you sold loses inflated premium in your favor, subsidizing what your long leg loses. Add a max loss that is locked before the report and spreads turn a binary gap into a defined, survivable bet, which is exactly what sizing rules demand."
        }
      ],
      paperTrade: {
        id: "s5e6-pt",
        title: "The Line Looks Too Small",
        ticker: "TRVL",
        spotPrice: 45,
        brief: "TRVL reports tonight. The 45 straddle costs 2.70, an expected move of 6 percent. Your homework: the stock's average move over the last eight prints is 9.5 percent, and a major competitor guided down hard two days ago, which TRVL's options have barely reacted to. Your account is 25,000 dollars. Choose your play.",
        choices: [
          {
            label: "Buy one 45 straddle for 270 dollars, about 1 percent of the account, accepting it may go to zero.",
            result: "TRVL misses and guides down, echoing the competitor. The stock falls 11 percent to 40 and your straddle opens worth about 4.95. The move nearly doubled the line, and your sized-right bet paid 83 percent.",
            pnl: 225
          },
          {
            label: "Buy eight straddles for 2,160 dollars, almost 9 percent of the account, since the edge looks strong.",
            result: "Same print, same 11 percent drop, eight times the position: you make 1,800 dollars. It feels like genius. It is the same coin flip at a size where the inevitable inside-the-line quarter takes 9 percent of your account in one night.",
            pnl: 1800
          },
          {
            label: "Sell an iron condor with short strikes at the 6 percent expected-move edges, betting the move stays inside the line.",
            result: "You collected premium betting against your own research. The 11 percent drop blows through the put side and the condor settles near max loss.",
            pnl: -380
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Yes, the eight-lot made more money tonight, and it is still the wrong play: judge the bet, not the outcome. Hold-throughs lose more often than they win even WITH edge, and 9 percent of the account per print means a normal losing streak is ruin; 1 percent means you get to run this edge fifty more times. The condor was the strangest choice of all, selling the very line your homework said was too small. When your research says the line is wrong, bet with the research, at a size that survives being wrong anyway."
      },
      scenario: {
        id: "s5e6-sc",
        title: "Conviction Without a Mispricing",
        situation: "You love the company GLOW long-term: great product, growing market, you have read every filing. Earnings are tonight, the expected move is plus-or-minus 7 percent, and its actual moves have averaged about 6 percent over the past two years. You feel a strong pull to buy calls and hold through, because the company is simply excellent.",
        question: "What is the disciplined decision?",
        options: [
          "Buy weekly calls and hold through; deep conviction in the company is the edge",
          "Buy a small straddle to avoid choosing a direction",
          "Pass on the print: you have a view on the company but no view on the line, and at 7 priced versus 6 average there is no mispricing to bet",
          "Buy a call debit spread through the print since spreads handle crush better"
        ],
        bestIndex: 2,
        coachNotes: "Option A is the most common confusion in earnings trading: loving the company is a thesis about years, while the print is a bet about one overnight gap against a line that already prices a normal quarter. Option B buys a straddle when history says moves average UNDER this line, a textbook negative-expectancy bet. Option D picks the right structure for a trade that should not exist; good plumbing cannot fix a missing edge. Option C is the pro move: the hold-through question is never \"is this a good company\" but \"is this line mispriced,\" and 7 priced against 6 realized says it is priced about right, maybe rich. If you love GLOW, own shares on your own timeline and let game night pass without you."
      }
    },
    {
      id: "s5e7",
      seasonId: 5,
      number: 7,
      title: "Post-Earnings Drift",
      tagline: "The game after the game",
      playOfTheWeek: "February 2023, Meta gaps up about 23 percent on the \"year of efficiency\" report. The obvious feeling: too late, you missed it. Traders who bought anyway, after the gap, with options suddenly cheap from the crush, watched the stock keep grinding higher for months as part of a run that roughly tripled it that year. The gap was not the end of the move. It was the announcement of the move.",
      gameFilm: [
        "The final score is posted, the stadium is empty, and most traders have gone home. Big mistake, because there is a whole second game that starts the morning after earnings, and it is played at slower speed with cheaper tickets. Welcome to post-earnings drift.",
        "The pattern has been documented for decades, and academics call it post-earnings announcement drift: stocks that deliver big positive surprises tend to keep edging higher for weeks afterward, and big negative surprises keep leaking lower. The market under-reacts to genuinely new information; analysts revise their models over days, big funds build positions over weeks, and the price keeps absorbing the news long after the headline. The gap is the headline; the drift is the digestion.",
        "Your first job the morning after is sorting gap-and-go from fade. Gap-and-go: the surprise was fundamental, a guidance raise, a new product line inflecting, a margin breakout, something that changes future earnings, and the stock holds above its opening price as the day unfolds. That strength after a gap up is institutions buying, not shorts covering. Fade: the gap came from a one-time item, a tax quirk, a low-expectations relief pop, or the move blew far past what the news justifies, and the stock starts giving the gap back within hours. Price holding the open is the tell you can actually trade.",
        "Now the options angle that makes this season-five material: the crush just put premium on clearance. The day before earnings, IV was 80 and calls cost a fortune; the morning after, IV is 40 and the same dollar buys twice the exposure. If the report changed the company's trajectory and you want to ride the drift, you are finally buying options at everyday prices, with the binary event already behind you. No gap risk, no crush hanging over your head, just a directional trade at honest premiums.",
        "The play, step by step: let the stock open and prove itself for at least the first hour, no market orders into the opening chaos. If a gap up holds its opening range on a fundamental surprise, buy calls or call spreads with three to six weeks of runway, sized normally because this is a regular-season trade again. If the gap starts filling fast on a flimsy surprise, the fade trade is shorts or puts targeting the gap fill, with a stop above the post-earnings high. Either way your risk is defined by the morning's range, a luxury the print itself never offers.",
        "Patience is the edge here, and it is the rarest one. Everyone else is anchored to yesterday's price, muttering that they missed it. Drift is the market slowly admitting the new number is real, and slow is good for you: no overnight coin flip, normal IV, visible levels. The playoffs have a postseason, and it is the calmest money of the season."
      ],
      takeaway: "Stocks digest big earnings surprises slowly, drifting in the direction of the surprise for weeks, and the morning-after tell is whether the gap holds its open. The crush has just discounted every option on the chain, so the drift trade buys direction at everyday prices with the binary risk already gone.",
      caseStudies: [
        {
          title: "Meta, February 2023: The Gap That Kept On Giving",
          kind: "real",
          setup: "A year after its historic 2022 collapse, Meta reported in February 2023 with expectations in the basement. The \"year of efficiency\" report delivered: cost cuts, a massive buyback, and tighter discipline. The stock gapped up roughly 23 percent the next day, and the universal retail reaction was that the easy money was gone.",
          thePlay: "The drift framework said otherwise: the surprise was fundamental, a structural change in spending and capital return, not a one-time item. The stock held its gap and kept closing strong. Options, freshly crushed, were pricing a calm follow-through, so calls weeks out were suddenly cheap relative to the week before.",
          outcome: "Meta kept grinding higher for months, finishing 2023 roughly tripled from where it started the year. The post-gap buyers, who arrived AFTER the binary risk and AFTER the crush, caught one of the great drifts of the decade, while the missed-it crowd watched from the sidelines all spring.",
          lesson: "A gap on real fundamental change is often the start of repricing, not the end. The market needed months to digest the efficiency story, and the calmest entry of the entire move was the morning after the loudest night."
        },
        {
          title: "SNCK: Rosa Fades the Panic",
          kind: "fictional",
          setup: "SnackHaus, ticker SNCK, gapped down 18 percent after earnings, from 50 to 41. Rosa read past the headline: the entire miss came from a one-time warehouse-fire writedown, while revenue grew, margins excluding the charge improved, and full-year guidance was RAISED. The market had priced a broken company; the filing described a strong one with a bad insurance week.",
          thePlay: "She waited for the open, watched SNCK find a floor at 41 and reclaim 42.50 by late morning, then bought two-month 45 calls at post-crush IV of 38, down from 85 the day before. Her stop was a close below the morning low, defined and close by.",
          outcome: "Over the next five weeks the gap half-filled as analysts re-read the guidance, and SNCK climbed back to 46. Her cheap calls more than doubled. The same calls the day BEFORE earnings would have cost over twice as much and carried gap risk besides.",
          lesson: "Fades pay when the gap and the fundamentals disagree, and the crush is what makes the trade cheap. Rosa took zero binary risk, paid everyday premium, and let the market correct its own overreaction on her timeline."
        }
      ],
      quiz: [
        {
          id: "s5e7-q1",
          question: "What is post-earnings announcement drift?",
          options: [
            "The random noise in a stock's price the week after earnings",
            "The documented tendency of stocks to keep moving in the direction of a big earnings surprise for weeks afterward",
            "The decline in option prices after the report",
            "A stock always returning to its pre-earnings price within a month"
          ],
          correctIndex: 1,
          explanation: "Markets under-react to genuinely surprising earnings news: analysts revise slowly and large funds build positions over weeks, so big positive surprises tend to keep drifting up and big negative ones keep leaking down. The gap is the headline; the drift is the slow digestion, and it is one of the oldest documented patterns in finance."
        },
        {
          id: "s5e7-q2",
          question: "A stock gaps up 12 percent on a guidance raise and is still trading ABOVE its opening price two hours into the session. What does the drift framework suggest?",
          options: [
            "Short it immediately; all gaps fill eventually",
            "Wait six months for a pullback to the pre-earnings price",
            "Gap-and-go: a fundamental surprise plus a gap that holds its open signals institutional buying and likely continued drift higher",
            "Buy puts since IV is cheap after the crush"
          ],
          correctIndex: 2,
          explanation: "The two tells line up: the cause is fundamental, changing future earnings, and the price is holding above the open, meaning real buyers are absorbing supply rather than fading the pop. That combination is the classic gap-and-go setup. \"All gaps fill\" is a slogan, not a statistic, and it is most wrong precisely when guidance changes the company's trajectory."
        },
        {
          id: "s5e7-q3",
          question: "Why is the morning after earnings often an attractive time to BUY options?",
          options: [
            "Options are free the day after earnings",
            "IV is at its highest, so options gain value fastest",
            "Market makers are required to sell at a discount post-earnings",
            "The crush has reset IV to everyday levels, so you buy direction at normal prices with the binary gap risk already resolved"
          ],
          correctIndex: 3,
          explanation: "The day before the print you pay hype prices and carry coin-flip risk; the morning after, IV has collapsed to baseline and the event is history. If the report genuinely changed the company's path and you want the drift, you are finally paying everyday premium for a regular directional trade. Cheap is only good with a thesis, but post-crush is when cheap actually means cheap."
        }
      ],
      paperTrade: {
        id: "s5e7-pt",
        title: "The Morning After",
        ticker: "CRUX",
        spotPrice: 73,
        brief: "CRUX reported last night: a clean beat plus a full-year guidance raise on a new enterprise product. The stock gapped from 64 to 73, up 14 percent, and after the first hour it is holding firmly above its 72.20 open. IV has crushed from 95 to 40, so the six-week 75 calls cost 2.30. What is your play?",
        choices: [
          {
            label: "Buy two six-week 75 calls at 2.30, stop if the stock closes below the morning low of 71.50.",
            result: "Classic gap-and-go: analysts hike targets all week and CRUX drifts to 79 over the next month. Your post-crush calls, bought at everyday IV, sell at 3.95.",
            pnl: 330
          },
          {
            label: "Buy puts to fade the gap; up 14 percent in a day is too far, too fast.",
            result: "You are fading a fundamental guidance raise that is holding its open, the exact opposite of a fade setup. CRUX grinds to 77 over two weeks and your puts wither.",
            pnl: -240
          },
          {
            label: "Wait for a pullback to fill half the gap, around 68.50, before buying anything.",
            result: "The pullback never comes; strong drifts rarely offer the retest everyone is waiting for. CRUX walks to 79 while your limit order sits unfilled. No loss, but the framework gave you a defined entry this morning and you declined it.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Every gap-and-go signal was on the board: fundamental cause, gap holding its open, and freshly crushed IV making the calls cheap. Choice one took the trade with a defined stop at the morning low, regular-season risk management on a regular-season trade. The fade lost because it argued with a guidance raise, fading price instead of fading substance. The waiter lost nothing but learned the drift's cruelest habit: the strongest moves are the ones that never let latecomers in comfortably."
      },
      scenario: {
        id: "s5e7-sc",
        title: "Two Gaps, One Choice",
        situation: "Two stocks gapped down 15 percent this morning after earnings. PLMB missed revenue, cut full-year guidance, and announced its CFO is leaving; it keeps sliding below its open all morning. KETL beat estimates and maintained guidance, but took a one-time currency charge that spooked the algorithms; by late morning it has reclaimed its opening price. You want to buy one dip.",
        question: "Which dip, if either, do you buy?",
        options: [
          "PLMB, because it has fallen the hardest and is the better bargain",
          "Both, splitting your capital evenly to diversify the bet",
          "KETL: the gap contradicts intact fundamentals and price is already stabilizing, while PLMB's gap is confirmed by deteriorating fundamentals and continued weakness",
          "Neither; stocks that gap down 15 percent are untouchable for months"
        ],
        bestIndex: 2,
        coachNotes: "Option A is the classic bargain trap: PLMB is not cheap, it is repriced, and a guidance cut plus a CFO exit means the drift framework points DOWN for weeks, not up. Option B splits money between one good setup and one bad one, which is not diversification, it is dilution. Option D throws out a documented edge because of a blanket rule; the size of a gap says nothing without its cause. Option C reads both tells correctly: KETL's fundamentals and price action disagree with its own gap, the fade setup, while PLMB's agree with the gap, which is a falling knife with a reason to keep falling. Trade the disagreement, not the discount."
      }
    },
    {
      id: "s5e8",
      seasonId: 5,
      number: 8,
      title: "Beats, Misses, and Whisper Numbers",
      tagline: "The scoreboard lies if you read the wrong line",
      playOfTheWeek: "July 2023, Tesla posts a quarter that beats Wall Street on both revenue and earnings, the kind of headline that should print green. The stock drops almost 10 percent the next day. Margins were compressing, the call hinted at more price cuts, and the real expectations, the ones never printed in any analyst survey, were higher than the official ones. The team won on paper and lost on the field.",
      gameFilm: [
        "Rookie traders think earnings is a simple scoreboard: beat the estimate, stock up; miss it, stock down. Then they watch a company beat on every line and gap down 10 percent, and the whole model collapses. Time to learn how the scoreboard actually works.",
        "Start with what a beat even means. The consensus estimate is the published average of analyst forecasts, and companies play that game well: they guide analysts toward beatable numbers, which is why the majority of companies beat consensus every single quarter. A beat is the expected outcome, the price of admission. Nobody pays you for clearing a bar that was set on the ground.",
        "Enter the whisper number: the unofficial expectation the market actually trades on. When a stock has rallied 40 percent into the print and every fund is crowded long, the real bar is not the printed estimate, it is the blowout everyone privately requires to justify the run. Beat consensus by 2 percent when the whisper demanded 10, and the stock sells off because positioning, not the printed number, is what unwinds. The reaction reveals the whisper after the fact, every time.",
        "Now the bigger force: guidance. The quarter being reported is already dead, three months of history the market has spent thirteen weeks guessing at. Stock prices are claims on FUTURE earnings, so the forecast paragraph outweighs the results table almost every time. A miss with raised guidance often rips higher; a beat with a guidance cut almost always gets sold. The market does not pay for the quarter you finished. It reprices the quarters you have not played yet.",
        "And the game is not over when the press release drops. The earnings call, thirty to sixty minutes later, moves stocks all by itself: margin color, demand commentary, one cautious sentence from a CFO in the question-and-answer round. A stock can be up 5 percent on the release and close the after-hours session red because of a single phrase about \"softening demand trends.\" If you trade the headline pop in the first minute, you are trading half a report.",
        "Put the reading order together like a pro: guidance first, because the future is the product. Margins and the quality of the beat second, because revenue bought with discounts is not strength. The whisper context third: how had the stock run in, how crowded was the trade, what did positioning demand? The printed beat or miss reads LAST, because it is the line on the scoreboard everyone already expected. Read in that order and a stock falling on \"good\" earnings stops being a mystery. It becomes the most predictable surprise in the market."
      ],
      takeaway: "Companies are graded against whisper numbers and positioning, not the published consensus, and the guidance paragraph outweighs the results table because stocks price the future. Read guidance, margins, and expectations context before the headline beat, and falling-on-good-news stops being a mystery.",
      caseStudies: [
        {
          title: "Tesla, July 2023: Beat the Sheet, Lose the Game",
          kind: "real",
          setup: "Tesla rolled into its July 2023 report on a monster run, with the stock up well over 100 percent on the year. The printed expectations were beatable, but the whisper was demanding proof that aggressive price cuts were not eating the company alive. Everyone was watching one thing: margins.",
          thePlay: "Tesla beat consensus on revenue and earnings per share, the headline scoreboard fully green. But automotive margins came in compressed from the price cuts, and on the call the company signaled the cutting was not over. The dead quarter was fine; the forward picture was cloudier.",
          outcome: "The stock fell almost 10 percent the next day despite the beat. After a 100-percent-plus run, in-line-but-margin-light did not clear the whisper bar, and the crowded long positioning unwound through the exit at once.",
          lesson: "After a huge run-up, the whisper number is the real opponent, and margins plus forward commentary are how it keeps score. A headline beat is the admission ticket, not the victory, and the bigger the rally into the print, the higher the invisible bar."
        },
        {
          title: "FZZL: Marcus Trades the Headline and Eats the Guidance",
          kind: "fictional",
          setup: "Marcus liked Fizzle Beverages, ticker FZZL, at 80 dollars into earnings. His thesis was one line: \"they have beaten estimates nine quarters straight.\" He bought weekly calls that afternoon and set a price alert for the 4:05 PM release.",
          thePlay: "The headline hit: FZZL beats earnings per share by a penny, beats revenue slightly. The stock blipped up 2 percent in the first minutes of after-hours and Marcus screenshotted his gains. Then the guidance paragraph loaded: next-quarter revenue forecast 8 percent below consensus, citing slowing demand. On the call, the CFO confirmed inventory was building at retailers.",
          outcome: "FZZL reversed in after-hours and opened the next morning at 68, down 15 percent. The tenth consecutive beat was sitting right there in the press release, and it was worth nothing against a guidance cut. Marcus's calls opened at pennies.",
          lesson: "A beat streak is a record of cleared low bars, not a forecast. The market repriced FZZL on the quarter ahead, not the quarter behind, and the after-hours head-fake punished anyone who traded the headline before reading the forecast. Guidance is the headline; everything else is the box score."
        }
      ],
      quiz: [
        {
          id: "s5e8-q1",
          question: "A company beats consensus estimates on revenue and earnings, yet the stock falls 8 percent the next day. Which is the LEAST likely explanation?",
          options: [
            "Guidance for next quarter came in below expectations",
            "The whisper number was higher than the published consensus after a big run-up",
            "Management made cautious comments on the earnings call",
            "The market simply did not notice the beat"
          ],
          correctIndex: 3,
          explanation: "Markets do not miss headline numbers; they are parsed by algorithms in milliseconds. Stocks fall on beats because the real bar was higher than the printed one: soft guidance, a demanding whisper after a rally, or cautious call commentary. When price and headline disagree, the price is responding to information beyond the headline, not failing to see it."
        },
        {
          id: "s5e8-q2",
          question: "What is a whisper number?",
          options: [
            "The estimate companies privately send to regulators",
            "The unofficial expectation the market actually demands, often above published consensus when a stock has run up and positioning is crowded",
            "The lowest analyst estimate on the street",
            "A rumor about the earnings date changing"
          ],
          correctIndex: 1,
          explanation: "Consensus is the published average of analyst forecasts, a number companies actively manage toward beatable. The whisper is what the marginal buyer truly requires, set by the run-in and how crowded the trade is. Nobody prints it anywhere; the stock's reaction to the report is how the whisper reveals itself."
        },
        {
          id: "s5e8-q3",
          question: "Why does guidance usually move a stock more than the reported quarter itself?",
          options: [
            "Guidance is legally binding while results are not",
            "Reported results are usually inaccurate",
            "Stock prices are claims on future earnings, and the reported quarter is already-finished history the market spent three months estimating",
            "Analysts are not allowed to model past quarters"
          ],
          correctIndex: 2,
          explanation: "By release day, the reported quarter is a dead game: thirteen weeks old and largely triangulated by the market already. The forecast is the genuinely new information about the cash flows a stock actually represents. That is why a miss with raised guidance can rally and a beat with a cut almost always sells off: the market reprices the future, not the past."
        }
      ],
      paperTrade: {
        id: "s5e8-pt",
        title: "The Sure-Thing Beat",
        ticker: "NMBR",
        spotPrice: 210,
        brief: "NMBR reports tonight, up 45 percent in three months into the print. It has beaten consensus eight straight quarters and every forum expects number nine. The expected move is plus-or-minus 6 percent. You have no differentiated read on the quarter itself. Pick your play.",
        choices: [
          {
            label: "Buy weekly calls this afternoon; nine straight beats is as close to a sure thing as the market offers.",
            result: "NMBR beats consensus by 3 percent, but after a 45 percent run the whisper wanted more, and guidance lands merely in-line. The stock drops 7 percent and the crush finishes what the gap started. Your calls open nearly worthless.",
            pnl: -310
          },
          {
            label: "Skip the print. Tomorrow, after guidance and the call are public, trade the confirmed direction with a defined-risk spread if a drift setup appears.",
            result: "The stock gaps down 7 percent on light guidance, then keeps sagging below its open all morning, a downside drift setup. You buy a put spread at post-crush prices and the slide continues for a week.",
            pnl: 180
          },
          {
            label: "Buy puts this afternoon; after a 45 percent run, the bar is too high and the stock should fall on anything short of perfection.",
            result: "Your expectations logic is sound and the stock indeed falls 7 percent, just beating the 6 percent line, and the puts survive the crush to pay modestly. The reasoning was real, but the win needed the move to clear the line, and it cleared by a single point.",
            pnl: 260
          }
        ],
        bestChoiceIndex: 1,
        debrief: "The puts made money tonight, and the skip-then-react play is still the better trade, because the puts needed a 7 percent move against a 6 percent line and got it by a whisker; run that bet twenty times and the crush wins most of them. The calls were the true error: a beat streak is not edge when the whisper sets the bar, and you admitted you had no read on the quarter. Choice two never touched the coin flip, then traded the revealed direction at crushed premiums with the whole drift week ahead. When the crowd is sure, the line is demanding, and you know nothing extra, let the report speak first."
      },
      scenario: {
        id: "s5e8-sc",
        title: "Green at 4:05, Decision at 4:06",
        situation: "You hold calls on PRSM through earnings, against this season's advice, and at 4:05 PM the headline flashes: earnings per share and revenue both beat. The stock jumps 4 percent in after-hours and your calls would sell right now for a solid profit. The guidance details have not crossed the wire yet, and the earnings call starts in 25 minutes.",
        question: "What do you do at 4:06 PM?",
        options: [
          "Hold everything through the call; the beat proves the quarter was great and the pop should grow",
          "Sell into the headline pop, or at minimum take most off, because guidance and the call are unpriced coin flips and the after-hours bid is real money right now",
          "Buy more calls in after-hours to press the winning trade",
          "Place a stop-loss order in after-hours and let it protect you through the call"
        ],
        bestIndex: 1,
        coachNotes: "Option A confuses the box score with the final whistle: the guidance paragraph and the CFO's tone are still unplayed, and beats regularly reverse into red on one forecast line. Option C doubles exposure into the half of the report that moves stocks most, at after-hours spreads no less. Option D leans on a tool that barely works after dark: after-hours liquidity is thin, stops can fill terribly or not at all, and a headline-to-guidance reversal can gap right past one. Option B is the pro move: an after-hours pop on a headline beat is an offered price for an unresolved bet, and taking it converts luck into banked profit before the riskiest 30 minutes of the night. The release is half the report; never forget which half moves the stock."
      }
    },
    {
      id: "s5e9",
      seasonId: 5,
      number: 9,
      title: "Game-Planning the Week",
      tagline: "Champions are built on Sunday night",
      playOfTheWeek: "The first week of February 2022, three giants reported on three consecutive nights: Alphabet ripped 7 percent on a blowout, Meta imploded 26 percent the next day, and Amazon, sold off hard in sympathy with Meta, ripped back 13 percent the day after. Traders winging it night by night got whipsawed into dust. Traders who had planned the week, with separate theses and separate sizing for each print, treated it as three different games, because it was.",
      gameFilm: [
        "Pros do not wake up and ask what reports tonight. They build the week's slate on Sunday, the way a coaching staff builds a game plan before the team ever takes the field. Earnings season serves dozens of prints a week; your edge starts with choosing which three you will actually play and which thirty you will watch.",
        "Start with the calendar, the season schedule. Every reporting company has a date and a time slot: BMO, before market open, or AMC, after market close. The slot dictates your clock: an AMC report means positioning decisions by that afternoon's close and the reaction at the next open; a BMO report means everything must be set the evening before. Mark each name you care about with its slot, because being a day late on a BMO print is a position you never intended to hold through a gap.",
        "Next, post the lines. For every name on your list, pull the expected move from the straddle, thirty seconds each, the episode-two drill. Now the slate has prices: this one is priced at plus-or-minus 5, that one at 12. The lines tell you where the market sees a routine quarter and where it is braced for a brawl, and your week's opportunities live wherever your homework disagrees with a number.",
        "Then respect the schedule within the schedule: correlation. When one chipmaker reports, every chip stock moves on the readthrough; banks set the tone for banks; one retailer's inventory warning marks down the whole mall. Two earnings bets in the same sector is often one bet wearing two jerseys, sized double. And mind the order of play: if your name's biggest rival reports two days earlier, that print is new information for YOUR print, so plan to re-underwrite your thesis after it, not to sleepwalk through it.",
        "Now build the actual slate, and build it small: two or three A-setups, full stop. For each one, write the play before the week starts: which strategy from this season, run-up, hold-through with edge, post-print drift, what entry, what exit date, what size. Everything else on the calendar gets labeled watch-only, and watch-only means watch only. The plan exists precisely so that Wednesday-night adrenaline does not get a vote.",
        "Last, journal the week like game film. After each print: what was the line, what was the actual move, did your thesis survive contact, did you follow your own plan? Two seasons of that log and you will know which plays are YOUR plays, the ones your process actually wins at. The traders who survive earnings season are not the ones with the hottest takes. They are the ones whose Sunday plan was still running the show on Friday."
      ],
      takeaway: "Build the week on Sunday: calendar with BMO and AMC slots, expected moves posted for every name, correlations mapped, and a slate of two or three planned plays with entries, exits, and sizes written down. The plan exists so mid-week adrenaline never gets a vote, and the journal turns every week into game film.",
      caseStudies: [
        {
          title: "February 2022: Three Nights That Broke the Sympathy Trade",
          kind: "real",
          setup: "In the first week of February 2022, the calendar stacked three mega-cap prints on consecutive nights: Alphabet, then Meta, then Amazon. The names were correlated enough that each report would move the others, and every trader on earth knew the schedule.",
          thePlay: "Alphabet blew out and jumped about 7 percent, lifting the whole group's mood. The next night Meta posted its disaster and cratered 26 percent, and the readthrough logic took over: traders dumped Amazon ahead of its print, assuming the sector story was breaking. Then Amazon reported strong results and gapped UP around 13 percent.",
          outcome: "The sympathy traders got whipsawed twice in 48 hours: they extrapolated Alphabet's strength into Meta and got crushed, then extrapolated Meta's weakness into Amazon and missed a 13 percent rip. Each company's print turned on company-specific drivers that a one-story-fits-all week refused to see.",
          lesson: "Correlation is real but it is a clue, not a verdict: readthroughs tell you to RE-EXAMINE your thesis on the next name, not to auto-copy the last gap. A planned week treats each print as its own game with its own line, which is exactly what that brutal week rewarded."
        },
        {
          title: "BLTZ: Dana's Boring Sunday Beats a Wild Week",
          kind: "fictional",
          setup: "Dana traded a 30,000 dollar account through the heaviest week of earnings season. Sunday night she listed 14 reporting names, marked slots and expected moves, and cut the slate to two A-setups: a run-up play on Blitzline, ticker BLTZ, reporting Thursday AMC with IV at 41 against a typical peak of 70, and a possible drift trade on whatever Monday's retailer print revealed. Everything else went on the watch-only list, including her old favorite VYBE.",
          thePlay: "Tuesday, VYBE ripped 9 percent on a competitor's blowout and her group chat lit up with FOMO. The plan said watch-only, so she watched. She entered BLTZ calls Tuesday at IV 44, sold them Thursday afternoon at IV 67 for a 60 percent gain, and passed on the Monday drift when the gap failed to hold its open, exactly as her checklist required.",
          outcome: "One trade taken, one trade correctly skipped, one FOMO impulse declined: the week finished up about 4 percent with two nights of actual risk. VYBE, the chase she skipped, gave back its entire sympathy pop before Friday when its own print landed in-line.",
          lesson: "The slate is a promise you make to yourself on Sunday when you are calm, so that Wednesday's adrenaline negotiates with a document instead of a feeling. Dana's edge was not picking winners; it was that every decision all week had already been made."
        }
      ],
      quiz: [
        {
          id: "s5e9-q1",
          question: "A company on your slate reports BMO on Wednesday. When must your positioning decisions be final?",
          options: [
            "By Wednesday's close, since the report is Wednesday",
            "By Tuesday's market close, because the report lands before Wednesday's open and the gap happens at the opening bell",
            "Anytime Wednesday morning before 11 AM",
            "BMO and AMC timing makes no practical difference"
          ],
          correctIndex: 1,
          explanation: "Before market open means the news drops while you cannot trade, and the stock gaps at Wednesday's opening bell. Whatever you hold at Tuesday's close is your position through the event, ready or not. Mixing up BMO and AMC is how traders end up holding a coin flip they never meant to bet, which is why the slot goes on the calendar next to the name."
        },
        {
          id: "s5e9-q2",
          question: "Your slate has bullish earnings bets on two semiconductor companies reporting the same week. What is the planning concern?",
          options: [
            "Semiconductors are not allowed to report in the same week",
            "Nothing; two trades always mean diversification",
            "Their results and reactions are correlated, so this is closer to one doubled bet on the sector than two independent positions",
            "The second company's options stop trading after the first one reports"
          ],
          correctIndex: 2,
          explanation: "Sector peers move on each other's reports through readthrough: one chipmaker's demand warning marks down the whole group. Two same-direction bets in one sector concentrate risk while feeling like diversification, so a pro either sizes the pair as one position or drops the weaker setup. And whichever reports first is new information for the second thesis, scheduled in advance."
        },
        {
          id: "s5e9-q3",
          question: "Why does the weekly plan limit the slate to two or three setups when dozens of companies report?",
          options: [
            "Brokers cap earnings trades at three per week",
            "Edge comes from depth of preparation per print, and a small slate keeps sizing survivable and decisions pre-made instead of adrenaline-driven",
            "More than three positions is illegal in a margin account",
            "Expected moves can only be computed for three stocks at a time"
          ],
          correctIndex: 1,
          explanation: "Each earnings bet is a binary event demanding real homework: the line, the whisper context, the correlation map, the exit plan. Spread across ten prints, that work gets shallow and the sizing gets dangerous, since binaries can all land wrong in the same week. The watch-only list is not wasted research; it is how next week's A-setups get found."
        }
      ],
      paperTrade: {
        id: "s5e9-pt",
        title: "The Rival Reports First",
        ticker: "MGNA",
        spotPrice: 95,
        brief: "Your Sunday plan: a run-up play on MGNA calls ahead of its Wednesday AMC report, entered Monday at IV 45. It is Tuesday night and MGNA's biggest rival TOPA just reported, missing badly on the same enterprise demand MGNA depends on; TOPA is down 12 percent after hours. MGNA has slipped 4 percent in sympathy to 95, and your calls are down 35 percent. Your planned exit was Wednesday afternoon, pre-print. What now?",
        choices: [
          {
            label: "Stick to the letter of the plan: hold the calls until Wednesday afternoon's planned exit, then sell as scheduled.",
            result: "The readthrough keeps weighing on MGNA all day Wednesday; the stock sags to 93 and IV's rise cannot offset the drift. Your scheduled exit fills with the calls down 65 percent. The plan's exit date survived; its thesis did not.",
            pnl: -350
          },
          {
            label: "Re-underwrite tonight: TOPA's miss is material new information against your thesis, so exit at Wednesday's open and take the smaller loss.",
            result: "You sell at the open before the sympathy slide deepens, salvaging most of the position's remaining value. MGNA later reports its own soft quarter, validating the readthrough. The plan said the rival's print was a checkpoint, and the checkpoint said get out.",
            pnl: -90
          },
          {
            label: "Buy more calls; MGNA is oversold on TOPA's problems, and the discount improves your average price.",
            result: "You average down into a deteriorating thesis. MGNA drifts lower Wednesday and your enlarged position exits at the planned time for a much deeper loss. The discount was a verdict, not a sale.",
            pnl: -700
          }
        ],
        bestChoiceIndex: 1,
        debrief: "A game plan is a decision framework, not a suicide pact: the Sunday plan should have listed TOPA's Tuesday print as a checkpoint for the MGNA thesis, and a direct rival missing on the exact demand driver you were betting on is the checkpoint failing. Choice one followed the calendar while ignoring the thesis; choice three fought new information with more money. Choice two is what re-underwriting means: same discipline, updated inputs, smallest loss. Plans bind your impulses, not your eyes."
      },
      scenario: {
        id: "s5e9-sc",
        title: "Wednesday Night Lights",
        situation: "It is Wednesday of a packed earnings week. Your Sunday slate had two plays; one is finished at a small profit, the other triggers tomorrow. Tonight, a stock you never researched, JOLT, is suddenly everywhere: up 11 percent ahead of its AMC report, trending on every platform, with screenshots of overnight riches flooding your feed. The report drops in 90 minutes and weekly calls are bid at IV 130.",
        question: "What do you do with JOLT?",
        options: [
          "Take a small calls position; the momentum is real and 90 minutes is enough to ride it",
          "Buy puts instead, betting the hype reverses after the print",
          "Sell premium to the hype crowd with naked strangles at IV 130",
          "Nothing: it is not on the slate, you have no thesis, no line work, and 90 minutes of research is not preparation for a binary event"
        ],
        bestIndex: 3,
        coachNotes: "Option A is buying the most expensive options of the quarter, at IV 130, on a stock you never studied, with the print 90 minutes out: the worst entry of the entire hype cycle, fueled by other people's screenshots. Option B is the same unresearched coin flip with the sign flipped; contrarian without homework is still gambling. Option C at least understands that IV 130 is rich, but naked strangles on an unknown, hype-soaked name is unlimited risk on the exact kind of stock that triples its line. Option D is the championship answer: the Sunday plan already allocated this week's risk to researched setups, and JOLT failing every filter is the system working, not an opportunity missed. There is a new calendar next week. There always is."
      }
    },
    {
      id: "s5e10",
      seasonId: 5,
      number: 10,
      title: "The Earnings Playbook",
      tagline: "One system, every print",
      playOfTheWeek: "July 2022, Snap reports a brutal quarter and the stock drops 39 percent overnight, the kind of print that vaporized oversized longs and naked put sellers alike. The traders who survived it were not the ones who saw it coming; almost nobody did. They were the ones whose sizing rules assumed any single print could do exactly this, because eventually one always does.",
      gameFilm: [
        "Season finale. You have all the pieces: the line, the run-up, the crush, the hold-through math, the drift, the whisper, the weekly plan. Tonight we bolt them into one playbook, a decision system that tells you which play fits which setup, so that no earnings situation ever finds you improvising again.",
        "The playbook reads every setup through three questions, in order. One: where is IV in its cycle, cheap and pre-hype, peaked into the print, or freshly crushed? Two: what does my homework say against the line, do I expect the move bigger, smaller, or have no view at all? Three: where are we on the clock, weeks out, the night of, or the morning after? Those three answers point to exactly one section of the playbook, every time.",
        "Weeks out plus cheap IV is run-up territory, the episode-five play: buy the post-print expiration, ride the inflation, and exit one to three days before the report, no exceptions. The night of the print, you need a stated mispricing to play at all: homework says the line is too small, run the episode-six hold-through with a straddle or a debit spread at survivable size; homework says the line is too rich, the short-premium version with iron condors, defined-risk wings always, collects the same crush that destroys buyers, but it eats the Snap-style tail if the wings are not there. The morning after belongs to episode seven: confirmed gap-and-go or a fundamentals-versus-gap disagreement, traded at post-crush prices like a regular-season position.",
        "And question two has a fourth answer that beats them all: no view means no trade. Skipping a print is a position, the one with the best risk-reward on the board when you have no edge. The playbook's most-used page should be the one that says pass.",
        "Now the chapter that keeps the lights on: sizing for binary risk. Hold-through trades risk one percent of the account, two at the absolute most with defined-risk spreads, sized by max loss, not by feel. Run-up and drift plays carry regular trade sizing since the gap never touches them, but correlated prints in the same week share one risk budget, the episode-nine rule. The Snap print in the cold open is the design constraint: build every week so that a minus-39-percent shocker on your biggest position is an annoying Tuesday, not an ending.",
        "Last play of the season: judge the process, not the print. Any single earnings trade is a coin flip wearing your homework; twenty trades is a verdict on the homework itself. Journal every one against this playbook, and grade yourself on plan-following, sizing, and whether the edge you claimed was real. The traders still standing after ten earnings seasons are not the ones who called the most gaps. They are the ones whose worst night was always survivable, and whose system got a little sharper every print. That is the whole game. See you in the playoffs."
      ],
      takeaway: "Three questions route every setup to its play: where is IV in its cycle, what is your view against the line, and where are you on the clock; no view means the pass page. Size every hold-through so a 39 percent shocker is survivable, and grade your process across twenty prints, never on one.",
      caseStudies: [
        {
          title: "Snap, July 2022: The Print That Audited Everyone's Sizing",
          kind: "real",
          setup: "Snap had already warned intra-quarter in May 2022, cratering more than 40 percent in a day, so traders knew the name was dangerous. By the July report, plenty figured the bad news was priced in: the stock was down massively on the year, and selling puts for fat premium looked like getting paid to catch a bottom.",
          thePlay: "The July report was worse than feared: weak revenue, no forward guidance, advertising demand deteriorating. The stock dropped roughly 39 percent the next day, one of the most violent post-earnings moves of the era, on a name everyone already considered beaten down.",
          outcome: "Naked put sellers were carried off the field: premium collected over weeks was erased many times over in one gap. Oversized longs had no exit, since the entire move happened overnight. Traders running playbook sizing, defined-risk structures and one-to-two percent exposure, took a paper cut and traded again Monday.",
          lesson: "Already down a lot is not a floor, and priced in is a guess, not a guarantee. The playbook sizes every print so the once-a-season monster gap is survivable, because the monster never sends a calendar invite."
        },
        {
          title: "ZAPR and the Season of Boring Wins",
          kind: "fictional",
          setup: "Tomas committed one full earnings season to the playbook, journaling every trade in a spreadsheet. His season included Zapper Tech, ticker ZAPR, plus eleven other prints across three months, with a 20,000 dollar account and a hard one-percent rule on every hold-through.",
          thePlay: "The log told the story: four run-up plays, three winners and one loser when the hype was pre-priced. Two hold-throughs, both with written mispricing theses; one straddle won big when ZAPR tripled its line, one debit spread died quietly. Three post-print drift trades, two winners. And fourteen prints passed entirely, each with a one-line reason, usually no view against the line.",
          outcome: "Season result: up about 9 percent with no single night risking more than 2 percent of the account. His group chat featured a trader who made 40 percent on one YOLO print in week two and gave back everything plus half his account by week ten. Tomas's biggest loss all season was smaller than his average win.",
          lesson: "The playbook's output is not highlights, it is a distribution: many small decisions, no fatal ones, and an edge that compounds because it survives. Twelve trades and fourteen disciplined passes beat one legendary night, every season, forever."
        }
      ],
      quiz: [
        {
          id: "s5e10-q1",
          question: "Earnings are 18 days away, IV on the post-print expiration is near its quarterly lows, and you have no strong view on the report itself. Which playbook page is this?",
          options: [
            "Hold a straddle through the print to capture the move",
            "The run-up play: buy post-print premium now, exit one to three days before the report",
            "Sell naked strangles to collect the coming inflation",
            "The drift play: buy calls the morning after"
          ],
          correctIndex: 1,
          explanation: "Walk the three questions: IV is cheap and pre-hype, you have no view against the line, and the clock says weeks out. That routes straight to the run-up page, which needs no directional or line edge, just room for the predictable inflation. The hold-through requires a stated mispricing you do not have, and the drift page is not open until the morning after."
        },
        {
          id: "s5e10-q2",
          question: "Why does the playbook demand defined-risk structures, like iron condors instead of naked strangles, when selling rich earnings premium?",
          options: [
            "Defined-risk trades collect more premium than naked ones",
            "Naked options are prohibited during earnings week",
            "Premium selling collects the crush most quarters, but the occasional Snap-style gap far beyond the line turns undefined risk into account-ending loss",
            "Iron condors profit whether the stock moves or not"
          ],
          correctIndex: 2,
          explanation: "Selling the line wins whenever the move stays inside it, which is most quarters, and that steady win rate seduces traders into naked size. Then one print triples its line, minus 35 or 39 percent, and undefined risk gives back years of premium in a night. The wings cost a little expected profit and buy the only thing that matters: a known, survivable max loss."
        },
        {
          id: "s5e10-q3",
          question: "Your researched hold-through thesis was sound, but the stock landed inside the line and you took a full loss at one percent of the account. How does the playbook grade this trade?",
          options: [
            "A good trade: edge stated, structure defined, size survivable; single outcomes do not grade theses, twenty trades do",
            "A failure, because the trade lost money",
            "Proof that hold-throughs never work and should be dropped",
            "A signal to double the size next time to win the loss back"
          ],
          correctIndex: 0,
          explanation: "Binary events make good bets lose constantly; that is what binary means. The grade covers what you controlled: a written mispricing, defined risk, one percent sized, plan followed, full marks. Verdicts on the edge itself come from the journal across twenty prints, and doubling size to chase a loss is how the market collects tuition twice."
        }
      ],
      paperTrade: {
        id: "s5e10-pt",
        title: "Capstone: Route the Setup",
        ticker: "OMNI",
        spotPrice: 58,
        brief: "Final exam. OMNI reports in 9 days. IV on the post-print expiration is 33, far below its typical pre-earnings peak of about 60. Your homework gives you no directional view and no opinion that the eventual line will be mispriced. Account: 20,000 dollars. Route this setup through the three questions and pick the play.",
        choices: [
          {
            label: "Run-up play: buy post-print 58 strangles now at IV 33, exit two days before the report.",
            result: "Over the next week IV climbs from 33 to 54 as the print approaches. You exit on schedule two days before earnings with the strangle marked up 35 percent, flat for the coin flip itself, exactly as routed.",
            pnl: 280
          },
          {
            label: "Hold a straddle through the print; nine days out just means buying the ticket early.",
            result: "You hold through the report with no stated edge against the line. OMNI moves 4 percent against a 7 percent expected move, an ordinary quarter, and the crush does the rest. The straddle gives back the entire run-up gain and more.",
            pnl: -260
          },
          {
            label: "Sell naked straddles into the print to harvest the crush; IV will collapse either way.",
            result: "The crush logic is half right, but you sold cheap IV 33 premium weeks early, then OMNI's report week brought a surprise sector scare and a 9 percent move through your strikes. Undefined risk did what it does.",
            pnl: -540
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Question one: IV cheap and pre-hype. Question two: no view against the line. Question three: weeks out. That routes to exactly one page, the run-up, and choice one ran it cleanly: in at 33, out at 54, flat at kickoff. Choice two drifted from a volatility trade into an edge-free coin flip, the exact blur the playbook exists to prevent. Choice three sold premium when IV was CHEAP, the wrong half of the cycle, with naked risk on top. The system answered in thirty seconds; only discipline was being tested."
      },
      scenario: {
        id: "s5e10-sc",
        title: "The Whole Season in One Night",
        situation: "Earnings season finale. Your journal says you are up 6 percent over three months running the playbook: eleven trades, sixteen passes, nothing oversized. Tonight the quarter's loudest name, VRTX-adjacent highflier NOVA, reports AMC. Your homework genuinely suggests the line is a touch too small, maybe 8 priced against 10 likely. A voice says you have earned a victory lap: ten percent of the account on straddles would turn a good season into a legendary one.",
        question: "How do you finish the season?",
        options: [
          "Take the victory lap: ten percent on straddles, the edge is real and the season's profits are the bankroll",
          "Skip it entirely; never trade the loudest name on the calendar",
          "Run the playbook unchanged: the edge qualifies for a hold-through at one to two percent in defined-risk structure, same as every other print all season",
          "Put five percent on, splitting the difference between discipline and conviction"
        ],
        bestIndex: 2,
        coachNotes: "Option A is how winning seasons end in the loss column: the edge may be real, but 8-versus-10 is a thin mispricing, and ten percent of the account on one binary print means a single inside-the-line outcome erases months of process. Option D is the seductive compromise, but splitting the difference with discipline is just indiscipline at half price; the sizing rule was built for exactly this moment of confidence. Option B overcorrects, refusing a researched, qualified edge because the name is popular; loud is not a disqualifier, sizing handles loud. Option C is the championship answer and the whole season in one line: the playbook already has a page for this setup, the same one to two percent, the same defined risk, the same journal entry afterward. Edges scale a season. They do not scale a single night."
      }
    }
  ]
};

export default season5;
