import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  useEffect(() => {
    window.addEventListener("storage", setPreferedTheme);
    return () => {
      window.removeEventListener("storage", setPreferedTheme);
    };
  }, []);

  const setPreferedTheme = () => {
    //mode === "light" ? setMode("dark") : setMode("light");

    const _mode = localStorage.getItem("mode");
    if (_mode) {
      setMode(_mode);
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("light-mode");
      localStorage.setItem("mode", "dark");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  return (
    <div className="mode">
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          onClick={() =>
            setMode((mode) => (mode === "light" ? "dark" : "light"))
          }
        />
        <label className="label" htmlFor="chk"
        style={{background: mode=== "dark" ? '#419ed9' : "#d91ddb"}}>
          <i className="fas fa-moon"/>
          <i className="fas fa-sun"/>

          <div className="ball"
          style={{background: mode=== "dark" ? '#333' : "#333"}}
          ></div>
        </label>
      </div>
    </div>


  );
}

export default ThemeSwitcher;