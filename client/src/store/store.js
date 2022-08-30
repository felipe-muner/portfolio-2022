import create from 'zustand';
import api from '../services/api';

export const authStore = create((set) => ({
  user: {},
  logIn: () => {
    set({
      user: {
        login: 'felipe',
        password: 'asdsadas',
        profile: usersStore.getState().users.find((it) => it.id === 1),
      },
    });
  },
  logOut: () => {
    set({ user: { login: null, password: null } });
  },
}));

export const usersStore = create((set, get) => ({
  users: [],
  loading: false,
  hasErrors: false,
  getUser: (user) => get().users.find((it) => it.id === user.id),
  addUser: (user) => set(() => ({ users: [...get().users, user] })),
  removeAll: () => set(() => ({ users: [] })),
  deleteUser: (user) => set(() => ({ users: get().users.filter((it) => it.id !== user.id) })),
  updateUser: (user) => set(() => ({
    users: get().users.map((it) => ((it.id === user.id)
      ? { id: '50', name: 'felipe updated' }
      : it)),
  })),
  getUsers: async () => {
    set(() => ({ loading: true }));
    try {
      const response = await api.user.getUsers();
      set(() => ({ users: response.data, loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
}));

// const unsub3 = usersStore.subscribe(
//   (users, previousUsers) => console.log(users, previousUsers)
// )
// const unsub2 = usersStore.subscribe((state) => state.users, console.log)
