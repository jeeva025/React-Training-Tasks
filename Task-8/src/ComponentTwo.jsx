import React, { useContext } from "react";
import ComponentThree from "./ComponentThree";
import { Pass } from "./App";

function ComponentTwo() {

    const {theme} = useContext(Pass)
    return (
        <div className={`component component-two ${theme}`}>
            <h1>Component Two</h1>

            <ComponentThree />

        </div>
    );
}

export default ComponentTwo;