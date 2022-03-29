import { useCallback, useEffect, useState } from "react";

type UsePressedKeys = {
  validKeys: string[];
};

const usePressedKeys = ({ validKeys }: UsePressedKeys) => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      if (e.repeat) return;

      const keyCode = e.code;

      if (keyCode === "Escape") {
        setPressedKeys([]);
        return;
      }

      if (validKeys.includes(keyCode)) {
        setPressedKeys((prevPressedKeys) => {
          if (prevPressedKeys.includes(keyCode)) {
            // TODO do something about this
            return prevPressedKeys;
          } else {
            return [...prevPressedKeys, keyCode];
          }
        });
      }
    };

    document.addEventListener("keydown", keyboardHandler);
    return () => document.removeEventListener("keydown", keyboardHandler);
  }, [validKeys]);

  const reset = useCallback(() => {
    setPressedKeys([]);
  }, []);

  return {
    pressedKeys,
    reset
  };
};

export default usePressedKeys;
