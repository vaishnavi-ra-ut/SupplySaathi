import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Clusters from './components/Clusters';
import Footer from './components/Footer';
import Supplier from './components/Supplier';
import AuthPage from "./pages/AuthPage";
import Navbar from './pages/Navbar';
import Trips from './components/Trips';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clusters" element={<Clusters />} />
        <Route path="/supplier" element={<Supplier />} />
         <Route path="/auth" element={<AuthPage />} />
         <Route path="/trips" element={<Trips />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  );
}
