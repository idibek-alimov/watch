import React, { useEffect, useReducer, useState } from "react";
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
import { data1 } from "./Data";
import { AppActionsKind, appReducer } from "./appDispatch";
import axios from "axios";
import { motion as m, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
//import { ItemProp } from './components/secondPoint/SecondPoint';
export let emptyChosen: ItemProp = {
  id: null,
  name: null,
  description: null,
  oldPrice: null,
  newPrice: null,
  img: null,
};
function App() {
  let list: ItemProp[] = [];
  const [chosenProducts, productDispatch] = useReducer(appReducer, list);
  const [data2, setData] = useState<ItemProp[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const onScrollHandle = (event: React.UIEvent<HTMLElement>) => {
    console.log(event);
  };
  //  gsap.registerPlugin(ScrollTrigger);
  //let tl = gsap.timeline();
  // tl.to(".opening", {
  //   scrollTrigger: ".app-div",
  //   y: 100,
  // });
  // gsap.to(".close", {
  //   //scrollTrigger: ".close",
  //   backgroundColor: "yellow",
  //   duration: 1,
  // });
  // gsap.to(".opening", {
  //   scrollTrigger: {
  //     trigger: ".opening",
  //     markers: true,
  //     start: "center center",
  //     end: "center center",
  //   },
  //   backgroundColor: "yellow",
  //   duration: 1,
  // });
  return (
    <MyGlobalContext.Provider
      value={{ data1, data2, chosenProducts, productDispatch }}
    >
      <div
        className="app-div"
        onScroll={onScrollHandle}
        style={{
          position: "relative",
          backgroundColor: "black",
        }}
      >
        {/* <div className="close">hello</div> */}
        <m.div
          className="opening"
          transition={{
            duration: 1,
            delay: 1,
          }}
          animate={{
            y: 1000,
            transitionEnd: {
              display: "none",
            },
          }}
        >
          <img src="logotiny.svg" style={{ width: "40%" }} />
        </m.div>
        <Top />
        {/* <NavBar /> */}
        <FirstPoint />
        <Brands />
        <div id="second">
          <SecondPoint />
        </div>
        <div>
          <ThirdPoint />
        </div>
        <Four />
        <div id="five">
          <Five />
        </div>
        <Six />
        <Eight />
        <Nine />
        <End />
      </div>
    </MyGlobalContext.Provider>
  );
}
export default App;
