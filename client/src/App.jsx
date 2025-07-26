import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Clusters from './components/Clusters';
import Footer from './components/Footer';
import Header from './components/Header';
import Suppliers from './components/Supplier';

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clusters" element={<Clusters />} />
        <Route path="/supplier" element={<Suppliers />} />
      </Routes>

      <Footer />
    </>
  );
}
