import { useRootStore } from "..";

const useItemStore = () => useRootStore().itemStore;
export default useItemStore;
