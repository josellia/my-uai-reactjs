import { createContext } from "react";

export const themes = {
  primary: {
    background: "#000000",
    color: "#c1c1c1",
  },
  secondary: {
    background: "#c1c1c1",
    color: "#000000",
  },
};

export const ThemeContext = createContext(themes.secondary);
