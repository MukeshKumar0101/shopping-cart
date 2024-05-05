/** @format */
import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import { products } from "./products";
import ContextCart from "./ContextCart";
export const CartContext = createContext();
import { reducer } from "./reducer";
const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    // delete indivisual item from cart
    console.log(id, "idd-----");
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // clear all item from cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  //  increment the cart
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  //  useEffect to update the data

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("changing data...")
  },[state.item]);

  return (
    <>
      <CartContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
