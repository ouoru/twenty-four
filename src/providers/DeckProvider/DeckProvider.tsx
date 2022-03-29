import { useCallback, useContext, useMemo, useState } from "react";
import DeckContext from "./DeckContext";
import createDeck from "./createDeck";

export const DeckProvider = ({ children }: any) => {
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);

  const create = useCallback(() => {
    const newDeck = createDeck();

    const topCards = newDeck.slice(0, 4);
    const remainingDeck = newDeck.slice(4);

    setDeck(remainingDeck);
    setHand(topCards);
  }, []);

  const draw = useCallback(() => {
    if (deck.length === 0) {
      setDeck([]);
      setHand([]);
      return;
    }

    const topCards = deck.slice(0, 4);
    const remainingDeck = deck.slice(4);

    setDeck(remainingDeck);
    setHand(topCards);
  }, [deck]);

  const state = useMemo(
    () => ({
      deck,
      hand,
      draw,
      create
    }),
    [deck, hand, draw, create]
  );

  return <DeckContext.Provider value={state}>{children}</DeckContext.Provider>;
};

export const useDeckProvider = () => {
  const value = useContext(DeckContext);

  if (value === null) {
    throw new Error("deck context was not defined yet");
  }

  return value;
};
