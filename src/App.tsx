import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const w = document.createElement("canvas").getContext("webgl");
  const d = w?.getExtension("WEBGL_debug_renderer_info");
  const g = (d && w?.getParameter(d.UNMASKED_RENDERER_WEBGL)) || "";
  return <div className="App">{g}</div>;
}

export default App;
