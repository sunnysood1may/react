import "./App.css";
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState("1000");
  return (
    <div className="App">
      <h1>Controlled Component </h1>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />{" "}
      <br />
      <h2>Value: {val}</h2>
    </div>
  );
}

export default App;
