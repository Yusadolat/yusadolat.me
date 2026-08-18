import { useState } from "react";

type SetValue<T> = (value: T | ((previous: T) => T)) => void;

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Gatsby renders this during SSR, where there is no window. Bail out to the
    // initial value so the server-rendered markup matches the first client
    // render, then let the client read localStorage on hydration.
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue: SetValue<T> = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
