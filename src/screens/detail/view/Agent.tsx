import { observer } from "mobx-react-lite";
import React from "react";
import { useDetailStore } from "../context";

const Agent = observer(() => {
  const {
    agentStore: { agentTitle }
  } = useDetailStore();

  if (!agentTitle) return null;
  return <div>{agentTitle}</div>;
});

export default Agent;
