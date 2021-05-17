import React from "react";
import ReactDOM from "react-dom";
import DetailScreen from "./screens/detail/view";
import { RootProvider } from "./store";

function App() {
  return (
    <RootProvider>
      <DetailScreen id="27160628" />
      <DetailScreen id="27160627" />
    </RootProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
