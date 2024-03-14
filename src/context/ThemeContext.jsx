import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  // const darkThemeToggle = () => {
  //   setThemeMode((themeMode) => !themeMode);
  // };

  // handles user theme preference change

  const toggleThemeChange = () => {
    if (themeMode === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setThemeMode(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setThemeMode(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
export { useTheme };
export default ThemeContextProvider;
