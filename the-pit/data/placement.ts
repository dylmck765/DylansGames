import type { PlacementQuestion } from "../lib/types";

export const placementQuiz: PlacementQuestion[] = [
  {
    id: "place-1",
    question: "What does buying a call option give you?",
    options: [
      "The obligation to buy 100 shares at the strike price",
      "The right to sell 100 shares at the strike price",
      "The right to buy 100 shares at the strike price",
      "Immediate ownership of 100 shares of the stock"
    ],
    correctIndex: 2
  },
  {
    id: "place-2",
    question: "The stock drops from $80 to $72. All else equal, what happens to the value of a put option on that stock?",
    options: [
      "It gains value",
      "It loses value",
      "It stays the same",
      "It expires early"
    ],
    correctIndex: 0
  },
  {
    id: "place-3",
    question: "An option has a delta of 0.40. What does that roughly tell you?",
    options: [
      "The option's premium costs exactly $0.40 per share",
      "The stock is guaranteed to rise 40% by expiration",
      "The option automatically loses $0.40 of value each day",
      "The option price moves about $0.40 per $1 stock move"
    ],
    correctIndex: 3
  },
  {
    id: "place-4",
    question: "You buy calls right before earnings. The stock barely moves on the report. What does IV crush do to your premium?",
    options: [
      "It boosts the premium sharply",
      "It deflates the premium fast",
      "It leaves the premium unchanged",
      "It converts the calls into shares"
    ],
    correctIndex: 1
  },
  {
    id: "place-5",
    question: "Your account is $4,000 and your rule caps risk at 5% per trade — $200 max loss. The call you want costs $1.50 per share. What is the most you can buy without breaking your rule?",
    options: [
      "2 contracts",
      "13 contracts",
      "1 contract",
      "3 contracts"
    ],
    correctIndex: 2
  }
];
