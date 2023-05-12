import { Reducer } from "react";
import { ItemProp } from "./components/secondPoint/SecondPoint";
import { emptyChosen } from "./App";

export enum AppActionsKind {
  ADD_CHOSEN = "ADD_CHOSEN",
  REMOVE_CHOSEN = "REMOVE_CHOSEN",
}

export interface AppActionType {
  type: AppActionsKind;
  payload: ItemProp | number;
}

export const appReducer = (state: ItemProp[], action: AppActionType) => {
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
        console.log("inside add item dispatch");
        console.log("payload", payload);
        let contains = false;
        state.map((item) => {
          if (item.id === payload.id) {
            contains = true;
          }
        });
        console.log("contains", contains);
        console.log("state before", state);
        if (!contains) {
          state.push(payload);
        }
        console.log("state", state);
        //console.log({ ...state, ...payload });
        return state;
      } else return state;
    case AppActionsKind.REMOVE_CHOSEN:
      if (typeof payload === "number")
        state = state.filter((item) => {
          return item.id != payload;
        });
      return state;
    default:
      return state;
  }
};
