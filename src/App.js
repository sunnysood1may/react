import "./App.css";
import React from "react";
import { Link, Route, Routes  } from "react-router-dom";
import User from "./User";

function App() {
  let users=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <h1>React Dynamic Routing</h1>
      {
        users.map((item)=>
          <div>
            <Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link>
          </div>
        )
      }
      <Routes>
        <Route path="/user/:id/:name" element={<User />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;