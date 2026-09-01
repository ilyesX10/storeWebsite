import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
function App() {
  const { theme } = useContext(ThemeContext)
  const [isSingin,setIsSingin]=useState(false);
  return (
    <div className={`${theme === "dark" ? "dark" : ""} bg-[var(--background)] text-[var(--foreground)] relative`}>
      <Router>
        <Navbar isSingin={isSingin} setIsSingin={setIsSingin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login isSingin={isSingin} setIsSingin={setIsSingin} />} />
          <Route path="*" element={<h1 className="text-2xl font-bold mt-30 text-center">Page Not Found 404</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
