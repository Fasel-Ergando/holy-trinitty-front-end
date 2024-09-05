import { createContext, useState } from "react";

const ThemeContext = createContext("Light");

export const ThemeProvider = ({ children }) => {
  const isLightMode = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const [theme, setTheme] = useState(isLightMode() ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
