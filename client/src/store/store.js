import create from 'zustand'
import api from '../services/api'

export const useStore = create((set) => ({
  bears: 10,
  users: [],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  getUsers: async () => {
    const { data } = await api.get("/users/romulo27")
    set({ users: data })
  },
}))