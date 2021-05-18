import React from "react";
import DetailScreenModel from "../store";
import { DetailProvider } from "../context";
import Agent from "./Agent";
import Item from "./Item";
import Subway from "./Subway";
import useViewModel from "../../../hooks/useViewModel";

const DetailScreen = ({ id }: { id: string }) => {
  const store = useViewModel(DetailScreenModel, id)
  React.useEffect(() => {
    store.fetchItem();
  }, []);
  return (
    <DetailProvider value={store}>
      <Item />
      <Agent />
      <Subway />
      <hr />
    </DetailProvider>
  );
};

export default DetailScreen;
