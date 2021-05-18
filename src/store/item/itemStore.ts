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

  getItem(key: ItemKey) {
    return this._item[key];
  }

}
