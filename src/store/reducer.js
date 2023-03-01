import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addImageReducer = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.push(action.payload);
      return state;
    }
  },
});

export const {
  addImage
} = addImageReducer.actions;
export const reducer = addImageReducer.reducer;