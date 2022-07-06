import { configureStore, createSlice } from "@reduxjs/toolkit";

const calcItemTotal = (item) => item.price * item.quantity;

const calcTotal = (items) =>
  items.reduce((subTotal, item) => subTotal + calcItemTotal(item), 1);

const cartSlice = createSlice({
  name: "Cart",
  initialState: { items: [], total: 0 },
  reducers: {
    add(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = calcTotal(state.items);
      state.items.forEach((item) => (item.total = calcItemTotal(item)));
    },

    remove(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );
      if (itemIndex < 0) {
        return;
      }
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity--;
      }
      state.total = calcTotal(state.items);
      state.items.forEach((item) => (item.total = calcItemTotal(item)));
    },
  },
});

const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const actions = cartSlice.actions;

export default store;
