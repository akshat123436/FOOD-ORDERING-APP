import logo from "./logo.svg";
import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const makeCardVisible = () => {
    setIsVisible(true);
  };
  const makeCardInvisible = () => {
    setIsVisible(false);
  };
  return (
    <Fragment>
      {isVisible && <Cart onClose={makeCardInvisible}></Cart>}
      <Header onShow={makeCardVisible} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
