import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import Blocks from "./components/Blocks";
import Title from "./components/Title";

function App() {

  return (
    <div className="App">
      <Nav />
      <Title />
      <Router>
        <Home path="/" />
        <StudentList path="/students" />
        <StudentList path="/students/:sort_by" />
        <Blocks path="/blocks" />
      </Router>
    </div>
  );
}

export default App;
