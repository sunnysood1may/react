import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  function saveData(){
    let data = {name,email,mobile};
    fetch("https://jsonplaceholder.typicode.com/users/add",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
    }).then((resp)=>{
        resp.json().then((result)=>{
            console.log("result",result);
        })
    })
  }

  return (
    <div>
      <h2>Add User</h2>
      <Link className="nav-bar-link" to="/users/listing">
        Users Listing
      </Link><br /><br />
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" /><br /><br />
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" /><br /><br />
      <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile" /><br /><br />
      <button type="button" onClick={saveData}>Add User</button>
    </div>
  );
}

export default Add;
