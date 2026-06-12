import type { QuizQuestion } from "../lib/types";

export const duelPool: QuizQuestion[] = [
  {
    id: "duel-1",
    question: "What does buying a call option give you?",
    options: [
      "The obligation to buy 100 shares at the strike price",
      "A choice to buy 100 shares at the strike later, with no duty to do so",
      "A choice to sell 100 shares at the strike price whenever you decide to",
      "Immediate ownership of 100 shares at today's market price"
    ],
    correctIndex: 1,
    explanation: "Think of a call as a ticket you can cash if it pays off. It lets you buy 100 shares at the strike, and you only go through with the purchase when doing so makes you money."
  },
  {
    id: "duel-2",
    question: "What does buying a put option give you?",
    options: [
      "The obligation to sell 100 shares at whatever price the market sets",
      "A choice you can use later to buy 100 shares at the strike price",
      "A choice to sell 100 shares at the strike, even when it has dropped",
      "A guaranteed dividend payment from the underlying company"
    ],
    correctIndex: 2,
    explanation: "A put is the side of the trade that plays defense. You lock in the ability to sell 100 shares at the strike, and that gets more valuable the further the stock falls."
  },
  {
    id: "duel-3",
    question: "A call is quoted at $2.50. You buy one contract. What actually leaves your account?",
    options: ["$2.50", "$25", "$2,500", "$250"],
    correctIndex: 3,
    explanation: "Every contract covers 100 shares, so you multiply the quote by 100. That tidy $2.50 sticker is really a $250 ticket once you hand over the cash."
  },
  {
    id: "duel-4",
    question: "What is the strike price?",
    options: [
      "The premium you originally paid to buy the option contract",
      "The stock's closing price on the day you opened the trade",
      "The set price your option lets you buy or sell the shares at",
      "The price level where the exchange decides to halt trading in the stock"
    ],
    correctIndex: 2,
    explanation: "Picture the strike as a line drawn on the field ahead of time. It is the fixed price your option lets you transact at, and it stays put no matter where the stock wanders."
  },
  {
    id: "duel-5",
    question: "Your call expires today with the stock below the strike. What happens?",
    options: [
      "It automatically rolls to next week",
      "Your broker steps in and buys you the shares anyway",
      "You get half the premium back as a credit",
      "It expires worthless and the premium is gone"
    ],
    correctIndex: 3,
    explanation: "If you are out of the money when the buzzer sounds, the option is worth nothing. That is the bargain a buyer agrees to going in, where the premium is the entire risk."
  },
  {
    id: "duel-6",
    question: "Stock trades at $108. You own the $100 call. What is your intrinsic value per share?",
    options: ["$0", "$8", "$100", "$108"],
    correctIndex: 1,
    explanation: "For a call you take the stock price and subtract the strike, so 108 minus 100 leaves you $8. That chunk of the premium is real value already sitting on the scoreboard."
  },
  {
    id: "duel-7",
    question: "The stock drops $5. All else equal, what happens to the value of a put on that stock?",
    options: ["It rises in value", "It falls in value", "It stays exactly the same", "It instantly goes to zero"],
    correctIndex: 0,
    explanation: "A put roots for the stock to slide. When the price drops, your locked-in right to sell at the higher strike is suddenly worth a good deal more."
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
    explanation: "Delta is basically your participation rate in the stock's move. At 0.50, you pocket roughly half of every dollar the shares climb."
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
    explanation: "Theta is the play clock ticking down. A long option leaks a little time value every day that goes by, even on the days the stock sits perfectly still, and that decay never takes a day off."
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
    explanation: "IV is the market's best guess at how much the stock is about to move, looking forward instead of measuring what already happened. When it runs high, traders are paying up for a big expected swing, and that cost gets folded right into your premium."
  },
  {
    id: "duel-11",
    question: "You buy the $100 call for $3.00. Where does the stock need to be at expiration for you to break even?",
    options: ["$97", "$100", "$103", "$106"],
    correctIndex: 2,
    explanation: "Breakeven on a long call is the strike plus the premium, so 100 plus 3 gets you to $103. The stock has to clear the strike and then earn back what you paid for the ticket."
  },
  {
    id: "duel-12",
    question: "You buy the $50 put for $2.00. Breakeven at expiration?",
    options: ["$48", "$52", "$50", "$46"],
    correctIndex: 0,
    explanation: "On a put you take the strike and subtract the premium, so 50 minus 2 lands at $48. The stock has to drop below the strike by more than what the put cost you."
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
    explanation: "When you buy a long option, the risk is fixed from the start. The ugliest outcome is the option going to zero, and even then you only lose what you paid to get in."
  },
  {
    id: "duel-14",
    question: "Your option shows a 0.30 delta. As a rough rule of thumb, what are its odds of expiring in the money?",
    options: ["90%", "50%", "70%", "30%"],
    correctIndex: 3,
    explanation: "Delta moonlights as a back-of-the-envelope probability. A 0.30 delta option has about a 30% chance of finishing in the money, which is closer to a long downfield pass than a sure thing."
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
    explanation: "Once the big event is in the rearview, the uncertainty premium drains out of options almost overnight. The stock can sit still and your option still loses value."
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
    explanation: "Time decay speeds up as the finish line approaches, more of a cliff than a gentle slope. An at-the-money option bleeds fastest in its final days, which is why short-dated longs need the move to show up right away."
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
    explanation: "The price of the at-the-money straddle is the market posting its expected move out loud. Six dollars on a $100 stock means traders are betting on roughly a 6% swing, with the direction still up for grabs."
  },
  {
    id: "duel-18",
    question: "Your call has a vega of 0.10. Earnings pass, IV drops 20 points, and the stock goes nowhere. Roughly how much does the option lose per share?",
    options: ["$0.10", "$0.20", "$20.00", "$2.00"],
    correctIndex: 3,
    explanation: "Multiply vega by the change in IV, so 0.10 times 20 comes out to $2.00 per share, or $200 on the contract. The stock never budged and you still ate the loss."
  },
  {
    id: "duel-19",
    question: "Account: $5,000. Your rule: risk no more than 2% per trade. The calls cost $0.95. How many contracts, max?",
    options: ["1 contract", "2 contracts", "5 contracts", "10 contracts"],
    correctIndex: 0,
    explanation: "Two percent of $5,000 gives you $100 to risk. One contract runs $95, while two would cost $190 and bust right through your cap, so you stick with one. This is the unglamorous habit that keeps you in the game."
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
    explanation: "If delta is your participation rate, gamma is the pedal that speeds it up. It tells you how quickly that rate ramps as the stock moves toward the strike or drifts away from it."
  },
  {
    id: "duel-21",
    question: "Which Greek tells you how much an option's price changes when IV moves 1 point?",
    options: ["Theta", "Vega", "Delta", "Rho"],
    correctIndex: 1,
    explanation: "Vega is your volatility exposure. With a vega of 0.08, the option picks up about 8 cents per share when IV climbs a point, and it gives that back the same way when IV slips."
  },
  {
    id: "duel-22",
    question: "Earnings beat, stock up 2%, but the options market had priced a 6% move. Your calls open red. Why?",
    options: [
      "The IV crush after the event",
      "The market maker stole your fill",
      "Earnings beats always sink call prices",
      "Theta only hits on earnings day"
    ],
    correctIndex: 0,
    explanation: "You nailed the direction and lost money anyway, which happens more than people admit. A 2% pop could not outrun the volatility premium collapsing once earnings cleared, and the crush clawed back more than your delta managed to earn."
  },
  {
    id: "duel-23",
    question: "Stock at $112. The $105 call trades for $9.40. How much of that price is time value (extrinsic)?",
    options: ["$7.00", "$9.40", "$0.00", "$2.40"],
    correctIndex: 3,
    explanation: "The intrinsic piece is 112 minus 105, which is $7.00. The remaining $2.40 is extrinsic value, the part of the price that theta comes for a little at a time."
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
    explanation: "An out-of-the-money option has no intrinsic value yet, so the scoreboard reads zero. Every dollar you paid is hope and time, and both of those quietly decay while you hold."
  },
  {
    id: "duel-25",
    question: "Option A: bid $1.00, ask $1.05. Option B: bid $1.00, ask $1.40. Same stock, same idea. Which do you trade?",
    options: [
      "B, because the wider spread signals more upside",
      "Either one, the spread makes no difference",
      "A, the one with the tighter spread",
      "B, because fewer traders means less competition"
    ],
    correctIndex: 2,
    explanation: "The bid-ask spread is a hidden toll you pay on the way in and again on the way out. Option B charges you 40 cents just to get on the field, and that is a giveaway before the play even starts."
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
    explanation: "Buying time costs you a bigger premium up front, but it buys some forgiveness too. Longer-dated options give back their value more slowly each day, so showing up a touch early does not sink you."
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
    explanation: "The market charged $4 for the expected move and the stock only delivered $3 of it. Whenever the real move comes in under what was priced, the folks who sold that premium walk away with the difference."
  },
  {
    id: "duel-28",
    question: "You buy the $100 call and sell the $110 call, building a call debit spread. What did selling the $110 do for you?",
    options: [
      "Added unlimited upside risk to the position",
      "Cut your cost and capped your max gain",
      "Doubled the position's delta",
      "Removed all of the time decay"
    ],
    correctIndex: 1,
    explanation: "Selling the $110 call hands you a rebate that comes with a ceiling attached. You pay less to get in and soften the theta, and in exchange anything the stock does above $110 goes to the trader who bought that call from you."
  },
  {
    id: "duel-29",
    question: "Your thesis was a breakout over $250. The level failed, the catalyst passed, and you are down 40%. What does the playbook say?",
    options: [
      "Average down now while the options are still cheap",
      "Hold to expiration, anything can happen",
      "Cut the trade and salvage what is left of it",
      "Double the position to get back to even"
    ],
    correctIndex: 2,
    explanation: "You trade the thesis, and once the reason you got in has evaporated, the premium still sitting there is just salvage. Take what you can recover and keep your powder dry for the next clean setup."
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
    explanation: "The event juice piles into the nearest expiration, and an at-the-money weekly is made up almost entirely of extrinsic value. Once the uncertainty disappears, that one deflates like a balloon someone let go of."
  }
];
