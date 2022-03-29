import { createContext } from "react";
import { CardValue } from "../../types/CardTypes";

type ScoreContextType = {
  correctAnswers: number;
  wrongAnswers: number;
  reset: () => void;
  submit: (cards: CardValue[]) => boolean;
};

const ScoreContext = createContext<ScoreContextType | null>(null);

export default ScoreContext;
