import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route exact path="/home" element={<Header />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;