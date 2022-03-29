import { useCallback, useContext, useMemo, useState } from "react";
import GameContext from "./GameContext";

export const GameProvider = ({ children }: any) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startGame = useCallback(() => {
    setIsStarted(true);
  }, []);

  const endGame = useCallback(() => {
    setIsFinished(true);
  }, []);

  const state = useMemo(
    () => ({
      isStarted,
      isFinished,
      startGame,
      endGame
    }),
    [isStarted, isFinished, startGame, endGame]
  );

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export const useGameProvider = () => {
  const value = useContext(GameContext);

  if (value === null) {
    throw new Error("game context was not defined yet");
  }

  return value;
};
