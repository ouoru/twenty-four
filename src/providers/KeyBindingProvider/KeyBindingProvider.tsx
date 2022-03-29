import { useContext, useState } from "react";
import KeyBindingContext from "./KeyBindingContext";

const DEFAULT_KEY_BINDINGS = ["KeyQ", "KeyW", "KeyE", "KeyR"];

export const KeyBindingProvider = ({ children }: any) => {
  const [keyBindings, setKeyBindings] = useState(DEFAULT_KEY_BINDINGS);

  return (
    <KeyBindingContext.Provider value={keyBindings}>
      {children}
    </KeyBindingContext.Provider>
  );
};

export const useKeyBindingProvider = () => {
  const value = useContext(KeyBindingContext);

  if (value === null) {
    throw new Error("key binding context was not defined yet");
  }

  return value;
};
