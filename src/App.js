import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Fragment } from "react";
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
    this.state={
      count:1
    }
  }
  render(){
    return (
      <div className="App">
        <Counter count={this.state.count} />
       <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update count</button>
      </div>
    );
  }
  
}

export default App;
