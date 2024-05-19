import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;