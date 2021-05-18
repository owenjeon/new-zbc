import { action, makeObservable, observable } from "mobx";
import { fetchAgent } from "../../service";

type AgentKey = string;
type Agent = { [key: string]: string }

export default class AgentStore {
  _item: { [key in AgentKey]: Agent } = {};
  constructor() {
    makeObservable(this, {
      _item: observable,
      setItem: action
    });
  }

  async fetchAgent(id: string) {
    const { data } = await fetchAgent(id);
    this.setItem(id, data)
  }

  setItem(key:AgentKey, item: Agent) {
    this._item[key] = item;
  }

  getItem(key: AgentKey): Agent | undefined {
    const item = this._item[key];
    if(!item) return
    return item
  }
}
