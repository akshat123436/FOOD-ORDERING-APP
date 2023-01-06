import logo from "./logo.svg";
import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
