import type { PlacementQuestion } from "../lib/types";

export const placementQuiz: PlacementQuestion[] = [
  {
    id: "place-1",
    question: "You just bought a call. What did you actually get for your money?",
    options: [
      "A standing requirement to buy 100 shares at the strike, no matter what the stock does",
      "A chance to sell 100 shares to someone else at the agreed strike price",
      "The choice to buy 100 shares at the strike price if you want to",
      "Ownership of 100 shares right now, the moment the order fills"
    ],
    correctIndex: 2
  },
  {
    id: "place-2",
    question: "A stock slides from $80 down to $72. Hold everything else still. What happens to a put on that stock?",
    options: [
      "It gains value as the stock falls",
      "It loses value",
      "It barely budges from where it was",
      "It expires ahead of schedule"
    ],
    correctIndex: 0
  },
  {
    id: "place-3",
    question: "Someone tells you an option has a delta of 0.40. Roughly what are they telling you?",
    options: [
      "That the premium happens to cost you exactly 40 cents a share to own",
      "That the stock has basically promised to climb 40% by the time it expires",
      "That the contract quietly bleeds off 40 cents of value with each passing day",
      "That the option moves about 40 cents when the stock moves a dollar"
    ],
    correctIndex: 3
  },
  {
    id: "place-4",
    question: "You load up on calls right before earnings, the report lands, and the stock barely twitches. What does IV crush do to your premium?",
    options: [
      "It pumps the premium up in a hurry",
      "It deflates the premium fast",
      "It leaves the premium sitting right where it was",
      "It quietly turns your calls into actual shares"
    ],
    correctIndex: 1
  },
  {
    id: "place-5",
    question: "You've got $4,000 and a hard rule that no single trade can lose you more than 5%, which works out to $200. The call you like goes for $1.50 a share. How many can you buy and still keep your rule?",
    options: [
      "2 contracts, which runs you $300 and blows past the limit",
      "13 contracts",
      "Just the one contract",
      "3 contracts"
    ],
    correctIndex: 2
  }
];
