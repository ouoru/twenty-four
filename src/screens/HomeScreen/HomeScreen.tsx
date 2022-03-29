import { useGameProvider } from "../../providers/GameProvider/GameProvider";
import EndScreen from "../EndScreen/EndScreen";
import GameScreen from "../GameScreen/GameScreen";
import StartScreen from "../StartScreen/StartScreen";

const HomeScreen = () => {
  const { isStarted, isFinished } = useGameProvider();
  console.log(isStarted);
  if (!isStarted) return <StartScreen />;
  if (!isFinished) return <GameScreen />;
  return <EndScreen />;
};

export default HomeScreen;
