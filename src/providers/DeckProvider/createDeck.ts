import { Card, CardSuit, CardValue } from "../../types/CardTypes";
import shuffle from "../../utils/shuffle";

const SUITS: CardSuit[] = ["club", "diamond", "heart", "spade"];
const VALUES: CardValue[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const createDeck = () => {
  const deck: Card[] = [];

  for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < VALUES.length; j++) {
      deck.push({
        suit: SUITS[i],
        value: VALUES[j]
      });
    }
  }

  shuffle(deck);

  return deck;
};

export default createDeck;
