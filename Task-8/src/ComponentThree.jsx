import React, { useContext } from "react";
import { Pass } from "./App";

function ComponentThree() {

    const { theme,setTheme, userName } = useContext(Pass);

    return (
        <div className={`component component-three ${theme}`}>

            <h1>Component Three</h1>

            <p>
                Welcome, <strong>{userName}</strong>
            </p>

            <p>
                Current Theme:
                <strong> {theme}</strong>
            </p>

            <button
                className="theme-button"
                onClick={()=>{setTheme(theme === "light" ? "dark" : "light")}}
            >
                {theme === "light"
                    ? "🌙 Dark Theme"
                    : "☀️ Light Theme"}
            </button>

        </div>
    );
}

export default ComponentThree;