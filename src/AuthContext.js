import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (username, password) => {
        if (username === "test" && password === "password") { 
            setUser({ username });
            localStorage.setItem("user", JSON.stringify({ username })); 
            navigate("/livescores"); 
        } else {
            alert("Invalid credentials. Try 'test' / 'password'.");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
