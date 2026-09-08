import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserDashboard from './pages/UserDashboard';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${theme === "dark" ? "dark" : ""} bg-[var(--background)] text-[var(--foreground)] relative`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="*" element={<h1 className="text-2xl font-bold mt-30 text-center">Page Not Found 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
