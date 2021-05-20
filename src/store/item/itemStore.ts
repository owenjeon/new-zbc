import { action, computed, makeObservable, observable } from "mobx";

type ItemKey = string;
type Item = { [key: string]: string }

abstract class ContentStore<ID> {
  itemIdMap: {[key: string]: ID} = {}
  itemIdsMap: {[key: string]: ID[]} = {}

  addItemId = (key: string, value: ID) => {
    this.itemIdMap[key] = value
  }

  addItemIds = (key: string, value: ID[]) => {
    this.itemIdsMap[key] = value
  }

  getItemId = (key: string) => {
    return this.itemIdMap[key]
  }

  getItemIds = (key: string) => {
    return this.itemIdMap[key]
  }

  removeAllKey(key: string) {
    delete this.itemIdMap[key]
    delete this.itemIdsMap[key]
  }
}

export default class ItemStore extends ContentStore<ItemKey>{
  _item: { [key in ItemKey]: Item } = {};
  
  constructor() {
    super()
    makeObservable(this, {
      _item: observable,
      setItem: action,
      item: computed,
    });
  }

  setItem = (key:ItemKey, item: Item) => {
    this._item = {...this._item, [key]: item};
  }

  get item () {
    return this._item;
  }

  getItem = (key: ItemKey) => {
    return this._item[key];
  }

}
