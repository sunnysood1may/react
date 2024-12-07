import './App.css';
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Nav from './component/Nav';
import Home from './component/Home';
import About from './component/About';
function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes> 
    </div>
  );
}

export default App;