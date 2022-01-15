import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       showCounter: state.showCounter,
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       showCounter: state.showCounter,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   return initialState;
// };

// const store = createStore(counterReducer);
