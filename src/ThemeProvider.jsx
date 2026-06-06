import React from 'react'
import { useState } from 'react'
import { ThemeContext } from './ThemeContext';
function ThemeProvider({children}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider