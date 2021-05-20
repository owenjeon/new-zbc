import React from "react";
import OneRomDetailScreenModel from "./ViewModel";
import { OneRomDetailProvider } from "./context";
import Item from "../../container/Item";
import useViewModel from "../../hooks/useViewModel";
import ScreenKeyStore, { ScreenKeyProvider } from "../../store/screenKey/screenKeyStore";
import { useLocalObservable } from "mobx-react-lite";

const OneRoomDetailScreen = ({ id }: { id: string }) => {
  const keyStore = useLocalObservable(() => new ScreenKeyStore())
  const store = useViewModel(OneRomDetailScreenModel, keyStore, id)
  React.useEffect(() => {
    store.fetchItem();
  }, []);
  return (
    <ScreenKeyProvider value={keyStore}>
      <OneRomDetailProvider value={store}>
        <div style={{backgroundColor: "#ccc" }}>
          <Item />
          <hr />
        </div>
      </OneRomDetailProvider>
    </ScreenKeyProvider>
  );
};

export default OneRoomDetailScreen;
