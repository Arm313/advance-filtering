import cardSlice from "./cardSlice";
import favoritReducer from "./favoritReducer";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    favorit: favoritReducer,
    basket: cardSlice,
  },
});
