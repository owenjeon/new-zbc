import { useRootStore } from "../";

const useUiStore = () => useRootStore().uiStore;
export default useUiStore;
