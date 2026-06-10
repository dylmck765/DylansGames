import type { Season } from "../../lib/types";

const season1: Season = {
  id: 1,
  title: "The Options Playbook",
  subtitle: "Rookie Camp Starts Now",
  description: "Ten episodes that take you from never-touched-an-option to standing on the field with a real game plan. No fluff, no jargon-dumps. Just the fundamentals, broken down like game film: what a contract is, how calls and puts score, what premium really buys you, and how to walk into your first trade with a plan instead of a prayer.",
  episodes: [
    {
      id: "s1e1",
      seasonId: 1,
      number: 1,
      title: "Welcome to The Pit",
      tagline: "You can't run the play until you know what the ball is.",
      playOfTheWeek: "January 2021. A trader who'd been pounding the table on GameStop for a year held call contracts he'd bought for a few bucks each while the stock sat under $20. When GME ripped past $300, those contracts turned roughly $50,000 of premium into tens of millions. One reason it worked: he didn't buy the stock, he bought the RIGHT to buy the stock, and that right exploded in value when the move came.",
      gameFilm: [
        "Welcome to The Pit, rookie. Before you touch a single trade, get this straight: an option is not a stock. A stock is ownership, a tiny slice of a company. An option is a CONTRACT, an agreement between two traders about a stock. You're not buying the team. You're buying a ticket that lets you make a specific play on the team later.",
        "Here's the contract in one breath. An option gives the buyer the RIGHT, but not the OBLIGATION, to buy or sell 100 shares of a stock at a set price, on or before a set date. Right, not obligation. That's the whole ballgame. You can use it, or you can walk away. Nobody can force the buyer to do anything.",
        "Two basic plays exist. A CALL is the right to BUY shares at a set price. You run that play when you think the stock is going up. A PUT is the right to SELL shares at a set price. You run that one when you think the stock is going down, or when you want insurance on shares you already own. Calls bet the over. Puts bet the under. That's it.",
        "Now flip the field. Every contract has two sides. The buyer pays money up front, called the premium, the price of admission, and gets the rights. The seller collects that premium and takes on the OBLIGATION. If the buyer exercises their right, the seller HAS to deliver. Buyer holds choices. Seller holds duties. Remember which jersey you're wearing.",
        "Why does anyone run these plays instead of just buying stock? Leverage and defined risk. One contract controls 100 shares for a fraction of what those shares cost. And if you BUY an option and the play busts, your maximum loss is the premium you paid. Not a penny more. You knew the cost of the ticket before you walked into the stadium.",
        "But hear the warning siren too. That ticket has an expiration date, the final whistle. Stocks can sit on your bench for decades waiting to come good. An option cannot. If your play doesn't happen before the clock runs out, the contract can expire worthless and the entire premium is gone. Options are a bet on direction AND time. That's what makes them powerful, and that's what makes them dangerous.",
        "This season we'll break down every piece: calls, puts, strikes, expirations, premium, and how to read the field. By Episode 10 you'll walk through a full trade from kickoff to final whistle. For now, lock in the one sentence that matters: an option is a contract that gives the buyer rights and the seller obligations, and it dies on a deadline."
      ],
      takeaway: "An option is a contract, not a stock: the buyer pays a premium for the right, never the obligation, to buy or sell 100 shares at a set price by a set date. Buyers hold rights with a known max loss. Sellers collect the premium and carry the obligation.",
      caseStudies: [
        {
          title: "GameStop, January 2021: The Contract That Shook the Field",
          kind: "real",
          setup: "Late 2020. GameStop is a left-for-dead mall retailer trading under $20, and big funds are heavily short the stock, betting it goes to zero. A small crowd of retail traders disagrees, loudly.",
          thePlay: "Instead of only buying shares, many of them bought call options, contracts giving the right to buy GME at fixed prices. Those contracts cost a fraction of the stock. When buying pressure and a short squeeze sent GME from under $20 to an intraday peak around $483 in January 2021, those cheap rights became enormously valuable. The most famous trader in the saga turned a position built partly on roughly $50,000 of call premium into tens of millions on paper.",
          outcome: "Call buyers who sold into the spike booked life-changing gains. The funds on the short side, holding obligations with no cap, lost billions, and one needed a multi-billion dollar rescue. Plenty of latecomers who bought near the top also watched their contracts expire worthless when the stock fell back.",
          lesson: "This is the contract in action: rights versus obligations. The call buyers risked only the premium they paid and held the rights. The short sellers held open-ended obligations. Same stock, same week, totally different jerseys, totally different outcomes."
        },
        {
          title: "GRDN: Dana Learns the Difference the Easy Way",
          kind: "fictional",
          setup: "Dana, a nurse who'd traded stocks for two years, loved Gardenia Home (ticker GRDN), a lawn-and-garden chain trading at $40. Spring was coming and she expected a strong season. She had $4,000 to deploy and her usual move was to buy 100 shares.",
          thePlay: "Instead, after a weekend of reading, she split the play: she bought 50 shares for $2,000, and one GRDN $42 call expiring in two months for $1.50, which cost $150 total since one contract covers 100 shares. The rest stayed on the bench in cash.",
          outcome: "GRDN climbed to $47 by the contract's final weeks. Her 50 shares gained $350. Her single call, the right to buy at $42 when the stock sat at $47, was now worth about $5.00, or $500, a $350 gain on just $150 of risk. Same dollar profit, one-thirteenth the capital.",
          lesson: "The contract did the same job as the shares with way less money on the field. But Dana also knew the flip side: if GRDN had stayed flat, her shares would have been fine and her $150 of premium would have been gone at the final whistle. Rights cost money, and they expire."
        }
      ],
      quiz: [
        {
          id: "s1e1-q1",
          question: "In plain English, what IS an option?",
          options: [
            "A small piece of ownership in a company",
            "A contract giving the buyer the right, but not the obligation, to buy or sell 100 shares at a set price by a set date",
            "A loan you take out from your broker to buy more stock",
            "A guaranteed order to buy stock at a future date"
          ],
          correctIndex: 1,
          explanation: "An option is a contract about a stock, not the stock itself. The buyer pays a premium for the RIGHT, never the obligation, to buy (call) or sell (put) 100 shares at a set price before the contract expires. Ownership is stock. Rights with a deadline are options."
        },
        {
          id: "s1e1-q2",
          question: "Who carries the OBLIGATION in an options contract?",
          options: [
            "The buyer, because they paid for the contract",
            "The stock exchange where it trades",
            "The seller, who collected the premium and must deliver if the buyer exercises",
            "Nobody, options are obligation-free for both sides"
          ],
          correctIndex: 2,
          explanation: "Premium buys rights. The buyer can exercise or walk away. The seller took that premium as payment for standing ready: if the buyer exercises, the seller MUST fulfill the contract. Buyer holds choices, seller holds duties. Never forget which jersey you're wearing."
        },
        {
          id: "s1e1-q3",
          question: "You BUY one call option and pay $200 in premium. The trade goes completely wrong. What's the most you can lose?",
          options: [
            "$200, the premium you paid",
            "Unlimited, options can lose more than you invest",
            "$20,000, the value of the 100 shares",
            "It depends on how far the stock falls"
          ],
          correctIndex: 0,
          explanation: "When you BUY an option, your maximum loss is the premium, period. The worst case is the contract expiring worthless and your $200 ticket going in the trash. Undefined risk lives on the selling side, not the buying side. Defined risk is the rookie's best friend."
        }
      ],
      paperTrade: {
        id: "s1e1-pt",
        title: "First Snap: Stock, Right, or Wrong Direction?",
        ticker: "AAPL",
        spotPrice: 210,
        brief: "Apple sits at $210 and you're bullish over the next six weeks after a strong product cycle. You've got a small account and this is your first time even looking at an options chain. Three plays on the board. Call it.",
        choices: [
          {
            label: "Buy 1 AAPL $230 call expiring THIS Friday for $0.30 ($30 total). It's cheap!",
            result: "AAPL drifts up to $213 by Friday. Nice call on direction! But $230 was a mile away and the clock hit zero. The contract expires worthless. Cheap tickets to impossible games are still wasted money.",
            pnl: -30
          },
          {
            label: "Buy 1 AAPL $215 call expiring in 45 days for $4.20 ($420 total), planning to sell if the move comes early.",
            result: "AAPL climbs to $219 over four weeks. Your right to buy at $215 is now worth about $6.40 with time still on the clock. You sell the contract for $640. Direction right, time right, ticket cashed.",
            pnl: 220
          },
          {
            label: "Skip the calls. Buy 1 AAPL $195 put for $2.10 ($210 total) because what goes up must come down.",
            result: "You bet the under on a stock you were bullish on. AAPL rises to $219 and your put, the right to SELL at $195, bleeds out. You salvage $70 selling it late. Fighting your own thesis is a fumble every time.",
            pnl: -140
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two wins because it matched all three dials: direction (bullish, bought a call), a strike the stock could realistically reach ($215, just above the $210 spot), and enough time for the play to develop (45 days). Play one had the right direction but an absurd strike and no clock. Play three bought the wrong contract entirely. An option is a bet on direction AND time AND distance. Set all three or don't snap the ball."
      },
      scenario: {
        id: "s1e1-sc",
        title: "The Hot Tip",
        situation: "Your buddy texts you: 'Bro. BLITZ calls. Expiring Friday. Easy 10x, everyone in the group chat is loading up.' You have $500 in your account. You have never bought an option before and you genuinely could not explain what a call is to a stranger.",
        question: "What's the pro move?",
        options: [
          "Throw the whole $500 in. Fortune favors the bold and the group chat is never wrong.",
          "Buy just $100 worth so you can 'learn by doing' on a trade you don't understand.",
          "Pass on the trade, pull up the contract, and study it: what's the strike, when's expiration, what has to happen for it to pay. Paper trade it and watch.",
          "Send your buddy the $500 and let him run the play for you since he clearly knows more."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the only disciplined play on the board. You lose nothing, and you gain the exact education this trade is offering for free: watch what the contract does into Friday and you'll learn more than any blown $500 would teach you. Option one is gambling with extra steps; an expiring-Friday lottery ticket on a tip is how rookies donate to the market. Option two sounds humble but it's the same mistake at a discount; you don't learn from a trade you can't explain, you just lose slower. Option four hands your money AND your education to someone else, which is the worst trade of all. Rule one in The Pit: never run a play you can't draw on the whiteboard."
      }
    },
    {
      id: "s1e2",
      seasonId: 1,
      number: 2,
      title: "Calls: Betting the Over",
      tagline: "When you like the team, you don't have to buy the franchise.",
      playOfTheWeek: "May 2023. NVIDIA closes around $305 before earnings, then drops guidance so monstrous the stock gaps up roughly 24% overnight. Traders holding even modestly out-of-the-money calls woke up to contracts worth ten and twenty times what they paid. The reason it hit so hard: a call's gains aren't capped, and a gap that size blew through every nearby strike on the board.",
      gameFilm: [
        "Episode 2, and we're running the most popular play in the book: the long call. Buying a call means paying a premium for the right to BUY 100 shares at a fixed price, the strike, any time before expiration. You're betting the over. You think the stock is going up, and you want a bigger payoff than just owning shares.",
        "How do you actually win? The stock has to climb. As it rises above your strike, your right to buy at the old, lower price gets more and more valuable. Hold a $100-strike call when the stock hits $110, and you control the right to buy at $100 what everyone else pays $110 for. That right is worth at least $10 per share, $1,000 per contract.",
        "Mark the breakeven line on the field. At expiration, you need the stock above your strike PLUS the premium you paid to walk away a winner. Pay $3 for a $100 call, and at the final whistle the stock needs to be over $103. Above the strike but under $103? The contract has some value, but less than your ticket cost. Below $100? Worthless. Know your line before kickoff.",
        "Now the headline act: leverage. Say a stock trades at $120 and you've got $1,200. That buys you 10 shares. Or it buys you two call contracts controlling 200 shares. If the stock jumps 15%, your 10 shares make about $180. The calls? They can double or triple, because every dollar above the strike flows straight into a contract you paid a few bucks for. Same field, same move, way bigger swing per dollar.",
        "But leverage is a two-way blitz. Those same shares, if the stock goes nowhere, are still worth $1,200. The calls bleed value every single day the stock stands still, because the clock is part of the contract. And if the stock is below your strike at expiration, the calls go to zero. One hundred percent loss. Shares rarely do that. Calls do it all the time.",
        "So here's the pro frame: a long call is a defined-risk bet that a stock makes a specific move before a specific date. Your max loss is the premium, the price of admission. Your upside is uncapped. That trade-off, capped downside, open-ended upside, time working against you, is the entire character of the long call. Respect all three parts, not just the fun one."
      ],
      takeaway: "A long call is the right to buy 100 shares at the strike price, and it pays when the stock climbs past your strike by more than the premium before the final whistle. Leverage means a small stake can swing big in both directions: uncapped upside, but a 100% loss if the stock isn't there at expiration.",
      caseStudies: [
        {
          title: "NVIDIA, May 2023: The Guidance Heard Round the World",
          kind: "real",
          setup: "Spring 2023. The AI wave is building and NVIDIA reports earnings on May 24 with the stock around $305. Options into the print are active, with plenty of traders holding calls at strikes like $320 and $350 that look ambitious.",
          thePlay: "NVIDIA didn't just beat earnings. It guided next-quarter revenue roughly 50% above what Wall Street expected, a number so far outside the playbook that the stock gapped to around $380 the next morning, up about 24%, adding roughly $200 billion in market value overnight.",
          outcome: "Calls that were out of the money at the close were suddenly deep in the money at the open. Contracts bought for a few hundred dollars were worth thousands. A $320-strike call went from a hopeful ticket to $60 of intrinsic value, around $6,000 per contract, in one sleep. Of course, traders holding puts into that print were wiped to near zero just as fast.",
          lesson: "This is the long call's signature: defined risk, uncapped upside. The most a call buyer could lose that night was their premium. What they could make had no ceiling, and on a 24% gap, no ceiling mattered. The same leverage that makes this story legendary deletes premium just as efficiently when the gap goes the other way."
        },
        {
          title: "BLITZ: Marcus and the Two Tickets",
          kind: "fictional",
          setup: "Marcus, a junior accountant, was sure Blitzware (ticker BLITZ), a gaming company at $80, would run into its big console launch two months out. He had $800 of risk capital, money he could truly afford to lose, and a decision to make.",
          thePlay: "He bought one BLITZ $85 call expiring in 75 days for $4.00, costing $400, and kept $400 in reserve. His roommate Theo, equally bullish, spent his whole $800 on twenty $110 calls expiring in two weeks at $0.40 apiece, sneering that Marcus was playing scared.",
          outcome: "BLITZ climbed steadily and hit $96 a week before Marcus's expiration. His $85 call was worth about $11.50, and he sold for a $750 profit, nearly doubling his stake. Theo's $110 calls expired worthless six weeks before the move finished, a 100% loss, because the stock never got near $110 on his two-week clock.",
          lesson: "Both rookies were RIGHT about the stock. Only one got paid. Leverage rewarded the trader who gave the play room on the clock and a strike within reach. The long call isn't just a bet that you're right, it's a bet on when and by how much."
        }
      ],
      quiz: [
        {
          id: "s1e2-q1",
          question: "You buy a call with a $50 strike for a $2.00 premium. At expiration, where does the stock need to be for you to break even?",
          options: [
            "$50, right at the strike",
            "$48, the strike minus the premium",
            "$52, the strike plus the premium",
            "Anywhere above $50 means you've made money"
          ],
          correctIndex: 2,
          explanation: "Breakeven at expiration for a long call is strike plus premium: $50 + $2 = $52. At $51, your right to buy at $50 is worth $1, but you paid $2 for it, so you're still down. Above $50 the contract has value; above $52 the TRADE makes money. Know the difference."
        },
        {
          id: "s1e2-q2",
          question: "You buy 1 call with a $50 strike for $2.00 per share ($200 total). At expiration the stock is at $55. What's your profit?",
          options: [
            "$500",
            "$300",
            "$200",
            "$5"
          ],
          correctIndex: 1,
          explanation: "At expiration the call is worth its intrinsic value: $55 - $50 = $5 per share, or $500 per contract. You paid $200, so profit is $500 - $200 = $300. Always run the math through the 100-share multiplier and subtract the price of admission."
        },
        {
          id: "s1e2-q3",
          question: "What does 'leverage' mean for a call buyer, in plain English?",
          options: [
            "Your broker lends you money to buy the stock",
            "A small premium controls 100 shares, so percentage gains AND losses are amplified compared to owning stock",
            "Your gains are amplified but your losses are protected by the exchange",
            "You can never lose more than the stock itself would have lost"
          ],
          correctIndex: 1,
          explanation: "Leverage cuts both ways. One contract controls 100 shares for a fraction of their cost, so a winning move can return multiples of your premium. But a flat or falling stock can take the contract to zero, a 100% loss, while shareholders barely feel it. Amplified is amplified, in both directions."
        }
      ],
      paperTrade: {
        id: "s1e2-pt",
        title: "The Leverage Decision",
        ticker: "NVDA",
        spotPrice: 120,
        brief: "NVIDIA trades at $120 and you're bullish over the next two months as the product cycle heats up. You have $1,500 of risk capital. Three ways to bet the over. Pick your play.",
        choices: [
          {
            label: "Buy 12 shares of NVDA for $1,440 and just own the stock.",
            result: "NVDA runs to $138 over seven weeks, a 15% move. Your 12 shares gain $18 each: a solid $216, up 15%. Nothing wrong with it, but you brought a jogging pace to a sprint.",
            pnl: 216
          },
          {
            label: "Buy 1 NVDA $125 call expiring in 60 days for $6.00 ($600), keep $900 in reserve.",
            result: "NVDA runs to $138 with two weeks left on the contract. Your $125 call is worth about $13.50. You sell for $1,350, a $750 profit, 125% on the premium, with less than half your capital ever at risk.",
            pnl: 750
          },
          {
            label: "Buy 2 NVDA $150 calls expiring in 10 days for $0.40 each ($80 total). Maximum lottery.",
            result: "NVDA inches to $124 over those 10 days, then makes its big run AFTER your contracts are dead. Right thesis, wrong clock, strike on another planet. Both expire worthless.",
            pnl: -80
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two is the textbook long call: a strike just above spot that the stock can plausibly reach, 60 days for the thesis to play out, and well over double the percentage return of the shares while risking only $600. Play one is respectable but ignores the whole reason you'd reach for options: capital efficiency. Play three is the rookie classic, confusing 'cheap' with 'good.' Those $0.40 calls needed a 25% move in 10 days. The lesson isn't that lottery tickets never hit. It's that they're priced like lottery tickets for a reason."
      },
      scenario: {
        id: "s1e2-sc",
        title: "Up 60% With Three Weeks Left",
        situation: "You bought a call for $300 betting on a product announcement. The announcement happened, it was great, and the stock popped. Your call is now worth $480, up 60%. There are three weeks until expiration and your original thesis, the announcement, has fully played out. The group chat says it's going higher.",
        question: "What do you do with the position?",
        options: [
          "Hold to expiration. Never sell a winner; max gains only.",
          "Sell the call, or at least most of the position. The thesis played out and the profit is on the table.",
          "Double down. Buy another call with the profits since momentum is hot.",
          "Roll the whole position into next week's far out-of-the-money calls to leverage the leverage."
        ],
        bestIndex: 1,
        coachNotes: "Option two is the pro move. You bought the call FOR the announcement; the announcement came and paid you. With the catalyst gone, every remaining day is pure clock-bleed on a contract whose reason for existing is over. Option one confuses a stock mindset with an options mindset: stocks can wait forever, your contract can't, and a 60% gain can melt to zero in three flat weeks. Option three adds risk exactly when your edge has expired. Option four is the same mistake with a flamethrower, swapping a realized win for the lowest-probability tickets on the board. Pros trade the thesis. When the thesis is done, the trade is done."
      }
    },
    {
      id: "s1e3",
      seasonId: 1,
      number: 3,
      title: "Puts: Profiting From the Drop",
      tagline: "Defense wins championships, and sometimes it scores.",
      playOfTheWeek: "February 2020. While most of the market partied at all-time highs, a handful of funds quietly paid small premiums for deep protection on the S&P 500. Five weeks later the index had crashed 34% on COVID panic, and one tail-risk fund reported returns in the thousands of percent on its hedges. The reason: puts get explosively valuable exactly when everything else is on fire.",
      gameFilm: [
        "Time to learn defense. A put is the mirror image of a call: it's the right, not the obligation, to SELL 100 shares at the strike price before expiration. You buy a put when you think a stock is going DOWN, or when you own shares and want insurance against a drop. Calls bet the over. Puts bet the under.",
        "How does a put score? The stock falls below your strike. Hold a $100-strike put when the stock drops to $85, and you own the right to sell at $100 something the market only pays $85 for. That right is worth at least $15 per share, $1,500 per contract. The further the stock falls, the more your put is worth, all the way down to the stock hitting zero.",
        "Breakeven works in reverse. At expiration you need the stock BELOW the strike MINUS the premium. Pay $3 for a $100 put, and the stock needs to be under $97 at the final whistle for the trade to profit. And just like calls, your max loss as a buyer is the premium. The stock can rocket to the moon and you only lose your ticket price.",
        "Now, the two jerseys you can wear with a put. Jersey one: speculation. You think a stock is overcooked and headed down, so you buy a put as a pure bet on the drop. This is how traders profit from declines without shorting stock, and the difference matters: a short seller's risk is unlimited, because a stock can rise forever. A put buyer's risk is the premium. Full stop.",
        "Jersey two: insurance, what pros call a protective put. You own 100 shares and you're worried about a rough stretch, earnings, a court ruling, a shaky market. Buy a put and you've locked in a worst-case exit price. Own shares at $100, buy the $95 put for $2, and no matter what happens, you can sell at $95. Your worst case is a $5 share loss plus the $2 premium: $700 total, defined and capped. It's homeowner's insurance for your portfolio. You pay the premium hoping you never need it.",
        "One mindset warning before we break huddle: because puts pay when things fall, rookies start seeing crashes everywhere and bleeding premium on doom bets that never land. Markets rise more often than they collapse, and put premium evaporates on the clock just like call premium. Buy puts when you have a real bearish thesis or a real asset to protect, not because being scared feels smart."
      ],
      takeaway: "A put is the right to sell 100 shares at the strike, and it gains value as the stock falls, with max loss capped at the premium. Use it as a defined-risk bet on a drop, or as insurance that locks in a worst-case sale price for shares you own.",
      caseStudies: [
        {
          title: "The COVID Crash, March 2020: When Insurance Paid 100-to-1",
          kind: "real",
          setup: "February 19, 2020. The S&P 500 closes at a record high near 3,390. A virus is in the headlines but the market is shrugging. Put protection on the index is cheap, because in a calm, rising market, almost nobody wants to pay for insurance.",
          thePlay: "A small number of funds and traders bought S&P puts and other crash protection anyway, paying modest premiums for rights that would only matter in a disaster. Then the disaster came: in just over a month, the index collapsed roughly 34% to around 2,237 on March 23, one of the fastest crashes in history.",
          outcome: "Those cheap puts became some of the most valuable contracts on the planet. One well-known tail-risk fund reported a return in the thousands of percent on its hedging strategy for the quarter, reportedly turning a sliver of client capital into billions in protection payouts. Meanwhile, unhedged portfolios took the full 34% hit.",
          lesson: "Puts are the only player on your roster whose value explodes when everything else is bleeding. The insurance frame is exact: premiums feel like wasted money in good times, and then one bad month pays for years of it. History, not advice, but history worth remembering."
        },
        {
          title: "HARBR: Priya Buys the Umbrella Before the Storm",
          kind: "fictional",
          setup: "Priya had 100 shares of Harbor Logistics (ticker HARBR) at $60, up big from her $35 cost basis. A regulatory ruling on shipping fees was due within a month, and analysts said it could swing the stock 20% either way. She didn't want to sell, taxes and conviction said hold, but a 20% drop would sting.",
          thePlay: "She bought one HARBR $55 put expiring in six weeks for $1.80, costing $180. Now she held the right to sell her 100 shares at $55 no matter what the ruling said. Worst case was locked: lose $5 a share from $60, plus the $180 ticket.",
          outcome: "The ruling came in ugly and HARBR cratered to $44. Her shares lost $1,600 of value, but her put, the right to sell at $55 with the stock at $44, was now worth about $11, or $1,100. Net damage: roughly $680 instead of $1,600. Her neighbor in the same stock with no insurance ate the whole drop.",
          lesson: "The protective put didn't make the bad news good. It made the bad news SURVIVABLE and pre-priced. That's the whole pitch: you pay a known small cost to delete the unknown big one. Priya kept her shares, kept her conviction, and slept through the storm."
        }
      ],
      quiz: [
        {
          id: "s1e3-q1",
          question: "A long put makes money at expiration when...",
          options: [
            "The stock rises above the strike plus the premium",
            "The stock falls below the strike minus the premium",
            "The stock stays exactly at the strike price",
            "The stock moves in any direction, as long as it moves"
          ],
          correctIndex: 1,
          explanation: "A put is the right to SELL at the strike, so it pays as the stock falls. At expiration you need the stock below strike minus premium: pay $3 for a $100 put and your breakeven is $97. The deeper the drop below that line, the bigger the score."
        },
        {
          id: "s1e3-q2",
          question: "What's the key risk difference between buying a put and shorting 100 shares of stock?",
          options: [
            "There's no difference, they're identical bets",
            "Shorting stock has capped risk while puts have unlimited risk",
            "The put buyer's max loss is the premium, while a short seller's loss is unlimited if the stock keeps rising",
            "Puts profit when stocks rise, shorts profit when stocks fall"
          ],
          correctIndex: 2,
          explanation: "Both bet on a drop, but the jerseys are different. A short seller loses dollar-for-dollar forever as a stock climbs, and there's no ceiling on a stock price. A put buyer betting the same drop can only ever lose the premium paid. Defined risk versus undefined risk: that's why rookies betting the under should learn puts first."
        },
        {
          id: "s1e3-q3",
          question: "You own 100 shares bought at $100 and buy a $95-strike put for $2.00 ($200) as insurance. The stock crashes to $80. Counting shares and put together, what's your approximate worst-case total loss?",
          options: [
            "$700: $5 per share down to the $95 floor, plus the $200 premium",
            "$2,000: the full drop from $100 to $80",
            "$200: just the premium, the shares are fully protected",
            "$500: the drop from $100 to $95 only"
          ],
          correctIndex: 0,
          explanation: "The put guarantees you can sell at $95, so the most your shares can effectively lose is $5 each, $500, no matter how far the stock falls. Add the $200 you paid for the insurance and your worst case is $700 instead of $2,000. The premium is the cost of the floor; the floor is the whole point."
        }
      ],
      paperTrade: {
        id: "s1e3-pt",
        title: "Betting the Under",
        ticker: "TSLA",
        spotPrice: 250,
        brief: "Tesla has ripped 40% in two months to $250 and your analysis says the run is exhausted: deliveries look soft and the chart is rolling over. You want to bet on a pullback over the next six weeks. Three ways to play defense as offense.",
        choices: [
          {
            label: "Short 10 shares of TSLA at $250. Classic bear play.",
            result: "TSLA drops to $228 and your short makes $220. It worked this time, but you spent six weeks exposed to unlimited risk on a stock famous for face-ripping rallies. One surprise headline and this play loses multiples of what it just made.",
            pnl: 220
          },
          {
            label: "Buy 1 TSLA $240 put expiring in 45 days for $9.00 ($900).",
            result: "TSLA slides to $228 over three weeks. Your right to sell at $240 is worth about $14.50 with weeks still on the clock. You sell for $1,450, banking $550 with your risk capped at $900 the entire time.",
            pnl: 550
          },
          {
            label: "Buy 1 TSLA $180 put expiring THIS week for $0.60 ($60). Crash insurance, lottery pricing.",
            result: "TSLA dips to $238 by Friday, a real pullback, but nowhere near $180 in five days. The contract expires worthless. You predicted rain and bought flood insurance for a different city.",
            pnl: -60
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two matched the thesis to the contract: a moderate pullback called for a strike near the money ($240) and enough clock (45 days) for it to happen. It captured the move with strictly capped risk. Play one made similar money but wore the unlimited-risk jersey the whole time, which is exactly the exposure puts exist to avoid. Play three is the doom-lottery trap: a $70 drop in a week is a crash, and you don't bet on crashes, you occasionally insure against them. Right idea, unplayable contract."
      },
      scenario: {
        id: "s1e3-sc",
        title: "Earnings Week Jitters",
        situation: "You own 100 shares of a stock at $90, up nicely from your $70 buy. Earnings hit in two weeks and the last two reports moved the stock more than 15% each time. You believe in the company long-term but a bad print could vaporize months of gains. A $85-strike put expiring just after earnings costs $2.50 ($250).",
        question: "What's the disciplined play?",
        options: [
          "Sell all 100 shares now and buy back after earnings. Can't lose if you're not playing.",
          "Do nothing. You're a long-term investor and insurance is for cowards.",
          "Buy the $85 put as a protective put: pay $250 to cap your downside through the event while keeping all your upside.",
          "Sell your shares AND buy puts so you profit huge if it tanks."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the textbook protective put: for $250 you lock in the right to sell at $85, capping your worst case at roughly $750 of give-back while leaving your shares free to run if earnings smash. That's insurance doing its one job. Option one isn't crazy, but it abandons your long-term thesis, can trigger taxes, and you lose the upside if the print is great; you said you believe in the company, so act like it. Option two confuses conviction with exposure; long-term faith doesn't require eating every 15% air pocket unprotected when a defined-cost floor is available. Option four is no longer hedging, it's a brand-new bearish bet that contradicts your own thesis. Insurance protects the play. It isn't the play."
      }
    },
    {
      id: "s1e4",
      seasonId: 1,
      number: 4,
      title: "The Contract",
      tagline: "Strike, clock, and the multiplier: read the fine print or pay the fine.",
      playOfTheWeek: "November 2020. The S&P committee announces Tesla will join the index in December, and the stock starts a 60%+ sprint into the inclusion date. Traders holding December and January calls rode the whole run; traders holding calls that expired in late November watched the biggest leg happen days after their contracts died. Same thesis, same stock, and the expiration date decided who got paid.",
      gameFilm: [
        "Every option contract has three numbers you must read before you ever click buy: the strike, the expiration, and the multiplier. Miss any one of them and you're running onto the field without a helmet. Today we read the fine print, line by line.",
        "First, the strike price. That's the locked-in price the contract revolves around: the price you can BUY shares at with a call, or SELL shares at with a put. Strikes come in fixed steps set by the exchange, every dollar, every $2.50, every $5 depending on the stock. The strike you pick defines how far the stock has to travel for your play to score. It's the yard line you're betting the offense reaches.",
        "Second, the expiration date: the final whistle. Most stocks list contracts expiring every Friday for the next several weeks, then monthlies stretching out a year or more. After the closing bell on expiration day, the contract is settled or it's gone. There is no overtime. A thesis that plays out the Monday AFTER your Friday expiration pays you exactly nothing. When you pick an expiration, you are answering the question: by WHEN does my move have to happen?",
        "Third, and this one empties rookie accounts: the multiplier. One standard option contract controls 100 shares. Every price you see on an options chain is quoted PER SHARE, so the real cost is the quote times 100. A call quoted at $2.50 costs $250. Quoted at $30.00? That contract costs $3,000. Rookies see '$2.50' and think pocket change, then buy ten contracts and discover they just spent $2,500. The quote is per share. The trade is times 100. Tattoo it somewhere.",
        "Put the three together and you can read any contract like a box score. 'AAPL June 20 $215 call at $4.20' means: the right to buy 100 shares of Apple at $215 each, any time until June 20, for a total ticket price of $420. One line, full play. Strike tells you the target, expiration tells you the deadline, multiplier tells you the cost and the size.",
        "Last detail for the film room: one contract means real size. Controlling 100 shares of a $200 stock is $20,000 of exposure. That's why options are capital-efficient, and it's why 'just one contract' is not automatically a small position. Size your plays by the premium at risk and the exposure you're controlling, not by the contract count. The fine print isn't the boring part of the contract. It IS the contract."
      ],
      takeaway: "Every contract is three numbers: the strike (your target price), the expiration (your deadline, with no overtime), and the multiplier (every quote is per share, times 100 per contract). Read all three before you click, because a $2.50 quote is a $250 trade and a perfect thesis with the wrong expiration pays zero.",
      caseStudies: [
        {
          title: "Tesla Joins the S&P 500: A Lesson Written in Expiration Dates",
          kind: "real",
          setup: "November 16, 2020. After months of speculation, the index committee announces Tesla will join the S&P 500 on December 21. Index funds will be forced to buy tens of billions of dollars of the stock by that date. The market knows a wave of buying is coming, and it knows exactly when.",
          thePlay: "Tesla ran from around $408 on the announcement to roughly $695 on inclusion day, a 60%+ sprint in five weeks. Call buyers had to pick a deadline. Traders who chose December or January expirations gave the play room to reach the known catalyst date. Traders who grabbed cheaper calls expiring in late November had contracts that died with weeks of the rally, including the steepest leg, still to come.",
          outcome: "The December and January call holders caught one of the great momentum runs of that era, with some contracts up many hundreds of percent. The short-dated crowd often made something on the early move, but their contracts hit the final whistle before the play finished, and some out-of-the-money November strikes expired worthless even though the thesis was dead right.",
          lesson: "The catalyst had a DATE on it, and the smart money matched the expiration to the date. When your thesis has a calendar, your contract must cover the calendar. Expiration isn't a detail; it's half the bet."
        },
        {
          title: "FRGT: The Decimal Point That Ate Devon's Paycheck",
          kind: "fictional",
          setup: "Devon, three weeks into options, loved Freightline Robotics (ticker FRGT) at $140 ahead of a product demo. He found a $145 call quoted at $6.50 and, thinking like a stock trader, figured ten contracts at '$6.50 each' would cost him about $65.",
          thePlay: "He typed in 10 contracts and smashed buy. The order filled for $6,500, his entire account and then some on margin, because $6.50 per share times 100 shares times 10 contracts is $6,500. He'd accidentally taken control of 1,000 shares, $140,000 of exposure, on a position he thought was lunch money.",
          outcome: "FRGT wobbled down 3% the next day and his position dropped over $2,000. Panicked and over-levered, Devon dumped everything at a $2,400 loss. The demo a week later was a hit, the stock popped, and the calls he'd panic-sold would have doubled. The multiplier didn't just cost him money; it forced him out of a winning play.",
          lesson: "Devon's thesis was fine. His sizing was a catastrophe because he never multiplied by 100. The quote is per share; the contract is 100 shares; the order ticket shows the real cost before you confirm. Read it. Every single time."
        }
      ],
      quiz: [
        {
          id: "s1e4-q1",
          question: "A call option is quoted at $2.50. What does ONE contract actually cost (ignoring fees)?",
          options: [
            "$2.50",
            "$25",
            "$250",
            "$2,500"
          ],
          correctIndex: 2,
          explanation: "Options quotes are per share, and one standard contract controls 100 shares. $2.50 times 100 = $250. The fastest way rookies blow up is treating the quote like the price. The quote is per share. The trade is times 100."
        },
        {
          id: "s1e4-q2",
          question: "What does the STRIKE price of a call option represent?",
          options: [
            "The price you paid for the option contract",
            "The fixed price at which you have the right to BUY the shares",
            "The stock's price on the day you bought the option",
            "The price the stock is guaranteed to reach"
          ],
          correctIndex: 1,
          explanation: "The strike is the locked-in transaction price the contract gives you rights at: buy at the strike for calls, sell at the strike for puts. What you paid for the contract is the premium, a different number entirely. The strike is the yard line your play is measured against."
        },
        {
          id: "s1e4-q3",
          question: "Your call expires Friday. The stock makes exactly the move you predicted... the following Monday. What happens?",
          options: [
            "The contract automatically extends since your thesis was right",
            "You get paid Monday because the move happened close enough",
            "Your contract expired at Friday's close; if it finished worthless, you lost the full premium and Monday's move pays you nothing",
            "The broker refunds half your premium for a near miss"
          ],
          correctIndex: 2,
          explanation: "Expiration is the final whistle, and there is no overtime in this league. The contract lives until the close on expiration day and not one second longer. A correct thesis on the wrong clock is a losing trade, which is why your expiration must cover the timeline of your thesis, with room to spare."
        }
      ],
      paperTrade: {
        id: "s1e4-pt",
        title: "Same Strike, Three Clocks",
        ticker: "MSFT",
        spotPrice: 420,
        brief: "Microsoft sits at $420 and you expect a climb to the mid-430s sometime in the next month on cloud momentum, though you can't pin the exact week. You like the $430 strike. Now pick the contract, because the same strike comes with three very different clocks and price tags.",
        choices: [
          {
            label: "Buy 1 MSFT $430 call expiring THIS Friday, quoted at $1.10 ($110). Cheapest ticket on the board.",
            result: "MSFT grinds to $424 by Friday: right direction, not enough, no time. The contract expires worthless. The move you predicted arrives the following week, and you watch it from the bench.",
            pnl: -110
          },
          {
            label: "Buy 1 MSFT $430 call expiring in 45 days, quoted at $7.00 ($700).",
            result: "MSFT reaches $436 three weeks in. With time still on the clock, your call trades at about $10.50 and you sell for $1,050. The $700 ticket cost more for a reason: it covered your actual timeline.",
            pnl: 350
          },
          {
            label: "Buy 1 MSFT $430 call quoted at $5.00, eyeballing the price and assuming the total cost is $5. Slam buy without reading the order ticket.",
            result: "The fill costs $500, five weeks of your budgeted risk in one click, and the position is bigger than you planned. Rattled, you dump it on the first 2% dip for $2.60. The multiplier and the panic, not the thesis, wrote this loss.",
            pnl: -240
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two wins on fine print. Your thesis said 'mid-430s within a month, timing fuzzy,' so the contract needed to outlive the fuzziness: 45 days covers it with margin. Play one bought a deadline your own thesis didn't support, the most common contract-reading error in the rookie book. Play three is the multiplier trap plus its evil twin, emotional sizing: a position you misunderstand is a position you'll mismanage. Strike, clock, cost times 100. Three numbers, every trade, no exceptions."
      },
      scenario: {
        id: "s1e4-sc",
        title: "The Order Ticket Double-Take",
        situation: "You've budgeted $300 of risk for a trade idea. You find a call quoted at $3.00 and set up an order for 10 contracts, thinking 10 times $3 is $30, a steal. Just before you hit confirm, the order ticket flashes an estimated cost of $3,000.",
        question: "What's the pro move?",
        options: [
          "Confirm anyway. The platform is probably displaying it weird and it'll sort itself out.",
          "Stop. Recognize the per-share quote times the 100-share multiplier means each contract is $300, resize the order to 1 contract, and re-check the ticket before submitting.",
          "Switch to a different option quoted at $0.30 so 10 contracts only costs $300, regardless of strike or expiration.",
          "Confirm the order but plan to sell half tomorrow to fix the sizing."
        ],
        bestIndex: 1,
        coachNotes: "Option two is the only answer. The ticket did its job: quote times 100 means one contract IS your entire $300 budget, so one contract is the trade. The pause-and-recheck habit costs five seconds and saves accounts. Option one, ignoring a 10x cost discrepancy on a hunch, is how Devon stories happen; the platform isn't wrong, your mental math is. Option three fixes the dollar amount by destroying the trade: a $0.30 option is a different strike or a dying clock, a completely different bet you haven't analyzed, chosen purely because the number fit. Option four means knowingly taking 10x your planned risk overnight, and 'I'll fix it tomorrow' is not a risk plan. When the ticket surprises you, the ticket is the teacher."
      }
    },
    {
      id: "s1e5",
      seasonId: 1,
      number: 5,
      title: "Premium: The Price of Admission",
      tagline: "Every ticket has two ingredients. One of them melts.",
      playOfTheWeek: "June 2021. AMC rockets from $12 to a peak near $72, and call premiums go thermonuclear: traders paid massive prices for contracts because hype was priced into every ticket. When the frenzy cooled, the stock barely fell at first, but those bloated premiums collapsed anyway. The reason: most of that price was hope, not value, and hope melts.",
      gameFilm: [
        "Today we break down what you're actually paying for. The premium, the price of admission, isn't one number. It's two ingredients baked into one ticket: intrinsic value and extrinsic value. Learn to split every premium into those two parts and you'll instantly understand options pricing better than most rookies ever do.",
        "Intrinsic value is the real, right-now value: what the contract would be worth if it were exercised this second. For a call, it's the stock price minus the strike, when the stock is above the strike. Stock at $105, call strike at $100: that right to buy $105 stock for $100 is worth $5 of pure substance. For a put, flip it: strike minus stock price. If that math comes out negative, intrinsic value is just zero. It never goes below zero, because a right you wouldn't use is simply a right you don't use.",
        "Extrinsic value is everything else, and 'everything else' means possibility. Take that $100-strike call trading at $7 with the stock at $105. Five dollars is intrinsic. The other $2? That's the market charging you for what MIGHT happen before expiration: the chance the stock keeps climbing. More time on the clock means more extrinsic value, because more can happen. Wilder, more volatile stocks carry more extrinsic value too, because their 'might happen' is bigger.",
        "Here's the part that pays your tuition: extrinsic value MELTS. Every day that passes, the 'what might happen' window shrinks, so that part of the premium drains away. Traders call it time decay. At expiration, the melt is total: extrinsic hits zero and a contract is worth exactly its intrinsic value. Nothing more. The final whistle doesn't care what might have been.",
        "This explains the rookie heartbreaker: you buy a call, the stock inches up, and your option LOSES money. How? The stock's crawl added less intrinsic value than the clock melted off in extrinsic. You were right on direction and still lost, because you paid for a big 'maybe' and got a small 'yes.' When you buy an option, the stock doesn't just need to move your way. It needs to move your way faster than your premium melts.",
        "So read every premium like a pro: how much of this ticket is substance, and how much is hope? A deep in-the-money call might be 90% intrinsic, sturdy stuff that moves with the stock. A cheap out-of-the-money call is 100% hope, all of it melting daily. Neither is automatically wrong, but you'd better know which one you're holding, and the only way to know is to do the two-ingredient split before you buy."
      ],
      takeaway: "Premium = intrinsic value (the real, exercise-it-now value) + extrinsic value (the price of time and possibility). Extrinsic melts every day and hits zero at the final whistle, so an option buyer needs the stock to move enough to outrun the melt, not just move in the right direction.",
      caseStudies: [
        {
          title: "AMC, June 2021: Paying $20 for $0 of Substance",
          kind: "real",
          setup: "June 2021. AMC explodes from around $12 to an intraday peak near $72 in days as the meme-stock crowd piles in. Everyone wants calls, and options market makers respond the only way they can: by jacking up extrinsic value to historic levels. Hype is now an ingredient with a price tag.",
          thePlay: "At the frenzy's peak, out-of-the-money AMC calls, contracts with ZERO intrinsic value, traded for enormous premiums, sometimes $10, $20 or more per share for strikes the stock had never reached. Buyers were paying pure extrinsic: a very expensive 'maybe.' When the mania cooled, that possibility-pricing deflated fast.",
          outcome: "Traders who bought those inflated calls discovered they could lose heavily even when AMC stayed elevated or dipped only modestly, because the extrinsic portion of their premium collapsed on its own. A call bought for $20 of pure hope could become a call worth $6 of slightly-less hope within days, with the stock still well above where they'd first noticed it.",
          lesson: "The premium has two ingredients, and in a frenzy, you're mostly buying the melting one. Right direction was not enough; buyers needed the stock to outrun a historically bloated extrinsic value, and almost nothing outruns that. Always ask: how much of this ticket is substance, and what am I paying for the hope?"
        },
        {
          title: "FZZY: Right Direction, Wrong Ingredient",
          kind: "fictional",
          setup: "Jamal was bullish on Fizzy Brands (ticker FZZY) at $50 with two big retail partnerships rumored. He had $600 and a month of patience. The chain offered him two tickets: the $45 call (deep in the money) at $6.00, mostly substance, or the $55 call (out of the money) at $1.20, pure hope, and he could buy five of those for the same money.",
          thePlay: "Five contracts sounded like five times the winning, so Jamal bought five $55 calls for $600 total. His premium was 100% extrinsic: every dollar of it was 'maybe,' and every day of it was melting.",
          outcome: "FZZY rose steadily to $54 over the month, up 8%, a genuinely good call on direction. But the stock never crossed $55, so his calls never gained a cent of intrinsic value, and the extrinsic drained to zero by expiration. Five contracts, right thesis, total loss of $600. The single $45 call he passed on? With FZZY at $54 it was worth $9.00 at the whistle, a $300 gain.",
          lesson: "Jamal didn't lose because he was wrong about FZZY. He lost because 100% of his premium was the melting ingredient, and the stock's solid-but-modest move couldn't outrun the melt. More contracts of hope isn't more edge. Sometimes the boring, substance-heavy ticket is the one that cashes."
        }
      ],
      quiz: [
        {
          id: "s1e5-q1",
          question: "A stock trades at $105. The $100-strike call is priced at $7.00. Split that premium: how much is intrinsic and how much is extrinsic?",
          options: [
            "$7 intrinsic, $0 extrinsic",
            "$5 intrinsic, $2 extrinsic",
            "$2 intrinsic, $5 extrinsic",
            "$0 intrinsic, $7 extrinsic"
          ],
          correctIndex: 1,
          explanation: "Intrinsic for a call is stock minus strike: $105 - $100 = $5 of real, exercise-it-now value. Whatever's left of the premium is extrinsic: $7 - $5 = $2, the price of time and possibility. Run this split on every option you ever consider buying."
        },
        {
          id: "s1e5-q2",
          question: "What happens to extrinsic value as expiration arrives?",
          options: [
            "It converts into intrinsic value",
            "It stays constant as long as the stock doesn't move",
            "It melts away to zero, leaving the option worth only its intrinsic value",
            "It doubles, because expiration is the most exciting moment"
          ],
          correctIndex: 2,
          explanation: "Extrinsic value is the price of what MIGHT happen, and at the final whistle, nothing more can happen. It decays every day, faster near the end, and reaches zero at expiration. A contract finishing with no intrinsic value finishes worth nothing, no matter what you paid for the possibility."
        },
        {
          id: "s1e5-q3",
          question: "You buy a call, the stock rises slowly in your direction for two weeks... and your option is DOWN money. What's the most likely explanation?",
          options: [
            "Your broker is charging hidden fees on the position",
            "The option is mispriced and will correct soon",
            "Calls only profit from fast moves; slow moves never count",
            "The slow move added less intrinsic value than time decay melted off the extrinsic value"
          ],
          correctIndex: 3,
          explanation: "This is the classic two-ingredient lesson. Direction was right, but the gain in substance was smaller than the daily melt of the hope you paid for. Option buyers don't just need to be right; they need the move to outrun the decay. Slow-and-right can still lose when your premium was heavy on extrinsic."
        }
      ],
      paperTrade: {
        id: "s1e5-pt",
        title: "Substance vs Hope",
        ticker: "AMZN",
        spotPrice: 185,
        brief: "Amazon trades at $185 and you expect a modest grind higher, a few dollars over the next three weeks, into a logistics announcement. Three tickets on the chain, each with a very different intrinsic/extrinsic recipe. Pick your ingredient mix.",
        choices: [
          {
            label: "Buy 1 AMZN $170 call (deep in the money) expiring in 30 days for $17.00 ($1,700): $15 intrinsic, $2 extrinsic.",
            result: "AMZN grinds to $189 over three weeks, exactly your thesis. Your call, now $19 in the money with a touch of time left, trades at $19.40. You sell for a $240 gain. The substance-heavy ticket tracked the stock and barely felt the melt.",
            pnl: 240
          },
          {
            label: "Buy 1 AMZN $185 call (at the money) expiring in 30 days for $6.50 ($650): $0 intrinsic, $6.50 extrinsic.",
            result: "AMZN reaches $189, but three weeks of melt drained the hope faster than $4 of progress could replace it. The call trades at $5.40 and you sell at a loss. Right direction, outrun by the decay.",
            pnl: -110
          },
          {
            label: "Buy 1 AMZN $205 call (far out of the money) expiring in 30 days for $0.85 ($85): pure hope.",
            result: "AMZN's $4 climb doesn't move the needle on a strike $20 away. The contract bleeds to $0.15 by week three and you salvage what's left. One hundred percent extrinsic, one hundred percent melting.",
            pnl: -70
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Your thesis was a MODEST move, and the ingredient mix had to match. The deep in-the-money call was mostly intrinsic: it gained nearly dollar-for-dollar with the stock and had almost nothing to melt. The at-the-money and far out-of-the-money tickets were mostly or entirely extrinsic, and a slow $4 grind can't outrun three weeks of decay on those. Notice the brutal scoreboard: all three plays got the direction RIGHT, and only one made money. Match the recipe to the thesis: big fast moves can justify buying hope, modest grinds demand substance."
      },
      scenario: {
        id: "s1e5-sc",
        title: "The Slow Bleed",
        situation: "Two weeks ago you bought an out-of-the-money call for $200 betting on a quick pop. The pop never came; the stock has gone sideways, and the option is now worth $120, down 40% with 10 days left, purely from time decay. The stock hasn't dropped at all. Your original thesis was 'quick pop within a week or two.'",
        question: "What do you do?",
        options: [
          "Hold to expiration. The stock hasn't fallen, so the option can recover any day now.",
          "Buy more calls at the cheaper price to average down.",
          "Sell the option, salvage the $120 of remaining extrinsic value, and accept that the thesis (a QUICK pop) already failed.",
          "Roll it into an even cheaper option expiring in 2 days to win it all back at once."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the disciplined exit. Your thesis had a clock on it: 'quick pop within a week or two.' Two weeks of sideways means the thesis already failed, and everything left in that contract is melting hope, decaying faster every day into expiration. Selling salvages $120 that will otherwise bleed toward zero. Option one is the most common rookie hold: 'the stock didn't drop' feels like safety, but for an extrinsic-heavy option, sideways IS losing. Option two averages down into accelerating decay, doubling a bet whose premise is already dead. Option four swaps a wounded position for a near-pure lottery ticket, the fastest-melting contract on the board. When the thesis dies, salvage the hope while someone will still pay for it."
      }
    },
    {
      id: "s1e6",
      seasonId: 1,
      number: 6,
      title: "Moneyness",
      tagline: "In the money, at the money, out of the money: know your field position.",
      playOfTheWeek: "February 3, 2022. Meta posts an ugly earnings report and the stock craters 26% in a single day, the biggest one-day market value wipeout in history at the time. Far out-of-the-money puts bought for pocket change the day before paid 20x and more, while in-the-money puts paid solidly but modestly. One earnings print, one crash, and moneyness decided whether you doubled your money or 20x'd it... or, on any normal day, lost it all.",
      gameFilm: [
        "Field position time. 'Moneyness' is just the relationship between the stock price and your strike, and it sorts every option on the board into three buckets: in the money, at the money, and out of the money. Three buckets, three completely different risk/reward profiles. This is the vocabulary of every options conversation you'll ever have, so let's nail it.",
        "In the money, ITM: the option has intrinsic value RIGHT NOW. For a call, that means the stock is ABOVE the strike: a $90 call on a $100 stock is $10 in the money. For a put, it's the reverse: the stock is BELOW the strike, so a $110 put on that $100 stock is $10 in the money. ITM options are the most expensive tickets because you're buying real substance, not just possibility.",
        "At the money, ATM: the strike is right at (or nearly at) the stock price. A $100 call or put on a $100 stock. No intrinsic value yet, the contract is all extrinsic, but it's one step from gaining substance in either direction. ATM options carry the most extrinsic value on the whole chain, because this is where the uncertainty is maximal: a coin flip priced as a coin flip.",
        "Out of the money, OTM: no intrinsic value, and the stock has to TRAVEL just to get some. A $110 call on a $100 stock, or a $90 put on that same stock. These are the cheapest tickets on the board, all hope, no substance, and they expire worthless unless the stock crosses the strike by the final whistle. Most of them do exactly that: expire worthless.",
        "Here's the risk/reward trade running through all three buckets. ITM: expensive, higher probability of finishing with value, moves most closely with the stock, smaller percentage payoffs. OTM: cheap, low probability, but when the stock makes a violent move through your strike, the percentage gains are spectacular. ATM sits in the middle: balanced odds, maximum time-value, the workhorse of directional trading. There's no 'best' bucket. There's only the bucket that matches your thesis.",
        "And that's the play call, rookie: moneyness is a probability dial, and you set it every time you pick a strike. Expecting a modest, reliable move? ITM or ATM keeps you in high-probability territory. Genuinely expecting a monster move and willing to lose the whole ticket most of the time? A small OTM position is at least an honest bet. The rookie disaster is buying deep OTM because it's cheap while expecting a modest move. That's paying lottery prices for a play your own thesis says won't reach the end zone."
      ],
      takeaway: "Moneyness is field position: ITM means your option already has intrinsic value, ATM means the strike sits at the stock price, and OTM means the stock must travel just to give your contract substance. It's a probability dial: ITM costs more and wins more often, OTM is cheap because it usually expires worthless. Pick the bucket that matches the size of the move you actually expect.",
      caseStudies: [
        {
          title: "Meta's 26% Crash: One Day, Three Buckets, Three Outcomes",
          kind: "real",
          setup: "February 2, 2022. Meta (then trading around $323) reports earnings after the close: a user-growth stall and a grim outlook. The stock gaps down to roughly $237 the next day, down 26%, erasing over $230 billion of market value, the largest single-day wipeout the market had ever seen at that point.",
          thePlay: "Before the print, put buyers had the whole moneyness menu. Deep ITM puts: expensive, already loaded with intrinsic value. ATM puts near $320: pricey because earnings uncertainty had pumped the extrinsic. Far OTM puts at strikes like $250: pocket-change premiums for a strike 20%+ below the stock, a bucket that almost always expires worthless.",
          outcome: "The 26% gap blew through every bucket. The far OTM $250 puts went from lottery tickets to deep ITM monsters, paying out 20x, 50x and more on premiums of a few dollars. ATM puts multiplied handsomely. Deep ITM puts made strong but ordinary gains. And it's worth saying out loud: on the thousands of earnings nights when stocks DON'T drop 26%, those far OTM puts simply burn to zero.",
          lesson: "Moneyness set the payoff table before the event ever happened: low-probability buckets paid spectacularly precisely because they almost never pay. The crash didn't make OTM puts a smart everyday play; it showed exactly what they're priced for. Pick your bucket for the move you expect, and know the odds you're accepting."
        },
        {
          title: "QRTZ: The $200 Budget and the Three Doors",
          kind: "fictional",
          setup: "Lena had $200 of true risk money and a thesis: Quartzline Watches (ticker QRTZ), trading at $50, should drift to $53-54 over the next month on solid holiday orders. Nothing explosive, just a steady grind. The chain offered her three doors.",
          thePlay: "Door one: a $45 ITM call at $5.60, too expensive for her $200. Door two: a $50 ATM call at $1.90, one contract, $190, fits the budget. Door three: ten $60 OTM calls at $0.20 each, $200 of pure lottery, and her favorite at first glance because TEN contracts felt like real size. She caught herself, re-read her own thesis, '$53-54, steady grind', and realized $60 wasn't on her map. She bought the single ATM call.",
          outcome: "QRTZ ground up to $53.50 by expiration week. Her $50 call was worth about $3.60 and she sold for a $170 profit, nearly 90% on her stake. The ten $60 calls she almost bought? The stock never got within $6 of that strike. All ten would have expired worthless: a 100% loss on the exact same correct thesis.",
          lesson: "Lena's edge wasn't picking the stock; it was matching the bucket to the thesis. A modest-move thesis bought a modest-distance strike. Contract COUNT is not conviction, and cheap is not the same as good. The right door is the one your own forecast can actually walk through."
        }
      ],
      quiz: [
        {
          id: "s1e6-q1",
          question: "A stock trades at $80. Which of these options is IN the money?",
          options: [
            "The $85 call",
            "The $85 put",
            "The $80 call",
            "The $75 put"
          ],
          correctIndex: 1,
          explanation: "A put is in the money when the stock is BELOW the strike: with the stock at $80, the $85 put carries $5 of intrinsic value (the right to sell at $85 something worth $80). The $85 call is out of the money, the $80 call is at the money, and the $75 put is out of the money. Calls want the stock above the strike; puts want it below."
        },
        {
          id: "s1e6-q2",
          question: "How much intrinsic value does an OUT-of-the-money option have?",
          options: [
            "Zero. Its entire premium is extrinsic value",
            "It depends on how much time is left",
            "Negative intrinsic value, which is why they're cheap",
            "Equal to the distance between stock and strike"
          ],
          correctIndex: 0,
          explanation: "OTM means no intrinsic value by definition: the right isn't worth using at today's prices. Every dollar of an OTM option's premium is extrinsic, the melting ingredient, which is why these contracts go to zero at expiration unless the stock crosses the strike. Intrinsic value never goes negative; it just stops at zero."
        },
        {
          id: "s1e6-q3",
          question: "What's the core trade-off when you choose OTM instead of ITM?",
          options: [
            "OTM costs more but wins more often",
            "There's no trade-off; OTM is simply better leverage",
            "OTM is cheaper with bigger percentage payoffs IF a big move happens, but a much higher chance of expiring worthless",
            "ITM options expire faster than OTM options"
          ],
          correctIndex: 2,
          explanation: "Moneyness is a probability dial. OTM tickets are cheap because they usually expire worthless; the market isn't doing you a favor, it's quoting you the odds. ITM costs more because it wins more often and moves with the stock. Neither is 'better': the right bucket is the one that matches the size of the move you actually expect."
        }
      ],
      paperTrade: {
        id: "s1e6-pt",
        title: "Pick Your Bucket",
        ticker: "GOOGL",
        spotPrice: 175,
        brief: "Alphabet trades at $175 and your research points to a move toward $180-182 over the next 30 days as ad revenue rebounds: a solid but unspectacular climb. Three strikes, three buckets, all expiring in 30 days. Set the probability dial.",
        choices: [
          {
            label: "ITM: Buy 1 GOOGL $165 call for $12.50 ($1,250): $10 intrinsic, $2.50 extrinsic.",
            result: "GOOGL closes the month at $181, right in your window. The ITM call finishes worth $16.00 and you collect $1,600, a $350 gain. The expensive ticket tracked the stock almost dollar-for-dollar the whole way.",
            pnl: 350
          },
          {
            label: "ATM: Buy 1 GOOGL $175 call for $5.00 ($500): all extrinsic, balanced odds.",
            result: "GOOGL reaches $181 by expiration and your $175 call finishes worth $6.00: a $100 gain. The move covered the melt with a little to spare. Decent, but most of the climb went to paying off the time value you bought.",
            pnl: 100
          },
          {
            label: "OTM: Buy 1 GOOGL $190 call for $0.90 ($90): pure lottery on a 9% move.",
            result: "Your thesis hits perfectly, $181, but $181 is not $190. The contract expires worthless. Your own forecast never had this strike on the map, and the market charged you 90 bucks to find that out.",
            pnl: -90
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Your thesis was $180-182: a $5-7 move. The ITM $165 call won because it was mostly substance with high odds of finishing valuable on YOUR forecast; it just needed the stock not to collapse. The ATM call was defensible but spent most of the move buying back its own time value. The OTM $190 call required a move nearly double your own projection: buying it would mean betting against your own research. Note what made this easy: you wrote the thesis FIRST, then picked the strike. Rookies do it backwards, picking the price tag first and inventing a thesis to match."
      },
      scenario: {
        id: "s1e6-sc",
        title: "Ten Lottery Tickets or One Real Seat",
        situation: "You have $250 of risk capital and expect a stock at $100 to climb to about $105 within a month on a steady news cycle. The chain shows you: the $100 ATM call at $2.40 (one contract fits your budget), and the $115 OTM call at $0.25 (ten contracts fit your budget). Ten contracts sounds like serious size, and the group chat loves a cheap ticket.",
        question: "How do you deploy the $250?",
        options: [
          "Ten $115 calls. More contracts means more upside, and they only need 'one good day.'",
          "One $100 ATM call. Your thesis says $105, so buy the strike your own forecast can actually reach.",
          "Five $115 calls and keep $125 in cash as a compromise.",
          "Skip both and wait for the stock to hit $105 first to confirm, then buy the $115 calls."
        ],
        bestIndex: 1,
        coachNotes: "Option two is the pro move: thesis first, strike second. You forecast $105; the ATM call profits on that exact move, while $115 needs triple your projected climb. Option one is the classic rookie seduction, contract count masquerading as conviction; ten tickets to a game your own forecast says won't happen is just ten ways to lose $250, and 'one good day' is hope wearing a helmet. Option three is half the same mistake; hedging between a good idea and a bad one is still 50% bad idea. Option four sounds patient but it's backwards: if the stock hits $105 first, you'd then be buying an OTM strike needing ANOTHER $10 move, with less time and pricier premium, effectively punishing yourself for being right. Buy the strike your forecast supports, when it supports it."
      }
    },
    {
      id: "s1e7",
      seasonId: 1,
      number: 7,
      title: "How Options Move",
      tagline: "The stock ran a yard. Why did your option run a foot?",
      playOfTheWeek: "April 20, 2022. Netflix reports its first subscriber loss in a decade and the stock implodes 35% in a day, from around $348 to $226. Far out-of-the-money puts that had barely been twitching on normal days suddenly started moving almost dollar-for-dollar with the stock, and their prices went vertical. The reason: as a strike goes from long-shot to deep in the money, the option's sensitivity to the stock transforms mid-play.",
      gameFilm: [
        "Every rookie hits this wall in week one: the stock moves $1, and your option moves... 40 cents? What gives? Nobody scammed you. Options have their own speedometer, and today you learn to read it. The name on the speedometer is DELTA, and we're keeping it in plain English.",
        "Delta answers one question: if the stock moves $1, about how much does my option move? A delta around 0.50 means the option gains roughly 50 cents when the stock gains a dollar. Delta around 0.85? About 85 cents per dollar. Around 0.15? Fifteen cents. (Puts move opposite the stock, so their deltas are written as negatives, but the idea is identical: it's the option's response per $1 of stock move.)",
        "Here's the pattern to burn in: moneyness sets the delta. Deep in-the-money options have deltas near 1.00; they're so substantial they move almost dollar-for-dollar, like owning the shares. At-the-money options sit near 0.50, the coin flip. Far out-of-the-money options have tiny deltas, 0.10, 0.05; the stock has to drag them a long way before they care. The further your strike is from the action, the less each yard of stock movement reaches your contract.",
        "Why would a long-shot barely move? Think of delta as the market's rough sense of how likely your option is to matter by expiration. A strike 20% away isn't much more likely to pay off after a $1 move than before it, so the price barely budges. A deep ITM option is almost certain to finish with value, so each $1 flows nearly straight through. The market is continuously handicapping your play, and delta is the line.",
        "Now the part that makes options come alive: delta CHANGES as the stock moves. Buy a 0.30-delta call and watch the stock rally toward your strike: your delta climbs, 0.40, 0.50, 0.60, and each next dollar of stock movement pays you more than the last. That's the snowball that makes winning calls accelerate. It runs in reverse too: as the stock retreats from your strike, your delta shrinks and the option goes numb. This is why a far OTM option can sit nearly motionless while the stock inches around: it's not broken, it's just far from the play.",
        "One more dial and we're done: the clock changes delta too. As expiration approaches, the market stops hedging its bets. Options safely in the money see their deltas climb toward 1.00; long shots collapse toward 0. The maybe-zone shrinks until the final whistle makes everything binary: value or no value.",
        "Practical scoreboard reading: before you buy, look at the delta and hear what it's telling you. Around 0.50 means balanced exposure that needs a real move. Around 0.80+ means you're nearly trading the stock itself, at a fraction of the capital. Around 0.10 means the market is quoting you long-shot odds, and your option will ignore small moves entirely. The biggest rookie panic, 'the stock went up and my option didn't!', is almost always just a low delta doing exactly what low deltas do."
      ],
      takeaway: "Delta is your option's speedometer: roughly how many cents it moves per $1 move in the stock, set mainly by moneyness: near 1.00 deep ITM, near 0.50 ATM, near 0 far OTM. It shifts as the stock travels and the clock runs, which is why winners accelerate and long shots barely twitch. Check the delta before you buy and you'll never be shocked by a 40-cent response to a $1 move again.",
      caseStudies: [
        {
          title: "Netflix, April 2022: When Long Shots Became Freight Trains",
          kind: "real",
          setup: "April 19, 2022. Netflix trades around $348 heading into earnings. The market expects a soft report, but put strikes 25-30% below the stock are still priced like long shots, with tiny deltas: on a normal day they barely move when the stock drops a few dollars.",
          thePlay: "Netflix reports its first subscriber LOSS in over a decade. The stock gaps down 35% to about $226. Strikes that had been distant long shots, $300, $275, $250, were suddenly deep in the money. Their deltas didn't inch up; they snapped from near zero toward 1.00 as the stock blew through them.",
          outcome: "Puts that had been nearly motionless lottery tickets transformed into contracts moving dollar-for-dollar with a collapsing stock, multiplying 20x and beyond. Meanwhile, traders who'd held those same puts in the weeks BEFORE the report had watched them do almost nothing on ordinary down days, with many giving up and selling early, because low-delta options ignore small moves. Same contracts, transformed behavior, all delta.",
          lesson: "Delta isn't fixed; it's recalculated with every tick. Far OTM options are numb to small moves and explosive through big ones; that's not a glitch, it's the entire design. Understand the speedometer and you'll know in advance whether your contract will respond to the move you're forecasting."
        },
        {
          title: "NMBS: Theo Thinks His Option Is Broken",
          kind: "fictional",
          setup: "Theo, back for redemption after the BLITZ fiasco, bought one Nimbus Cloud (ticker NMBS) $70 call for $0.50 with the stock at $60: a far OTM ticket with a delta around 0.12. The next day, NMBS jumped $2 on an analyst upgrade and Theo rushed to check his trade, expecting a windfall.",
          thePlay: "The option had gone from $0.50 to about $0.74. A $2 stock move, a 24-cent option move. Theo refreshed the app, cleared his cache, and drafted an angry email to the broker, convinced he'd been robbed. His roommate Marcus stopped him with one question: 'What was your delta?' Twelve cents per dollar, times two dollars, plus a touch from rising excitement on the chain... about 24 cents. The market owed him exactly what he got.",
          outcome: "Theo held on. NMBS kept climbing toward $68 over two weeks, and he watched his delta climb with it: 0.20, 0.35, 0.50. The last $3 of the rally paid him more than the first $5 had. He sold at $3.10 for a $260 gain, then sat down and finally learned the dial he'd been trading blind.",
          lesson: "Theo's option was never broken; his expectations were. Low-delta options are numb to small moves BY DESIGN, and delta climbing as the stock approaches your strike is why winners accelerate late. Check the delta before you buy and you'll know the speedometer reading before you ever hit the gas."
        }
      ],
      quiz: [
        {
          id: "s1e7-q1",
          question: "Your call has a delta of about 0.40. The stock rises $1. Roughly what should your option do?",
          options: [
            "Rise about $1.00, matching the stock",
            "Rise about $0.40 per share, so about $40 on the contract",
            "Rise about $4.00 per share",
            "Nothing, until the stock reaches the strike"
          ],
          correctIndex: 1,
          explanation: "Delta is the speedometer: roughly how much the option moves per $1 of stock movement. A 0.40 delta means about 40 cents per share, and with the 100-share multiplier that's about $40 on the contract. Options respond to every move; the delta tells you how much."
        },
        {
          id: "s1e7-q2",
          question: "Which option will track the stock most closely, moving nearly dollar-for-dollar?",
          options: [
            "A far out-of-the-money call with a 0.08 delta",
            "An at-the-money call with a 0.50 delta",
            "A deep in-the-money call with a 0.90 delta",
            "All options move dollar-for-dollar with the stock"
          ],
          correctIndex: 2,
          explanation: "Deep ITM options are mostly intrinsic value, and intrinsic value moves point-for-point with the stock: deltas near 1.00 mean near dollar-for-dollar tracking, like renting the shares for a fraction of their cost. ATM is the 50-cent coin flip; far OTM barely twitches. Moneyness sets the speedometer."
        },
        {
          id: "s1e7-q3",
          question: "You buy a call with a 0.30 delta and the stock rallies toward your strike. What happens to your delta as the rally continues?",
          options: [
            "It stays at 0.30 for the life of the contract",
            "It rises, so each additional $1 of stock gain pays your option more than the last",
            "It falls, because the option has already used up its movement",
            "It flips negative once the stock passes the strike"
          ],
          correctIndex: 1,
          explanation: "Delta changes as the stock travels. As your strike goes from long shot to live possibility to in the money, delta climbs, 0.30 to 0.50 to 0.70 and beyond, and your option accelerates. That snowball is why winning calls seem to speed up late in a rally, and why fading ones go numb. The speedometer recalibrates with every tick."
        }
      ],
      paperTrade: {
        id: "s1e7-pt",
        title: "Three Speedometers, One Move",
        ticker: "SPY",
        spotPrice: 600,
        brief: "The S&P 500 ETF trades at $600 and your read says a $5-8 pop is coming within a week or two on cooling inflation data, then you're out. Three calls, all expiring in 30 days, with three very different deltas. Match the speedometer to the move.",
        choices: [
          {
            label: "Buy 1 SPY $600 call (at the money, delta about 0.50) for $9.00 ($900).",
            result: "SPY climbs $6 to $606 within a week. Your delta starts at 0.50 and rises as the move unfolds; the call trades up to about $11.30 and you sell, banking $230 on a quick, clean play that matched the forecast.",
            pnl: 230
          },
          {
            label: "Buy 1 SPY $620 call (far out of the money, delta about 0.15) for $1.80 ($180).",
            result: "SPY gains the same $6, but your low-delta contract only inches up, and a week of time decay eats most of even that. You sell at $2.20 for a small gain. The stock made its move; your speedometer barely registered it.",
            pnl: 40
          },
          {
            label: "Buy 1 SPY $580 call (deep in the money, delta about 0.85) for $23.00 ($2,300).",
            result: "SPY's $6 pop flows almost straight through: the call rises to about $27.80 and you sell for a $480 gain. Great dollar profit, but you parked $2,300 to get it, and a sharp reversal would have hit this position hardest in dollar terms.",
            pnl: 480
          }
        ],
        bestChoiceIndex: 0,
        debrief: "For a quick, moderate move, the ATM call was the cleanest fit: a meaningful 0.50 delta that ACCELERATED as SPY rallied, solid percentage return (about 26%), and only $900 committed. The deep ITM call made more dollars but tied up two and a half times the capital for a similar percentage, with the most dollars exposed if the read was wrong. The far OTM call proves the episode's whole point: the stock did exactly what you predicted and the contract barely cared, because a 0.15 delta is numb to a $6 move. Forecast the move first, then pick the delta that will actually feel it."
      },
      scenario: {
        id: "s1e7-sc",
        title: "The Option That Didn't Move",
        situation: "Yesterday you bought a far out-of-the-money call (delta about 0.10) for $80, betting on a big product reveal in three weeks. Today the stock rose $2 on unrelated sector news... and your option gained four dollars. Total. Your group chat is split between 'your broker is scamming you' and 'dump that dead contract.'",
        question: "What's the right read?",
        options: [
          "Dump it. An option that can't respond to a $2 move is defective.",
          "Email the broker to dispute the pricing; the option clearly should have gained more.",
          "Recognize that a 0.10 delta means about 10 cents per $1 of stock move, so a roughly $4 gain per contract is exactly correct. Then re-check whether a low-delta ticket still matches your actual thesis: a BIG move on the reveal.",
          "Buy ten more contracts immediately since they're clearly underpriced."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the pro read in two steps: first, the math: 0.10 delta times a $2 move is about 20 cents per share... offset by a day of time decay, so roughly $4 on the contract is the market working perfectly, not a scam. Second, and more important, re-check the fit: your thesis is a BIG move in three weeks, and a small-delta ticket is an honest (if long-shot) way to play that, so today's numbness isn't a reason to panic, it's the known cost of the bucket you chose. Option one dumps a position because it did exactly what its delta said it would: that's punishing the contract for your own blind spot. Option two disputes math with customer service. Option four invents an edge from a misreading: the option isn't underpriced, it's low-delta, and ten more of them is ten times the same misunderstanding. Know your delta and you'll never confuse 'numb' with 'broken.'"
      }
    },
    {
      id: "s1e8",
      seasonId: 1,
      number: 8,
      title: "Buying vs Selling",
      tagline: "One side pays the ticket. The other side IS the stadium.",
      playOfTheWeek: "November 2018. A veteran fund manager who'd sold 'high-probability' naked calls on natural gas for years watched the commodity spike about 20% in days. His capped-gain, uncapped-loss positions imploded, wiping out the entire $150 million fund, and his clients learned they owed MORE money on top. The reason: selling options collects small premiums up front in exchange for open-ended risk, and one outlier move can erase a decade of wins.",
      gameFilm: [
        "Every option trade has two sides, and they are NOT mirror images of each other in risk. Today we scout both rosters: the buyer, who pays premium for rights, and the seller (also called the writer), who collects premium and shoulders obligations. Know both, even though you'll start on one.",
        "The buyer's profile you already know: pay the premium, hold the rights. Max loss is the ticket price, full stop. Upside on a long call is uncapped; on a long put it's huge (all the way to the stock hitting zero). The catch: the clock fights you every day, and most modest moves won't outrun the melt. Buyers lose often and small, and occasionally win big. That's the shape of the bet.",
        "Now flip the jersey. The seller collects the premium up front, real cash, theirs to keep IF the option expires worthless. Sell a call for $300 and the stock stays below the strike through expiration? You keep $300 for, apparently, doing nothing. The clock that bleeds buyers PAYS sellers: every day of melt is money flowing to the writer. Sounds beautiful. Now read the fine print.",
        "The seller's max gain is the premium collected. That's it. That's the ceiling, ever. The seller's max LOSS? Selling a 'naked' call, one with no shares backing it, means if the stock rockets, you must deliver 100 shares at the strike no matter what they cost you to buy. Stock doubles? Triples? Your loss has no ceiling. Naked put sellers face the stock crashing toward zero: enormous, though not infinite, downside. Sellers win often and small, and occasionally lose catastrophically. It's the exact inverse of the buyer's shape.",
        "Think of it like insurance. The seller is the insurance company: collect premiums month after month, profit in calm weather, and pay out enormously when the hurricane hits. The buyer is the homeowner: small known cost, big payout when disaster (or jackpot) strikes. Insurance companies survive hurricanes through massive capital reserves and careful exposure limits. A rookie selling naked options is an insurance company with no reserves writing hurricane policies on the beach.",
        "This is why beginners BUY options first, and it's not training wheels, it's mathematics. A buyer's worst day is losing 100% of a known, chosen premium. A naked seller's worst day is losing 10x, 50x, 100x the premium they collected, getting margin-called, and owing money they never put up. You cannot learn the game from inside a blown-up account. Defined risk first, always.",
        "One preview before the whistle, because the selling side isn't evil, it's just advanced: pros sell options constantly, but they do it with structures that cap the damage: covered calls (selling against shares you own) and defined-risk spreads. Those are next-season material. For Season 1, your job is simple: buy options, keep risk defined, and respect the sellers, because understanding their side of the field is exactly how you'll someday join it safely."
      ],
      takeaway: "Buyers pay premium for rights: lose often and small, capped at the ticket price, with big occasional wins. Sellers collect premium for obligations: win often and small, capped at the premium, with rare catastrophic losses, unlimited on naked calls. Beginners buy first because you can't learn the game from inside a blown-up account; selling safely requires structures that come later.",
      caseStudies: [
        {
          title: "OptionSellers.com, November 2018: The Fund That Sold Hurricanes",
          kind: "real",
          setup: "James Cordier ran a fund called OptionSellers.com, managing roughly $150 million for about 290 clients, with a strategy right there in the name: sell options, collect premium, let time decay pay the bills. It had worked for years. In late 2018, the fund was short naked calls on natural gas, a commodity famous for violent winter spikes.",
          thePlay: "In mid-November 2018, natural gas ripped roughly 20% higher in a matter of days on cold-weather panic. The fund's naked calls, whose maximum gain had always been the modest premiums collected, had no ceiling on their losses. The spike blew through every strike, and as losses ballooned, the fund's broker forcibly liquidated positions into a screaming market.",
          outcome: "The fund was completely wiped out. Worse, because the losses exceeded the account equity, clients didn't just lose everything they'd invested; many were told they owed additional money to cover the margin debt. The manager posted a tearful apology video that became infamous. Years of collected premiums, erased by one week of weather.",
          lesson: "This is the seller's risk profile in its purest form: decades of small wins, one uncapped loss, game over. The premium collected was the maximum prize; the downside had no maximum at all. When you hear 'income strategy' and 'high win rate,' always ask the only question that matters: what happens on the worst day?"
        },
        {
          title: "TRKR: Two Roommates, Two Sides of the Same Trade",
          kind: "fictional",
          setup: "Sam and Rico both had opinions on TrackerFit (ticker TRKR) at $50 before a product launch. Sam thought it would pop; Rico thought it would fizzle and wanted 'easy income.' Sam bought one $52 call for $1.50, risking $150. Rico, with no shares and a freshly approved margin account, SOLD a naked $52 call and collected $150, planning to keep it when the launch flopped.",
          thePlay: "The launch was a sensation. TRKR gapped from $50 to $63 in two days. Sam's call, the right to buy at $52, swelled to $11.50. Rico's obligation, to deliver 100 shares at $52 with the stock at $63, was the same contract from the other side: a position now $1,150 against him, with his broker demanding more collateral as it climbed.",
          outcome: "Sam sold for a $1,000 profit on $150 risked. Rico bought back the call at $11.50, locking in a $1,000 loss against a maximum possible win of $150, nearly seven times his best case, gone on one trade. If TRKR had fizzled like he expected, he'd have made $150. He'd taken that bet at the worst odds on the field, with no cap if it went wrong.",
          lesson: "Same contract, opposite jerseys, and the risk shapes could not be more different: Sam's worst case was always $150; Rico's worst case was wherever the stock stopped. Rico wasn't wrong that selling can be profitable, he was wrong to sell UNCAPPED risk he didn't understand with money he couldn't lose. The selling side is real, and it's earned, not assumed."
        }
      ],
      quiz: [
        {
          id: "s1e8-q1",
          question: "What is an option SELLER'S maximum possible gain on a trade?",
          options: [
            "Unlimited, just like the buyer's",
            "The premium collected when selling the contract",
            "100 times the strike price",
            "It depends on how far the stock moves"
          ],
          correctIndex: 1,
          explanation: "The seller's best case is always the same: the option expires worthless and they keep the premium they collected up front. That's the entire ceiling. Every seller is trading a capped, known gain against a much larger (sometimes unlimited) potential loss. High win rate, small wins, rare disasters: that's the shape."
        },
        {
          id: "s1e8-q2",
          question: "Why is selling a NAKED call considered the riskiest basic options position?",
          options: [
            "Because the premium collected is too small to matter",
            "Because the stock can rise without limit, so the obligation to deliver shares at the strike has no ceiling on its cost",
            "Because naked calls expire faster than regular calls",
            "Because brokers charge double commissions on naked calls"
          ],
          correctIndex: 1,
          explanation: "A naked call seller must deliver 100 shares at the strike if assigned, without owning them, meaning they'd have to buy at whatever the market demands. Since there's no ceiling on a stock price, there's no ceiling on the loss. Capped gain, uncapped loss is the most dangerous shape in the book, which is why it's not rookie material."
        },
        {
          id: "s1e8-q3",
          question: "Why do beginners start by BUYING options instead of selling them?",
          options: [
            "Buying has a higher win rate than selling",
            "Brokers legally prohibit all selling forever",
            "Buying has strictly defined risk: the most you can lose is the premium you chose to pay, so no single trade can blow up your account",
            "Sold options can't be closed before expiration"
          ],
          correctIndex: 2,
          explanation: "It's pure risk math, not training wheels. A buyer's worst case is chosen in advance: the ticket price. A naked seller's worst case can be many multiples of the premium, including margin calls and owing money beyond the account. Buyers actually lose MORE often than sellers, but they lose survivable amounts, and survival is the rookie's first job."
        }
      ],
      paperTrade: {
        id: "s1e8-pt",
        title: "Pick a Jersey",
        ticker: "AMD",
        spotPrice: 150,
        brief: "AMD trades at $150 two weeks before a major chip unveiling, and the chatter is loud in both directions. You have a margin-approved account, $1,000 of risk capital, and three very different jerseys to wear into the event. Choose your side.",
        choices: [
          {
            label: "BUY 1 AMD $155 call expiring in 45 days for $6.00 ($600 risk, defined).",
            result: "The unveiling is a blowout and AMD rips to $170. Your call swells to $15.00 and you sell for $1,500: a $900 profit, and your worst case the entire time was the $600 ticket. Rights, not obligations.",
            pnl: 900
          },
          {
            label: "SELL 1 naked AMD $155 call, collecting $600 of 'easy income' since these events usually disappoint.",
            result: "AMD rips to $170 and your obligation goes vertical: forced to buy back the call at $15.00, you lose $900 against a max possible gain of $600, plus a margin scare when your broker flagged the position mid-spike. Capped upside, uncapped downside, wrong week.",
            pnl: -900
          },
          {
            label: "SELL 1 naked AMD $140 put, collecting $300, betting the stock at least won't crash.",
            result: "AMD rips higher and the put expires worthless: you keep $300. It worked! But replay the tape: a bad unveiling gapping AMD to $115 would have cost you $2,200 on a $300 max prize. You won a bet you never priced.",
            pnl: 300
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Play one is the rookie-correct jersey: defined risk ($600, chosen in advance), uncapped upside, and a thesis-matched contract: into a binary event, you want to be the ticket holder, not the insurance company. Play two is the OptionSellers.com special in miniature: collecting $600 against unlimited loss into a known volatility event. Play three is the trickiest lesson on the board BECAUSE it made money: the outcome was fine, the process was terrible: $300 max gain against thousands of downside, unexamined. Grade your plays by the risk you accepted, not the result you happened to get. Good process with a loss beats bad process with a win, every season, over every career."
      },
      scenario: {
        id: "s1e8-sc",
        title: "The Income Guru",
        situation: "A trader with a big following posts: 'I sell naked calls every Friday for income. 47 winning weeks in a row. Options BUYERS are the suckers paying my rent. DM for my watchlist.' You've got three months of experience buying options, mixed results, and his win streak is genuinely real and verifiable.",
        question: "How do you respond to this pitch?",
        options: [
          "Start selling naked calls Monday. 47 straight wins doesn't lie.",
          "Sell just one naked call on a cheap stock to test it small.",
          "Recognize the strategy's shape: 47 small capped wins says nothing about the one uncapped loss that can erase them all. Stick to defined-risk buying until you can sell with capped structures, and study HOW his streak ends.",
          "Split the difference: sell naked calls but only on stocks you're pretty sure won't move."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the pro read. The streak is real AND the conclusion is wrong: selling naked options produces long, genuine win streaks BY DESIGN, because the strategy wins small and often until the day it loses everything at once: 47 weeks of premiums can vanish in one OptionSellers-style spike, and the streak tells you nothing about that day except that it hasn't happened yet. Option one buys the track record without reading the risk shape: survivorship with a follower count. Option two misunderstands the danger: naked risk isn't safe at small size, it's uncapped at every size: 'one cheap stock' can still triple on a buyout rumor. Option four is the same trap with extra confidence: 'pretty sure it won't move' is exactly the bet every blown-up seller was making, priced at a few hundred bucks of max gain. When someone shows you a win rate, always ask to see the worst day."
      }
    },
    {
      id: "s1e9",
      seasonId: 1,
      number: 9,
      title: "Reading the Chain",
      tagline: "The options chain is the scouting report. Learn to read it or get read.",
      playOfTheWeek: "May 6, 2010. The Flash Crash. In minutes, the Dow plunges nearly 1,000 points, bids evaporate across the market, and market orders fill at prices that made no sense, with some securities momentarily printing at a penny. Traders using market orders got fills from the void; traders with limit orders either got their price or got nothing. The reason: when liquidity vanishes, the order type you chose IS your risk management.",
      gameFilm: [
        "Pull up any stock's options and you'll meet the chain: a giant grid of strikes, expirations, and numbers flying everywhere. Rookies see chaos. Pros see a scouting report. By the end of this film session, you'll read it like a box score: bid, ask, volume, and open interest, the four columns that matter most.",
        "Start with the two prices every contract shows: the BID and the ASK. The bid is what buyers are currently offering to pay; the ask is what sellers are demanding. You can sell immediately at the bid, or buy immediately at the ask. The gap between them is the SPREAD, and it's not decoration: it's a toll you pay to enter and exit. Bid $3.40, ask $3.50? That dime, $10 a contract, is the cost of playing. Bid $2.00, ask $2.90? That's a $90 toll EACH WAY on a contract that might only be worth $250. Tolls like that eat strategies alive.",
        "The spread is your liquidity gauge. Tight spreads, pennies apart, mean a busy stadium: tons of traders competing, easy in, easy out, fair prices. Wide spreads mean an empty parking lot at midnight: few players, lousy prices, and good luck finding a buyer when you need out in a hurry. Before you ever click buy, check the toll.",
        "Next column: VOLUME, the number of contracts traded TODAY. It resets every morning. Volume tells you if anyone's actually playing this specific contract right now. Hundreds or thousands of contracts trading? Active game. Volume of 2? You're alone in the gym, and the spread will usually tell the same story.",
        "Beside it lives OPEN INTEREST, OI: the total number of contracts currently in existence: opened but not yet closed or expired. Where volume is today's action, OI is the standing population of the contract. High OI means lots of traders hold positions there, which usually means tighter spreads and easier exits for you. The pro habit: favor strikes and expirations where OI runs in the thousands, and treat single-digit OI like a 'road closed' sign.",
        "Now the execution lesson that pays for this whole episode: market orders versus limit orders. A market order says 'fill me NOW at whatever the price is,' which in options means buying at the full ask, or worse if the quote moves. A limit order names YOUR price: 'fill me at $3.45 or better, or don't fill me at all.' On a wide-spread contract, a market order is a donation to whoever's quoting it. The standing pro move: start your limit near the midpoint between bid and ask, and adjust patiently. You won't always get filled. That's fine: missing a trade costs nothing, while overpaying costs real money on BOTH ends of the play.",
        "Put the whole scouting report together before any trade: Is the spread tight? Is there volume today? Is open interest healthy? Then enter with a limit order at a price YOU chose. Four checks, ten seconds, and you'll sidestep the silent tax that bleeds rookie accounts: not bad theses, bad fills."
      ],
      takeaway: "The chain's four key columns: bid (sell-now price), ask (buy-now price), volume (contracts traded today), and open interest (contracts outstanding). The bid-ask spread is a toll you pay both ways, so favor tight spreads with healthy volume and OI, and enter with limit orders near the mid: never market orders on a wide spread. Bad fills, not bad ideas, are the rookie's silent tax.",
      caseStudies: [
        {
          title: "The Flash Crash, May 2010: When the Bid Side Vanished",
          kind: "real",
          setup: "May 6, 2010, a nervous afternoon over European debt. At about 2:32 PM, a wave of automated selling hit an already thin market. Liquidity, all those standing bids in the order books, didn't just shrink. It evaporated, across stocks, ETFs, and options chains alike.",
          thePlay: "In roughly ten minutes the Dow plunged nearly 1,000 points, about 9%, the fastest drop of its size ever seen to that point. With bids pulled, market orders did exactly what market orders do: filled at whatever remained. Some major stocks and ETFs momentarily traded for a PENNY; others printed at $100,000 a share. Options spreads, modest at lunchtime, gaped to absurd widths.",
          outcome: "Traders who sold with market orders into the void got fills at prices nobody would believe an hour later; thousands of trades were later canceled as 'clearly erroneous,' but many bad fills inside the bands stood. Traders resting limit orders either transacted at their named price or simply didn't transact. Twenty minutes later the market had mostly bounced back, leaving the damage to whoever had ordered 'fill me at anything.'",
          lesson: "The bid and ask are not abstractions: they are literally the only prices that exist for you, and in a panic the gap between them can become a canyon. A limit order is the one guarantee you can carry into any market: your price or no trade. History's loudest argument against the market order took only ten minutes to make."
        },
        {
          title: "PLNK: The Same Trade at Two Different Tolls",
          kind: "fictional",
          setup: "Twins Ava and Maya both wanted the same play: calls on PlankFit (ticker PLNK) at $35 ahead of a gym-chain partnership rumor, with about $400 each to risk. Ava pulled up the chain and grabbed the first strike she liked: the $38 call on a far-out expiration, bid $1.60, ask $2.40, volume 3, open interest 41. Market order. Filled at $2.40.",
          thePlay: "Maya ran the four checks first. Same chain, one month nearer: the $37 call showed bid $1.95, ask $2.05, volume 800, OI 6,200: a busy stadium. She placed a limit at $2.00, the midpoint, and filled in under a minute. Both twins now held bullish PLNK calls of similar size; one had paid a $40 entry toll, the other a nickel.",
          outcome: "The rumor confirmed and PLNK popped to $39. Maya's liquid call quoted $3.10 bid / $3.20 ask; she sold at the $3.15 mid for a $115 gain. Ava's illiquid call was 'worth' about $3.00 on paper, but the real quote read bid $2.45 / ask $3.55: the only actual exit was $2.45. Her winning trade, right thesis and all, netted $5 after the spread took its toll both ways.",
          lesson: "Identical thesis, identical outcome on the stock, and a 23x difference in profit, decided entirely by chain-reading. The spread isn't a technicality: it's a toll booth at the entrance AND the exit, and illiquid contracts can turn a winning play into a wash. Ten seconds of checks: spread, volume, OI, limit order. That's the whole skill."
        }
      ],
      quiz: [
        {
          id: "s1e9-q1",
          question: "An option shows bid $3.40 / ask $3.50. If you place a MARKET order to buy right now, what do you pay?",
          options: [
            "$3.40, the bid",
            "$3.45, the midpoint, automatically",
            "About $3.50, the ask (or worse if the quote moves)",
            "Whatever you decide the option is worth"
          ],
          correctIndex: 2,
          explanation: "A market order takes the price being demanded NOW: for buyers, that's the ask. The bid is where you can instantly SELL. The midpoint is only available if you place a limit order there and someone meets you. On tight spreads the difference is pennies; on wide ones, it's the whole game."
        },
        {
          id: "s1e9-q2",
          question: "What's the difference between VOLUME and OPEN INTEREST on an options chain?",
          options: [
            "They're two names for the same number",
            "Volume is contracts traded TODAY; open interest is the total contracts currently outstanding (opened but not yet closed or expired)",
            "Volume counts calls, open interest counts puts",
            "Open interest resets daily while volume accumulates forever"
          ],
          correctIndex: 1,
          explanation: "Volume is today's action and resets every morning. Open interest is the standing population of the contract: positions opened and still alive. Together they're your liquidity gauge: healthy volume plus high OI usually means tight spreads and easy exits. Single digits on both? That's an empty parking lot."
        },
        {
          id: "s1e9-q3",
          question: "Why do pros use LIMIT orders for options instead of market orders?",
          options: [
            "Limit orders are guaranteed to fill at the midpoint",
            "Market orders are banned on options exchanges",
            "A limit order caps the price you'll accept, protecting you from paying the full spread, or far worse when quotes are wide or moving fast",
            "Limit orders carry lower regulatory fees"
          ],
          correctIndex: 2,
          explanation: "Options spreads can be wide, and quotes can move in milliseconds: a market order signs a blank check for whatever's there, which is how rookies buy at the ask on a canyon-wide spread (or get Flash Crash fills). A limit order names your price: filled there or better, or not at all. Missing a trade costs nothing. Overpaying costs you on the way in AND the way out."
        }
      ],
      paperTrade: {
        id: "s1e9-pt",
        title: "Four Checks Before Kickoff",
        ticker: "XOM",
        spotPrice: 115,
        brief: "ExxonMobil trades at $115 and you're bullish over the next month on tightening oil supply. Your thesis is set; today's test is pure execution. Three contracts on the chain, three very different scouting reports. Read before you buy.",
        choices: [
          {
            label: "The $115 call, 30 days out: bid $3.40 / ask $3.50, volume 2,400, OI 18,000. Enter with a limit at $3.45.",
            result: "Filled at $3.45 in seconds. XOM climbs to $119 over three weeks and the quote reads $4.95 / $5.05: you exit at $5.00 with one click. Tight tolls on the way in and out: the thesis's profit stayed YOURS.",
            pnl: 155
          },
          {
            label: "The $117 call on a sleepy far-month expiration: bid $2.00 / ask $2.90, volume 3, OI 40. Buy at the ask to make sure you're in.",
            result: "Filled at $2.90, a 45-cent toll above mid before the stock moved an inch. XOM climbs to $119, but your exit quote reads $3.10 bid on a contract 'worth' $3.60 mid. Right thesis, $20 profit: the spread ate the rest, both ways.",
            pnl: 20
          },
          {
            label: "The $120 call expiring THIS week: bid $1.00 / ask $1.20, volume 1. Market order, time is money.",
            result: "Filled at $1.20. XOM ticks up to $117 by Friday, nowhere near $120 on a five-day clock, and the contract expires worthless. Bad liquidity AND a lottery clock: the four checks would have flagged both.",
            pnl: -120
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Same stock, same correct thesis, three executions. Play one ran the full pre-snap read: tight spread (a dime), real volume, deep OI, limit at mid: and kept $155 of a clean move. Play two paid a $45 entry toll and a $50 exit toll on an empty-stadium contract: 80% of the same winning move went to the spread. Play three compounded illiquidity with a near-expiry strike the move couldn't reach. Burn this in: liquidity is part of the trade. The chain shows you everything: spread, volume, OI: BEFORE you commit. Ten seconds of reading is the cheapest edge in the game."
      },
      scenario: {
        id: "s1e9-sc",
        title: "The Empty Parking Lot",
        situation: "You've found a call you love on a mid-cap stock: perfect strike, perfect expiration for your thesis. Then you check the chain: bid $1.00 / ask $2.00, volume 0 today, open interest 12. The same stock has another strike $1 further out with bid $1.30 / ask $1.40, volume 450, OI 3,100. Your 'perfect' contract is an empty parking lot.",
        question: "How do you get into this trade?",
        options: [
          "Market order on the perfect strike. The right strike matters more than a little slippage.",
          "Limit order at $1.50 (the mid) on the perfect strike, and if it doesn't fill, force it by raising to the $2.00 ask.",
          "Take the liquid $1-further strike with the tight spread: a slightly different contract, but with tolls measured in pennies instead of dollars, entered with a limit near the mid.",
          "Skip options entirely and buy the stock, since this chain is clearly unusable."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the pro trade-off: a strike $1 different is a small adjustment to your thesis, but a $1.00 spread versus a $0.10 spread is a 10x difference in the toll you pay BOTH ways: on a $1.50 contract, that dollar-wide spread can consume most of a winning move (ask Ava). Option one donates half the contract's value to the spread before the stock even moves. Option two starts correctly: a mid limit is always a fair opening bid: but 'force it by paying the ask' abandons the discipline exactly when it matters; on a dead contract, no fill at mid is the chain telling you the real price, and your exit will face the same canyon. Option four overcorrects: the stock's OTHER strikes are perfectly liquid: one dead contract doesn't condemn the whole chain. Trade where the traders are. The second-best strike with a tight spread beats the perfect strike in an empty lot, almost every time."
      }
    },
    {
      id: "s1e10",
      seasonId: 1,
      number: 10,
      title: "Your First Trade",
      tagline: "Every play you've learned, run in sequence. This is the whole game.",
      playOfTheWeek: "April 2022. Traders who bought Twitter calls on rumors of Elon Musk building a stake caught a 27% single-day pop when the stake went public on April 4, and disciplined ones cashed out into the buyout-offer spike days later. The traders who kept holding for more watched months of deal drama grind their contracts down. Same entry, same news: the exit plan was the entire difference between a career-best trade and a round trip to nothing.",
      gameFilm: [
        "Championship week, rookie. Nine episodes of fundamentals: contracts, calls, puts, strikes, clocks, premium, moneyness, delta, both jerseys, and the chain. Today we run the full two-minute drill: one complete trade, from idea to exit, with every decision in sequence. This is the checklist you'll run on every trade for the rest of your career.",
        "Step one: the THESIS, written down like a play call. Not 'I like Apple.' Instead: 'I expect AAPL to climb from $210 toward $220 within the next month as holiday sales data lands.' Direction, size of move, deadline, reason: four parts, one sentence. If you can't write that sentence, you don't have a trade: you have a mood. The thesis decides everything that follows, which is exactly why it comes first.",
        "Step two: pick the CONTRACT off your thesis like reading a menu with your order already decided. Direction up means calls. Modest target near $220 means a strike the move can actually reach: at or slightly out of the money, say the $215: not some $250 lottery ticket your own forecast laughs at. Deadline 'within a month' means expiration with BUFFER: 45 days, not 30, because theses are usually right slower than we hope, and the clock melts hardest at the end. Episode 6 picked your strike; Episode 4 and 5 just picked your expiration.",
        "Step three: SIZE it like a professional. The iron rule: decide the maximum dollars you're willing to lose on this idea: for a small account, often 2-5% of your capital: and let that number choose your contract count, never the other way around. If your $215 call costs $4.50, that's $450 at risk per contract, full stop. One contract or zero: 'ten contracts because conviction' is how Episode 4's Devon stories start. Risk only what losing won't change your week.",
        "Step four: write the EXIT PLAN before you enter, both directions, in numbers. Profit side: 'I sell at 50-100% gain, or when the stock hits $220, or when the catalyst passes: whichever comes first.' Loss side: 'I sell if the premium drops 50%, or if my thesis breaks (the sales data disappoints), or at 14 days to expiration: whichever comes first.' Why before entry? Because once money's moving, the calm strategist who wrote the plan gets replaced by a sweaty fan watching the scoreboard. The plan is a letter from your smartest self to your most emotional one.",
        "Step five: EXECUTE like Episode 9 taught you. Pull the chain. Check the spread: tight? Check volume and open interest: alive? Place a LIMIT order near the mid, and let it work. No market orders, no chasing a runaway quote: if you miss the fill, you missed one bus on a route that runs forever. Entering well is a skill; needing to enter is a leak.",
        "Step six: MANAGE by the plan, which mostly means doing nothing loudly. Check the position against your written triggers: not every five minutes, but at your triggers. Stock hits $220? Sell: don't renegotiate with a winning scoreboard. Premium cut in half, thesis cracked? Sell: take the small L the plan already priced in. The catalyst passes with a shrug? Sell: a thesis that expired is dead even if the contract isn't. The exits will rarely feel right in the moment: euphoria says hold longer, fear says it'll come back. The plan outranks both.",
        "And after the whistle: the POST-GAME. Win or lose, write three lines in a journal: what was the thesis, did I follow the plan, what surprised me. Grade the PROCESS, not the P/L: good process with a loss is a rep; bad process with a win is a loan you'll repay with interest. Run this checklist: thesis, contract, size, exit plan, execution, management, review: twenty times and you won't be a rookie anymore. Welcome to The Pit. Now go run your first real play."
      ],
      takeaway: "A complete trade is a sequence: written thesis (direction, size, deadline, reason), contract matched to that thesis, position sized by max acceptable loss, exit plan written BEFORE entry for both winning and losing, limit-order execution on a liquid contract, and management by your triggers instead of your feelings. The plan is a letter from your smartest self to your most emotional one: write it, then obey it.",
      caseStudies: [
        {
          title: "Twitter, April 2022: The Pop, the Plan, and the People Who Held Forever",
          kind: "real",
          setup: "Early April 2022. Twitter trades around $39 amid rumors that Elon Musk has been quietly buying shares. On April 4, a filing makes it official: a 9%+ stake. The stock rockets 27% in a day, its best session ever. Ten days later, Musk offers to buy the whole company at $54.20.",
          thePlay: "Call buyers who'd played the rumor were sitting on monster gains twice over: once on the stake pop, again on the offer spike toward $52. Traders with written exits: 'sell on the catalyst,' 'sell at 100%': cashed out into those surges. Traders without plans saw $54.20 as a floor and kept holding for the last few dollars of a 'sure thing' buyout.",
          outcome: "The sure thing wobbled for eight months. Musk tried to back out; the stock sank into the $30s during the standoff; deal-or-no-deal headlines whipsawed it for two quarters. Calls bought during the April euphoria bled out on time decay and fading prices: many expired worthless while the deal was still in court. The buyout DID eventually close at $54.20 in late October: months after most spring options had hit their final whistle.",
          lesson: "The market handed everyone the same two exits, and only traders with pre-written plans took them. The holders weren't even wrong about the ending: they were wrong about the clock, and options die on the clock. A catalyst that pays you is an exit, not a reason to renegotiate with the scoreboard."
        },
        {
          title: "DRFT: Rosa Runs the Checklist",
          kind: "fictional",
          setup: "Rosa had finished her rookie season of paper trading and was ready for her first real options trade. Driftline Scooters (ticker DRFT) traded at $44, and city contract announcements were due within five weeks. Her account: $3,000. Her notebook, page one: the six-step checklist.",
          thePlay: "Thesis: 'DRFT to $48-50 within five weeks on contract wins.' Contract: the $46 call, 60 days out (five-week thesis plus buffer), quoted $1.90/$2.00 with OI over 4,000. Size: max loss $200, well under 7% of her account: one contract, limit order at $1.95, filled. Exit plan, written before entry: 'Sell at +75%, or at $49, or on the announcement, whichever is first. Cut at -50% or if announcements slip past week five.' Then she closed the app and went to work.",
          outcome: "Week three: DRFT won two of three city contracts and gapped to $48.60. Her call quoted $3.40/$3.50: up about 77%, triggering BOTH the profit number and the catalyst exit. Euphoria whispered 'the third contract could send it to $55.' She sold at $3.45 per her plan: $150 profit, a 77% gain. The third contract went to a rival a week later and DRFT slid back to $45; her old call's value got cut nearly in half.",
          lesson: "Nothing about Rosa's trade was spectacular, and that's the point: a boring, complete process: thesis, matched contract, honest size, pre-written exits, limit fills, obedient management: captured most of a good move and dodged the giveback that euphoria was selling. Her journal line that night: 'Followed the plan. The plan was the edge.'"
        }
      ],
      quiz: [
        {
          id: "s1e10-q1",
          question: "What's the correct ORDER of operations for building a trade?",
          options: [
            "Find a cheap option, then build a thesis that justifies buying it",
            "Write the thesis, match the contract to it, size by max acceptable loss, write the exit plan, THEN enter with a limit order",
            "Enter the trade first, then decide your exits based on how it feels",
            "Pick the expiration first, then find a stock moving that week"
          ],
          correctIndex: 1,
          explanation: "The sequence is the strategy: thesis decides the contract, risk tolerance decides the size, and the exit plan exists BEFORE money moves, because the version of you watching a live P/L is not the version you want making decisions. Rookies run it backwards: find a cheap ticket, invent a story: and the results follow accordingly."
        },
        {
          id: "s1e10-q2",
          question: "Why write the exit plan BEFORE entering the trade?",
          options: [
            "Brokers require a documented exit plan to approve options trades",
            "So you can set it and never look at the position again",
            "Because once real money is moving, emotions like greed and fear take over, and a pre-written plan makes the decision when you're least equipped to",
            "Because exit plans can't legally be changed after entry"
          ],
          correctIndex: 2,
          explanation: "The plan is a letter from your smartest self to your most emotional one. Pre-committed numbers: profit target, loss cut, time stop: turn the hardest moments (euphoria at +80%, dread at -40%) into simple execution instead of live negotiation. Discipline isn't making great decisions under pressure; it's arranging to not need to."
        },
        {
          id: "s1e10-q3",
          question: "You planned to risk $300 max on your first trade. The call you want costs $450. What's the disciplined move?",
          options: [
            "Buy it anyway: $150 over budget is close enough for a good setup",
            "Buy two contracts so the winnings make the overage worth it",
            "Pass, or find a contract that fits the $300 limit (different strike, nearer expiration, or a cheaper underlying): the risk budget outranks the trade idea",
            "Buy it but plan to sell within two days to limit the exposure"
          ],
          correctIndex: 2,
          explanation: "Sizing discipline only works if the number is a wall, not a suggestion: today it's $150 over, next month it's 'just one more contract,' and that's the Devon story from Episode 4. No single trade idea is rare enough to justify breaking your risk rule: the market prints new setups every week. Let max loss choose the contract, never the reverse."
        }
      ],
      paperTrade: {
        id: "s1e10-pt",
        title: "The Two-Minute Drill",
        ticker: "DIS",
        spotPrice: 110,
        brief: "Disney trades at $110 and your written thesis reads: 'DIS to $115-118 within six weeks as park bookings and a streaming price change land.' You have $400 of risk budget for this idea. Three ways to run your first real drive. Call the play.",
        choices: [
          {
            label: "Run the checklist: buy 1 DIS $112 call, 60 days out, limit-filled at $3.20 ($320). Written exits: sell at +50%, at $116, or at 21 days left; cut at -50%.",
            result: "DIS climbs to $115 in three weeks and your call quotes $4.80: +50%, plan triggered. You sell without drama for $480. DIS later wobbles back to $111 on a downgrade: the giveback you never had to feel. The checklist caught the move and skipped the chop.",
            pnl: 160
          },
          {
            label: "Same $112 call, same $320: but no written exits. You'll 'know it when you see it.'",
            result: "DIS hits $115 and your call touches $4.80: but $118 was the thesis ceiling, so why not wait? The downgrade lands, the rally fades, and you hold through six weeks of melt hoping it comes back. The call expires with DIS at $112.40: worth $0.40. 'Knowing it when you see it' saw it and kept holding.",
            pnl: -280
          },
          {
            label: "Skip the grind: buy 16 DIS $120 calls expiring in 8 days at $0.25 each ($400). One headline and it's a monster.",
            result: "Sixteen contracts, zero of your own forecast behind them: your thesis said $115-118 in six weeks, not $120 in eight days. DIS drifts to $111.80 by Friday-after-next. All sixteen expire worthless: the full risk budget, donated to the sellers.",
            pnl: -400
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Play one is the entire season in one trade: thesis-matched strike ($112 on a $115-118 forecast), expiration with buffer (60 days for a six-week thesis), size inside the budget ($320 of $400), pre-written exits, limit execution, and: the hard part: OBEYING the trigger at +50%. Play two is identical capital with identical thesis and lost $440 more, on exactly one missing ingredient: the plan. Play three abandoned the thesis for contract count: sixteen tickets to a game your own forecast said wasn't scheduled. Same budget, three outcomes, and the only edge on the board was process. That's the rookie season's final lesson: in this game, discipline IS the talent."
      },
      scenario: {
        id: "s1e10-sc",
        title: "Down 30% on Day One",
        situation: "You ran the full checklist on your first real trade: clean thesis, matched contract, $350 risked (4% of your account), written plan: 'cut at -50%, take profit at +60%, time-stop at 15 days to expiration.' Day one, the whole market drops on inflation data: nothing about YOUR thesis, and your call is down 30%. Your stomach is in your shoes and the group chat says 'dead trade, eject.'",
        question: "What do you do?",
        options: [
          "Sell now. Down 30% on day one means the trade is broken: get out before it hits -50%.",
          "Buy another contract: same thesis, 30% cheaper. Improve the average.",
          "Check the plan: -30% hasn't hit the -50% cut, the thesis is intact (the drop was market-wide, not your story), and the clock is fine. Hold, and do nothing until a written trigger trips.",
          "Delete the -50% rule: it's too close now, and the thesis deserves room to breathe."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the graduation exam, and it's the only answer that uses the plan you wrote. Run the three checks: Trigger hit? No: -30% is not -50%. Thesis broken? No: a market-wide inflation flinch says nothing about your company's catalyst. Clock okay? Yes. Then the plan says hold, and the discipline is enduring the discomfort you already budgeted for: this exact feeling is WHY you sized at 4%. Option one is fear rewriting the plan mid-game: sell at -30% today and you'll sell at -20% next time, until no trade survives its first red hour. Option two isn't in the plan either: greed's version of the same edit: adding risk because the price fell, not because the thesis strengthened. Option four is the most dangerous: deleting your loss rule the first time it might fire means you never had one: that's how -50% becomes -100%. You wrote the letter when you were calm. Day one chaos is exactly when you read it back: and obey it."
      }
    }
  ]
};

export default season1;
