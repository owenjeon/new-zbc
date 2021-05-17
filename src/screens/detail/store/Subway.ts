import { action, computed, makeObservable, observable } from "mobx";

export default class SubwayStore {
  _item: any[] = [];
  constructor() {
    makeObservable(this, {
      _item: observable,
      setItem: action,
      item: computed
    });
  }

  setItem(item: any[]) {
    this._item = item;
  }

  get item() {
    return this._item;
  }
}
