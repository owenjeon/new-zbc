import { observer } from "mobx-react-lite";
import React from "react";
import { useDetailStore } from "../context";

const Subway = observer(() => {
  const {
    subwayStore: { item }
  } = useDetailStore();

  return (
    <ul>
      {item.map((item, i) => (
        <li key={i}>
          {item.name} {item.description}
        </li>
      ))}
    </ul>
  );
});

export default Subway;
