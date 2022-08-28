import  { useContext } from 'react'
import CountContext from "../context/CountContext";

export default function CounterContextChild() {
  const context = useContext(CountContext);
  console.log('context', context)
  const { countHandler } = context;

  return (
    <div>
      <button onClick={countHandler}>Increment</button>
    </div>
  )
}
