import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlice";
import userReducer from "./slices/userSlice";

// Creating the Redux store
export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    user: userReducer,
  },
});

// Define the RootState and AppDispatch types based on the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
