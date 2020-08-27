import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Home from "./components/Home";
import Nav from "./components/Nav";
import StudentList from "./components/StudentList";
import Blocks from "./components/Blocks";
import Title from "./components/Title";
import GraduateList from './components/GraduateList';

function App() {

  return (
    <div className="App">
      <Nav />
      <Title />
      <Router>
        <Home path="/" />
        <StudentList path="/students" />
        <GraduateList path="/graduates/" />
        <Blocks path="/blocks" />
      </Router>
    </div>
  );
}

export default App;
