// import { useEffect, useReducer } from "react";
import "./App.css";
import { StoreProvider } from "./components/context";
import { Product } from "./components/Product.jsx";
import { TableProducts } from "./components/TableProducts.jsx";

// const initialState = {
//   product: JSON.parse(localStorage.getItem("product")) || product,
// };

// const onlineReducer = (state, action) => {
//   switch (action.type) {
//     case "Add":
//       return {
//         ...state,
//         product: state.product.map((item) => {
//           if (item.id === action.payload) {
//             return {
//               ...item,
//               quantity: item.price + 1,
//               price: item.price + item.copyPrice,
//             };
//           }
//           return item;
//         }),
//       };
//     case "incrementProduct":
//       return {
//         ...state,
//         product: state.product.map((item) => {
//           if (item.id === action.payload) {
//             return {
//               ...item,
//               quantity: item.quantity + 1,
//               price: item.price + item.copyPrice,
//             };
//           }
//           return item;
//         }),
//       };
//     case "decrementProduct":
//       return {
//         ...state,
//         product: state.product.map((item) => {
//           if (item.id === action.payload && item.quantity !== 1) {
//             return {
//               ...item,
//               quantity: item.quantity - 1,
//               price: item.price - item.copyPrice,
//             };
//           }
//           return item;
//         }),
//       };
//     case "removeProduct":
//       return {
//         ...state,
//         product: state.product.map((item) => {
//           if (item.id === action.payload && item.quantity !== 0) {
//             return {
//               ...item,
//               quantity: (item.quantity = 0),
//               price: (item.price = item.copyPrice),
//             };
//           }
//           return item;
//         }),
//       };

//     default:
//       return state;
//   }
// };
function App() {
  // const {
  //   store,
  //   incrementProduct,
  //   decrementProduct,
  //   addProduct,
  //   removeProduct,
  // } = useContextStore();
  // const [store, dispatch] = useReducer(onlineReducer, initialState);
  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(store.product));
  // }, [store.product]);

  // const incrementProductHandler = (id) => {
  // dispatch({ type: "incrementProduct", payload: id });
  // };
  // const decrementProductHandler = (id) => {
  // dispatch({ type: "decrementProduct", payload: id });
  // };
  // const addProductHandler = (id) => {
  // dispatch({ type: "Add", payload: id });
  // };
  // const remove = (id) => {
  // dispatch({ type: "removeProduct", payload: id });
  // };

  return (
    <StoreProvider>
      <div className="App">
        <Product
        // store={store.product} addProductHandler={addProduct}
        />
        <TableProducts
        // store={store.product}
        // incrementProductHandler={incrementProduct}
        // decrementProductHandler={decrementProduct}
        // remove={removeProduct}
        />
      </div>
    </StoreProvider>
  );
}

export default App;
