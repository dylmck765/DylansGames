import type { PlacementQuestion } from "../lib/types";

export const placementQuiz: PlacementQuestion[] = [
  {
    id: "place-1",
    question: "What does buying a call option give you?",
    options: [
      "The obligation to buy 100 shares at the strike price",
      "The right, but not the obligation, to buy 100 shares at the strike price",
      "The right to sell 100 shares at the strike price",
      "Immediate ownership of 100 shares"
    ],
    correctIndex: 1
  },
  {
    id: "place-2",
    question: "The stock drops from $80 to $72. All else equal, what happens to the value of a put option on that stock?",
    options: [
      "It loses value",
      "It gains value",
      "It stays exactly the same",
      "It immediately expires"
    ],
    correctIndex: 1
  },
  {
    id: "place-3",
    question: "An option has a delta of 0.40. What does that roughly tell you?",
    options: [
      "The option price moves about $0.40 for every $1 the stock moves",
      "The option costs $0.40 to buy",
      "The stock is guaranteed to rise 40%",
      "The option loses $0.40 of value every day"
    ],
    correctIndex: 0
  },
  {
    id: "place-4",
    question: "You buy calls right before earnings. The stock barely moves on the report. What does IV crush do to your premium?",
    options: [
      "Nothing — option prices only track the stock price",
      "It boosts the premium because uncertainty is resolved",
      "It deflates the premium fast, because the big move that was priced in never showed up",
      "It converts the option into shares automatically"
    ],
    correctIndex: 2
  },
  {
    id: "place-5",
    question: "Your account is $4,000 and your rule caps risk at 5% per trade — $200 max loss. The call you want costs $1.50 per share. What is the most you can buy without breaking your rule?",
    options: [
      "1 contract — $150 at risk, under the cap",
      "2 contracts — $300 at risk is close enough",
      "3 contracts — conviction trades deserve size",
      "13 contracts — the premium is only $1.50"
    ],
    correctIndex: 0
  }
];
