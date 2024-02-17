import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorit: JSON.parse(localStorage.getItem("favorit")) || [],
};

export const favoritSlice = createSlice({
  initialState,
  name: "favorit",
  reducers: {
    addFav: (state, action) => {
      const uniqueData = state.favorit.some((x) => x.id == action.payload.id);

      if (!uniqueData) {
        state.favorit.push(action.payload);
        localStorage.setItem("favorit", JSON.stringify(state.favorit));
      }
    },
    delFav: (state, action) => {
      state.favorit = state.favorit.filter((x) => {
        return x.id !== action.payload.id;
      });

      if (state.favorit.length >= 1) {
        localStorage.setItem("favorit", JSON.stringify(state.favorit));
      } else localStorage.removeItem("favorit");
    },
  },
});

export const { addFav, delFav } = favoritSlice.actions;

export default favoritSlice.reducer;
