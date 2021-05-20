import SubwayStore from "./Subway";
import { fetchItemDetail } from "../../../service";
import { RootStore } from "../../../store";
import { computed, makeObservable, observable } from "mobx";
import KeyStore from "../../../store/screenKey/screenKeyStore";

export default class DetailScreenModel {
  agentId?: string = undefined;
  constructor(private rootStore: RootStore, private keyStore: KeyStore, private id: string) {
    makeObservable(this, {
      agentId: observable,
      agent: computed
    });
  }
  private itemStore = this.rootStore.itemStore;
  agentStore = this.rootStore.agentStore;
  subwayStore = new SubwayStore();
  async fetchItem() {
    const { data } = await fetchItemDetail(this.id);
    this.itemStore.addItemId(this.keyStore.key, this.id)
    this.itemStore.setItem(this.id, data.item);
    this.subwayStore.setItem(data.subways);
    this.agentId = data.agent.owner.owner_user_no;

    await this.agentStore.fetchAgent(data.agent.owner.owner_user_no);
  }

  // get item(): { [key: string]: string } | undefined {
  //   const item = this.itemStore.getItem(this.id);
  //   if (!item) return undefined;
  //   return {
  //     ...item,
  //     fullAddress: `${item.local1} ${item.local2} ${item.local3} ${item.jibunAddress}`
  //   };
  // }

  get agent(): { [key: string]: string } | undefined {
    if (!this.agentId) return undefined;
    const agent = this.agentStore.getItem(this.agentId);
    if (!agent) return undefined;
    return {
      ...agent,
      title: `중개사: ${agent.agent_name} (${agent.user_name})`
    };
  }
}
