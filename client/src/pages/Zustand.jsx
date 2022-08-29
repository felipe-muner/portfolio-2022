import { useEffect } from 'react'
import { usersStore, authStore } from '../store/store'
import API from "../services/api";

function AuthDashboard() {
  const { user, logIn, logOut } = authStore()
  return <div>
    <button onClick={logIn}>login</button>
    <button onClick={logOut}>logout</button>
    user: {JSON.stringify(user)}
  </div>
}


export default function Zustand() {
  const { users, getUsers, loading } = usersStore()

  return (
    <div>
      <AuthDashboard />
      <button onClick={getUsers}> get users</button>
      {loading && 'loading...'}
      <div>{JSON.stringify(users)}</div>
    </div>
  )
}
