import { useContext } from "react";
import ComponentTwo from "./ComponentTwo";
import { Pass } from "./App";

function ComponentOne() {
    const {theme} = useContext(Pass)
    return (
        <div className={`component component-one ${theme}`}>

            <h1>Component One</h1>
            <ComponentTwo />

        </div>
    );
}

export default ComponentOne;