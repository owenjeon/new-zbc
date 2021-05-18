import { useRootStore } from "..";

const useAgentStore = () => useRootStore().agentStore;
export default useAgentStore;
