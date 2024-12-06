import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Fragment } from "react";
import User from "./User";
import Student from "./Student";
import "./style.css";
import style from "./custom.module.css";
import { Button, Alert, Table } from "react-bootstrap";
import Cols from "./Col";

function App() {
  //let data = "sunny sood";
  function getName(data){
    alert(data);
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}

export default App;
