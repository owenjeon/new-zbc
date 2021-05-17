import AgentStore from "./Agent";
import SubwayStore from "./Subway";
import { fetchItemDetail } from "../../../service";
import { RootStore } from "../../../store";
import { computed, makeObservable } from "mobx";  

export default class DetailScreenModel {
  constructor(private rootStore: RootStore, private id: string) {
    makeObservable(this, {
      item: computed,
      pyeong: computed
    });
  }
  private itemStore = this.rootStore.itemStore;
  agentStore = new AgentStore();
  subwayStore = new SubwayStore();
  async fetchItem() {
    const { data } = await fetchItemDetail(this.id);
    this.itemStore.setItem(this.id, data.item);
    this.subwayStore.setItem(data.subways);

    await this.agentStore.fetchAgent(data.agent.owner.owner_user_no);
  }

  get pyeong() {
    return this.rootStore.uiStore.isPyeong ? "제곱미터" : "평";
  }

  get item() {
    return this.itemStore.getItem(this.id)
  }
}
