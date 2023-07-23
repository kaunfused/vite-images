import { createContext, useContext, useEffect, useState } from "react";

const Appcontext = createContext();

const getInitialMode = () => {
  const prefersDrak = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const storedDark = localStorage.getItem("darkTheme") === "true";
  return storedDark || prefersDrak;
};

export function Concon({ children }) {
  const [isDark, setisDark] = useState(getInitialMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const themeToggle = () => {
    let t = !isDark;
    setisDark(t);
    localStorage.setItem("dark-theme", t);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <Appcontext.Provider
      value={{ isDark, themeToggle, searchTerm, setSearchTerm }}
    >
      {children}
    </Appcontext.Provider>
  );
}

export const contextglobalUser = () => useContext(Appcontext);
