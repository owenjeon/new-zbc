import React from "react";
import OneRomDetailScreenModel from "./ViewModel";

const Ctx = React.createContext<OneRomDetailScreenModel>(undefined!);

export const useOneRomDetailStore = () => {
  return React.useContext(Ctx);
};

export const OneRomDetailProvider = Ctx.Provider;
