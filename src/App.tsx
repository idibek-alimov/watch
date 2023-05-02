import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top/Top";
import NavBar from "./components/navbar/NavBar";
import FirstPoint from "./components/firstPoint/FirstPoint";
import Brands from "./components/brands/Brands";
import SecondPoint, { ItemProp } from "./components/secondPoint/SecondPoint";
import ThirdPoint from "./components/thirdPoint/ThirdPoint";
import Four from "./components/fourthPoint/Four";
import Five from "./components/five/Five";
import Six from "./components/six/Six";
import Eight from "./components/eight/Eight";
import Nine from "./components/nine/Nine";
import End from "./components/end/End";
import { MyGlobalContext, useGlobalContext } from "./AppContext";
import { data1, data2 } from "./Data";
import { AppActionsKind, appReducer } from "./appDispatch";

export let emptyChosen: ItemProp = {
  name: null,
  description: null,
  oldPrice: null,
  newPrice: null,
  img: null,
};
function App() {
  const [chosenProduct, productDispatch] = useReducer(appReducer, emptyChosen);
  return (
    <MyGlobalContext.Provider
      value={{ data1, data2, chosenProduct, productDispatch }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <Top />
        <NavBar />
        <FirstPoint />
        <Brands />
        <SecondPoint />
        <ThirdPoint />
        <Four />
        <Five />
        <Six />
        <Eight />
        <Nine />
        <End />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
