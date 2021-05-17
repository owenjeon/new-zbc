import { action, makeObservable, observable } from "mobx";

type ItemKey = string;
type Item = { [key: string]: string }

export default class ItemStore {
  _item: { [key in ItemKey]: Item } = {};
  constructor() {
    makeObservable(this, {
      _item: observable,
      setItem: action
    });
  }

  setItem(key:ItemKey, item: Item) {
    this._item[key] = item;
  }

  getItem(key: ItemKey): Item | undefined {
    const item = this._item[key];
    if(!item) return
    return {...item, fullAddress: this.getFullAddress(item)}
  }

  getFullAddress(item: Item) {
    return `${item.local1} ${item.local2} ${item.local3} ${item.jibunAddress}`;
  }
}
