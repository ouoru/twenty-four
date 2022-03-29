import { useScoreProvider } from "../../providers/ScoreProvider/ScoreProvider";

const EndScreen = () => {
  const { correctAnswers, wrongAnswers } = useScoreProvider();

  return (
    <div>
      <div>correct answers:</div>
      <div>{correctAnswers}</div>
      <div>wrong answers:</div>
      <div>{wrongAnswers}</div>
    </div>
  );
};

export default EndScreen;
