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
  const { users, getUsers, loading, getUser, addUser, deleteUser, updateUser } = usersStore()

  return (
    <div>
      <AuthDashboard />
      <button onClick={() => getUsers()}> get users</button>
      <button onClick={() => getUser({ id: 3 })}> get user 0</button>
      <button onClick={() => addUser({ id: Math.random(), name: 'felipe' })}> add user</button>
      <button onClick={() => deleteUser({ id: 5 })}> deleteuser user</button>
      <button onClick={() => updateUser({ id: 10 })}> add user</button>
      {loading && 'loading...'}
      <div>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
