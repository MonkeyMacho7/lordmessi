import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import LiveScores from "./pages/LiveScores";
import Stats from "./pages/Stats";
import Highlights from "./pages/Highlights";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
    return (
        <Router> 
            <AuthProvider> 
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Messi</Link>
                    <Link to="/stats">Stats</Link>
                    <Link to="/livescores">Messi's Matchday</Link>
                    <Link to="/highlights">Highlights</Link>
                    <Link to="/login">Login</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/login" element={<Login />} />

                    {/* 🔒 Protected Routes */}
                    <Route path="/livescores" element={<PrivateRoute element={<LiveScores />} />} />
                    <Route path="/highlights" element={<PrivateRoute element={<Highlights />} />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
