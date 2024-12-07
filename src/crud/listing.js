import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Listing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();  
  }, []);

  function getUsers(){
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
        result.json().then((resp) => {
          console.log("result", resp);
          setData(resp);
        });
    });
  }

  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/todo/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getUsers();
      })
    })
  }

  return (
    <div>
      <h2>Users Listing</h2> 
      <Link className="nav-bar-link" to="/users/add">Add User</Link>
      <table border="1" align="center">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Delete</td>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td><button onClick={() => deleteUser(item.id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listing;