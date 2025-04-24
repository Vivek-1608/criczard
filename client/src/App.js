// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CommentaryPage from './pages/CommentaryPage'; // This will be your existing live commentary UI
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commentary/:matchId" element={<CommentaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;