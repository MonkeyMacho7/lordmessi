import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import Auth Context
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import LiveScores from "./pages/LiveScores";
import Stats from "./pages/Stats";
import Highlights from "./pages/Highlights";
import Login from "./pages/Login"; // Import Login Page
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* Navigation Bar */}
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Messi</Link>
            <Link to="/stats">Stats</Link> 
            <Link to="/livescores">Messi's Matchday</Link>
            <Link to="/highlights">Highlights</Link>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stats" element={<Stats />} />
            <Route 
              path="/livescores" 
              element={<ProtectedRoute><LiveScores /></ProtectedRoute>} 
            />
            <Route path="/highlights" element={<Highlights />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
