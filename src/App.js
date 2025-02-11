import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Stats from "./pages/Stats";
import Highlights from "./pages/Highlights";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About Messi</Link>
          <Link to="/stats">Live Stats</Link> 
          <Link to="/highlights">Highlights</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/highlights" element={<Highlights />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
