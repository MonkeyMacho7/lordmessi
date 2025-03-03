import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";  
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LiveScores from "./pages/LiveScores";
import Stats from "./pages/Stats";
import Highlights from "./pages/Highlights";
import "./App.css";

function App() {
  return (
    <AuthProvider> {}
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
            <Route path="/livescores" element={<LiveScores />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
