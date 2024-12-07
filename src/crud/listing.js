import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Listing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((resp) => {
        console.log("result", resp);
        setData(resp);
      });
    });
  }, []);

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
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listing;