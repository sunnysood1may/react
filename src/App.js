import "./App.css";
import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          
          <Route path="/contact" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>


          {/*<Route path="/*" element={<Page404 />} />*/}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
