import type { Season } from "../../lib/types";

const season4: Season = {
  id: 4,
  title: "Sizing and Risk",
  subtitle: "Defense Wins Championships",
  description: "Season 4 is the defensive coordinator's season. Anyone can call plays when the offense is rolling -- this is the ten-episode playbook for surviving when it is not: sizing every bet so no single loss can end your season, knowing your worst case before kickoff, punting broken trades fast, pressing winners, and writing the personal risk rules that keep you on the field. Picks get the highlights. Defense gets the rings.",
  episodes: [
    {
      id: "s4e1",
      seasonId: 4,
      number: 1,
      title: "Why Sizing Beats Stock Picking",
      tagline: "Pick wrong, survive. Size wrong, season over.",
      playOfTheWeek: "January 2021. A retail trader runs $30,000 into $175,000 over six straight winning trades on tech calls. Then he puts the entire stack into one Fed-week bet and watches it expire worthless in an afternoon. Six wins, one loss, account gone -- the picks were never the problem. The size was.",
      gameFilm: [
        "Everybody wants to talk about picks. Which ticker, which strike, which expiry. But go watch the film on any blown-up account and you will find the same thing every time: the trader was not wrong more often than you. He was just bigger when he was wrong. Sizing is the whole game, and almost nobody practices it.",
        "Here is the brutal math of the hole. Lose 10% and you need 11% to get back to even. Lose 25% and you need 33%. Lose 50% and you need 100% -- a clean double just to touch where you started. Lose 90% and you need 900%. The hole gets deeper faster than the ladder gets longer. That is not motivation-poster talk. That is arithmetic.",
        "Now run the losing streak drill. Risk 2% of your account per play and take ten straight losses -- a nightmare streak -- and you are down about 18%. Painful, recoverable, still in the game. Risk 10% per play and that same streak leaves you down about 65%. Now you need roughly a triple just to get back to even. Same picks, same streak. One trader is bruised. The other is on injured reserve.",
        "And do not let a hot win rate fool you. Even a trader who wins 60% of the time will run into losing streaks -- three, four, five in a row -- across a season of trades. Streaks are not bad luck. They are a statistical certainty over enough plays. Your sizing has to assume the streak is coming, because it is.",
        "Options make all of this sharper. A stock pick that goes against you loses some of your money. An option that goes against you can go to zero -- 100% of the premium, gone at the buzzer. When the downside on any single play is total, position size is not one part of your defense. It is the entire defensive playbook.",
        "So flip your priorities. Spend half the energy on what to buy and twice the energy on how much. The pros you admire are not better stock pickers than the talented amateurs who flamed out. They are better survivors. Defense wins championships, and in this league, defense means size."
      ],
      takeaway: "Your bet size decides whether a wrong pick is a fumble or a season-ending injury. The math of drawdowns is merciless -- a 50% hole takes a 100% climb. Size every play so the losing streak that is definitely coming cannot take you out of the game.",
      caseStudies: [
        {
          title: "LTCM: The Smartest Guys in the Stadium",
          kind: "real",
          setup: "Long-Term Capital Management, 1998. A hedge fund stacked with PhDs and two Nobel Prize winners, running convergence strategies that won small and won often. The models were brilliant. The leverage was roughly 25-to-1 -- and on some measures far higher.",
          thePlay: "LTCM bet enormous size on bond spreads converging, treating low-probability losses as near-impossible. When Russia defaulted in August 1998, every can't-happen move happened at once, and the fund had no room left to absorb the hit.",
          outcome: "Roughly $4.6 billion in losses in a matter of months. The Federal Reserve had to organize a rescue by a consortium of major banks just to keep the collapse from spreading through the whole financial system.",
          lesson: "The best picks on Earth cannot save you from fatal size. LTCM's win rate was elite -- and irrelevant. When you bet big enough, one bad streak ends the franchise."
        },
        {
          title: "Marcus and the $BLTZ Blowout",
          kind: "fictional",
          setup: "Marcus turned $8,000 into $21,000 in two months trading earnings calls, going bigger each time because he was on a heater. His last four plays were each more than half his account, and every win confirmed the habit.",
          thePlay: "He put $18,000 -- nearly everything -- into weekly calls on $BLTZ, a hyped robotics name, the day before earnings. Solid story, decent setup, catastrophic size.",
          outcome: "$BLTZ beat earnings but guided soft. The stock dropped 9%, the calls opened nearly worthless, and the account went from $21,000 to under $3,000 overnight.",
          lesson: "Marcus was actually a decent picker -- he won most of his trades. But one full-stack loss erased ten smart wins. Size decides who keeps the points on the scoreboard."
        }
      ],
      quiz: [
        {
          id: "s4e1-q1",
          question: "Your account takes a 50% drawdown. What gain do you now need just to get back to even?",
          options: ["50%", "75%", "100%", "150%"],
          correctIndex: 2,
          explanation: "Losses and gains are not symmetrical. If $10,000 becomes $5,000, that $5,000 has to double -- a 100% gain -- just to return to $10,000. This is why deep drawdowns are so dangerous: the hole grows faster than your ability to climb out of it."
        },
        {
          id: "s4e1-q2",
          question: "Two traders have identical 55% win rates. Trader A risks 2% per play, Trader B risks 15% per play. Over a long season, what is the most likely difference?",
          options: [
            "Trader B compounds faster and finishes far richer",
            "They finish about the same, since the win rate is identical",
            "Trader A survives the inevitable losing streaks; Trader B risks ruin when one hits",
            "Trader B only does worse if his win rate drops"
          ],
          correctIndex: 2,
          explanation: "Losing streaks are statistically guaranteed over enough trades, even at a 55% win rate. At 15% risk per play, a five-loss streak costs Trader B more than half his account, and the recovery math turns brutal from there. Same picks, different sizes, completely different careers."
        },
        {
          id: "s4e1-q3",
          question: "You risk 2% of your account on each play and hit a ten-loss streak. Roughly how deep is your drawdown?",
          options: ["About 10%", "About 18%", "About 35%", "About 50%"],
          correctIndex: 1,
          explanation: "Each 2% loss compounds: 0.98 raised to the 10th power is about 0.82, leaving you down roughly 18%. Nasty, but you only need about a 22% gain to recover. Risk 10% per play and the same streak digs a 65% hole. Small size turns a disaster into a bad month."
        }
      ],
      paperTrade: {
        id: "s4e1-pt",
        title: "The Hot Hand Test",
        ticker: "NVDA",
        spotPrice: 168.40,
        brief: "Your $20,000 account is up four trades in a row and you feel unstoppable. NVDA reports earnings tomorrow and you like calls -- the slightly out-of-the-money weeklies cost $450 per contract. The chat room is pounding the table. How much do you put on?",
        choices: [
          {
            label: "Swing big: 10 contracts ($4,500, about 22% of the account)",
            result: "Earnings were fine but not spectacular. The stock inched up 1%, implied volatility collapsed, and the calls lost 60% overnight. The hot hand just cost you more than a tenth of your season.",
            pnl: -2700
          },
          {
            label: "Stay sized: 1 contract ($450, about 2% of the account)",
            result: "Same trade, same IV crush, same 60% loss on the option. Your account is down about 1.4% and you are completely fine. On to the next play.",
            pnl: -270
          },
          {
            label: "Compromise: 4 contracts ($1,800, about 9% of the account)",
            result: "The 60% overnight loss costs you $1,080 -- more than 5% of the account on a single coin-flip event. Not fatal, but two of these in a row and you are in a real hole.",
            pnl: -1080
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Notice the trade itself lost in every line of this script -- IV crush after earnings punishes long options even when the stock goes your way. The only decision that mattered was size. At 2%, a losing earnings bet is a paper cut. At 22%, it is a season-changing injury. The hot hand changes how you feel, not what you should risk."
      },
      scenario: {
        id: "s4e1-sc",
        title: "The Can't-Miss Tip",
        situation: "You are up 12% this month and feeling sharp. A friend who knows someone swears a small biotech has trial results coming and the calls will 10x. Your account is $25,000 and the calls he likes cost $300 each.",
        question: "What is the disciplined play?",
        options: [
          "Buy 25 contracts ($7,500). Edges like this are rare and you are playing with house money.",
          "Do your own homework first, and if you actually like it, size it like any other play: one or two contracts, 1-2% of the account at risk.",
          "Skip the homework but buy 5 contracts -- splitting the difference between conviction and caution.",
          "Buy 2 contracts now and plan to double the position every day it drops, to lower your cost basis."
        ],
        bestIndex: 1,
        coachNotes: "Option A is the classic blow-up script: house money is still your money, and 30% of the account on a rumor is how seasons end. Option C sizes a bet it never evaluated -- half-discipline is not discipline. Option D pre-commits to averaging down into a falling, decaying asset, turning one mistake into four. Option B is the pro move: the source of an idea never changes the rules. Verify the thesis, then size by max loss like every other play. No tip is good enough to break the playbook for."
      }
    },
    {
      id: "s4e2",
      seasonId: 4,
      number: 2,
      title: "Never Bet the Franchise",
      tagline: "Risk 1-2% a play. The franchise QB never takes unnecessary hits.",
      playOfTheWeek: "A trader with a $50,000 account always buys 40 contracts because 40 feels right. Forty contracts of a $0.60 option is $2,400. Forty contracts of a $4.00 option is $16,000 -- a third of the franchise on one snap -- and when that play got cut in half, he lost $8,000 in a day. Contracts are not a unit of risk. Dollars are.",
      gameFilm: [
        "Here is the rule the pros guard like a trade secret: risk 1% to 2% of your account on any single play. Translation for a $25,000 account: your max loss on any one trade is $250 to $500. Not per contract. Not per idea you really like. Per play, every play.",
        "Why those numbers? Run the streak math from last episode. At 2% risk per play, a ten-loss streak leaves you down about 18% -- ugly, recoverable. At 5%, that streak digs a 40% hole. At 10%, you are down 65% and need roughly a triple to get even. The 1-2% rule is calibrated to one job: keeping the worst realistic streak survivable.",
        "Now the mechanics. For a long option, your max loss is the premium you paid -- so sizing starts there. Say you have a $20,000 account and a 1.5% rule: a $300 risk budget. The option you want costs $4.00, or $400 per contract. Held to the bitter end, even one contract busts the budget. But add a hard rule to cut at a 50% loss and your planned risk drops to about $200 per contract -- now one contract fits with room to spare.",
        "This is why contracts are the wrong unit. A $0.50 option and an $8.00 option are completely different animals, and saying I trade 5 contracts is like saying I throw 5 passes without saying how deep. Pros size in dollars at risk. The contract count is just whatever the budget happens to buy.",
        "One more trap: correlation. Five separate 2% plays on five AI chip names is not five bets. It is one 10% bet wearing five different jerseys, and on the day the sector breaks, all five helmets crack at once. Count your real exposure by theme, not by ticker.",
        "Your account is the franchise quarterback. It plays every down, every season, and nothing works without it. You do not let the franchise take unnecessary hits because one drive looks promising. Risk 1-2%, sized by max loss, counted by dollars -- and the franchise plays for years."
      ],
      takeaway: "Size every play by dollars at max loss, never by contract count, and keep that number at 1-2% of the account. The rule exists so the worst losing streak you will realistically face leaves you bruised, not buried. Protect the franchise and you get to keep calling plays.",
      caseStudies: [
        {
          title: "Archegos: The Franchise Bet That Took Down the Stadium",
          kind: "real",
          setup: "Bill Hwang's family office, Archegos Capital, turned roughly $1.5 billion into about $20 billion by 2021. The method: total return swaps with multiple banks, building exposure reportedly north of $100 billion concentrated in a handful of stocks like ViacomCBS and Discovery. Massive leverage, massive concentration -- the franchise bet on every single snap.",
          thePlay: "In late March 2021, ViacomCBS announced a share sale and the stock slid. With everything leveraged and concentrated, a routine pullback became margin calls. Banks started dumping huge blocks, prices cratered, which triggered more margin calls in a death spiral.",
          outcome: "Roughly $20 billion of wealth evaporated in about two days. The banks on the other side lost more than $10 billion combined -- Credit Suisse alone took a hit of around $5.5 billion.",
          lesson: "Leverage plus concentration means you are betting the franchise every day, even on days you think you are not. Hwang's picks had been winning for years. One ordinary bad week ended everything, because the size left zero room to be wrong."
        },
        {
          title: "Dana and the Ten-Contract Habit on $QRMT",
          kind: "fictional",
          setup: "Dana always bought ten contracts. It started when she traded $0.40 options -- ten contracts was $400, a sensible bet on her $30,000 account. The habit stuck. The premiums did not stay at $0.40.",
          thePlay: "She bought ten contracts of a $6.50 call on $QRMT, a quantum-computing highflier -- $6,500, more than a fifth of her account -- without ever doing the multiplication. Same ten contracts as always, in her mind the same bet as always.",
          outcome: "$QRMT pulled back 7% on a sector downgrade and the calls lost 60%. Dana dropped $3,900 -- 13% of her account -- on a position she thought of as routine.",
          lesson: "Her mistake was not the pick, it was the unit. Ten contracts is not a size; $6,500 at risk is a size. Do the dollar math on every play, because the market grades in dollars."
        }
      ],
      quiz: [
        {
          id: "s4e2-q1",
          question: "You have a $50,000 account and a 2% risk rule. You want a $4.00 option ($400 per contract) and your plan is a hard cut at a 50% loss. What is your max position?",
          options: ["2 contracts", "5 contracts", "10 contracts", "12 contracts"],
          correctIndex: 1,
          explanation: "2% of $50,000 is a $1,000 risk budget. With a disciplined 50% cut, each contract risks about $200, so $1,000 divided by $200 is 5 contracts. Note that without the cut rule, each contract risks the full $400 and the answer drops to 2. The exit plan is part of the size."
        },
        {
          id: "s4e2-q2",
          question: "What is the right unit for position sizing in options?",
          options: [
            "Number of contracts",
            "Total premium as a percent of your last win",
            "Dollars at risk if your max-loss scenario hits",
            "The delta of the position"
          ],
          correctIndex: 2,
          explanation: "Contracts tell you nothing without the premium attached -- ten contracts can be $400 or $6,500. Pros size every play by the dollars lost if the worst case hits, then check that number against the 1-2% budget. Everything else is commentary."
        },
        {
          id: "s4e2-q3",
          question: "What was the core sizing failure at Archegos in 2021?",
          options: [
            "Bad stock picks in dying industries",
            "Heavy leverage concentrated in a few names, so one bad week forced a liquidation spiral",
            "Trading options instead of stock",
            "Positions that were too small to keep up with the market"
          ],
          correctIndex: 1,
          explanation: "Archegos was not a story of bad picks -- many of the positions had been huge winners. It was leverage stacked on concentration, which meant a single ordinary pullback triggered margin calls that fed on themselves. Size and concentration, not selection, ended the firm in two days."
        }
      ],
      paperTrade: {
        id: "s4e2-pt",
        title: "Budget the Bet",
        ticker: "AMD",
        spotPrice: 162.50,
        brief: "You run a $15,000 account with a 1.5% risk rule -- a $225 budget per play. You like AMD calls into a product launch next week. The contract you want costs $380. Pick your size and your plan.",
        choices: [
          {
            label: "Buy 5 contracts ($1,900). The setup is too good for one contract.",
            result: "The launch lands flat and the calls bleed 55% over the week. You are down over $1,000 -- about 7% of the franchise on one play. That is roughly five weeks of risk budget gone in one swing.",
            pnl: -1045
          },
          {
            label: "Buy 1 contract and hold to the end no matter what ($380 of risk, about 2.5%)",
            result: "The calls bleed past every pain threshold, but you have no exit rule, so you ride it down 85% before finally capitulating. Slightly oversized and totally unmanaged.",
            pnl: -323
          },
          {
            label: "Buy 1 contract with a hard cut at a 50% loss ($190 of planned risk, about 1.3%)",
            result: "The launch disappoints, the option hits your cut at -50%, and you punt for a $190 loss. Inside budget, by the book. You will not even remember this trade in a month.",
            pnl: -190
          }
        ],
        bestChoiceIndex: 2,
        debrief: "Same losing trade, three different damage reports. Five contracts turned a routine miss into a month-sized setback. One contract with no exit plan drifted over budget and then bled to nearly nothing. One contract plus a pre-planned 50% cut kept the loss at 1.3% of the account -- a forgettable Tuesday. The risk rule and the exit plan together are what define your size. Run both on every play."
      },
      scenario: {
        id: "s4e2-sc",
        title: "Conviction vs. the Cap",
        situation: "You have a $20,000 account and a 2% rule -- $400 max risk per play. Then your best setup of the year appears: a calendar of catalysts, a clean chart, everything aligned. The option you want costs $800 per contract.",
        question: "What do you do with a conviction play that does not fit the budget?",
        options: [
          "Buy 3 contracts. Rules are for average setups, and this one is special.",
          "Buy 1 contract with a hard 50% cut, putting $400 of planned risk on the line -- max conviction, max allowed size, rule intact.",
          "Skip it entirely. If one contract at full premium busts the budget, it cannot be traded.",
          "Buy 1 contract now and commit to adding 2 more if it drops, to build a bigger position at better prices."
        ],
        bestIndex: 1,
        coachNotes: "Option A is how every blown account justified itself -- this one was special. Conviction is exactly when the cap matters most, because that is when you most want to break it. Option C throws away a legitimate tool: a hard 50% cut halves the planned risk and fits the play inside the rule. Option D is averaging down in disguise, pre-committing $2,400 to a falling position. Option B is the pro move: express conviction through trade selection, never through rule-breaking size."
      }
    },
    {
      id: "s4e3",
      seasonId: 4,
      number: 3,
      title: "Know Your Max Loss Before Kickoff",
      tagline: "If you can't say the worst case out loud, you're not ready to snap the ball.",
      playOfTheWeek: "January 2021. Two traders, same bearish read on the same meme stock. One shorted shares with no cap on the downside; one bought puts and knew his worst case to the penny. The stock quadrupled in a week. The put buyer lost his premium and went home. The short seller lost his account and then some. Same pick, different worst cases.",
      gameFilm: [
        "Long options come with a superpower most traders never even unwrap: your max loss is printed on the ticket at entry. Buy a call for $350 and the market can crash, gap, halt, or melt down -- your worst case is $350. No margin call, no overnight surprise bigger than the ticket. That certainty is worth everything, if you actually use it.",
        "But defined risk is not the same as small risk. Out-of-the-money options expire worthless all the time -- that is not a scandal, that is the product. Treat 100% of the premium as your real risk number unless you have a hard cut rule you will actually honor. Plan for zero. Be pleasantly surprised.",
        "So here is the pre-kickoff ritual, and it takes thirty seconds. Before entry, write three numbers: max loss in dollars, max loss as a percent of your account, and the exit trigger. One sentence does it: I am risking $300, 1.5% of my account, and I am out if the premium halves or the catalyst passes. If you cannot say that sentence, you are not ready to snap the ball.",
        "Now compare the rosters. Long call or long put: loss capped at the premium. Short stock: uncapped -- the stock can keep rising forever. Naked short calls: uncapped, same nightmare. Naked short puts: capped only when the stock hits zero, which on a $200 stock is a number that ends careers. Know which positions can hurt you beyond the ticket, because the market will eventually test every one of them.",
        "Kill the myth while we are here: it probably won't go to zero. For options, it probably will -- a huge share of out-of-the-money contracts expire worth nothing. The defined max loss is not a technicality. It is the most likely bad outcome, and your sizing has to respect it.",
        "Planning the worst case is not pessimism. It is the snap count. Every pro walks into every play knowing exactly what a total bust costs, in dollars and in percent, before any money moves. Hope is not a number. Your max loss is."
      ],
      takeaway: "A long option's max loss is known at entry -- the premium -- and that certainty is your edge, but only if you size for it. Before every play, state the worst case in one sentence: dollars, percent of account, exit trigger. If you cannot say it out loud, you are hoping, not trading.",
      caseStudies: [
        {
          title: "Melvin Capital: The Trade With No Ceiling",
          kind: "real",
          setup: "Melvin Capital entered 2021 as one of the hottest hedge funds on the street, managing about $12.5 billion. Among its positions: a massive short bet against GameStop, a trade that had worked for years. Short stock has no defined max loss -- the downside grows as far as the stock can climb.",
          thePlay: "In late January 2021, retail traders piled into GME and the squeeze ignited. The stock ran from around $20 toward an intraday peak near $483 in a matter of days. With no cap on the loss, every dollar higher dug the hole deeper, and forced covering by shorts poured gasoline on the fire.",
          outcome: "Melvin lost about 53% in January 2021 alone and needed a $2.75 billion lifeline from Citadel and Point72 to stay on the field. The fund never truly recovered and shut down in 2022.",
          lesson: "The pick was debatable; the structure was the killer. An undefined-max-loss position met an unlimited move, and a single month wrecked a multi-billion-dollar franchise. Know the ceiling on your downside before kickoff -- or the market will show it to you live."
        },
        {
          title: "Priya's Pre-Kickoff Card on $DRFT",
          kind: "fictional",
          setup: "Priya runs a $35,000 account and was bearish on $DRFT, a hyped EV maker, into its quarterly deliveries report. Before entry she filled out her pre-kickoff card, same as every trade.",
          thePlay: "She bought 2 puts at $280 each and wrote the sentence: I am risking $560, 1.6% of my account, and I am out if the premium halves or the report passes. Then she stopped thinking about the downside, because it was already handled.",
          outcome: "Deliveries beat and the puts gapped to almost nothing. Priya salvaged a few bucks and booked a $510 loss -- annoying, planned, survivable. A friend in her group chat had the same trade at 15% of his account with no card, and rage-quit trading that week.",
          lesson: "The same losing trade landed completely differently in two accounts. The difference was not the pick -- it was that Priya had met her worst case on paper before she ever met it in the market."
        }
      ],
      quiz: [
        {
          id: "s4e3-q1",
          question: "You buy a call option for $2.75. What is your maximum possible loss?",
          options: [
            "$2.75 total",
            "$275 per contract -- the premium paid",
            "Unlimited if the stock keeps falling",
            "The premium plus the strike price"
          ],
          correctIndex: 1,
          explanation: "Options are quoted per share and a standard contract covers 100 shares, so a $2.75 option costs $275 per contract -- and that premium is the absolute worst case for a long option. No matter what the stock does, a call buyer can never lose more than what was paid at entry."
        },
        {
          id: "s4e3-q2",
          question: "Which of these positions has an UNCAPPED maximum loss?",
          options: ["Long put", "Long call", "Short (naked) call", "Long call spread"],
          correctIndex: 2,
          explanation: "A naked short call loses more the higher the stock climbs, and there is no ceiling on a stock price -- that is the same exposure that wrecked short sellers in the 2021 squeezes. Long options and defined-risk spreads cap the worst case at entry. Know which team you are putting on the field."
        },
        {
          id: "s4e3-q3",
          question: "What does a complete pre-kickoff risk card contain?",
          options: [
            "Your price target and a screenshot of the chart",
            "Max loss in dollars, max loss as a percent of the account, and the exit trigger",
            "The contract count and the breakeven price",
            "Your win rate over the last twenty trades"
          ],
          correctIndex: 1,
          explanation: "Three numbers, one sentence, thirty seconds: dollars at risk, percent of the franchise at risk, and exactly what makes you exit. Targets and breakevens are offense -- the card is defense, and it gets written before any money moves."
        }
      ],
      paperTrade: {
        id: "s4e3-pt",
        title: "Worst Case First",
        ticker: "TSLA",
        spotPrice: 284.70,
        brief: "You run a $35,000 account and you are bearish on TSLA into a delivery report. Three ways to play it -- pick the one where you can state the worst case before kickoff.",
        choices: [
          {
            label: "Sell 1 naked call at the $300 strike for $600 of premium. Get paid to be right.",
            result: "Deliveries crush estimates and TSLA rips 12% to $319. The naked call is deep underwater and you buy it back in a panic for a four-figure loss. You never knew your worst case, because the position did not have one.",
            pnl: -1450
          },
          {
            label: "Buy 1 put for $700 and write the card: max loss $700 (2% of the account), exit if the premium halves or the report passes.",
            result: "TSLA rips and the put hits your 50% cut. You punt for a planned, pre-known loss and move on. The worst case was written down before the snap -- and you did not even take the full hit.",
            pnl: -350
          },
          {
            label: "Buy 3 puts for $2,100, because being right should pay big.",
            result: "Same rip, same 50% cut -- but at triple size the planned loss is 3% of the account on one play. The worst case was defined. It was also way too big.",
            pnl: -1050
          }
        ],
        bestChoiceIndex: 1,
        debrief: "One position had no ceiling, one had a ceiling that was too high, and one had a worst case that was written, sized, and survivable. The bearish read was wrong in all three -- that happens. Defined risk at the right size turned a wrong opinion into a 1% scratch. Undefined risk turned the same opinion into a panic. The card you write before kickoff decides which movie you are in."
      },
      scenario: {
        id: "s4e3-sc",
        title: "Free Money Friday",
        situation: "A trader in your group chat sells naked calls on a hot AI stock every Friday and posts the wins -- free money, they always expire worthless. He is 11 for 11 and wants you in. Your account is $25,000.",
        question: "What is the disciplined response?",
        options: [
          "Join him. Eleven straight wins is a track record.",
          "Join him, but at half his size to be safe.",
          "Pass on uncapped risk entirely. If you want the bearish trade, use a defined-risk structure like a call credit spread, sized so the known max loss fits your 1-2% rule.",
          "Join him for one trade just to see how it feels, then decide."
        ],
        bestIndex: 2,
        coachNotes: "Options A, B, and D all put on a position whose worst case cannot be stated -- and half of unlimited is still unlimited. Eleven wins tells you nothing about the twelfth, which on naked calls can hand back years of free money in one afternoon; ask anyone who was short calls on GameStop in January 2021. Option C is the pro move: keep the same opinion, change the structure. A defined-risk spread caps the worst case at a number you can write on the card before kickoff. Never enter a trade whose worst case you cannot say out loud."
      }
    },
    {
      id: "s4e4",
      seasonId: 4,
      number: 4,
      title: "Stops for Options",
      tagline: "A stock stop is a seatbelt. On options, it can be the crash.",
      playOfTheWeek: "A trader buys SPY puts for $4.20, sets a good-til-canceled stop at $2.10, and heads to work. At the open the bid flickers wide on zero volume, his stop triggers as a market order, and he is filled at $1.62 -- the low print of the day. The puts traded back above $3.00 by lunch. He had the right exit level and the wrong weapon.",
      gameFilm: [
        "Stop-loss orders are a beautiful tool -- on stocks. Stocks are liquid, spreads are pennies, and when your stop triggers, the market order fills close to your line. Options are a different field entirely: spreads can be dimes or dollars wide, quotes flicker on thin volume, and a stop order fires you into whatever canyon happens to be quoted at that second.",
        "Walk through the mechanics of a bad fill. Your stop on an option converts to a market order the instant the trigger prints. On a contract quoted $2.90 by $3.40, you instantly donate the spread. And in a volatility spike -- exactly when stops fire -- spreads blow even wider. You end up selling the very bottom of a wick that recovers ninety seconds later.",
        "There is a second trap that is pure options: the premium moves on implied volatility, not just the stock. A vol crush or a vol spike can tag your stop price while your stock thesis is perfectly intact. A hard price stop on an option can eject you from a winning idea because the wrong variable twitched.",
        "The pro alternative is the mental stop. Decide the exit level before entry, set an alert at that level, and when the alert fires, you execute -- personally, with a limit order near the mid. You keep all the discipline of a stop and stop donating to the market makers.",
        "Run two triggers at once. Price-based: the premium is down 50%, you are out, no debate -- that is the hard floor. Thesis-based: the reason for the trade has died -- the catalyst passed, the news contradicted you, the level broke -- so you exit even if the price line has not been hit. Whichever trigger fires first wins, every time.",
        "One honesty clause makes all of this work: a mental stop only counts if you actually pull the trigger. Write the level down before entry, set the alert, and treat the alert as the whistle -- not the start of a negotiation. A mental stop you ignore is just a loss with extra steps."
      ],
      takeaway: "Hard stop orders on options fire into wide spreads and fill terribly -- the seatbelt becomes the crash. Use alert-based mental stops executed with limit orders, and run a price trigger and a thesis trigger side by side. The discipline lives in executing the instant the alert fires.",
      caseStudies: [
        {
          title: "The Flash Crash: When the Stops Became the Crash",
          kind: "real",
          setup: "May 6, 2010. The market is already nervous over Europe when, in the mid-afternoon, liquidity suddenly evaporates. The Dow plunges nearly 1,000 points -- around 9% -- in minutes, the fastest drop anyone on the floor had ever seen.",
          thePlay: "As prices fell, waves of stop-loss orders triggered and converted to market orders -- selling into a book with almost no bids. The selling triggered more stops, which triggered more selling. Household names printed absurd fills: Procter and Gamble momentarily down over 30%, and Accenture traded for a single penny.",
          outcome: "Most of the move reversed within about twenty minutes, and exchanges canceled the most extreme trades -- but thousands of stop-outs at terrible prices stood. Regulators later rebuilt the market's own defenses, including new circuit breakers and limit-up limit-down rules.",
          lesson: "A stop-market order is a promise to sell at any price, and in a thin or panicked market, any price can be a horror show. If that is true for the most liquid stocks in the world, it is doubly true for an options chain quoted fifty cents wide. The level can be right and the order type can still ruin you."
        },
        {
          title: "Theo's Two Alarms on $JOLT",
          kind: "fictional",
          setup: "Theo bought calls on $JOLT, a battery-tech name, ahead of its big developer conference. At entry he armed two alarms: a price alert at a 50% premium loss, and a thesis note in his journal -- out after the keynote, either way.",
          thePlay: "The keynote landed flat. No flagship product, no stock reaction, and his calls drifted down just 20%. The chat room said hold for a delayed pop. Theo checked his journal: the catalyst had passed. Thesis trigger fired first.",
          outcome: "He sold the same afternoon at a 20% loss, working a limit order near the mid. A week later the calls were trading for pennies as theta ground the dead story to dust.",
          lesson: "The price stop never fired -- and it did not need to. The thesis stop is the faster, smarter alarm: when the reason for the trade is gone, the trade is gone. The exit you take on purpose beats the one the market forces on you."
        }
      ],
      quiz: [
        {
          id: "s4e4-q1",
          question: "Why do stock-style hard stop orders break down on options?",
          options: [
            "Brokers do not allow stop orders on options",
            "Wide bid-ask spreads and thin quotes mean the triggered market order can fill far below fair value",
            "Options move too slowly for stops to matter",
            "Stops on options can only be set at round numbers"
          ],
          correctIndex: 1,
          explanation: "A triggered stop becomes a market order, and options books are often quoted dimes or dollars wide with little real size -- especially during the volatility spikes that fire stops in the first place. You can be filled at the low print of the day on a quote flicker. The level was fine; the weapon was wrong."
        },
        {
          id: "s4e4-q2",
          question: "Your call is down only 15%, but the catalyst you bought it for has come and gone with no reaction. What is the disciplined move?",
          options: [
            "Hold until your price stop at -50% is hit -- rules are rules",
            "Exit now: the thesis trigger fired, even though the price trigger did not",
            "Add to the position since it is barely down",
            "Remove all exit triggers and reassess next week"
          ],
          correctIndex: 1,
          explanation: "You run two triggers, and whichever fires first wins. The reason for the trade -- the catalyst -- is dead, so every remaining day just pays theta for hope. Exiting at -15% on a dead thesis is a better trade than exiting at -50% on a technicality."
        },
        {
          id: "s4e4-q3",
          question: "What makes a mental stop actually work?",
          options: [
            "Keeping the level flexible so you can adapt in the moment",
            "A pre-written level, an alert set at that level, and executing with a limit order the moment it fires",
            "Checking the position every few minutes all day",
            "Telling your group chat about the level so they hold you accountable"
          ],
          correctIndex: 1,
          explanation: "The mental stop has three parts: decide the level while calm, automate the trigger with an alert, and execute with a patient limit order when it fires. Miss any leg and it collapses -- a flexible level gets renegotiated, no alert means you miss it, and no execution means it was never a stop at all."
        }
      ],
      paperTrade: {
        id: "s4e4-pt",
        title: "The Exit Weapon",
        ticker: "SPY",
        spotPrice: 612.30,
        brief: "You own SPY puts bought at $4.20, now $3.10 after a choppy morning. The bid-ask is $2.95 by $3.25 and the quotes are jumpy. Your plan says you are out at $2.10 -- a 50% loss. How do you arm the exit?",
        choices: [
          {
            label: "Place a good-til-canceled stop-market order at $2.10 and walk away.",
            result: "A midday liquidity flush gaps the bid. Your stop triggers and fills at $1.65 -- 45 cents below your line -- and the put trades back above $2.40 within the hour. Right level, wrong weapon.",
            pnl: -255
          },
          {
            label: "Set a price alert at $2.10. If it fires, you personally work a limit order near the mid.",
            result: "The flush hits, your alert fires, and you fill a $2.05 limit within a minute. A clean punt at your number, with no donation to the spread.",
            pnl: -215
          },
          {
            label: "Skip exits entirely. Stops are for the weak -- you will know it when you see it.",
            result: "You did not know it when you saw it. The chop turns into a slide, you keep waiting for the bounce, and you finally sell the rubble at $0.63.",
            pnl: -357
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Three traders, same position, same plan on paper. The stop-market order outsourced the exit to a wide, panicky spread and paid 45 cents for the privilege. No exit at all turned a planned 50% punt into an 85% loss. The alert-plus-limit combo is the pro weapon: all the discipline of a stop, with the fill of a patient order. On options, you are the stop."
      },
      scenario: {
        id: "s4e4-sc",
        title: "The Gap-Down Open",
        situation: "You hold calls on a software name. Overnight, a rival's ugly earnings spook the whole sector, and your option is indicated down 40% at the open with the spread quoted a full dollar wide. Your thesis -- a product launch in two weeks -- has not changed.",
        question: "What is your first move at the bell?",
        options: [
          "Market-sell everything at the open before it gets worse.",
          "Buy more immediately -- it is 40% cheaper than yesterday.",
          "Do nothing and avoid looking at it until next week.",
          "Pause: check whether the news actually touches your thesis, let the spread settle for a few minutes, then act per your plan -- with limit orders if an exit trigger has fired."
        ],
        bestIndex: 3,
        coachNotes: "Option A sells panic into the widest spread of the day -- the worst fills in the market live in the first few minutes after an ugly open. Option B confuses down with cheap; nothing about your thesis got 40% better overnight. Option C is the freeze: if a trigger fired, you have to act, and looking away is not a plan. Option D is the pro sequence -- thesis check first, then patient execution. Sector sympathy moves are often pure noise to your specific catalyst. If it is noise, the plan holds. If your line truly broke, you punt with a limit order, never a market order into a canyon."
      }
    },
    {
      id: "s4e5",
      seasonId: 4,
      number: 5,
      title: "The Art of the Punt",
      tagline: "Great teams punt on fourth down. Great traders punt on broken theses.",
      playOfTheWeek: "A trader buys $480 of calls on a cloud name for exactly one reason: a partnership rumor with a megacap. Tuesday morning, the megacap announces it built the tool in-house. The rumor is dead, the option is only down 18% -- and he punts on the spot, before the market finishes pricing the news. By Friday the calls are worth a dime. The best punt of his year cost him almost nothing.",
      gameFilm: [
        "Reframe the punt right now. In football, punting is not surrender -- it is field position, a deliberate trade of this drive for a better next one. Cutting a losing trade is the same play: you are not admitting failure, you are buying back your capital and your composure for the next possession. The traders who last a decade are elite punters.",
        "The cleanest punt signal is thesis invalidation. You entered for a reason -- a catalyst, a level, a story. When that reason dies -- the catalyst passes without the move, the news directly contradicts you, the level breaks -- the trade is over, no matter what the P&L says. A position whose thesis is dead is not a trade anymore. It is a souvenir.",
        "But do not punt on noise. Stocks wiggle, premiums breathe with implied volatility, and a red day is not a verdict. The fix is to define, before entry, exactly what would prove you wrong. If you cannot tell noise from signal in the moment, it is because the line was never drawn when you were calm.",
        "For long options, add the hard floor: the 50% rule. If the premium halves, you punt -- no debate, no committee meeting. Two reasons it works. First, it caps the damage well short of zero. Second, an option down 50% usually has both the stock and the clock against it, and theta does not negotiate.",
        "Know why this is hard, because the difficulty is the point. Loss aversion makes a realized loss feel like a confession. The it-will-come-back instinct is real for blue-chip stocks -- and lethal for options, because options expire. Every day you hold a broken trade, theta takes another bite out of a story that already ended. The market does not refund hope.",
        "Now the math that makes punting profitable. Sized at 1.5% and punted at -50%, a loser costs you 0.75% of the account. You can take a dozen of those in a row and still be inside a routine drawdown. Small, fast, unemotional losses plus the occasional big winner -- that is the whole championship formula."
      ],
      takeaway: "Cut when the thesis dies or the premium halves -- whichever fires first. A good punt is not losing; it is keeping your offense on the field for the next drive. Small, fast, unemotional losses are what winning seasons are built on.",
      caseStudies: [
        {
          title: "Ackman and Valeant: The $4 Billion Late Punt",
          kind: "real",
          setup: "2015. Bill Ackman's Pershing Square builds a massive stake in Valeant Pharmaceuticals, a hedge-fund darling growing through acquisitions and aggressive price hikes, with the stock in the high $100s. The thesis: a new kind of efficient pharma company.",
          thePlay: "By late 2015 the thesis was publicly bleeding -- drug-pricing scandals, the Philidor pharmacy disclosure, congressional scrutiny. Instead of punting, Ackman pressed: defended the company on TV, added to the position, and took a board seat as the stock kept falling.",
          outcome: "Pershing Square finally sold in March 2017 with the stock near $11, booking a loss of roughly $4 billion. The market had offered two full years of better exits along the way.",
          lesson: "Even elite investors fumble the punt. The thesis broke years before the position closed, and every month of it-will-come-back compounded the damage. The skill is not avoiding being wrong -- it is being wrong briefly."
        },
        {
          title: "Jamal's $CRNK Punt That Saved a Season",
          kind: "fictional",
          setup: "Jamal runs an $18,000 account with two written rules: 1.5% risk per play and a hard punt at a 50% premium loss. He bought $270 of puts on $CRNK, a faddish exercise-equipment stock, on a thesis that subscriber growth was collapsing into earnings.",
          thePlay: "The week before the report, $CRNK rallied on a partnership rumor and the puts hit -50%. The chat room screamed hold for earnings. Jamal's rule did not care about the chat room. He punted for a $135 loss -- 0.75% of the account.",
          outcome: "Earnings beat, subscribers grew, and the stock gapped up 18%. The puts opened at a nickel. Jamal's rule had saved him roughly half the premium, and his account barely noticed the bruise.",
          lesson: "The rule made the decision so his emotions did not have to. He was wrong on the pick and fine on the season -- which is the entire point of the punt."
        }
      ],
      quiz: [
        {
          id: "s4e5-q1",
          question: "Which of these is thesis invalidation, as opposed to noise?",
          options: [
            "Your option is down 12% in normal daily chop",
            "The whole market had a red day",
            "The catalyst you bought the option for came and went with no move",
            "The bid-ask spread widened over lunch"
          ],
          correctIndex: 2,
          explanation: "Wiggles, red tape days, and spread behavior are weather -- they happen to every position and prove nothing. The catalyst passing without the move is the verdict: the reason for the trade no longer exists. When the why dies, the trade dies, regardless of the current P&L."
        },
        {
          id: "s4e5-q2",
          question: "Why does a hard cut at a 50% loss make sense specifically for long options?",
          options: [
            "Because options always bounce after falling 50%",
            "It caps the loss well short of zero, and a halved premium usually means both price and time are working against you",
            "Because brokers require it",
            "It guarantees your win rate stays above 50%"
          ],
          correctIndex: 1,
          explanation: "An option down 50% is fighting on two fronts: the stock has moved against the thesis and theta keeps grinding every day. The rule banks the remaining half instead of riding the souvenir to zero. It is not magic -- it is a pre-commitment that removes the debate at the worst possible moment to be debating."
        },
        {
          id: "s4e5-q3",
          question: "You size every play at 1.6% of your account and always punt at a 50% premium loss. What does one full loser cost the franchise?",
          options: ["0.4% of the account", "0.8% of the account", "1.6% of the account", "3.2% of the account"],
          correctIndex: 1,
          explanation: "Half of 1.6% is 0.8% -- that is the whole calculation, and it is the point. With sizing and the punt rule working together, a dozen straight losers is roughly a 9% drawdown: painful, fully recoverable. The two rules are a defensive scheme; either one alone is half a defense."
        }
      ],
      paperTrade: {
        id: "s4e5-pt",
        title: "Dead Rumor Walking",
        ticker: "META",
        spotPrice: 742.60,
        brief: "You bought calls at $6.00 ($600, about 1.5% of your $40,000 account) on chatter that META would unveil a major AI hardware partner at its developer event. The event just ended -- no announcement, no mention. Your calls are marked $3.05, down about 49%, with 12 days left.",
        choices: [
          {
            label: "Punt now. The catalyst came and went; the thesis is dead.",
            result: "You sell at $3.00 and take the planned loss. Over the next week, theta and a dead story grind the calls down to $0.40. Your punt saved about $260 of additional damage.",
            pnl: -300
          },
          {
            label: "Hold for a bounce. Down this much, it cannot get much worse.",
            result: "It got worse. No catalyst, twelve days of theta, and a soft tape take the calls to $0.45 by expiry week. You sell the rubble.",
            pnl: -555
          },
          {
            label: "Average down: buy another contract at $3.05 to cut your cost basis.",
            result: "You doubled exposure to a thesis that no longer exists. Both contracts decay together and you exit the wreckage at $0.45 each.",
            pnl: -815
          }
        ],
        bestChoiceIndex: 0,
        debrief: "The thesis was the partnership announcement, and it did not happen. That is invalidation, not noise -- and the right move was the immediate punt, even though the price had not quite touched the -50% line. Holding paid theta for hope. Averaging down doubled a dead trade and nearly tripled the damage. Punt broken theses at full speed; the market does not award style points for loyalty."
      },
      scenario: {
        id: "s4e5-sc",
        title: "The Slow Bleed",
        situation: "Your calls are down 45% with 30 days left. There has been no news at all -- the stock has just drifted sideways in normal volatility. Your thesis, an analyst day three weeks out, is still on the calendar. Your written rule: punt at -50% or on thesis invalidation.",
        question: "What do you do at -45%?",
        options: [
          "Sell everything now -- down 45% feels close enough to the line.",
          "Suspend the -50% rule for this trade, since the catalyst has not even happened yet.",
          "Hold per the plan: keep the alert set at -50% and punt without debate if it hits. The thesis is intact, and the rule stays exactly where you drew it.",
          "Add another contract to lower your cost basis before the analyst day."
        ],
        bestIndex: 2,
        coachNotes: "Option A punts on feelings -- the rule says 50, not close to 50, and panic-selling intact theses is its own slow leak. Option B is how rules die: one exemption becomes ten, always granted at the worst moment. Option D adds size to a position one bad day from its stop -- that is not conviction, it is cost-basis cosmetics. Option C is the pro move: nothing has been invalidated, so the trade lives, but the line does not move. Discipline means the rule fires the same way whether you are up, down, or bored."
      }
    },
    {
      id: "s4e6",
      seasonId: 4,
      number: 6,
      title: "Letting Winners Run",
      tagline: "Your winners pay the team's salary. Stop benching them early.",
      playOfTheWeek: "September 1992. Stanley Druckenmiller wants to short the British pound, and George Soros's response becomes legend: if the thesis is this good, why so small? They press the position toward $10 billion, the pound breaks out of the European exchange-rate mechanism, and the fund makes over a billion dollars in a day. The lesson was never the pick. It was the press.",
      gameFilm: [
        "Here is the leak nobody brags about fixing: cutting winners early. Run the math on a habit of taking profits at +30% while cutting losers at -50%, with a 50% win rate. Per $100 risked: half the time you make $30, half the time you lose $50. That is minus $10 per trade, on average, forever. A coin-flip strategy that bleeds -- and thousands of traders run it proudly.",
        "A long-options book lives on asymmetry. Many small losses, a few huge wins -- and the huge wins are not a bonus, they are the payroll. Your +200% trade pays for five punts and the lights. If you keep clipping every runner at +30%, the math never gets its star player on the field.",
        "So when do you exit a winner? Trail the thesis, not your nerves. The question is never am I up a lot -- it is: is the thesis finished? Catalyst fully played out, target reached, story now priced in: done, take it. Stock simply went up and you feel jumpy: not a reason. The reason you entered is the only honest reason to exit.",
        "Run with a leash, though. Once a winner is up big -- say +100% -- set a give-back floor: a level, maybe +50%, where you are out with a locked win, and raise that floor as the trade climbs. Now you are exposed to the rest of the move while a rule, not a feeling, guards the gain. The market picks your exit instead of your anxiety.",
        "Pressing -- adding to a winner -- is the advanced play, and it has one ironclad condition: new confirming information. The catalyst is landing in stages, the thesis is getting stronger -- press, with the add sized as its own play inside your risk budget. Price going up is not information; that is just your P&L talking. Pressing winners is offense from strength. Averaging down losers is the same act in the opposite situation, and it is desperation.",
        "Druckenmiller's lesson, distilled: be brave on winners and ruthless on losers. Most retail traders run it exactly backwards -- they bench their winners at +30% and let their losers play the full game. Flip it, and the asymmetry starts paying for everything."
      ],
      takeaway: "If your average winner is smaller than your average loser, no win rate can save you. Trail the thesis, guard gains with a rising give-back floor, and let the runner pay for the season. Brave on winners, ruthless on losers -- most traders have it backwards.",
      caseStudies: [
        {
          title: "Ackman's $27 Million Hedge That Ran to $2.6 Billion",
          kind: "real",
          setup: "Late February 2020. Bill Ackman's Pershing Square sees pandemic risk barreling at complacent markets and buys credit default swap protection -- roughly $27 million in premium for protection on tens of billions of corporate debt. A small, defined cost for a massive asymmetric payoff.",
          thePlay: "As COVID panic hit, credit spreads exploded and the hedge went vertical. Ackman did not clip a quick double or even a quick 10x. He held while the thesis -- markets fully repricing the pandemic -- kept strengthening, then unwound the position in late March as the panic matured and the move completed.",
          outcome: "About $2.6 billion in proceeds on roughly $27 million of premium -- close to a 100x return in about a month. He rotated the winnings into beaten-down stocks near the lows.",
          lesson: "The trade of the decade was not the entry; it was the holding. He exited on thesis completion -- panic fully priced -- not when the profit started to feel large. Winners that change a year come from staying in while the thesis accelerates."
        },
        {
          title: "Wade Stops Clipping the Runner on $WAVE",
          kind: "fictional",
          setup: "Wade's spreadsheet made no sense to him: a 62% win rate and a slowly shrinking account. The culprit was in his own columns -- average winner +30%, average loser -50%. Per $100 risked, that is 0.62 times 30 minus 0.38 times 50: about minus 40 cents a trade before commissions. A winning record with losing math.",
          thePlay: "He picked one trade to manage differently: calls on $WAVE, a marine-robotics name announcing a defense contract in stages. Instead of clipping +30%, he trailed the thesis -- held through stage one, raised his give-back floor after stage two, and stayed in while the story kept confirming.",
          outcome: "He exited at +240% when the final contract stage landed and the story was fully priced. That single runner made more than his previous twenty clipped winners combined.",
          lesson: "Wade did not need a better win rate; he needed bigger winners. One properly run trade repaired math that two years of frequent small wins could not."
        }
      ],
      quiz: [
        {
          id: "s4e6-q1",
          question: "You win 50% of your trades, take winners at +30%, and cut losers at -50%. Per $100 risked, your expectancy per trade is roughly...",
          options: ["+$10", "About breakeven", "-$10", "-$20"],
          correctIndex: 2,
          explanation: "Half the time you make $30, half the time you lose $50: 0.5 times 30 minus 0.5 times 50 equals minus $10 per trade. The win rate feels fine while the account bleeds. Winners must average bigger than losers or the math never works -- that is the entire asymmetry lesson."
        },
        {
          id: "s4e6-q2",
          question: "Which of these is a THESIS-based reason to exit a winning trade?",
          options: [
            "The position is up 100% and that feels like a lot",
            "The catalyst fully played out and the move you predicted is now complete",
            "A red candle printed this morning",
            "You want to lock in profits before the weekend"
          ],
          correctIndex: 1,
          explanation: "Feelings, candles, and calendars are nerves talking. The trade exists because of a thesis, so the trade ends when the thesis ends -- catalyst done, move complete, story priced. Everything else is managed with a give-back floor, not a panic button."
        },
        {
          id: "s4e6-q3",
          question: "Adding to a position is a professional press -- not a gamble -- when...",
          options: [
            "The position is up and you feel hot",
            "The position is down and adding lowers your cost basis",
            "New confirming information has arrived and the add is sized as its own play inside your risk budget",
            "The chat room agrees with you"
          ],
          correctIndex: 2,
          explanation: "Pressing requires new evidence -- a catalyst landing in stages, a thesis visibly strengthening -- and the add still obeys the 1-2% budget as its own bet. Price going up alone is not information, and averaging down a loser is the same action in the opposite, desperate direction. Same click, completely different trades."
        }
      ],
      paperTrade: {
        id: "s4e6-pt",
        title: "The Runner",
        ticker: "PLTR",
        spotPrice: 148.30,
        brief: "You bought 2 calls at $2.50 ($500 total) ahead of a government-contracts announcement. Phase one of the contract news just dropped and the calls trade at $5.50 -- up 120%. Two more contract phases are expected over the next three weeks, and your calls have 25 days left.",
        choices: [
          {
            label: "Sell everything at $5.50. Up 120% -- take the money and run.",
            result: "You book a great trade. Then the remaining phases land and the calls run to $9.00. You left $700 on the field with the thesis still mid-play.",
            pnl: 600
          },
          {
            label: "Hold both contracts with a give-back floor at $4.00, raising the floor as the news plays out.",
            result: "Phase two lands and the calls hit $9.00; you raise your floor to $7.00. Phase three underwhelms and tags it. You exit at $7.00 -- a winner that ran, and a floor that worked.",
            pnl: 900
          },
          {
            label: "Double the position at $5.50 -- the hot hand demands it.",
            result: "You added $1,100 at the highs with no new information beyond a price that already moved. Phase three underwhelms and everything exits at $7.00: the original contracts made $900, the add made $300, and you had $2,200 riding on a fade.",
            pnl: 1200
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Selling it all banked a win but benched a healthy runner in the middle of its drive. The double-up made the most dollars this time -- and that is exactly the trap: a fresh $1,100 bet placed at the highs with no new confirming information is a habit that gives everything back over a season. The floor play is the pro move: full exposure to the rest of the thesis, a locked win underneath, and an exit chosen by a rule instead of your nerves. Grade the decision, not the one-time result."
      },
      scenario: {
        id: "s4e6-sc",
        title: "Nervous at +150",
        situation: "Your calls are up 150% with three weeks to expiry. The catalyst you bought them for -- an FDA decision -- is still a week away. You are checking the position every twenty minutes and your finger is hovering over the sell button.",
        question: "What is the pro move?",
        options: [
          "Sell everything. Up 150% into a binary event is gambling.",
          "Hold everything exactly as is and white-knuckle it to the decision.",
          "Let the thesis decide: the event you paid for has not happened yet, so set a give-back floor that locks a strong win and let the runner see the catalyst.",
          "Sell, then buy twice as many cheaper, further out-of-the-money calls to increase the upside."
        ],
        bestIndex: 2,
        coachNotes: "Option A is at least a decision, but notice the reason would be your nerves -- the entire thesis was the event still ahead. Option B holds with zero structure; a 150% gain can round-trip to zero on a binary outcome. Option D churns a working position into a worse one: more contracts, lower odds, pure dopamine. Option C is the pro frame -- the thesis decides whether you stay, the floor decides how much you can give back. If the FDA decision is why you are here, structure the position so you can actually stay for it without betting the whole gain."
      }
    },
    {
      id: "s4e7",
      seasonId: 4,
      number: 7,
      title: "Scaling In and Out",
      tagline: "Pros don't jump in the pool. They wade in -- and they climb out the same way.",
      playOfTheWeek: "A trader catches a semiconductor breakout with 4 calls at $1.50. At $3.10 she sells two -- $620 banked against $600 spent, the entire stake recovered. The runners ride a second leg to $4.50 while she sleeps like a baby, because her worst case became a breakeven trade. Scaling out did not cap her win. It bought her the nerve to hold it.",
      gameFilm: [
        "The rookie pattern is binary: all-in at entry, all-out at exit, every trade one giant high-stakes decision. Pros break the same trade into installments. Tranches turn one guess into a process -- and a process can be managed, graded, and repeated.",
        "Scaling in: open with a starter, a third to half of your intended size, and add the rest only when the trade confirms -- price action behaving, the first phase of the catalyst landing, the thesis visibly strengthening. The cardinal rule: you add to winners and confirming theses only. Adding to a falling, broken trade is averaging down, and that is a different episode -- and a horror film.",
        "Scaling out has a signature play: half off at a double. You bought 2 contracts at $3.00, $600 total. They hit $6.00; you sell one and collect $600. Your entire initial outlay is back in the bank, and the remaining contract is a runner whose worst case is now a breakeven trade. That is how pros hold big winners calmly: the scary part has already been paid for.",
        "There is a psychology dividend, too. Partials beat regret in both directions: if it keeps running, you still own a piece; if it dies, you already banked some. Trading is a repeated game played by a human, and the trader who feels steady makes better calls on the next hundred plays.",
        "Be honest about the cost. Scaling out caps your maximum win versus riding everything to the exact top -- and pros pay that price happily, every time. Nobody picks tops consistently. Consistency beats highlight reels over a season, and the equity curve of the scaler is the one you can actually live on.",
        "One guardrail holds it all together: the budget still rules. Plan the full position at entry -- starter one contract, add one on confirmation, total risk inside your 1-2% cap. Scaling is a schedule for deploying a pre-approved budget. It is never a license to keep stacking."
      ],
      takeaway: "Enter in installments and add only on confirmation; take half off when the premium doubles, and the runner plays on with your stake already recovered. Scaling trades a slightly smaller max win for a massively smoother season. Pros take that deal every single time.",
      caseStudies: [
        {
          title: "Livermore and the 1929 Probe",
          kind: "real",
          setup: "Jesse Livermore, the most famous trader of his era, sensed through 1929 that the roaring market was rotting under the surface. He did not slam a full short position on the hunch -- his early probes that summer actually lost money.",
          thePlay: "He worked in lines: small test shorts, cut quickly when they failed, pressed harder only as the tape confirmed real weakness through September and October. Every add was funded by the market proving the last one right.",
          outcome: "When the crash hit in late October 1929, Livermore's stacked shorts paid him roughly $100 million -- on the order of $1.5 billion in today's money -- in one of the greatest single campaigns ever recorded.",
          lesson: "The legend is the payday; the lesson is the process. He was wrong small several times before being right huge once, because he scaled in on confirmation instead of betting the farm on the first hunch. Probe, confirm, press -- the opposite of all-in."
        },
        {
          title: "Quinn's Half-Off Habit on $MOSS",
          kind: "fictional",
          setup: "Quinn, $22,000 account, used to ride entire positions to the final whistle -- and round-tripped three separate +80% winners into losses in a single quarter. The new rule taped to her monitor: sell half at +100%, trail the rest.",
          thePlay: "She bought 2 calls on $MOSS, a data-center REIT, at $2.20 each -- $440, right at her 2% budget. A lease announcement sent the calls to $4.40 within a week. Rule fired: she sold one contract for $440 and had her entire stake back in the account.",
          outcome: "A second leg of news carried the runner to $6.80, where her trailing floor finally stopped her out. Total collected: $1,120 on a $440 outlay. And the next time the runner died instead, the trade still closed out near breakeven -- because the stake was already banked.",
          lesson: "Half off at a double turned her round-trip disease into a system where winners cannot become losers. The runner plays with recovered capital, and that changes every decision after it."
        }
      ],
      quiz: [
        {
          id: "s4e7-q1",
          question: "You buy 2 contracts at $2.50 ($500 total). The option doubles to $5.00 and you sell one contract. What is the status of the trade?",
          options: [
            "You have banked $500 -- your full initial outlay -- and the runner rides with your starting capital already recovered",
            "You are still risking $250 of your original money",
            "You locked in a $500 profit and have nothing left in the trade",
            "You must sell the second contract immediately to break even"
          ],
          correctIndex: 0,
          explanation: "Selling one contract at $5.00 returns $500 -- exactly what you paid for both. The remaining contract is a runner whose worst case is now a roughly breakeven trade on your initial capital. That recovered-stake math is why scalers can hold big winners without flinching."
        },
        {
          id: "s4e7-q2",
          question: "When does a pro add the second tranche to a scaled entry?",
          options: [
            "Whenever the position is down, to improve the average price",
            "When the trade confirms -- and the add was already planned inside the total risk budget",
            "Whenever spare cash is available",
            "Immediately after entry, to reach full size faster"
          ],
          correctIndex: 1,
          explanation: "Scaling in means the market earns your next tranche by confirming the thesis -- and the full position size was budgeted before the first click. Adding because price fell is averaging down, and adding because cash is idle is boredom. The add is a planned play, not an impulse."
        },
        {
          id: "s4e7-q3",
          question: "What is the honest trade-off of scaling out of winners?",
          options: [
            "It increases your total risk per trade",
            "It caps your maximum win versus holding everything to the top, in exchange for consistency and the nerve to hold runners",
            "It only works in bull markets",
            "There is no trade-off; scaling out is strictly better"
          ],
          correctIndex: 1,
          explanation: "If the trade goes straight to the moon, the scaler makes less than the all-in rider who nailed the exact top -- but nobody nails exact tops repeatedly. The payment you receive is a smoother equity curve and the psychological footing to hold the rest of the move. Over a season, that trade is a steal."
        }
      ],
      paperTrade: {
        id: "s4e7-pt",
        title: "Half Off at the Half",
        ticker: "COIN",
        spotPrice: 264.80,
        brief: "You hold 4 calls bought at $1.50 ($600 total, about 1.5% of your account) into a two-part catalyst: a regulatory ruling, then earnings ten days later. The ruling just went your way and the calls trade at $3.10 -- up 107%. Earnings are still ahead.",
        choices: [
          {
            label: "Hold all 4 contracts through earnings. The runner deserves a full ride.",
            result: "The calls spike to $4.80 on the earnings run-up, but the report lands soft and you have no plan. You ride the round trip down and sell the wreckage at $1.20.",
            pnl: -120
          },
          {
            label: "Sell 2 at $3.10 ($620 banked -- stake recovered) and let 2 ride earnings behind a trailing floor.",
            result: "The runners spike to $4.80 into the report, and your raised floor at $4.00 stops them out on the post-earnings fade. Banked: $620 plus $800 against $600 spent. A disciplined win on both halves of the catalyst.",
            pnl: 820
          },
          {
            label: "Sell all 4 at $3.10. A 107% gain does not need an encore.",
            result: "You bank $1,240 on $600 -- a clean win, no complaints. The earnings spike to $4.80 happens without you. Solid trade, but your process never gets paid for the second half of catalysts.",
            pnl: 640
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Holding everything with no plan turned a 220% peak into a net loss -- the round-trip disease in one frame. Selling everything was respectable, but the catalyst was only half played, and the second legs you always skip add up over a season. The half-off play recovered the entire stake, kept full thesis exposure on the runners, and let a trailing floor make the exit call. Banked plus runner beats all-or-nothing on the math and on your blood pressure."
      },
      scenario: {
        id: "s4e7-sc",
        title: "The Starter Position",
        situation: "Your written plan for a retail stock: $500 total risk budget (2% of the account), entered as a $250 starter before a same-store-sales report, with the other $250 to be added only if the report confirms the turnaround. The report just confirmed it -- sales beat -- and your starter calls are up.",
        question: "What now?",
        options: [
          "Add the planned $250 second tranche -- the thesis confirmed exactly as scripted.",
          "Add $1,000 instead of $250. Confirmation this clean deserves real size.",
          "Skip the add and sell the starter now -- a win is a win.",
          "Skip the add and hold the starter with no further plan."
        ],
        bestIndex: 0,
        coachNotes: "This one is almost a trick: the plan already made the decision, and the only pro move is to execute it. Option B turns a disciplined scale-in into a budget-busting chase -- confirmation does not change your account size or your 2% cap. Option C books a tiny win the moment the trade starts working, the exact opposite of letting confirmation pay you. Option D just drifts: no add, no exit structure, pure vibes. When you wrote the script while calm and the market follows the script, you run the script. That is the entire point of having one."
      }
    },
    {
      id: "s4e8",
      seasonId: 4,
      number: 8,
      title: "The Drawdown Spiral",
      tagline: "Tilt is the injury you can't see on the X-ray.",
      playOfTheWeek: "It is 2:47 pm and a trader who lost $600 this morning is now loading 0DTE lottery calls at triple his normal size, on a ticker he had never traded before lunch. By the close he is down $2,400 -- four times the morning's damage. The morning loss was never the problem. The spiral was.",
      gameFilm: [
        "Watch the film on the spiral, because it runs the same way every time. Take a loss. Feel the sting. Size up to win it back fast. Take a bigger loss. Feel a bigger sting. Size up again. Every single turn feels logical in the moment -- and it is the most predictable blow-up pattern in trading. Nobody thinks it applies to them. It applies to everyone.",
        "The recovery math is the fuel. Down 30%, you need 43% just to get even -- and a tilted brain reads that number as proof it needs BIGGER bets, when bigger bets are exactly what dug the hole. The math whispers swing harder at the precise moment it should be screaming swing smaller.",
        "Learn your tells, because tilt has a signature. Trading tickers you never researched. Timeframes shrinking from weeks to minutes. Size creeping up specifically after losses. Skipping the checklist. The one-more-trade itch at 3:58 pm. The common thread: you are trading your P&L, not a setup. The market always knows the difference, because the market is not the one on tilt.",
        "Doubling down deserves its own warning label, because it disguises itself as conviction. Averaging into losers to fix the cost basis is the spiral's favorite costume -- it books no loss, requires no admission, and doubles the exposure. The market does not know your entry price and does not owe you a bounce.",
        "The defense is the circuit breaker, written before you need it: two full losses in a day means flat for the day. Down 5-6% on the week means no live trades until Monday. The rules must be written while you are calm, because the tilted version of you will never write them -- and will hate the calm version for having done it. That hate is the rule working.",
        "Already in the spiral? Name it out loud. Get flat or get tiny. Log what happened, and do not return to normal size until you have followed the plan for several clean sessions. Tilt is an injury -- you do not sprint on a torn hamstring, you rehab it. The traders with long careers are not the ones who never tilt. They are the ones who notice in time."
      ],
      takeaway: "The spiral is loss, bigger bet, bigger loss -- and it ends more accounts than bad picks ever will. Write circuit breakers while you are calm, because the tilted version of you will not. Two losses in a day means done for the day. No exceptions, especially when you want one.",
      caseStudies: [
        {
          title: "Nick Leeson and Account 88888",
          kind: "real",
          setup: "Singapore, the mid-1990s. Nick Leeson is Barings Bank's star derivatives trader -- except the star profits are partly fiction. His real losses are parked in error account 88888, hidden from headquarters in London.",
          thePlay: "Every losing stretch, Leeson doubles his bets on Nikkei futures and short option positions to earn the hole back before anyone notices. In January 1995, the Kobe earthquake guts the Nikkei -- and his response is the spiral's signature move: he buys more, betting everything on a bounce that never comes.",
          outcome: "Losses reach roughly $1.3 billion, more than the bank's entire capital. Barings -- 233 years old, one of Britain's most storied banks -- collapses and is sold to ING for one pound. Leeson goes to prison.",
          lesson: "Strip away the zeros and it is the same spiral as any retail account: hide the loss, double the bet, pray. The first untaken loss was the cheapest exit Leeson was ever offered. Every turn of the spiral after that just raised the price."
        },
        {
          title: "Maya's Tuesday Spiral -- Almost",
          kind: "fictional",
          setup: "Maya runs a $14,000 account and took two disciplined, by-the-book losses before lunch: $210 total. By 1 pm her chest was tight, and she found herself loading an options order on $FUSE, a ticker from a chat room she had never traded, at triple her normal size.",
          thePlay: "Her finger was on the button when she saw the index card taped to her monitor: TWO LOSSES = DONE FOR THE DAY. She closed the platform, logged both trades, and went to the gym, furious about it the entire drive.",
          outcome: "The $FUSE lottos she almost bought expired worthless that afternoon -- another $450 saved, and more importantly, a spiral that never got its third turn. She was down 1.5% on the day instead of nearly 5%, and traded normal size the next morning.",
          lesson: "The breaker did its one job: it made the decision so adrenaline did not have to. You will never know how many blow-ups your circuit breaker prevented. That is exactly the point."
        }
      ],
      quiz: [
        {
          id: "s4e8-q1",
          question: "Your account is down 30%. What gain do you need to break even -- and what does tilt tell you to do about it?",
          options: [
            "30%; tilt says keep trading normally",
            "43%; tilt says size up to get it back faster -- which is exactly how the hole gets deeper",
            "43%; tilt says quit trading forever",
            "50%; tilt says switch to a brand-new strategy immediately"
          ],
          correctIndex: 1,
          explanation: "From 70 cents on the dollar, you need about a 43% gain to return to even -- 1 divided by 0.70 is roughly 1.43. The danger is what that number does to a tilted brain: it reads like a case for bigger swings, when oversized swings are what dug the hole. The spiral runs on exactly this misreading."
        },
        {
          id: "s4e8-q2",
          question: "Which of these is a classic revenge-trading tell?",
          options: [
            "Taking a planned trade from your watchlist at normal size",
            "Passing on a setup that does not meet your checklist",
            "Taking an oversized position in an unfamiliar ticker right after a loss",
            "Reviewing your trade log after the close"
          ],
          correctIndex: 2,
          explanation: "Unresearched ticker, inflated size, immediately after a loss -- that is the full revenge signature in one trade. The tell underneath all of them: you are trading your P&L instead of a setup. The other three options are what process looks like."
        },
        {
          id: "s4e8-q3",
          question: "When should your circuit-breaker rules be written?",
          options: [
            "In the moment, so they fit the situation",
            "After a blow-up, when the lesson is fresh",
            "Before any drawdown, while you are calm -- then followed mechanically when triggered",
            "Never; flexibility beats rules in fast markets"
          ],
          correctIndex: 2,
          explanation: "The tilted version of you will never write the rule and will fight the rule that exists -- which is precisely why the calm version writes it first and makes the consequence automatic. A breaker negotiated in the moment is not a breaker. It is a suggestion, and tilt eats suggestions."
        }
      ],
      paperTrade: {
        id: "s4e8-pt",
        title: "2:30 PM, Down on the Day",
        ticker: "SPY",
        spotPrice: 608.90,
        brief: "Your $12,000 account took two stopped-out losses this morning: $380 total, about 3% of the franchise. It is 2:30 pm and a textbook reversal setup is forming -- 0DTE calls at $1.10 look juicy. Your written rule says two losses ends the day. The setup really does look good.",
        choices: [
          {
            label: "Buy 8 contracts ($880). Win the day back in one swing.",
            result: "The reversal fizzles into the close, as most do. The 0DTEs expire worthless: $880 more gone on top of $380. You are down over 10% on the day, and the spiral is fully armed for tomorrow.",
            pnl: -880
          },
          {
            label: "Respect the breaker: close the platform, log both losses, review tonight.",
            result: "The setup fails -- the calls you did not buy go out worthless. The real win is invisible: rule followed, spiral never started, full strength tomorrow.",
            pnl: 0
          },
          {
            label: "Compromise: buy 1 contract ($110). Tiny revenge is basically discipline.",
            result: "It expires worthless. The dollars are small, but you just taught yourself the breaker is negotiable -- and the next exception will be bigger.",
            pnl: -110
          }
        ],
        bestChoiceIndex: 1,
        debrief: "The trap in this sim is that the setup looked legitimate -- they always do at 2:30 pm when you are down. The breaker exists precisely because you cannot trust your own judgment after consecutive losses. The 8-lot turns a bad day into a hole that needs a double-digit climb. The 1-lot loses almost nothing in dollars and almost everything in rule integrity. Flat was the play. Flat is always the play once the breaker trips."
      },
      scenario: {
        id: "s4e8-sc",
        title: "The Friday Hole",
        situation: "Friday morning. Your account is down 8% on the week -- a string of stopped losses, all inside your per-play rules, just a cold streak. Your weekly circuit breaker triggers at -6%, and a sure-thing jobs-report trade is all over your feed.",
        question: "What does the playbook say?",
        options: [
          "Trade it at triple size. One good jobs print fixes the whole week.",
          "Trade it at half size as a respectful compromise with the rule.",
          "Switch to futures for the report, since the breaker technically only covers your options trades.",
          "Stand down. The weekly breaker tripped at -6%; you are flat until Monday, and today's only job is the film review."
        ],
        bestIndex: 3,
        coachNotes: "Option A is the spiral in its final form: maximum size, maximum need, minimum judgment. Option B still breaks the rule -- a breaker you can half-follow is not a breaker, it is a suggestion. Option C is loophole brain: same capital, same tilt, different wrapper; the rule is about you, not the instrument. Option D is the entire reason the rule exists -- it works hardest on exactly the days you want to override it. Cold streaks happen inside good process. Spend Friday grading the process: if the rules were followed and the losses were variance, you change nothing, and you show up Monday at full strength."
      }
    },
    {
      id: "s4e9",
      seasonId: 4,
      number: 9,
      title: "Only Take Good Bets",
      tagline: "If the math says no, the setup doesn't matter.",
      playOfTheWeek: "A trader's journal shows a 40% win rate with winners and losers both averaging $250 -- and he cannot figure out why the account keeps shrinking through what feel like decent weeks. The math could have told him on day one: minus $50 expected per trade, times four trades a week. He did not have a slump. He had a subscription.",
      gameFilm: [
        "One formula runs this entire episode: expectancy equals win rate times average win, minus loss rate times average loss. Every strategy on Earth reduces to that line. Positive number: you own a business. Negative number: you are making a recurring donation. Most traders have never once run their own numbers, and that should terrify you into running yours tonight.",
        "Here is the classic bleed. Win rate 40%, winners +$200, losers -$200 -- a one-to-one payout. Expectancy: 0.40 times 200, minus 0.60 times 200, equals minus $40 per trade. Run that play 100 times and the expected damage is $4,000. The scoreboard will lie to you some weeks, because variance pays out streaks. The math collects eventually, like the house in Vegas -- because in this setup, you are not the house.",
        "Memorize the breakeven win rates. At one-to-one payout you must win more than 50%. At two-to-one -- winners twice the size of losers -- you only need 33%. At three-to-one, just 25%. The formula: breakeven win rate equals 1 divided by 1 plus the reward-to-risk ratio. Every trade you consider sits somewhere on that table, whether you have looked or not.",
        "Now the lotto trap, because options sell it daily. Cheap out-of-the-money weeklies look like phenomenal risk-reward -- risk $50, maybe make $500! A ten-to-one payout only needs a 9% win rate to break even. But the honest odds on those far strikes are often 3-5%. The premium is cheap; the bet is expensive. Run the multiplication, not the dopamine.",
        "Flip it over and you find the steamroller -- the inverse trap. Win 95% of the time collecting $100, but lose $4,000 the other 5%: expectancy is 0.95 times 100 minus 0.05 times 4,000, which is minus $105 per trade. A strategy can post winning months for years and still be negative expectancy in disguise. High win rate is a sales pitch, not an edge.",
        "So install the good-bet checklist, three steps before every play. Estimate your win probability honestly, then shave it, because you are biased. Define the realistic win and the max loss. Multiply. If the expectancy is not clearly positive, pass -- and log the pass. Passing is a position. The best trades of a pro's season are often the ones never taken."
      ],
      takeaway: "Run the expectancy math on every play: probability times payout, both directions, before the click. A 40% win rate at one-to-one odds is a guaranteed slow bleed, and a 95% win rate can hide a steamroller. Only swing at positive math -- passing on bad bets is how good accounts stay good.",
      caseStudies: [
        {
          title: "Niederhoffer and the Steamroller",
          kind: "real",
          setup: "Victor Niederhoffer was trading royalty -- a brilliant record through the 1980s and 90s, a stint managing money alongside George Soros. One of his income strategies: selling far out-of-the-money S&P 500 puts, collecting small premiums that expired worthless month after month. The win rate was spectacular.",
          thePlay: "The strategy's math carried a hidden term: a rare, catastrophic loss whenever the market truly crashed. Weakened by earlier losses in Thai stocks during 1997, he was still short puts when the Asian crisis slammed the Dow down 554 points on October 27, 1997. The short puts exploded against him overnight.",
          outcome: "Margin calls he could not meet forced liquidation, and his funds were effectively wiped out and closed within days. Decades of brilliance, erased by one negative-expectancy structure meeting its rare day.",
          lesson: "Years of high-win-rate nickels never add up to one steamroller. Expectancy includes the rare catastrophic term whether you include it in your math or not -- and the market eventually audits everyone's arithmetic."
        },
        {
          title: "Dev's $ZYNG Lotto Subscription",
          kind: "fictional",
          setup: "Dev loved Friday lotto calls on $ZYNG, a gaming stock: $40 a ticket, pizza money, for shots at $400 or more. He hit twice in his first month and was hooked -- screenshots, confetti, the whole show.",
          thePlay: "Over six months he bought 80 of them: $3,200 in premium. His true hit rate settled around 5%, paying roughly 8-to-1 when it hit. The math his dopamine skipped: 0.05 times $320 of profit, minus 0.95 times $40 lost, equals about minus $22 per ticket.",
          outcome: "Four winners, 76 duds. Net result: roughly $1,760 gone -- a cheap habit that quietly cost more than any single bad trade he ever took.",
          lesson: "Small bets with negative math are not safe. They are just slow. The size of the ticket never fixes the sign of the expectancy."
        }
      ],
      quiz: [
        {
          id: "s4e9-q1",
          question: "Your system wins 40% of the time, with winners averaging +$300 and losers averaging -$300. What is the expectancy per trade?",
          options: ["+$60", "About zero", "-$60", "-$120"],
          correctIndex: 2,
          explanation: "0.40 times 300 is +$120; 0.60 times 300 is -$180; the sum is minus $60 per trade. At one-to-one payouts you need better than a 50% win rate, full stop. This system is a slow bleed dressed up as a strategy -- and only the formula reveals it."
        },
        {
          id: "s4e9-q2",
          question: "Your winners are three times the size of your losers (3-to-1 reward-to-risk). What win rate do you need just to break even?",
          options: ["50%", "33%", "25%", "10%"],
          correctIndex: 2,
          explanation: "Breakeven win rate is 1 divided by 1 plus the reward-to-risk ratio: 1 divided by 4 is 25%. Big asymmetric winners buy you the right to be wrong often -- this is the math that lets trend traders profit while losing most of their trades. Know your number before every play."
        },
        {
          id: "s4e9-q3",
          question: "How can a strategy that wins over 90% of the time still destroy an account?",
          options: [
            "It cannot -- a 90% win rate guarantees long-term profit",
            "Commissions eat the difference",
            "The rare losses are so large they outweigh all the small wins combined -- negative expectancy hiding behind a high win rate",
            "High win rates only fail in bull markets"
          ],
          correctIndex: 2,
          explanation: "Expectancy weighs size as well as frequency: win $100 95% of the time but lose $4,000 the other 5%, and you expect to lose about $105 per trade. That is the steamroller structure that ended Niederhoffer in 1997. A win rate without the payout numbers attached is a sales pitch, not an edge."
        }
      ],
      paperTrade: {
        id: "s4e9-pt",
        title: "Three Bets, One Math Test",
        ticker: "QQQ",
        spotPrice: 542.10,
        brief: "Friday morning, $500 of risk budget, three plays on the screen. Run the expectancy before you click. The lotto: $0.45 weekly calls well out of the money, maybe a 12% shot at tripling. The spread: risk $400 to make $600 if QQQ holds a level -- call it a coin flip. The income trade: sell a far OTM naked put for $120, wins about 92% of the time, but the bad day costs $2,000 or more.",
        choices: [
          {
            label: "The lotto: 10 contracts of the $0.45 weeklies ($450 at risk).",
            result: "They expire worthless, right on script. The math at entry: 0.12 times $900 of profit minus 0.88 times $450 is roughly minus $290 per run. The 12% timeline exists -- you just do not live in it this week.",
            pnl: -450
          },
          {
            label: "The debit spread: risk $400 to make $600 on roughly 50/50 odds.",
            result: "QQQ holds the level and the spread pays in full. The expectancy was +$100 per run -- 0.5 times 600 minus 0.5 times 400 -- and this run landed on the good side. A positive-math bet that also happened to win.",
            pnl: 600
          },
          {
            label: "The income trade: collect $120 selling the naked put.",
            result: "It expires worthless and you keep $120. Feels great. The math does not: 0.92 times 120 minus 0.08 times 2,000 is about minus $50 per run -- with a tail that can erase months in one afternoon. You won a bet you should not have made.",
            pnl: 120
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Only one of these bets had positive math, and it was the boring one. The lotto lost exactly how negative expectancy usually loses -- quietly, on schedule. The naked put WON and was still the worst decision on the board: negative expectancy with a steamroller attached. Judge every play by the math at entry, never by the result. Good bets sometimes lose and bad bets sometimes pay -- over a hundred repetitions, the math is undefeated."
      },
      scenario: {
        id: "s4e9-sc",
        title: "The Chat-Room Special",
        situation: "A popular chat room is pounding a high-conviction earnings play: calls that roughly double if it works. Reading the room's own track record on these calls, you honestly handicap it around 40% -- and after the spread and the IV crush, the payout is about one-to-one against your risk.",
        question: "The room is loud and your finger is on the trigger. What is the move?",
        options: [
          "Take it at double size -- conviction is edge.",
          "Pass, and log why: a 40% win rate at one-to-one odds is minus 20 cents of expectancy per dollar risked. The math said no.",
          "Take it small, just for the entertainment.",
          "Take it, but plan to cut at -25% to fix the bad odds."
        ],
        bestIndex: 1,
        coachNotes: "Option A doubles a negative number -- conviction does not change the odds, it just raises the stakes. Option C pays real money for entertainment; small negative bets are still subscriptions. Option D feels clever, but a tighter stop also slashes the win rate -- you get stopped on noise before the move -- so the expectancy usually gets worse, not better. Option B is the pro play, and notice it produces nothing to post in the chat: no fill, no screenshot, just edge protected. Passing on bad math is the most profitable trade most traders never learn to make."
      }
    },
    {
      id: "s4e10",
      seasonId: 4,
      number: 10,
      title: "Your Personal Risk Playbook",
      tagline: "Write the rules while you're calm. Follow them when you're not.",
      playOfTheWeek: "August 1, 2012. Knight Capital deploys broken trading code with no kill switch and no working circuit breaker. In 45 minutes the firm loses $440 million -- roughly $10 million a minute -- while staff scramble to figure out who is even authorized to shut it down. Nobody had written the rule for when do we pull the plug, so when the moment came, nobody pulled it.",
      gameFilm: [
        "Every blow-up we filmed this season had the same flaw underneath: no written rules, or rules abandoned under fire. The fix fits on one page. Your personal risk playbook -- numbers, triggers, and consequences, on paper, before Monday's open. This episode is you writing it.",
        "Rule one, max risk per play: 1-2% of the account, sized by max loss, exactly as drilled in episode two. For a $25,000 account that is $250 to $500 per play. Every play, no exceptions, conviction included -- because conviction is when the cap matters most.",
        "Rules two and three, the daily and weekly caps. Daily: around 3-4% -- two or three full losses -- and you are flat until tomorrow. Weekly: around 6%, and you are flat until Monday, paper trading only if you must scratch the itch. Check the recovery math on the worst case: a -6% week needs just a 6.4% gain to recover. Annoying, never fatal. That is the entire design goal.",
        "Rule four, the correlation cap: count your real exposure. Five 2% plays on five AI names is one 10% sector bet wearing five jerseys. Cap any single theme -- say 4% of the account at risk at one time -- so one piece of sector news cannot blow through three of your other rules at once.",
        "Rule five is the keystone: the circuit breaker. Breakers do not predict anything; they interrupt. The market itself learned this after Black Monday 1987 -- down 22.6% in one day -- and installed market-wide trading halts that still stand. Your account deserves the same engineering: mechanical triggers in numbers, not feelings, with automatic consequences attached.",
        "Now make it real: write it physically and sign it. Rules in your head get renegotiated by the tilted version of you; rules on paper taped to the monitor get a vote at the exact moment you want to ignore them. Then hold a weekly film session and grade the process, not the P&L. A rule-following losing week passes. A rule-breaking winning week gets benched -- that one is the dangerous one.",
        "Amend the playbook slowly: one change at a time, in a calm scheduled review, with at least a month of data -- and never mid-trade, never mid-drawdown. Season 4 ends where it started: picks are the highlight reel, but defense decides who is still playing in December. Write the page. Sign it. Run it."
      ],
      takeaway: "One page: max risk per play (1-2%), per day (3-4%), per week (about 6%), a correlation cap, and a circuit breaker with automatic consequences. Written while calm, followed mechanically, amended only in calm review -- never mid-drawdown. Defense wins championships, and this page is your defense.",
      caseStudies: [
        {
          title: "Paul Tudor Jones and the Sign Over the Desk",
          kind: "real",
          setup: "Paul Tudor Jones built his career on written, non-negotiable risk rules -- know the exit before entry, cut risk relentlessly, and the famous sign over his desk: LOSERS AVERAGE LOSERS. Defense first, always; the offense was allowed to play only because the defense never left the field.",
          thePlay: "That discipline kept his losses small through 1987 while his research -- mapping the market against 1929 -- said a crash was coming. When Black Monday hit on October 19, 1987 and the Dow collapsed 22.6% in a single day, Jones was positioned short, solvent, and calm while leveraged traders were carried off the field.",
          outcome: "His fund reportedly returned on the order of 125% that year, banking roughly $100 million. The same crash pushed regulators to install market-wide circuit breakers -- an institutional risk playbook written in the wreckage.",
          lesson: "The most famous winning trade of 1987 belonged to the most defensive trader in the game. The playbook does not just prevent disasters -- it keeps you solvent, steady, and on the field for the day the fat pitch finally arrives."
        },
        {
          title: "Robin's One-Page Comeback",
          kind: "fictional",
          setup: "Robin blew up a $9,000 account in year one -- no written rules, revenge trades through earnings season, the full season-ending injury. In January she funded $6,000 and taped one page to her monitor: 1.5% per play, two-loss daily breaker, -6% weekly breaker, max 3% per sector, Sunday film session.",
          thePlay: "March tested it: a three-week cold streak tripped the breakers twice and her worst week stopped at -5.8%. The page made every hard decision for her -- and when her best setup of the spring appeared, a breakout in $TENX one week after a breaker week, she was at full strength and full size to take it.",
          outcome: "She finished the year up 19% with a max drawdown under 9%. Boring, survivable, repeatable -- the first year of her trading life that never once required a miracle.",
          lesson: "The page is not there to make you rich. It is there to keep you in the game long enough for your edge to matter -- and that is what actually makes you rich."
        }
      ],
      quiz: [
        {
          id: "s4e10-q1",
          question: "What is the primary job of a personal circuit breaker?",
          options: [
            "To predict when the market is about to fall",
            "To interrupt trading mechanically after defined losses, taking the decision away from a tilted brain",
            "To maximize profits during winning streaks",
            "To replace the need for position sizing rules"
          ],
          correctIndex: 1,
          explanation: "Breakers do not forecast -- they interrupt. After defined damage, your judgment is statistically compromised, so the rule removes judgment from the equation entirely: trigger hits, trading stops, automatically. It works alongside sizing rules, never instead of them."
        },
        {
          id: "s4e10-q2",
          question: "You run a $40,000 account with a 1% per-play rule and a daily breaker at three full losses. What are your numbers?",
          options: [
            "Risk $400 per play; stop for the day at -$1,200",
            "Risk $1,200 per play; stop for the day at -$400",
            "Risk $400 per play; no daily stop needed at this size",
            "Risk $4,000 per play; stop for the day at -$12,000"
          ],
          correctIndex: 0,
          explanation: "1% of $40,000 is $400 per play, and three full losses sets the daily breaker at $1,200 -- a 3% worst day. The recovery math stays friendly: a -3% day needs only about a 3.1% gain to erase. Every number on the page exists to keep the worst day boring."
        },
        {
          id: "s4e10-q3",
          question: "When is the right time to amend your risk playbook?",
          options: [
            "Mid-trade, when you can see the rule is costing you money",
            "The night a breaker trips, while the lesson is fresh",
            "In a calm, scheduled review with at least a month of data -- one change at a time",
            "Never; the first draft must stand forever"
          ],
          correctIndex: 2,
          explanation: "Rules edited mid-trade or mid-drawdown are not amendments -- they are permission slips written by tilt. The playbook evolves, but only in the calm film session, with data, one change at a time. If a change cannot wait for Sunday, that urgency is itself the warning."
        }
      ],
      paperTrade: {
        id: "s4e10-pt",
        title: "Running the Page",
        ticker: "AAPL",
        spotPrice: 247.10,
        brief: "Monday. Your $18,000 account runs a written playbook: 1.5% per play ($270 max risk) and a daily breaker at two full losses (-$540). The morning trade stopped out: -$270. At 1 pm a clean A+ setup appears in AAPL -- calls at $2.60, and your 50% cut rule puts $130 of planned risk per contract.",
        choices: [
          {
            label: "Take it: 2 contracts, $260 of planned risk -- inside the per-play budget, breaker not yet tripped.",
            result: "The setup works and the calls run to $4.20 by the close; you exit per plan, up $320. The day ends green -- but the real win is that both the morning loss and the afternoon win followed the page.",
            pnl: 320
          },
          {
            label: "Skip it. You lost this morning, so the safest move is no more trading today.",
            result: "The setup works without you. No dollars lost -- but note the page did NOT call for standing down: one loss is not the breaker. Discipline that is stricter than the plan is still improvisation.",
            pnl: 0
          },
          {
            label: "Take 6 contracts ($780 of planned risk) to win the morning back and then some.",
            result: "The trade wins big -- $960 -- and that is the most expensive part. You just learned that breaking the page pays, about a week before the market teaches you the real lesson.",
            pnl: 960
          }
        ],
        bestChoiceIndex: 0,
        debrief: "The page says $270 per play and a breaker at two losses. One loss had occurred, a valid setup appeared, and the playbook's answer was: trade it, at size. Skipping it is the quieter mistake -- random extra caution is still randomness, and it silently costs you the A+ setups that pay for the whole system. The 6-lot won the day and poisoned the process: rewarded rule-breaking is the most dangerous outcome in trading. Run the page, both directions."
      },
      scenario: {
        id: "s4e10-sc",
        title: "The Exception Request",
        situation: "Thursday night. Your weekly breaker tripped this afternoon at -6%. Friday morning brings the most anticipated Fed decision of the year, and your analysis genuinely suggests a strong setup. Everything in you says this is the exact day the playbook was not designed for.",
        question: "What do you do with the exception request?",
        options: [
          "Trade it at full size -- rules serve you, not the other way around.",
          "Trade it at quarter size as a compromise between discipline and opportunity.",
          "Deny the exception: the breaker is on, you are flat Friday, and the setup goes in the journal. If the analysis was right, there will be evidence for the Sunday review -- and a market open on Monday.",
          "Rewrite the playbook tonight, moving the weekly breaker to -8% so tomorrow's trade is legal."
        ],
        bestIndex: 2,
        coachNotes: "Option A is every blown account's last diary entry: this time was different. Option B violates the rule while pretending not to -- breakers are binary by design, because partial breakers select for exactly the trades your tilted brain likes most. Option D is the most corrosive of all: amending rules at night, in a drawdown, to legalize tomorrow's urge -- that is not a playbook, it is a permission slip. Option C is the franchise move. The breaker's entire value is that it holds on the days you most want to override it, and a real edge does not expire over one weekend. Paper trade the Fed setup, grade it Sunday, and show up Monday at full strength. Defense wins championships."
      }
    },
  ],
};

export default season4;
