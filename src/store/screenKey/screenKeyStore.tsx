import { makeObservable, observable } from "mobx";
import { v4 as uuidV4 } from "uuid";
import React from "react";


export default class ScreenKeyStore {
  key = uuidV4()
  constructor() {
    makeObservable(
      this,
      {
        key: observable,
      },
    );
  }
}

const ScreenKeyCtx = React.createContext<ScreenKeyStore>(undefined!);

export const useScreenKeyStore = () => {
  return React.useContext(ScreenKeyCtx);
};

export const ScreenKeyProvider = ScreenKeyCtx.Provider