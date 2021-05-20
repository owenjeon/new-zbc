import React from "react";
import { observer } from "mobx-react-lite";
import useUiStore from "../store/ui/uiHook";
import useScreenSelector, { ItemDetailSelector } from "../store/item/selector";

const Item = observer(() => {
  const { togglePyeong, isPyeong } = useUiStore();
  const item = useScreenSelector(ItemDetailSelector)
  if (!item) return null;
  return (
    <div style={{padding: 10}}>
      <div>service_type: {item.service_type}</div>
      <div>면적 타입: {isPyeong ? "평" : "m2"} <button onClick={togglePyeong}>면적 토클</button></div>
      <img src={`${item.image_thumbnail}?w=200&h=120`} alt="썸네일" />
    </div>
  );
});

export default Item;

// screen에 필요한 로직을 주입 받을 수 있는 방법???
