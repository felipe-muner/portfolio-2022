import create from 'zustand'
import api from '../services/api'

export const authStore = create((set) => ({
  user: {},
  logIn: () => set({ user: {login: 'felipe'}}),
  logOut: () => set({ user: { login: null, password: null } }),
}))

export const usersStore = create((set) => ({
  users: [],
  loading: false,
  hasErrors: false,
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