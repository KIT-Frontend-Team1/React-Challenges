import React, { useState, useEffect } from "react";
import Timer from "./Timer";

function Effect2() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </>
  );
}
export default Effect2;
