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
  return (
    <div>
      <h1>React Component</h1>
      <table>
        <tbody>
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
        </tbody>
      </table>
    </div>
  );
}

export default App;
