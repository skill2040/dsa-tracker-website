import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContributionBoard from "./pages/contibutionboard/ContributionBoard";
import Solution from "./pages/solution/Solution";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Signup from "./pages/auth/Signup";
import { AuthProvider } from "./pages/auth/AuthContext";
import PrivateRoute from "./pages/auth/PrivateRoute";
import Dashboard from "./pages/auth/Dashboard";
import Login from "./pages/auth/Login";
import AddNotes from "./components/addnotes/AddNotes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Leaderboard from "./pages/profile/components/leaderboard/Leaderboard";
import Loading from "./components/loading/Loading";
import LoadingComponent from "./components/loading/LoadingComponent";

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
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/contribution" element={<ContributionBoard />} />
            <Route path="/addnotes" element={<AddNotes />} />
            {/* <Route path="/loading" element={<LoadingComponent />} /> */}

            <Route
              path="/solution"
              element={<Solution problemName={"Kadane's Algorithm"} />}
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </AuthProvider>
      </Router>
      <ToastContainer position="top-right" style={{ zIndex: 9999999 }} />
    </div>
  );
}

export default App;
