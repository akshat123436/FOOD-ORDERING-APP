import logo from "./logo.svg";
import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
