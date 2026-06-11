import type { QuizQuestion } from "../lib/types";

export const duelPool: QuizQuestion[] = [
  {
    id: "duel-1",
    question: "What does buying a call option give you?",
    options: [
      "The obligation to buy 100 shares at the strike price",
      "The right, but not the obligation, to buy 100 shares at the strike price",
      "The right, but not the obligation, to sell 100 shares at the strike price",
      "Immediate ownership of 100 shares at today's market price"
    ],
    correctIndex: 1,
    explanation: "A call is a ticket, not a contract you must use. You get the right to buy 100 shares at the strike, and you only exercise if it pays."
  },
  {
    id: "duel-2",
    question: "What does buying a put option give you?",
    options: [
      "The obligation to sell 100 shares at whatever price the market sets",
      "The right, but not the obligation, to buy 100 shares at the strike price",
      "The right, but not the obligation, to sell 100 shares at the strike price",
      "A guaranteed dividend payment from the underlying company"
    ],
    correctIndex: 2,
    explanation: "Puts are the defense. You lock in the right to sell 100 shares at the strike, which gets more valuable as the stock falls."
  },
  {
    id: "duel-3",
    question: "A call is quoted at $2.50. You buy one contract. What actually leaves your account?",
    options: ["$2.50", "$25", "$2,500", "$250"],
    correctIndex: 3,
    explanation: "One contract controls 100 shares, so multiply the quote by 100. The $2.50 sticker price is really a $250 ticket."
  },
  {
    id: "duel-4",
    question: "What is the strike price?",
    options: [
      "The premium you originally paid to buy the option contract",
      "The stock's closing price on the day you opened the trade",
      "The preset price where the option lets you buy or sell the shares",
      "The price where the exchange halts trading in the stock"
    ],
    correctIndex: 2,
    explanation: "The strike is the line on the field. It is the locked-in price your option lets you transact at, no matter where the stock goes."
  },
  {
    id: "duel-5",
    question: "Your call expires today with the stock below the strike. What happens?",
    options: [
      "It automatically rolls to next week",
      "Your broker buys you the shares anyway",
      "You get half the premium back as a credit",
      "It expires worthless and the premium is gone"
    ],
    correctIndex: 3,
    explanation: "Out of the money at the buzzer means zero. That is the deal option buyers sign up for: the premium is the whole risk."
  },
  {
    id: "duel-6",
    question: "Stock trades at $108. You own the $100 call. What is your intrinsic value per share?",
    options: ["$0", "$8", "$100", "$108"],
    correctIndex: 1,
    explanation: "Intrinsic value is stock price minus strike for a call: 108 minus 100 equals $8. That part of the premium is real, on-the-scoreboard value."
  },
  {
    id: "duel-7",
    question: "The stock drops $5. All else equal, what happens to the value of a put on that stock?",
    options: ["It rises in value", "It falls in value", "It stays exactly the same", "It instantly goes to zero"],
    correctIndex: 0,
    explanation: "Puts cheer for the bears. Stock down means the right to sell at a fixed price just got more valuable."
  },
  {
    id: "duel-8",
    question: "Your call has a 0.50 delta. The stock jumps $1. Roughly what does the option price do, per share?",
    options: [
      "Rises about $1.00",
      "Falls about $0.50",
      "Rises about $0.50",
      "Nothing until expiration"
    ],
    correctIndex: 2,
    explanation: "Delta is your participation rate. A 0.50 delta means you capture about half of every dollar the stock moves."
  },
  {
    id: "duel-9",
    question: "What is theta doing to a long option every single day?",
    options: [
      "Adding value as expiration gets closer",
      "Only kicking in on the final Friday",
      "Increasing the delta a little each day",
      "Draining value from the option"
    ],
    correctIndex: 3,
    explanation: "Theta is the play clock. Every day that passes, a long option bleeds a little time value, whether the stock moves or not. Decay never takes a day off."
  },
  {
    id: "duel-10",
    question: "What does implied volatility (IV) actually measure?",
    options: [
      "How much the stock actually moved over the past year",
      "The option's guaranteed annualized rate of return",
      "How many contracts changed hands in today's session",
      "The size of the move the market is pricing in"
    ],
    correctIndex: 3,
    explanation: "IV is the market's forecast, not the replay. High IV means traders are paying up for big expected movement, and that cost is baked into your premium."
  },
  {
    id: "duel-11",
    question: "You buy the $100 call for $3.00. Where does the stock need to be at expiration for you to break even?",
    options: ["$97", "$100", "$103", "$106"],
    correctIndex: 2,
    explanation: "Breakeven for a long call is strike plus premium: 100 plus 3 equals $103. The stock has to clear the strike AND pay back your ticket price."
  },
  {
    id: "duel-12",
    question: "You buy the $50 put for $2.00. Breakeven at expiration?",
    options: ["$48", "$52", "$50", "$46"],
    correctIndex: 0,
    explanation: "Put breakeven is strike minus premium: 50 minus 2 equals $48. The stock has to fall through the strike by more than what you paid."
  },
  {
    id: "duel-13",
    question: "What is your maximum loss when you buy a call?",
    options: [
      "Unlimited",
      "The premium you paid",
      "The strike price times 100",
      "Whatever the stock falls"
    ],
    correctIndex: 1,
    explanation: "Long options are defined risk by design. Worst case, the option expires worthless and you lose exactly what you paid, never more."
  },
  {
    id: "duel-14",
    question: "Your option shows a 0.30 delta. As a rough rule of thumb, what are its odds of expiring in the money?",
    options: ["90%", "50%", "70%", "30%"],
    correctIndex: 3,
    explanation: "Delta doubles as a quick-and-dirty probability gauge. A 0.30 delta option is roughly a 30% shot to finish in the money — a long pass, not a handoff."
  },
  {
    id: "duel-15",
    question: "What is IV crush?",
    options: [
      "Implied volatility collapsing after a big event",
      "The stock price crashing right after earnings",
      "Your broker raising margin requirements overnight",
      "Trading volume drying up into the close"
    ],
    correctIndex: 0,
    explanation: "Once the big event passes, the uncertainty premium gets sucked out of options overnight. The stock can sit still and your option still drops."
  },
  {
    id: "duel-16",
    question: "How does theta behave as expiration gets close for an at-the-money option?",
    options: [
      "It slows down to almost nothing",
      "It stays flat the whole way",
      "It accelerates into expiration",
      "It flips positive for option buyers"
    ],
    correctIndex: 2,
    explanation: "Time decay is not a flat road, it is a cliff. At-the-money options bleed fastest in the final days, which is why short-dated longs need the move NOW."
  },
  {
    id: "duel-17",
    question: "Stock at $100. The at-the-money straddle costs $6.00. What move is the market roughly pricing in by expiration?",
    options: [
      "About $1 in either direction",
      "About $6 in either direction",
      "Exactly $12 to the upside",
      "No meaningful move at all"
    ],
    correctIndex: 1,
    explanation: "The ATM straddle price is the market's posted expected move. Six bucks on a $100 stock means traders are pricing roughly a 6% swing, direction unknown."
  },
  {
    id: "duel-18",
    question: "Your call has a vega of 0.10. Earnings pass, IV drops 20 points, and the stock goes nowhere. Roughly how much does the option lose per share?",
    options: ["$0.10", "$0.20", "$20.00", "$2.00"],
    correctIndex: 3,
    explanation: "Vega times the IV change: 0.10 x 20 = $2.00 per share, or $200 per contract. The stock did nothing and you still took the hit."
  },
  {
    id: "duel-19",
    question: "Account: $5,000. Your rule: risk no more than 2% per trade. The calls cost $0.95. How many contracts, max?",
    options: ["1 contract", "2 contracts", "5 contracts", "10 contracts"],
    correctIndex: 0,
    explanation: "2% of $5,000 is $100 of risk. One contract costs $95; two would be $190 and blow right through the cap. Discipline wins championships."
  },
  {
    id: "duel-20",
    question: "What is gamma?",
    options: [
      "The option's daily rate of time decay",
      "The option's sensitivity to interest rate changes",
      "How fast delta changes as the stock moves",
      "The width of the bid-ask spread in cents"
    ],
    correctIndex: 2,
    explanation: "Gamma is delta's accelerator pedal. It tells you how quickly your participation rate ramps up or down as the stock moves toward or away from the strike."
  },
  {
    id: "duel-21",
    question: "Which Greek tells you how much an option's price changes when IV moves 1 point?",
    options: ["Theta", "Vega", "Delta", "Rho"],
    correctIndex: 1,
    explanation: "Vega is your volatility exposure. If vega is 0.08 and IV jumps a point, the option gains about 8 cents per share, and vice versa on the way down."
  },
  {
    id: "duel-22",
    question: "Earnings beat, stock up 2% — but the options market had priced a 6% move. Your calls open red. Why?",
    options: [
      "The IV crush after the event",
      "The market maker stole your fill",
      "Earnings beats always sink call prices",
      "Theta only hits on earnings day"
    ],
    correctIndex: 0,
    explanation: "You were right on direction and still lost — classic. The 2% pop was not enough to outrun the volatility premium collapsing after the event. The crush took back more than your delta gained."
  },
  {
    id: "duel-23",
    question: "Stock at $112. The $105 call trades for $9.40. How much of that price is time value (extrinsic)?",
    options: ["$7.00", "$9.40", "$0.00", "$2.40"],
    correctIndex: 3,
    explanation: "Intrinsic is 112 minus 105 = $7.00. The leftover $2.40 is extrinsic — the part theta is coming for every day."
  },
  {
    id: "duel-24",
    question: "An out-of-the-money option's value is made up of what?",
    options: [
      "All intrinsic value",
      "All extrinsic (time) value",
      "Half intrinsic, half extrinsic",
      "The strike minus the premium"
    ],
    correctIndex: 1,
    explanation: "OTM options have zero intrinsic value — the scoreboard says nothing yet. Everything you paid is hope plus time, and both are decaying assets."
  },
  {
    id: "duel-25",
    question: "Option A: bid $1.00, ask $1.05. Option B: bid $1.00, ask $1.40. Same stock, same idea. Which do you trade?",
    options: [
      "B — the wider spread signals more upside",
      "Either one, the spread makes no difference",
      "A — the one with the tighter spread",
      "B — fewer traders means less competition"
    ],
    correctIndex: 2,
    explanation: "The bid-ask spread is an invisible toll you pay twice — in and out. Option B charges you 40 cents just to play; that is a turnover before the snap."
  },
  {
    id: "duel-26",
    question: "You buy 45 days to expiration instead of 7. What is the trade-off?",
    options: [
      "You pay more premium, but theta bleeds slower",
      "You pay less premium and the decay is slower too",
      "You pay more premium and the decay is even faster",
      "There is no trade-off, the pricing evens out"
    ],
    correctIndex: 0,
    explanation: "Time costs money, but it buys forgiveness. Longer-dated options decay more slowly per day, so being a little early does not end the game."
  },
  {
    id: "duel-27",
    question: "A $200 stock's weekly ATM straddle costs $4.00 going into earnings. The stock moves $3 on the print. Who won?",
    options: [
      "The straddle buyers",
      "Nobody on either side",
      "Only the shareholders",
      "The premium sellers"
    ],
    correctIndex: 3,
    explanation: "The market priced a $4 move and the stock only delivered $3. When the actual move undershoots the expected move, the people who sold that premium collect."
  },
  {
    id: "duel-28",
    question: "You buy the $100 call and sell the $110 call — a call debit spread. What did selling the $110 do for you?",
    options: [
      "Added unlimited upside risk to the position",
      "Cut your cost and capped your max gain",
      "Doubled the position's delta",
      "Removed all of the time decay"
    ],
    correctIndex: 1,
    explanation: "The short call is a rebate with a ceiling. You pay less to play and soften theta, but everything above $110 belongs to someone else."
  },
  {
    id: "duel-29",
    question: "Your thesis was a breakout over $250. The level failed, the catalyst passed, and you are down 40%. What does the playbook say?",
    options: [
      "Average down while the options are cheap",
      "Hold to expiration, anything can happen",
      "Cut the trade and salvage what is left of it",
      "Double the position to get back to even"
    ],
    correctIndex: 2,
    explanation: "Trade the thesis, not the hope. When the reason you entered is gone, the remaining premium is salvage — take it and live to play the next setup."
  },
  {
    id: "duel-30",
    question: "Earnings tonight. The stock barely moves on the print. Which option gets hit hardest by IV crush in percentage terms?",
    options: [
      "The at-the-money call expiring this week",
      "A deep in-the-money call in the same expiration",
      "The common stock shares themselves",
      "A two-year LEAPS call on the same stock"
    ],
    correctIndex: 0,
    explanation: "Event juice concentrates in the nearest expiration, and an ATM weekly is nearly 100% extrinsic. When the uncertainty vanishes, that one deflates like a popped ball."
  }
];
