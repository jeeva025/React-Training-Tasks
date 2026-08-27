import React, { createContext, useState } from "react";
import ComponentOne from "./ComponentOne";
import "./App.css";

export const Pass = createContext();

function App() {
    const [theme, setTheme] = useState("light");
    const username = "Jeeva"

    return (
        <Pass.Provider value={{theme, setTheme, username}}>
            <div className="app">
                <ComponentOne />
            </div>
        </Pass.Provider>
    );
}

export default App;