import { useState } from "react";
import { users } from "../data/users";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const login = (username, password) => {
    const found = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (!found) return false;

    localStorage.setItem("user", JSON.stringify(found));

    setUser(found);
    return found;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
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
};
