import { useCallback, useContext, useMemo, useState } from "react";
import { CardValue } from "../../types/CardTypes";
import ScoreContext from "./ScoreContext";
import areCardValuesCorrect from "../../utils/areCardValuesCorrect";

export const ScoreProvider = ({ children }: any) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const reset = useCallback(() => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
  }, []);

  const submit = useCallback((cards: CardValue[]) => {
    const correct = areCardValuesCorrect(
      cards[0],
      cards[1],
      cards[2],
      cards[3]
    );
    if (correct) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
      return true;
    } else {
      setWrongAnswers((prevWrongAnswers) => prevWrongAnswers + 1);
      return false;
    }
  }, []);

  const state = useMemo(
    () => ({
      correctAnswers,
      wrongAnswers,
      reset,
      submit
    }),
    [correctAnswers, wrongAnswers, reset, submit]
  );

  return (
    <ScoreContext.Provider value={state}>{children}</ScoreContext.Provider>
  );
};

export const useScoreProvider = () => {
  const value = useContext(ScoreContext);

  if (value === null) {
    throw new Error("score context was not defined yet");
  }

  return value;
};
