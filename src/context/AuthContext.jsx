import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import toast from "react-hot-toast";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate(); // 2. Initialize the navigate hook

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    toast.success("Login Successful");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    // 3. Force the app to send the user back to the Home page immediately
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
