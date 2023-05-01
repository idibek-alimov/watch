import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Top from "./components/top/Top";
import NavBar from "./components/navbar/NavBar";
import FirstPoint from "./components/firstPoint/FirstPoint";
import Brands from "./components/brands/Brands";
import SecondPoint from "./components/secondPoint/SecondPoint";
import ThirdPoint from "./components/thirdPoint/ThirdPoint";
import Four from "./components/fourthPoint/Four";
import Five from "./components/five/Five";
import Six from "./components/six/Six";
import Eight from "./components/eight/Eight";
import Nine from "./components/nine/Nine";
import End from "./components/end/End";

function App() {
  return (
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
  );
}

export default App;
