import React from "react";
import UiStore from "./ui/uiStore";

const rootStore = {
  uiStore: new UiStore()
};

export type RootStore = typeof rootStore;

const RootCtx = React.createContext<RootStore>(rootStore);

export const useRootStore = () => {
  return React.useContext(RootCtx);
};

export const RootProvider: React.FC = ({ children }) => {
  return <RootCtx.Provider value={rootStore}>{children}</RootCtx.Provider>;
};
