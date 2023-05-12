import React, { createContext, useContext } from "react";
import { ItemProp } from "./components/secondPoint/SecondPoint";
import { data1 } from "./Data";

export type GlobalContent = {
  data1: ItemProp[];
  data2: ItemProp[];
  chosenProducts: ItemProp[];
  productDispatch: React.Dispatch<any>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  data1: data1,
  data2: data1,
  chosenProducts: [],
  productDispatch: () => null,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
