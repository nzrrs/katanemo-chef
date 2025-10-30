import Header from "./components/Header";
import Main from "./components/Main";
import React from "react";


export default function App() {
   const [theme, setTheme] = React.useState("light-theme");

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) =>
      prev === "light-theme" ? "dark-theme" : "light-theme"
    );
  }

  return (
    <>
      <Header toggleTheme ={toggleTheme}/>
      <Main />
    </>
  );
}
