import { usersStore, authStore } from '../store/store'

function AuthDashboard() {
  const { user, logIn, logOut } = authStore()
  const { testSetStateOutOfFunction } = usersStore()
  return <div>
    {testSetStateOutOfFunction}
    <button onClick={logIn}>login</button>
    <button onClick={logOut}>logout</button>
    user: {JSON.stringify(user)}
  </div>
}

usersStore.setState(() => ({ testSetStateOutOfFunction: 2020 }))

export default function Zustand() {
  const { users, getUsers, loading, getUser, addUser, deleteUser, updateUser, removeAll } = usersStore()

  return (
    <div>
      <AuthDashboard />
      <hr />
      <button onClick={() => getUsers()}> get users</button>
      <button onClick={() => getUser({ id: 3 })}> get user 0</button>
      <button onClick={() => addUser({ id: Math.random(), name: 'felipe' })}> add user</button>
      <button onClick={() => deleteUser({ id: 5 })}> deleteuser user</button>
      <button onClick={() => updateUser({ id: 10 })}> add user</button>
      <button onClick={() => removeAll()}> removeAll</button>
      {loading && <div>loading...</div>}
      <div>
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  )
}
