import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: nanoid(), ...action.payload };
      state.users.push(newUser);
    },
    updateUser: (state, action) => {
      const { id, name, position } = action.payload;
      const existingUser = state.users.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.position = position;
      }
    },
    deleteUser: (state, action) => {
        const { id } = action.payload;
        const existingUser = state.users.find(user => user.id === id);
      
        if (existingUser && existingUser.status === "Enable") {
          existingUser.status = "Disable";
        } else {
          state.users = state.users.filter(user => user.id !== id);
        }
      },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export const selectUsers = state => state.user.users;
export default userSlice.reducer;
