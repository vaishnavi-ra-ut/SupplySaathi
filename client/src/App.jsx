import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Clusters from "./pages/Clusters";
import Suppliers from "./pages/Suppliers";
import Navbar from "./pages/Navbar";
import { useSelector } from "react-redux";
import './index.css';
import Footer from "./pages/Footer";

export default function App() {
  const user = useSelector((s) => s.user.user);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <AuthPage />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
        <Route path="/clusters" element={user ? <Clusters /> : <Navigate to="/" />} />
        <Route path="/suppliers" element={user ? <Suppliers /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
