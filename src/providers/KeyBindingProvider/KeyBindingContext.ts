import { createContext } from "react";

type KeyBindingContextType = string[];

const KeyBindingContext = createContext<KeyBindingContextType | null>(null);

export default KeyBindingContext;
