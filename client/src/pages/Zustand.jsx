import { useEffect } from 'react'
import { useStore } from '../store/store'
import api from "../services/api";

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

export default function Zustand() {
  const { increasePopulation, removeAllBears, getUsers, users } = useStore((state) => state)

  return (
    <div>
      <BearCounter />
      <button onClick={increasePopulation}> add bear</button>
      <button onClick={removeAllBears}> remove all bear</button>
      <button onClick={getUsers}> get users</button>
      <div>{JSON.stringify(users)}</div>
    </div>
  )
}
