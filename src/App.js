import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Fragment, useMemo } from "react";
import User from "./User";
import Student from "./Student";
import "./style.css";
import style from "./custom.module.css";
import { Button, Alert, Table } from "react-bootstrap";
import Cols from "./Col";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const newApple=React.useMemo(
    function appleTime(){
      return count*5;
    },[count]
  )
  
  return (
    <div className="App">
      <h1>Hooks in React {count}</h1>
      <h1>{newApple}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}

export default App;
