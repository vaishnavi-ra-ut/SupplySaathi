// src/components/RequireAuth.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    } else {
      setChecking(false);
    }
  }, [token, navigate]);

  // Prevent flicker before redirect
  if (checking && !token) return null;

  return children;
};

export default RequireAuth;
