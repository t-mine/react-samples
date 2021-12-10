import React, { useState } from "react";

function HooksSample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default HooksSample;
