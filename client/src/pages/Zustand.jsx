import { useEffect } from 'react'
import { usersStore, authStore } from '../store/store'
import api from "../services/api";

function BearCounter() {
  const user = authStore((state) => state.bears)
  return <h1>{JSON.stringify(user)} around here ...</h1>
}

export default function Zustand() {
  const { users, getUsers, loading } = usersStore((state) => state)

  console.log('useStore((state) => state)', usersStore((state) => state))
  console.log(users)
  console.log(loading)

  return (
    <div>
      <BearCounter />
      { loading && 'hahahah'}
      <button onClick={getUsers}> get users</button>
      <div>{JSON.stringify(users)}</div>
    </div>
  )
}
