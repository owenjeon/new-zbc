import { fetchItemDetail } from "../../service";
import { RootStore } from "../../store";
import KeyStore from "../../store/screenKey/screenKeyStore";

export default class OneRomDetailScreenModel {
  constructor(private rootStore: RootStore, private keyStore: KeyStore, private id: string) {
  }
  private itemStore = this.rootStore.itemStore;
  async fetchItem() {
    const { data } = await fetchItemDetail(this.id);
    this.itemStore.addItemId(this.keyStore.key, this.id)
    this.itemStore.setItem(this.id, data.item);
  }
}
