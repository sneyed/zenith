// import { createContext } from "react";

// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee",
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222",
//   },
// };

// const ThemeContext = createContext(themes.potato);

// export const ThemeProvider = ThemeContext.Provider;
// export default ThemeContext;

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

// export default function ThemeContext({ theme }) {
//   const { Consumer, Provider } = createContext(theme);
//   return { Consumer, Provider };
// }
