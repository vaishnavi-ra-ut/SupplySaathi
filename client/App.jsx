import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./src/pages/AuthPage";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
