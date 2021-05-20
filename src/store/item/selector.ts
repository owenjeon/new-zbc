import { RootStore, useRootStore } from ".."
import { useScreenKeyStore } from "../screenKey/screenKeyStore"

export default function useScreenSelector <T>(callback: (root: RootStore, key: string) => T) {
  const {key} = useScreenKeyStore()
  const rootStore = useRootStore()
  return callback(rootStore, key)
}

export const ItemDetailSelector = (root: RootStore, key: string): {[key: string]: string} | undefined => {
    const id = root.itemStore.getItemId(key)
    const item = root.itemStore.getItem(id);
    if (!item) return undefined;
    return {
      ...item,
      fullAddress: `${item.local1} ${item.local2} ${item.local3} ${item.jibunAddress}`
    };
}