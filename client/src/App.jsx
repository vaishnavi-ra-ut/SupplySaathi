import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Clusters from "./components/Clusters";
import Footer from "./components/Footer";
import Supplier from "./components/Supplier";
import AuthPage from "./pages/AuthPage";
import Navbar from "./pages/Navbar";
import Trips from "./components/Trips";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      {/* Show Navbar & Footer only if logged in */}
      {token && <Navbar />}

      <Routes>
        {/* Public Route */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/clusters"
          element={
            <RequireAuth>
              <Clusters />
            </RequireAuth>
          }
        />
        <Route
          path="/supplier"
          element={
            <RequireAuth>
              <Supplier />
            </RequireAuth>
          }
        />
        <Route
          path="/trips"
          element={
            <RequireAuth>
              <Trips />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>

      {token && <Footer />}
    </>
  );
}
