import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
    	<div className="login-container">
    	<h2 className="login-title">Login</h2>
   		 <p className="login-subtitle">
        Please enter your credentials to access the site.
    </p>
    <form onSubmit={handleSubmit} className="login-box">
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
    </form>
</div>

    );
};

export default Login;
