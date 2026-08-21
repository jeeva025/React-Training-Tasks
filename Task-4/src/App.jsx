import { useState } from "react";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className={isDark ? "app dark" : "app light"}>
      <header className="header">
        <div>
          <h1>React Task using useState</h1>
          
        </div>

        <ThemeToggle
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </header>

      <main className="container">
        <div className="intro">
          
        </div>

        <div className="cards-container">
          <Counter />

          <Auth
            isSignedIn={isSignedIn}
            setIsSignedIn={setIsSignedIn}
          />
        </div>
      </main>

    </div>
  );
}

export default App;