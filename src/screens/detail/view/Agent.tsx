import { observer } from "mobx-react-lite";
import React from "react";
import { useDetailStore } from "../context";

const Agent = observer(() => {
  const { agent } = useDetailStore();

  if (!agent) return null;
  return <div>{agent.title}</div>;
});

export default Agent;
