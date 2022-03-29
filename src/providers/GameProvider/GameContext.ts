import { createContext } from "react";

type GameContextType = {
  isStarted: boolean;
  isFinished: boolean;
  startGame: () => void;
  endGame: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export default GameContext;
