import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { JokesPage } from './pages/JokesPage';

export default function AppRouter() {

  return (
    <Routes>
      <Route path="/jokes_page" element={<JokesPage />} />
      <Route path="/about_page" element={<AboutPage />} />
      <Route path="*" exact element={<Navigate to="/jokes_page" />} />
    </Routes>
  )
}
