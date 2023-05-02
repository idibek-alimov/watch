import React, { createContext, useContext } from "react";
import { ItemProp } from "./components/secondPoint/SecondPoint";
import { data1, data2 } from "./Data";

export type GlobalContent = {
  data1: ItemProp[];
  data2: ItemProp[];
  chosenProduct: ItemProp | null;
  productDispatch: React.Dispatch<any>;
};
export const MyGlobalContext = createContext<GlobalContent>({
  data1: data1,
  data2: data2,
  chosenProduct: null,
  productDispatch: () => null,
});

export const useGlobalContext = () => useContext(MyGlobalContext);
