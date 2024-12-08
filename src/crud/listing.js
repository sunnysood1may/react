import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Listing() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    getUsers();  
  }, []);

  function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
        result.json().then((resp) => {
          //console.log("result", resp);
          setUser(resp);
          setName(resp[0].name);
          setEmail(resp[0].email);
          setPhone(resp[0].phone);
          setUserId(resp[0].id);
        });
    });
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        //console.warn(resp);
        getUsers();
      })
    })
  }

  function selectUser(id) {
    let item  = users[id-1]; console.log(item);
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setUserId(item.id);
  }

  function updateUser() {
    let item = {name,email,phone,userId};
    console.log(item);
    fetch(`https://jsonplaceholder.typicode.com/todo/${userId}`, {
        method: 'PUT',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
        },
        body:JSON.stringify(item)
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
          getUsers()
        })
      })

  }

  return (
    <div>
      <h2>Users Listing</h2> 
      <Link className="nav-bar-link" to="/users/add">Add User</Link>
      <table border="1" align="left">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Operations</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td><button onClick={() => deleteUser(item.id)}>delete</button></td>
              <td><button onClick={() => selectUser(item.id)}>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br /><br />
        <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} /><br /><br />
        <button onClick={updateUser}>Update user</button>
        </div>


    </div>
  );
}

export default Listing;