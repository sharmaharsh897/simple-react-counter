import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  let incCount = () => {
    setCount(count + 1);
  };
  let decCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div>
        <div clas="count">
          <h3>{count}</h3>
          <button onClick={decCount}>-</button>

          <button onClick={incCount}>+</button>
        </div>
      </div>
    </>
  );
}
