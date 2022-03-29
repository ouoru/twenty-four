import { useCallback, useEffect } from "react";
import { useScoreProvider } from "../providers/ScoreProvider/ScoreProvider";
import { useDeckProvider } from "../providers/DeckProvider/DeckProvider";
import { CardValue } from "../types/CardTypes";

const useSubmitAnswer = (selectedValues: CardValue[]) => {
  const { submit } = useScoreProvider();
  const { draw } = useDeckProvider();

  const submitAnswer = useCallback(() => {
    if (selectedValues.length < 4) {
      return;
    }

    const isCorrect = submit(selectedValues);
    draw();

    // send answer =>
    // if right, update scores and go next
    // if wrong, update scores and go next
  }, [submit, selectedValues, draw]);

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (e.repeat) return;

      const keyCode = e.code;

      if (keyCode === "Enter" || keyCode === "Space") {
        submitAnswer();
        return;
      }
    };

    document.addEventListener("keypress", keyboardHandler);
    return () => document.removeEventListener("keypress", keyboardHandler);
  }, [submitAnswer]);

  return submitAnswer;
};

export default useSubmitAnswer;
