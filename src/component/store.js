import {create} from 'zustand';

const useStore = create((set) => ({

  users: [], // Initializee the users array here
  todos: [], // Initialize the users todo array here
  currentUser: null,
  addUser: (user) =>
  set((state) => {
    const updatedUsers = [...state.users, user];
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Saves user to local storage
    return { users: updatedUsers };
  }),
  login: (email, password) => {
    const users = useStore.getState().users; // Retrieve users from the state
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      console.log('users',users)
      set(() => ({ currentUser: user,isAuthenticated: true, todos: user.todos || {} }));
      
      return true;
    } else {
      set(() => ({ currentUser: user,isAuthenticated: false }));
      return false;
    }
  },
    logout: () => {
    set(() => ({ currentUser: null, isAuthenticated: false }));
    localStorage.removeItem('isAuthenticated'); // Remove isAuthenticated from local storage
    
  },

  // addTodo: (title, todo) =>
  //   set((state) => ({
  //     users: {
  //       ...state.users,
  //       [title]: [...state.users[title], todo],
  //     },
  //   })),
  // removeTodo: (title, todoId) =>
  //   set((state) => ({
  //     users: {
  //       ...state.users,
  //       [title]: state.users[title].filter((todo) => todo.id !== todoId),
  //     },
  //   })),
}));

export default useStore;