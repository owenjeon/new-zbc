import React from "react";
import ReactDOM from "react-dom";
import OfficetelDetailScreen from "./screens/officetelDetail/view";
import OneRoomDetailScreen from "./screens/oneRoomDetail";
import { RootProvider } from "./store";

function App() {
  return (
    <RootProvider>
      <OneRoomDetailScreen id="27224031" />
      <OfficetelDetailScreen id="27276109" />
      <OfficetelDetailScreen id="27160627" />
    </RootProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
