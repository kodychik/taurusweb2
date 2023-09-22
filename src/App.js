import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Trading from './components/Trading';
import Logistics from './components/Logistics';
import CodeOfConduct from './components/CodeOfConduct';
import Careers from './components/Careers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, {useState} from "react";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="/about" element={<><About/></>} />
        <Route path="/trading" element={<><Trading/></>} />
        <Route path="/logistics" element={<><Logistics/></>} />
        <Route path="/codeofconduct" element={<><CodeOfConduct/></>} />
        <Route path="/careers" element={<><Careers/></>} />
      </Routes>
    </Router>
  );
}

export default App;
