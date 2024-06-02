import logo from './logo.svg';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContributionBoard from './pages/contibutionboard/ContributionBoard';
import SolutionPage from './pages/solutionpage/SolutionPage';
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import { Analytics } from "@vercel/analytics/react";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./pages/auth/AuthContext";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Dashboard from "./pages/auth/Dashboard";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contribution" element={<ContributionBoard />} />
          <Route path="/solution" element={<SolutionPage problemName={"Kadane's Algorithm"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
