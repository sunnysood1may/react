import "./App.css";
import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Page404 from "./component/Page404";
import User from "./component/User";
import Filter from "./component/filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Other from "./component/Other";
import Channel from "./component/Channel";
import Login from "./component/Login";
import Protected from "./component/Protected";
import Listing from "./crud/listing";
import Add from "./crud/add";
import PreviousState from "./crud/previousState";
import PreviousProps from "./crud/previousProps";
import StateObject from "./crud/stateObject";
function App() {
  return (
    <div className="App">
      
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />

          { /*<Route path="/" element={<Home />} />*/ }
          <Route path="/" element={<Protected Component={Home} />} />
          
          { /*<Route path="/about" element={<c />} />*/ }
          <Route path="/about" element={<Protected Component={About} />} />



          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          
          <Route path="/contact" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>


          {/*<Route path="/*" element={<Page404 />} />*/}
          <Route path="/*" element={<Navigate to="/" />} />


          <Route path="/users/listing" element={<Listing />} />
          
          <Route path="/users/add" element={<Add />} />

          <Route path="/previousState" element={<PreviousState />} />
          <Route path="/previousProps" element={<PreviousProps />} />
          <Route path="/stateObject" element={<StateObject />} />

        </Routes>
      
    </div>
  );
}

export default App;