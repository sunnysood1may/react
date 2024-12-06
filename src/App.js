import logo from "./logo.svg";
import "./App.css";
import React, {  useRef } from "react";
import "./style.css";

function App() {
    let inputRef = useRef(null);
    function handleInput(){
      console.log("function call");
      inputRef.current.value=1000;
      inputRef.current.style.color = "yellow";
      inputRef.current.focus();
      inputRef.current.style.display = "none";
    }
    return (
      <div className="App">
        <h1>useRef in React </h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>Handle Input</button>
      </div>
    );
}

export default App;
