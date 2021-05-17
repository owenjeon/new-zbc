import { action, computed, makeObservable, observable } from "mobx";

export default class ItemStore {
  _item: { [key: string]: string } | undefined = undefined;
  constructor() {
    makeObservable(this, {
      _item: observable,
      setItem: action,
      item: computed,
      fullAddress: computed
    });
  }

  setItem(item: { [key: string]: string }) {
    this._item = item;
  }

  get item() {
    return this._item;
  }

  get fullAddress() {
    if (!this._item) return;
    return `${this._item.local1} ${this._item.local2} ${this._item.local3} ${this._item.jibunAddress}`;
  }
}
