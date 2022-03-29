import { useCallback } from "react";
import { useDeckProvider } from "../../providers/DeckProvider/DeckProvider";
import { useGameProvider } from "../../providers/GameProvider/GameProvider";
import { useScoreProvider } from "../../providers/ScoreProvider/ScoreProvider";

const styles = {
  container: {},
  startButton: {
    height: 20
  }
};

const StartScreen = () => {
  const { startGame } = useGameProvider();
  const { create } = useDeckProvider();
  const { reset } = useScoreProvider();

  const onClick = useCallback(() => {
    create();
    reset();
    startGame();
  }, [create, reset, startGame]);

  return (
    <div style={styles.container}>
      <button onClick={onClick} style={styles.startButton}>
        start game!
      </button>
    </div>
  );
};

export default StartScreen;
