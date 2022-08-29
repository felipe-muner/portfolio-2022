import { usersStore, authStore } from '../store/store'

function AuthDashboard() {
  const { user, logIn, logOut } = authStore()
  return <div>
    <button onClick={logIn}>login</button>
    <button onClick={logOut}>logout</button>
    user: {JSON.stringify(user)}
  </div>
}


export default function Zustand() {
  const { users, getUsers, loading, getUser } = usersStore()

  return (
    <div>
      <AuthDashboard />
      <button onClick={() => getUsers()}> get users</button>
      <button onClick={() => getUser({ id: 3 })}> get user 0</button>
      {loading && 'loading...'}
      <div>{JSON.stringify(users)}</div>
    </div>
  )
}
