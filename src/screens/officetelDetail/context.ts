import React from "react";
import DetailScreenModel from "./store";

const DetailCtx = React.createContext<DetailScreenModel>(undefined!);

export const useDetailStore = () => {
  return React.useContext(DetailCtx);
};

export const DetailProvider = DetailCtx.Provider;
