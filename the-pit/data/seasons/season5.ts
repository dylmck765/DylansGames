import type { Season } from "../../lib/types";

const season5: Season = {
  id: 5,
  title: "Earnings Season",
  subtitle: "The Playoffs of the Market",
  description: "Four times a year the regular season wraps up and the playoffs begin. Earnings night is game night, when one report and one gap settle everything in a single final score. Over this season we walk through the expected move, the way hype builds before the print, the crush that follows it, and the full playbook for trading the most binary events the market serves up.",
  episodes: [
    {
      id: "s5e1",
      seasonId: 5,
      number: 1,
      title: "Welcome to the Playoffs",
      tagline: "Game night changes everything",
      playOfTheWeek: "On February 2, 2022, Meta reported after the close, and by the next afternoon the stock had fallen 26 percent. More than 230 billion dollars of market value disappeared in a single session, the biggest one-day wipeout the market had ever seen up to that point. Every short-dated call that anyone held through that print opened worthless, because earnings night is less of a trading day and more of an evening when the verdict finally comes down.",
      gameFilm: [
        "Welcome to the playoffs. Four times a year, every public company has to post its final score, which means revenue, profit, and a forecast for the quarter ahead. Everything traders argued about for three months gets settled in a single press release. The regular season is behind you now, and this is win-or-go-home.",
        "Earnings is what the pros call a binary event, which is a fancy way of saying the whole outcome lands at once. You get no gradual reveal and no halftime adjustment. The report drops after the close or before the open, while the market is shut, and the stock reopens wherever the new reality says it belongs. That leap from one price to another with nothing traded in between is called a gap.",
        "Gaps are the reason your usual defense falls apart on game night. A stop-loss order tells your broker to sell if the stock hits a certain price. Trouble is, if the stock closes at 100 and opens at 74, it never touched 95 or 90 or 80 along the way. Your stop just becomes a sell order at the open, around 74, and the gap has sailed right over the safety net you thought you had.",
        "Technical analysis bends under the same pressure. Support levels, trendlines, moving averages, all of those are really just maps of how buyers and sellers behaved back when everyone had the old information. An earnings gap is brand-new information, so a stock can slice through six months of support before the opening bell, because the company that chart described has effectively stopped existing.",
        "Options feel all of this the hardest. In the days leading up to a report, option prices balloon the way ticket prices climb before a championship game, because everyone can see a big move coming. Then the score posts, the uncertainty evaporates, and the air rushes out of the stadium. We will spend two whole episodes on that inflate-and-collapse cycle, since it decides more earnings trades than direction ever does.",
        "Here is the map for the season. We will learn to read the betting line the market posts before each game, ride the hype into the print, sidestep the crash that follows, and pick our spots the way the pros do. One rule carries all of it: earnings can move a stock further in one minute than it moved over three months, so we size every position like the coin flip it really is."
      ],
      takeaway: "Earnings night is a binary event. The score posts while the market is closed, and the stock gaps to a new reality with no stops, no charts, and no exits available in between. Treat it with the respect you would give a playoff game, because the ordinary rules of the regular season stop applying.",
      caseStudies: [
        {
          title: "Meta, February 2022: The 230 Billion Dollar Gap",
          kind: "real",
          setup: "Going into its February 2022 report, Meta was a market darling. The stock had been a winner for a solid decade, and plenty of traders treated its earnings nights as a routine formality. Buying calls into the print had become a popular lotto ticket.",
          thePlay: "Meta reported after the close on February 2. Daily users shrank for the first time ever, and the guidance came in soft. The stock did not drift lower over a few sessions. It gapped, opening down hard and finishing the next day around 26 percent lower.",
          outcome: "Roughly 230 billion dollars of market value vanished in one session, the largest single-day loss any company had ever taken up to that point. Stops got jumped, near-term calls went to zero at the open, and there was simply no moment in which to react. The whole move happened while the market sat closed.",
          lesson: "Even the biggest, most-loved stock on the board can gap 26 percent on a single report. Earnings risk does not behave like everyday risk, so you want to size every earnings position small enough that the worst-case gap is something you can survive."
        },
        {
          title: "GRDN: Maya Learns What a Gap Is",
          kind: "fictional",
          setup: "Maya had been trading Garden Depot, ticker GRDN, for six months and was up nicely on it. The stock sat at 84 dollars in a clean uptrend, earnings were due Thursday night, and her chart showed strong support at 80. She bought five weekly 85 calls for 2.40 each, planning to cut the trade if the stock broke below 80.",
          thePlay: "GRDN reported a small revenue miss and trimmed its full-year forecast. The stock closed Thursday at 84.50 and opened Friday at 71. Maya's mental stop at 80 never got a chance to fire, because the stock simply never traded there.",
          outcome: "Her calls opened at 5 cents. A 1,200 dollar position had become 25 dollars before she finished her coffee. That support level at 80 turned out to be irrelevant, since the gap began eleven full points below it.",
          lesson: "A plan built on stops and support levels is a regular-season plan. On game night the stock can reopen at any price it wants, which is why the only stop-loss you can really count on is the size of the position itself."
        }
      ],
      quiz: [
        {
          id: "s5e1-q1",
          question: "What makes earnings a \"binary event\" for traders?",
          options: [
            "The outcome lands all at once while the market is closed",
            "The stock can only move in two directions, up or down",
            "The company reports results exactly twice per calendar year",
            "Only two types of traders are allowed to participate"
          ],
          correctIndex: 0,
          explanation: "Binary here just means the uncertainty resolves in one shot. The report drops outside market hours, and the stock reopens at whatever price the new information demands. That all-at-once leap is the gap, and it is exactly what sets earnings risk apart from the everyday risk of trading."
        },
        {
          id: "s5e1-q2",
          question: "You hold a stock at 100 dollars with a stop-loss order at 95. Earnings come out overnight and the stock opens at 78. What happens?",
          options: [
            "Your stop sells you out at 95 as planned",
            "Your stop is cancelled automatically before earnings",
            "The exchange reimburses you the difference",
            "Your stop triggers at the open and fills near 78"
          ],
          correctIndex: 3,
          explanation: "A stop-loss is a trigger, not a guarantee. The stock never traded at 95. It jumped straight from 100 to 78 while the market was closed, so your stop turns into a market order at the open and fills somewhere around 78. Gaps sail over stops like this, which is why position size is the one defense that always holds up."
        },
        {
          id: "s5e1-q3",
          question: "Why do chart support levels often fail on earnings night?",
          options: [
            "Exchanges wipe the old price history after every earnings report",
            "The print is new information that can reprice the stock past any level",
            "Market makers are required to ignore chart levels during earnings week",
            "Support and resistance levels only apply to index funds and ETFs"
          ],
          correctIndex: 1,
          explanation: "Support and resistance are maps of how traders behaved given what they knew at the time. An earnings surprise changes what everyone knows, so the stock can gap clean through levels that held for months. Technicals are regular-season tools, and the print rewrites the rulebook overnight."
        }
      ],
      paperTrade: {
        id: "s5e1-pt",
        title: "Up Big Before the Buzzer",
        ticker: "STRM",
        spotPrice: 142.5,
        brief: "You bought two STRM 145 calls a couple of weeks ago for 4.00 each, betting on a rally into earnings. It worked beautifully. The stock ran from 131 to 142.50, and your calls are now worth 6.50. Earnings drop tonight after the close, and the calls expire next Friday. What is the move?",
        choices: [
          {
            label: "Hold both calls through the print. The momentum is obviously bullish.",
            result: "STRM beats on revenue but guides next quarter below estimates. The stock gaps down 9 percent to 129.70 at the open, and your calls open at 0.40. The rally you rode is suddenly ancient history.",
            pnl: -720
          },
          {
            label: "Sell both calls before the close and watch from the sidelines.",
            result: "You sell at 6.50, locking in the gain from the run-up. STRM gaps down 9 percent overnight on soft guidance, and you sleep just fine with the profit already banked.",
            pnl: 500
          },
          {
            label: "Sell one call, hold one through earnings as a lotto ticket.",
            result: "You bank 250 on the first call. The stock gaps down 9 percent and the held call opens at 0.40, a 360 dollar loss on that contract. Half the discipline bought you about half the protection.",
            pnl: -110
          }
        ],
        bestChoiceIndex: 1,
        debrief: "The trade was the run-up, and the run-up had already finished. Holding through the print took a completed, winning trade and turned it into a brand-new coin flip, and this time the coin came up tails. Notice that even the half-and-half option lost money once you net it out, because the gap was big enough that one held contract wiped out the gain you banked on the other. When a position has done its job before game night, take the win off the field."
      },
      scenario: {
        id: "s5e1-sc",
        title: "The Hot Tip Before Game Night",
        situation: "Your friend texts you at 3 PM: \"BURG reports tonight. They are absolutely going to crush it, everyone is saying so. I just put my whole account into weekly calls.\" BURG is already up 4 percent on the day, and the options expiring this week cost triple what they did last month. You have 5,000 dollars in your account.",
        question: "What do you do?",
        options: [
          "Skip the trade, or risk only a small slice you can afford to lose whole",
          "Match your friend: put most of the account into weekly calls before the close",
          "Buy puts instead, because if everyone is bullish the stock must fall",
          "Buy the stock on margin instead of options so you cannot get crushed"
        ],
        bestIndex: 0,
        coachNotes: "Option B is the blowup play, an all-in bet on a binary event, in options already priced for a big move, on a tip that the whole world has already heard. Once everyone is saying it, it is in the price. Option C is that same gamble wearing a different jersey, since being contrarian for its own sake is not an edge. Option D dodges the option-pricing problem but loads leverage onto a gap that can blow through any margin cushion you have. Option A is the pro move here. No edge means no trade, and if you absolutely must play, you size it like the coin flip it is. The first lesson of the playoffs is that simply surviving them is how you win."
      }
    },
    {
      id: "s5e2",
      seasonId: 5,
      number: 2,
      title: "The Expected Move",
      tagline: "Read the betting line before you bet",
      playOfTheWeek: "In May 2023, ahead of Nvidia's earnings, the options market posted a betting line of roughly plus-or-minus 7 percent, a perfectly normal big-tech print. Then Nvidia guided the next quarter about 4 billion dollars above estimates, and the stock ripped 24 percent the next day, more than triple the line. The traders who knew how to read the expected move understood exactly how historic that night was the moment it happened.",
      gameFilm: [
        "Before every game, Vegas posts a line. Before every earnings report, the options market quietly does the same thing. It is called the expected move, and it tells you the size of the swing, up or down, that option prices are bracing for. You can read it in about thirty seconds, and you should never trade an earnings report without doing it first.",
        "Here is the play. Find the option expiration that lands right after the report, then look up the at-the-money straddle, which is just the call and the put at the strike closest to the stock price. Add the two prices together. That total, taken as a percentage of the stock price, is roughly the move the market expects. Say the stock is at 200, the 200 call costs 7 and the 200 put costs 7, so the straddle runs 14. Fourteen divided by 200 is 7 percent, and there is your line: plus-or-minus 7 percent.",
        "Why does that math work? Whoever buys that straddle only profits if the stock moves more than 14 dollars in either direction, since one side ends up worthless and the other side has to pay for both. The seller comes out ahead if the move is smaller than that. The price where buyers and sellers shake hands is the market's honest, money-backed estimate of the swing. If you want a little more precision, pros often shave the straddle number by about 15 percent, but the raw straddle is close enough to call the game.",
        "Now the part that trips people up. The expected move is a range, not a prediction. Plus-or-minus 7 percent does not promise the stock will move 7 percent, and it says nothing at all about which way. Think of it as roughly a one-standard-deviation bracket. The stock lands inside that bracket most of the time, and it pokes outside often enough to keep everybody humble.",
        "The line tells you what is already baked into the price, and that quietly changes everything about how you bet. Say you are convinced a stock will jump 5 percent on a great report. If the expected move is plus-or-minus 8 percent, the market is already braced for more than your thesis calls for. Buy options on that view and you can be dead right about the news and still lose money, because you paid for an 8 percent move and only collected a 5 percent one. Your opinion is only worth something when it differs from the line.",
        "So every earnings trade this season opens the same way. Pull up the straddle, do the thirty-second math, and write the number down. Then ask the only question that matters: do I think the real move will be bigger than the line, smaller than it, or pointed somewhere the line cannot see? If you cannot answer that, you do not have a trade yet."
      ],
      takeaway: "Take the at-the-money straddle price, divide it by the stock price, and you have the market's betting line for earnings, the expected move. It is a money-backed range rather than a prediction, and your trade only carries an edge when your view genuinely differs from that line.",
      caseStudies: [
        {
          title: "Nvidia, May 2023: Tripling the Line",
          kind: "real",
          setup: "Heading into Nvidia's May 2023 report, the AI story was building, but the numbers had not landed yet. The options market priced an expected move of roughly plus-or-minus 7 to 8 percent, around 300 dollars a share at the time. A big line, sure, but a normal one for a volatile tech name.",
          thePlay: "Nvidia reported a decent quarter and then guided next quarter's revenue to about 11 billion dollars, when Wall Street had been looking for roughly 7 billion. That kind of number is not really a beat. It describes a different company than anyone had modeled.",
          outcome: "The stock gapped up about 24 percent the next day, more than three times the expected move, adding roughly 180 billion dollars in value overnight and lighting the fuse on the whole AI trade. Straddle buyers who paid for the 7 to 8 percent line got paid triple, and anyone who had sold that line got run over.",
          lesson: "The expected move is the market's best guess, not a ceiling. Most prints settle inside the line, but the rare report that triples it is exactly why selling earnings moves without defined risk is playing with fire."
        },
        {
          title: "PXLT: Dev's Thesis Was Already in the Price",
          kind: "fictional",
          setup: "Dev did real homework on Pixelate, ticker PXLT, trading at 60 dollars before earnings. New product, strong downloads, bullish chatter everywhere. He was convinced the stock would jump 10 percent on the report, and he was ready to back the truck up on calls.",
          thePlay: "Before he clicked buy, he checked the line. The 60 straddle expiring after the report cost 7.20, which works out to an expected move of plus-or-minus 12 percent. His jaw dropped, because the market was already braced for a bigger move than his own maximum bullish case of 10 percent.",
          outcome: "He passed on the long-options play. PXLT reported a genuinely great quarter and rose 9 percent, and the 60 calls he had nearly bought for 4 dollars opened worth about 5.60 once the post-print air had leaked out, a mediocre win for a perfect read on the news. The straddle buyers, who had paid 7.20 for a 5.40 move, lost outright.",
          lesson: "Being right about the company does not make you right about the trade. When the line already prices in your thesis, long options are a bad deal for you even if your forecast turns out perfect."
        }
      ],
      quiz: [
        {
          id: "s5e2-q1",
          question: "A stock trades at 80 dollars before earnings. The at-the-money call expiring after the report costs 3.00 and the at-the-money put costs 3.20. What is the rough expected move?",
          options: [
            "About 4 percent",
            "About 16 percent",
            "About 8 percent",
            "It cannot be estimated without knowing the earnings date"
          ],
          correctIndex: 2,
          explanation: "Add the at-the-money call and put together: 3.00 plus 3.20 is 6.20. Divide by the stock price and 6.20 over 80 comes out around 7.75 percent, so call it 8. That is the market's betting line, the expectation that the stock lands within roughly plus-or-minus 8 percent of 80 once the print hits."
        },
        {
          id: "s5e2-q2",
          question: "The expected move on a stock is plus-or-minus 6 percent. What does that actually tell you?",
          options: [
            "A rough one-standard-deviation bracket of 6 percent either way",
            "A guarantee that the stock will move exactly 6 percent",
            "A forecast that the stock rises 6 percent if earnings are good",
            "The company's own published forecast of a 6 percent move"
          ],
          correctIndex: 0,
          explanation: "The expected move is a bracket rather than a prediction. It tells you that option buyers and sellers have settled on roughly a 6 percent swing as the fair line, with the direction unknown. The stock lands inside that bracket most of the time, and it lands outside often enough to punish anyone who treats the line as a hard ceiling."
        },
        {
          id: "s5e2-q3",
          question: "You buy the at-the-money straddle for 10 dollars on a 100 dollar stock, an expected move of 10 percent. Earnings hit and the stock rises 6 percent to 106. Roughly what happens to your trade?",
          options: [
            "You make about 6 dollars, the size of the move",
            "You break even at any move over 5 percent",
            "You profit, since one winning leg is all a straddle needs",
            "You lose roughly 4 dollars of the 10 you paid"
          ],
          correctIndex: 3,
          explanation: "The straddle needs the move to beat its own cost. You paid 10, and after the print the put is nearly worthless while the call holds roughly its 6 dollars of intrinsic value plus a few scraps. A 6 percent move against a 10 percent line loses you about 4 dollars. The stock moved, the direction was clear, and the straddle buyer still came out behind, because the line was bigger than the game turned out to be."
        }
      ],
      paperTrade: {
        id: "s5e2-pt",
        title: "Your Forecast vs. The Line",
        ticker: "RBLD",
        spotPrice: 150,
        brief: "RBLD reports tonight. You have done the work and you genuinely believe the quarter is strong, worth a pop of about 3 to 4 percent. You check the line: the 150 straddle expiring Friday costs 12.00, an expected move of plus-or-minus 8 percent, and the 150 calls cost 6.20. What is the play?",
        choices: [
          {
            label: "Buy two 150 calls at 6.20 and hold through the report. You are confident in the direction.",
            result: "You nail the read. RBLD beats and rises 3.5 percent to 155.25. But the calls you paid 6.20 for are worth about 5.40 after the print, mostly intrinsic value by then. You got the news right and the math wrong.",
            pnl: -160
          },
          {
            label: "Buy the 150 straddle for 12.00 so you win whichever way it moves.",
            result: "RBLD rises 3.5 percent. The straddle you bought for 12.00 is worth about 5.60 the next morning. A 3.5 percent move against an 8 percent line is a wipeout for premium buyers.",
            pnl: -640
          },
          {
            label: "Pass on the trade and watch the print from flat.",
            result: "RBLD rises 3.5 percent, right in line with your thesis. The calls and straddles both open lower than they closed. You made nothing and lost nothing, and your read of the company and the market was perfect.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 2,
        debrief: "Your forecast was right and it still was not a long-options trade, because the line was bigger than your thesis. The call's breakeven sat at 156.20, beyond your own best case of roughly 155.50. When your expected outcome lives inside the expected move, buying premium means paying for a bigger move than you yourself believe in. With no edge there was no trade, and a flat zero beat both of the losing tickets."
      },
      scenario: {
        id: "s5e2-sc",
        title: "The Cheap-Looking Weeklies",
        situation: "A biotech-adjacent tech name, HLIX, reports Thursday night. Your buddy points out that the weekly 5-percent-out-of-the-money calls only cost 90 cents on a 100 dollar stock and figures they look cheap. You pull up the chain and find the at-the-money straddle costs 13 dollars, an expected move of plus-or-minus 13 percent.",
        question: "What does the line tell you, and what is the disciplined move?",
        options: [
          "The calls are cheap in dollars, so buy a bunch; small price means small risk",
          "Sell those calls naked, since the stock probably will not move 13 percent",
          "Ignore the straddle math, it only applies to people trading straddles",
          "Buy only with a thesis for a move beyond the 13 percent line, sized small"
        ],
        bestIndex: 3,
        coachNotes: "Option A mistakes a low price tag for a good deal. A 90-cent option sitting on top of a 13-percent line is priced for chaos, and chaos is exactly what you would be paying for. Option B gets the probability roughly right and the risk completely wrong, since naked short calls into a 13 percent line is unlimited downside on a binary event, and episode six will show you what happens when one of these lines gets tripled. Option C is just refusing to look at the scoreboard, because the straddle math prices every option on that chain, not only the straddles. Option D is the pro move. Read the 13 percent line first, because these calls are priced for a violent move. The line is information, and you only get paid for disagreeing with it correctly, so state your disagreement out loud, then size like you might be wrong."
      }
    },
    {
      id: "s5e3",
      seasonId: 5,
      number: 3,
      title: "The Pre-Game Hype Cycle",
      tagline: "Ticket prices rise before the big game",
      playOfTheWeek: "Two weeks before a Tesla earnings report, a trader buys at-the-money calls while implied volatility sits at 55. By the afternoon of the print, the stock has barely budged, but implied volatility has climbed past 90 and her calls are up 35 percent. She sells them an hour before the close. She never needed the stock to go anywhere at all. She just sold her tickets at the gate.",
      gameFilm: [
        "Ever watched ticket prices in the week before a championship game? Same seats, same stadium, and yet the price climbs a little every day as the game gets closer. Options do the exact same thing before earnings. That climb even has a name, the implied volatility run-up, and it is one of the most reliable patterns in the whole options market.",
        "A quick refresher on the machinery. An option's price comes in two parts. There is intrinsic value, which is what the option would be worth if you exercised it right now, and there is extrinsic value, the premium traders pay for whatever might happen between now and expiration. Implied volatility, or IV, is the dial that sets that extrinsic part. Crank the dial up and every option on the chain gets pricier, even if the stock itself never moves an inch.",
        "So why does the dial crank up before earnings? Because the game is already on the schedule. Everyone can see a binary event coming on a known date, so funds want protection, speculators want lottery tickets, and the market makers selling all those options demand higher prices for taking on the gap risk. More demand for a known dose of uncertainty pushes IV higher day after day, right into the print.",
        "Here is the sneaky part. The run-up does not spread evenly across the chain. The expirations just after the earnings date soak up the most event risk, so their IV inflates the most. Two expirations, one landing before the report and one just after it, can carry wildly different IV, because one of them contains the game and the other does not. Pros call the gap between those expirations the term structure, but you can just picture playoff tickets costing more than regular-season tickets.",
        "How sensitive an option's price is to that IV dial is measured by vega. A call with a vega of 0.10 gains about 10 cents every time IV rises one point. If IV climbs from 45 to 75 over two weeks, that is 30 points, or roughly 3 dollars of gain on that option, with the stock standing completely still. That is how a trader can be flat on direction and still up big on the position.",
        "Of course, the same dial spins both ways, and everything that inflated before the game collapses once it ends. The build-up you just learned is only half the story, and next episode covers the violent unwind that follows. For now, lock in this idea: in the weeks before earnings, you are not simply trading the stock. You are trading the price of uncertainty itself, and that price runs on a schedule."
      ],
      takeaway: "Implied volatility climbs into earnings the way ticket prices climb before a title game, inflating option premiums even when the stock goes nowhere. Vega measures how much you gain for each point of that climb, and the expirations landing just after the print inflate the most.",
      caseStudies: [
        {
          title: "Tesla: The Most Reliable Hype Cycle on the Board",
          kind: "real",
          setup: "For years, Tesla earnings were the loudest game night on the calendar. The stock routinely swung 8 to 15 percent on the print, and everyone knew it. That reputation showed up in the options weeks before each report.",
          thePlay: "Quarter after quarter, implied volatility on Tesla options expiring after the print would climb from the 50s into the 90s, and sometimes past 100, as the date approached. Option prices could nearly double over two or three weeks even when the stock chopped sideways, with pure vega doing the lifting.",
          outcome: "Traders who bought that premium early and sold into the peak got paid by the hype itself. Traders who bought at the peak, the day before the print, paid championship prices and then needed a championship move just to break even. Same options, same company, and the only thing that separated the two outcomes was when they bought their tickets.",
          lesson: "The IV run-up is a schedule, not a surprise. On stocks famous for big earnings moves, the price of uncertainty rises predictably into the print, and your entry date can end up mattering more than your direction."
        },
        {
          title: "VLTA: Marcus Gets Paid and Has No Idea Why",
          kind: "fictional",
          setup: "Marcus bought five Voltara calls, ticker VLTA, three weeks before earnings. Stock at 95, calls at 3.10, IV at 42. His thesis was a breakout over 100. For two weeks the stock did absolutely nothing, drifting between 94 and 97.",
          thePlay: "He kept checking his account expecting to be bleeding out, and instead the calls kept ticking up: 3.40, then 3.80, then 4.30. The day before earnings, with the stock at 96, barely a dollar above his entry, the calls hit 4.50 with IV at 78. He sold, confused but happy, figuring he had simply gotten lucky.",
          outcome: "He was up 700 dollars on a stock that had moved one percent. There was no luck in it at all. IV had climbed 36 points into the print, and his vega gains had swamped three weeks of theta decay. The hype cycle paid him while his actual thesis went exactly nowhere.",
          lesson: "Know which horse you are riding. Marcus thought he was betting on direction, when his profit came entirely from the run-up in implied volatility. The traders who understand that can plan the trade on purpose instead of stumbling into it."
        }
      ],
      quiz: [
        {
          id: "s5e3-q1",
          question: "Why does implied volatility rise in the weeks before a scheduled earnings report?",
          options: [
            "The stock price always rises before earnings, dragging IV up with it",
            "Demand rises for options that contain a known binary event",
            "Exchanges mandate higher option prices during earnings season",
            "Interest rates always increase in the weeks before corporate reports"
          ],
          correctIndex: 1,
          explanation: "The earnings date is on the calendar, so everyone can see a gap coming. Hedgers buy protection, speculators buy lottery tickets, and market makers charge more to sit on the other side of a known coin flip. All that demand for a scheduled dose of uncertainty is what cranks the IV dial higher into the print."
        },
        {
          id: "s5e3-q2",
          question: "Earnings hit after the close on Thursday. Which options typically show the biggest IV inflation beforehand?",
          options: [
            "The expirations landing just after the report",
            "Options expiring the Friday before the report date",
            "Deep in-the-money options across every expiration",
            "Every expiration on the chain, all inflating equally"
          ],
          correctIndex: 0,
          explanation: "Event risk lives in the expirations that contain the event. An option expiring the day before earnings never has to survive the gap, so its IV stays comparatively calm, while the expiration just after the print soaks up the whole coin flip and inflates the most. That is the term structure, with playoff tickets costing more than regular-season tickets."
        },
        {
          id: "s5e3-q3",
          question: "Your call has a vega of 0.08. Over two weeks before earnings, IV rises from 50 to 75 while the stock stays flat. Roughly how much does vega add to the option's price?",
          options: [
            "About 8 cents",
            "Nothing, since the stock did not move",
            "About 2.00",
            "About 75 cents"
          ],
          correctIndex: 2,
          explanation: "Vega is the gain you get for each one-point rise in IV. Twenty-five points of IV climb times 0.08 per point comes out to roughly 2 dollars of added premium, with zero help from the stock. That is the run-up trade in a single line of math, though in reality theta decay claws back some of it along the way."
        }
      ],
      paperTrade: {
        id: "s5e3-pt",
        title: "Buying Tickets Early",
        ticker: "ORBT",
        spotPrice: 88,
        brief: "ORBT reports in 12 days. Options expiring just after the print show IV of 42, and in each of the last six quarters that figure peaked near 75 on earnings day. You are mildly bullish but mostly interested in the hype cycle itself. The 90 calls expiring the week after earnings cost 2.60. What is the play?",
        choices: [
          {
            label: "Buy two 90 calls now at 2.60 and plan to sell them the day before the print.",
            result: "Over 12 days the stock drifts up to 90 and IV climbs from 42 to 71. The day before earnings your calls trade at 4.10. You sell into the hype, never even touching the print itself.",
            pnl: 300
          },
          {
            label: "Wait and buy the same calls the day before earnings, then hold through the report for the big move.",
            result: "You pay peak hype, 4.10 per call with IV at 71. ORBT reports in-line and rises 2 percent. IV collapses to 38 and the calls open at 2.20. The move you paid for never showed up, and the premium deflated right on schedule.",
            pnl: -380
          },
          {
            label: "Buy the calls now at 2.60 but hold them through the print to double dip on run-up plus the move.",
            result: "The run-up takes your calls to 4.10, but you hold. ORBT rises 2 percent and IV collapses. Your calls open at 2.20 the morning after. The crush handed back the entire run-up gain and then some.",
            pnl: -80
          }
        ],
        bestChoiceIndex: 0,
        debrief: "This trade was about ticket prices, not the game itself. Buying 12 days early at IV 42 and selling at IV 71 captured the hype cycle, with vega doing the heavy lifting. The second choice paid top dollar at the gate, which is exactly the entry the run-up punishes. The third choice made the right entry and then donated the profit back by hanging around for the exhale. The run-up and the print are two separate trades, so do not let one bleed into the other."
      },
      scenario: {
        id: "s5e3-sc",
        title: "Flat Stock, Green Position",
        situation: "Eight days before earnings, you own calls on JTTR that you bought for the run-up play at IV 40. The stock has gone nowhere, but IV is now 64 and your calls are up 45 percent. A trading forum you follow is pounding the table that the report will be a monster beat, and part of you wants to let the winner ride through the print.",
        question: "What is the disciplined move?",
        options: [
          "Hold through the print and let the winner ride",
          "Buy more calls at IV 64 to press the bet into the report",
          "Sell now or on your planned pre-print exit date",
          "Use margin to convert into a much larger position"
        ],
        bestIndex: 2,
        coachNotes: "Option A blurs two separate trades together. Your gains came from IV inflation, and holding through the print exposes exactly those gains to the post-print collapse. A position being green is not a reason to hold, it is just a result. Option B adds premium at hyped prices, the worst entry of the whole cycle, on the strength of forum conviction that is already in the price. Option D piles leverage on top of that mistake. Option C is the pro move. Take the vega profit the trade was designed to capture, because the run-up play has a defined exit before the game ever starts. The thing you own, inflated uncertainty, is at its most valuable right before it evaporates. Plan the exit when you plan the entry, then honor it."
      }
    },
    {
      id: "s5e4",
      seasonId: 5,
      number: 4,
      title: "The Crush",
      tagline: "The air goes out of the stadium",
      playOfTheWeek: "A trader buys calls on a 100 dollar stock the afternoon before earnings, paying 3 dollars with implied volatility at 95. The company beats, the stock opens up 3 percent, and his calls open at 80 cents. He read the report right, he read the direction right, and he still lost almost three quarters of his money overnight. The move was real. The premium turned out to be more real.",
      gameFilm: [
        "The final whistle blows, the score goes up, and the stadium empties. All that electricity, gone in a matter of minutes. That is IV crush. The instant the earnings report drops, the uncertainty that option prices were carrying disappears, implied volatility collapses back to normal levels, and the extrinsic value built on top of it evaporates. It is not a glitch and it is not a rip-off. It is the price of certainty showing up.",
        "Walk the mechanics through. Before the print, IV on near-term options might sit at 90 because nobody knows the score yet. After the print, everybody knows. There is nothing left to be uncertain about, so IV reverts to its everyday level, maybe 40, overnight. Every option on that chain loses the chunk of its price that 50 points of IV was holding up. The stock has not even opened yet and the premium is already gone.",
        "Run the numbers on the trade everyone makes once. Stock at 200, expected move plus-or-minus 7 percent, the 200 straddle costs 14. The company beats and the stock gaps up 4 percent to 208. The put is nearly worthless now. The call holds about 8 dollars of intrinsic value plus maybe a buck of leftover premium at the new, deflated IV. So your 14 dollar straddle is now worth about 9. The stock moved 4 percent in your favor and you still lost roughly 35 percent, right and wrong at the very same time.",
        "Single options fare no better. That 3 dollar call from the cold open was almost pure extrinsic value, priced at IV 95. The stock gapped up 3 percent, but the strike was still out of the money and IV got cut in half. New IV gives you new math, and the new math says 80 cents. To win after the crush, the move has to be big enough that intrinsic value replaces the premium that evaporated. That is exactly what the expected move measures, which is why episode two comes before this one.",
        "Here is the cleanest way to hold the rule. When you buy options before earnings, the expected move is your entry fee. The stock has to move further than the line just to cover the premium collapse. Come in under the line and you lose even with the direction right. So stop thinking of the crush as some extra risk sitting on top of the trade. It is baked right into the trade itself.",
        "And flip the lens for a second. Somebody owned the other side of all those crushed options. They collected that inflated premium and watched it evaporate right into their pocket. Premium sellers feast on the crush, which is why selling earnings premium is a famous strategy, and why episode six covers what happens to those sellers on the night the line gets tripled. Every edge in this game has teeth on both sides."
      ],
      takeaway: "The moment earnings drop, the uncertainty options were pricing disappears and IV collapses to everyday levels, vaporizing extrinsic value before the stock even opens. A long option held through the print only wins if the move beats the expected move, because the crush is the entry fee you pay to be there.",
      caseStudies: [
        {
          title: "Apple, February 2024: The Quiet Print That Ate the Premium",
          kind: "real",
          setup: "Heading into Apple's report in early February 2024, options were pricing an expected move of roughly plus-or-minus 3 to 4 percent, with near-term IV pumped well above its everyday level. Plenty of traders bought straddles and short-dated calls, figuring the biggest company on earth would surely do something interesting.",
          thePlay: "Apple reported a modest beat with soft China revenue. A decent quarter and a mild reaction, with the stock closing the next day down well under one percent, a fraction of the line.",
          outcome: "IV collapsed back to normal overnight, and the post-earnings straddle value fell to the stock's tiny actual move plus a few scraps, so buyers of the roughly 3.5 percent line lost most of their premium in a single session. Nothing dramatic happened to Apple, which was precisely the problem.",
          lesson: "The crush does not need a crash or a moonshot to hurt you. It only needs an ordinary night. When the move comes in under the line, long premium loses by default, and the truth is that most earnings nights are ordinary."
        },
        {
          title: "MNCH: Priya Was Right About Everything Except the Math",
          kind: "fictional",
          setup: "Priya followed MunchBox, ticker MNCH, religiously. Stock at 64 before earnings. She had tracked app downloads all quarter and was convinced the report would beat. The afternoon of the print, she bought ten weekly 66 calls for 1.90 each with IV at 110, sure she was about to get paid.",
          thePlay: "She nailed the read. MNCH beat on revenue and earnings, and the stock gapped up 4 percent to 66.50. She opened her account expecting a triple.",
          outcome: "The calls were trading at 0.70. IV had collapsed from 110 to 45 overnight, and her strike was barely in the money. Her 1,900 dollar position was worth 700 dollars on a morning the company delivered everything she had predicted. The expected move had been plus-or-minus 7 percent, and the stock moved 4.",
          lesson: "Direction is only half the trade, and the line is the other half. Priya bought premium priced for a 7 percent move and got a 4 percent move, so the crush took more than the gap gave back. Being right about the company simply is not enough when you overpay for the bet."
        }
      ],
      quiz: [
        {
          id: "s5e4-q1",
          question: "What is IV crush?",
          options: [
            "The drop in a stock's price in the hours after a bad earnings report",
            "A margin call triggered by holding options through an overnight gap",
            "The fee brokers charge for exercising options on earnings day",
            "The collapse of implied volatility once the result is known"
          ],
          correctIndex: 3,
          explanation: "Before the print, options carry inflated IV because the outcome is unknown. The instant the report drops, the unknown becomes known, IV reverts to everyday levels, and the premium that elevated IV was holding up evaporates. It hits the whole chain at once, no matter which way the stock ends up going."
        },
        {
          id: "s5e4-q2",
          question: "You buy a call before earnings. The stock gaps UP after the report, yet your call opens LOWER than you paid. What happened?",
          options: [
            "The market maker made a pricing error you can dispute",
            "IV crush took more extrinsic value than the gap added in intrinsic",
            "The option must have expired during the overnight session",
            "Calls always lose value after earnings, no matter which way the stock goes"
          ],
          correctIndex: 1,
          explanation: "Your call's pre-print price was mostly inflated extrinsic value. The gap added some intrinsic value, but the crush subtracted extrinsic value, and when the move comes in under the line, the subtraction wins. Calls can absolutely profit through earnings, they just need the move to beat the expected move first."
        },
        {
          id: "s5e4-q3",
          question: "Which position is hurt MOST by IV crush on earnings night?",
          options: [
            "Long out-of-the-money weeklies bought the day before the report",
            "A long position in the underlying shares themselves",
            "A long-dated option with two years left until expiration",
            "A covered call where you own shares and sold a call against them"
          ],
          correctIndex: 0,
          explanation: "Short-dated out-of-the-money options are almost pure extrinsic value, priced at peak event IV, so the crush can vaporize most of their worth overnight. Shares carry no IV component at all, and long-dated options have only small exposure to the event spike. The covered call actually benefits, since the sold call's premium deflates in the seller's favor."
        }
      ],
      paperTrade: {
        id: "s5e4-pt",
        title: "Bullish Into the Bell",
        ticker: "FLNT",
        spotPrice: 64,
        brief: "FLNT reports tonight. You are genuinely bullish on the quarter. The expected move is plus-or-minus 8 percent and near-term IV is 110, more than double its everyday level of about 45. The weekly 66 calls cost 1.90, and the 64 straddle costs 5.10. What do you do this afternoon?",
        choices: [
          {
            label: "Buy two weekly 66 calls at 1.90 and hold through the print.",
            result: "FLNT beats and gaps up 4 percent to 66.55. IV collapses from 110 to 45 and your calls open at 0.70. Right on the quarter, right on direction, and down 63 percent.",
            pnl: -240
          },
          {
            label: "Buy the 64 straddle for 5.10 to cover both directions.",
            result: "The stock moves 4 percent against an 8 percent line. The put dies, the call holds about 2.55 of value, and the straddle opens near 2.70. The crush took half your money on a night the stock genuinely moved.",
            pnl: -480
          },
          {
            label: "Stand aside tonight and trade nothing into the print.",
            result: "FLNT gaps up 4 percent on a real beat, and every long-premium ticket on the chain opens red anyway. You watch the crush from the bleachers with your capital intact.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 2,
        debrief: "Both long-premium plays were directionally fine and lost money anyway, which is the whole lesson of the crush in one screen. At IV 110, the options demanded a move beyond the 8 percent line, and your own bullish case called for a beat, not an 8-percent-plus explosion. Buying inflated premium without a bigger-than-the-line thesis is paying playoff prices for a regular-season outcome. Flat was the only green on the board."
      },
      scenario: {
        id: "s5e4-sc",
        title: "The Morning-After Temptation",
        situation: "You skipped the DRVN print like a pro. The company beat, the stock gapped up 5 percent at the open, and the same calls that cost 3.00 yesterday now trade for 0.95 with IV cut from 100 to 42. Your gut says the rally continues, and those calls suddenly look like a bargain next to yesterday's prices.",
        question: "How should you think about those post-crush options?",
        options: [
          "Avoid them entirely; options that fell that hard overnight are broken goods",
          "They are priced at everyday IV now; buy only with a real follow-through thesis",
          "Load up purely because they cost 70 percent less than they did yesterday afternoon",
          "Buy yesterday's puts instead, since they fell even harder than the calls"
        ],
        bestIndex: 1,
        coachNotes: "Option A misreads the crush as damage, when nothing is broken at all. The event premium simply left because the event is over. Option C is the right instinct with no thesis attached, since cheaper than yesterday is not a reason, because yesterday's price contained a coin flip that no longer exists. Option D is buying a deflated ticket for a game that was just lost. Option B is the pro frame here. The morning after the crush is when you finally get to buy premium at fair prices instead of hype prices, which makes it one of the more honest times to be a buyer, but only if you have an actual view on follow-through. That idea gets its own episode when we hit post-earnings drift."
      }
    },
    {
      id: "s5e5",
      seasonId: 5,
      number: 5,
      title: "Playing the Run-Up",
      tagline: "Sell your tickets before kickoff",
      playOfTheWeek: "Three weeks before Nvidia's August 2023 report, with the AI mania raging, a trader bought calls expiring just after the print while IV was still catching its breath. The stock drifted higher and IV climbed relentlessly as game night approached. She sold everything two days before the report for nearly double, then watched from the couch as the print itself gave call buyers almost nothing. She got paid by the hype and never once touched the coin flip.",
      gameFilm: [
        "Now we run our first real play of the season. The run-up play buys options weeks before earnings, while the price of uncertainty is still cheap, and sells them right before the print, when that price peaks. You are a ticket scalper here: buy early, sell at the gate, and never watch the game. Everything from episodes three and four feeds straight into this.",
        "Step one is finding the setup. You want earnings two to four weeks out, on a stock with a history of big reported moves, where IV has not inflated yet. Compare today's IV on the post-earnings expiration to where it peaked in past quarters. IV at 40 today on a name that habitually prints 75 on earnings day is a runway. IV already at 70 means the hype train left without you, and chasing it is just paying retail at the gate.",
        "Step two is buying the right contract. The expiration has to land after the earnings date, because that is the bucket the event premium pours into, and an option expiring before the print never inflates the same way. At-the-money or slightly out-of-the-money keeps your vega meaningful. Strangles and straddles work for a pure volatility bet, while single calls or puts work if you also carry a directional lean.",
        "Step three is the exit, and the exit is the whole play. You sell one to three days before the report, full stop. Hold past the print and the crush takes back everything the run-up paid you, plus interest, exactly like our episode three paper trade showed. Scalpers do not use their own tickets. Write the exit date down when you enter, set the alert, and treat it like a contract with yourself.",
        "Now the honest tape review, because this is not free money. Theta is the toll, since every day you hold costs you decay, and the IV climb has to outrun it, which is why entering too early on a sleepy name just bleeds you slowly. The stock can also drift against you, and on a single-option version a 6 percent drift down can swallow every point of vega gain. And here is the subtle one: sometimes the run-up is already baked in, with forward-looking IV math pricing tomorrow's hype into today's premium, so the climb you expected barely shows up.",
        "So grade the play honestly. It is a high-frequency, modest-edge trade, with lots of small wins when the cycle behaves, occasional small losses when it does not, and no exposure to the binary gap itself, because you are always flat at kickoff. That last part is really the point. In a season defined by coin flips, this play makes its money before the coin ever leaves the thumb."
      ],
      takeaway: "The run-up play buys post-earnings-expiration options two to four weeks early while IV is still cheap, then sells them one to three days before the print at peak hype. Theta, adverse drift, and pre-priced hype are the honest risks, but the gap itself never touches you because you are flat by kickoff.",
      caseStudies: [
        {
          title: "Nvidia, Summer 2023: Scalping the Hottest Ticket in the Market",
          kind: "real",
          setup: "After Nvidia's legendary May 2023 guide, its August report became the most anticipated print on the calendar. Weeks out, options expiring after the August date were already bid, but IV still had a long climb ahead as the date approached and the AI frenzy compounded daily.",
          thePlay: "The run-up crowd bought calls and strangles in early August and rode two engines at once, a grinding stock drift higher and a relentless IV climb into the print. Both vega and direction paid through the front half of the month for anyone who exited before the report.",
          outcome: "The print itself was a monster beat, and yet the stock finished only modestly higher the next day before fading over the following sessions, because the move came in around the line and the crush ate the premium. The run-up sellers had already banked the inflation, while the print holders paid for a blowout quarter and received a shrug.",
          lesson: "The same stock, the same month, and two completely different trades. The run-up paid handsomely while the hold-through paid almost nothing despite spectacular news. When expectations are the product, you sell them at the peak, which is the day before the game rather than the day after."
        },
        {
          title: "DRFT: Sam Runs the Play Perfectly and Still Loses",
          kind: "fictional",
          setup: "Sam found a textbook setup on Driftline, ticker DRFT, at 110: earnings 19 days out, post-print IV at 38 against a three-quarter average peak of 68. He bought 112 calls for 3.40, set a calendar alert to exit two days before the report, and felt like a pro.",
          thePlay: "The IV leg worked right on schedule, climbing to 65 by his exit date. But DRFT caught a sector downgrade in week two and drifted from 110 to 103. His calls were now 9 dollars out of the money, and all the vega in the world could not outrun seven points of adverse drift plus three weeks of theta.",
          outcome: "He honored his exit and sold at 1.70, exactly half his entry. The discipline was perfect, and the trade still lost 50 percent. Two days later the print sent DRFT to 96, and the same calls opened under 30 cents. The exit rule had turned a wipeout into a survivable loss.",
          lesson: "The run-up play takes the gap risk off your plate, but it leaves the ordinary market risk fully in place. Direction and theta can still beat your vega gains, so size it like a trade that loses sometimes, because it does. Sam's real win was the exit discipline that kept a bad trade from turning into a dead one."
        }
      ],
      quiz: [
        {
          id: "s5e5-q1",
          question: "For a run-up play on a company reporting March 20, which option expiration should you buy?",
          options: [
            "The March 14 expiration, because it is cheaper",
            "The longest-dated expiration available, two years out",
            "An expiration landing shortly after March 20",
            "Any expiration; they all capture the run-up equally"
          ],
          correctIndex: 2,
          explanation: "Event premium pours into the expirations that contain the event. The March 14 expiry never has to survive the gap, so its IV stays comparatively flat, and a two-year option barely notices one quarter's report. The contract just after the print is where the hype cycle lives, so that is the ticket you scalp."
        },
        {
          id: "s5e5-q2",
          question: "When does the run-up play exit, and why?",
          options: [
            "The morning after the report drops",
            "Whenever the position is up 100 percent",
            "At expiration, avoiding a second commission",
            "One to three days before the report"
          ],
          correctIndex: 3,
          explanation: "The asset you are trading is inflated uncertainty, and it is at its most valuable right before it evaporates. Selling one to three days pre-print captures the peak and keeps you flat through the binary gap. Holding for the move turns a volatility trade into a coin flip and hands the crush everything the run-up paid you."
        },
        {
          id: "s5e5-q3",
          question: "Which of these is a REAL risk of the run-up play, even when executed correctly?",
          options: [
            "Theta decay and adverse stock drift outrunning the vega gains",
            "IV crush hitting the position after the earnings report",
            "Early assignment forcing you to deliver shares on a long call",
            "The stock gapping overnight on the earnings report itself"
          ],
          correctIndex: 0,
          explanation: "Crush and the earnings gap cannot touch you, because the play exits before the print, and long options carry no assignment obligation. The honest risks are the grind: daily theta, the stock drifting against a directional version of the play, and term-structure math that sometimes pre-prices the hype so the expected IV climb never shows up."
        }
      ],
      paperTrade: {
        id: "s5e5-pt",
        title: "Three Ways to Play the Hype",
        ticker: "AXIM",
        spotPrice: 120,
        brief: "AXIM reports in 15 days. Options expiring the week after the print show IV at 38, and the last four quarters peaked at 68, 72, 65, and 70 on earnings day. The post-print 125 calls cost 3.10. Calls expiring the Friday BEFORE earnings cost just 1.40. Pick your play.",
        choices: [
          {
            label: "Buy two post-print 125 calls at 3.10 now, exit two days before the report.",
            result: "Over two weeks AXIM drifts to 123 and IV climbs from 38 to 66. Two days before the print you sell at 5.20. Vega and a friendly drift both paid, and you are flat for the coin flip.",
            pnl: 420
          },
          {
            label: "Buy the cheaper pre-print expiration calls at 1.40; same stock, lower cost.",
            result: "Those calls never contain the event, so their IV barely budges while theta grinds away daily. The stock's slow drift to 123 is not enough to help. They expire the Friday before earnings worth 0.45, and you never even got a hype cycle.",
            pnl: -190
          },
          {
            label: "Buy the post-print calls at 3.10 and hold through the report for maximum upside.",
            result: "The run-up marks your calls at 5.20, but you hold. AXIM beats and rises 3 percent to 127, and IV collapses from 66 to 35. The calls open at 2.40. The crush confiscated the run-up profit and dipped into your principal.",
            pnl: -140
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Choice one ran the play as designed: right expiration, cheap entry IV, disciplined pre-print exit, and it captured both the drift and the 28-point IV climb. Choice two chased a low price tag into the wrong bucket, since an expiration without the event gets the theta bill and none of the hype. Choice three proves the exit IS the play, the same entry as the winner but 560 dollars worse, all of it surrendered to the crush. The cheap option was not actually cheap, and the held winner was not held wisely."
      },
      scenario: {
        id: "s5e5-sc",
        title: "The Train Already Left",
        situation: "You find KYTE five days before earnings. The setup looked great a month ago, but you are late: post-print IV is already 71 against a typical earnings-day peak of about 75. A trading group you follow is loudly buying calls for the run-up, posting screenshots of last quarter's wins, and you feel the pull to hop on.",
        question: "What is the disciplined read?",
        options: [
          "Buy the calls; the play worked last quarter",
          "Pass on the run-up trade; the window has closed",
          "Buy double size to make up for the late entry",
          "Buy the calls but hold through the print instead"
        ],
        bestIndex: 1,
        coachNotes: "Option A is rearview-mirror trading. Last quarter's entry came at cheap IV, and that is the entire reason it worked. Option C doubles exposure right when edge is thinnest, which is backwards, because size should scale with edge, not with FOMO. Option D is the sneakiest trap, drifting from a dead volatility trade into an unplanned coin flip just because you wanted a position. Option B is the pro move. The run-up play is a bet on IV inflation that has not happened yet, and at 71 of 75 the inflation has already happened. Four points of runway cannot pay for five days of theta. Late to the gate means no trade, and the calendar prints a fresh setup every week."
      }
    },
    {
      id: "s5e6",
      seasonId: 5,
      number: 6,
      title: "Holding Through the Print",
      tagline: "When you bet the game itself",
      playOfTheWeek: "In April 2022, the options market priced Netflix's expected move at around 10 percent into the print. The company then announced its first subscriber loss in a decade, and the stock collapsed 35 percent the next day, more than triple the line. A trader holding a small put spread through that print made multiples on her risk, and not because she gambled, but because she had a specific thesis that the line was too small. That is the only reason to ever be on the field at kickoff.",
      gameFilm: [
        "Five episodes of telling you to be flat at kickoff, and now here comes the exception. Sometimes a trader holds through the print on purpose. This episode is about when that becomes a real trade instead of a lottery ticket, and the bar is higher than most people want to hear.",
        "Start with the brutal math. To win a long straddle through earnings, the stock has to move further than the expected move, because the crush resets every option to the actual outcome. The market is not dumb about this. Across most stocks and most quarters, the actual move averages a bit smaller than what the straddle priced. That gap has a name, the volatility risk premium, the markup sellers charge for insuring a coin flip. Buy every earnings straddle on the board all year and you slowly bleed out. The house edge is real.",
        "So holding through the print demands an answer to one question: why is the line wrong THIS time? Not a feeling, a reason. Maybe the company has missed badly twice and the market is anchored to old numbers. Maybe a competitor's report three days ago revealed something this stock's options have not absorbed yet. Maybe the average actual move over eight quarters is 9 percent while the line is priced at only 6. You need the market to be mispricing the event, and you need to be able to say the mispricing out loud.",
        "If you have the directional version of that edge, structure matters as much as the thesis. Debit spreads, where you buy one option and sell a further-out one, are the pro's vehicle through earnings, because the short leg gets crushed too, which finances part of your crush bill, and your max loss is locked before the gap. Naked long weeklies are the tourist vehicle, with maximum crush exposure, maximum theta, and a breakeven the move may never reach.",
        "If your edge says the move will beat the line in EITHER direction, the long straddle or strangle is the tool, and your scoreboard could not be simpler: actual move against expected move. The Netflix print in the cold open paid because 35 beat 10 by a mile. But remember the base rate. Most quarters the move lands inside the line, and the straddle loses by design. You are betting on the exception here, so it had better be an exceptional setup.",
        "And the sizing rule is non-negotiable, because the math forces it. Hold-through trades lose more often than they win, with the wins arriving in lumps, so any one print has to be survivable: one percent of the account at risk, maybe two with a defined-risk spread, never more. Win or lose, the result of a single print tells you nothing, while the quality of your thesis across twenty prints tells you everything. Bet the game itself rarely, structure it tight, and size it like the coin flip never stopped being a coin flip."
      ],
      takeaway: "Holding through the print is only a trade when you can spell out why the expected move is mispriced, because on average actual moves come in under the line and long premium bleeds. Use defined-risk structures, demand that the move beat the line, and size every print as survivable, one to two percent at most.",
      caseStudies: [
        {
          title: "Netflix, April 2022: The Night the Line Was Way Too Small",
          kind: "real",
          setup: "Netflix entered its April 2022 report already wounded, since the January print had cratered the stock about 22 percent on weak subscriber guidance. Options priced the April expected move around plus-or-minus 10 percent, hefty by normal standards. But the January warning meant the subscriber model itself was in question, and a model breaking is not a 10 percent event.",
          thePlay: "Traders who held puts or put spreads through the print were betting on a specific mispricing, that if subscribers actually shrank, the market would not reprice the stock by 10 percent, it would reprice the entire story. Netflix then reported its first subscriber LOSS in roughly a decade and guided to losing more.",
          outcome: "The stock collapsed about 35 percent the next day, more than triple the expected move, on its way to a fall of roughly 70 percent from the highs that year. Put holders made multiples on their premium even after the crush, because 35 percent of intrinsic value buries any vol collapse. Straddle buyers won huge too, since the direction almost did not matter at that magnitude.",
          lesson: "The hold-through pays when you correctly spot that the line measures a normal quarter while the setup in front of you is not normal. A broken narrative gaps far beyond what option math could extrapolate from past quarters, and that gap between story risk and priced risk is the whole edge."
        },
        {
          title: "QRNO: Jess Bets the Line, Not the Company",
          kind: "fictional",
          setup: "Jess tracked Quarrino, ticker QRNO, a 45 dollar logistics stock. Before earnings she pulled eight quarters of history: the stock's average earnings move was 9.5 percent, yet this quarter's straddle priced only plus-or-minus 6 percent, drowsy pricing she traced to a quiet market week. Her edge was not predicting the quarter, it was noticing the line looked two-thirds the size of the stock's own habit.",
          thePlay: "She bought one 45 straddle for 2.70, about 1 percent of her account, fully prepared to lose all of it. Her roommate Theo, hearing the idea secondhand, put a quarter of his account into naked weekly calls, certain the report would be good.",
          outcome: "QRNO missed on margins and fell 11 percent. Jess's straddle, bought for 2.70, was worth about 4.90 the next morning, since the move beat the line and paid her 80 percent on risked capital. Theo's calls went to zero, a quarter of his account gone on a thesis that was half right about the volatility and dead wrong about the direction.",
          lesson: "Same print, two very different bets. Jess bet that the line was too small and structured to win in either direction at a survivable size, while Theo bet a direction with reckless size. The hold-through is a bet on the line being wrong, and the structure and sizing are what separate a trade from a donation."
        }
      ],
      quiz: [
        {
          id: "s5e6-q1",
          question: "What must happen for a long straddle held through earnings to be profitable?",
          options: [
            "The stock must move in the direction of the call",
            "The company must beat the published analyst estimates",
            "The actual move must exceed the expected move",
            "Implied volatility must rise after the report"
          ],
          correctIndex: 2,
          explanation: "The straddle's cost IS the expected move, and the crush resets the position to roughly the actual outcome. You win when the move clears the line and you lose when it falls short, regardless of direction or whether estimates were beaten. IV rising after a report is the one thing on this list that essentially never happens, since resolution kills the uncertainty."
        },
        {
          id: "s5e6-q2",
          question: "What is the volatility risk premium in the context of earnings?",
          options: [
            "The extra commission brokers tack on for trades placed during earnings week",
            "Actual moves averaging a bit smaller than what the options priced",
            "The gap between a call's price and a put's price at the same strike",
            "The extra volatility a stock carries in the weeks after beating earnings"
          ],
          correctIndex: 1,
          explanation: "Sellers of earnings premium are insuring a coin flip, and like any insurer they charge a markup, so implied moves average a bit larger than realized moves across most names and quarters. That is why blindly buying every straddle bleeds money over time, and why a hold-through needs a specific reason THIS line is too small."
        },
        {
          id: "s5e6-q3",
          question: "Why do pros often prefer debit spreads over naked long options when holding a directional view through earnings?",
          options: [
            "Spreads are completely exempt from IV crush on both legs",
            "Spreads pay out double whenever the stock gaps past the long strike",
            "Brokers waive margin requirements on spreads during earnings",
            "The short leg absorbs crush too, and max loss is locked in advance"
          ],
          correctIndex: 3,
          explanation: "Nothing is exempt from the crush, but a spread puts it on both legs, since the option you sold loses inflated premium in your favor and subsidizes what your long leg loses. Add a max loss that is locked before the report and spreads turn a binary gap into a defined, survivable bet, which is exactly what the sizing rules demand."
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
            result: "Same print, same 11 percent drop, eight times the position, so you make 1,800 dollars. It feels like genius. It is the same coin flip at a size where the inevitable inside-the-line quarter takes 9 percent of your account in one night.",
            pnl: 1800
          },
          {
            label: "Sell an iron condor with short strikes at the 6 percent expected-move edges, betting the move stays inside the line.",
            result: "You collected premium betting against your own research. The 11 percent drop blows through the put side and the condor settles near max loss.",
            pnl: -380
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Yes, the eight-lot made more money tonight, and it is still the wrong play, because you judge the bet, not the outcome. Hold-throughs lose more often than they win even WITH an edge, and 9 percent of the account per print means a normal losing streak is ruin, while 1 percent means you get to run this edge fifty more times. The condor was the strangest choice of all, selling the very line your homework said was too small. When your research says the line is wrong, you bet with the research, at a size that survives being wrong anyway."
      },
      scenario: {
        id: "s5e6-sc",
        title: "Conviction Without a Mispricing",
        situation: "You love the company GLOW long-term: great product, growing market, and you have read every filing. Earnings are tonight, the expected move is plus-or-minus 7 percent, and its actual moves have averaged about 6 percent over the past two years. You feel a strong pull to buy calls and hold through, simply because the company is so excellent.",
        question: "What is the disciplined decision?",
        options: [
          "Skip the print and let game night pass without a position",
          "Buy weekly calls and hold through on conviction",
          "Buy a small straddle to avoid choosing a direction",
          "Buy a call debit spread, since spreads handle crush better"
        ],
        bestIndex: 0,
        coachNotes: "Option B is the most common confusion in earnings trading. Loving the company is a thesis about the next several years, while the print is a bet about one overnight gap against a line that already prices a normal quarter. Option C buys a straddle when history says moves average UNDER this line, which is a textbook negative-expectancy bet. Option D picks the right structure for a trade that should not exist, because good plumbing cannot fix a missing edge. Option A is the pro move. The hold-through question is never \"is this a good company\" but \"is this line mispriced,\" and 7 priced against 6 realized says it is priced about right, maybe even rich. You have a view on the company but no view on the line, so there is no mispricing here to bet. If you love GLOW, own the shares on your own timeline."
      }
    },
    {
      id: "s5e7",
      seasonId: 5,
      number: 7,
      title: "Post-Earnings Drift",
      tagline: "The game after the game",
      playOfTheWeek: "In February 2023, Meta gapped up about 23 percent on the \"year of efficiency\" report. The obvious feeling was that you had missed it. The traders who bought anyway, after the gap, with options suddenly cheap from the crush, watched the stock keep grinding higher for months as part of a run that roughly tripled it that year. Far from ending the move, that gap was really just the market announcing the move had begun.",
      gameFilm: [
        "The final score is posted, the stadium is empty, and most traders have gone home. Big mistake, because there is a whole second game that kicks off the morning after earnings, played at slower speed and with cheaper tickets. Welcome to post-earnings drift.",
        "The pattern has been documented for decades, and academics call it post-earnings announcement drift. A stock that delivers a big surprise tends to keep edging in that same direction for weeks afterward, so a blowout keeps grinding higher and a disaster keeps leaking lower. The market under-reacts to genuinely new information: analysts revise their models over days, big funds build positions over weeks, and the price keeps absorbing the news long after the headline. The gap is the headline, and the drift is the slow digestion of it.",
        "Your first job the morning after is sorting gap-and-go from fade. A gap-and-go is when the surprise was fundamental, a guidance raise or a new product line inflecting or a margin breakout, something that changes future earnings, and the stock holds above its opening price as the day unfolds. That strength after a gap up is institutions buying, not shorts covering. A fade is when the gap came from a one-time item, a tax quirk, a low-expectations relief pop, or the move blew far past what the news justifies, and the stock starts giving the gap back within hours. Price holding the open is the tell you can actually trade on.",
        "Now the options angle that makes this season-five material. The crush just put premium on clearance. The day before earnings, IV was 80 and calls cost a fortune, while the morning after, IV is 40 and the same dollar buys you twice the exposure. If the report changed the company's trajectory and you want to ride the drift, you are finally buying options at everyday prices, with the binary event already behind you. No gap risk, no crush hanging over your head, just a directional trade at honest premiums.",
        "The play, step by step: let the stock open and prove itself for at least the first hour, with no market orders into the opening chaos. If a gap up holds its opening range on a fundamental surprise, buy calls or call spreads with three to six weeks of runway, sized normally, because this is a regular-season trade again. If the gap starts filling fast on a flimsy surprise, the fade trade is shorts or puts targeting the gap fill, with a stop above the post-earnings high. Either way your risk is defined by the morning's range, a luxury the print itself never offers.",
        "Patience is the edge here, and it is the rarest one of all. Everyone else is anchored to yesterday's price, muttering that they missed it. The drift is the market slowly admitting the new number is real, and slow is good for you, with no overnight coin flip, normal IV, and visible levels. The playoffs have a postseason, and it is the calmest money of the whole season."
      ],
      takeaway: "Stocks digest big earnings surprises slowly, drifting in the direction of the surprise for weeks, and the morning-after tell is whether the gap holds its open. The crush has just discounted every option on the chain, so the drift trade buys direction at everyday prices with the binary risk already gone.",
      caseStudies: [
        {
          title: "Meta, February 2023: The Gap That Kept On Giving",
          kind: "real",
          setup: "A year after its historic 2022 collapse, Meta reported in February 2023 with expectations down in the basement. The \"year of efficiency\" report delivered: cost cuts, a massive buyback, and tighter discipline. The stock gapped up roughly 23 percent the next day, and the universal retail reaction was that the easy money had already gone.",
          thePlay: "The drift framework said otherwise. The surprise was fundamental, a structural change in spending and capital return rather than a one-time item. The stock held its gap and kept closing strong. Options, freshly crushed, were pricing a calm follow-through, so calls weeks out were suddenly cheap relative to the week before.",
          outcome: "Meta kept grinding higher for months, finishing 2023 roughly tripled from where it started the year. The post-gap buyers, who arrived AFTER the binary risk and AFTER the crush, caught one of the great drifts of the decade, while the missed-it crowd watched from the sidelines all spring.",
          lesson: "A gap on real fundamental change is often the start of the repricing, not the end of it. The market needed months to digest the efficiency story, and the calmest entry of the entire move turned out to be the morning after the loudest night."
        },
        {
          title: "SNCK: Rosa Fades the Panic",
          kind: "fictional",
          setup: "SnackHaus, ticker SNCK, gapped down 18 percent after earnings, from 50 to 41. Rosa read past the headline: the entire miss came from a one-time warehouse-fire writedown, while revenue grew, margins excluding the charge improved, and full-year guidance was RAISED. The market had priced a broken company, when the filing described a strong one having a bad insurance week.",
          thePlay: "She waited for the open, watched SNCK find a floor at 41 and reclaim 42.50 by late morning, then bought two-month 45 calls at a post-crush IV of 38, down from 85 the day before. Her stop was a close below the morning low, defined and close by.",
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
            "Stocks continuing to move in the direction of a big surprise",
            "The steady decline in option prices in the weeks after the report",
            "A stock always returning to its pre-earnings price within a month"
          ],
          correctIndex: 1,
          explanation: "Markets under-react to genuinely surprising earnings news. Analysts revise slowly and large funds build positions over weeks, so a stock that delivers a big surprise tends to keep drifting in that same direction long after the report. The market spends days and weeks digesting news the headline delivered in a second, and it is one of the oldest documented patterns in finance."
        },
        {
          id: "s5e7-q2",
          question: "A stock gaps up 12 percent on a guidance raise and is still trading ABOVE its opening price two hours into the session. What does the drift framework suggest?",
          options: [
            "Gap-and-go, with continued drift higher likely",
            "Short it immediately; all gaps fill eventually",
            "Buy puts since IV is cheap after the crush",
            "Wait for a pullback to the pre-earnings price"
          ],
          correctIndex: 0,
          explanation: "Both tells line up: the cause is fundamental, changing future earnings, and the price is holding above the open, which means real buyers are absorbing supply rather than fading the pop. That combination is the classic gap-and-go setup. \"All gaps fill\" is a slogan rather than a statistic, and it is most wrong precisely when guidance changes the company's trajectory."
        },
        {
          id: "s5e7-q3",
          question: "Why is the morning after earnings often an attractive time to BUY options?",
          options: [
            "Theta pauses for a few sessions after the report",
            "IV is at its highest, so options gain value the fastest",
            "The crush has reset IV to normal and the gap risk is gone",
            "Market makers are required to sell at a discount post-earnings"
          ],
          correctIndex: 2,
          explanation: "The day before the print you pay hype prices and carry coin-flip risk. The morning after, IV has collapsed to baseline and the event is history. If the report genuinely changed the company's path and you want the drift, you are finally paying everyday premium for a regular directional trade. Cheap is only good with a thesis behind it, but post-crush is when cheap actually means cheap."
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
            label: "Buy two six-week 75 calls at 2.30 with a stop at the morning low of 71.50.",
            result: "Classic gap-and-go: analysts hike targets all week and CRUX drifts to 79 over the next month. Your post-crush calls, bought at everyday IV, sell at 3.95.",
            pnl: 330
          },
          {
            label: "Buy puts to fade the gap; up 14 percent in a day is too far, too fast.",
            result: "You are fading a fundamental guidance raise that is holding its open, which is the exact opposite of a fade setup. CRUX grinds to 77 over two weeks and your puts wither.",
            pnl: -240
          },
          {
            label: "Wait for a pullback to fill half the gap, around 68.50, before buying anything.",
            result: "The pullback never comes, because strong drifts rarely offer the retest everyone is waiting for. CRUX walks to 79 while your limit order sits unfilled. No loss, but the framework gave you a defined entry this morning and you declined it.",
            pnl: 0
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Every gap-and-go signal was on the board: a fundamental cause, the gap holding its open, and freshly crushed IV making the calls cheap. Choice one took the trade with a defined stop at the morning low, regular-season risk management on a regular-season trade. The fade lost because it argued with a guidance raise, fading the price instead of the substance. The waiter lost nothing but learned the drift's cruelest habit, which is that the strongest moves are the ones that never let latecomers in comfortably."
      },
      scenario: {
        id: "s5e7-sc",
        title: "Two Gaps, One Choice",
        situation: "Two stocks gapped down 15 percent this morning after earnings. PLMB missed revenue, cut full-year guidance, and announced its CFO is leaving; it keeps sliding below its open all morning. KETL beat estimates and maintained guidance, but took a one-time currency charge that spooked the algorithms; by late morning it has reclaimed its opening price. You want to buy one dip.",
        question: "Which dip, if either, do you buy?",
        options: [
          "PLMB, the harder faller and the better bargain",
          "Both, splitting capital evenly to diversify",
          "Neither; gaps that size are untouchable for months",
          "Buy the KETL dip and leave PLMB alone for now"
        ],
        bestIndex: 3,
        coachNotes: "Option A is the classic bargain trap. PLMB is not cheap, it is repriced, and a guidance cut plus a CFO exit means the drift framework points DOWN for weeks, not up. Option B splits money between one good setup and one bad one, which is not diversification, it is dilution. Option C throws out a documented edge because of a blanket rule, when the size of a gap says nothing without its cause. Option D reads both tells correctly: KETL's gap contradicts intact fundamentals and its price is already stabilizing, which is the fade setup, while PLMB's gap is confirmed by deteriorating fundamentals and continued weakness, a falling knife with a reason to keep falling. Trade the disagreement, not the discount."
      }
    },
    {
      id: "s5e8",
      seasonId: 5,
      number: 8,
      title: "Beats, Misses, and Whisper Numbers",
      tagline: "The scoreboard lies if you read the wrong line",
      playOfTheWeek: "In July 2023, Tesla posted a quarter that beat Wall Street on both revenue and earnings, the kind of headline that should print green. The stock dropped almost 10 percent the next day. Margins were compressing, the call hinted at more price cuts, and the real expectations, the ones never printed in any analyst survey, were higher than the official ones. The team won on paper and lost on the field.",
      gameFilm: [
        "Rookie traders think earnings is a simple scoreboard: beat the estimate and the stock goes up, miss it and the stock goes down. Then they watch a company beat on every line and gap down 10 percent, and the whole model collapses. Time to learn how the scoreboard actually works.",
        "Start with what a beat even means. The consensus estimate is the published average of analyst forecasts, and companies play that game well: they guide analysts toward beatable numbers, which is why the majority of companies beat consensus every single quarter. A beat is the expected outcome, the price of admission. Nobody pays you for clearing a bar that was set down on the ground.",
        "Enter the whisper number, the unofficial expectation the market actually trades on. When a stock has rallied 40 percent into the print and every fund is crowded long, the real bar climbs above the printed estimate to whatever blowout everyone privately requires to justify the run. Beat consensus by 2 percent when the whisper demanded 10, and the stock sells off, because what unwinds is the positioning rather than any reaction to the printed number. The reaction reveals the whisper after the fact, every single time.",
        "Now the bigger force, which is guidance. The quarter being reported is already dead, three months of history the market has spent thirteen weeks guessing at. Stock prices are claims on FUTURE earnings, so the forecast paragraph outweighs the results table almost every time. A miss with raised guidance often rips higher, and a beat with a guidance cut almost always gets sold. The market does not pay you for the quarter you finished. It reprices the quarters you have not played yet.",
        "And the game is not over when the press release drops. The earnings call, thirty to sixty minutes later, moves stocks all by itself: margin color, demand commentary, one cautious sentence from a CFO in the question-and-answer round. A stock can be up 5 percent on the release and close the after-hours session red over a single phrase about \"softening demand trends.\" Trade the headline pop in the first minute and you are trading half a report.",
        "Put the reading order together like a pro. Guidance first, because the future is the product. Margins and the quality of the beat second, because revenue bought with discounts is not strength. The whisper context third: how had the stock run in, how crowded was the trade, what did positioning demand? The printed beat or miss reads LAST, because it is the line on the scoreboard everyone already expected. Read in that order and a stock falling on \"good\" earnings stops being a mystery. It turns into the most predictable surprise in the market."
      ],
      takeaway: "Companies are graded against whisper numbers and positioning, not the published consensus, and the guidance paragraph outweighs the results table because stocks price the future. Read guidance, margins, and the expectations context before the headline beat, and falling-on-good-news stops being a mystery.",
      caseStudies: [
        {
          title: "Tesla, July 2023: Beat the Sheet, Lose the Game",
          kind: "real",
          setup: "Tesla rolled into its July 2023 report on a monster run, with the stock up well over 100 percent on the year. The printed expectations were beatable, but the whisper was demanding proof that the aggressive price cuts were not eating the company alive. Everyone was watching one thing: margins.",
          thePlay: "Tesla beat consensus on revenue and earnings per share, with the headline scoreboard fully green. But automotive margins came in compressed from the price cuts, and on the call the company signaled the cutting was not over. The dead quarter was fine, while the forward picture was cloudier.",
          outcome: "The stock fell almost 10 percent the next day despite the beat. After a 100-percent-plus run, in-line-but-margin-light did not clear the whisper bar, and the crowded long positioning unwound through the exit all at once.",
          lesson: "After a huge run-up, the whisper number is the real opponent, and margins plus forward commentary are how it keeps score. A headline beat is the admission ticket rather than the victory, and the bigger the rally into the print, the higher the invisible bar climbs."
        },
        {
          title: "FZZL: Marcus Trades the Headline and Eats the Guidance",
          kind: "fictional",
          setup: "Marcus liked Fizzle Beverages, ticker FZZL, at 80 dollars into earnings. His thesis was one line: \"they have beaten estimates nine quarters straight.\" He bought weekly calls that afternoon and set a price alert for the 4:05 PM release.",
          thePlay: "The headline hit: FZZL beats earnings per share by a penny and beats revenue slightly. The stock blipped up 2 percent in the first minutes of after-hours and Marcus screenshotted his gains. Then the guidance paragraph loaded: next-quarter revenue forecast 8 percent below consensus, citing slowing demand. On the call, the CFO confirmed inventory was building at retailers.",
          outcome: "FZZL reversed in after-hours and opened the next morning at 68, down 15 percent. The tenth consecutive beat was sitting right there in the press release, and it was worth nothing against a guidance cut. Marcus's calls opened at pennies.",
          lesson: "A beat streak is a record of cleared low bars, not a forecast. The market repriced FZZL on the quarter ahead, not the quarter behind, and the after-hours head-fake punished anyone who traded the headline before reading the forecast. Guidance is the headline, and everything else is just the box score."
        }
      ],
      quiz: [
        {
          id: "s5e8-q1",
          question: "A company beats consensus estimates on revenue and earnings, yet the stock falls 8 percent the next day. Which is the LEAST likely explanation?",
          options: [
            "Guidance for next quarter came in below expectations",
            "The whisper number was above the printed consensus",
            "The market simply did not notice the beat",
            "Management made cautious comments on the earnings call"
          ],
          correctIndex: 2,
          explanation: "Markets do not miss headline numbers, since algorithms parse them in milliseconds. Stocks fall on beats because the real bar was higher than the printed one: soft guidance, a demanding whisper after a rally, or cautious call commentary. When price and headline disagree, the price is responding to information beyond the headline, not failing to see it."
        },
        {
          id: "s5e8-q2",
          question: "What is a whisper number?",
          options: [
            "The estimate companies privately send to regulators",
            "The lowest analyst estimate published on the street",
            "A rumor that the earnings release date is about to change",
            "The unofficial expectation the market actually trades on"
          ],
          correctIndex: 3,
          explanation: "Consensus is the published average of analyst forecasts, a number companies actively manage toward beatable. The whisper is what the marginal buyer truly requires, often above the printed consensus, set by the run-in and how crowded the trade is. Nobody prints it anywhere, and the stock's reaction to the report is how the whisper reveals itself."
        },
        {
          id: "s5e8-q3",
          question: "Why does guidance usually move a stock more than the reported quarter itself?",
          options: [
            "Guidance is legally binding on management while results are not",
            "Stock prices are claims on future earnings, not past quarters",
            "Reported results are too unreliable for the market to price",
            "Analysts are not allowed to publish models of past quarters"
          ],
          correctIndex: 1,
          explanation: "By release day, the reported quarter is a dead game, thirteen weeks old and largely triangulated by the market already. The forecast is the genuinely new information about the cash flows a stock actually represents. That is why a miss with raised guidance can rally and a beat with a cut almost always sells off, because what the market reprices is the road ahead and not the road behind."
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
            label: "Skip the print, then trade the confirmed direction tomorrow with a defined-risk spread if a drift setup appears.",
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
        debrief: "The puts made money tonight, and the skip-then-react play is still the better trade, because the puts needed a 7 percent move against a 6 percent line and got it by a whisker. Run that bet twenty times and the crush wins most of them. The calls were the true error, since a beat streak is not an edge when the whisper sets the bar, and you admitted you had no read on the quarter. Choice two never touched the coin flip, then traded the revealed direction at crushed premiums with the whole drift week ahead of it. When the crowd is sure, the line is demanding, and you know nothing extra, let the report speak first."
      },
      scenario: {
        id: "s5e8-sc",
        title: "Green at 4:05, Decision at 4:06",
        situation: "You hold calls on PRSM through earnings, against this season's advice, and at 4:05 PM the headline flashes: earnings per share and revenue both beat. The stock jumps 4 percent in after-hours and your calls would sell right now for a solid profit. The guidance details have not crossed the wire yet, and the earnings call starts in 25 minutes.",
        question: "What do you do at 4:06 PM?",
        options: [
          "Hold everything through the call; the beat proves the quarter was great",
          "Sell into the headline pop, or at minimum take most of the position off",
          "Buy more calls in after-hours to press the winning trade",
          "Place a stop-loss order in after-hours and let it protect you through the call"
        ],
        bestIndex: 1,
        coachNotes: "Option A mistakes the box score for the final whistle. The guidance paragraph and the CFO's tone are still unplayed, and beats regularly reverse into red on one forecast line. Option C doubles your exposure into the half of the report that moves stocks most, at after-hours spreads no less. Option D leans on a tool that barely works after dark: after-hours liquidity is thin, stops can fill terribly or not at all, and a headline-to-guidance reversal can gap right past one. Option B is the pro move. An after-hours pop on a headline beat is an offered price for a bet that is not yet resolved, guidance and the call are still unpriced coin flips, and taking the bid converts luck into banked profit before the riskiest 30 minutes of the night. The release is half the report, so never forget which half moves the stock."
      }
    },
    {
      id: "s5e9",
      seasonId: 5,
      number: 9,
      title: "Game-Planning the Week",
      tagline: "Champions are built on Sunday night",
      playOfTheWeek: "In the first week of February 2022, three giants reported on three consecutive nights: Alphabet ripped 7 percent on a blowout, Meta imploded 26 percent the next day, and Amazon, sold off hard in sympathy with Meta, ripped back 13 percent the day after. Traders winging it night by night got whipsawed into dust. Traders who had planned the week, with a separate thesis and separate sizing for each print, treated it as three different games, because that is exactly what it was.",
      gameFilm: [
        "Pros do not wake up and ask what reports tonight. They build the week's slate on Sunday, the way a coaching staff builds a game plan before the team ever takes the field. Earnings season serves up dozens of prints a week, and your edge starts with choosing which three you will actually play and which thirty you will only watch.",
        "Start with the calendar, your season schedule. Every reporting company has a date and a time slot, either BMO for before market open or AMC for after market close. The slot sets your clock. An AMC report means positioning decisions by that afternoon's close and the reaction at the next open, while a BMO report means everything has to be set the evening before. Mark each name you care about with its slot, because being a day late on a BMO print leaves you holding a position you never intended to carry through a gap.",
        "Next, post the lines. For every name on your list, pull the expected move from the straddle, thirty seconds each, the episode-two drill. Now the slate has prices on it: this one is priced at plus-or-minus 5, that one at 12. The lines show you where the market sees a routine quarter and where it is braced for a brawl, and your week's opportunities live wherever your homework disagrees with a number.",
        "Then respect the schedule within the schedule, which is correlation. When one chipmaker reports, every chip stock moves on the readthrough, banks set the tone for banks, and one retailer's inventory warning marks down the whole mall. Two earnings bets in the same sector is often one bet wearing two jerseys, sized double without you noticing. And mind the order of play: if your name's biggest rival reports two days earlier, that print is fresh information for YOUR print, so plan to re-underwrite your thesis after it rather than sleepwalk through it.",
        "Now build the actual slate, and build it small, two or three A-setups and no more. For each one, write the play before the week starts: which strategy from this season, the run-up, the hold-through with edge, the post-print drift, plus the entry, the exit date, and the size. Everything else on the calendar gets labeled watch-only, and watch-only means watch only. The plan exists precisely so that Wednesday-night adrenaline does not get a vote.",
        "Last, journal the week like game film. After each print, ask what the line was, what the actual move was, whether your thesis survived contact, and whether you followed your own plan. Two seasons of that log and you will know which plays are YOUR plays, the ones your process actually wins at. The traders who survive earnings season are not the ones with the hottest takes. They are the ones whose Sunday plan was still running the show on Friday."
      ],
      takeaway: "Build the week on Sunday: a calendar with BMO and AMC slots, expected moves posted for every name, correlations mapped, and a slate of two or three planned plays with entries, exits, and sizes written down. The plan exists so mid-week adrenaline never gets a vote, and the journal turns every week into game film.",
      caseStudies: [
        {
          title: "February 2022: Three Nights That Broke the Sympathy Trade",
          kind: "real",
          setup: "In the first week of February 2022, the calendar stacked three mega-cap prints on consecutive nights: Alphabet, then Meta, then Amazon. The names were correlated enough that each report would move the others, and every trader on earth knew the schedule.",
          thePlay: "Alphabet blew out and jumped about 7 percent, lifting the whole group's mood. The next night Meta posted its disaster and cratered 26 percent, and the readthrough logic took over: traders dumped Amazon ahead of its print, assuming the sector story was breaking. Then Amazon reported strong results and gapped UP around 13 percent.",
          outcome: "The sympathy traders got whipsawed twice in 48 hours: they extrapolated Alphabet's strength into Meta and got crushed, then extrapolated Meta's weakness into Amazon and missed a 13 percent rip. Each company's print turned on company-specific drivers that a one-story-fits-all week refused to see.",
          lesson: "Correlation is real, but it is a clue rather than a verdict. Readthroughs tell you to RE-EXAMINE your thesis on the next name, not to auto-copy the last gap. A planned week treats each print as its own game with its own line, which is exactly what that brutal week rewarded."
        },
        {
          title: "BLTZ: Dana's Boring Sunday Beats a Wild Week",
          kind: "fictional",
          setup: "Dana traded a 30,000 dollar account through the heaviest week of earnings season. Sunday night she listed 14 reporting names, marked slots and expected moves, and cut the slate to two A-setups: a run-up play on Blitzline, ticker BLTZ, reporting Thursday AMC with IV at 41 against a typical peak of 70, and a possible drift trade on whatever Monday's retailer print revealed. Everything else went on the watch-only list, including her old favorite VYBE.",
          thePlay: "Tuesday, VYBE ripped 9 percent on a competitor's blowout and her group chat lit up with FOMO. The plan said watch-only, so she watched. She entered BLTZ calls Tuesday at IV 44, sold them Thursday afternoon at IV 67 for a 60 percent gain, and passed on the Monday drift when the gap failed to hold its open, exactly as her checklist required.",
          outcome: "One trade taken, one trade correctly skipped, one FOMO impulse declined, and the week finished up about 4 percent with two nights of actual risk. VYBE, the chase she skipped, gave back its entire sympathy pop before Friday when its own print landed in-line.",
          lesson: "The slate is a promise you make to yourself on Sunday while you are calm, so that Wednesday's adrenaline has to negotiate with a document instead of a feeling. Dana's edge was never about picking winners. It was that every decision all week had already been made."
        }
      ],
      quiz: [
        {
          id: "s5e9-q1",
          question: "A company on your slate reports BMO on Wednesday. When must your positioning decisions be final?",
          options: [
            "By Wednesday's closing bell",
            "Anytime before 11 AM Wednesday",
            "The slot makes no practical difference",
            "By the close of trading on Tuesday"
          ],
          correctIndex: 3,
          explanation: "Before market open means the news drops while you cannot trade, and the stock gaps at Wednesday's opening bell. Whatever you hold at Tuesday's close is your position through the event, ready or not. Mixing up BMO and AMC is how traders end up holding a coin flip they never meant to bet, which is why the slot goes on the calendar right next to the name."
        },
        {
          id: "s5e9-q2",
          question: "Your slate has bullish earnings bets on two semiconductor companies reporting the same week. What is the planning concern?",
          options: [
            "The two bets are correlated, closer to one doubled sector bet",
            "Semiconductors are not allowed to report in the same week",
            "Nothing; two separate trades always mean diversification",
            "The second company's options stop trading once the first reports"
          ],
          correctIndex: 0,
          explanation: "Sector peers move on each other's reports through readthrough, so one chipmaker's demand warning marks down the whole group. Two same-direction bets in one sector concentrate risk while feeling like diversification, so a pro either sizes the pair as one position or drops the weaker setup. And whichever reports first is fresh information for the second thesis, scheduled in advance."
        },
        {
          id: "s5e9-q3",
          question: "Why does the weekly plan limit the slate to two or three setups when dozens of companies report?",
          options: [
            "Most brokers cap earnings trades at three per account per week",
            "Depth of preparation is the edge, and sizing stays survivable",
            "More than three positions is illegal in a margin account",
            "Expected moves can only be computed for three stocks at a time"
          ],
          correctIndex: 1,
          explanation: "Each earnings bet is a binary event demanding real homework: the line, the whisper context, the correlation map, the exit plan. Spread that work across ten prints and it gets shallow while the sizing gets dangerous, since binaries can all land wrong in the same week. A short slate also keeps decisions pre-made instead of adrenaline-driven. The watch-only list is not wasted research, it is how next week's A-setups get found."
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
            label: "Re-underwrite tonight: treat TOPA's miss as new information and exit at Wednesday's open.",
            result: "You sell at the open before the sympathy slide deepens, salvaging most of the position's remaining value. MGNA later reports its own soft quarter, validating the readthrough. The plan said the rival's print was a checkpoint, and the checkpoint said get out.",
            pnl: -90
          },
          {
            label: "Buy more calls; MGNA is oversold on TOPA's problems, and the discount improves your average price.",
            result: "You average down into a deteriorating thesis. MGNA drifts lower Wednesday and your enlarged position exits at the planned time for a much deeper loss. That discount was the market handing down a verdict, and you mistook it for a clearance sale.",
            pnl: -700
          }
        ],
        bestChoiceIndex: 1,
        debrief: "A game plan is a decision framework, not a suicide pact. The Sunday plan should have flagged TOPA's Tuesday print as a checkpoint for the MGNA thesis, and a direct rival missing on the exact demand driver you were betting on is that checkpoint failing. Choice one followed the calendar while ignoring the thesis, and choice three fought new information with more money. Choice two is what re-underwriting actually means: same discipline, updated inputs, smallest loss. Plans bind your impulses, not your eyes."
      },
      scenario: {
        id: "s5e9-sc",
        title: "Wednesday Night Lights",
        situation: "It is Wednesday of a packed earnings week. Your Sunday slate had two plays; one is finished at a small profit, the other triggers tomorrow. Tonight, a stock you never researched, JOLT, is suddenly everywhere: up 11 percent ahead of its AMC report, trending on every platform, with screenshots of overnight riches flooding your feed. The report drops in 90 minutes and weekly calls are bid at IV 130.",
        question: "What do you do with JOLT?",
        options: [
          "Take a small calls position and ride the momentum",
          "Buy puts, betting the hype reverses after the print",
          "Nothing; leave JOLT off the slate entirely",
          "Sell naked strangles to the hype crowd at IV 130"
        ],
        bestIndex: 2,
        coachNotes: "Option A is buying the most expensive options of the quarter, at IV 130, on a stock you never studied, with the print 90 minutes out, the worst entry of the entire hype cycle, fueled by other people's screenshots. Option B is the same unresearched coin flip with the sign flipped, and contrarian without homework is still gambling. Option D at least understands that IV 130 is rich, but naked strangles on an unknown, hype-soaked name is unlimited risk on exactly the kind of stock that triples its line. Option C is the championship answer. You have no thesis and no line work, and 90 minutes of research is not preparation for a binary event. The Sunday plan already allocated this week's risk to researched setups, and JOLT failing every filter is the system working, not an opportunity missed. There is a new calendar next week. There always is."
      }
    },
    {
      id: "s5e10",
      seasonId: 5,
      number: 10,
      title: "The Earnings Playbook",
      tagline: "One system, every print",
      playOfTheWeek: "In July 2022, Snap reported a brutal quarter and the stock dropped 39 percent overnight, the kind of print that vaporized oversized longs and naked put sellers alike. The traders who survived it were not the ones who saw it coming, since almost nobody did. They were the ones whose sizing rules assumed any single print could do exactly this, because eventually one always does.",
      gameFilm: [
        "Season finale. You have all the pieces now: the line, the run-up, the crush, the hold-through math, the drift, the whisper, the weekly plan. Tonight we bolt them into one playbook, a decision system that tells you which play fits which setup, so that no earnings situation ever finds you improvising again.",
        "The playbook reads every setup through three questions, in order. One: where is IV in its cycle, cheap and pre-hype, peaked into the print, or freshly crushed? Two: what does my homework say against the line, do I expect the move bigger, smaller, or do I have no view at all? Three: where are we on the clock, weeks out, the night of, or the morning after? Those three answers point you to exactly one section of the playbook, every time.",
        "Weeks out plus cheap IV is run-up territory, the episode-five play: buy the post-print expiration, ride the inflation, and exit one to three days before the report, no exceptions. The night of the print, you need a stated mispricing to play at all. If homework says the line is too small, run the episode-six hold-through with a straddle or a debit spread at survivable size. If homework says the line is too rich, the short-premium version with iron condors, defined-risk wings always, collects the same crush that destroys buyers, though it eats the Snap-style tail when the wings are not there. The morning after belongs to episode seven: a confirmed gap-and-go or a fundamentals-versus-gap disagreement, traded at post-crush prices like a regular-season position.",
        "And question two has a fourth answer that beats them all: no view means no trade. Skipping a print is itself a position, the one with the best risk-reward on the board when you have no edge. The playbook's most-used page should be the one that says pass.",
        "Now the chapter that keeps the lights on, which is sizing for binary risk. Hold-through trades risk one percent of the account, two at the absolute most with defined-risk spreads, sized by max loss rather than by feel. Run-up and drift plays carry regular trade sizing since the gap never touches them, but correlated prints in the same week share one risk budget, the episode-nine rule. The Snap print in the cold open is the design constraint: build every week so that a minus-39-percent shocker on your biggest position is an annoying Tuesday instead of an ending.",
        "Last play of the season: judge the process, not the print. Any single earnings trade is a coin flip wearing your homework, while twenty trades is a verdict on the homework itself. Journal every one against this playbook, and grade yourself on plan-following, sizing, and whether the edge you claimed was real. The traders still standing after ten earnings seasons are not the ones who called the most gaps. They are the ones whose worst night was always survivable, and whose system got a little sharper with every print. That is the whole game. See you in the playoffs."
      ],
      takeaway: "Three questions route every setup to its play: where is IV in its cycle, what is your view against the line, and where are you on the clock, and no view means the pass page. Size every hold-through so a 39 percent shocker is survivable, and grade your process across twenty prints rather than on any one.",
      caseStudies: [
        {
          title: "Snap, July 2022: The Print That Audited Everyone's Sizing",
          kind: "real",
          setup: "Snap had already warned intra-quarter in May 2022, cratering more than 40 percent in a day, so traders knew the name was dangerous. By the July report, plenty figured the bad news was priced in: the stock was down massively on the year, and selling puts for fat premium looked like getting paid to catch a bottom.",
          thePlay: "The July report was worse than feared: weak revenue, no forward guidance, advertising demand deteriorating. The stock dropped roughly 39 percent the next day, one of the most violent post-earnings moves of the era, on a name everyone already considered beaten down.",
          outcome: "Naked put sellers were carried off the field, with premium collected over weeks erased many times over in one gap. Oversized longs had no exit, since the entire move happened overnight. Traders running playbook sizing, defined-risk structures and one-to-two percent exposure, took a paper cut and traded again Monday.",
          lesson: "Already down a lot is not a floor, and priced in is a guess rather than a guarantee. The playbook sizes every print so the once-a-season monster gap is survivable, because the monster never sends a calendar invite."
        },
        {
          title: "ZAPR and the Season of Boring Wins",
          kind: "fictional",
          setup: "Tomas committed one full earnings season to the playbook, journaling every trade in a spreadsheet. His season included Zapper Tech, ticker ZAPR, plus eleven other prints across three months, with a 20,000 dollar account and a hard one-percent rule on every hold-through.",
          thePlay: "The log told the story: four run-up plays, three winners and one loser when the hype was pre-priced. Two hold-throughs, both with a written mispricing thesis, with one straddle winning big when ZAPR tripled its line and one debit spread dying quietly. Three post-print drift trades, two winners. And fourteen prints passed entirely, each with a one-line reason, usually no view against the line.",
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
            "Sell naked strangles to collect the coming inflation",
            "The run-up play: buy post-print premium, exit before the print",
            "The drift play: wait and buy calls the morning after the report"
          ],
          correctIndex: 2,
          explanation: "Walk the three questions: IV is cheap and pre-hype, you have no view against the line, and the clock says weeks out. That routes straight to the run-up page, exiting one to three days before the report, and the page needs no directional or line edge, just room for the predictable inflation. The hold-through requires a stated mispricing you do not have, and the drift page does not open until the morning after."
        },
        {
          id: "s5e10-q2",
          question: "Why does the playbook demand defined-risk structures, like iron condors instead of naked strangles, when selling rich earnings premium?",
          options: [
            "Defined-risk structures always collect more premium than naked ones do",
            "A Snap-style gap can turn undefined risk into account-ending loss",
            "Naked short options are prohibited during earnings week",
            "Iron condors profit whether or not the stock ends up moving"
          ],
          correctIndex: 1,
          explanation: "Selling the line wins whenever the move stays inside it, which is most quarters, and that steady win rate seduces traders into naked size. Then one print triples its line, minus 35 or 39 percent, and undefined risk gives back years of premium in a single night. The wings cost a little expected profit and buy the only thing that matters, a known and survivable max loss."
        },
        {
          id: "s5e10-q3",
          question: "Your researched hold-through thesis was sound, but the stock landed inside the line and you took a full loss at one percent of the account. How does the playbook grade this trade?",
          options: [
            "A failure, because the trade lost money",
            "Proof that hold-throughs should be dropped",
            "A good trade, graded full marks on process",
            "A signal to double size next time to win it back"
          ],
          correctIndex: 2,
          explanation: "Binary events make good bets lose constantly, since that is what binary means. The grade covers what you controlled: a written mispricing, defined risk, one percent sized, plan followed, full marks. Verdicts on the edge itself come from the journal across twenty prints, and doubling size to chase a loss is how the market collects tuition twice."
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
            label: "Run-up play: buy post-print 58 strangles at IV 33, exit two days before the report.",
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
        debrief: "Question one: IV cheap and pre-hype. Question two: no view against the line. Question three: weeks out. That routes to exactly one page, the run-up, and choice one ran it cleanly, in at 33, out at 54, flat at kickoff. Choice two drifted from a volatility trade into an edge-free coin flip, the exact blur the playbook exists to prevent. Choice three sold premium when IV was CHEAP, the wrong half of the cycle, with naked risk on top. The system answered in thirty seconds, and only discipline was being tested."
      },
      scenario: {
        id: "s5e10-sc",
        title: "The Whole Season in One Night",
        situation: "Earnings season finale. Your journal says you are up 6 percent over three months running the playbook: eleven trades, sixteen passes, nothing oversized. Tonight the quarter's loudest name, VRTX-adjacent highflier NOVA, reports AMC. Your homework genuinely suggests the line is a touch too small, maybe 8 priced against 10 likely. A voice says you have earned a victory lap, that ten percent of the account on straddles would turn a good season into a legendary one.",
        question: "How do you finish the season?",
        options: [
          "Take the victory lap: ten percent of the account on straddles",
          "Skip it entirely; never trade the loudest name on the calendar",
          "Put five percent on, splitting discipline and conviction",
          "Run the playbook unchanged: one to two percent, defined risk"
        ],
        bestIndex: 3,
        coachNotes: "Option A is how winning seasons end in the loss column. The edge may be real, but 8-versus-10 is a thin mispricing, and ten percent of the account on one binary print means a single inside-the-line outcome erases months of process. Option C is the seductive compromise, but splitting the difference with discipline is just indiscipline at half price, and the sizing rule was built for exactly this moment of confidence. Option B overcorrects, refusing a researched, qualified edge because the name is popular, when loud is not a disqualifier and sizing already handles loud. Option D is the championship answer and the whole season in one line: the edge qualifies for a hold-through, and the playbook already has a page for it, the same one to two percent, the same defined-risk structure, the same journal entry afterward. Edges scale a season. They do not scale a single night."
      }
    }
  ]
};

export default season5;
