import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import MovieDetail from './pages/MovieDetail';
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/login" element={<LoginPage />} /> {/* Add Login Page Route */}
      </Routes>
    </Router>
  );
}

export default App;
