import React, { useReducer } from "react";
import cardContext from "./card-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const updateCartState = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    // console.log(updatedAmount);
    return { items: updatedItems, totalAmount: updatedAmount };
  }
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    updateCartState,
    defaultCartState
  );

  const addCartItemHandler = (item) => {
    // console.log(item);
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeCartItemHandler = () => {};
  const cardContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
  };

  return (
    <cardContext.Provider value={cardContextValue}>
      {props.children}
    </cardContext.Provider>
  );
};

export default CardProvider;
