import React from "react";
const cardContext = React.createContext({
  items: [],
  totalAmount: 0,
  addCartItem: (props) => {},
  removeCartItem: (props) => {},
});

export default cardContext;
