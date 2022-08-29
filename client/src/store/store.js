import create from 'zustand'
import api from '../services/api'

export const authStore = create((set, get) => ({
  user: {},
  logIn: () => {
    console.log('usersStore', usersStore)
    set({ user: { 
      login: 'felipe', 
      password: 'asdsadas', 
      profile: usersStore.getState().users.find(it => it.id === 1)
    } })
  },
  logOut: () => {
    set({ user: { login: null, password: null } })
  },
}))

export const usersStore = create((set, get) => ({
  users: [],
  loading: false,
  hasErrors: false,
  getUser: (user) => get().users.find(it => it.id === user.id),
  addUser: (user) => { },
  deleteUser: (id) => { },
  updateUser: (user) => { },
  getUsers: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await api.user.getUsers();
      set(() => ({ users: response.data, loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}))