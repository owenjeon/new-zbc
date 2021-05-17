import { action, makeObservable, observable } from "mobx";

export default class UiStore {
  isPyeong = false;
  constructor() {
    makeObservable(
      this,
      {
        isPyeong: observable,
        togglePyeong: action
      },
      { autoBind: true }
    );
  }

  togglePyeong() {
    this.isPyeong = !this.isPyeong;
  }
}
