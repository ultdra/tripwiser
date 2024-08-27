import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollPosition: 0, // Default scroll position at the top
  scrollDirection: null, // Can be 'up' or 'down'
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
    setScrollDirection: (state, action) => {
      state.scrollDirection = action.payload;
    },
  },
});

export const { setScrollPosition, setScrollDirection } = scrollSlice.actions;
export default scrollSlice.reducer;
