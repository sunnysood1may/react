import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Fragment, 
  useMemo, createRef } from "react";
import User from "./User";
import Student from "./Student";
import "./style.css";
import style from "./custom.module.css";
import { Button, Alert, Table } from "react-bootstrap";
import Cols from "./Col";
import Counter from "./Counter";

class App extends React.Component {
  constructor(){
    super();
    this.inputRef=createRef();
  }
  componentDidMount(){
    //console.log(this.inputRef.current.value="1000");
  }
  getVal(){
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "yellow";
  }
  render (){
    return (
      <div className="App">
        <h1>Ref in React </h1>
        <input type="text" ref={this.inputRef} /><br />
        <Button onClick={()=>this.getVal()}>Check Ref</Button>
      </div>
    );
  }
  
}

export default App;
