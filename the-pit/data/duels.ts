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
  },
  {
    id: "duel-31",
    question: "You own 100 shares and sell one call against them. What have you taken on?",
    options: [
      "An obligation to sell your 100 shares at the strike if the call is exercised",
      "A second batch of 100 shares bought at the current market price",
      "The right to buy another 100 shares whenever you choose to",
      "Full downside protection on every share you own no matter how far the stock falls"
    ],
    correctIndex: 0,
    explanation: "Selling a call against shares you own is the covered call, where the premium is your payment for agreeing to let the shares go at the strike. You collect income up front, and the trade-off is giving up the gains above that price."
  },
  {
    id: "duel-32",
    question: "You sell a cash-secured put. What are you on the hook for?",
    options: [
      "Nothing, the premium you collect is yours free and clear",
      "Buying 100 shares at the strike if the stock falls and you get assigned",
      "Selling 100 shares you do not even own at the strike price",
      "Delivering the dividend to whoever bought the put from you over the period"
    ],
    correctIndex: 1,
    explanation: "When you sell a put you are agreeing to buy the stock at the strike, so you park the cash to cover it. Traders use this to get paid while waiting to own a stock at a price they actually like."
  },
  {
    id: "duel-33",
    question: "Why is selling a naked call considered the riskiest basic options trade?",
    options: [
      "The premium you collect is usually very small",
      "Your broker charges extra commission on it",
      "It can only ever lose the premium you took in and nothing beyond that",
      "A stock can rise forever, so the loss has no ceiling"
    ],
    correctIndex: 3,
    explanation: "When you sell a call without owning the shares, you have promised to deliver at the strike however high the stock climbs. There is no limit on how far a stock can run, which means the loss on a naked call has no limit either."
  },
  {
    id: "duel-34",
    question: "You sold a call and it finishes in the money. What most likely happens at expiration?",
    options: [
      "The option quietly expires and you keep everything",
      "You are handed 100 fresh shares to add to your account",
      "You get assigned and sell 100 shares at the strike",
      "Your account is frozen until the next trading session opens"
    ],
    correctIndex: 2,
    explanation: "An in-the-money short call gets assigned, so you deliver 100 shares at the strike. If you do not already own them, your broker buys them at the market price and you feel the difference."
  },
  {
    id: "duel-35",
    question: "How do American-style options differ from European-style?",
    options: [
      "American options never expire on a Friday afternoon",
      "American options can be exercised any day before expiration",
      "American options trade only on foreign stock exchanges",
      "American options settle in cash while European ones deliver shares to you"
    ],
    correctIndex: 1,
    explanation: "Most US stock options are American style, so the holder can exercise on any trading day rather than waiting for the end. European style, common on index options, only allows exercise at expiration."
  },
  {
    id: "duel-36",
    question: "When is a put option in the money?",
    options: [
      "When the stock is trading below the strike price",
      "When the stock is trading above the strike price",
      "When the stock sits exactly at the strike price",
      "Whenever implied volatility is higher than it was at the time you bought it"
    ],
    correctIndex: 0,
    explanation: "A put gives you the right to sell at the strike, so it carries real value once the stock drops under that level. The lower the stock goes beneath the strike, the deeper in the money the put sits."
  },
  {
    id: "duel-37",
    question: "A trader says they 'rolled' an option. What did they do?",
    options: [
      "Exercised it early to grab the shares",
      "Let it expire and walked away from the position",
      "Closed the current option and opened a new one further out",
      "Turned the single contract into a spread by selling another strike against it"
    ],
    correctIndex: 2,
    explanation: "Rolling is closing what you hold and reopening a similar position at a later date or a different strike, usually in one motion. People roll to buy more time or to chase a better level when the trade still has legs."
  },
  {
    id: "duel-38",
    question: "What does open interest tell you that daily volume does not?",
    options: [
      "The number of contracts that traded so far today",
      "The total contracts still open and not yet closed out",
      "The exact price the very next trade will fill at",
      "How much implied volatility is baked into the front-month options right now"
    ],
    correctIndex: 1,
    explanation: "Volume counts how many contracts changed hands today. Open interest is the running tally of contracts opened and not yet closed, so it shows how much real positioning is parked in a strike."
  },
  {
    id: "duel-39",
    question: "A call is deep in the money. What is its delta close to?",
    options: ["0.00", "0.30", "0.50", "1.00"],
    correctIndex: 3,
    explanation: "A deep in-the-money call moves almost dollar for dollar with the stock, so its delta sits up near 1.00. At that point the option behaves a lot like owning the shares outright."
  },
  {
    id: "duel-40",
    question: "What is true about the delta of a long put?",
    options: [
      "It is negative, because the put gains when the stock falls",
      "It is always exactly positive one",
      "It is locked at zero until expiration day",
      "It matches the delta of a call sitting at the very same strike price"
    ],
    correctIndex: 0,
    explanation: "A long put carries negative delta because it profits as the stock drops. A delta around negative 0.40 means the put gains roughly 40 cents for every dollar the stock loses."
  },
  {
    id: "duel-41",
    question: "You buy the $100 call and sell the $105 call for a net debit of $2.00. What is your max profit per share?",
    options: ["$2.00", "$5.00", "$3.00", "$105.00"],
    correctIndex: 2,
    explanation: "The distance between the strikes is $5.00 and you paid $2.00 to put it on, so the most you can make is the $3.00 left over. You reach that ceiling once the stock closes at or above the higher strike."
  },
  {
    id: "duel-42",
    question: "You sell a put spread for a credit. What outcome are you rooting for?",
    options: [
      "The stock to crash well below both strikes by expiration",
      "The stock to stay above both strikes so the spread expires worthless",
      "Implied volatility to spike sharply right after you open it",
      "Both puts to finish deep in the money by the close on expiration afternoon"
    ],
    correctIndex: 1,
    explanation: "Selling a put spread for a credit lets you keep the money as long as the stock holds above your strikes. You are getting paid to bet the stock will not fall through your level before time runs out."
  },
  {
    id: "duel-43",
    question: "You own 100 shares and buy a put against them. What did you just set up?",
    options: [
      "A covered call that earns you steady income",
      "A naked position carrying unlimited risk on the downside of the trade",
      "A way to double your exposure to the same stock",
      "Insurance that lets you sell at the strike if the stock tanks"
    ],
    correctIndex: 3,
    explanation: "Buying a put on shares you own is a protective put, a floor under your position. You pay the premium for the comfort of knowing you can offload at the strike however ugly things get."
  },
  {
    id: "duel-44",
    question: "You bought a call at $2.00 and sell it at $3.00. What did you make on one contract?",
    options: ["$100", "$1", "$1,000", "$300"],
    correctIndex: 0,
    explanation: "The option moved $1.00 per share and one contract is 100 shares, so the gain is $100. Always run the option price through that times-100 lens to see the real money involved."
  },
  {
    id: "duel-45",
    question: "Your call is up nicely with time left. What do most retail traders do to take the profit?",
    options: [
      "Exercise it and buy the 100 shares to hold",
      "Wait for the broker to auto-exercise at expiration",
      "Sell the contract to close and book the gain",
      "Convert it into a covered call against newly purchased shares"
    ],
    correctIndex: 2,
    explanation: "Selling to close captures the intrinsic value plus whatever time value is left, and it skips the cash needed to exercise. Exercising early usually throws away the extrinsic value you could have sold instead."
  },
  {
    id: "duel-46",
    question: "What happens to an option's time value at the moment of expiration?",
    options: [
      "It reaches its highest point of the entire contract right at the very end",
      "It goes to zero, leaving only any intrinsic value behind",
      "It converts into extra shares of the stock",
      "It is refunded to the buyer as a small credit back"
    ],
    correctIndex: 1,
    explanation: "Time value exists only because the future is uncertain, and at expiration there is no future left to price. Whatever the option is worth at the buzzer is pure intrinsic value, and an out-of-the-money option is worth nothing."
  },
  {
    id: "duel-47",
    question: "What is the main appeal of being an option seller?",
    options: [
      "Time decay works in your favor every day",
      "Your potential profit has no upper limit",
      "You can never be assigned on what you sell",
      "You pay no premium and carry zero risk of any kind"
    ],
    correctIndex: 0,
    explanation: "Sellers collect the premium up front and let theta chip away at the option's value as the days pass. The catch is that the risk can dwarf the premium, so selling asks for real discipline."
  },
  {
    id: "duel-48",
    question: "Your short put gets assigned. What lands in your account?",
    options: [
      "A cash credit equal to the strike price",
      "A short position of 100 shares you must buy back",
      "100 shares of stock that you paid the strike for",
      "Nothing changes until the contract officially expires later on"
    ],
    correctIndex: 2,
    explanation: "Assignment on a short put means you buy 100 shares at the strike, which is the exact deal you agreed to when you sold it. If you wanted the stock around that price, this is a feature rather than a surprise."
  },
  {
    id: "duel-49",
    question: "Where is gamma at its largest?",
    options: [
      "On deep in-the-money options months from expiry",
      "On at-the-money options close to expiration",
      "On far out-of-the-money options with lots of time left",
      "It stays perfectly constant across every strike and date"
    ],
    correctIndex: 1,
    explanation: "Gamma peaks for at-the-money options near expiration, where a small move in the stock can flip the option's delta in a hurry. That is what makes short-dated at-the-money contracts feel so twitchy."
  },
  {
    id: "duel-50",
    question: "Which option has more vega, all else equal?",
    options: [
      "A weekly option expiring in three days",
      "They always carry identical vega",
      "Whichever one happens to be further out of the money right now",
      "A longer-dated option with months until expiry"
    ],
    correctIndex: 3,
    explanation: "More time until expiration gives volatility more room to do its work, so longer-dated options carry bigger vega. That is why a swing in IV moves the price of a LEAPS far more than it moves a weekly."
  },
  {
    id: "duel-51",
    question: "An IV rank near 90% is telling you what?",
    options: [
      "Current IV is high versus its own past year",
      "The stock is about 90% likely to go up",
      "Ninety percent of the options have already expired",
      "The bid-ask spread is unusually wide on this name today"
    ],
    correctIndex: 0,
    explanation: "IV rank places today's implied volatility against its range over the past year, so 90% means options are pricey by this stock's own history. A high reading like that often nudges traders toward selling premium rather than buying it."
  },
  {
    id: "duel-52",
    question: "On most stock indexes, downside puts often cost more in IV terms than upside calls. Why?",
    options: [
      "Puts are cheaper for market makers to create",
      "Calls are banned from trading during selloffs",
      "Investors pay up for crash protection, bidding put IV higher",
      "It is a glitch in the pricing models that nobody has bothered to fix"
    ],
    correctIndex: 2,
    explanation: "Markets tend to fall faster than they rise, so demand for downside protection runs hot and pushes put volatility above call volatility. Traders call this lopsided shape the volatility skew."
  },
  {
    id: "duel-53",
    question: "Why favor options on heavily traded stocks over thinly traded ones?",
    options: [
      "Liquid options are guaranteed to be profitable trades",
      "Tight spreads and real volume make getting in and out cheaper",
      "Thin options always hand you a higher delta",
      "The exchange waives all commissions on the busiest names every day"
    ],
    correctIndex: 1,
    explanation: "Liquid options come with tight bid-ask spreads and plenty of contracts trading, so you are not bleeding money just getting in and out. On a thin name the spread alone can swallow a chunk of your edge."
  },
  {
    id: "duel-54",
    question: "You want to buy an option right now at market. Which price do you pay?",
    options: [
      "The bid price",
      "The midpoint of the quote, always",
      "Whatever price the last trade happened to print at earlier",
      "The ask price, the higher of the two quotes"
    ],
    correctIndex: 3,
    explanation: "When you buy at market you pay the ask, which is the higher of the two quotes. Selling at market fills at the lower bid, so crossing that gap costs you on every round trip, and many traders work their orders toward the midpoint instead."
  },
  {
    id: "duel-55",
    question: "You own shares bought at $50 and sell a $55 call for $1.50. Where is your breakeven on the shares now?",
    options: ["$48.50", "$50.00", "$55.00", "$56.50"],
    correctIndex: 0,
    explanation: "The $1.50 of premium you collected lowers your effective cost in the shares from $50 down to $48.50. That cushion is the small bit of downside relief a covered call hands you."
  },
  {
    id: "duel-56",
    question: "A calendar spread is built by doing what?",
    options: [
      "Buying a call and a put at the same strike and date",
      "Selling a near-term option and buying a longer-dated one at the same strike",
      "Buying two calls at different strikes in the same week",
      "Selling shares short while buying a protective call somewhere above the strike"
    ],
    correctIndex: 1,
    explanation: "A calendar sells the near-term option and buys a longer-dated one at the same strike, leaning on the faster decay of the short leg. It does best when the stock hangs around that strike while the front option melts."
  },
  {
    id: "duel-57",
    question: "You are short an in-the-money call and the stock pays a dividend tomorrow. What is the added risk?",
    options: [
      "Your call automatically turns into a put overnight",
      "Theta stops working for the rest of the contract",
      "Early assignment, since the holder may exercise to grab the dividend",
      "Implied volatility is locked and cannot change at all until after the payout date"
    ],
    correctIndex: 2,
    explanation: "Whoever owns an in-the-money call may exercise the day before a dividend to capture it, which leaves the seller assigned early. If you are short calls around an ex-dividend date, that risk is worth respecting."
  },
  {
    id: "duel-58",
    question: "What is the most you can lose buying a put?",
    options: [
      "The premium you paid for it",
      "The strike price times 100 shares",
      "Unlimited if the stock keeps falling",
      "However far the stock happens to rise above your strike"
    ],
    correctIndex: 0,
    explanation: "Like any long option, a bought put can only cost you the premium you put down. Even if the stock rallies and the put goes to zero, your loss stops at what you paid to get in."
  },
  {
    id: "duel-59",
    question: "You exercise a call you own. What happens?",
    options: [
      "You sell 100 shares at the current market price",
      "You collect the difference in cash and close out",
      "You receive the dividend the company just declared on the stock",
      "You buy 100 shares at the strike price"
    ],
    correctIndex: 3,
    explanation: "Exercising a call means you use your right to buy the 100 shares at the strike. For most winning trades selling the contract is cleaner, but exercising is there when you genuinely want to own the stock."
  },
  {
    id: "duel-60",
    question: "Your account is $3,000 and one trade is showing an $1,800 paper loss. What does that tell you?",
    options: [
      "You should add even more here to average your cost down further",
      "Losses this size are normal and fine to ride out",
      "The market is simply wrong about your thesis",
      "Your position was far too large for the account"
    ],
    correctIndex: 3,
    explanation: "A single trade big enough to put 60% of the account at risk was sized wrong from the start. Position sizing is what keeps one bad call from ending your season, and it matters more than any individual pick."
  }
];
