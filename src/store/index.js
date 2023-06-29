import { legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import authReducer from './auth'





/* REACT REDUX WAY*/

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "INCREASE_COUNT") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

/* REDUX TOOLKIT WAY */
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
