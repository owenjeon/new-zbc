import ItemStore from "./Item";
import AgentStore from "./Agent";
import SubwayStore from "./Subway";
import { fetchItemDetail } from "../../../service";
import { RootStore } from "../../../store";
import { computed, makeObservable } from "mobx";

export default class DetailScreenModel {
  constructor(private rootStore: RootStore) {
    makeObservable(this, {
      pyeong: computed
    });
  }
  itemStore = new ItemStore();
  agentStore = new AgentStore();
  subwayStore = new SubwayStore();
  async fetchItem(id: string) {
    const { data } = await fetchItemDetail(id);
    this.itemStore.setItem(data.item);
    this.subwayStore.setItem(data.subways);

    await this.agentStore.fetchAgent(data.agent.owner.owner_user_no);
  }

  get pyeong() {
    return this.rootStore.uiStore.isPyeong ? "제곱미터" : "평";
  }
}
