"use client"

import React, { useState } from "react";

const MyCounterApp = () => {
  const [displayCount, setDisplayCount] = useState(0);
  let count = displayCount;
  return (
    <>
      <div>
        <hr />
        <h2>MyCounterApp</h2>
        <h3>Count:{" " + count}</h3>
        <div>
          <button onClick={() => setDisplayCount((count = count - 1))}>
            -
          </button>
          <button onClick={() => setDisplayCount((count = count + 1))}>
            +
          </button>
          <button onClick={() => setDisplayCount(0)}>reset</button>
        </div>
      </div>
    </>
  );
};

export default MyCounterApp;