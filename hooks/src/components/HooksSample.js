import React, { useState, useEffect } from "react";

function HooksSample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default HooksSample;
