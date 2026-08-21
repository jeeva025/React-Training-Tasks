import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <div className="card-icon"></div>

      <h2>Counter</h2>
      <p className="card-description">
        Manage a number using useState
      </p>

      <div className="count-display">{count}</div>

      <div className="button-group">
        <button className="btn decrement" onClick={decrement}>
          −
        </button>

        <button className="btn reset" onClick={reset}>
          Reset
        </button>

        <button className="btn increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;