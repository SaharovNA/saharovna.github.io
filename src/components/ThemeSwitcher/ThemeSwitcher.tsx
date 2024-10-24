import React, { useContext } from "react";

import { ThemeContext, ThemeProvider } from '../providers/ThemeProvider/ThemeProvider';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>
        Текущая тема: <strong>{theme}</strong>
      </p>
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
};

/*
Stories Theme Example
*/
const ViewThemeSwitcherExapmple = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333333",
    color: theme === "light" ? "#333333" : "#f0f0f0",
    textAlign: "center",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h3>Пример использования ThemeSwitcher</h3>
      <ThemeSwitcher />
    </div>
  );
};

export const ThemeSwitcherExample = () => {
  return (
    <ThemeProvider>
      <ViewThemeSwitcherExapmple />
    </ThemeProvider>
  );
};

/*
const ViewUseContextExapmple = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    borderRadius: "5px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333333",
    color: theme === "light" ? "#333333" : "#f0f0f0",
    textAlign: "center",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h3>Пример использования ThemeSwitcher</h3>
      <ThemeSwitcher />
    </div>
  );
};

const UseContextExample = () => {
  return (
    <>
      <ThemeProvider>
        <ThemeProvider>
          <ViewUseContextExapmple />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
};

export default UseContextExample;
*/