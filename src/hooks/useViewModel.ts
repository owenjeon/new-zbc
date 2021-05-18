import { useLocalObservable } from "mobx-react-lite";
import { RootStore, useRootStore } from "../store";

export default function useViewModel<T, K extends unknown[]>(Cls: new (root: RootStore, ...arg: K) => T, ...arg: K) {
  const rootStore = useRootStore();
  return useLocalObservable(() => new Cls(rootStore, ...arg))
}