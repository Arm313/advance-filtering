import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  totalAmount: JSON.parse(localStorage.getItem("total")) || 0,
  cardAmount: 1,
};

const cardSlice = createSlice({
  initialState,
  name: "basket",
  reducers: {
    addToCard: (state, action) => {
      let { basket } = state;
      const idx = state.basket.findIndex((x) => x.id == action.payload.id);

      if (idx < 0) {
        basket.push(action.payload);
        state.totalAmount = basket.reduce((x, y) => {
          return (x += +y.newPrice * y.count);
        }, 0);

        localStorage.setItem("basket", JSON.stringify(basket));
        localStorage.setItem("total", JSON.stringify(state.totalAmount));
      } else {
        basket[idx].count++;
        state.totalAmount += +basket[idx].newPrice;

        localStorage.setItem("total", JSON.stringify(state.totalAmount));
      }
    },
    removFromCard: (state, action) => {
      state.basket = state.basket.filter((x) => {
        return x.id !== action.payload.id;
      });
      state.totalAmount -= action.payload.newPrice * action.payload.count;

      localStorage.setItem("total", JSON.stringify(state.totalAmount));

      if (state.basket.length >= 1) {
        localStorage.setItem("basket", JSON.stringify(state.basket));
      } else {
        localStorage.removeItem("basket");
        localStorage.removeItem("total");
      }
    },
    increment: (state, action) => {
      const idx = state.basket.findIndex((x) => x.id == action.payload.id);
      state.basket[idx].count++;
      state.totalAmount += +action.payload.newPrice;
      localStorage.setItem("total", JSON.stringify(state.totalAmount));
    },
    decrement: (state, action) => {
      const idx = state.basket.findIndex((x) => x.id == action.payload.id);
      state.basket[idx].count--;

      if (state.basket[idx].count < 1) {
        state.basket.splice(idx, 1);
        state.totalAmount -= +action.payload.newPrice;
        localStorage.setItem("total", JSON.stringify(state.totalAmount));
      } else {
        state.totalAmount -= +action.payload.newPrice;
        localStorage.setItem("total", JSON.stringify(state.totalAmount));
      }
    },
  },
});

export const { addToCard, removFromCard, increment, decrement } =
  cardSlice.actions;

export default cardSlice.reducer;
