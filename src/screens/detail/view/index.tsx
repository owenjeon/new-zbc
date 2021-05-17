import React from "react";
import DetailScreenModel from "../store";
import { DetailProvider } from "../context";
import Agent from "./Agent";
import Item from "./Item";
import Subway from "./Subway";
import { useRootStore } from "../../../store";

const DetailScreen = ({ id }: { id: string }) => {
  const rootStore = useRootStore();
  const store = React.useRef(new DetailScreenModel(rootStore, id));

  React.useEffect(() => {
    store.current.fetchItem();
  }, []);
  return (
    <DetailProvider value={store.current}>
      <Item />
      <Agent />
      <Subway />
      <hr />
    </DetailProvider>
  );
};

export default DetailScreen;
