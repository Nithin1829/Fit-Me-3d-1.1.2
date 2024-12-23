import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import ARView from './pages/ARView'; // Import ARView

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arview" element={<ARView />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;