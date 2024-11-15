// src/routes/allRoute.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from '../pages/CounterPage';
import UsersPage from '../pages/UserPage';
import HomePage from '../pages/HomePage';

const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
