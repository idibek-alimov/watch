import { Reducer } from "react";
import { ItemProp } from "./components/secondPoint/SecondPoint";
import { emptyChosen } from "./App";

export enum AppActionsKind {
  ADD_CHOSEN = "ADD_CHOSEN",
  REMOVE_CHOSEN = "REMOVE_CHOSEN",
}

export interface AppActionType {
  type: AppActionsKind;
  payload: ItemProp;
}
// img: string;
// name: string;
// description: string;
// oldPrice: number;
// newPrice: number;
export const appReducer = (state: ItemProp, action: AppActionType) => {
  const { type, payload } = action;
  switch (type) {
    case AppActionsKind.ADD_CHOSEN:
      if (
        typeof payload === "object" &&
        payload !== null &&
        "name" in payload &&
        "description" in payload &&
        "oldPrice" in payload &&
        "newPrice" in payload
      ) {
        //console.log({ ...state, ...payload });
        return { ...state, ...payload };
      } else return state;
    case AppActionsKind.REMOVE_CHOSEN:
      return emptyChosen;
    default:
      return state;
  }
};
