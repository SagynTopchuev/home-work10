import { createContext, useContext, useReducer, useEffect } from "react";
import { product } from "../utils/Constants.jsx";
export const Context = createContext();

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || product,
};

const onlineReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.price + 1,
              price: item.price + item.copyPrice,
            };
          }
          return item;
        }),
      };
    case "incrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.copyPrice,
            };
          }
          return item;
        }),
      };
    case "decrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.copyPrice,
            };
          }
          return item;
        }),
      };
    case "removeProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: (item.quantity = 0),
              price: (item.price = item.copyPrice),
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(onlineReducer, initialState);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(store.product));
  }, [store.product]);

  const incrementProduct = (id) =>
    dispatch({ type: "incrementProduct", payload: id });
  const decrementProduct = (id) =>
    dispatch({ type: "decrementProduct", payload: id });

  const addProduct = (id) => dispatch({ type: "Add", payload: id });

  const removeProduct = (id) =>
    dispatch({ type: "removeProduct", payload: id });

  const contextValue = {
    store,
    incrementProduct,
    decrementProduct,
    addProduct,
    removeProduct,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export const useContextStore = () => useContext(Context);
