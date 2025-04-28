import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MyTasks from './Components/MyTasks';

import './App.css';
const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/my-tasks" element={<MyTasks />} />
        </Routes>
      </Router>
    );
  };
export default App;