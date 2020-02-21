import { createContext } from "react";
import { LocaizeStoreApi, LocalizeState } from "./index.interface";

export const initialState: LocalizeState = {
  langName: ""
};

export default createContext<LocaizeStoreApi>({
  state: initialState,
  // @ts-ignore
  setActiveLang: (state: State) => state as State
});
