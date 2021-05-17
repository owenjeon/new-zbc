import React from "react";
import { observer } from "mobx-react-lite";
import { useDetailStore } from "../context";
import useUiStore from "../../../store/ui/uiHook";

const Item = observer(() => {
  const uiStore = useUiStore();
  const {
    itemStore: { item, fullAddress },
    pyeong
  } = useDetailStore();
  if (!item) return null;
  return (
    <>
      <div>service_type: {item.service_type}</div>
      <div>{fullAddress}</div>
      <div>면적 타입: {pyeong} </div>
      <div>
        <button onClick={() => uiStore.togglePyeong()}>면적 토클</button>
      </div>
      <img src={`${item.image_thumbnail}?w=200&h=120`} alt="썸네일" />
    </>
  );
});

export default Item;
