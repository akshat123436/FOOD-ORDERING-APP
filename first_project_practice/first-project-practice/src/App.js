import logo from "./logo.svg";
import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import MealsSummary from "./components/meals/MealsSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;
