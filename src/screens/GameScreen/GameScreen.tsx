import { CSSProperties, useEffect } from "react";
import PlayingCard from "../../components/PlayingCard";
import usePressedKeys from "../../hooks/usePressedKeys";
import useSubmitAnswer from "../../hooks/useSubmitAnswer";
import { useDeckProvider } from "../../providers/DeckProvider/DeckProvider";
import { useGameProvider } from "../../providers/GameProvider/GameProvider";
import { useKeyBindingProvider } from "../../providers/KeyBindingProvider/KeyBindingProvider";
import getCardValues from "../../utils/getCardValues";

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  topCards: {
    display: "flex",
    flexDirection: "row"
  },
  bottomCards: {
    display: "flex",
    flexDirection: "row"
  }
};

const GameScreen = () => {
  const { endGame } = useGameProvider();
  const { deck, hand } = useDeckProvider();

  const keyBindings = useKeyBindingProvider();

  // TODO whenever this length = 4, we want to enable "submit"
  const { pressedKeys, reset } = usePressedKeys({
    validKeys: keyBindings
  });

  // reset the pressed keys whenever we deal a new hand
  useEffect(() => {
    reset();
  }, [hand, reset]);

  const isSubmitEnabled = pressedKeys.length === 4;

  const cardValues = getCardValues(hand, keyBindings, pressedKeys);

  const submitAnswer = useSubmitAnswer(cardValues);

  // move to the end screen whenever we are out of cards
  useEffect(() => {
    if (hand.length === 0 && deck.length === 0) {
      endGame();
    }
  }, [hand, deck, endGame]);

  if (hand.length === 0) {
    return null;
  }

  const [cardA, cardB, cardC, cardD] = hand;

  return (
    <div style={styles.container}>
      <div style={styles.topCards}>
        <PlayingCard
          suit={cardA.suit}
          value={cardA.value}
          selected={pressedKeys.includes(keyBindings[0])}
        />
        <PlayingCard
          suit={cardB.suit}
          value={cardB.value}
          selected={pressedKeys.includes(keyBindings[1])}
        />
      </div>
      <div style={styles.bottomCards}>
        <PlayingCard
          suit={cardC.suit}
          value={cardC.value}
          selected={pressedKeys.includes(keyBindings[2])}
        />
        <PlayingCard
          suit={cardD.suit}
          value={cardD.value}
          selected={pressedKeys.includes(keyBindings[3])}
        />
      </div>
      <div>
        <button onClick={submitAnswer} disabled={!isSubmitEnabled}>
          submit answer
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
