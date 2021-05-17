import { computed, makeObservable, observable } from "mobx";
import { fetchAgent } from "../../../service";

export default class AgentStore {
  _agent: any = undefined;
  constructor() {
    makeObservable(this, {
      _agent: observable,
      agent: computed,
      agentTitle: computed
    });
  }

  async fetchAgent(id: string) {
    const { data } = await fetchAgent(id);
    this._agent = data.item;
  }

  get agent() {
    return this._agent;
  }

  get agentTitle() {
    if (!this._agent) return;
    return `중개사: ${this._agent.agent_name} (${this._agent.user_name})`;
  }
}
