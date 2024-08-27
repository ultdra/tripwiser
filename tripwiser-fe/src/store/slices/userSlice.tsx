import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the user
interface User {
  id: string;
  name: string;
  email: string;
  token?: string; // Optional, for authenticated users
}

// Define the initial state using the User type
interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

// Create a slice for user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
