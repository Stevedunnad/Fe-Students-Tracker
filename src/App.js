import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import GraduateList from "./components/GraduateList";
import Blocks from "./components/Blocks";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Nav />
      <Router>
        <Home path="/" />
        <StudentList path="/students" />
        <GraduateList path="/graduates" />
        <Blocks path="/blocks" />
      </Router>
    </div>
  );
}

export default App;
