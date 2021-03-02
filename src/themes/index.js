import React, { createContext, useContext } from "react";
import { cssJoin } from "../lib/util";

export const ThemeContext = createContext(null);

export const useTheme = ({ styles, classNames }) => {
  const theme = useContext(ThemeContext) || {};
  const styleClasses = classNames.map(className => styles[className]);
  const themeClasses = classNames.map(className => theme[className]);
  return cssJoin([...styleClasses, ...themeClasses]);
};

export default function ThemeProvider({ children, theme }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
