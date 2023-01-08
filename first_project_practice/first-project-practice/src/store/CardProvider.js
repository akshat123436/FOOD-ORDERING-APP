import React, { useReducer } from "react";
import cardContext from "./card-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const updateCartState = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems = [...state.items];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push(action.item);
    }

    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    // console.log(updatedAmount);
    return { items: updatedItems, totalAmount: updatedAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== existingCartItem.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    const updatedAmount = state.totalAmount - existingCartItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
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

  const removeCartItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    dispatchCartState({ type: "CLEAR" });
  };
  const cardContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCartItem: addCartItemHandler,
    removeCartItem: removeCartItemHandler,
    clearCart: clearCart,
  };

  return (
    <cardContext.Provider value={cardContextValue}>
      {props.children}
    </cardContext.Provider>
  );
};

export default CardProvider;
