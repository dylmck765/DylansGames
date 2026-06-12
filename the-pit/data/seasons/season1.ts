import type { Season } from "../../lib/types";

const season1: Season = {
  id: 1,
  title: "The Options Playbook",
  subtitle: "Rookie Camp Starts Now",
  description: "Ten episodes that walk you from never having touched an option to standing on the field with a real game plan. There's no filler here and no wall of jargon thrown at you. We break down the fundamentals the way you'd watch game film: what a contract actually is, how calls and puts make money, what your premium is really buying, and how to walk into your first trade with a plan in your pocket instead of a prayer.",
  episodes: [
    {
      id: "s1e1",
      seasonId: 1,
      number: 1,
      title: "Welcome to The Pit",
      tagline: "You can't run the play until you know what the ball is.",
      playOfTheWeek: "Picture January 2021. One trader had been pounding the table on GameStop for a year, holding call contracts he'd picked up for a few bucks each back when the stock sat under $20. When GME tore past $300, those same contracts turned roughly $50,000 of premium into tens of millions. Part of why it worked is that he never bought the stock at all. He bought the right to buy the stock, and that right exploded in value the moment the move arrived.",
      gameFilm: [
        "Welcome to The Pit, rookie. Before you touch a single trade, let's get one thing straight, because most people fumble it on day one. When you own a share of stock, you own a tiny sliver of a company. An option is a different animal, a contract between two traders about a stock. What you're actually buying is a ticket that lets you make a specific play on the team later on.",
        "Here's the whole contract in one breath. An option gives the buyer the right, though never any obligation, to buy or sell 100 shares of a stock at a set price, on or before a set date. That little word 'right' is the whole ballgame. You can use the contract if it suits you, or you can walk away and shrug it off. Nobody can force the buyer to do a thing.",
        "There are two basic plays. A call is the right to buy shares at a set price, and you run it when you think the stock is heading higher. A put is the right to sell shares at a set price, which you reach for when you think the stock is sinking, or when you want a little insurance on shares you already own. Between those two contracts you can place a bet on a stock heading in either direction, and that's really all there is to the menu.",
        "Now flip the field around. Every contract has two sides to it. The buyer pays money up front, called the premium, which is basically the price of admission, and in exchange picks up the rights. The seller pockets that premium and takes on the obligation. If the buyer decides to exercise their right, the seller has to deliver, no questions asked. The whole arrangement comes down to who gets to choose and who has to honor that choice, and you'd better know which jersey you've got on before you sit down.",
        "Why would anyone run these plays instead of just buying the stock? Two reasons: leverage and a known worst case. A single contract controls 100 shares for a fraction of what those shares would cost you. And here's the comforting part. If you buy an option and the play falls apart, the most you can lose is the premium you paid, not a penny more. You knew the price of the ticket before you ever walked into the stadium.",
        "But there's a warning siren too, so listen for it. That ticket comes with an expiration date, a final whistle. A stock can sit on your bench for decades waiting to come good, which an option simply cannot do. If your play doesn't happen before the clock runs out, the contract can expire worthless and the whole premium is gone. Options are a bet on direction and on time at once, and that combination is where all their power and all their danger come from.",
        "This season we'll take apart every piece of it: calls, puts, strikes, expirations, premium, and how to read the field in front of you. By Episode 10 you'll walk through a full trade from kickoff to final whistle. For now, just lock in the one sentence that matters. An option is a contract that hands the buyer rights and saddles the seller with obligations, and it dies on a deadline."
      ],
      takeaway: "An option is a contract about a stock rather than a piece of the company itself. The buyer pays a premium for the right (never the obligation) to buy or sell 100 shares at a set price by a set date. Buyers hold rights with a known worst-case loss, while sellers collect the premium and carry the obligation that comes with it.",
      caseStudies: [
        {
          title: "GameStop, January 2021: The Contract That Shook the Field",
          kind: "real",
          setup: "Roll back to late 2020. GameStop is a left-for-dead mall retailer trading under $20, and big funds are leaning heavily on the short side, betting the thing goes to zero. A scrappy crowd of retail traders disagrees, and they aren't quiet about it.",
          thePlay: "Rather than only buying shares, a lot of them bought call options, contracts that gave them the right to buy GME at fixed prices for a fraction of what the stock itself cost. When buying pressure and a short squeeze sent GME from under $20 to an intraday peak around $483 in January 2021, those cheap little rights became staggeringly valuable. The most famous trader in the whole saga turned a position built partly on roughly $50,000 of call premium into tens of millions on paper.",
          outcome: "Call buyers who sold into the spike walked away with life-changing gains. The funds stuck on the short side were holding obligations with no cap on them, and they lost billions. One of them needed a multi-billion dollar rescue just to survive. Plenty of latecomers who bought near the top also watched their contracts expire worthless once the stock came back down to earth.",
          lesson: "This is the contract doing exactly what it does. The call buyers put only their premium at risk and held the rights, while the short sellers were carrying open-ended obligations the whole time. Same stock, same week, and yet the people in different jerseys walked away with completely different outcomes."
        },
        {
          title: "GRDN: Dana Learns the Difference the Easy Way",
          kind: "fictional",
          setup: "Dana, a nurse who'd traded stocks for a couple of years, loved Gardenia Home (ticker GRDN), a lawn-and-garden chain trading at $40. Spring was coming and she figured the season would be a good one. She had $4,000 to put to work, and her usual habit was just to buy 100 shares.",
          thePlay: "This time, after a weekend of reading, she split the play up. She bought 50 shares for $2,000, plus one GRDN $42 call expiring in two months for $1.50, which came to $150 total since one contract covers 100 shares. The rest of her money stayed parked on the bench in cash.",
          outcome: "GRDN climbed to $47 in the contract's final weeks. Her 50 shares gained $350. Her single call, which was the right to buy at $42 while the stock sat at $47, was now worth roughly $5.00, or $500, which is a $350 gain on just $150 of risk. Same dollar profit, on about one-thirteenth of the capital.",
          lesson: "The contract did the same job as the shares with far less money tied up on the field. But Dana also understood the other side of the coin. If GRDN had gone nowhere, her shares would have been just fine and her $150 of premium would have been gone at the final whistle. Rights cost money, and they expire."
        }
      ],
      quiz: [
        {
          id: "s1e1-q1",
          question: "In plain English, what IS an option?",
          options: [
            "A small, permanent piece of ownership in an actual company, entitling you to a slice of its profits and a shareholder vote that never expires",
            "A loan from your broker that lets you control 100 shares now and pay for them later",
            "A binding order that requires you to buy 100 shares at the market price on a future date",
            "A contract giving the buyer the right (but not the obligation) to buy or sell 100 shares at a set price by a set date"
          ],
          correctIndex: 3,
          explanation: "An option is a contract written about a stock rather than the stock itself. The buyer pays a premium for the right, never the obligation, to buy with a call or sell with a put, 100 shares at a set price before the contract expires. When you own a share you own a piece of the company, whereas an option just hands you a right that comes with a deadline attached."
        },
        {
          id: "s1e1-q2",
          question: "Who carries the OBLIGATION in an options contract?",
          options: [
            "The seller, who wrote the contract",
            "The buyer, who paid for the contract",
            "The stock exchange where it trades",
            "Nobody, options are obligation-free for both sides"
          ],
          correctIndex: 0,
          explanation: "Paying the premium buys you rights, so the buyer can choose to exercise or just walk away. The seller took that premium as payment for standing ready, which means if the buyer exercises, the seller has to fulfill the contract. The choice always sits with the buyer and the duty always sits with the seller, and you never want to lose track of which jersey you're wearing."
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
          explanation: "When you buy an option, your maximum loss is the premium, full stop. The worst case is the contract expiring worthless and your $200 ticket landing in the trash. The open-ended kind of risk is something only the sellers of options ever take on, so as a buyer you always walk in knowing the worst case, which is the rookie's best friend."
        }
      ],
      paperTrade: {
        id: "s1e1-pt",
        title: "First Snap: Stock, Right, or Wrong Direction?",
        ticker: "AAPL",
        spotPrice: 210,
        brief: "Apple sits at $210 and you're feeling bullish over the next six weeks after a strong product cycle. You've got a small account and this is the first time you've ever even looked at an options chain. There are three plays on the board. Call it.",
        choices: [
          {
            label: "Buy 1 AAPL $230 call expiring THIS Friday for $0.30 ($30 total). It's cheap!",
            result: "AAPL drifts up to $213 by Friday. Nice read on the direction, but $230 was a country mile away and the clock just hit zero. The contract expires worthless. A cheap ticket to a game that can't be reached is still wasted money.",
            pnl: -30
          },
          {
            label: "Buy 1 AAPL $215 call expiring in 45 days for $4.20 ($420 total).",
            result: "AAPL climbs to $219 over four weeks. Your right to buy at $215 is now worth about $6.40 with time still left on the clock. You sell the contract for $640. The direction was right and you left the play enough time to develop, so the ticket actually paid.",
            pnl: 220
          },
          {
            label: "Skip the calls. Buy 1 AAPL $195 put for $2.10 ($210 total) because what goes up must come down.",
            result: "You bet on a drop in a stock you were actually bullish on. AAPL rises to $219 and your put, which is the right to sell at $195, bleeds out. You salvage $70 selling it late. Fighting your own thesis is a fumble pretty much every time.",
            pnl: -140
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two wins because it lined up all three dials at once. The direction was right, so you bought a call. The strike was one the stock could realistically reach, $215 sitting just above the $210 spot. And there was enough time for the play to develop, a full 45 days. Play one had the direction right too, but it picked an absurd strike with no clock behind it. Play three bought the wrong contract entirely. An option asks you to be right about which way the stock goes, how far it travels, and how soon it gets there, so make sure all of that lines up before you snap the ball or don't snap it at all."
      },
      scenario: {
        id: "s1e1-sc",
        title: "The Hot Tip",
        situation: "Your buddy texts you: 'Bro. BLITZ calls. Expiring Friday. Easy 10x, everyone in the group chat is loading up.' You have $500 in your account. You've never bought an option before, and honestly you couldn't explain what a call is to a stranger if your life depended on it.",
        question: "What's the pro move?",
        options: [
          "Throw the whole $500 in. Fortune favors the bold and the group chat is never wrong.",
          "Pass for now, study the contract, and paper trade it to watch how the play unfolds.",
          "Buy just $100 worth so you can 'learn by doing' on a trade you don't understand.",
          "Send your buddy the $500 and let him run the play for you since he clearly knows more."
        ],
        bestIndex: 1,
        coachNotes: "Option two is the only disciplined play on the board. You don't lose a dollar, and you pick up the exact education this trade is dangling in front of you for free. Pull up the contract, find the strike and the expiration, ask yourself what would genuinely have to happen for it to pay, then watch what it does into Friday. You'll learn more from an afternoon of that than a blown-up $500 would ever teach you. Option one is just gambling with a few extra clicks, because an expiring-Friday lottery ticket on a tip is how rookies quietly donate to the market. Option three sounds humble, but it's the same mistake at a discount; a trade you can't explain won't teach you anything, it only empties your wallet more slowly. Option four is the worst of the bunch, because now you've handed over both the money and the lesson to someone else. Rule one in The Pit: never run a play you couldn't draw up on a whiteboard for someone else."
      }
    },
    {
      id: "s1e2",
      seasonId: 1,
      number: 2,
      title: "Calls: Betting the Over",
      tagline: "When you like the team, you don't have to buy the franchise.",
      playOfTheWeek: "Think back to May 2023. NVIDIA closes around $305 before earnings, then drops guidance so monstrous the stock gaps up roughly 24% overnight. Traders holding even modestly out-of-the-money calls woke up to contracts worth ten and twenty times what they paid. It hit that hard for a simple reason. A call's gains have no ceiling, and a gap that size blew clean through every nearby strike on the board.",
      gameFilm: [
        "Episode 2, and we're running the most popular play in the whole book: the long call. Buying a call means paying a premium for the right to buy 100 shares at a fixed price, called the strike, any time before expiration. You're betting on the upside. You think the stock is heading higher, and you want a bigger payoff than just owning the shares would hand you.",
        "So how do you actually win? The stock has to climb. As it rises above your strike, your right to buy at that older, lower price keeps getting more valuable. Hold a $100-strike call when the stock hits $110 and you control the right to buy at $100 something everyone else is paying $110 for. That right is worth at least $10 per share, which works out to $1,000 per contract.",
        "Now mark the breakeven line on the field. At expiration you need the stock above your strike plus the premium you paid before you walk off a winner. Pay $3 for a $100 call, and at the final whistle the stock has to be over $103. If it lands above the strike but under $103, the contract still has some value, just less than your ticket cost you. Below $100, it's worthless. Know your line before kickoff.",
        "Here comes the headline act: leverage. Say a stock trades at $120 and you've got $1,200 to work with. That buys you 10 shares. Or it buys you two call contracts controlling 200 shares. If the stock jumps 15%, your 10 shares make about $180. The calls, though, can double or triple, because every dollar above the strike flows straight into a contract you picked up for a few bucks. Same field, same move, a much bigger swing per dollar you put down.",
        "But leverage is a two-way blitz, so don't fall in love with only the friendly half. Those same shares, if the stock goes nowhere, are still worth $1,200. The calls bleed value every single day the stock stands still, because the clock is baked right into the contract. And if the stock is below your strike at expiration, the calls go to zero, a full loss of everything you put in. That kind of total wipeout is routine for calls and almost unheard of for the shares themselves.",
        "So here's the pro frame. A long call is a defined-risk bet that a stock makes a specific move before a specific date. Your worst case is the premium, the price of admission, and your upside has no ceiling at all. That whole package, a loss you cap in advance paired with a gain that can run as far as the stock does, all of it racing a clock that quietly works against you, is the entire character of the long call. Respect all three parts of it, not just the fun one."
      ],
      takeaway: "A long call is the right to buy 100 shares at the strike price, and it pays off when the stock climbs past your strike by more than the premium before the final whistle. Leverage means a small stake can swing hard in both directions: the upside has no ceiling, but you take a total loss if the stock isn't there at expiration.",
      caseStudies: [
        {
          title: "NVIDIA, May 2023: The Guidance Heard Round the World",
          kind: "real",
          setup: "Spring 2023. The AI wave is building, and NVIDIA reports earnings on May 24 with the stock around $305. Options into the print are busy, with plenty of traders holding calls at strikes like $320 and $350 that look pretty ambitious at the time.",
          thePlay: "NVIDIA didn't just beat earnings. It guided next-quarter revenue roughly 50% above what Wall Street had penciled in, a number so far outside anyone's playbook that the stock gapped to around $380 the next morning, up about 24%, tacking on roughly $200 billion in market value while everyone slept.",
          outcome: "Calls that were out of the money at the close were suddenly deep in the money at the open. Contracts bought for a few hundred dollars were now worth thousands. A $320-strike call went from a hopeful little ticket to $60 of intrinsic value, around $6,000 per contract, in a single night's sleep. Of course, the traders holding puts into that print were wiped to near zero just as fast.",
          lesson: "This is the long call's whole signature in one story. The most a call buyer could lose that night was the premium they'd already paid, a number they knew going in, while the amount they could make had no limit at all, which on a 24% gap is the only figure that ends up mattering. The same leverage that makes this story legendary deletes premium just as efficiently when the gap goes the other way."
        },
        {
          title: "BLITZ: Marcus and the Two Tickets",
          kind: "fictional",
          setup: "Marcus, a junior accountant, was sure Blitzware (ticker BLITZ), a gaming company at $80, would run into its big console launch two months out. He had $800 of risk capital, money he could genuinely afford to lose, and a decision in front of him.",
          thePlay: "He bought one BLITZ $85 call expiring in 75 days for $4.00, which cost $400, and he kept the other $400 in reserve. His roommate Theo, just as bullish, dumped his whole $800 into twenty $110 calls expiring in two weeks at $0.40 apiece, sneering that Marcus was playing scared.",
          outcome: "BLITZ climbed steadily and hit $96 a week before Marcus's expiration. His $85 call was worth about $11.50, and he sold for a $750 profit, nearly doubling his stake. Theo's $110 calls expired worthless six weeks before the move even finished, a total loss, because the stock never got anywhere near $110 on his two-week clock.",
          lesson: "Both rookies were right about the stock, and only one of them got paid. Leverage rewarded the trader who gave the play some room on the clock and picked a strike within reach. A long call asks you to be right about more than direction, because it also rides on when the move shows up and how far the stock actually travels."
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
          explanation: "Breakeven at expiration for a long call is the strike plus the premium, so $50 + $2 = $52. At $51, your right to buy at $50 is worth $1, but you paid $2 for it, which leaves you down. Above $50 the contract has some value, and above $52 the actual trade starts making money, so keep those two lines separate in your head."
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
          explanation: "At expiration the call is worth its intrinsic value, which is $55 - $50 = $5 per share, or $500 per contract. You paid $200, so your profit is $500 - $200 = $300. Always run the math through the 100-share multiplier and then subtract the price of admission you paid up front."
        },
        {
          id: "s1e2-q3",
          question: "What does 'leverage' mean for a call buyer, in plain English?",
          options: [
            "Your broker lends you money so you can buy more shares than your cash allows",
            "Your gains are amplified while your losses stay capped by the exchange",
            "You can never lose more than the stock itself would have lost",
            "A small premium controls 100 shares, so gains and losses are both amplified"
          ],
          correctIndex: 3,
          explanation: "Leverage cuts both ways at once. One contract controls 100 shares for a fraction of their cost, so a winning move can return multiples of your premium. But a flat or falling stock can take that same contract to zero, a total loss, while a shareholder barely feels the dip. Whatever gets amplified gets amplified in both directions."
        }
      ],
      paperTrade: {
        id: "s1e2-pt",
        title: "The Leverage Decision",
        ticker: "NVDA",
        spotPrice: 120,
        brief: "NVIDIA trades at $120 and you're bullish over the next two months as the product cycle heats up. You have $1,500 of risk capital. There are three ways to bet on the upside here. Pick your play.",
        choices: [
          {
            label: "Buy 12 shares of NVDA for $1,440 and just own the stock.",
            result: "NVDA runs to $138 over seven weeks, a 15% move. Your 12 shares gain $18 each for a solid $216, up 15%. There's nothing wrong with it, but you brought a jogging pace to a sprint.",
            pnl: 216
          },
          {
            label: "Buy 1 NVDA $125 call expiring in 60 days for $6.00 ($600), keep $900 in reserve.",
            result: "NVDA runs to $138 with two weeks left on the contract. Your $125 call is worth about $13.50. You sell for $1,350, a $750 profit, which is 125% on the premium, and you never had more than half your capital at risk the whole time.",
            pnl: 750
          },
          {
            label: "Buy 2 NVDA $150 calls expiring in 10 days for $0.40 each ($80 total). Maximum lottery.",
            result: "NVDA inches to $124 over those 10 days, then makes its big run AFTER your contracts are dead. Right thesis, wrong clock, and a strike sitting on another planet. Both expire worthless.",
            pnl: -80
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two is the textbook long call. It used a strike just above spot that the stock could plausibly reach, gave the thesis 60 days to play out, and returned well over double the percentage the shares did while risking only $600. Play one is respectable, but it ignores the whole reason you'd reach for options in the first place, which is capital efficiency. Play three is the rookie classic, confusing 'cheap' with 'good.' Those $0.40 calls needed a 25% move inside 10 days. Lottery tickets do hit once in a while, but they're priced like lottery tickets for a reason, and that reason is exactly why you don't build a strategy on them."
      },
      scenario: {
        id: "s1e2-sc",
        title: "Up 60% With Three Weeks Left",
        situation: "You bought a call for $300 betting on a product announcement. The announcement happened, it was great, and the stock popped. Your call is now worth $480, up 60%. There are three weeks until expiration, your original thesis (the announcement) has fully played out, and the group chat is saying it's going higher.",
        question: "What do you do with the position?",
        options: [
          "Sell the call, or at least most of the position, and bank the win.",
          "Hold to expiration. Never sell a winner; max gains only.",
          "Double down. Buy another call with the profits since momentum is hot.",
          "Roll the whole position into next week's far out-of-the-money calls to leverage the leverage."
        ],
        bestIndex: 0,
        coachNotes: "Option one is the pro move. You bought the call for the announcement, the announcement came and paid you, and the profit sitting on the table is the trade working exactly as designed. With the catalyst gone, every remaining day is just clock-bleed on a contract whose reason for existing has already passed. Option two borrows a stock mindset where it doesn't belong; a stock can wait around forever, but your contract can't, and a 60% gain can melt to nothing across three flat weeks. Option three piles on risk right when your edge has expired. Option four is the same mistake holding a flamethrower, swapping a realized win for the lowest-probability tickets on the board. Pros trade the thesis, and once the thesis is done, the trade is done with it."
      }
    },
    {
      id: "s1e3",
      seasonId: 1,
      number: 3,
      title: "Puts: Profiting From the Drop",
      tagline: "Defense wins championships, and sometimes it scores.",
      playOfTheWeek: "Go back to February 2020. While most of the market was partying at all-time highs, a handful of funds quietly paid small premiums for deep protection on the S&P 500. Five weeks later the index had crashed 34% on COVID panic, and one tail-risk fund reported returns in the thousands of percent on its hedges. Here's why that happens: puts get explosively valuable at exactly the moment everything else is on fire.",
      gameFilm: [
        "Time to learn some defense. A put is the right, never the obligation, to sell 100 shares at the strike price before expiration. You buy a put when you think a stock is going down, or when you own shares and want a little insurance against a drop. It's the contract you reach for when you're expecting a stock to fall, which makes it the natural counterpart to the call you met last episode.",
        "How does a put score? The stock falls below your strike. Hold a $100-strike put when the stock drops to $85 and you own the right to sell at $100 something the market only pays $85 for. That right is worth at least $15 per share, or $1,500 per contract. The further the stock falls, the more your put is worth, all the way down to the stock hitting zero.",
        "Breakeven works in reverse for a put. At expiration you need the stock below the strike minus the premium. Pay $3 for a $100 put and the stock has to be under $97 at the final whistle for the trade to profit. And just like calls, your worst case as a buyer is the premium. The stock can rocket to the moon and you still only lose your ticket price.",
        "Now, there are two jerseys you can wear with a put. The first is speculation. You think a stock is overcooked and headed down, so you buy a put as a pure bet on the drop. This is how traders profit from declines without shorting the stock, and the difference there really matters. A short seller's risk has no ceiling, because a stock can keep rising forever, whereas a put buyer is only ever risking the premium they paid.",
        "The second jersey is insurance, what pros call a protective put. Say you own 100 shares and you're nervous about a rough stretch ahead, an earnings report, a court ruling, a shaky market. Buy a put and you've locked in a worst-case exit price. Own shares at $100, buy the $95 put for $2, and no matter what happens you can sell at $95. Your worst case becomes a $5 share loss plus the $2 premium, so $700 total, defined and capped. It's homeowner's insurance for your portfolio: you pay the premium hoping you never actually need it.",
        "One mindset warning before we break the huddle. Because puts pay when things fall, rookies start seeing crashes around every corner and bleeding premium on doom bets that never land. Markets rise more often than they collapse, and put premium evaporates on the clock just the way call premium does. Buy puts when you've got a real bearish thesis or a real asset to protect, not just because being scared happens to feel smart."
      ],
      takeaway: "A put is the right to sell 100 shares at the strike, and it gains value as the stock falls, with your worst-case loss capped at the premium. Use it as a defined-risk bet on a drop, or as insurance that locks in a worst-case sale price for shares you already own.",
      caseStudies: [
        {
          title: "The COVID Crash, March 2020: When Insurance Paid 100-to-1",
          kind: "real",
          setup: "February 19, 2020. The S&P 500 closes at a record high near 3,390. A virus is in the headlines, but the market is shrugging it off. Put protection on the index is cheap, because in a calm, rising market almost nobody wants to pay for insurance.",
          thePlay: "A small number of funds and traders bought S&P puts and other crash protection anyway, paying modest premiums for rights that would only ever matter in a disaster. Then the disaster showed up. In just over a month the index collapsed roughly 34% to around 2,237 on March 23, one of the fastest crashes in history.",
          outcome: "Those cheap puts became some of the most valuable contracts on the planet. One well-known tail-risk fund reported a return in the thousands of percent on its hedging strategy for the quarter, reportedly turning a sliver of client capital into billions in protection payouts. The unhedged portfolios, meanwhile, just took the full 34% hit on the chin.",
          lesson: "Puts are the only player on your roster whose value explodes while everything else is bleeding out. The insurance picture is exact here: premiums feel like wasted money in good times, and then one bad month pays for years of them. That's history, not advice, but it's history worth keeping in your back pocket."
        },
        {
          title: "HARBR: Priya Buys the Umbrella Before the Storm",
          kind: "fictional",
          setup: "Priya had 100 shares of Harbor Logistics (ticker HARBR) at $60, up big from her $35 cost basis. A regulatory ruling on shipping fees was due within a month, and analysts figured it could swing the stock 20% in either direction. She didn't want to sell, since taxes and conviction both said hold, but a 20% drop would really sting.",
          thePlay: "She bought one HARBR $55 put expiring in six weeks for $1.80, which cost $180. Now she held the right to sell her 100 shares at $55 no matter what the ruling turned out to say. The worst case was locked in: lose $5 a share from $60, plus the $180 ticket.",
          outcome: "The ruling came in ugly and HARBR cratered to $44. Her shares lost $1,600 of value, but her put, the right to sell at $55 while the stock sat at $44, was now worth about $11, or $1,100. Net damage came to roughly $680 instead of $1,600. Her neighbor in the same stock with no insurance ate the entire drop.",
          lesson: "The protective put didn't make the bad news good. What it did was make the bad news survivable and priced in advance, and that's the whole pitch. For a small premium she knew about going in, Priya erased a much larger loss she couldn't have predicted. She kept her shares, kept her conviction, and slept through the storm."
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
          explanation: "A put is the right to sell at the strike, so it pays off as the stock falls. At expiration you need the stock below the strike minus the premium, so pay $3 for a $100 put and your breakeven sits at $97. The deeper the drop below that line, the bigger your score."
        },
        {
          id: "s1e3-q2",
          question: "What's the key risk difference between buying a put and shorting 100 shares of stock?",
          options: [
            "There's no real difference; the two positions carry the same risk",
            "The short seller risks only a borrow fee; the put buyer's risk is unlimited",
            "Puts profit when stocks rise, while shorts profit when stocks fall",
            "The put buyer risks only the premium; the short seller's risk is unlimited"
          ],
          correctIndex: 3,
          explanation: "Both positions bet on a drop, but the jerseys are different animals. A short seller loses dollar for dollar as a stock climbs, and since there's no ceiling on a stock price, there's no ceiling on the loss. A put buyer making the same bet can only ever lose the premium they paid, which is exactly why rookies who want to bet on a fall should learn puts first."
        },
        {
          id: "s1e3-q3",
          question: "You own 100 shares bought at $100 and buy a $95-strike put for $2.00 ($200) as insurance. The stock crashes to $80. Counting shares and put together, what's your approximate worst-case total loss?",
          options: [
            "$2,000: the full drop from $100 down to $80 on all 100 shares",
            "$200: just the premium, since the shares are fully protected",
            "$700: the $500 drop to the $95 floor plus the $200 premium",
            "$500: the drop from $100 to the $95 floor, with the premium refunded"
          ],
          correctIndex: 2,
          explanation: "The put guarantees you can sell at $95, so the most your shares can really lose is $5 each, or $500, no matter how far the stock falls beyond that. Add the $200 you paid for the insurance and your worst case lands at $700 instead of $2,000. The premium is the cost of the floor, and the floor is the entire point."
        }
      ],
      paperTrade: {
        id: "s1e3-pt",
        title: "Betting the Under",
        ticker: "TSLA",
        spotPrice: 250,
        brief: "Tesla has ripped 40% in two months up to $250, and your analysis says the run is exhausted: deliveries look soft and the chart is rolling over. You want to bet on a pullback over the next six weeks. There are three ways to play defense as offense.",
        choices: [
          {
            label: "Short 10 shares of TSLA at $250. Classic bear play.",
            result: "TSLA drops to $228 and your short makes $220. It worked this time, but you spent six weeks exposed to unlimited risk on a stock famous for face-ripping rallies. One surprise headline and this play loses multiples of what it just made.",
            pnl: 220
          },
          {
            label: "Buy 1 TSLA $240 put expiring in 45 days for $9.00 ($900).",
            result: "TSLA slides to $228 over three weeks. Your right to sell at $240 is worth about $14.50 with weeks still left on the clock. You sell for $1,450, banking $550, and your risk was capped at $900 the whole way through.",
            pnl: 550
          },
          {
            label: "Buy 1 TSLA $180 put expiring THIS week for $0.60 ($60). Crash insurance, lottery pricing.",
            result: "TSLA dips to $238 by Friday, a real pullback, but nowhere near $180 in five days. The contract expires worthless. You predicted rain and bought flood insurance for a different city.",
            pnl: -60
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two matched the thesis to the contract. A moderate pullback called for a strike near the money at $240 and enough clock, 45 days, for it to actually happen. It captured the move while keeping your risk strictly capped. Play one made similar money but wore the unlimited-risk jersey the entire time, which is precisely the exposure puts exist to avoid. Play three is the doom-lottery trap: a $70 drop in a week is a crash, and you don't bet on crashes, you occasionally insure against them. Right idea, unplayable contract."
      },
      scenario: {
        id: "s1e3-sc",
        title: "Earnings Week Jitters",
        situation: "You own 100 shares of a stock at $90, up nicely from your $70 buy. Earnings hit in two weeks and the last two reports moved the stock more than 15% each time. You believe in the company long-term, but a bad print could vaporize months of gains. A $85-strike put expiring just after earnings costs $2.50 ($250).",
        question: "What's the disciplined play?",
        options: [
          "Sell all 100 shares now and buy back after earnings. Can't lose if you're not playing.",
          "Do nothing. You're a long-term investor and insurance is for cowards.",
          "Sell your shares AND buy puts so you profit big if the print tanks.",
          "Hold your shares and buy the $85 put as insurance through the event."
        ],
        bestIndex: 3,
        coachNotes: "Option four is the textbook protective put. For $250 you lock in the right to sell at $85, which caps your worst case at roughly $750 of give-back while leaving your shares free to run if earnings smash. That's insurance doing its one job: a known cost that caps the downside through the event while keeping all your upside intact. Option one isn't crazy, but it abandons your long-term thesis, can trigger taxes, and leaves you with no upside if the print is great; you said you believe in the company, so act like it. Option two confuses conviction with exposure, because long-term faith doesn't mean you have to eat every 15% air pocket unprotected when a defined-cost floor is sitting right there. Option three isn't hedging anymore, it's a brand-new bearish bet that contradicts your own thesis. Insurance exists to protect the play you already have, and the moment you start treating it as the play itself you've left hedging behind."
      }
    },
    {
      id: "s1e4",
      seasonId: 1,
      number: 4,
      title: "The Contract",
      tagline: "Strike, clock, and the multiplier: read the fine print or pay the fine.",
      playOfTheWeek: "November 2020. The S&P committee announces Tesla will join the index in December, and the stock starts a 60%+ sprint into the inclusion date. Traders holding December and January calls rode the whole run, while traders holding calls that expired in late November watched the biggest leg happen days after their contracts had already died. Same thesis, same stock, and the expiration date alone decided who got paid.",
      gameFilm: [
        "Every option contract carries three numbers you have to read before you ever click buy: the strike, the expiration, and the multiplier. Miss any one of them and you're running onto the field without a helmet. Today we read the fine print, line by line.",
        "First up is the strike price. That's the locked-in price the whole contract revolves around, the price you can buy shares at with a call or sell shares at with a put. Strikes come in fixed steps set by the exchange, every dollar, every $2.50, every $5 depending on the stock. The strike you pick defines how far the stock has to travel for your play to score. Think of it as the yard line you're betting the offense reaches.",
        "Second is the expiration date, the final whistle. Most stocks list contracts expiring every Friday for the next several weeks, then monthlies stretching out a year or more. After the closing bell on expiration day, the contract is either settled or it's gone. There is no overtime in this league. A thesis that finally plays out the Monday after your Friday expiration pays you exactly nothing. So when you pick an expiration, what you're really answering is: by when does my move have to happen?",
        "Third, and this one quietly empties rookie accounts, is the multiplier. One standard option contract controls 100 shares. Every price you see on an options chain is quoted per share, so the real cost is the quote times 100. A call quoted at $2.50 costs $250. Quoted at $30.00? That contract costs $3,000. Rookies see '$2.50' and think pocket change, then buy ten contracts and discover they just spent $2,500. The quote is per share and the trade is that quote times 100, so tattoo it somewhere you'll see it.",
        "Put the three together and you can read any contract like a box score. 'AAPL June 20 $215 call at $4.20' means the right to buy 100 shares of Apple at $215 each, any time until June 20, for a total ticket price of $420. One line, full play. Read off the strike for your target price, the expiration for your deadline, and then multiply the quote by 100 to see what the whole thing actually costs you.",
        "Last detail for the film room: one contract is real size. Controlling 100 shares of a $200 stock is $20,000 of exposure. That's why options are capital-efficient, and it's also why 'just one contract' isn't automatically a small position. Size your plays by the premium you've got at risk and the exposure you're controlling, not by the number of contracts. That fine print you're tempted to skim past is the entire contract, so read it like your account depends on it, because it does."
      ],
      takeaway: "Every contract is three numbers: the strike (your target price), the expiration (your deadline, with no overtime), and the multiplier (every quote is per share, so it's times 100 per contract). Read all three before you click, because a $2.50 quote is a $250 trade and a perfect thesis on the wrong expiration pays you nothing at all.",
      caseStudies: [
        {
          title: "Tesla Joins the S&P 500: A Lesson Written in Expiration Dates",
          kind: "real",
          setup: "November 16, 2020. After months of speculation, the index committee announces Tesla will join the S&P 500 on December 21. Index funds will be forced to buy tens of billions of dollars of the stock by that date. The market knows a wave of buying is coming, and it knows exactly when it lands.",
          thePlay: "Tesla ran from around $408 on the announcement to roughly $695 on inclusion day, a 60%+ sprint in five weeks. Call buyers had to pick a deadline. Anyone who chose December or January expirations gave the play room to reach that known catalyst date, while the traders who grabbed cheaper calls expiring in late November ended up holding contracts that died with weeks of the rally, including the steepest leg, still ahead of them.",
          outcome: "The December and January call holders caught one of the great momentum runs of that era, with some contracts up many hundreds of percent. The short-dated crowd often made something on the early move, but their contracts hit the final whistle before the play finished, and some out-of-the-money November strikes expired worthless even though the thesis turned out dead right.",
          lesson: "The catalyst had a date stamped on it, and the smart money matched the expiration to that date. When your thesis comes with a calendar, your contract has to cover the calendar too. Treat the expiration as half the bet you're making, because that's exactly what it is, not some detail to skim past on the way to the strike."
        },
        {
          title: "FRGT: The Decimal Point That Ate Devon's Paycheck",
          kind: "fictional",
          setup: "Devon, three weeks into options, loved Freightline Robotics (ticker FRGT) at $140 ahead of a product demo. He found a $145 call quoted at $6.50 and, thinking like a stock trader, figured ten contracts at '$6.50 each' would run him about $65.",
          thePlay: "He typed in 10 contracts and smashed buy. The order filled for $6,500, which was his entire account and then some on margin, because $6.50 per share times 100 shares times 10 contracts is $6,500. He'd accidentally taken control of 1,000 shares, $140,000 of exposure, on a position he thought was lunch money.",
          outcome: "FRGT wobbled down 3% the next day and his position dropped over $2,000. Panicked and badly over-levered, Devon dumped everything at a $2,400 loss. The demo a week later was a hit, the stock popped, and the calls he'd panic-sold would have doubled. Beyond the money it cost him, the multiplier had quietly forced him out of a winning play before it ever got going.",
          lesson: "Devon's thesis was perfectly fine, and what wrecked him was the sizing, because he never multiplied that per-share quote by the 100 shares each contract controls. The order ticket spells out the real cost for you before you ever confirm, so read it every single time."
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
          explanation: "Options quotes are per share, and one standard contract controls 100 shares, so $2.50 times 100 comes to $250. The fastest way rookies blow themselves up is treating the quote like the price. Remember that the quote is per share and the actual trade is that number times 100."
        },
        {
          id: "s1e4-q2",
          question: "What does the STRIKE price of a call option represent?",
          options: [
            "The fixed price at which the contract lets you buy the shares",
            "The per-share price you paid for the option contract",
            "The stock's price on the day you bought the option",
            "The price the market expects the stock to reach before expiration"
          ],
          correctIndex: 0,
          explanation: "The strike is the locked-in transaction price the contract gives you rights at, so you buy at the strike with a call and sell at the strike with a put. What you actually paid for the contract is the premium, which is a completely different number. The strike is the yard line your play gets measured against."
        },
        {
          id: "s1e4-q3",
          question: "Your call expires Friday. The stock makes exactly the move you predicted... the following Monday. What happens?",
          options: [
            "The contract automatically extends since your thesis was right",
            "You get paid Monday because the move happened close enough",
            "Your contract died Friday; Monday's move pays you nothing",
            "The broker refunds half your premium for a near miss"
          ],
          correctIndex: 2,
          explanation: "Expiration is the final whistle, and there's no overtime in this league. The contract lives until the close on expiration day and not one second longer, so if it finished worthless, the full premium is gone and nothing that happens next week changes that. A correct thesis on the wrong clock is still a losing trade, which is exactly why your expiration has to cover the timeline of your thesis with room to spare."
        }
      ],
      paperTrade: {
        id: "s1e4-pt",
        title: "Same Strike, Three Clocks",
        ticker: "MSFT",
        spotPrice: 420,
        brief: "Microsoft sits at $420 and you expect a climb to the mid-430s sometime in the next month on cloud momentum, though you can't pin down the exact week. You like the $430 strike. Now pick the contract, because the same strike comes with three very different clocks and price tags.",
        choices: [
          {
            label: "Buy 1 MSFT $430 call expiring THIS Friday, quoted at $1.10 ($110). Cheapest ticket on the board.",
            result: "MSFT grinds to $424 by Friday: right direction, not enough of it, no time left. The contract expires worthless. The move you predicted shows up the following week, and you watch it from the bench.",
            pnl: -110
          },
          {
            label: "Buy 1 MSFT $430 call expiring in 45 days, quoted at $7.00 ($700).",
            result: "MSFT reaches $436 three weeks in. With time still on the clock, your call trades at about $10.50 and you sell for $1,050. The $700 ticket cost more for a reason: it actually covered your timeline.",
            pnl: 350
          },
          {
            label: "Buy 1 MSFT $430 call quoted at $5.00, eyeballing the price and assuming the total cost is $5. Slam buy without reading the order ticket.",
            result: "The fill costs $500, which is five weeks of your budgeted risk in one click, and the position is bigger than you ever planned. Rattled, you dump it on the first 2% dip for $2.60. The multiplier and the panic wrote this loss, not the thesis.",
            pnl: -240
          }
        ],
        bestChoiceIndex: 1,
        debrief: "Play two wins on fine print. Your thesis said 'mid-430s within a month, timing fuzzy,' so the contract had to outlive the fuzziness, and 45 days covers it with margin to spare. Play one bought a deadline your own thesis never supported, which is the most common contract-reading error in the whole rookie book. Play three is the multiplier trap plus its evil twin, emotional sizing, because a position you misunderstand is a position you'll end up mismanaging. Check the strike, check the clock, and multiply the quote by 100 to see the real cost, and do all of it on every single trade without exception."
      },
      scenario: {
        id: "s1e4-sc",
        title: "The Order Ticket Double-Take",
        situation: "You've budgeted $300 of risk for a trade idea. You find a call quoted at $3.00 and set up an order for 10 contracts, thinking 10 times $3 is $30, a steal. Just before you hit confirm, the order ticket flashes an estimated cost of $3,000.",
        question: "What's the pro move?",
        options: [
          "Stop, resize to a single contract, and re-check the ticket before you submit.",
          "Confirm anyway. The platform is probably displaying it weird and it'll sort itself out.",
          "Switch to a different option quoted at $0.30 so 10 contracts only costs $300.",
          "Confirm the order but plan to sell half tomorrow to fix the sizing."
        ],
        bestIndex: 0,
        coachNotes: "Option one is the only answer here. The ticket just did its job: the per-share quote times the 100-share multiplier means each contract is $300, so one contract is your entire budget and one contract is the trade. That pause-and-recheck habit costs five seconds and saves accounts. Option two, ignoring a 10x cost discrepancy on a hunch, is how the Devon stories happen; the platform isn't wrong, your mental math is. Option three fixes the dollar amount by wrecking the trade, since a $0.30 option is a different strike or a dying clock, a completely different bet you haven't analyzed, chosen purely because the number happened to fit. Option four means knowingly taking 10x your planned risk overnight, and 'I'll fix it tomorrow' is not a risk plan. When the ticket surprises you, the ticket is the teacher."
      }
    },
    {
      id: "s1e5",
      seasonId: 1,
      number: 5,
      title: "Premium: The Price of Admission",
      tagline: "Every ticket has two ingredients. One of them melts.",
      playOfTheWeek: "June 2021. AMC rockets from $12 to a peak near $72, and call premiums go thermonuclear: traders paid massive prices for contracts because the hype was baked into every ticket. When the frenzy cooled, the stock barely fell at first, yet those bloated premiums collapsed anyway. The reason is simple. Most of that price was hope rather than value, and hope melts.",
      gameFilm: [
        "Today we break down what you're actually paying for. The premium, your price of admission, isn't one single number. It's two ingredients baked into one ticket: intrinsic value and extrinsic value. Learn to split every premium into those two parts and you'll understand options pricing better than most rookies ever manage to.",
        "Intrinsic value is the real, right-now value, what the contract would be worth if you exercised it this second. For a call, it's the stock price minus the strike whenever the stock is above the strike. Stock at $105, call strike at $100, and that right to buy $105 stock for $100 is worth $5 of pure substance. For a put, you flip it: strike minus stock price. If that math comes out negative, intrinsic value is just zero. It never drops below zero, because a right you wouldn't bother using is simply a right you don't use.",
        "Extrinsic value is everything else, and 'everything else' means possibility. Take that $100-strike call trading at $7 with the stock at $105. Five dollars of that is intrinsic. The other $2? That's the market charging you for what might happen before expiration, the chance the stock keeps climbing. More time on the clock means more extrinsic value, because more can happen. Wilder, more volatile stocks carry more extrinsic value too, because their 'might happen' is simply bigger.",
        "Here's the part that pays your tuition. Extrinsic value melts. Every day that passes, the 'what might happen' window shrinks, so that slice of the premium drains away. Traders call it time decay. At expiration the melt is total: extrinsic hits zero and a contract is worth exactly its intrinsic value, nothing more. The final whistle doesn't care one bit about what might have been.",
        "This explains the rookie heartbreaker, the one where you buy a call, the stock inches up, and somehow your option loses money. How? The stock's slow crawl added less intrinsic value than the clock melted off in extrinsic. You were right on direction and still lost, because you paid up front for a big chance at a move and the move that actually arrived was a small one. So buying an option asks more of the stock than just heading your way. It has to head your way faster than your premium melts.",
        "So read every premium the way a pro does, asking how much of this ticket is substance and how much of it is hope. A deep in-the-money call might run 90% intrinsic, sturdy stuff that moves right along with the stock, while a cheap out-of-the-money call can be nothing but hope, every cent of it melting a little more each day. Neither one is automatically wrong, but you'd better know which one you're holding, and the only way to know is to do that two-ingredient split before you buy."
      ],
      takeaway: "Premium is intrinsic value (the real, exercise-it-now value) plus extrinsic value (the price of time and possibility). Extrinsic melts every day and hits zero at the final whistle, so an option buyer needs the stock to move enough to outrun the melt, not just move in the right direction.",
      caseStudies: [
        {
          title: "AMC, June 2021: Paying $20 for $0 of Substance",
          kind: "real",
          setup: "June 2021. AMC explodes from around $12 to an intraday peak near $72 in days as the meme-stock crowd piles in. Everyone wants calls, and options market makers respond the only way they can, by jacking up extrinsic value to historic levels. Hype is now an ingredient with a price tag on it.",
          thePlay: "At the peak of the frenzy, out-of-the-money AMC calls, contracts with zero intrinsic value, traded for enormous premiums, sometimes $10, $20 or more per share for strikes the stock had never even reached. Buyers were paying pure extrinsic, a very expensive 'maybe.' When the mania cooled off, that possibility-pricing deflated fast.",
          outcome: "Traders who bought those inflated calls found out they could lose heavily even when AMC stayed elevated or dipped only a little, because the extrinsic portion of their premium collapsed on its own. A call bought for $20 of pure hope could become a call worth $6 of slightly-less hope within days, with the stock still well above where they'd first noticed it.",
          lesson: "The premium has two ingredients, and in a frenzy you're mostly buying the melting one. Getting the direction right wasn't enough, because buyers needed the stock to outrun a historically bloated extrinsic value, and almost nothing outruns that. Always ask how much of this ticket is substance and what you're paying for the hope."
        },
        {
          title: "FZZY: Right Direction, Wrong Ingredient",
          kind: "fictional",
          setup: "Jamal was bullish on Fizzy Brands (ticker FZZY) at $50 with two big retail partnerships rumored. He had $600 and a month of patience. The chain offered him two tickets: the $45 call (deep in the money) at $6.00, mostly substance, or the $55 call (out of the money) at $1.20, pure hope, and he could buy five of those for the same money.",
          thePlay: "Five contracts sounded like five times the winning, so Jamal bought five $55 calls for $600 total. His premium was 100% extrinsic, every dollar of it was 'maybe,' and every day of it was melting.",
          outcome: "FZZY rose steadily to $54 over the month, up 8%, a genuinely good read on direction. But the stock never crossed $55, so his calls never gained a cent of intrinsic value, and the extrinsic drained to zero by expiration. Five contracts, the right thesis, and a total loss of $600. That single $45 call he passed on? With FZZY at $54 it was worth $9.00 at the whistle, a $300 gain.",
          lesson: "Jamal's read on FZZY was actually good. What sank him was that 100% of his premium was the melting ingredient, and the stock's solid but modest move couldn't outrun that melt. Stacking up more contracts of pure hope doesn't buy you any extra edge, and plenty of times it's the boring, substance-heavy ticket that ends up being the one that cashes."
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
          explanation: "Intrinsic for a call is stock minus strike, so $105 - $100 = $5 of real, exercise-it-now value. Whatever's left of the premium is extrinsic, which is $7 - $5 = $2, the price of time and possibility. Run this split on every option you ever think about buying."
        },
        {
          id: "s1e5-q2",
          question: "What happens to extrinsic value as expiration arrives?",
          options: [
            "It melts to zero, leaving only intrinsic value behind",
            "It gradually converts into intrinsic value",
            "It stays constant as long as the stock doesn't move",
            "It doubles as expiration excitement pulls in more buyers"
          ],
          correctIndex: 0,
          explanation: "Extrinsic value is the price of what might happen, and at the final whistle nothing more can happen. It decays every day, faster near the end, and reaches zero at expiration. A contract that finishes with no intrinsic value finishes worth nothing, no matter what you paid for the possibility."
        },
        {
          id: "s1e5-q3",
          question: "You buy a call, the stock rises slowly in your direction for two weeks... and your option is DOWN money. What's the most likely explanation?",
          options: [
            "Your broker is charging hidden fees on the position",
            "The option is temporarily mispriced and will snap back soon",
            "Calls only profit from fast moves; slow moves never count",
            "Time decay melted value faster than the slow move added it"
          ],
          correctIndex: 3,
          explanation: "This is the classic two-ingredient lesson. The direction was right, but the gain in substance came in smaller than the daily melt of the hope you paid for. Being right about direction only pays when the move arrives fast enough to outrun the decay, so a slow, correct call can still lose money whenever your premium was heavy on extrinsic."
        }
      ],
      paperTrade: {
        id: "s1e5-pt",
        title: "Substance vs Hope",
        ticker: "AMZN",
        spotPrice: 185,
        brief: "Amazon trades at $185 and you expect a modest grind higher, a few dollars over the next three weeks, into a logistics announcement. Three tickets sit on the chain, each with a very different intrinsic/extrinsic recipe. Pick your ingredient mix.",
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
            result: "AMZN's $4 climb doesn't move the needle on a strike $20 away. The contract bleeds to $0.15 by week three and you salvage what's left. Every cent of it was extrinsic, so every cent of it was melting the whole time you held it.",
            pnl: -70
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Your thesis was a modest move, and the ingredient mix had to match it. The deep in-the-money call was mostly intrinsic, so it gained nearly dollar for dollar with the stock and had almost nothing to melt. The at-the-money and far out-of-the-money tickets were mostly or entirely extrinsic, and a slow $4 grind just can't outrun three weeks of decay on those. Notice the brutal scoreboard here: all three plays got the direction right, and only one of them made money. The recipe has to match the thesis, so a modest grind like this one calls for a substance-heavy ticket, and you save the pure-hope contracts for the rare times you're betting on something big and fast."
      },
      scenario: {
        id: "s1e5-sc",
        title: "The Slow Bleed",
        situation: "Two weeks ago you bought an out-of-the-money call for $200 betting on a quick pop. The pop never came; the stock has gone sideways, and the option is now worth $120, down 40% with 10 days left, purely from time decay. The stock hasn't dropped at all. Your original thesis was 'quick pop within a week or two.'",
        question: "What do you do?",
        options: [
          "Hold to expiration. The stock hasn't fallen, so the option can recover any day now.",
          "Buy more calls at the discounted price to average down your cost basis.",
          "Sell the option and salvage the $120 while the market will still pay it.",
          "Roll it into an even cheaper option expiring in 2 days to win it all back at once."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the disciplined exit. Your thesis had a clock built into it: 'quick pop within a week or two.' Two weeks of sideways means the thesis already failed, and everything left in that contract is melting hope, decaying faster every day into expiration. Selling salvages $120 that will otherwise bleed toward zero. Option one is the most common rookie hold; 'the stock didn't drop' feels like safety, but for an extrinsic-heavy option, going sideways is the same as losing. Option two averages down into accelerating decay, doubling a bet whose whole premise is already dead. Option four swaps a wounded position for a near-pure lottery ticket, the fastest-melting contract on the board. When the thesis dies, salvage the hope while someone will still pay for it."
      }
    },
    {
      id: "s1e6",
      seasonId: 1,
      number: 6,
      title: "Moneyness",
      tagline: "In the money, at the money, out of the money: know your field position.",
      playOfTheWeek: "February 3, 2022. Meta posts an ugly earnings report and the stock craters 26% in a single day, the biggest one-day market value wipeout in history at the time. Far out-of-the-money puts bought for pocket change the day before paid 20x and more, while in-the-money puts paid solidly but modestly. One earnings print, one crash, and moneyness decided whether you doubled your money or 20x'd it. On any normal day, of course, those same far-out puts just lose it all.",
      gameFilm: [
        "Field position time. 'Moneyness' is just the relationship between the stock price and your strike, and it sorts every option on the board into three buckets: in the money, at the money, and out of the money. Three buckets, three completely different risk and reward profiles. This is the vocabulary of every options conversation you'll ever have, so let's nail it down.",
        "In the money, or ITM, means the option has intrinsic value right now. For a call, that's the stock sitting above the strike, so a $90 call on a $100 stock is $10 in the money. For a put it works the other way, with the stock below the strike, so a $110 put on that same $100 stock is $10 in the money. ITM options are the most expensive tickets on the board, because part of what you're paying for is real substance you could cash in today.",
        "At the money, or ATM, means the strike is right at (or nearly at) the stock price, like a $100 call or put on a $100 stock. There's no intrinsic value yet, so the contract is all extrinsic, but it's one step away from gaining substance in either direction. ATM options carry the most extrinsic value on the whole chain, because this is where the uncertainty peaks. It's a coin flip priced as a coin flip.",
        "Out of the money, or OTM, means no intrinsic value at all, and the stock has to travel just to get some. A $110 call on a $100 stock, or a $90 put on that same stock. These are the cheapest tickets on the board, priced low because they're built entirely out of possibility, and they expire worthless unless the stock crosses the strike by the final whistle. The majority of them never make it across, which is exactly why they're so cheap in the first place.",
        "Here's the risk and reward trade running through all three buckets. An ITM option costs more, finishes with value more often, tracks the stock closely, and tends to hand you smaller percentage payoffs for it. An OTM option is cheap because the odds are against it, yet when the stock makes a violent move straight through your strike, the percentage gains can be spectacular. ATM sits in the middle, with balanced odds and the most time value of all, the workhorse of directional trading. No bucket is best in the abstract, so the one to reach for is simply whichever fits the move you actually expect.",
        "And that's the play call, rookie. Moneyness is a probability dial, and you set it every time you pick a strike. If you're expecting a modest, reliable move, an ITM or ATM strike keeps you in high-probability territory where your forecast can actually pay. If you genuinely expect a monster move and you can stomach losing the whole ticket most of the time, then a small OTM position is at least an honest bet on those long odds. The rookie disaster is buying deep OTM because it's cheap while expecting only a modest move, which means paying lottery prices for a play your own thesis says won't reach the end zone."
      ],
      takeaway: "Moneyness is field position. ITM means your option already has intrinsic value, ATM means the strike sits at the stock price, and OTM means the stock has to travel just to give your contract any substance. It works as a probability dial, where paying up for an ITM strike buys you better odds of finishing with value, and the cheap OTM strikes are cheap precisely because they usually expire worthless. Pick the bucket that matches the size of the move you actually expect.",
      caseStudies: [
        {
          title: "Meta's 26% Crash: One Day, Three Buckets, Three Outcomes",
          kind: "real",
          setup: "February 2, 2022. Meta (then trading around $323) reports earnings after the close: a user-growth stall and a grim outlook. The stock gaps down to roughly $237 the next day, off 26%, erasing over $230 billion of market value, the largest single-day wipeout the market had ever seen up to that point.",
          thePlay: "Before the print, put buyers had the whole moneyness menu in front of them. Deep ITM puts were expensive and already loaded with intrinsic value. ATM puts near $320 were pricey because earnings uncertainty had pumped up the extrinsic. Far OTM puts at strikes like $250 were pocket-change premiums for a strike 20%+ below the stock, a bucket that almost always expires worthless.",
          outcome: "The 26% gap blew straight through every bucket. The far OTM $250 puts went from lottery tickets to deep ITM monsters, paying out 20x, 50x and more on premiums of a few dollars. ATM puts multiplied handsomely. Deep ITM puts made strong but ordinary gains. And it's worth saying out loud: on the thousands of earnings nights when stocks don't drop 26%, those far OTM puts simply burn to zero.",
          lesson: "Moneyness set the payoff table before the event ever happened, and the low-probability buckets paid spectacularly precisely because they almost never pay. The crash didn't make OTM puts a smart everyday play; it just showed exactly what they're priced for. Pick your bucket for the move you expect, and know the odds you're accepting when you do."
        },
        {
          title: "QRTZ: The $200 Budget and the Three Doors",
          kind: "fictional",
          setup: "Lena had $200 of true risk money and a thesis: Quartzline Watches (ticker QRTZ), trading at $50, should drift to $53-54 over the next month on solid holiday orders. Nothing explosive, just a steady grind. The chain offered her three doors.",
          thePlay: "Door one was a $45 ITM call at $5.60, too expensive for her $200. Door two was a $50 ATM call at $1.90, one contract, $190, which fit the budget. Door three was ten $60 OTM calls at $0.20 each, $200 of pure lottery, and her favorite at first glance because ten contracts felt like real size. She caught herself, re-read her own thesis ('$53-54, steady grind'), and realized $60 wasn't anywhere on her map. She bought the single ATM call.",
          outcome: "QRTZ ground up to $53.50 by expiration week. Her $50 call was worth about $3.60 and she sold for a $170 profit, nearly 90% on her stake. The ten $60 calls she almost bought? The stock never got within $6 of that strike, so all ten would have expired worthless, a total loss on the exact same correct thesis.",
          lesson: "Lena's edge came less from picking the stock than from matching the bucket to the thesis, so a modest-move forecast bought her a modest-distance strike. Stacking up cheap contracts can feel like conviction, but a low price tag is no guarantee of a good trade. The right door is the one your own forecast can actually walk through."
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
          explanation: "A put is in the money when the stock is below the strike, so with the stock at $80, the $85 put carries $5 of intrinsic value, the right to sell at $85 something worth $80. The $85 call is out of the money, the $80 call is at the money, and the $75 put is out of the money. The simple test is which side of the strike pays the contract off, since a call only has substance once the stock is trading above it, and the same logic flips for a put."
        },
        {
          id: "s1e6-q2",
          question: "How much intrinsic value does an OUT-of-the-money option have?",
          options: [
            "Zero, no matter how large the premium is",
            "It depends on how much time is left on the clock",
            "A negative amount, which is why they're so cheap",
            "An amount equal to the distance between stock and strike"
          ],
          correctIndex: 0,
          explanation: "OTM means no intrinsic value by definition, because the right isn't worth using at today's prices. Every dollar of an OTM option's premium is extrinsic, the melting ingredient, which is why these contracts go to zero at expiration unless the stock crosses the strike. Intrinsic value never goes negative; it just stops at zero."
        },
        {
          id: "s1e6-q3",
          question: "What's the core trade-off when you choose OTM instead of ITM?",
          options: [
            "OTM costs more up front but finishes in the money more often",
            "There's no genuine trade-off; OTM is simply better leverage on the exact same move",
            "ITM options expire sooner than OTM options on the same stock",
            "OTM is cheaper and pays more IF the big move comes, but usually expires worthless"
          ],
          correctIndex: 3,
          explanation: "Moneyness is a probability dial. OTM tickets carry low prices because they usually expire worthless, so a cheap quote isn't the market doing you a favor, it's the market quoting you the long odds. You pay up for an ITM strike in exchange for better odds of finishing with value and a contract that moves right along with the stock. Neither one is 'better' on its own, since the right bucket is the one that matches the size of the move you actually expect."
        }
      ],
      paperTrade: {
        id: "s1e6-pt",
        title: "Pick Your Bucket",
        ticker: "GOOGL",
        spotPrice: 175,
        brief: "Alphabet trades at $175 and your research points to a move toward $180-182 over the next 30 days as ad revenue rebounds, a solid but unspectacular climb. Three strikes, three buckets, all expiring in 30 days. Set the probability dial.",
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
        debrief: "Your thesis was $180-182, a $5-7 move. The ITM $165 call won because it was mostly substance with high odds of finishing valuable on your forecast; all it needed was for the stock not to collapse. The ATM call was defensible but spent most of the move buying back its own time value. The OTM $190 call required a move nearly double your own projection, so buying it would have meant betting against your own research. Notice what made this easy: you wrote the thesis first, then picked the strike. Rookies do it backwards, grabbing the price tag first and then inventing a thesis to justify it."
      },
      scenario: {
        id: "s1e6-sc",
        title: "Ten Lottery Tickets or One Real Seat",
        situation: "You have $250 of risk capital and expect a stock at $100 to climb to about $105 within a month on a steady news cycle. The chain shows you the $100 ATM call at $2.40 (one contract fits your budget), and the $115 OTM call at $0.25 (ten contracts fit your budget). Ten contracts sounds like serious size, and the group chat loves a cheap ticket.",
        question: "How do you deploy the $250?",
        options: [
          "Ten $115 calls. More contracts means more upside, and they only need 'one good day.'",
          "Buy a single $100 ATM call and let the one contract be the trade.",
          "Five $115 calls and keep $125 in cash as a compromise.",
          "Skip both and wait for the stock to hit $105 first to confirm, then buy the $115 calls."
        ],
        bestIndex: 1,
        coachNotes: "Option two is the pro move: thesis first, strike second. You forecast $105, and the ATM call profits on that exact move, while $115 needs roughly triple your projected climb. Option one is the classic rookie seduction, contract count masquerading as conviction; ten tickets to a game your own forecast says won't happen is just ten ways to lose $250, and 'one good day' is hope wearing a helmet. Option three is half the same mistake, because hedging between a good idea and a bad one still leaves you 50% wrong. Option four sounds patient but it's backwards; if the stock hits $105 first, you'd then be buying an OTM strike that needs another $10 move, with less time and a pricier premium, which effectively punishes you for being right. Buy the strike your forecast supports, when it supports it."
      }
    },
    {
      id: "s1e7",
      seasonId: 1,
      number: 7,
      title: "How Options Move",
      tagline: "The stock ran a yard. Why did your option run a foot?",
      playOfTheWeek: "April 20, 2022. Netflix reports its first subscriber loss in a decade and the stock implodes 35% in a day, from around $348 to $226. Far out-of-the-money puts that had barely been twitching on normal days suddenly started moving almost dollar for dollar with the stock, and their prices went vertical. Here's the reason: as a strike goes from long-shot to deep in the money, the option's sensitivity to the stock transforms right in the middle of the play.",
      gameFilm: [
        "Every rookie hits this wall in week one. The stock moves $1, and your option moves... 40 cents? What gives? Nobody scammed you. Options have their own speedometer, and today you learn to read it. The name on that speedometer is delta, and we're keeping it in plain English.",
        "Delta answers one question: if the stock moves $1, about how much does my option move? A delta around 0.50 means the option gains roughly 50 cents when the stock gains a dollar. Delta around 0.85? About 85 cents per dollar. Around 0.15? Fifteen cents. (Puts move opposite the stock, so their deltas are written as negatives, but the idea is exactly the same: it's the option's response per $1 of stock move.)",
        "Here's the pattern to burn in. Moneyness sets the delta. Deep in-the-money options have deltas near 1.00, so they're substantial enough to move almost dollar for dollar, like owning the shares. At-the-money options sit near 0.50, the coin flip. Far out-of-the-money options have tiny deltas, 0.10 or 0.05, and the stock has to drag them a long way before they even care. The further your strike sits from the action, the less each yard of stock movement actually reaches your contract.",
        "Why would a long-shot barely move? Think of delta as the market's rough sense of how likely your option is to matter by expiration. A strike 20% away isn't much more likely to pay off after a $1 move than it was before, so the price barely budges. A deep ITM option is almost certain to finish with value, so each $1 flows nearly straight through. The market is continuously handicapping your play, and delta is the line it sets.",
        "Now for the part that makes options come alive. Delta changes as the stock moves. Buy a 0.30-delta call and watch the stock rally toward your strike, and your delta climbs, 0.40, 0.50, 0.60, with each next dollar of stock movement paying you more than the last one did. That's the snowball that makes winning calls accelerate. It runs in reverse too, so as the stock retreats from your strike, your delta shrinks and the option goes numb. This is why a far OTM option can sit nearly motionless while the stock inches around, behaving exactly the way a contract this far from the action is supposed to behave rather than malfunctioning.",
        "One more dial and we're done. The clock changes delta too. As expiration approaches, the market stops hedging its bets. An option that's safely in the money sees its delta climb toward 1.00, and a long shot that hasn't gotten there watches its delta drain away toward zero. The maybe-zone keeps shrinking until the final whistle settles the question for good, leaving every contract either worth something or worth nothing at all.",
        "Practical scoreboard reading: before you buy, look at the delta and hear what it's telling you. Around 0.50 means balanced exposure that needs a real move. Around 0.80 or higher means you're nearly trading the stock itself, at a fraction of the capital. Around 0.10 means the market is quoting you long-shot odds, and your option will ignore small moves entirely. The biggest rookie panic, 'the stock went up and my option didn't,' is almost always just a low delta doing exactly what low deltas do."
      ],
      takeaway: "Delta is your option's speedometer, roughly how many cents it moves per $1 move in the stock, and it's set mainly by moneyness: near 1.00 deep ITM, near 0.50 ATM, near 0 far OTM. It shifts as the stock travels and the clock runs down, which is why a winning call seems to speed up the deeper it gets while a distant long shot barely reacts to anything. Check the delta before you buy and you'll never again be shocked by a 40-cent response to a $1 move.",
      caseStudies: [
        {
          title: "Netflix, April 2022: When Long Shots Became Freight Trains",
          kind: "real",
          setup: "April 19, 2022. Netflix trades around $348 heading into earnings. The market expects a soft report, but put strikes 25-30% below the stock are still priced like long shots, with tiny deltas, so on a normal day they barely move when the stock drops a few dollars.",
          thePlay: "Netflix reports its first subscriber loss in over a decade. The stock gaps down 35% to about $226. Strikes that had been distant long shots, $300, $275, $250, were suddenly deep in the money. Their deltas didn't inch up; they snapped from near zero toward 1.00 as the stock blew right through them.",
          outcome: "Puts that had been nearly motionless lottery tickets transformed into contracts moving dollar for dollar with a collapsing stock, multiplying 20x and beyond. Meanwhile, traders who'd held those same puts in the weeks before the report had watched them do almost nothing on ordinary down days, with many giving up and selling early, because low-delta options ignore small moves. Same contracts, transformed behavior, all of it delta.",
          lesson: "Delta isn't fixed; it gets recalculated with every tick. A far OTM option will barely stir on a small move and then go vertical when a big one finally blows through its strike, and that behavior is the whole design of the thing working as intended. Understand the speedometer and you'll know in advance whether your contract will respond to the move you're actually forecasting."
        },
        {
          title: "NMBS: Theo Thinks His Option Is Broken",
          kind: "fictional",
          setup: "Theo, back for redemption after the BLITZ fiasco, bought one Nimbus Cloud (ticker NMBS) $70 call for $0.50 with the stock at $60, a far OTM ticket with a delta around 0.12. The next day, NMBS jumped $2 on an analyst upgrade, and Theo rushed to check his trade expecting a windfall.",
          thePlay: "The option had gone from $0.50 to about $0.74. A $2 stock move, a 24-cent option move. Theo refreshed the app, cleared his cache, and drafted an angry email to the broker, convinced he'd been robbed. His roommate Marcus stopped him with one question: 'What was your delta?' Twelve cents per dollar, times two dollars, plus a touch from rising excitement on the chain, came to about 24 cents. The market owed him exactly what he got.",
          outcome: "Theo held on. NMBS kept climbing toward $68 over two weeks, and he watched his delta climb right along with it: 0.20, 0.35, 0.50. The last $3 of the rally paid him more than the first $5 had. He sold at $3.10 for a $260 gain, then sat down and finally learned the dial he'd been trading blind.",
          lesson: "Theo's option was never broken, but the expectations he brought to it were. Low-delta options are numb to small moves by design, and the way delta keeps climbing as the stock approaches your strike is exactly why a winning call accelerates late in a rally. Check the delta before you buy and you'll know the speedometer reading before you ever hit the gas."
        }
      ],
      quiz: [
        {
          id: "s1e7-q1",
          question: "Your call has a delta of about 0.40. The stock rises $1. Roughly what should your option do?",
          options: [
            "Rise about $1.00 per share, matching the stock",
            "Rise about $0.40 per share",
            "Rise about $4.00 per share",
            "Nothing, until the stock reaches the strike"
          ],
          correctIndex: 1,
          explanation: "Delta is the speedometer, roughly how much the option moves per $1 of stock movement. A 0.40 delta means about 40 cents per share, and with the 100-share multiplier that's about $40 on the contract. Options respond to every move, and the delta tells you how much."
        },
        {
          id: "s1e7-q2",
          question: "Which option will track the stock most closely, moving nearly dollar-for-dollar?",
          options: [
            "A far out-of-the-money call with a 0.08 delta",
            "An at-the-money call with a 0.50 delta",
            "All options move dollar-for-dollar with the stock",
            "A deep in-the-money call with a 0.90 delta"
          ],
          correctIndex: 3,
          explanation: "Deep ITM options are mostly intrinsic value, and intrinsic value moves point for point with the stock, so deltas near 1.00 mean near dollar-for-dollar tracking, like renting the shares for a fraction of their cost. An ATM contract responds at roughly fifty cents on the dollar, and the further out of the money you go the less the option feels each move at all. Moneyness is what sets that speedometer."
        },
        {
          id: "s1e7-q3",
          question: "You buy a call with a 0.30 delta and the stock rallies toward your strike. What happens to your delta as the rally continues?",
          options: [
            "It stays fixed at 0.30 for the life of the contract",
            "It falls as the option uses up its available movement",
            "It rises as the strike comes into range",
            "It flips negative once the stock passes the strike"
          ],
          correctIndex: 2,
          explanation: "Delta changes as the stock travels. As your strike goes from long shot to live possibility to in the money, delta climbs, 0.30 to 0.50 to 0.70 and beyond, and your option accelerates. That snowball is why a winning call seems to speed up late in a rally, while a call the stock is pulling away from goes quietly numb. The speedometer recalibrates with every tick."
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
        debrief: "For a quick, moderate move, the ATM call was the cleanest fit: a meaningful 0.50 delta that accelerated as SPY rallied, a solid percentage return of about 26%, and only $900 committed. The deep ITM call made more dollars but tied up two and a half times the capital for a similar percentage, with the most dollars exposed if the read had been wrong. The far OTM call proves the episode's whole point, because the stock did exactly what you predicted and the contract barely cared, since a 0.15 delta is numb to a $6 move. Forecast the move first, then pick the delta that will actually feel it."
      },
      scenario: {
        id: "s1e7-sc",
        title: "The Option That Didn't Move",
        situation: "Yesterday you bought a far out-of-the-money call (delta about 0.10) for $80, betting on a big product reveal in three weeks. Today the stock rose $2 on unrelated sector news... and your option gained four dollars. Total. Your group chat is split between 'your broker is scamming you' and 'dump that dead contract.'",
        question: "What's the right read?",
        options: [
          "Dump it. An option that can't respond to a $2 stock move is defective and will stay dead.",
          "Email the broker to dispute the pricing; the option clearly should have gained more.",
          "Buy ten more contracts immediately, since they're obviously underpriced for the move.",
          "Do the delta math, confirm the price is fair, and hold if the big-move thesis stands."
        ],
        bestIndex: 3,
        coachNotes: "Option four is the pro read, and it goes in two steps. First, the math: a 0.10 delta means about 10 cents per $1 of stock move, so a $2 move is about 20 cents per share, offset by a day of time decay, which leaves roughly $4 on the contract as the market working perfectly rather than a scam. Second, and more important, re-check the fit: your thesis is a big move in three weeks, and a small-delta ticket is an honest (if long-shot) way to play that, so today's numbness isn't a reason to panic, it's the known cost of the bucket you chose. Option one dumps a position because it did exactly what its delta said it would, which is punishing the contract for your own blind spot. Option two disputes math with customer service. Option three invents an edge out of a misreading; the option isn't underpriced, it's low-delta, and ten more of them is just ten times the same misunderstanding. Know your delta and you'll never confuse 'numb' with 'broken.'"
      }
    },
    {
      id: "s1e8",
      seasonId: 1,
      number: 8,
      title: "Buying vs Selling",
      tagline: "One side pays the ticket. The other side IS the stadium.",
      playOfTheWeek: "November 2018. A veteran fund manager who'd sold 'high-probability' naked calls on natural gas for years watched the commodity spike about 20% in days. His positions could only ever earn him the modest premium he'd collected, and once the spike got going the losses on the other side just kept running, imploding and wiping out the entire $150 million fund, with his clients learning they owed even more money on top of that. Here's why: selling options collects small premiums up front in exchange for open-ended risk, and one outlier move can erase a decade of wins.",
      gameFilm: [
        "Every option trade has two sides, and they are not mirror images of each other when it comes to risk. Today we scout both rosters: the buyer, who pays premium for rights, and the seller (also called the writer), who collects premium and shoulders obligations. Get to know both, even though you'll start your career on one.",
        "You already know the buyer's profile. Pay the premium, hold the rights. The worst case is the ticket price, full stop. The upside on a long call has no ceiling, and on a long put it's huge, all the way down to the stock hitting zero. The catch is that the clock fights you every day, and most modest moves won't outrun the melt. So a buyer racks up a lot of small losses while waiting for the occasional outsized winner that pays for all of them, and that's just the shape of the bet.",
        "Now flip the jersey. The seller collects the premium up front, real cash, theirs to keep if the option expires worthless. Sell a call for $300 and have the stock stay below the strike through expiration, and you keep $300 for, apparently, doing nothing. The clock that drains a buyer's premium is the very thing that works in the writer's favor, because every day of melt is money sliding toward the side that sold the contract. Sounds beautiful, doesn't it? Now read the fine print.",
        "The seller's max gain is the premium they collected. That's it. That's the ceiling, forever. And the seller's worst case? Selling a 'naked' call, one with no shares backing it, means that if the stock rockets, you have to deliver 100 shares at the strike no matter what they cost you to go buy. Stock doubles? Triples? Your loss has no ceiling. Naked put sellers face the stock crashing toward zero, which is enormous downside, though not infinite. A seller collects a steady run of small wins and then, every so often, eats a loss big enough to undo years of them, which is the buyer's experience flipped on its head.",
        "Think of it like insurance. The seller is the insurance company, collecting premiums month after month, profiting in calm weather, and paying out enormously when the hurricane finally hits. The buyer is the homeowner, with a small known cost and a big payout when disaster (or jackpot) strikes. Insurance companies survive hurricanes through massive capital reserves and careful exposure limits. A rookie selling naked options is basically an insurance company with no reserves writing hurricane policies right on the beach.",
        "This is why beginners buy options first, and it comes down to the math rather than any kind of training wheels. The very worst day a buyer can have is losing 100% of a premium they chose to risk going in. A naked seller's worst day can mean losing 10x, 50x, even 100x the premium they collected, getting margin-called, and owing money they never put up in the first place. You simply cannot learn this game from inside a blown-up account, so keep your risk defined while you're still learning.",
        "One preview before the whistle, because there's nothing evil about the selling side, it's just advanced. Pros sell options constantly, but they do it with structures that cap the damage, things like covered calls (selling against shares you own) and defined-risk spreads. Those are next-season material. For Season 1, your job is simple: buy options, keep your risk defined, and respect the sellers, because understanding their side of the field is exactly how you'll someday join it safely."
      ],
      takeaway: "A buyer pays premium for rights, racking up a lot of small losses capped at the ticket price while waiting on the occasional big winner. A seller collects premium for taking on obligations and pockets a steady stream of small wins, with a max gain stuck at the premium and, on a naked call, a rare loss that has no ceiling at all. Beginners buy first because you can't learn the game from inside a blown-up account, and selling safely requires structures that come later.",
      caseStudies: [
        {
          title: "OptionSellers.com, November 2018: The Fund That Sold Hurricanes",
          kind: "real",
          setup: "James Cordier ran a fund called OptionSellers.com, managing roughly $150 million for about 290 clients, with a strategy right there in the name: sell options, collect premium, let time decay pay the bills. It had worked for years. In late 2018, the fund was short naked calls on natural gas, a commodity famous for violent winter spikes.",
          thePlay: "In mid-November 2018, natural gas ripped roughly 20% higher in a matter of days on cold-weather panic. The fund's naked calls, whose maximum gain had always been the modest premiums collected, had no ceiling on their losses. The spike blew through every strike, and as the losses ballooned, the fund's broker forcibly liquidated positions into a screaming market.",
          outcome: "The fund was completely wiped out. Worse, because the losses ran past the account equity, clients didn't just lose everything they'd invested; many were told they owed additional money to cover the margin debt. The manager posted a tearful apology video that became infamous. Years of collected premiums, erased by one week of weather.",
          lesson: "This is the seller's risk profile in its purest form: decades of small wins, then one uncapped loss, and the game is over. The best he could ever do on those trades was keep the premium he'd collected, and yet the loss waiting on the other side had no limit on it whatsoever. When you hear 'income strategy' and 'high win rate,' always ask the only question that matters, which is what happens on the worst day."
        },
        {
          title: "TRKR: Two Roommates, Two Sides of the Same Trade",
          kind: "fictional",
          setup: "Sam and Rico both had opinions on TrackerFit (ticker TRKR) at $50 before a product launch. Sam thought it would pop. Rico thought it would fizzle and wanted 'easy income.' Sam bought one $52 call for $1.50, risking $150. Rico, with no shares and a freshly approved margin account, sold a naked $52 call and collected $150, planning to keep it when the launch flopped.",
          thePlay: "The launch was a sensation. TRKR gapped from $50 to $63 in two days. Sam's call, the right to buy at $52, swelled to $11.50. Rico's obligation to deliver 100 shares at $52 with the stock at $63 was the same contract from the other side, a position now $1,150 against him, with his broker demanding more collateral as it climbed.",
          outcome: "Sam sold for a $1,000 profit on $150 risked. Rico bought back the call at $11.50, locking in a $1,000 loss against a maximum possible win of $150, nearly seven times his best case gone on one trade. If TRKR had fizzled the way he expected, he'd have made $150. He'd taken that bet at the worst odds on the field, with no cap if it went against him.",
          lesson: "Same contract, opposite jerseys, and the risk shapes couldn't be more different. Sam knew from the start that the most he could lose was $150, whereas Rico had handed his fate to wherever the stock happened to stop climbing. Rico wasn't wrong that selling can be profitable. He was wrong to sell uncapped risk he didn't understand with money he couldn't afford to lose. The selling side is real and the income is genuine, but it has to be earned through structure and experience rather than simply assumed."
        }
      ],
      quiz: [
        {
          id: "s1e8-q1",
          question: "What is an option SELLER'S maximum possible gain on a trade?",
          options: [
            "Unlimited, just like the buyer's upside",
            "The premium collected when selling the contract",
            "100 times the strike price of the contract",
            "It depends on how far the stock moves before expiration"
          ],
          correctIndex: 1,
          explanation: "The seller's best case is always the same: the option expires worthless and they keep the premium they collected up front. That's the entire ceiling. Every seller is trading a capped, known gain against a much larger (sometimes unlimited) potential loss, which produces a high win rate built on small profits right up until the rare day a disaster swallows a pile of them at once."
        },
        {
          id: "s1e8-q2",
          question: "Why is selling a NAKED call considered the riskiest basic options position?",
          options: [
            "The premiums collected are too small to ever add up to real income",
            "Naked calls expire on faster clocks than covered ones",
            "Its loss has no ceiling, since a stock can rise without limit",
            "Brokers charge double commissions and margin interest on naked calls"
          ],
          correctIndex: 2,
          explanation: "A naked call seller has to deliver 100 shares at the strike if assigned, without owning them, meaning they'd have to buy at whatever the market demands. Since there's no ceiling on a stock price, there's no ceiling on the loss either. Pairing a gain you've capped at the premium with a loss that can run forever is the most dangerous setup in the book, which is exactly why it's not rookie material."
        },
        {
          id: "s1e8-q3",
          question: "Why do beginners start by BUYING options instead of selling them?",
          options: [
            "Buying caps the worst case at the premium you chose to pay",
            "Buying wins more often than selling over any long stretch",
            "Regulators prohibit retail accounts from ever selling options",
            "Sold options can't be bought back before they expire"
          ],
          correctIndex: 0,
          explanation: "It's pure risk math, not training wheels. A buyer settles on the worst case in advance, since it's just the ticket price they paid. A naked seller's worst case can run to many multiples of the premium, complete with margin calls and money owed beyond the account. A buyer does tend to lose more often than a seller, but the losses stay survivable, and survival is the rookie's first job."
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
            result: "The unveiling is a blowout and AMD rips to $170. Your call swells to $15.00 and you sell for $1,500: a $900 profit, and your worst case the entire time was the $600 ticket. That's what holding the rights instead of the obligations buys you.",
            pnl: 900
          },
          {
            label: "SELL 1 naked AMD $155 call, collecting $600 of 'easy income' since these events usually disappoint.",
            result: "AMD rips to $170 and your obligation goes vertical: forced to buy back the call at $15.00, you lose $900 against a max possible gain of $600, plus a margin scare when your broker flagged the position mid-spike. You collected a fixed little premium and handed yourself an open-ended loss in the worst possible week to do it.",
            pnl: -900
          },
          {
            label: "SELL 1 naked AMD $140 put, collecting $300, betting the stock at least won't crash.",
            result: "AMD rips higher and the put expires worthless: you keep $300. It worked! But replay the tape: a bad unveiling gapping AMD to $115 would have cost you $2,200 on a $300 max prize. You won a bet you never priced.",
            pnl: 300
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Play one is the rookie-correct jersey: defined risk ($600, chosen in advance), upside with no ceiling, and a thesis-matched contract, because into a binary event you want to be the ticket holder rather than the insurance company. Play two is the OptionSellers.com special in miniature, collecting $600 against an unlimited loss into a known volatility event. Play three is the trickiest lesson on the board precisely because it made money; the outcome was fine but the process was terrible, $300 of max gain against thousands of downside, all of it unexamined. Grade your plays by the risk you accepted, not the result you happened to get, because a sound process that happens to lose will out-earn a reckless one that happens to win over the length of a whole career."
      },
      scenario: {
        id: "s1e8-sc",
        title: "The Income Guru",
        situation: "A trader with a big following posts: 'I sell naked calls every Friday for income. 47 winning weeks in a row. Options BUYERS are the suckers paying my rent. DM for my watchlist.' You've got three months of experience buying options, mixed results, and his win streak is genuinely real and verifiable.",
        question: "How do you respond to this pitch?",
        options: [
          "Start selling naked calls Monday. 47 straight wins doesn't lie.",
          "Sell just one naked call on a cheap, sleepy stock to test the waters small.",
          "Keep buying defined-risk options for now, and study how streaks like his end.",
          "Split the difference: sell naked calls but only on stocks you're pretty sure won't move."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the pro read. The streak is real and the conclusion drawn from it is wrong, because selling naked options produces long, genuine win streaks by design; the strategy wins small and often right up until the day it loses everything at once. Forty-seven weeks of premiums can vanish in one OptionSellers-style spike, and the streak tells you nothing about that day except that it hasn't happened yet, so stay on the defined-risk buying side until you've earned the capped structures that make selling survivable. Option one buys the track record without ever reading the risk shape, which is survivorship with a follower count. Option two misunderstands the danger, because shrinking the position doesn't tame naked risk at all, since that risk stays uncapped no matter how small you go, and 'one cheap stock' can still triple on a buyout rumor. Option four is the same trap with extra confidence, since 'pretty sure it won't move' is exactly the bet every blown-up seller was making, priced at a few hundred bucks of max gain. When someone shows you a win rate, always ask to see the worst day."
      }
    },
    {
      id: "s1e9",
      seasonId: 1,
      number: 9,
      title: "Reading the Chain",
      tagline: "The options chain is the scouting report. Learn to read it or get read.",
      playOfTheWeek: "May 6, 2010. The Flash Crash. In minutes, the Dow plunges nearly 1,000 points, bids evaporate across the market, and market orders fill at prices that made no sense, with some securities momentarily printing at a penny. Anyone who'd sent a market order got whatever fill the void coughed up, and the only people protected were the ones resting limit orders that simply went unfilled when no fair price existed. Here's the reason: when liquidity vanishes, the order type you chose becomes your risk management.",
      gameFilm: [
        "Pull up any stock's options and you'll meet the chain: a giant grid of strikes, expirations, and numbers flying everywhere. Rookies see chaos. Pros see a scouting report. By the end of this film session, you'll read it like a box score: bid, ask, volume, and open interest, the four columns that matter most.",
        "Start with the two prices every contract shows, the bid and the ask. The bid is what buyers are currently offering to pay, and the ask is what sellers are demanding. If you need to act right this second, you'll sell into that bid and buy at that ask, taking whatever price the other side is willing to meet. The gap between them is the spread, and it's far from decoration, since it's a toll you pay to get in and again to get out. Bid $3.40, ask $3.50? That dime, $10 a contract, is the cost of playing. Bid $2.00, ask $2.90? That's a $90 toll each way on a contract that might only be worth $250. Tolls like that eat strategies alive.",
        "The spread is your liquidity gauge. When it's tight, only pennies apart, you're in a busy stadium with tons of traders competing, fair prices, and an easy time getting filled in either direction. Let that spread blow out to a wide gap and you've wandered into an empty parking lot at midnight, where there are few players, lousy prices, and good luck finding a buyer when you need out in a hurry. Before you ever click buy, check the toll.",
        "Next column is volume, the number of contracts traded today. It resets every morning. Volume tells you whether anyone is actually playing this specific contract right now. Hundreds or thousands of contracts trading? Active game. Volume of 2? You're alone in the gym, and the spread will usually tell the same story.",
        "Right beside it lives open interest, or OI, the total number of contracts currently in existence, opened but not yet closed or expired. If volume is the day's action, think of OI as the standing population of the contract, the crowd already holding positions there. High OI means lots of traders are in this name, which usually translates into tighter spreads and easier exits for you. The pro habit: favor strikes and expirations where OI runs into the thousands, and treat single-digit OI like a 'road closed' sign.",
        "Now the execution lesson that pays for this whole episode, market orders versus limit orders. A market order says 'fill me now at whatever the price is,' which in options means buying at the full ask, or worse if the quote moves on you. A limit order lets you name your own price instead, something like 'fill me at $3.45 or better, or don't fill me at all.' On a wide-spread contract, a market order is basically a donation to whoever's quoting it. The standing pro move is to start your limit near the midpoint between bid and ask and adjust patiently. You won't always get filled, and that's fine, because a missed trade never costs you a cent while overpaying bleeds you on the way in and again on the way out.",
        "Put the whole scouting report together before any trade. Is the spread tight? Is there volume today? Is open interest healthy? Then enter with a limit order at a price you chose. Four checks, ten seconds, and you'll sidestep the silent tax that quietly bleeds rookie accounts, the one that comes from bad fills rather than bad ideas about where the stock is headed."
      ],
      takeaway: "The chain's four key columns are bid (the sell-now price), ask (the buy-now price), volume (contracts traded today), and open interest (contracts outstanding). The bid-ask spread is a toll you pay both ways, so favor tight spreads with healthy volume and OI, and enter with limit orders near the mid rather than market orders on a wide spread. The silent tax that drains rookie accounts comes from sloppy fills far more than from sloppy ideas.",
      caseStudies: [
        {
          title: "The Flash Crash, May 2010: When the Bid Side Vanished",
          kind: "real",
          setup: "May 6, 2010, a nervous afternoon over European debt. At about 2:32 PM, a wave of automated selling hit an already thin market. Liquidity, all those standing bids in the order books, didn't just shrink. It evaporated, across stocks, ETFs, and options chains alike.",
          thePlay: "In roughly ten minutes the Dow plunged nearly 1,000 points, about 9%, the fastest drop of its size ever seen up to that point. With bids pulled, market orders did exactly what market orders do, filling at whatever remained. Some major stocks and ETFs momentarily traded for a penny, while others printed at $100,000 a share. Options spreads, modest at lunchtime, gaped open to absurd widths.",
          outcome: "Traders who sold with market orders into the void got fills at prices nobody would believe an hour later; thousands of trades were later canceled as 'clearly erroneous,' but plenty of bad fills inside the bands stood. Traders resting limit orders either transacted at their named price or simply didn't transact at all. Twenty minutes later the market had mostly bounced back, leaving the damage to whoever had ordered 'fill me at anything.'",
          lesson: "The bid and ask are the only prices that actually exist for you when you go to trade, not some abstraction, and in a panic the gap between them can become a canyon. A limit order is the one guarantee you can carry into any market, because it either fills at the price you named or it doesn't fill at all. History's loudest argument against the market order took only ten minutes to make itself."
        },
        {
          title: "PLNK: The Same Trade at Two Different Tolls",
          kind: "fictional",
          setup: "Twins Ava and Maya both wanted the same play: calls on PlankFit (ticker PLNK) at $35 ahead of a gym-chain partnership rumor, with about $400 each to risk. Ava pulled up the chain and grabbed the first strike she liked, the $38 call on a far-out expiration, bid $1.60, ask $2.40, volume 3, open interest 41. Market order. Filled at $2.40.",
          thePlay: "Maya ran the four checks first. Same chain, one month nearer, the $37 call showed bid $1.95, ask $2.05, volume 800, OI 6,200, a busy stadium. She placed a limit at $2.00, right at the midpoint, and filled in under a minute. Both twins now held bullish PLNK calls of similar size, except Ava had handed over a $40 entry toll to get hers while Maya's cost about a nickel.",
          outcome: "The rumor confirmed and PLNK popped to $39. Maya's liquid call quoted $3.10 bid and $3.20 ask; she sold at the $3.15 mid for a $115 gain. Ava's illiquid call was 'worth' about $3.00 on paper, but the real quote read bid $2.45 and ask $3.55, so the only actual exit was $2.45. Her winning trade, right thesis and all, netted $5 after the spread took its toll on both ends.",
          lesson: "Identical thesis, identical outcome on the stock, and a 23x difference in profit, all of it decided by chain-reading. Far from a technicality, the spread is a toll booth you pass through going in and pass through again coming out, and an illiquid contract can quietly turn a winning play into a wash. Glance at the spread, the volume, and the OI, then enter with a limit order, and that ten seconds of work is the whole skill."
        }
      ],
      quiz: [
        {
          id: "s1e9-q1",
          question: "An option shows bid $3.40 / ask $3.50. If you place a MARKET order to buy right now, what do you pay?",
          options: [
            "$3.40, the standing bid",
            "$3.45, the midpoint, automatically",
            "About $3.50, the ask",
            "Whatever price you decide the option is worth"
          ],
          correctIndex: 2,
          explanation: "A market order takes the price being demanded now, and for buyers that's the ask, or worse if the quote moves while your order lands. The bid is where you can instantly sell, and the midpoint is only available if you place a limit order there and someone meets you. When the spread is tight that difference comes to pennies, but on a wide one it can swallow the entire trade."
        },
        {
          id: "s1e9-q2",
          question: "What's the difference between VOLUME and OPEN INTEREST on an options chain?",
          options: [
            "Volume is today's trades; open interest is contracts still outstanding",
            "They're two different names the exchanges use for the same number",
            "Volume tracks the calls while open interest tracks the puts",
            "Open interest resets every morning while volume keeps accumulating forever"
          ],
          correctIndex: 0,
          explanation: "Volume counts today's action and resets every morning, while open interest is the standing population of the contract, the positions that were opened and are still alive. Together they're your liquidity gauge, since healthy volume plus high OI usually means tight spreads and easy exits. Single digits on both? That's an empty parking lot."
        },
        {
          id: "s1e9-q3",
          question: "Why do pros use LIMIT orders for options instead of market orders?",
          options: [
            "Limit orders are guaranteed to fill at the midpoint",
            "A limit order caps the price you'll accept",
            "Market orders are banned on most options exchanges",
            "Limit orders carry lower regulatory fees per contract"
          ],
          correctIndex: 1,
          explanation: "Options spreads can be wide and quotes can move in milliseconds, so a market order signs a blank check for whatever's there, which is how rookies buy at the ask on a canyon-wide spread or get Flash Crash fills. A limit order names your price and only fills at that level or better, otherwise it waits. That asymmetry is the whole point, since a missed trade costs nothing while an overpay charges you twice, once getting in and once getting back out."
        }
      ],
      paperTrade: {
        id: "s1e9-pt",
        title: "Four Checks Before Kickoff",
        ticker: "XOM",
        spotPrice: 115,
        brief: "ExxonMobil trades at $115 and you're bullish over the next month on tightening oil supply. Your thesis is set; today's test is pure execution. Three contracts sit on the chain with three very different scouting reports. Read before you buy.",
        choices: [
          {
            label: "The $115 call, 30 days out: bid $3.40 / ask $3.50, volume 2,400, OI 18,000. Enter with a limit at $3.45.",
            result: "Filled at $3.45 in seconds. XOM climbs to $119 over three weeks and the quote reads $4.95 / $5.05: you exit at $5.00 with one click. Tight tolls on the way in and out meant the profit from your thesis actually ended up in your pocket.",
            pnl: 155
          },
          {
            label: "The $117 call on a sleepy far-month expiration: bid $2.00 / ask $2.90, volume 3, OI 40. Buy at the ask to make sure you're in.",
            result: "Filled at $2.90, a 45-cent toll above mid before the stock moved an inch. XOM climbs to $119, but your exit quote reads $3.10 bid on a contract 'worth' $3.60 mid. Right thesis, $20 profit: the spread ate the rest, both ways.",
            pnl: 20
          },
          {
            label: "The $120 call expiring THIS week: bid $1.00 / ask $1.20, volume 1. Market order, time is money.",
            result: "Filled at $1.20. XOM ticks up to $117 by Friday, nowhere near $120 on a five-day clock, and the contract expires worthless. Bad liquidity sitting on top of a lottery clock, and the four checks would have flagged both before you ever clicked.",
            pnl: -120
          }
        ],
        bestChoiceIndex: 0,
        debrief: "Same stock, same correct thesis, three different executions. Play one ran the full pre-snap read, a tight spread of a dime, real volume, deep OI, and a limit at mid, and it kept $155 of a clean move. Play two paid a $45 entry toll and a $50 exit toll on an empty-stadium contract, so 80% of the same winning move went straight to the spread. Play three compounded the illiquidity with a near-expiry strike the move couldn't reach. Burn this in: liquidity is part of the trade. The chain shows you everything, spread, volume, OI, before you ever commit. Ten seconds of reading is the cheapest edge in the game."
      },
      scenario: {
        id: "s1e9-sc",
        title: "The Empty Parking Lot",
        situation: "You've found a call you love on a mid-cap stock: perfect strike, perfect expiration for your thesis. Then you check the chain: bid $1.00 / ask $2.00, volume 0 today, open interest 12. The same stock has another strike $1 further out with bid $1.30 / ask $1.40, volume 450, OI 3,100. Your 'perfect' contract is an empty parking lot.",
        question: "How do you get into this trade?",
        options: [
          "Market order on the perfect strike. The right strike matters more than a little slippage.",
          "Limit at $1.50 on the perfect strike; if it doesn't fill, force it by paying the $2.00 ask.",
          "Take the liquid strike $1 further out, entered with a limit order near the mid.",
          "Skip options entirely and buy the stock, since this chain is clearly unusable."
        ],
        bestIndex: 2,
        coachNotes: "Option three is the pro trade-off. A strike $1 different is a small adjustment to your thesis, but a $1.00 spread versus a $0.10 spread is a 10x difference in the toll you pay on both ends; on a $1.50 contract, that dollar-wide spread can swallow most of a winning move (just ask Ava). Option one donates half the contract's value to the spread before the stock even moves. Option two starts out correctly, since a mid limit is always a fair opening bid, but 'force it by paying the ask' abandons the discipline at the exact moment it matters; on a dead contract, no fill at mid is the chain telling you the real price, and your exit will be staring at the same canyon. Option four overcorrects, because the stock's other strikes are perfectly liquid, and one dead contract doesn't condemn the whole chain. Trade where the traders are. The second-best strike with a tight spread beats the perfect strike in an empty lot, almost every time."
      }
    },
    {
      id: "s1e10",
      seasonId: 1,
      number: 10,
      title: "Your First Trade",
      tagline: "Every play you've learned, run in sequence. This is the whole game.",
      playOfTheWeek: "April 2022. Traders who bought Twitter calls on rumors of Elon Musk building a stake caught a 27% single-day pop when the stake went public on April 4, and the disciplined ones cashed out into the buyout-offer spike days later. Plenty of others held on hoping for more and ended up watching months of deal drama grind those same contracts down toward nothing. Same entry and same news for everyone, and a written exit plan was all that separated a career-best trade from a long round trip back to zero.",
      gameFilm: [
        "Championship week, rookie. You've got nine episodes of fundamentals behind you: contracts, calls, puts, strikes, clocks, premium, moneyness, delta, both jerseys, and the chain. Today we run the full two-minute drill, one complete trade from idea to exit, with every decision in sequence. This is the checklist you'll run on every trade for the rest of your career.",
        "Step one is the thesis, written down like a play call. Not 'I like Apple.' Instead something like, 'I expect AAPL to climb from $210 toward $220 within the next month as holiday sales data lands.' Direction, size of the move, deadline, and reason, four parts in one sentence. If you can't actually write that sentence, then what you're holding is a mood dressed up as a trade. The thesis decides everything that follows, which is exactly why it comes first.",
        "Step two is picking the contract off your thesis, like reading a menu when you've already decided what you're ordering. Direction up means calls. A modest target near $220 means a strike the move can actually reach, at or slightly out of the money, say the $215, not some $250 lottery ticket your own forecast would laugh at. A deadline of 'within a month' means an expiration with buffer, 45 days rather than 30, because theses are usually right slower than we hope and the clock melts hardest at the very end. Episode 6 picked your strike, and Episodes 4 and 5 picked your expiration.",
        "Step three is sizing it like a professional. The iron rule is to decide the maximum dollars you're willing to lose on this idea, often 2-5% of your capital for a small account, and then let that number choose your contract count, never the other way around. If your $215 call costs $4.50, that's $450 at risk per contract, full stop. One contract or zero, because 'ten contracts because conviction' is how Episode 4's Devon stories start. Risk only what losing won't change your week over.",
        "Step four is writing the exit plan before you enter, both directions, in numbers. On the profit side: 'I sell at a 50-100% gain, or when the stock hits $220, or when the catalyst passes, whichever comes first.' On the loss side: 'I sell if the premium drops 50%, or if my thesis breaks because the sales data disappoints, or at 14 days to expiration, whichever comes first.' Why before entry? Because once money's moving, the calm strategist who wrote the plan gets quietly replaced by a sweaty fan staring at the scoreboard. The plan is a letter from your smartest self to your most emotional one.",
        "Step five is executing the way Episode 9 taught you. Pull the chain. Check the spread, is it tight? Check volume and open interest, is it alive? Place a limit order near the mid and let it work. No market orders, no chasing a runaway quote, because if you miss the fill you missed one bus on a route that runs forever. Entering well is a skill, and needing to enter is a leak.",
        "Step six is managing by the plan, which mostly means doing nothing, loudly. Check the position against your written triggers, not every five minutes, but at your triggers. Stock hits $220? Sell, and don't renegotiate with a winning scoreboard. Premium cut in half, thesis cracked? Sell, and take the small loss the plan already priced in. The catalyst passes with a shrug? Sell, because a thesis that expired is dead even if the contract isn't. The exits will rarely feel right in the moment, because whatever you're feeling, whether it's the urge to hold a winner forever or the hope that a loser comes back, the plan outranks the feeling.",
        "And after the whistle comes the post-game. Win or lose, write three lines in a journal: what was the thesis, did I follow the plan, what surprised me. Grade the process rather than the P/L, because a sound process that happens to lose is just a clean rep that'll pay off over time, and a sloppy one that happens to win is a loan you'll end up repaying later with interest. Run this checklist, thesis, contract, size, exit plan, execution, management, review, about twenty times and you won't be a rookie anymore. Welcome to The Pit. Now go run your first real play."
      ],
      takeaway: "A complete trade is a sequence: a written thesis (direction, size, deadline, reason), a contract matched to that thesis, a position sized by your max acceptable loss, an exit plan written before entry for both winning and losing, limit-order execution on a liquid contract, and management by your triggers instead of your feelings. The plan is a letter from your smartest self to your most emotional one. Write it, then obey it.",
      caseStudies: [
        {
          title: "Twitter, April 2022: The Pop, the Plan, and the People Who Held Forever",
          kind: "real",
          setup: "Early April 2022. Twitter trades around $39 amid rumors that Elon Musk has been quietly buying shares. On April 4, a filing makes it official: a 9%+ stake. The stock rockets 27% in a day, its best session ever. Ten days later, Musk offers to buy the whole company at $54.20.",
          thePlay: "Call buyers who'd played the rumor were sitting on monster gains twice over, once on the stake pop and again on the offer spike toward $52. Anyone holding a written exit ('sell on the catalyst,' 'sell at 100%') cashed out into those surges, while the traders who'd never written one treated $54.20 as a floor and kept holding for the last few dollars of a 'sure thing' buyout.",
          outcome: "The sure thing wobbled for eight months. Musk tried to back out, the stock sank into the $30s during the standoff, and deal-or-no-deal headlines whipsawed it for two quarters. Calls bought during the April euphoria bled out on time decay and fading prices, and many expired worthless while the deal was still in court. The buyout did eventually close at $54.20 in late October, months after most spring options had hit their final whistle.",
          lesson: "The market handed everyone the same two exits, and only the traders with pre-written plans took them. The holders actually called the ending correctly, since the deal did close at $54.20, but they misjudged how long it would take, and options die on the clock no matter how right the eventual story turns out to be. When a catalyst pays you, treat that as your cue to leave rather than your invitation to start renegotiating with the scoreboard."
        },
        {
          title: "DRFT: Rosa Runs the Checklist",
          kind: "fictional",
          setup: "Rosa had finished her rookie season of paper trading and was ready for her first real options trade. Driftline Scooters (ticker DRFT) traded at $44, and city contract announcements were due within five weeks. Her account: $3,000. Her notebook, page one: the six-step checklist.",
          thePlay: "Thesis: 'DRFT to $48-50 within five weeks on contract wins.' Contract: the $46 call, 60 days out (the five-week thesis plus buffer), quoted $1.90/$2.00 with OI over 4,000. Size: max loss $200, well under 7% of her account, so one contract, limit order at $1.95, filled. Exit plan, written before entry: 'Sell at +75%, or at $49, or on the announcement, whichever is first. Cut at -50% or if announcements slip past week five.' Then she closed the app and went to work.",
          outcome: "Week three: DRFT won two of three city contracts and gapped to $48.60. Her call quoted $3.40/$3.50, up about 77%, which tripped both the profit number and the catalyst exit. Euphoria whispered 'the third contract could send it to $55.' She sold at $3.45 per her plan: $150 profit, a 77% gain. The third contract went to a rival a week later and DRFT slid back to $45, and her old call's value got cut nearly in half.",
          lesson: "Nothing about Rosa's trade was spectacular, and that's the whole point. A boring, complete process, thesis, matched contract, honest size, pre-written exits, limit fills, obedient management, captured most of a good move and dodged the giveback that euphoria was busy selling. Her journal line that night: 'Followed the plan. The plan was the edge.'"
        }
      ],
      quiz: [
        {
          id: "s1e10-q1",
          question: "What's the correct ORDER of operations for building a trade?",
          options: [
            "Find a cheap option, then build a thesis that justifies buying it",
            "Enter the trade first, then set your exits once you see how it moves",
            "Pick the expiration first, then go hunting for some stock that's likely to move that week",
            "Thesis first, then contract, then size, then exit plan, then the entry order"
          ],
          correctIndex: 3,
          explanation: "The sequence is the strategy. The thesis decides the contract, your risk tolerance decides the size, the exit plan exists before money moves, and only then does the limit order go in, because the version of you watching a live P/L is not the version you want making decisions. Rookies run it backwards, finding a cheap ticket and inventing a story, and the results follow accordingly."
        },
        {
          id: "s1e10-q2",
          question: "Why write the exit plan BEFORE entering the trade?",
          options: [
            "Brokers require a documented exit plan to approve options trades",
            "So the decisions get made while you're calm, not mid-trade",
            "So you can set it once and never look at the position again",
            "Because exit plans can't legally be changed after entry"
          ],
          correctIndex: 1,
          explanation: "The plan is a letter from your smartest self to your most emotional one. Pre-committed numbers, a profit target, a loss cut, a time stop, turn the hardest moments (euphoria at +80%, dread at -40%) into simple execution instead of live negotiation. Real discipline is mostly about arranging things in advance so you never have to make a great decision under pressure in the first place."
        },
        {
          id: "s1e10-q3",
          question: "You planned to risk $300 max on your first trade. The call you want costs $450. What's the disciplined move?",
          options: [
            "Pass, or find a different contract that fits the $300 limit",
            "Buy it anyway: $150 over budget is close enough for a good setup",
            "Buy two contracts so the winnings make the overage worth it",
            "Buy it but plan to sell within two days to limit the exposure"
          ],
          correctIndex: 0,
          explanation: "Sizing discipline only works if the number is a wall and not a suggestion. Today it's $150 over, next month it's 'just one more contract,' and that's the Devon story from Episode 4. No single trade idea is rare enough to justify breaking your risk rule, because the market prints new setups every week, and a different strike, a nearer expiration, or a cheaper underlying can usually fit the budget. Your risk budget always outranks the trade idea, so it's the max loss that picks which contract you can afford and never the other way around."
        }
      ],
      paperTrade: {
        id: "s1e10-pt",
        title: "The Two-Minute Drill",
        ticker: "DIS",
        spotPrice: 110,
        brief: "Disney trades at $110 and your written thesis reads: 'DIS to $115-118 within six weeks as park bookings and a streaming price change land.' You have $400 of risk budget for this idea. There are three ways to run your first real drive. Call the play.",
        choices: [
          {
            label: "Run the checklist: buy 1 DIS $112 call, 60 days out, limit-filled at $3.20 ($320), with exits written first.",
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
        debrief: "Play one is the entire season in one trade: a thesis-matched strike ($112 on a $115-118 forecast), an expiration with buffer (60 days for a six-week thesis), size inside the budget ($320 of $400), pre-written exits, limit execution, and the hard part, actually obeying the trigger at +50%. Play two is identical capital with an identical thesis and lost $440 more, on exactly one missing ingredient, the plan. Play three abandoned the thesis for contract count, sixteen tickets to a game your own forecast said wasn't even scheduled. Same budget, three outcomes, and the only edge on the board was process. That's the rookie season's final lesson: in this game, discipline is the talent."
      },
      scenario: {
        id: "s1e10-sc",
        title: "Down 30% on Day One",
        situation: "You ran the full checklist on your first real trade: clean thesis, matched contract, $350 risked (4% of your account), written plan: 'cut at -50%, take profit at +60%, time-stop at 15 days to expiration.' Day one, the whole market drops on inflation data, nothing about YOUR thesis, and your call is down 30%. Your stomach is in your shoes and the group chat says 'dead trade, eject.'",
        question: "What do you do?",
        options: [
          "Sell now. Down 30% on day one means the trade is broken: get out before it hits -50%.",
          "Buy another contract: same thesis, 30% cheaper. Improve the average.",
          "Delete the -50% rule: it's too close now, and the thesis deserves room to breathe.",
          "Check the position against the written plan, and hold: no trigger has tripped."
        ],
        bestIndex: 3,
        coachNotes: "Option four is the graduation exam, and it's the only answer that actually uses the plan you wrote. Run the three checks. Trigger hit? No, since -30% is not -50%. Thesis broken? No, because a market-wide inflation flinch says nothing about your company's catalyst. Clock okay? Yes. So the plan says hold, and the discipline is enduring the discomfort you already budgeted for, since this exact feeling is why you sized at 4% in the first place. Option one is fear rewriting the plan mid-game; sell at -30% today and you'll sell at -20% next time, until no trade survives its first red hour. Option two isn't in the plan either, just greed's version of the same edit, adding risk because the price fell rather than because the thesis strengthened. Option three is the most dangerous of all; deleting your loss rule the first time it might fire means you never really had one, and that's how -50% becomes -100%. You wrote the letter when you were calm. Day-one chaos is exactly when you read it back and obey it."
      }
    }
  ]
};

export default season1;
