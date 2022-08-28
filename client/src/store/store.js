import create from 'zustand'
import API from '../services/api'

export const authStore = create((set) => ({
  user: {},
  signIn: () => set(() => ({ user: {login: 'felipe', password: '123'} })),
  logout: () => set({ user: {login: null, password: null} }),
}))

export const usersStore = create((set) => ({
  users: [],
  loading: false,
  hasErrors: false,
  getUsers: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await API.get("https://jsonplaceholder.typicode.com/users");
      set(() => ({ users:  response.data, loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}))