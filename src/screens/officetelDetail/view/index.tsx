import React from "react";
import DetailScreenModel from "../store";
import { DetailProvider } from "../context";
import Item from "../../../container/Item";
import useViewModel from "../../../hooks/useViewModel";
import ScreenKeyStore, { ScreenKeyProvider } from "../../../store/screenKey/screenKeyStore";
import { useLocalObservable } from "mobx-react-lite";

const DetailScreen = ({ id }: { id: string }) => {
  const keyStore = useLocalObservable(() => new ScreenKeyStore())
  const store = useViewModel(DetailScreenModel, keyStore, id)
  React.useEffect(() => {
    store.fetchItem();
  }, []);
  return (
    <ScreenKeyProvider value={keyStore}>
      <DetailProvider value={store}>
        <Item />
        {/* <Agent />
        <Subway /> */}
        <hr />
      </DetailProvider>
    </ScreenKeyProvider>
  );
};

export default DetailScreen;
