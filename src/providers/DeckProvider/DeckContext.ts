import { createContext } from "react";
import { Card } from "../../types/CardTypes";

type DeckContextType = {
  deck: Card[];
  hand: Card[];
  create: () => void;
  draw: () => void;
};

const DeckContext = createContext<DeckContextType | null>(null);

export default DeckContext;
