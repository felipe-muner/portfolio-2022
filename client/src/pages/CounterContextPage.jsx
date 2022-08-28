import React, { useState } from "react";
import CounterContextChild from "../components/CounterContextChild";
import CountContext from "../context/CountContext";

export default function CounterContextPage() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, countHandler }}>
      <CounterContextChild />
      <h2>{count}</h2>
    </CountContext.Provider>
  );
}
