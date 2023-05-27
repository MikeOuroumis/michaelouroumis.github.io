import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  )
}

export default AppRouter
