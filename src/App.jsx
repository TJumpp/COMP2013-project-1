import "./App.css";
import React from "react";
import data from "./data/products";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
function App() {
  //the main function that brings everything together
  return <><div className="App">
      <GroceriesAppContainer data={data} />
    </div></>;
}

export default App;
