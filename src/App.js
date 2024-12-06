import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./User";
import Student from "./Student";
import './style.css';
import style from './custom.module.css';
import { Button, Alert, Table} from 'react-bootstrap';

function App() {
  const users = [
    {
      name:'sunny',email:'sunny@test.com',phone:700912
    },
    {
      name:'shilpa',email:'shilpa@test.com',phone:111
    },
    {
      name:'shobhit',email:'shobhit@test.com',phone:1131
    }
  ];
  
  return (
    <div className="App">   
      <h1>Reuse Component with List</h1>
          {
            users.map((item,i)=>         
              <User data={item} />   
            )
          }     
        
    </div>
  );
}

export default App;
