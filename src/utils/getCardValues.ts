import { Card, CardValue } from "../types/CardTypes";

type GetCardValuesReturn = CardValue[];

const getCardValues = (
  hand: Card[],
  keyBindings: string[],
  pressedKeys: string[]
): GetCardValuesReturn => {
  if (hand.length === 0) return [];
  //
  // pressedKeys => ['keyQ', 'keyE', 'keyW', 'keyR']
  // get the card position (a, b, c, d) from the pressedKey
  // take that card position and look at the HAND
  // get the card value from the hand
  return pressedKeys.map((pressedKey) => {
    const cardIndex = keyBindings.indexOf(pressedKey);
    const card = hand[cardIndex];
    return card.value;
  });
};

/**
 * [a, b, c, d] => [1, 2, 3, 4]
 *
 * [1, 2, 3, 4].map(item => item * 2) = [2, 4, 6, 8]
 */
export default getCardValues;
