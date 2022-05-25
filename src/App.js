import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import DairyPage from "./Components/DairyPage";
import FrozenPage from "./Components/FrozenPage";
import GeneralMerchPage from "./Components/GeneralMerchPage";
import GroceryPage from "./Components/GroceryPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/dairyPage">
          <DairyPage />
        </Route>
        <Route path="/frozenPage">
          <FrozenPage />
        </Route>
        <Route path="/generalMerchPage">
          <GeneralMerchPage />
        </Route>
        <Route path="/groceryPage">
          <GroceryPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
