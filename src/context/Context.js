import { createContext, useReducer, useState } from "react";

export const CartContext = createContext();
export const Context = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        const tempState1 = state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return tempState1;
      case "DECREASE":
        const tempState2 = state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempState2;
      case "DELETE":
        const tempstate3 = state.filter(
          (item) => item.id !== action.payload.id
        );

        return tempstate3;
      case "RESET":
        return [];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};
