import { GameProvider } from "./providers/GameProvider/GameProvider";
import { DeckProvider } from "./providers/DeckProvider/DeckProvider";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./styles.css";
import { KeyBindingProvider } from "./providers/KeyBindingProvider/KeyBindingProvider";
import { ScoreProvider } from "./providers/ScoreProvider/ScoreProvider";

/**
 * UI
 *   4 cards
 *   QWER key bindings
 *
 * Deck "class"
 *   "deal", "shuffle", "draw(4)"
 *
 * isCorrect function
 *   a,b,c,d => true / false
 *
 * start a game / end a game
 *
 * random
 *   change key bindings
 *   animate cards
 */
export default function App() {
  return (
    <KeyBindingProvider>
      <ScoreProvider>
        <GameProvider>
          <DeckProvider>
            <div className="App">
              <HomeScreen />
            </div>
          </DeckProvider>
        </GameProvider>
      </ScoreProvider>
    </KeyBindingProvider>
  );
}
